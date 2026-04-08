// mobile-menu.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Add to your mobile-menu.js or create a new script
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  
  // Load hero image after page loads
  const heroImage = new Image();
  heroImage.src = 'images/fitness-hero.jpg';
  heroImage.onload = function() {
    hero.classList.add('loaded');
  };
});