// Function to scroll to the specified section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Function to handle scroll navigation between pages
function scrollToNextSection() {
  const nextSection = document.querySelector('.award-page.active + .award-page');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add event listeners for scrolling and fade effects
let currentPage = 0;
const pages = document.querySelectorAll('.award-page');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  pages.forEach((page, index) => {
    if (scrollPosition >= page.offsetTop - window.innerHeight / 2) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
});
