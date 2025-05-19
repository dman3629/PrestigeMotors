/**
 * Inventory page functionality for the luxury car dealership website
 */

// Global variables
let vehicles = [];
let currentFilters = {
  brands: [],
  bodyTypes: [],
  yearMin: null,
  yearMax: null,
  priceMin: null,
  priceMax: null
};
let currentSort = 'price-asc';
let currentPage = 1;
const vehiclesPerPage = 9;

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize API and UI
  await API.init();
  
  // Load filter options
  await loadFilterOptions();
  
  // Load vehicles
  await loadVehicles();
  
  // Initialize sort functionality
  initSortFunctionality();
  
  // Initialize filter functionality
  initFilterFunctionality();
});

/**
 * Load filter options
 */
async function loadFilterOptions() {
  try {
    const filterOptions = await API.getFilterOptions();
    
    // Populate brand filters
    const brandFilters = document.getElementById('brand-filters');
    if (brandFilters) {
      let brandHtml = '';
      filterOptions.brands.forEach(brand => {
        brandHtml += `
          <div class="filter-option">
            <input type="checkbox" id="brand-${brand}" name="brand" value="${brand}">
            <label for="brand-${brand}">${brand}</label>
          </div>
        `;
      });
      brandFilters.innerHTML = brandHtml;
    }
    
    // Populate body type filters
    const bodyTypeFilters = document.getElementById('bodyType-filters');
    if (bodyTypeFilters) {
      let bodyTypeHtml = '';
      filterOptions.bodyTypes.forEach(bodyType => {
        bodyTypeHtml += `
          <div class="filter-option">
            <input type="checkbox" id="bodyType-${bodyType}" name="bodyType" value="${bodyType}">
            <label for="bodyType-${bodyType}">${bodyType}</label>
          </div>
        `;
      });
      bodyTypeFilters.innerHTML = bodyTypeHtml;
    }
  } catch (error) {
    console.error('Error loading filter options:', error);
    UI.showNotification('Failed to load filter options', 'error');
  }
}

/**
 * Load vehicles
 */
async function loadVehicles() {
  try {
    const inventoryGrid = document.getElementById('inventory-grid');
    if (!inventoryGrid) return;
    
    // Show loader
    inventoryGrid.innerHTML = '<div class="loader"></div>';
    
    // Get all vehicles
    vehicles = await API.getVehicles();
    
    // Apply filters and sort
    const filteredVehicles = applyFilters(vehicles);
    const sortedVehicles = applySort(filteredVehicles);
    
    // Update vehicle count
    updateVehicleCount(filteredVehicles.length);
    
    // Create pagination
    createPagination(filteredVehicles.length);
    
    // Get vehicles for current page
    const paginatedVehicles = applyPagination(sortedVehicles);
    
    // Create HTML for vehicles
    let html = '';
    
    if (paginatedVehicles.length === 0) {
      inventoryGrid.innerHTML = '<div class="no-results">No vehicles match your criteria. Please adjust your filters.</div>';
      return;
    }
    
    paginatedVehicles.forEach(vehicle => {
      html += UI.createVehicleCard(vehicle);
    });
    
    // Update container
    inventoryGrid.innerHTML = html;
    
    // Add event listeners for compare buttons
    const compareButtons = inventoryGrid.querySelectorAll('.btn-compare');
    compareButtons.forEach(button => {
      button.addEventListener('click', handleCompareClick);
    });
  } catch (error) {
    console.error('Error loading vehicles:', error);
    const inventoryGrid = document.getElementById('inventory-grid');
    if (inventoryGrid) {
      inventoryGrid.innerHTML = '<div class="error">An error occurred while loading vehicles. Please try again later.</div>';
    }
  }
}

/**
 * Apply filters to vehicles
 * @param {Array} vehicles - Array of vehicles
 * @returns {Array} Filtered vehicles
 */
function applyFilters(vehicles) {
  let filtered = [...vehicles];
  
  // Apply brand filter
  if (currentFilters.brands.length > 0) {
    filtered = filtered.filter(vehicle => currentFilters.brands.includes(vehicle.brand));
  }
  
  // Apply body type filter
  if (currentFilters.bodyTypes.length > 0) {
    filtered = filtered.filter(vehicle => currentFilters.bodyTypes.includes(vehicle.bodyType));
  }
  
  // Apply year filter
  if (currentFilters.yearMin) {
    filtered = filtered.filter(vehicle => vehicle.year >= currentFilters.yearMin);
  }
  
  if (currentFilters.yearMax) {
    filtered = filtered.filter(vehicle => vehicle.year <= currentFilters.yearMax);
  }
  
  // Apply price filter
  if (currentFilters.priceMin) {
    filtered = filtered.filter(vehicle => vehicle.price >= currentFilters.priceMin);
  }
  
  if (currentFilters.priceMax) {
    filtered = filtered.filter(vehicle => vehicle.price <= currentFilters.priceMax);
  }
  
  return filtered;
}

/**
 * Apply sort to vehicles
 * @param {Array} vehicles - Array of vehicles
 * @returns {Array} Sorted vehicles
 */
function applySort(vehicles) {
  const sorted = [...vehicles];
  
  switch (currentSort) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'year-desc':
      sorted.sort((a, b) => b.year - a.year);
      break;
    case 'year-asc':
      sorted.sort((a, b) => a.year - b.year);
      break;
    default:
      sorted.sort((a, b) => a.price - b.price);
  }
  
  return sorted;
}

/**
 * Apply pagination to vehicles
 * @param {Array} vehicles - Array of vehicles
 * @returns {Array} Paginated vehicles
 */
