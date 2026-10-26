/* Agrandissement local des images ; les liens restent utilisables sans JavaScript. */
(() => {
  'use strict';
  const triggers = document.querySelectorAll('a[data-image-modal]');
  if (!triggers.length || typeof HTMLDialogElement === 'undefined' ||
      typeof HTMLDialogElement.prototype.showModal !== 'function') return;

  const imageRoot = new URL('images/', document.currentScript.src);
  const dialog = document.createElement('dialog');
  dialog.className = 'image-modal';
  dialog.setAttribute('aria-labelledby', 'image-modal-title');
  const header = document.createElement('div');
  header.className = 'image-modal-header';
  const title = document.createElement('h2');
  title.id = 'image-modal-title';
  title.textContent = 'Aperçu de l’image';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'button image-modal-close';
  close.textContent = 'Fermer ×';
  close.autofocus = true;
  const picture = document.createElement('img');
  const caption = document.createElement('p');
  caption.className = 'image-modal-caption';
  header.append(title, close);
  dialog.append(header, picture, caption);
  document.body.append(dialog);
  let opener = null;

  triggers.forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href);
      if (url.username || url.password || url.origin !== imageRoot.origin || !url.pathname.startsWith(imageRoot.pathname) ||
          !/\.(png|jpe?g|webp|avif|svg)$/i.test(url.pathname)) return;
      event.preventDefault();
      const source = link.querySelector('img') || link.closest('figure')?.querySelector('img');
      picture.src = url.href;
      picture.alt = source?.alt || 'Image du projet';
      caption.textContent = picture.alt;
      opener = link;
      dialog.showModal();
      document.body.classList.add('image-modal-open');
    });
  });

  close.addEventListener('click', () => dialog.close());
  // Fermer est le seul contrôle interactif de cette modale.
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      close.focus();
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('image-modal-open');
    picture.removeAttribute('src');
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
})();
