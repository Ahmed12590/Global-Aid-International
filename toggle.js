// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', function() {
    // Toggle menu visibility
    mobileMenu.classList.toggle('open');
    
    // Toggle menu icon state (for animation)
    menuIcon.classList.toggle('open');
});


