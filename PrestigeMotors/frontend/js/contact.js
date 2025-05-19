/**
 * Contact page functionality for the luxury car dealership website
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize API and UI
  await API.init();
  
  // Initialize contact form
  initContactForm();
});

/**
 * Initialize contact form
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  // Handle form submission
  UI.handleFormSubmit(form, async (data) => {
    // Submit contact form
    return await API.submitContactForm(data);
  });
}