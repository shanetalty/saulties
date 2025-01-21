// Select all model-viewer elements
document.querySelectorAll('model-viewer').forEach((viewer) => {
  // Add a click event listener to trigger the animation
  viewer.addEventListener('click', () => {
    // Only start the animation if it isn't already autoplaying
    if (!viewer.hasAttribute('autoplay')) {
      viewer.setAttribute('autoplay', ''); // Start animation
      viewer.play(); // Explicitly call play for safety
    }
  });

  // Listen for the animationfinished event
  viewer.addEventListener('animationfinished', () => {
    // Stop autoplay and enable camera controls
    viewer.removeAttribute('autoplay'); // Stop animation loop
    viewer.setAttribute('camera-controls', ''); // Enable user interaction (rotation)
    console.log(`${viewer.id}: Animation complete. Rotation enabled.`);
  });
});
