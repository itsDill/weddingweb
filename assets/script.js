// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.getElementById('mobile-toggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Language switcher
document.getElementById('language-switch').addEventListener('click', function(e) {
    this.classList.toggle('active');
    e.stopPropagation();
});

// Close language dropdown when clicking elsewhere
document.addEventListener('click', function() {
    document.getElementById('language-switch').classList.remove('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('mobile-toggle');

    if (!nav.contains(event.target) && !toggle.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});