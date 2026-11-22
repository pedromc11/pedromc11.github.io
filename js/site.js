(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('theme');
  const menuButton = document.getElementById('menu');
  const nav = document.getElementById('navlinks');

  // Restore the visitor's theme preference.
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') root.dataset.theme = 'dark';
  } catch (_) {}

  const syncThemeButton = () => {
    const dark = root.dataset.theme === 'dark';
    themeButton?.setAttribute('aria-pressed', String(dark));
    themeButton?.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
  };
  syncThemeButton();

  themeButton?.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch (_) {}
    syncThemeButton();
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

  // Subtle scroll reveals; content remains visible when reduced motion is preferred.
  const motionOff = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!motionOff && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.section-head, .about-aside, .about-copy, .timeline-card, .skillbox, .project, .cert, .contact'
    );
    revealTargets.forEach(el => el.classList.add('reveal-on-scroll'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealTargets.forEach(el => observer.observe(el));
  }

  // Thin cinematic reading-progress indicator.
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);
  let ticking = false;
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });
  updateProgress();
})();
