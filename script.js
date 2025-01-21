// Smooth scrolling effect for the scroll icon
document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,  // Scroll to the next section
        behavior: 'smooth'  // Smooth scroll effect
    });
});
