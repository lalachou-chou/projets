(() => {
  'use strict';
  const reveal = document.getElementById('reveal-email');
  const details = document.getElementById('email-details');
  const email = document.getElementById('contact-email');
  const copy = document.getElementById('copy-email');
  const status = document.getElementById('contact-status');
  if (!reveal || !details || !email || !copy || !status) return;

  reveal.hidden = false;
  reveal.addEventListener('click', () => {
    // Simple obstacle à la collecte basique, pas une protection d’accès.
    email.textContent = ['clara','.', 'matarasso', '@', 'gmail', '.com'].join('');
    details.hidden = false;
    reveal.setAttribute('aria-expanded', 'true');
    reveal.hidden = true;
    email.focus();
  });
  copy.addEventListener('click', async () => {
    if (!email.textContent) return;
    try {
      await navigator.clipboard.writeText(email.textContent);
      status.textContent = 'Adresse copiée.';
    } catch {
      status.textContent = 'La copie automatique est indisponible. Sélectionnez l’adresse pour la copier.';
    }
  });
})();
