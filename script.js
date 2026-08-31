/**
 * ABIVERSE — Interactive Experience Layer
 * ═══════════════════════════════════════════════════════════════════
 * Dynamic project rendering, filtering, animations, and interactions
 * ═══════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════
// 1. UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ═══════════════════════════════════════════════════════════════════
// 2. EXPERIENCE DATA
// ═══════════════════════════════════════════════════════════════════

const EXPERIENCE = [
    {
        role: 'Training and Development Associate | XR & 3D',
        company: 'PSGR Krishnammal College for Women',
        period: 'Aug 2023 – Present',
        year: '2023–Present',
        responsibilities: [
            'Delivered practical training in Unity, AR/VR, XR development, and 3D design',
            'Designed and conducted hands-on sessions covering Unity, Vuforia, and immersive technologies',
            'Mentored students in developing XR applications and interactive experiences',
            'Mentored students for Unity certification preparation, with multiple achieving Unity Certified Associate certification'
        ]
    },
    {
        role: 'Adjunct Faculty — 3D Animation',
        company: 'PSGR Krishnammal College for Women',
        period: 'Feb 2021 – Jul 2023',
        year: '2021–2023',
        responsibilities: [
            'Taught 3D animation principles, modeling, texturing, rigging and animation workflows',
            'Guided students through complete 3D production pipelines using Autodesk Maya',
            'Developed curriculum aligned with industry standards for multimedia programs'
        ]
    },
    {
        role: '3D Faculty and Designer',
        company: 'Adoro Institute of Multimedia',
        period: 'Apr 2019 – Jan 2021',
        year: '2019–2021',
        responsibilities: [
            'Instructed 3D modeling, animation and visual effects using Maya and Adobe Creative Suite',
            'Created 3D assets and motion graphics for institutional projects and client work',
            'Mentored students in portfolio development and industry readiness'
        ]
    },
    {
        role: 'Adjunct Faculty — 3D Animation',
        company: 'Campus Images',
        period: 'Dec 2018 – Mar 2019',
        year: '2018–2019',
        responsibilities: [
            'Delivered specialized training in 3D character animation and rigging techniques',
            'Collaborated on curriculum design for short-term animation certification programs'
        ]
    },
    {
        role: '3D Designer',
        company: 'Falcon Expo and Event Services',
        period: 'Apr 2018 – Nov 2018',
        year: '2018',
        responsibilities: [
            'Designed 3D visualizations for exhibition stands, event spaces and brand activations',
            'Created photorealistic renders and walkthroughs for client presentations',
            'Collaborated with event planners to translate concepts into build-ready 3D assets'
        ]
    }
];

// ═══════════════════════════════════════════════════════════════════
// 3. PROJECT RENDERER
// ═══════════════════════════════════════════════════════════════════

class ProjectRenderer {
    constructor() {
        this.container = document.getElementById('projectsGrid');
        this.init();
    }

    init() {
        if (!this.container || typeof PROJECTS === 'undefined') return;
        this.render();
    }

    render() {
        const html = PROJECTS.map(project => this.createProjectCard(project)).join('');
        this.container.innerHTML = html;
    }

    createProjectCard(project) {
        return `
            <article class="project-card" data-category="${project.categories}" data-index="${project.index}" role="listitem">
                <div class="project-image">
                    <img src="${project.thumbnail}" alt="${project.title} - ${project.description}" loading="lazy">
                    <div class="project-overlay">
                        <button class="project-view-btn" data-project="${project.index}" aria-label="View ${project.title} details">
                            VIEW PROJECT →
                        </button>
                    </div>
                    <span class="project-number">${project.number}</span>
                </div>
                <div class="project-info">
                    <span class="project-category">${project.category.join(' / ')}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-tech">${project.technologies_display}</p>
                    <p class="project-description">${project.description}</p>
                </div>
            </article>
        `;
    }
}

// ═══════════════════════════════════════════════════════════════════
// 4. EXPERIENCE RENDERER
// ═══════════════════════════════════════════════════════════════════

class ExperienceRenderer {
    constructor() {
        this.container = document.getElementById('timeline');
        this.init();
    }

    init() {
        if (!this.container) return;
        this.render();
    }

    render() {
        const html = EXPERIENCE.map(exp => this.createTimelineItem(exp)).join('');
        this.container.innerHTML = html;
    }

    createTimelineItem(exp) {
        const responsibilities = exp.responsibilities.map(r => `<li>${r}</li>`).join('');
        return `
            <article class="timeline-item" data-year="${exp.year}">
                <div class="timeline-marker" aria-hidden="true"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="timeline-role">${exp.role}</span>
                        <span class="timeline-company">${exp.company}</span>
                    </div>
                    <time class="timeline-date">${exp.period}</time>
                    <ul class="timeline-details">
                        ${responsibilities}
                    </ul>
                </div>
            </article>
        `;
    }
}

// ═══════════════════════════════════════════════════════════════════
// 5. XR MODE TOGGLE
// ═══════════════════════════════════════════════════════════════════

class XRModeToggle {
    constructor() {
        this.toggle = document.getElementById('xrToggle');
        this.init();
    }

    init() {
        if (!this.toggle) return;

        // Check localStorage for saved preference
        const savedMode = localStorage.getItem('xr-mode');
        if (savedMode === 'enabled') {
            this.enable();
        }

        this.toggle.addEventListener('click', () => this.toggleMode());
    }

    toggleMode() {
        document.body.classList.toggle('xr-mode');
        const isEnabled = document.body.classList.contains('xr-mode');

        this.toggle.setAttribute('aria-pressed', isEnabled ? 'true' : 'false');
        localStorage.setItem('xr-mode', isEnabled ? 'enabled' : 'disabled');
    }

    enable() {
        document.body.classList.add('xr-mode');
        this.toggle.setAttribute('aria-pressed', 'true');
    }
}

// ═══════════════════════════════════════════════════════════════════
// 6. NAVIGATION
// ═══════════════════════════════════════════════════════════════════

class Navigation {
    constructor() {
        this.nav = document.getElementById('nav');
        this.navMenu = document.getElementById('navMenu');
        this.hamburger = document.getElementById('navHamburger');
        this.overlay = document.getElementById('mobileMenuOverlay');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navCta = document.getElementById('navCta');
        this.init();
    }

    init() {
        if (!this.hamburger) return;

        this.hamburger.addEventListener('click', () => this.toggleMenu());
        this.overlay.addEventListener('click', () => this.closeMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                if (target === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const section = document.querySelector(target);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
                this.closeMenu();
            });
        });

        if (this.navCta) {
            this.navCta.addEventListener('click', () => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Scroll spy
        window.addEventListener('scroll', throttle(() => this.updateActiveSection(), 100));
    }

    toggleMenu() {
        const isOpen = this.navMenu.classList.contains('active');
        if (isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.navMenu.classList.add('active');
        this.overlay.classList.add('active');
        this.hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.overlay.classList.remove('active');
        this.hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    updateActiveSection() {
        const scrollPos = window.scrollY + 100;

        this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '/') return;

            const section = document.querySelector(href);
            if (section) {
                const { offsetTop, offsetHeight } = section;
                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
}

// ═══════════════════════════════════════════════════════════════════
// 7. CUSTOM CURSOR
// ═══════════════════════════════════════════════════════════════════

class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        if (!this.cursor) return;

        this.dot = this.cursor.querySelector('.cursor-dot');
        this.ring = this.cursor.querySelector('.cursor-ring');
        this.text = this.cursor.querySelector('.cursor-text');
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.init();
    }

    init() {
        // Hide on mobile and touch devices
        if (this.isMobile() || this.isTouchDevice()) {
            this.cursor.style.display = 'none';
            return;
        }

        this.cursor.style.display = 'block';
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // Add hover listeners after DOM is ready
        setTimeout(() => this.addHoverListeners(), 100);
        this.animate();
    }

    isMobile() {
        return window.matchMedia('(max-width: 768px)').matches;
    }

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    onMouseMove(e) {
        this.targetX = e.clientX;
        this.targetY = e.clientY;
    }

    animate() {
        // Smooth follow
        this.x += (this.targetX - this.x) * 0.2;
        this.y += (this.targetY - this.y) * 0.2;

        this.dot.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.ring.style.transform = `translate(${this.x}px, ${this.y}px)`;

        requestAnimationFrame(() => this.animate());
    }

    addHoverListeners() {
        const interactiveElements = document.querySelectorAll('a, button, .project-card, .filter-btn');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHoverStart(el));
            el.addEventListener('mouseleave', () => this.onHoverEnd());
        });
    }

    onHoverStart(el) {
        this.ring.style.width = '50px';
        this.ring.style.height = '50px';
        this.ring.style.borderWidth = '1px';
    }

    onHoverEnd() {
        this.ring.style.width = '32px';
        this.ring.style.height = '32px';
        this.ring.style.borderWidth = '2px';
    }
}

// ═══════════════════════════════════════════════════════════════════
// 8. SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════

class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-up');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        // Wait for DOM to be ready, then observe
        setTimeout(() => {
            const elements = document.querySelectorAll('.project-card, .timeline-item, .skill-group, .education-column, .teaching-grid > *');
            elements.forEach(el => this.observer.observe(el));
        }, 100);
    }
}

// ═══════════════════════════════════════════════════════════════════
// 9. HERO CANVAS
// ═══════════════════════════════════════════════════════════════════

class HeroCanvas {
    constructor() {
        this.canvas = document.getElementById('heroCanvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', debounce(() => this.resizeCanvas(), 250));
        this.createParticles();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createParticles() {
        const count = Math.min(Math.floor((this.canvas.width * this.canvas.height) / 15000), 80);
        this.particles = [];

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = this.canvas.width;
            if (p.x > this.canvas.width) p.x = 0;
            if (p.y < 0) p.y = this.canvas.height;
            if (p.y > this.canvas.height) p.y = 0;

            // Draw
            const isDarkMode = document.body.classList.contains('xr-mode');
            const color = isDarkMode ? '110, 120, 255' : '29, 43, 242';
            this.ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ═══════════════════════════════════════════════════════════════════
// 10. PROJECT FILTERS
// ═══════════════════════════════════════════════════════════════════

class ProjectFilters {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.filterProjects(btn));
        });
    }

    filterProjects(btn) {
        // Update button state
        this.filterBtns.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.getAttribute('data-filter');

        // Re-query cards in case they were dynamically rendered
        const projectCards = document.querySelectorAll('.project-card');

        // Filter cards with smooth transition
        projectCards.forEach((card, index) => {
            const categories = card.getAttribute('data-category').split(' ');
            const isVisible = filter === 'all' || categories.includes(filter);

            setTimeout(() => {
                if (isVisible) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }, index * 30);
        });
    }
}

// ═══════════════════════════════════════════════════════════════════
// 11. PROJECT MODAL
// ═══════════════════════════════════════════════════════════════════

class ProjectModal {
    constructor() {
        this.init();
    }

    init() {
        // Add click handlers after projects are rendered
        setTimeout(() => {
            const projectViewBtns = document.querySelectorAll('.project-view-btn');
            projectViewBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const projectIndex = parseInt(btn.getAttribute('data-project'));
                    this.showDetails(projectIndex);
                });
            });
        }, 100);
    }

    showDetails(index) {
        if (typeof PROJECTS === 'undefined') return;

        const project = PROJECTS[index];
        if (!project || !project.slug) return;

        // Navigate to project detail page
        window.location.href = `/projects/${project.slug}/`;
    }
}

// ═══════════════════════════════════════════════════════════════════
// 12. NUMBER COUNTER
// ═══════════════════════════════════════════════════════════════════

class NumberCounter {
    constructor() {
        this.counters = document.querySelectorAll('[data-count]');
        this.init();
    }

    init() {
        if (this.counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    countUp(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(interval);
            } else {
                element.textContent = Math.floor(current);
            }
        }, duration / steps);
    }
}

// ═══════════════════════════════════════════════════════════════════
// 13. INITIALIZATION
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content first
    new ProjectRenderer();
    new ExperienceRenderer();

    // Initialize interactions
    new XRModeToggle();
    new Navigation();
    new CustomCursor();
    new ScrollAnimations();
    new HeroCanvas();
    new ProjectFilters();
    new ProjectModal();
    new NumberCounter();

    console.log('🚀 ABIVERSE — XR Portfolio Loaded');
});

// ═══════════════════════════════════════════════════════════════════
// END
// ═══════════════════════════════════════════════════════════════════
