/**
 * UI utilities for the luxury car dealership website
 * Provides functions for UI interactions and enhancements
 */

const UI = {
  /**
   * Initialize the UI
   */
  init() {
    this.initHeaderScroll();
    this.initMobileMenu();
    this.initAnimations();
    console.log('UI initialized');
  },
  
  /**
   * Initialize header scroll effect
   */
  initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Initial check
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  },
  
  /**
   * Initialize mobile menu
   */
  initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-menu') && !e.target.closest('.menu-toggle')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  },
  
  /**
   * Initialize animations
   */
  initAnimations() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    if (fadeElements.length > 0) {
      this.handleScrollAnimation(fadeElements, 'visible');
    }
  },
  
  /**
   * Handle scroll animations
   * @param {NodeList} elements - Elements to animate
   * @param {string} className - Class to add when element is visible
   */
  handleScrollAnimation(elements, className) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  },
  
  /**
   * Format currency
   * @param {number} amount - Amount to format
   * @param {string} currency - Currency code
   * @returns {string} Formatted currency
   */
  formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  },
  
  /**
   * Create vehicle card HTML
   * @param {Object} vehicle - Vehicle data
   * @returns {string} HTML for vehicle card
   */
  createVehicleCard(vehicle) {
    return `
      <div class="vehicle-card" data-id="${vehicle.id}">
        <img src="${vehicle.featuredImage}" alt="${vehicle.brand} ${vehicle.model}" class="vehicle-image">
        <div class="vehicle-content">
          <div class="vehicle-title">
            <h3>${vehicle.brand} ${vehicle.model}</h3>
            <span class="vehicle-price">${this.formatCurrency(vehicle.price)}</span>
          </div>
          <p class="vehicle-subtitle">${vehicle.year} | ${vehicle.mileage} miles</p>
          <div class="vehicle-features">
            <span>${vehicle.engine}</span>
            <span>${vehicle.horsepower} HP</span>
            <span>${vehicle.transmission}</span>
          </div>
          <div class="vehicle-actions">
            <a href="vehicle-details.html?id=${vehicle.id}" class="btn-view">View Details</a>
            <button class="btn-compare" data-id="${vehicle.id}" title="Add to Compare">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 0h6a2 2 0 1 0 0 0h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 13.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm6 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  },
  
  /**
   * Create testimonial card HTML
   * @param {Object} testimonial - Testimonial data
   * @returns {string} HTML for testimonial card
   */
  createTestimonialCard(testimonial) {
    return `
      <div class="testimonial-card">
        <div class="testimonial-content">${testimonial.content}</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-title">${testimonial.title}</div>
      </div>
    `;
  },
  
  /**
   * Show notification
   * @param {string} message - Notification message
   * @param {string} type - Notification type (success, error, info)
   * @param {number} duration - Duration in milliseconds
   */
  showNotification(message, type = 'info', duration = 5000) {
    // Create notification element if it doesn't exist
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
      notificationContainer = document.createElement('div');
      notificationContainer.className = 'notification-container';
      document.body.appendChild(notificationContainer);
      
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .notification-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 1000;
        }
        .notification {
          padding: 15px 20px;
          margin-bottom: 10px;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: white;
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .notification.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .notification.success {
          background-color: var(--color-success);
        }
        .notification.error {
          background-color: var(--color-error);
        }
        .notification.info {
          background-color: var(--color-primary);
        }
      `;
      document.head.appendChild(style);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notificationContainer.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
      notification.classList.add('visible');
    }, 10);
    
    // Remove notification after duration
    setTimeout(() => {
      notification.classList.remove('visible');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, duration);
  },
  
  /**
   * Handle form submission with validation
   * @param {HTMLFormElement} form - Form element
   * @param {Function} submitCallback - Callback function for form submission
   */
  handleFormSubmit(form, submitCallback) {
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Validate form
      const isValid = this.validateForm(form);
      if (!isValid) return;
      
      // Collect form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Show loading state
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Processing...';
      submitButton.disabled = true;
      
      try {
        // Call the callback function
        const result = await submitCallback(data);
        
        // Show success message
        if (result.success) {
          this.showNotification(result.message, 'success');
          form.reset();
        } else {
          this.showNotification(result.message || 'An error occurred', 'error');
        }
      } catch (error) {
        this.showNotification('An error occurred. Please try again.', 'error');
        console.error('Form submission error:', error);
      } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  },
  
  /**
   * Validate form
   * @param {HTMLFormElement} form - Form to validate
   * @returns {boolean} True if form is valid
   */
  validateForm(form) {
    let isValid = true;
    
    // Remove existing error messages
    const existingErrors = form.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());
    
    // Check required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        this.showFieldError(field, 'This field is required');
      }
    });
    
    // Check email fields
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
      if (field.value.trim() && !this.isValidEmail(field.value)) {
        isValid = false;
        this.showFieldError(field, 'Please enter a valid email address');
      }
    });
    
    return isValid;
  },
  
  /**
   * Show error message for form field
   * @param {HTMLElement} field - Field with error
   * @param {string} message - Error message
   */
  showFieldError(field, message) {
    // Create error message element
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = 'var(--color-error)';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '5px';
    
    // Add error message after field
    field.parentNode.appendChild(error);
    
    // Highlight field
    field.style.borderColor = 'var(--color-error)';
    
    // Remove highlight when field is changed
    field.addEventListener('input', () => {
      field.style.borderColor = '';
      const errorEl = field.parentNode.querySelector('.error-message');
      if (errorEl) errorEl.remove();
    }, { once: true });
  },
  
  /**
   * Validate email address
   * @param {string} email - Email address to validate
   * @returns {boolean} True if email is valid
   */
  isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  
  /**
   * Get URL parameter
   * @param {string} name - Parameter name
   * @returns {string|null} Parameter value
   */
  getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },
  
  /**
   * Initialize tabs
   * @param {string} tabsContainerId - ID of tabs container
   */
  initTabs(tabsContainerId) {
    const tabsContainer = document.getElementById(tabsContainerId);
    if (!tabsContainer) return;
    
    const tabItems = tabsContainer.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabItems.forEach(item => item.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding tab content
        const target = tab.getAttribute('data-tab');
        const content = document.getElementById(target);
        if (content) content.classList.add('active');
      });
    });
    
    // Activate first tab by default
    if (tabItems.length > 0) {
      tabItems[0].click();
    }
  }
};