// Global scope variable
const box = document.getElementById('animated-box');
const button = document.getElementById('animate-btn');

// Function demonstrating parameters and return value
function applyAnimation(element, animationClass) {
  // Check if element exists
  if (!element) return false;

  // Add animation class
  element.classList.add(animationClass);

  // Remove animation class after animation ends to allow re-trigger
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 2000); // Duration matches CSS animation

  return true; // Return value indicating success
}

// Event listener demonstrating scope and trigger
button.addEventListener('click', () => {
  // Local scope variable
  const success = applyAnimation(box, 'animate');

  // Log result to console
  console.log(`Animation applied: ${success}`);
});