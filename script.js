// Smooth scrolling effect
document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
