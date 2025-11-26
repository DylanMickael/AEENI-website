// ===== GSAP ANIMATIONS =====

// Hero Title Animation
gsap.from('.hero-title', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Hero Subtitle Animation
gsap.from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power4.out'
});

// Hero Buttons Animation
gsap.from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});

// Hero Image Animation
gsap.from('.hero-image', {
    duration: 1.5,
    x: 100,
    opacity: 0,
    scale: 0.9,
    delay: 0.4,
    ease: 'power4.out'
});

// Floating Cards Animation
gsap.from('.floating-card', {
    duration: 1.5,
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    delay: 0.8,
    ease: 'elastic.out(1, 0.5)'
});

// ===== SCROLL ANIMATIONS =====

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to elements
document.querySelectorAll('.news-card, .timeline-item, .merch-item, .partner-logo').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