function applyPagination(vehicles) {
  const startIndex = (currentPage - 1) * vehiclesPerPage;
  const endIndex = startIndex + vehiclesPerPage;
  return vehicles.slice(startIndex, endIndex);
}

/**
 * Update vehicle count
 * @param {number} count - Number of vehicles
 */
function updateVehicleCount(count) {
  const countElement = document.getElementById('vehicle-count');
  if (countElement) {
    countElement.textContent = count;
  }
}

/**
 * Create pagination
 * @param {number} totalVehicles - Total number of vehicles
 */
function createPagination(totalVehicles) {
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;
  
  const totalPages = Math.ceil(totalVehicles / vehiclesPerPage);
  
  // If only one page, hide pagination
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }
  
  let paginationHtml = '';
  
  // Previous button
  paginationHtml += `
    <button class="pagination-item pagination-prev" ${currentPage === 1 ? 'disabled' : ''}>
      Previous
    </button>
  `;
  
  // Page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }
  
  // First page
  if (startPage > 1) {
    paginationHtml += `<button class="pagination-item" data-page="1">1</button>`;
    if (startPage > 2) {
      paginationHtml += `<span class="pagination-ellipsis">...</span>`;
    }
  }
  
  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    paginationHtml += `
      <button class="pagination-item ${i === currentPage ? 'active' : ''}" data-page="${i}">
        ${i}
      </button>
    `;
  }
  
  // Last page
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHtml += `<span class="pagination-ellipsis">...</span>`;
    }
    paginationHtml += `<button class="pagination-item" data-page="${totalPages}">${totalPages}</button>`;
  }
  
  // Next button
  paginationHtml += `
    <button class="pagination-item pagination-next" ${currentPage === totalPages ? 'disabled' : ''}>
      Next
    </button>
  `;
  
  // Update container
  paginationContainer.innerHTML = paginationHtml;
  
  // Add event listeners
  const pageButtons = paginationContainer.querySelectorAll('.pagination-item');
  pageButtons.forEach(button => {
    button.addEventListener('click', handlePageClick);
  });
}

/**
 * Handle click on pagination
 * @param {Event} e - Click event
 */
function handlePageClick(e) {
  e.preventDefault();
  
  const button = e.currentTarget;
  
  // If button is disabled, do nothing
  if (button.hasAttribute('disabled')) return;
  
  if (button.classList.contains('pagination-prev')) {
    currentPage--;
  } else if (button.classList.contains('pagination-next')) {
    currentPage++;
  } else {
    currentPage = parseInt(button.dataset.page, 10);
  }
  
  // Reload vehicles with new page
  loadVehicles();
  
  // Scroll to top
  window.scrollTo({
    top: document.querySelector('.inventory-section').offsetTop - 100,
    behavior: 'smooth'
  });
}

/**
 * Initialize sort functionality
 */
function initSortFunctionality() {
  const sortSelect = document.getElementById('sort-options');
  if (!sortSelect) return;
  
  // Set initial value
  sortSelect.value = currentSort;
  
  // Add event listener
  sortSelect.addEventListener('change', e => {
    currentSort = e.target.value;
    currentPage = 1; // Reset to first page
    loadVehicles();
  });
}

/**
 * Initialize filter functionality
 */
function initFilterFunctionality() {
  const applyFiltersButton = document.getElementById('apply-filters');
  const resetFiltersButton = document.getElementById('reset-filters');
  
  // Brand filters
  const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
  
  // Body type filters
  const bodyTypeCheckboxes = document.querySelectorAll('input[name="bodyType"]');
  
  // Year filters
  const yearMinInput = document.getElementById('year-min');
  const yearMaxInput = document.getElementById('year-max');
  
  // Price filters
  const priceMinInput = document.getElementById('price-min');
  const priceMaxInput = document.getElementById('price-max');
  
  // Apply filters
  if (applyFiltersButton) {
    applyFiltersButton.addEventListener('click', () => {
      // Get selected brands
      currentFilters.brands = [];
      brandCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          currentFilters.brands.push(checkbox.value);
        }
      });
      
      // Get selected body types
      currentFilters.bodyTypes = [];
      bodyTypeCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
          currentFilters.bodyTypes.push(checkbox.value);
        }
      });
      
      // Get year range
      currentFilters.yearMin = yearMinInput && yearMinInput.value ? parseInt(yearMinInput.value, 10) : null;
      currentFilters.yearMax = yearMaxInput && yearMaxInput.value ? parseInt(yearMaxInput.value, 10) : null;
      
      // Get price range
      currentFilters.priceMin = priceMinInput && priceMinInput.value ? parseInt(priceMinInput.value, 10) : null;
      currentFilters.priceMax = priceMaxInput && priceMaxInput.value ? parseInt(priceMaxInput.value, 10) : null;
      
      // Reset to first page
      currentPage = 1;
      
      // Reload vehicles
      loadVehicles();
    });
  }
  
  // Reset filters
  if (resetFiltersButton) {
    resetFiltersButton.addEventListener('click', () => {
      // Clear checkboxes
      brandCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      
      bodyTypeCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      
      // Clear inputs
      if (yearMinInput) yearMinInput.value = '';
      if (yearMaxInput) yearMaxInput.value = '';
      if (priceMinInput) priceMinInput.value = '';
      if (priceMaxInput) priceMaxInput.value = '';
      
      // Reset filters
      currentFilters = {
        brands: [],
        bodyTypes: [],
        yearMin: null,
        yearMax: null,
        priceMin: null,
        priceMax: null
      };
      
      // Reset to first page
      currentPage = 1;
      
      // Reload vehicles
      loadVehicles();
    });
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