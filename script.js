// Smooth scroll with fade effect between sections
document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('.award-section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight && sectionTop > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
