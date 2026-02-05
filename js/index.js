// Page navigation function
function goToPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page with animation
    const targetPage = document.getElementById(pageId);
    setTimeout(() => {
        targetPage.classList.add('active');

        // If going to success page, start typing animation
        if (pageId === 'page-success') {
            startTypingAnimation();
            createHeartsBurst();
        }

        // Clear password input when going back to password page
        if (pageId === 'page-password') {
            const passwordInput = document.getElementById('password-input');
            if (passwordInput) {
                passwordInput.value = '';
                passwordInput.focus();
            }
        }
    }, 50);
}

// Check password function
function checkPassword() {
    const input = document.getElementById('password-input');
    const password = input.value.toLowerCase().trim();

    if (password === 'i love you') {
        goToPage('page-success');
    } else {
        goToPage('page-wrong-password');
    }
}

// Add enter key support for password input
document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password-input');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// Typing animation for success message
function startTypingAnimation() {
    const text = "I love you too my baby!";
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    typingElement.textContent = '';
    let index = 0;

    const typeInterval = setInterval(() => {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
            // Add blinking cursor effect
            typingElement.classList.add('typing-complete');
        }
    }, 100);
}

// Create hearts burst animation
function createHeartsBurst() {
    const container = document.querySelector('.hearts-burst');
    if (!container) return;

    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '💘'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('burst-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            const angle = (Math.PI * 2 * i) / 30;
            heart.style.setProperty('--angle', angle + 'rad');
            heart.style.animationDelay = (i * 0.05) + 's';

            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 50);
    }
}

// Create floating hearts animation
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    const hearts = ['💕', '💖', '💗', '💓', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 600);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
    createFloatingHearts();

    // Add sparkle effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const sparkle = document.createElement('span');
            sparkle.classList.add('sparkle');
            sparkle.style.left = e.offsetX + 'px';
            sparkle.style.top = e.offsetY + 'px';
            this.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 600);
        });
    });

    // Add tilt effect to polaroids on mobile
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('touchstart', function () {
            this.style.transform = 'scale(1.05) rotate(' + (Math.random() * 6 - 3) + 'deg)';
        });

        polaroid.addEventListener('touchend', function () {
            this.style.transform = '';
        });
    });

    // Add pulse animation to memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
});

// Add particle effect
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.innerHTML = '✨';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Random sparkles throughout the site
setInterval(() => {
    if (Math.random() > 0.7) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createParticle(x, y);
    }
}, 2000);