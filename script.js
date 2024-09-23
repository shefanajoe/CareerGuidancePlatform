// smooth-scroll.js

// Add event listener to all anchor links that point to an ID
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Scroll smoothly to the target element
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align the top of the target with the top of the viewport
        });
    });
});
