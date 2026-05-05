document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Navbar scroll effect ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── 2. Reveal on scroll (IntersectionObserver) ──
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                // Stagger siblings by index
                const delay = i * 60;
                setTimeout(() => e.target.classList.add('visible'), delay);
                revealObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObs.observe(el));

    // Also reveal card/glass elements in sections
    const cards = document.querySelectorAll('.glass, .exp-card, .skill-card, .hero-card, .info-card');
    const cardObs = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
            if (e.isIntersecting) {
                setTimeout(() => {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                }, i * 80);
                cardObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity .7s ease, transform .7s ease, border-color .35s, box-shadow .35s';
        cardObs.observe(el);
    });

    // ── 3. Skill bars animate on scroll ──
    const bars = document.querySelectorAll('.sk-bar');
    const barObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const pct = e.target.getAttribute('data-w');
                setTimeout(() => { e.target.style.width = pct + '%'; }, 200);
                barObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.4 });
    bars.forEach(b => barObs.observe(b));

    // ── 4. Smooth scroll for all anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
