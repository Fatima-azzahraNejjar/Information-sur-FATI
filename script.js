document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.menu-toggle');

  if (!menu || !toggle) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') menu.classList.remove('open');
  });
});