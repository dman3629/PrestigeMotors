/**
 * Vehicle details page functionality for the luxury car dealership website
 */

// Global variables
let currentVehicle = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize API and UI
  await API.init();
  
  // Get vehicle ID from URL
  const vehicleId = UI.getUrlParameter('id');
  
  // If no vehicle ID, redirect to inventory
  if (!vehicleId) {
    window.location.href = 'inventory.html';
    return;
  }
  
  // Load vehicle details
  await loadVehicleDetails(vehicleId);
  
  // Load similar vehicles
  await loadSimilarVehicles(vehicleId);
  
  // Initialize inquiry form
  initInquiryForm(vehicleId);
  
  // Initialize tabs
  UI.initTabs('vehicle-tabs');
});

/**
 * Load vehicle details
 * @param {string} vehicleId - Vehicle ID
 */
async function loadVehicleDetails(vehicleId) {
  try {
    const vehicleInfo = document.getElementById('vehicle-info');
    if (!vehicleInfo) return;
    
    // Show loader
    vehicleInfo.innerHTML = '<div class="loader"></div>';
    
    // Get vehicle details
    currentVehicle = await API.getVehicleById(vehicleId);
    
    // If vehicle not found, show error
    if (!currentVehicle) {
      vehicleInfo.innerHTML = '<div class="error">Vehicle not found. <a href="inventory.html">Return to inventory</a></div>';
      return;
    }
    
    // Update page title
    document.title = `${currentVehicle.brand} ${currentVehicle.model} | Prestige Motors`;
    
    // Create HTML for vehicle details
    const html = createVehicleDetailsHTML(currentVehicle);
    
    // Update container
    vehicleInfo.innerHTML = html;
    
    // Initialize gallery functionality
    initGallery();
    
    // Set inquiry form value
    const vehicleIdInput = document.getElementById('vehicle-id');
    if (vehicleIdInput) vehicleIdInput.value = vehicleId;
  } catch (error) {
    console.error('Error loading vehicle details:', error);
    const vehicleInfo = document.getElementById('vehicle-info');
    if (vehicleInfo) {
      vehicleInfo.innerHTML = '<div class="error">An error occurred while loading vehicle details. Please try again later.</div>';
    }
  }
}

/**
 * Create HTML for vehicle details
 * @param {Object} vehicle - Vehicle data
 * @returns {string} HTML for vehicle details
 */
