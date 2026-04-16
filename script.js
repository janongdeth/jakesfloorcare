// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('mainNav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const s = toggle.querySelectorAll('span');
    if (nav.classList.contains('open')) {
      s[0].style.cssText = 'transform:rotate(45deg);top:9px';
      s[1].style.opacity = '0';
      s[2].style.cssText = 'transform:rotate(-45deg);top:9px';
    } else {
      s[0].style.cssText = '';
      s[1].style.cssText = '';
      s[2].style.cssText = '';
    }
  });
}

// Mobile dropdown toggles
document.querySelectorAll('.has-dropdown > button').forEach(b => {
  b.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      const d = b.nextElementSibling;
      d.classList.toggle('mobile-open');
      b.querySelector('.nav-arrow').style.transform =
        d.classList.contains('mobile-open') ? 'rotate(-135deg)' : 'rotate(45deg)';
    }
  });
});

// Scroll reveal
const obs = new IntersectionObserver(e => {
  e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (header) header.style.boxShadow = scrollY > 50 ? '0 1px 12px rgba(0,0,0,0.06)' : 'none';
}, { passive: true });
