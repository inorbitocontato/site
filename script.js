/* ============================================
   INORBITO - JavaScript Principal

   Este arquivo contém as funcionalidades do site:
   - Menu mobile
   - Navegação dinâmica (scroll)
   - Formulário de contato
   - Animações
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initScrollSpy();
    initContactForm();
    initSmoothScroll();
    initAnimations();
});

/* ============================================
   NAVEGAÇÃO - Menu fixo com efeito ao rolar
   ============================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ============================================
   MENU MOBILE - Toggle do menu em telas pequenas
   ============================================ */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

/* ============================================
   SCROLL SPY - Destaca o item do menu ativo
   ============================================ */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNavLink() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Executar uma vez no carregamento
}

/* ============================================
   SCROLL SUAVE - Animação ao clicar nos links
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Compensar altura do navbar

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ============================================
   FORMULÁRIO DE CONTATO
   Envia por e-mail ou abre cliente de e-mail
   ============================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validação básica
            if (!name || !email || !subject || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Criar link mailto
            const mailtoLink = createMailtoLink(name, email, subject, message);

            // Abrir cliente de e-mail
            window.location.href = mailtoLink;

            // Mostrar mensagem de sucesso
            showNotification('Abrindo seu cliente de e-mail...', 'success');

            // Limpar formulário
            form.reset();
        });
    }
}

function createMailtoLink(name, email, subject, message) {
    const recipientEmail = CONFIG.contato.email || 'contato@inorbito.com.br';

    const body = `
Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
    `.trim();

    return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ============================================
   NOTIFICAÇÕES
   ============================================ */
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    // Estilos inline para a notificação
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        max-width: 90%;
    `;

    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;

    document.body.appendChild(notification);

    // Remover após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Adicionar keyframes para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

/* ============================================
   ANIMAÇÕES DE ENTRADA
   ============================================ */
function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animatedElements = document.querySelectorAll(
        '.member-card, .product-card, .contact-item, .bio-content'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Adicionar classe para mostrar elementos
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
}

/* ============================================
   EFEITO PARALLAX SUAVE NO HERO
   ============================================ */
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    }
});
