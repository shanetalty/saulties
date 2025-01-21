// Smooth fade-out and fade-in effect during scrolling
document.addEventListener("scroll", () => {
  const pages = document.querySelectorAll(".page");
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  pages.forEach((page) => {
    const offsetTop = page.offsetTop;
    const opacity = 1 - Math.abs(scrollTop - offsetTop) / windowHeight;

    page.style.opacity = opacity;
  });
});

// Add model-viewer interactions
document.querySelectorAll('model-viewer').forEach((viewer) => {
  // Add a click event listener to trigger the animation
  viewer.addEventListener('click', () => {
    if (!viewer.hasAttribute('autoplay')) {
      viewer.setAttribute('autoplay', ''); // Start animation
      viewer.play(); // Explicitly play
    }
  });

  // Listen for the animationfinished event
  viewer.addEventListener('animationfinished', () => {
    viewer.removeAttribute('autoplay'); // Stop animation loop
    viewer.setAttribute('camera-controls', ''); // Enable user rotation
    console.log(`${viewer.id}: Animation complete. Rotation enabled.`);
  });
});

// Scroll to the next section when the scroll indicator is clicked
document.querySelectorAll(".scroll-indicator").forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    const nextPage = document.querySelectorAll(".page")[index + 1];
    if (nextPage) {
      nextPage.scrollIntoView({ behavior: "smooth" });
    }
  });
});
