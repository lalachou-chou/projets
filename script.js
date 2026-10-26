/* La liste fixe les fichiers et leur ordre. Le contenu des cartes vient du HTML.
   Aucun HTML de projet n'est injecté dans la page d'accueil. */
(() => {
  'use strict';
  const root = new URL('./', window.location.href);
  const list = document.getElementById('projects');
  const status = document.getElementById('project-status');
  const count = document.getElementById('project-count');
  const retry = document.getElementById('retry');
  const filePattern = /^[a-z0-9][a-z0-9_-]*\.html$/;
  const text = (doc, selector, required = false) => {
    const value = doc.querySelector(selector)?.textContent.trim() || '';
    if (required && !value) throw new Error('Champ obligatoire absent');
    return value;
  };
  function safeUrl(value, base, image = false) {
    if (!value || !value.trim()) return null;
    try {
      const url = new URL(value, base);
      if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
      if (image && (url.origin !== root.origin || !url.pathname.startsWith(new URL('images/', root).pathname) || !/\.(svg|png|jpe?g|webp|avif)$/i.test(url.pathname))) return null;
      return url.href;
    } catch { return null; }
  }
  async function fetchResource(url, type) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(url, { signal: controller.signal, credentials: 'same-origin', cache: 'no-cache', redirect: 'error' });
      if (!response.ok) throw new Error('Ressource indisponible');
      return await response[type]();
    } finally { clearTimeout(timeout); }
  }
  async function readProject(filename) {
    const url = new URL(`projet/${filename}`, root);
    const html = await fetchResource(url, 'text');
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const picture = doc.querySelector('[data-project-image]');
    const image = safeUrl(picture?.getAttribute('src'), url, true);
    if (picture && !image) throw new Error('Image invalide');
    return {
      url: url.href,
      title: text(doc, '[data-project-title]', true),
      summary: text(doc, '[data-project-summary]', true),
      contribution: text(doc, '[data-project-contribution]', true),
      label: text(doc, '[data-project-label]') || 'Projet personnel',
      tags: [...doc.querySelectorAll('[data-project-tag]')].map(el => el.textContent.trim()).filter(Boolean).slice(0, 6),
      image, alt: picture?.getAttribute('alt') || '',
      containImage: picture?.getAttribute('data-project-image-fit') === 'contain',
      external: safeUrl(doc.querySelector('[data-project-link]')?.getAttribute('href'), url)
    };
  }
  function element(tag, className, content) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content !== undefined) el.textContent = content;
    return el;
  }
  function action(label, url, arrow, external = false) {
    const link = element('a', 'text-link', label);
    link.href = url;
    const icon = element('span', '', arrow);
    icon.setAttribute('aria-hidden', 'true');
    link.append(icon);
    if (external) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    return link;
  }
  function renderProject(project, index) {
    const card = element('article', 'project-card');
    const titleId = `projet-${index + 1}`;
    card.setAttribute('aria-labelledby', titleId);
    if (project.image) {
      const visual = element('a', 'project-visual');
      visual.href = project.url;
      visual.tabIndex = -1;
      visual.setAttribute('aria-hidden', 'true');
      const img = element('img');
      if (project.containImage) img.classList.add('project-image-contain');
      img.src = project.image;
      img.alt = project.alt;
      img.width = 1000;
      img.height = 620;
      img.loading = index === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      visual.append(img);
      card.append(visual);
    } else {
      card.classList.add('project-card-without-image');
    }
    const copy = element('div', 'project-copy');
    const label = element('p', 'project-index');
    label.append(element('span', '', String(index + 1).padStart(2, '0')), element('span', '', `/ ${project.label}`));
    const heading = element('h2');
    heading.id = titleId;
    const title = element('a', 'project-title-link', project.title);
    title.href = project.url;
    heading.append(title);
    const tags = element('ul', 'project-tags');
    tags.setAttribute('aria-label', 'Thèmes du projet');
    project.tags.forEach(tag => tags.append(element('li', '', tag)));
    const links = element('div', 'project-actions');
    links.append(action('Voir le détail', project.url, '→'));
    if (project.external) links.append(action('Ouvrir le projet', project.external, '↗', true));
    copy.append(label, heading, tags, element('p', 'project-summary', project.summary), element('p', 'contribution-label', 'Ma contribution'), element('p', 'project-contribution', project.contribution), links);
    card.append(copy);
    return card;
  }
  async function loadProjects() {
    retry.hidden = true;
    list.setAttribute('aria-busy', 'true');
    status.textContent = 'Chargement des projets…';
    list.replaceChildren();
    count.textContent = '';
    try {
      const manifest = await fetchResource(new URL('projets.json', root), 'json');
      if (!Array.isArray(manifest) || manifest.some(name => typeof name !== 'string' || !filePattern.test(name))) throw new Error('Liste invalide');
      const filenames = [...new Set(manifest)];
      const results = [];
      // Six lectures simultanées au maximum, même lorsque la galerie grandit.
      for (let i = 0; i < filenames.length; i += 6) results.push(...await Promise.allSettled(filenames.slice(i, i + 6).map(readProject)));
      const projects = results.filter(result => result.status === 'fulfilled').map(result => result.value);
      const failed = results.length - projects.length;
      if (filenames.length && !projects.length) throw new Error('Aucun projet disponible');
      list.replaceChildren(...projects.map(renderProject));
      count.textContent = projects.length ? `01 — ${String(projects.length).padStart(2, '0')}` : '00';
      count.setAttribute('aria-label', `${projects.length} projet${projects.length > 1 ? 's' : ''}`);
      status.textContent = failed ? 'Certains projets n’ont pas pu être affichés.' : projects.length ? '' : 'Les prochains projets arrivent bientôt.';
      retry.hidden = !failed;
    } catch {
      status.textContent = 'Les projets n’ont pas pu être chargés. Veuillez réessayer.';
      retry.hidden = false;
    } finally { list.setAttribute('aria-busy', 'false'); }
  }
  retry.addEventListener('click', loadProjects);
  loadProjects();
})();
