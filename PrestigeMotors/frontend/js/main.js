/**
 * Main JavaScript file for the luxury car dealership website
 * Contains initialization and common functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI
  UI.init();
  
  // Initialize scroll animations for all pages
  initScrollAnimations();
});

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
  // Create intersection observer for fade-in effect
  const fadeElements = document.querySelectorAll('.section, .vehicle-card, .service-card, .info-card');
  
  if (fadeElements.length > 0) {
    // Add fade-in class to elements
    fadeElements.forEach(element => {
      element.classList.add('fade-in');
    });
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    // Observe elements
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Add styles for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
      .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
}