// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const scrollProgressBar = document.getElementById('scrollProgressBar');

// ==================== MODO OSCURO ====================
// Detectar preferencia del sistema
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

// Aplicar tema guardado o preferencia del sistema
if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon();
}

// Toggle modo oscuro
darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    updateDarkModeIcon();
}

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==================== MENÚ HAMBURGUESA ====================
hamburger.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('active');
    
    // Animar hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==================== NAVBAR STICKY + SCROLL PROGRESS ====================
const navbar = document.querySelector('.navbar');

const updateScrollUI = () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    if (scrollProgressBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${progress}%`;
    }
};

window.addEventListener('scroll', updateScrollUI);
window.addEventListener('load', updateScrollUI);

// ==================== FORMULARIO DE CONTACTO ====================
contactForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Validar que todos los campos estén llenos
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Cambiar el estado del botón
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (aquí iría la lógica de envío real)
    setTimeout(() => {
        // Limpiar formulario
        contactForm.reset();
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
        
        // Restaurar botón
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Mostrar notificación
        showNotification('¡Mensaje enviado correctamente! Me pondré en contacto pronto.', 'success');
    }, 1500);
}

// ==================== NOTIFICACIONES ====================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        font-size: 14px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== SCROLL SUAVE ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== EFECTO RIPPLE ====================
const rippleTargets = document.querySelectorAll('.btn, .btn-small, .social-link, .carousel-btn');

rippleTargets.forEach(target => {
    target.addEventListener('click', (e) => {
        const rect = target.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.className = 'ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        const existingRipple = target.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        target.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

// ==================== REVEAL AL SCROLL ====================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ==================== CARRUSELES ====================
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = track ? Array.from(track.children) : [];
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dots = carousel.querySelectorAll('.carousel-dot');
    let index = 0;
    let autoTimer;

    if (!track || slides.length === 0) {
        return;
    }

    const updateCarousel = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const goTo = (newIndex) => {
        index = (newIndex + slides.length) % slides.length;
        updateCarousel();
        resetAuto();
    };

    const startAuto = () => {
        if (slides.length > 1) {
            autoTimer = setInterval(() => {
                goTo(index + 1);
            }, 5000);
        }
    };

    const resetAuto = () => {
        if (autoTimer) {
            clearInterval(autoTimer);
        }
        startAuto();
    };

    prevBtn?.addEventListener('click', () => goTo(index - 1));
    nextBtn?.addEventListener('click', () => goTo(index + 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
    });

    carousel.addEventListener('mouseenter', () => {
        if (autoTimer) {
            clearInterval(autoTimer);
        }
    });

    carousel.addEventListener('mouseleave', () => {
        resetAuto();
    });

    updateCarousel();
    startAuto();
});

// ==================== CONTADOR DE ESTADÍSTICAS ====================
function animateStats() {
    const statItems = document.querySelectorAll('.stat-item h3');
    const observerStats = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                const duration = 2000; // 2 segundos
                const increment = finalValue / (duration / 16); // 60fps
                let current = 0;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= finalValue) {
                        target.textContent = finalValue + '+';
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current) + '+';
                    }
                }, 16);
                
                observerStats.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(stat => observerStats.observe(stat));
}

animateStats();

// ==================== VALIDACIÓN EN TIEMPO REAL ====================
const inputs = contactForm.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value) && input.value.trim() !== '') {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '';
            }
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

// ==================== EFECTO PARALLAX ====================
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollY = window.scrollY;
        hero.style.backgroundPosition = `0% ${scrollY * 0.5}px`;
    }
});

// ==================== PREVENIR REENVÍO DE FORMULARIO ====================
contactForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

console.log('✨ Portafolio de Jhon Lee Ramirez Coloma cargado correctamente');
