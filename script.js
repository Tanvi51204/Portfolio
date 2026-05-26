// ── NAV scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.pageYOffset > 60);
}, { passive: true });

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
});

// close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 72; // nav height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach(a => {
                a.style.color = a.getAttribute('href') === `#${id}`
                    ? 'var(--text)'
                    : '';
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── Reveal on scroll ──
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // stagger siblings
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            siblings.forEach((el, idx) => {
                if (el === entry.target) {
                    setTimeout(() => el.classList.add('visible'), idx * 80);
                }
            });
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Console greeting ──
console.log('%c Tanvi Bisht — Portfolio', 'color: #a78bfa; font-size: 18px; font-weight: bold;');
console.log('%c Built with chai ☕ and a lot of debugging', 'color: #94a3b8; font-size: 13px;');