function createVehicleDetailsHTML(vehicle) {
  return `
    <div class="vehicle-header">
      <div class="vehicle-header-left">
        <h1>${vehicle.brand} ${vehicle.model}</h1>
        <p class="vehicle-subtitle">${vehicle.year} | ${vehicle.mileage} miles | ${vehicle.exteriorColor} Exterior | ${vehicle.interiorColor} Interior</p>
        <p class="vehicle-price">${UI.formatCurrency(vehicle.price)}</p>
      </div>
      <div class="vehicle-header-right">
        <p class="vehicle-id">Vehicle ID: ${vehicle.id}</p>
        <div class="vehicle-actions">
          <button class="btn-primary">Schedule Test Drive</button>
          <button class="btn-outline btn-compare" data-id="${vehicle.id}">Compare</button>
        </div>
      </div>
    </div>
    
    <div class="vehicle-gallery">
      <div class="gallery-main">
        <img src="${vehicle.gallery[0]}" alt="${vehicle.brand} ${vehicle.model}" id="main-image">
      </div>
      <div class="gallery-thumbnails">
        ${vehicle.gallery.slice(1, 3).map((image, index) => `
          <div class="gallery-thumbnail" data-index="${index + 1}">
            <img src="${image}" alt="${vehicle.brand} ${vehicle.model} - Image ${index + 2}">
          </div>
        `).join('')}
        <div class="gallery-more">
          <img src="${vehicle.gallery[3]}" alt="${vehicle.brand} ${vehicle.model} - Image 4">
          <div class="gallery-more-overlay">
            View All Photos
          </div>
        </div>
      </div>
    </div>
    
    <div class="vehicle-tabs" id="vehicle-tabs">
      <div class="tabs-nav">
        <div class="tab-item active" data-tab="tab-overview">Overview</div>
        <div class="tab-item" data-tab="tab-specs">Specifications</div>
        <div class="tab-item" data-tab="tab-features">Features</div>
      </div>
      
      <div id="tab-overview" class="tab-content active">
        <div class="vehicle-overview">
          <div class="vehicle-description">
            <h2>Vehicle Description</h2>
            <p>${vehicle.description}</p>
          </div>
          <div class="vehicle-highlights">
            <h3>Highlights</h3>
            <div class="highlights-list">
              ${vehicle.highlights.map(highlight => `
                <div class="highlight-item">
                  <span class="highlight-icon">✓</span>
                  <span>${highlight}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      
      <div id="tab-specs" class="tab-content">
        <h2>Detailed Specifications</h2>
        <table class="specs-table">
          <tr>
            <th>Brand</th>
            <td>${vehicle.brand}</td>
          </tr>
          <tr>
            <th>Model</th>
            <td>${vehicle.model}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>${vehicle.year}</td>
          </tr>
          <tr>
            <th>Mileage</th>
            <td>${vehicle.mileage} miles</td>
          </tr>
          <tr>
            <th>VIN</th>
            <td>${vehicle.vin}</td>
          </tr>
          <tr>
            <th>Exterior Color</th>
            <td>${vehicle.exteriorColor}</td>
          </tr>
          <tr>
            <th>Interior Color</th>
            <td>${vehicle.interiorColor}</td>
          </tr>
          <tr>
            <th>Fuel Type</th>
            <td>${vehicle.fuelType}</td>
          </tr>
          <tr>
            <th>Transmission</th>
            <td>${vehicle.transmission}</td>
          </tr>
          <tr>
            <th>Body Type</th>
            <td>${vehicle.bodyType}</td>
          </tr>
          <tr>
            <th>Drivetrain</th>
            <td>${vehicle.drivetrain}</td>
          </tr>
          <tr>
            <th>Engine</th>
            <td>${vehicle.engine}</td>
          </tr>
          <tr>
            <th>Horsepower</th>
            <td>${vehicle.horsepower} HP</td>
          </tr>
          <tr>
            <th>Torque</th>
            <td>${vehicle.torque} lb-ft</td>
          </tr>
          <tr>
            <th>Length</th>
            <td>${vehicle.specifications.dimensions.length}</td>
          </tr>
          <tr>
            <th>Width</th>
            <td>${vehicle.specifications.dimensions.width}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>${vehicle.specifications.dimensions.height}</td>
          </tr>
          <tr>
            <th>Wheelbase</th>
            <td>${vehicle.specifications.dimensions.wheelbase}</td>
          </tr>
          <tr>
            <th>Ground Clearance</th>
            <td>${vehicle.specifications.dimensions.groundClearance}</td>
          </tr>
          <tr>
            <th>Cargo Volume</th>
            <td>${vehicle.specifications.dimensions.cargoVolume}</td>
          </tr>
          <tr>
            <th>Acceleration (0-60 mph)</th>
            <td>${vehicle.specifications.performance.acceleration}</td>
          </tr>
          <tr>
            <th>Top Speed</th>
            <td>${vehicle.specifications.performance.topSpeed}</td>
          </tr>
          <tr>
            <th>Fuel Economy</th>
            <td>${vehicle.specifications.performance.fuelEconomy || vehicle.specifications.performance.range || 'N/A'}</td>
          </tr>
        </table>
      </div>
      
      <div id="tab-features" class="tab-content">
        <h2>Features & Options</h2>
        <div class="features-grid">
          <div class="feature-category">
            <h3>Exterior Features</h3>
            <div class="feature-list">
              ${vehicle.features.exterior.map(feature => `
                <div class="feature-item">
                  <span class="feature-check">✓</span>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="feature-category">
            <h3>Interior Features</h3>
            <div class="feature-list">
              ${vehicle.features.interior.map(feature => `
                <div class="feature-item">
                  <span class="feature-check">✓</span>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="feature-category">
            <h3>Safety Features</h3>
            <div class="feature-list">
              ${vehicle.features.safety.map(feature => `
                <div class="feature-item">
                  <span class="feature-check">✓</span>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="feature-category">
            <h3>Technology Features</h3>
            <div class="feature-list">
              ${vehicle.features.technology.map(feature => `
                <div class="feature-item">
                  <span class="feature-check">✓</span>
                  <span>${feature}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize gallery functionality
 */
function initGallery() {
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.gallery-thumbnail');
  const galleryMore = document.querySelector('.gallery-more');
  
  if (!mainImage || !thumbnails.length || !galleryMore) return;
  
  // Change main image when clicking on thumbnail
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      const index = parseInt(thumbnail.dataset.index, 10);
      mainImage.src = currentVehicle.gallery[index];
    });
  });
  
  // Handle click on "View All Photos"
  galleryMore.addEventListener('click', () => {
    // Simple gallery modal for demonstration
    createGalleryModal();
  });
}

/**
 * Create gallery modal
 */
function createGalleryModal() {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.className = 'modal-close';
  closeButton.innerHTML = '&times;';
  modalContent.appendChild(closeButton);
  
  // Create gallery
  const galleryContainer = document.createElement('div');
  galleryContainer.className = 'modal-gallery';
  
  // Add images
  currentVehicle.gallery.forEach((image, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'modal-image-container';
    
    const img = document.createElement('img');
    img.src = image;
    img.alt = `${currentVehicle.brand} ${currentVehicle.model} - Image ${index + 1}`;
    
    imgContainer.appendChild(img);
    galleryContainer.appendChild(imgContainer);
  });
  
  modalContent.appendChild(galleryContainer);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Prevent scrolling on body
  document.body.style.overflow = 'hidden';
  
  // Close modal when clicking close button
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  });
  
  // Close modal when clicking outside content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }
  });
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .gallery-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      overflow-y: auto;
      background-color: #fff;
      border-radius: 8px;
    }
    .modal-close {
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 30px;
      color: #fff;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 10;
    }
    .modal-gallery {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .modal-image-container {
      width: 100%;
    }
    .modal-image-container img {
      width: 100%;
      height: auto;
      display: block;
    }
    @media (min-width: 768px) {
      .modal-gallery {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Load similar vehicles
 * @param {string} vehicleId - Vehicle ID
 */
async function loadSimilarVehicles(vehicleId) {
  try {
    const similarContainer = document.getElementById('similar-vehicles');
    if (!similarContainer) return;
    
    // Show loader
    similarContainer.innerHTML = '<div class="loader"></div>';
    
    // Get similar vehicles
    const similarVehicles = await API.getSimilarVehicles(vehicleId);
    
    // If no similar vehicles, hide section
    if (!similarVehicles || similarVehicles.length === 0) {
      const similarSection = document.querySelector('.similar-vehicles');
      if (similarSection) similarSection.style.display = 'none';
      return;
    }
    
    // Create HTML for similar vehicles
    let html = '';
    similarVehicles.forEach(vehicle => {
      html += UI.createVehicleCard(vehicle);
    });
    
    // Update container
    similarContainer.innerHTML = html;
    
    // Add event listeners for compare buttons
    const compareButtons = similarContainer.querySelectorAll('.btn-compare');
    compareButtons.forEach(button => {
      button.addEventListener('click', handleCompareClick);
    });
  } catch (error) {
    console.error('Error loading similar vehicles:', error);
    const similarContainer = document.getElementById('similar-vehicles');
    if (similarContainer) {
      similarContainer.innerHTML = '<p class="error">An error occurred while loading similar vehicles.</p>';
    }
  }
}

/**
 * Initialize inquiry form
 * @param {string} vehicleId - Vehicle ID
 */
function initInquiryForm(vehicleId) {
  const form = document.getElementById('inquiry-form');
  if (!form) return;
  
  // Set vehicle ID
  const vehicleIdInput = document.getElementById('vehicle-id');
  if (vehicleIdInput) vehicleIdInput.value = vehicleId;
  
  // Handle form submission
  UI.handleFormSubmit(form, async (data) => {
    // Add vehicle info
    data.vehicleInfo = currentVehicle 
      ? `${currentVehicle.brand} ${currentVehicle.model} (${currentVehicle.year})`
      : `Vehicle ID: ${vehicleId}`;
    
    // Submit inquiry
    return await API.submitInquiry(data);
  });
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