/* ── Stars ── */
(function () {
  const container = document.getElementById('stars');
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --duration:${2 + Math.random() * 4}s;
      --delay:${Math.random() * 6}s;
      --max-opacity:${.3 + Math.random() * .7};
      width:${1 + Math.random() * 2}px;
      height:${1 + Math.random() * 2}px;
    `;
    container.appendChild(s);
  }
})();

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ── Mobile burger ── */
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
burger.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav__links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* ── Scroll-in fade ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.stat-card, .product-card, .pillar, .timeline-item, .about__text, .about__visual, .vision__content, .vision__timeline, .contact__inner'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
