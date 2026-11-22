
(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme');
  const menuButton = document.getElementById('menu');
  const nav = document.getElementById('navlinks');
  try {
    const saved = localStorage.getItem('pm-theme');
    if (saved === 'dark') root.dataset.theme = 'dark';
  } catch (_) {}
  themeButton?.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark'; else delete root.dataset.theme;
    try { localStorage.setItem('pm-theme', dark ? 'dark' : 'light'); } catch (_) {}
  });
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));
})();
