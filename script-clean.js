// Clean Portfolio JavaScript - Simple and Professional
class CleanPortfolio {
    constructor() {
        this.init();
        this.setupAnimations();
        this.setupInteractions();
    }

    init() {
        // Loading screen
        this.handleLoadingScreen();
        
        // Smooth scrolling
        this.setupSmoothScrolling();
        
        // Navigation
        this.setupNavigation();
        
        // Form handling
        this.setupContactForm();
        
        // Scroll animations
        this.setupScrollAnimations();
    }

    handleLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingProgress = document.querySelector('.loading-progress');
        
        // Simulate loading progress
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 25;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.visibility = 'hidden';
                    document.body.style.overflow = 'auto';
                }, 500);
            }
            loadingProgress.style.width = progress + '%';
        }, 150);
    }

    setupSmoothScrolling() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Active navigation highlighting
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === current) {
                    link.classList.add('active');
                }
            });
        });

        // Navigation background on scroll
        const nav = document.querySelector('.nav-floating');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(26, 26, 26, 0.98)';
                nav.style.backdropFilter = 'blur(25px)';
            } else {
                nav.style.background = 'rgba(26, 26, 26, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
            }
        });
    }

    setupContactForm() {
        // Simple copy to clipboard functionality
        // Contact form removed for simplicity
        console.log('Contact form removed - using simple copy functionality');
    }

    // Simple copy functionality
    copyToClipboard(text, type) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification(`${type} copied to clipboard!`, 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification(`${type} copied to clipboard!`, 'success');
        });
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add styles if not already added
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                    min-width: 300px;
                    max-width: 400px;
                    padding: 0;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    transform: translateX(100%);
                    transition: all 0.3s ease;
                    overflow: hidden;
                }
                .notification.notification-success {
                    background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
                }
                .notification.notification-error {
                    background: linear-gradient(135deg, #ff4757 0%, #ff3838 100%);
                }
                .notification.notification-info {
                    background: linear-gradient(135deg, #c4a47c 0%, #d4b896 100%);
                }
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 15px 20px;
                    color: white;
                    font-weight: 500;
                }
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 5px;
                    margin-left: auto;
                    opacity: 0.8;
                    transition: opacity 0.2s ease;
                }
                .notification-close:hover {
                    opacity: 1;
                }
                .notification.show {
                    transform: translateX(0);
                }
            `;
            document.head.appendChild(styles);
        }

        // Add to DOM
        document.body.appendChild(notification);

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animate skill bars
                    if (entry.target.classList.contains('skill-item')) {
                        this.animateSkillBar(entry.target);
                    }
                    
                    // Animate counters
                    if (entry.target.classList.contains('stat-number')) {
                        this.animateCounter(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.skill-category, .project-card, .highlight-item, .contact-method, .stat-item'
        );
        
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    animateSkillBar(skillItem) {
        const skillLevel = skillItem.querySelector('.skill-level');
        if (skillLevel) {
            setTimeout(() => {
                skillLevel.style.animation = 'none';
                skillLevel.offsetHeight; // Trigger reflow
                skillLevel.style.animation = 'fillSkillBar 1.5s ease-in-out forwards';
            }, Math.random() * 300);
        }
    }

    animateCounter(counterElement) {
        const target = parseInt(counterElement.textContent);
        const suffix = counterElement.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counterElement.textContent = Math.floor(current) + suffix;
        }, 50);
    }

    setupAnimations() {
        // Simple hover effects for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.3s ease';
            });
        });

        // Smooth button interactions
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-hire');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transition = 'all 0.3s ease';
            });
        });
    }

    setupInteractions() {
        // Profile photo interaction
        const profilePhoto = document.querySelector('.profile-photo');
        if (profilePhoto) {
            profilePhoto.addEventListener('mouseenter', () => {
                profilePhoto.style.transition = 'transform 0.3s ease';
            });
        }

        // Skill items click feedback
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 150);
            });
        });
    }
}

// Simple CSS animations
const cleanStyles = `
<style>
.animate-in {
    animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fillSkillBar {
    from {
        width: 0%;
    }
    to {
        width: var(--skill-width, 0%);
    }
}

.skill-category {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.skill-category.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.project-card {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.project-card.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.highlight-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.highlight-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.contact-method {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.contact-method.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.stat-item {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.stat-item.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* Smooth transitions for all interactive elements */
* {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

/* Remove any cursor trail or glow effects */
body {
    cursor: default;
}

a, button {
    cursor: pointer;
}

/* Clean hover states without glows */
.nav-link::before,
.title-name::after {
    display: none;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', cleanStyles);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new CleanPortfolio();
});

// Global copy function for contact methods
function copyToClipboard(text, type) {
    const contactMethod = event.currentTarget;
    
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        contactMethod.classList.add('copied');
        const copyIcon = contactMethod.querySelector('.copy-icon');
        copyIcon.classList.remove('fa-copy');
        copyIcon.classList.add('fa-check');
        
        // Show notification
        if (window.portfolio) {
            window.portfolio.showNotification(`${type} copied to clipboard!`, 'success');
        }
        
        // Reset after 2 seconds
        setTimeout(() => {
            contactMethod.classList.remove('copied');
            copyIcon.classList.remove('fa-check');
            copyIcon.classList.add('fa-copy');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        if (window.portfolio) {
            window.portfolio.showNotification(`${type} copied to clipboard!`, 'success');
        }
    });
}

// Enhanced smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Add skill bar animation CSS dynamically
document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const level = skillLevel.getAttribute('data-level');
        skillLevel.style.setProperty('--skill-width', level + '%');
    });
});
