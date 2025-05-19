/**
 * Home page functionality for the luxury car dealership website
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize API and UI
  await API.init();
  
  // Load featured vehicles
  loadFeaturedVehicles();
  
  // Load testimonials
  loadTestimonials();
  
  // Initialize newsletter form
  initNewsletterForm();
});

/**
 * Load featured vehicles
 */
async function loadFeaturedVehicles() {
  try {
    const featuredContainer = document.getElementById('featured-vehicles');
    if (!featuredContainer) return;
    
    // Show loader
    featuredContainer.innerHTML = '<div class="loader"></div>';
    
    // Get featured vehicles
    const featuredVehicles = await API.getFeaturedVehicles();
    
    // If no featured vehicles, show message
    if (!featuredVehicles || featuredVehicles.length === 0) {
      featuredContainer.innerHTML = '<p class="no-results">No featured vehicles found. Check back soon!</p>';
      return;
    }
    
    // Create HTML for featured vehicles
    let html = '';
    featuredVehicles.forEach(vehicle => {
      html += UI.createVehicleCard(vehicle);
    });
    
    // Update container
    featuredContainer.innerHTML = html;
    
    // Add event listeners for compare buttons
    const compareButtons = featuredContainer.querySelectorAll('.btn-compare');
    compareButtons.forEach(button => {
      button.addEventListener('click', handleCompareClick);
    });
  } catch (error) {
    console.error('Error loading featured vehicles:', error);
    const featuredContainer = document.getElementById('featured-vehicles');
    if (featuredContainer) {
      featuredContainer.innerHTML = '<p class="error">An error occurred while loading featured vehicles. Please try again later.</p>';
    }
  }
}

/**
 * Handle click on compare button
 * @param {Event} e - Click event
 */
function handleCompareClick(e) {
  e.preventDefault();
  e.stopPropagation();
  
  const vehicleId = e.currentTarget.dataset.id;
  
  // Get compare list from localStorage
  let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
  
  // Check if vehicle is already in compare list
  const isInCompare = compareList.includes(vehicleId);
  
  if (isInCompare) {
    // Remove from compare list
    compareList = compareList.filter(id => id !== vehicleId);
    UI.showNotification('Vehicle removed from comparison', 'info');
  } else {
    // Check if compare list is full (max 3 vehicles)
    if (compareList.length >= 3) {
      UI.showNotification('You can compare up to 3 vehicles at a time', 'error');
      return;
    }
    
    // Add to compare list
    compareList.push(vehicleId);
    UI.showNotification('Vehicle added to comparison', 'success');
  }
  
  // Update localStorage
  localStorage.setItem('compareList', JSON.stringify(compareList));
}

/**
 * Load testimonials
 */
async function loadTestimonials() {
  try {
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (!testimonialSlider) return;
    
    // Show loader
    testimonialSlider.innerHTML = '<div class="loader"></div>';
    
    // Get testimonials
    const testimonials = await API.getTestimonials();
    
    // If no testimonials, hide section
    if (!testimonials || testimonials.length === 0) {
      const testimonialSection = document.querySelector('.testimonials');
      if (testimonialSection) testimonialSection.style.display = 'none';
      return;
    }
    
    // Create HTML for testimonials
    let html = '';
    testimonials.forEach(testimonial => {
      html += UI.createTestimonialCard(testimonial);
    });
    
    // Update container
    testimonialSlider.innerHTML = html;
    
    // Initialize testimonial slider (simple version)
    initTestimonialSlider();
  } catch (error) {
    console.error('Error loading testimonials:', error);
    const testimonialSlider = document.getElementById('testimonial-slider');
    if (testimonialSlider) {
      testimonialSlider.innerHTML = '<p class="error">An error occurred while loading testimonials.</p>';
    }
  }
}

/**
 * Initialize testimonial slider
 */
function initTestimonialSlider() {
  const testimonialSlider = document.getElementById('testimonial-slider');
  if (!testimonialSlider) return;
  
  const testimonials = testimonialSlider.querySelectorAll('.testimonial-card');
  if (testimonials.length <= 1) return;
  
  let currentIndex = 0;
  
  // Show first testimonial
  testimonials[0].style.display = 'block';
  
  // Hide other testimonials
  for (let i = 1; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
  }
  
  // Create slider controls
  const controls = document.createElement('div');
  controls.className = 'slider-controls';
  controls.innerHTML = `
    <button class="slider-prev">←</button>
    <div class="slider-dots"></div>
    <button class="slider-next">→</button>
  `;
  testimonialSlider.appendChild(controls);
  
  // Create dots
  const dotsContainer = controls.querySelector('.slider-dots');
  for (let i = 0; i < testimonials.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'slider-dot';
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }
  
  // Add event listeners
  const prevButton = controls.querySelector('.slider-prev');
  const nextButton = controls.querySelector('.slider-next');
  const dots = dotsContainer.querySelectorAll('.slider-dot');
  
  prevButton.addEventListener('click', () => {
    changeSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
  });
  
  nextButton.addEventListener('click', () => {
    changeSlide((currentIndex + 1) % testimonials.length);
  });
  
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      changeSlide(parseInt(dot.dataset.index, 10));
    });
  });
  
  // Auto slide
  let interval = setInterval(() => {
    changeSlide((currentIndex + 1) % testimonials.length);
  }, 5000);
  
  // Pause on hover
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  testimonialSlider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      changeSlide((currentIndex + 1) % testimonials.length);
    }, 5000);
  });
  
  /**
   * Change slide
   * @param {number} index - Index of slide to show
   */
  function changeSlide(index) {
    // Hide current slide
    testimonials[currentIndex].style.display = 'none';
    dots[currentIndex].classList.remove('active');
    
    // Show new slide
    currentIndex = index;
    testimonials[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
  }
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .slider-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
    }
    .slider-prev, .slider-next {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
      color: var(--color-primary);
      padding: 8px;
      transition: color 0.3s;
    }
    .slider-prev:hover, .slider-next:hover {
      color: var(--color-accent);
    }
    .slider-dots {
      display: flex;
      gap: 8px;
      margin: 0 16px;
    }
    .slider-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--color-gray-300);
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .slider-dot.active {
      background-color: var(--color-accent);
    }
  `;
  document.head.appendChild(style);
}

/**
 * Initialize newsletter form
 */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  
  UI.handleFormSubmit(form, async (data) => {
    // Submit newsletter subscription
    return await API.subscribeNewsletter(data.email);
  });
}