// script.js

// Get references to the hamburger menu button and the mobile menu overlay
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

// Add an event listener to the hamburger menu button
if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
        // Toggle the 'open' class on the mobile menu overlay to show/hide it
        mobileMenuOverlay.classList.toggle('open');
        // Toggle the 'open' class on the hamburger menu button to change its icon (hamburger <-> X)
        hamburgerMenu.classList.toggle('open');

        // Prevent scrolling on the body when the menu is open, and re-enable it when closed
        // This checks if the 'open' class is currently present on the overlay
        document.body.style.overflow = mobileMenuOverlay.classList.contains('open')
            ? 'hidden' // If open, hide overflow to prevent scrolling
            : '';       // If closed, reset overflow to default (allow scrolling)
    });
}

// Get all menu links within the mobile menu overlay
const menuLinks = document.querySelectorAll('.menu-link');

// Add a click event listener to each menu link
// This ensures the menu closes when a link is clicked (e.g., navigating to a new page/section)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('open');
        hamburgerMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// --- Lightbox Functionality (for image galleries, etc.) ---

// Get references to lightbox elements
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

// Get all thumbnail images that should open in the lightbox
const thumbnails = document.querySelectorAll('.thumbnail');

// Add click listeners to each thumbnail
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', (event) => {
        // Prevent default link behavior if the thumbnail is an anchor tag
        event.preventDefault();

        // Get the full image source from the data-src attribute
        const fullSrc = thumbnail.getAttribute('data-src');
        if (fullSrc) {
            // Set the lightbox image source
            lightboxImage.src = fullSrc;
            // Add 'open' class to display the lightbox
            lightboxOverlay.classList.add('open');
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        }
    });
});

// Add click listener to the lightbox close button
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        // Remove 'open' class to hide the lightbox
        lightboxOverlay.classList.remove('open');
        // Re-enable body scrolling
        document.body.style.overflow = '';
    });
}

// Close lightbox if clicking outside the image content
if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (event) => {
        // Check if the click occurred directly on the overlay (not on the image itself)
        if (event.target === lightboxOverlay) {
            lightboxOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}


// --- Fade-in and Slide-up Animations on Scroll ---

// Select all elements with the 'fade-in-slide-up' class
const animatedElements = document.querySelectorAll('.fade-in-slide-up');
const fadeInElements = document.querySelectorAll('.fade-in');
const skillBarFills = document.querySelectorAll('.skill-bar-fill');

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events for animations
function handleScrollAnimations() {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('is-visible'); // Add a class to trigger CSS animation
        }
    });

    fadeInElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('is-visible');
        }
    });

    // Only trigger skill bar animation if on the skills page
    if (document.getElementById('skills-content')) {
        skillBarFills.forEach(el => {
            if (isElementInViewport(el)) {
                el.classList.add('fill-animation'); // Trigger fill animation for skill bars
            }
        });
    }
}

// Add scroll event listener to trigger animations
window.addEventListener('scroll', handleScrollAnimations);

// Run once on load to catch elements already in viewport
document.addEventListener('DOMContentLoaded', handleScrollAnimations);


// --- Particle Background for Hero Section (index.html only) ---

// Function to create and manage particles
function createParticles() {
    const particleContainer = document.querySelector('.particle-background');
    if (!particleContainer) return; // Exit if not on the home page

    const numberOfParticles = 20; // Adjust as needed

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        // Randomize initial position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        // Randomize size
        const size = Math.random() * 4 + 2; // Size between 2px and 6px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        // Randomize animation duration and delay for varied movement
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5 to 15 seconds
        particle.style.animationDelay = `${Math.random() * 5}s`; // 0 to 5 seconds delay
        particleContainer.appendChild(particle);
    }
}

// Call the particle creation function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createParticles);

// --- Carousel functionality for Featured Projects (index.html only) ---
const carouselContainer = document.querySelector('.carousel-container');

if (carouselContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    carouselContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        carouselContainer.classList.add('active');
        startX = e.pageX - carouselContainer.offsetLeft;
        scrollLeft = carouselContainer.scrollLeft;
    });

    carouselContainer.addEventListener('mouseleave', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });

    carouselContainer.addEventListener('mouseup', () => {
        isDown = false;
        carouselContainer.classList.remove('active');
    });

    carouselContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselContainer.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        carouselContainer.scrollLeft = scrollLeft - walk;
    });

    // Optional: Add touch events for mobile
    carouselContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - carouselContainer.offsetLeft;
        scrollLeft = carouselContainer.scrollLeft;
    });

    carouselContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    carouselContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carouselContainer.offsetLeft;
        const walk = (x - startX) * 2;
        carouselContainer.scrollLeft = scrollLeft - walk;
    });
}

// --- Hero Text Cycling Functionality (index.html only) ---
const heroText1 = document.getElementById('hero-text-1');
const heroText2 = document.getElementById('hero-text-2');
let currentHeroText = 1; // 1 for "Magic in Every Pixel.", 2 for "Hello!, I'm Leo."

function cycleHeroText() {
    if (heroText1 && heroText2) { // Ensure elements exist (only on index.html)
        if (currentHeroText === 1) {
            // Fade out text 1, fade in text 2
            heroText1.classList.remove('opacity-100');
            heroText1.classList.add('opacity-0');
            heroText2.classList.remove('opacity-0');
            heroText2.classList.add('opacity-100');
            currentHeroText = 2;
        } else {
            // Fade out text 2, fade in text 1
            heroText2.classList.remove('opacity-100');
            heroText2.classList.add('opacity-0');
            heroText1.classList.remove('opacity-0');
            heroText1.classList.add('opacity-100');
            currentHeroText = 1;
        }
    }
}

// Start cycling after an initial delay to allow the first text's animation to play
// Then, cycle every 4 seconds
document.addEventListener('DOMContentLoaded', () => {
    // Only run on index.html
    if (document.getElementById('home-content')) {
        // Ensure initial state is correct (heroText1 visible, heroText2 hidden)
        if (heroText1 && heroText2) {
            heroText1.classList.add('opacity-100');
            heroText2.classList.add('opacity-0');

            setTimeout(() => {
                setInterval(cycleHeroText, 4000); // Cycle every 4 seconds
            }, 2000); // Start cycling after 2 seconds
        }
    }
});
