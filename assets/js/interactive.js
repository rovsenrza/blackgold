// Tab functionality
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');
  
  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('[data-tab-button]');
    // Find the parent element that contains both buttons and panels
    const parentContainer = container.parentElement;
    // Search for panels in the parent container (siblings of the tabs container)
    const tabPanels = parentContainer.querySelectorAll('[data-tab-panel]');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab-button');
        
        // Update button states
        tabButtons.forEach(btn => {
          if (btn.getAttribute('data-tab-button') === targetTab) {
            btn.classList.remove('text-gold-600', 'hover:text-gold-400', 'hover:bg-gold-600/10');
            btn.classList.add('bg-gold-600/20', 'text-gold-400');
          } else {
            btn.classList.remove('bg-gold-600/20', 'text-gold-400');
            btn.classList.add('text-gold-600', 'hover:text-gold-400', 'hover:bg-gold-600/10');
          }
        });
        
        // Update panel visibility
        tabPanels.forEach(panel => {
          if (panel.getAttribute('data-tab-panel') === targetTab) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  });
}

// Modal functionality
function initModals() {
  // Open modal
  document.querySelectorAll('[data-modal-open]').forEach(button => {
    button.addEventListener('click', (e) => {
      const modalId = button.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // If button has data-card-data, populate modal with card data (for ecology page)
        const cardData = button.getAttribute('data-card-data');
        if (cardData) {
          try {
            const data = JSON.parse(cardData);
            populateModalWithCardData(modal, data);
          } catch (e) {
            console.error('Error parsing card data:', e);
          }
        }
        
        // If button has data-stake-data, populate modal with stake data (for energy page)
        const stakeData = button.getAttribute('data-stake-data');
        if (stakeData && modalId === 'stake-modal') {
          try {
            const data = JSON.parse(stakeData);
            populateStakeModal(modal, data);
          } catch (e) {
            console.error('Error parsing stake data:', e);
          }
        }
        
        // If button has data-trade-data, populate modal with trade data (for shares page)
        const tradeData = button.getAttribute('data-trade-data');
        if (tradeData && modalId === 'trade-modal') {
          try {
            const data = JSON.parse(tradeData);
            populateTradeModal(modal, data);
          } catch (e) {
            console.error('Error parsing trade data:', e);
          }
        }
        
        // If button has data-card-type, update modal title and card preview (for bank page)
        const cardType = button.getAttribute('data-card-type');
        if (cardType && modalId === 'order-card-modal') {
          const titleEl = modal.querySelector('[data-modal-title]');
          if (titleEl) {
            const cardNames = {
              'classic': 'Order Classic Card',
              'world': 'Order World Card',
              'premium': 'Order World Premium Card'
            };
            titleEl.textContent = cardNames[cardType] || 'Order Card';
          }
          
          // Update card preview box
          const cardPreview = modal.querySelector('[data-card-preview]');
          if (cardPreview) {
            const cardNameEl = cardPreview.querySelector('[data-card-name]');
            const cardIconEl = cardPreview.querySelector('[data-card-icon]');
            
            const cardData = {
              'classic': {
                name: 'Classic Card'
              },
              'world': {
                name: 'World Card'
              },
              'premium': {
                name: 'World Premium Card'
              }
            };
            
            // QrCode icon (same for all card types in preview, matching React code)
            const qrCodeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gold-400">
              <rect width="5" height="5" x="3" y="3" rx="1"></rect>
              <rect width="5" height="5" x="16" y="3" rx="1"></rect>
              <rect width="5" height="5" x="3" y="16" rx="1"></rect>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
              <path d="M21 21v.01"></path>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
              <path d="M3 12h.01"></path>
              <path d="M12 3h.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M16 12h1"></path>
              <path d="M21 12v.01"></path>
              <path d="M12 21v-1"></path>
            </svg>`;
            
            const card = cardData[cardType] || cardData['classic'];
            if (cardNameEl) {
              cardNameEl.textContent = card.name;
            }
            if (cardIconEl) {
              cardIconEl.innerHTML = qrCodeIcon;
            }
          }
          
          // Set up dynamic updates for cardholder name and phone
          const nameInput = modal.querySelector('#card-name-input');
          const phoneInput = modal.querySelector('#card-phone-input');
          const cardHolderNameEl = modal.querySelector('[data-card-holder-name]');
          const cardHolderPhoneEl = modal.querySelector('[data-card-holder-phone]');
          
          if (nameInput && cardHolderNameEl) {
            nameInput.addEventListener('input', (e) => {
              cardHolderNameEl.textContent = e.target.value || 'CARD HOLDER NAME';
            });
          }
          
          if (phoneInput && cardHolderPhoneEl) {
            phoneInput.addEventListener('input', (e) => {
              cardHolderPhoneEl.textContent = e.target.value || '+994 XX XXX XX XX';
            });
          }
        }
      }
    });
  });
  
  // Close modal
  document.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('[data-modal]');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close modal on backdrop click
  document.querySelectorAll('[data-modal]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[data-modal]').forEach(modal => {
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  });
}

// Populate stake modal (for energy page)
function populateStakeModal(modal, data) {
  const titleEl = modal.querySelector('[data-modal-title]');
  if (titleEl) titleEl.textContent = `Stake ${data.name || ''}`;
  
  const contentEl = modal.querySelector('[data-modal-content]');
  if (contentEl && data) {
    contentEl.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div class="w-16 h-16 bg-orange-600/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gold-400">${data.name || ''}</h3>
            <p class="text-gold-600">${data.symbol || ''}</p>
          </div>
        </div>
        <div class="bg-gold-600/10 rounded-lg p-4">
          <h4 class="text-gold-400 font-semibold mb-2">Current Price</h4>
          <p class="text-gold-400 text-2xl font-bold">${data.price || ''}</p>
          <p class="text-gold-600 text-sm mt-1">${data.change || ''}</p>
        </div>
        <div>
          <h4 class="text-gold-400 font-semibold mb-2">Staking Details</h4>
          <p class="text-gold-600 text-sm leading-relaxed">${data.description || ''}</p>
        </div>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.apy || ''}</p>
            <p class="text-gold-600 text-xs">APY</p>
          </div>
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.minStake || ''}</p>
            <p class="text-gold-600 text-xs">Min Stake</p>
          </div>
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.lockPeriod || ''}</p>
            <p class="text-gold-600 text-xs">Lock Period</p>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-gold-400 font-semibold">Stake Amount</h4>
          <input type="number" class="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none" placeholder="Enter amount" min="${data.minStake ? data.minStake.replace('$', '') : '0'}">
          <button class="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black hover:shadow-lg hover:shadow-gold-600/30 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">
            Confirm Stake
          </button>
        </div>
      </div>
    `;
  }
}

// Populate trade modal (for shares page)
function populateTradeModal(modal, data) {
  const titleEl = modal.querySelector('[data-modal-title]');
  if (titleEl) titleEl.textContent = `Trade ${data.symbol || ''}`;
  
  const contentEl = modal.querySelector('[data-modal-content]');
  if (contentEl && data) {
    const changeColor = data.change && data.change.includes('-') ? 'text-red-400' : 'text-green-400';
    contentEl.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div class="w-16 h-16 bg-gold-600/20 rounded-lg flex items-center justify-center text-4xl">
            ${data.symbol === 'TSLA' ? '🚗' : data.symbol === 'AAPL' ? '🍎' : data.symbol === 'SHEL' ? '🛢️' : '📈'}
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gold-400">${data.name || ''}</h3>
            <p class="text-gold-600">${data.symbol || ''}</p>
          </div>
        </div>
        <div class="bg-gold-600/10 rounded-lg p-4">
          <h4 class="text-gold-400 font-semibold mb-2">Current Price</h4>
          <p class="text-gold-400 text-2xl font-bold">${data.price || ''}</p>
          <p class="${changeColor} text-sm mt-1 font-semibold">${data.change || ''}</p>
          <span class="inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${data.sector === 'Technology' ? 'text-blue-400 bg-blue-600/20' : data.sector === 'Energy' ? 'text-orange-400 bg-orange-600/20' : 'text-green-400 bg-green-600/20'}">${data.sector || ''}</span>
        </div>
        <div>
          <h4 class="text-gold-400 font-semibold mb-2">Company Description</h4>
          <p class="text-gold-600 text-sm leading-relaxed">${data.description || ''}</p>
        </div>
        <div class="space-y-4">
          <h4 class="text-gold-400 font-semibold">Trade Options</h4>
          <div class="flex space-x-2">
            <button class="flex-1 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black hover:shadow-lg hover:shadow-gold-600/30 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">Buy Shares</button>
            <button class="flex-1 bg-gold-600/20 hover:bg-gold-600/30 text-gold-400 border border-gold-600/30 hover:border-gold-500/50 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">Sell Shares</button>
          </div>
          <div>
            <label class="block text-gold-400 text-sm font-medium mb-2">Number of Shares</label>
            <input type="number" class="w-full bg-black/50 border border-gold-600/30 rounded-lg px-4 py-2 text-gold-400 focus:border-gold-500 focus:outline-none" placeholder="0" min="1">
          </div>
          <button class="w-full border border-gold-600 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">
            Add to Watchlist
          </button>
        </div>
      </div>
    `;
  }
}

// Populate modal with card data (for ecology page)
function populateModalWithCardData(modal, data) {
  // Update modal title
  const titleEl = modal.querySelector('[data-modal-title]');
  if (titleEl) titleEl.textContent = data.title || '';
  
  // Update modal content
  const contentEl = modal.querySelector('[data-modal-content]');
  if (contentEl && data) {
    contentEl.innerHTML = `
      <div class="space-y-6">
        <div class="flex items-center space-x-3">
          <div class="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gold-400">${data.title || ''}</h3>
            <p class="text-gold-600">${data.location || ''}</p>
          </div>
        </div>
        <div class="bg-gold-600/10 rounded-lg p-4">
          <h4 class="text-gold-400 font-semibold mb-2">Environmental Impact</h4>
          <p class="text-gold-600">${data.impact || ''}</p>
        </div>
        <div>
          <h4 class="text-gold-400 font-semibold mb-2">Project Details</h4>
          <p class="text-gold-600 text-sm leading-relaxed">${data.details || ''}</p>
        </div>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.raised || ''}</p>
            <p class="text-gold-600 text-xs">Raised</p>
          </div>
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.participants || ''}</p>
            <p class="text-gold-600 text-xs">Investors</p>
          </div>
          <div class="bg-black/30 rounded-lg p-3">
            <p class="text-gold-400 font-semibold">${data.progress || ''}%</p>
            <p class="text-gold-600 text-xs">Complete</p>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-gold-400 font-semibold">Investment Options</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button class="px-3 py-1.5 text-sm border border-gold-600 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">$100</button>
            <button class="px-3 py-1.5 text-sm border border-gold-600 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">$500</button>
            <button class="px-3 py-1.5 text-sm border border-gold-600 text-gold-400 hover:bg-gold-600/10 hover:border-gold-500 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">$1,000</button>
          </div>
          <button class="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black hover:shadow-lg hover:shadow-gold-600/30 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 cursor-pointer">
            Invest Now
          </button>
        </div>
      </div>
    `;
  }
}

// Language dropdown functionality
function initLanguageDropdown() {
  const languageData = {
    en: { flag: '🇺🇸', name: 'English', code: 'EN' },
    az: { flag: '🇦🇿', name: 'Azərbaycan', code: 'AZ' },
    tr: { flag: '🇹🇷', name: 'Türkçe', code: 'TR' },
    ru: { flag: '🇷🇺', name: 'Русский', code: 'RU' },
    ar: { flag: '🇸🇦', name: 'العربية', code: 'AR' },
    fr: { flag: '🇫🇷', name: 'Français', code: 'FR' },
    de: { flag: '🇩🇪', name: 'Deutsch', code: 'DE' },
    es: { flag: '🇪🇸', name: 'Español', code: 'ES' }
  };
  
  // Get saved language or default to 'en'
  let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
  
  const dropdowns = document.querySelectorAll('[data-language-dropdown]');
  
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('[data-language-button]');
    const menu = dropdown.querySelector('[data-language-menu]');
    const backdrop = dropdown.querySelector('[data-language-backdrop]');
    const display = dropdown.querySelector('[data-language-display]');
    const chevron = dropdown.querySelector('[data-language-chevron]');
    const options = dropdown.querySelectorAll('[data-language-option]');
    
    // Update display with current language
    const updateDisplay = (lang) => {
      const langData = languageData[lang];
      if (display && langData) {
        display.textContent = `${langData.flag} ${langData.code}`;
      }
      
      // Update active state in menu
      options.forEach(opt => {
        const optLang = opt.getAttribute('data-language-option');
        if (optLang === lang) {
          opt.classList.remove('text-gold-600');
          opt.classList.add('bg-gold-600/20', 'text-gold-400');
        } else {
          opt.classList.remove('bg-gold-600/20', 'text-gold-400');
          opt.classList.add('text-gold-600');
        }
      });
    };
    
    // Initialize display
    updateDisplay(currentLanguage);
    
    // Toggle dropdown
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !menu.classList.contains('hidden');
      
      if (isOpen) {
        menu.classList.add('hidden');
        backdrop.classList.add('hidden');
        chevron.classList.remove('rotate-180');
      } else {
        menu.classList.remove('hidden');
        backdrop.classList.remove('hidden');
        chevron.classList.add('rotate-180');
      }
    });
    
    // Handle language selection
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-language-option');
        currentLanguage = selectedLang;
        localStorage.setItem('selectedLanguage', selectedLang);
        updateDisplay(selectedLang);
        menu.classList.add('hidden');
        backdrop.classList.add('hidden');
        chevron.classList.remove('rotate-180');
      });
    });
    
    // Close on backdrop click
    backdrop.addEventListener('click', () => {
      menu.classList.add('hidden');
      backdrop.classList.add('hidden');
      chevron.classList.remove('rotate-180');
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        backdrop.classList.add('hidden');
        chevron.classList.remove('rotate-180');
      }
    });
  });
}

// Forecast page functionality
function initForecastPage() {
  // Only run on forecast page
  if (!document.querySelector('[data-forecast-timeframes]')) return;
  
  const currentPrice = 82.45;
  let selectedDays = 7;
  let isLoading = false;
  
  const forecastData = {
    7: { accuracy: 85, predictedPrice: 85.20, confidence: 78, trend: 'bullish' },
    14: { accuracy: 78, predictedPrice: 84.50, confidence: 75, trend: 'bullish' },
    30: { accuracy: 72, predictedPrice: 83.80, confidence: 70, trend: 'bullish' },
    90: { accuracy: 65, predictedPrice: 82.90, confidence: 65, trend: 'stable' }
  };
  
  const factors = [
    ['OPEC+ production cuts', 'Increased global demand', 'Geopolitical tensions', 'Seasonal consumption patterns'],
    ['OPEC+ production decisions', 'Global economic indicators', 'Seasonal demand patterns', 'Inventory level changes'],
    ['Currency fluctuations', 'Renewable energy adoption', 'Market sentiment', 'Supply chain disruptions'],
    ['Long-term economic trends', 'Energy transition policies', 'Global trade patterns', 'Climate regulations']
  ];
  
  function updateForecastData(days) {
    selectedDays = days;
    const data = forecastData[days];
    if (!data) return;
    
    // Update confidence
    const confidenceEl = document.querySelector('[data-forecast-confidence]');
    if (confidenceEl) {
      confidenceEl.textContent = `${data.confidence}%`;
    }
    
    // Update days text
    const daysTextEl = document.querySelector('[data-forecast-days-text]');
    if (daysTextEl) {
      daysTextEl.textContent = `${days} day forecast`;
    }
    
    // Update predicted price
    const priceEl = document.querySelector('[data-forecast-price]');
    if (priceEl) {
      priceEl.textContent = `$${data.predictedPrice.toFixed(2)}`;
    }
    
    // Update trend
    const trendEl = document.querySelector('[data-forecast-trend]');
    if (trendEl) {
      trendEl.textContent = `${data.trend} trend`;
      trendEl.className = `text-sm mt-1 ${data.trend === 'bullish' ? 'text-green-400' : data.trend === 'bearish' ? 'text-red-400' : 'text-gold-400'}`;
    }
    
    // Update price change
    const change = ((data.predictedPrice - currentPrice) / currentPrice) * 100;
    const changeEl = document.querySelector('[data-forecast-change]');
    if (changeEl) {
      changeEl.textContent = `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
      changeEl.className = `text-2xl font-bold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`;
    }
    
    // Update factors based on days
    const factorsEl = document.querySelector('[data-forecast-factors]');
    if (factorsEl) {
      const factorIndex = days === 7 ? 0 : days === 14 ? 1 : days === 30 ? 2 : 3;
      factorsEl.innerHTML = factors[factorIndex].map(factor => `
        <li class="text-gold-600 text-sm flex items-center space-x-2">
          <span class="text-gold-400">•</span>
          <span>${factor}</span>
        </li>
      `).join('');
    }
    
    // Update chart
    updateChart(days);
  }
  
  function updateChart(days) {
    const chartBars = document.querySelector('[data-chart-bars]');
    if (!chartBars) return;
    
    // Clear existing bars
    chartBars.innerHTML = '';
    
    // Generate bars for the selected timeframe
    // For 7 days: show 7 bars (Now + 6 days)
    // For longer timeframes: show representative bars
    let numBars = 7;
    if (days === 14) numBars = 7; // Show weekly points
    else if (days === 30) numBars = 7; // Show weekly points
    else if (days === 90) numBars = 7; // Show monthly points
    
    const baseHeight = 30;
    const historicalBars = Math.min(4, Math.floor(numBars * 0.6)); // First 60% are historical
    
    for (let i = 0; i < numBars; i++) {
      const isFirst = i === 0;
      const isPredicted = i >= historicalBars;
      // Generate heights that trend upward for predicted values
      const progress = i / (numBars - 1);
      const height = baseHeight + (progress * 55) + (Math.random() * 10 - 5);
      const clampedHeight = Math.max(25, Math.min(95, height));
      
      let label = '';
      if (isFirst) {
        label = 'Now';
      } else if (days === 7) {
        label = `+${i}d`;
      } else if (days === 14) {
        label = `+${i * 2}d`;
      } else if (days === 30) {
        label = `+${Math.round(i * 4.3)}d`;
      } else {
        label = `+${Math.round(i * 13)}d`;
      }
      
      const barDiv = document.createElement('div');
      barDiv.className = 'flex flex-col items-center space-y-2';
      barDiv.innerHTML = `
        <div class="w-6 rounded-t ${isFirst ? 'bg-gold-400' : isPredicted ? 'bg-blue-400/70' : 'bg-gold-600/70'}" style="height: ${clampedHeight}%"></div>
        <span class="text-xs text-gold-600">${label}</span>
      `;
      chartBars.appendChild(barDiv);
    }
  }
  
  function refreshForecast() {
    if (isLoading) return;
    
    isLoading = true;
    const chartBars = document.querySelector('[data-chart-bars]');
    const chartLoading = document.querySelector('[data-chart-loading]');
    const refreshButton = document.querySelector('[data-refresh-forecast]');
    
    // Show loading state
    if (chartBars) chartBars.style.opacity = '0.3';
    if (chartLoading) {
      chartLoading.classList.remove('hidden');
      chartLoading.style.display = 'flex';
    }
    if (refreshButton) {
      refreshButton.disabled = true;
      refreshButton.textContent = 'Analyzing...';
      refreshButton.style.opacity = '0.6';
      refreshButton.style.cursor = 'not-allowed';
    }
    
    // Simulate AI analysis (2 seconds)
    setTimeout(() => {
      // Generate new random forecast data
      const variation = 0.05;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const multiplier = selectedDays / 7;
      const newPrice = currentPrice + (currentPrice * variation * direction * multiplier);
      const newConfidence = Math.max(50, 90 - (selectedDays / 7) * 5);
      const newTrend = newPrice > currentPrice ? 'bullish' : 'bearish';
      
      // Update forecast data
      forecastData[selectedDays] = {
        accuracy: forecastData[selectedDays].accuracy,
        predictedPrice: parseFloat(newPrice.toFixed(2)),
        confidence: Math.round(newConfidence),
        trend: newTrend
      };
      
      // Update UI
      updateForecastData(selectedDays);
      
      // Hide loading state
      if (chartBars) chartBars.style.opacity = '1';
      if (chartLoading) {
        chartLoading.classList.add('hidden');
        chartLoading.style.display = 'none';
      }
      if (refreshButton) {
        refreshButton.disabled = false;
        refreshButton.textContent = 'Refresh Forecast';
        refreshButton.style.opacity = '1';
        refreshButton.style.cursor = 'pointer';
      }
      
      isLoading = false;
    }, 2000);
  }
  
  // Initialize timeframe buttons
  const timeframeButtons = document.querySelectorAll('[data-forecast-days]');
  timeframeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const days = parseInt(button.getAttribute('data-forecast-days'));
      
      // Update button styles
      timeframeButtons.forEach(btn => {
        const btnDays = parseInt(btn.getAttribute('data-forecast-days'));
        if (btnDays === days) {
          // Active button - primary style
          btn.classList.remove('border', 'border-gold-600', 'text-gold-400', 'hover:bg-gold-600/10', 'hover:border-gold-500');
          btn.classList.add('bg-gradient-to-r', 'from-gold-600', 'to-gold-500', 'hover:from-gold-500', 'hover:to-gold-400', 'text-black', 'hover:shadow-lg', 'hover:shadow-gold-600/30');
        } else {
          // Inactive button - outline style
          btn.classList.remove('bg-gradient-to-r', 'from-gold-600', 'to-gold-500', 'hover:from-gold-500', 'hover:to-gold-400', 'text-black', 'hover:shadow-lg', 'hover:shadow-gold-600/30');
          btn.classList.add('border', 'border-gold-600', 'text-gold-400', 'hover:bg-gold-600/10', 'hover:border-gold-500');
        }
      });
      
      // Update forecast data
      updateForecastData(days);
    });
  });
  
  // Initialize refresh button
  const refreshButton = document.querySelector('[data-refresh-forecast]');
  if (refreshButton) {
    refreshButton.addEventListener('click', refreshForecast);
  }
  
  // Initialize chart
  updateChart(selectedDays);
}

// Profile page functionality
function initProfilePage() {
  // Load saved name from localStorage and update profile fields
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    // Update profile display if on profile page
    const profileNameDisplay = document.querySelector('[data-profile-field="name"][data-profile-display]');
    if (profileNameDisplay) {
      profileNameDisplay.textContent = savedName;
    }
    const profileNameInput = document.querySelector('[data-profile-field="name"][data-profile-input]');
    if (profileNameInput) {
      profileNameInput.value = savedName;
    }
  }
  
  // Profile edit mode toggle
  const editToggle = document.querySelector('[data-profile-edit-toggle]');
  const profileForm = document.querySelector('[data-profile-form]');
  let isEditMode = false;
  const originalValues = {};
  
  if (editToggle && profileForm) {
    // Store original values
    document.querySelectorAll('[data-profile-display]').forEach(display => {
      const field = display.getAttribute('data-profile-field');
      originalValues[field] = display.textContent.trim();
    });
    
    editToggle.addEventListener('click', () => {
      isEditMode = !isEditMode;
      
      if (isEditMode) {
        // Enter edit mode
        editToggle.textContent = 'Cancel';
        editToggle.classList.remove('bg-gold-600/20');
        editToggle.classList.add('border', 'border-gold-600/30', 'hover:bg-gold-600/30');
        
        // Show inputs, hide displays
        document.querySelectorAll('[data-profile-display]').forEach(display => {
          display.classList.add('hidden');
        });
        document.querySelectorAll('[data-profile-input]').forEach(input => {
          input.classList.remove('hidden');
        });
        
        // Show save button
        const saveButton = document.querySelector('[data-profile-save]');
        if (saveButton) {
          saveButton.classList.remove('hidden');
        }
      } else {
        // Exit edit mode
        editToggle.textContent = 'Edit';
        editToggle.classList.add('bg-gold-600/20');
        editToggle.classList.remove('border', 'border-gold-600/30', 'hover:bg-gold-600/30');
        
        // Restore original values
        document.querySelectorAll('[data-profile-input]').forEach(input => {
          const field = input.getAttribute('data-profile-field');
          input.value = originalValues[field];
        });
        
        // Show displays, hide inputs
        document.querySelectorAll('[data-profile-display]').forEach(display => {
          display.classList.remove('hidden');
        });
        document.querySelectorAll('[data-profile-input]').forEach(input => {
          input.classList.add('hidden');
        });
        
        // Hide save button
        const saveButton = document.querySelector('[data-profile-save]');
        if (saveButton) {
          saveButton.classList.add('hidden');
        }
      }
    });
    
    // Save changes
    const saveButton = document.querySelector('[data-profile-save]');
    if (saveButton) {
      saveButton.addEventListener('click', () => {
        // Update display values from inputs
        document.querySelectorAll('[data-profile-input]').forEach(input => {
          const field = input.getAttribute('data-profile-field');
          const display = document.querySelector(`[data-profile-field="${field}"][data-profile-display]`);
          if (display) {
            const newValue = input.value;
            display.textContent = newValue;
            originalValues[field] = newValue;
            
            // If this is the name field, also update the header and save to localStorage
            if (field === 'name') {
              // Save to localStorage for persistence across pages
              localStorage.setItem('userName', newValue);
              
              // Update header on current page
              const headerNameElements = document.querySelectorAll('[data-header-name]');
              headerNameElements.forEach(el => {
                el.textContent = `Welcome, ${newValue}`;
              });
            }
          }
        });
        
        // Exit edit mode
        isEditMode = false;
        editToggle.textContent = 'Edit';
        editToggle.classList.add('bg-gold-600/20');
        editToggle.classList.remove('border', 'border-gold-600/30', 'hover:bg-gold-600/30');
        
        // Show displays, hide inputs
        document.querySelectorAll('[data-profile-display]').forEach(display => {
          display.classList.remove('hidden');
        });
        document.querySelectorAll('[data-profile-input]').forEach(input => {
          input.classList.add('hidden');
        });
        
        // Hide save button
        saveButton.classList.add('hidden');
        
        // Show success message (optional)
        // You could add a toast notification here
      });
    }
  }
  
  // Settings preferences
  // Language selection
  const languageSelect = document.querySelector('[data-settings-language]');
  if (languageSelect) {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    
    languageSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('selectedLanguage', selectedLang);
      // Update header language dropdown if it exists
      const headerLanguageDisplay = document.querySelector('[data-language-display]');
      if (headerLanguageDisplay) {
        const languages = {
          'en': '🇺🇸 EN',
          'az': '🇦🇿 AZ',
          'tr': '🇹🇷 TR',
          'ru': '🇷🇺 RU'
        };
        headerLanguageDisplay.textContent = languages[selectedLang] || languages['en'];
      }
    });
  }
  
  // Theme toggle
  const themeButton = document.querySelector('[data-settings-theme]');
  const themeIcon = document.querySelector('[data-theme-icon]');
  if (themeButton) {
    // Load saved theme from localStorage
    let currentTheme = localStorage.getItem('theme') || 'dark';
    updateThemeButton(currentTheme, themeButton, themeIcon);
    
    themeButton.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', currentTheme);
      updateThemeButton(currentTheme, themeButton, themeIcon);
    });
  }
  
  // Notifications toggle
  const notificationsButton = document.querySelector('[data-settings-notifications]');
  if (notificationsButton) {
    // Load saved notifications state from localStorage
    let notificationsEnabled = localStorage.getItem('notifications') !== 'false'; // default true
    updateNotificationsButton(notificationsEnabled, notificationsButton);
    
    notificationsButton.addEventListener('click', () => {
      notificationsEnabled = !notificationsEnabled;
      localStorage.setItem('notifications', notificationsEnabled.toString());
      updateNotificationsButton(notificationsEnabled, notificationsButton);
    });
  }
}

function updateThemeButton(theme, button, icon) {
  if (theme === 'dark') {
    button.textContent = 'Dark Mode';
    button.className = 'px-3 py-1.5 border border-gold-600/30 text-gold-400 hover:bg-gold-600/10 rounded-lg text-sm transition-colors';
    if (icon) {
      // Moon icon (dark mode)
      icon.innerHTML = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>';
    }
  } else {
    button.textContent = 'Light Mode';
    button.className = 'px-3 py-1.5 border border-gold-600/30 text-gold-400 hover:bg-gold-600/10 rounded-lg text-sm transition-colors';
    if (icon) {
      // Sun icon (light mode) - full SVG structure
      icon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>';
    }
  }
}

function updateNotificationsButton(enabled, button) {
  if (enabled) {
    button.textContent = 'Enabled';
    button.className = 'px-3 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black font-medium rounded-lg text-sm transition-all duration-300';
  } else {
    button.textContent = 'Disabled';
    button.className = 'px-3 py-1.5 border border-gold-600/30 text-gold-400 hover:bg-gold-600/10 rounded-lg text-sm transition-colors';
  }
}

// Load saved user name on all pages
function loadUserName() {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    const headerNameElements = document.querySelectorAll('[data-header-name]');
    headerNameElements.forEach(el => {
      el.textContent = `Welcome, ${savedName}`;
    });
  }
}

// Initialize market ticker with real data
function initMarketTicker() {
  const tickerContainer = document.querySelector('[data-ticker-container]');
  if (!tickerContainer) return;
  
  // Add data attributes to price elements if not already present
  const tickerContent = document.querySelector('[data-ticker-content]');
  if (tickerContent) {
    const items = tickerContent.querySelectorAll('.inline-flex.items-center');
    items.forEach((item, index) => {
      const symbolSpan = item.querySelector('.text-gold-400.font-semibold');
      const priceSpan = item.querySelector('.text-gold-600');
      const percentSpan = item.querySelector('.flex.items-center.space-x-1 span');
      
      if (symbolSpan && priceSpan && percentSpan) {
        const symbol = symbolSpan.textContent.trim().toLowerCase();
        if (!priceSpan.hasAttribute('data-ticker-price')) {
          priceSpan.setAttribute('data-ticker-price', '');
          priceSpan.setAttribute('data-ticker-symbol', symbol);
        }
        if (!percentSpan.hasAttribute('data-ticker-percent')) {
          percentSpan.setAttribute('data-ticker-percent', '');
          percentSpan.setAttribute('data-ticker-symbol', symbol);
        }
      }
    });
  }
  
  // Store previous prices for calculating change
  const previousPrices = JSON.parse(localStorage.getItem('tickerPrices') || '{}');
  const currentPrices = {};
  
  // Update ticker item
  function updateTickerItem(symbol, price, changePercent) {
    const priceElements = document.querySelectorAll(`[data-ticker-price][data-ticker-symbol="${symbol}"]`);
    const percentElements = document.querySelectorAll(`[data-ticker-percent][data-ticker-symbol="${symbol}"]`);
    
    // Format price based on symbol
    let formattedPrice = price;
    if (symbol === 'btc' || symbol === 'eth') {
      formattedPrice = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (symbol === 'gold') {
      formattedPrice = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (symbol === 'oil') {
      formattedPrice = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
      formattedPrice = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    
    // Update all price elements (duplicated for scroll effect)
    priceElements.forEach(el => {
      el.textContent = formattedPrice;
    });
    
    // Format and update percent change
    const isPositive = changePercent >= 0;
    const formattedPercent = `${isPositive ? '+' : ''}${changePercent.toFixed(2)}%`;
    
    percentElements.forEach(el => {
      el.textContent = formattedPercent;
    });
    
    // Update icon and color based on change
    const changeContainers = document.querySelectorAll(`[data-ticker-percent][data-ticker-symbol="${symbol}"]`);
    changeContainers.forEach(container => {
      const changeDiv = container.closest('.flex.items-center.space-x-1');
      if (changeDiv) {
        const icon = changeDiv.querySelector('svg');
        
        if (isPositive) {
          changeDiv.className = 'flex items-center space-x-1 text-green-400';
          // Trending up icon - preserve SVG structure
          if (icon) {
            icon.innerHTML = '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>';
          }
        } else {
          changeDiv.className = 'flex items-center space-x-1 text-red-400';
          // Trending down icon - preserve SVG structure
          if (icon) {
            icon.innerHTML = '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline>';
          }
        }
      }
    });
    
    currentPrices[symbol] = price;
  }
  
  // Fetch Bitcoin and Ethereum from CoinGecko
  async function fetchCryptoPrices() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true');
      const data = await response.json();
      
      if (data.bitcoin) {
        const btcPrice = data.bitcoin.usd;
        const btcChange = data.bitcoin.usd_24h_change || 0;
        updateTickerItem('btc', btcPrice, btcChange);
      }
      
      if (data.ethereum) {
        const ethPrice = data.ethereum.usd;
        const ethChange = data.ethereum.usd_24h_change || 0;
        updateTickerItem('eth', ethPrice, ethChange);
      }
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  }
  
  // Fetch Gold and Oil prices
  async function fetchCommodityPrices() {
    try {
      // Fetch Gold price - simulate realistic real-time price movements
      const prevGold = previousPrices.gold || 2055;
      // Small incremental changes for real-time feel (±0.1% to ±0.5% per update)
      const goldChangePercent = (Math.random() * 0.8 - 0.4); // -0.4% to +0.4%
      const goldPrice = prevGold * (1 + goldChangePercent / 100);
      // Calculate 24h change based on stored previous price
      const gold24hChange = prevGold ? ((goldPrice - prevGold) / prevGold) * 100 : goldChangePercent;
      updateTickerItem('gold', goldPrice, gold24hChange);
      
      // Fetch Oil price (WTI Crude) - simulate realistic real-time price movements
      const prevOil = previousPrices.oil || 82;
      // Small incremental changes for real-time feel (±0.1% to ±0.5% per update)
      const oilChangePercent = (Math.random() * 0.8 - 0.4); // -0.4% to +0.4%
      const oilPrice = prevOil * (1 + oilChangePercent / 100);
      // Calculate 24h change based on stored previous price
      const oil24hChange = prevOil ? ((oilPrice - prevOil) / prevOil) * 100 : oilChangePercent;
      updateTickerItem('oil', oilPrice, oil24hChange);
      
      // Try to fetch real data from a free API if available
      // You can replace this with a real API endpoint that doesn't require authentication
      try {
        // Example: Using exchangerate-api.com or similar free service
        // This is a placeholder - replace with actual API endpoint
        const commodityResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        // Process response if needed
      } catch (apiError) {
        // Fallback to simulated values (already set above)
        console.log('Using simulated commodity prices');
      }
    } catch (error) {
      console.error('Error fetching commodity prices:', error);
    }
  }
  
  // Simulate custom tokens (BGC, SOLAR, WIND) with realistic real-time movements
  function updateCustomTokens() {
    // BGC - simulate around $0.80-0.90 with small incremental changes
    const prevBgc = previousPrices.bgc || 0.86;
    const bgcChangePercent = (Math.random() * 1.0 - 0.5); // -0.5% to +0.5%
    const bgcPrice = prevBgc * (1 + bgcChangePercent / 100);
    const bgcChange = prevBgc ? ((bgcPrice - prevBgc) / prevBgc) * 100 : bgcChangePercent;
    updateTickerItem('bgc', bgcPrice, bgcChange);
    
    // SOLAR - simulate around $150-165 with small incremental changes
    const prevSolar = previousPrices.solar || 158;
    const solarChangePercent = (Math.random() * 0.8 - 0.4); // -0.4% to +0.4%
    const solarPrice = prevSolar * (1 + solarChangePercent / 100);
    const solarChange = prevSolar ? ((solarPrice - prevSolar) / prevSolar) * 100 : solarChangePercent;
    updateTickerItem('solar', solarPrice, solarChange);
    
    // WIND - simulate around $85-95 with small incremental changes
    const prevWind = previousPrices.wind || 89;
    const windChangePercent = (Math.random() * 0.8 - 0.4); // -0.4% to +0.4%
    const windPrice = prevWind * (1 + windChangePercent / 100);
    const windChange = prevWind ? ((windPrice - prevWind) / prevWind) * 100 : windChangePercent;
    updateTickerItem('wind', windPrice, windChange);
  }
  
  // Fetch all prices
  async function fetchAllPrices() {
    await Promise.all([
      fetchCryptoPrices(),
      fetchCommodityPrices(),
      Promise.resolve(updateCustomTokens())
    ]);
    
    // Save current prices for next update
    localStorage.setItem('tickerPrices', JSON.stringify(currentPrices));
  }
  
  // Initial fetch
  fetchAllPrices();
  
  // Update every 5 seconds for real-time data
  setInterval(fetchAllPrices, 5000);
}

// Initialize trading page with real crypto data and Buy/Sell functionality
function initTradingPage() {
  // Check if we're on the trading page
  const isTradingPage = window.location.pathname.includes('trading.html') || 
                        window.location.href.includes('trading.html') ||
                        document.querySelector('[data-tab-panel="crypto"]');
  
  if (!isTradingPage) return;
  
  // Initialize Buy/Sell buttons
  initTradeButtons();
  
  const tradingTable = document.querySelector('table tbody');
  if (!tradingTable) return;
  
  // Map of symbols to CoinGecko IDs
  const cryptoMap = {
    'BTC': 'bitcoin',
    'ETH': 'ethereum',
    'ADA': 'cardano',
    'SOL': 'solana'
  };
  
  async function updateCryptoPrices() {
    const symbols = Object.keys(cryptoMap);
    const ids = Object.values(cryptoMap).join(',');
    
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true`);
      const data = await response.json();
      
      symbols.forEach(symbol => {
        const coinId = cryptoMap[symbol];
        const coinData = data[coinId];
        if (!coinData) return;
        
        // Find all rows with this symbol
        const rows = Array.from(tradingTable.querySelectorAll('tr'));
        rows.forEach(row => {
          const symbolCell = row.querySelector('.font-semibold.text-gold-400');
          if (symbolCell && symbolCell.textContent.trim() === symbol) {
            // Update price
            const priceCell = row.querySelector('td.text-right.text-gold-400.font-semibold');
            if (priceCell) {
              const price = coinData.usd;
              priceCell.textContent = `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            }
            
            // Update 24h change
            const changeCell = row.querySelector('td.text-right.font-semibold');
            if (changeCell && changeCell.classList.contains('text-green-400') || changeCell.classList.contains('text-red-400')) {
              const change = coinData.usd_24h_change || 0;
              const isPositive = change >= 0;
              changeCell.textContent = `${isPositive ? '+' : ''}${change.toFixed(2)}%`;
              changeCell.className = `text-right py-4 font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`;
            }
            
            // Update volume
            const volumeCell = row.querySelectorAll('td.text-right.text-gold-600')[1];
            if (volumeCell && coinData.usd_24h_vol) {
              const volume = coinData.usd_24h_vol;
              let formattedVol = '';
              if (volume >= 1e9) {
                formattedVol = `$${(volume / 1e9).toFixed(1)}B`;
              } else if (volume >= 1e6) {
                formattedVol = `$${(volume / 1e6).toFixed(1)}M`;
              } else {
                formattedVol = `$${(volume / 1e3).toFixed(1)}K`;
              }
              volumeCell.textContent = formattedVol;
            }
          }
        });
      });
    } catch (error) {
      console.error('Error fetching crypto prices for trading page:', error);
    }
  }
  
  updateCryptoPrices();
  setInterval(updateCryptoPrices, 10000); // Update every 10 seconds for real-time data
}

// Initialize Buy/Sell trade buttons
function initTradeButtons() {
  const tradeButtons = document.querySelectorAll('[data-trade-action]');
  const tradeModal = document.getElementById('trade-modal');
  
  if (!tradeModal) return;
  
  tradeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const action = button.getAttribute('data-trade-action'); // "buy" or "sell"
      const symbol = button.getAttribute('data-trade-symbol');
      const name = button.getAttribute('data-trade-name');
      
      // Get current price from the row or card
      let currentPrice = 0;
      const row = button.closest('tr');
      
      if (row) {
        // For crypto table rows
        const priceCell = row.querySelector('[data-crypto-price]') || row.querySelector('.text-right.text-gold-400.font-semibold');
        if (priceCell) {
          const priceText = priceCell.textContent.replace('$', '').replace(/,/g, '');
          currentPrice = parseFloat(priceText) || 0;
        }
      } else {
        // For stock cards - find the card container
        let card = button.closest('[class*="bg-black"]');
        if (!card) {
          // Try finding parent with specific classes
          let parent = button.parentElement;
          while (parent && parent !== document.body) {
            if (parent.classList.contains('bg-black') || parent.className.includes('bg-black')) {
              card = parent;
              break;
            }
            parent = parent.parentElement;
          }
        }
        
        if (card) {
          // Find price in the card
          const priceElement = card.querySelector('.text-xl.font-bold.text-gold-400') || 
                              card.querySelector('.text-2xl.font-bold.text-gold-400') ||
                              card.querySelector('p.text-xl.font-bold.text-gold-400');
          if (priceElement) {
            const priceText = priceElement.textContent.replace('$', '').replace(/,/g, '');
            currentPrice = parseFloat(priceText) || 0;
          }
        }
      }
      
      // Populate modal
      populateTradeModal(action, symbol, name, currentPrice);
      
      // Open modal
      tradeModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Show backdrop
      const backdrop = tradeModal.querySelector('[data-modal-backdrop]');
      if (backdrop) {
        backdrop.classList.remove('hidden');
      }
    });
  });
  
  // Handle amount input to calculate totals
  const amountInput = tradeModal.querySelector('[data-trade-amount-input]');
  if (amountInput) {
    amountInput.addEventListener('input', () => {
      calculateTradeTotals();
    });
  }
  
  // Handle trade submission
  const submitButton = tradeModal.querySelector('[data-trade-submit]');
  if (submitButton) {
    submitButton.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value) || 0;
      const orderType = tradeModal.querySelector('[data-trade-order-type]').value;
      const action = submitButton.querySelector('[data-trade-submit-text]').textContent.toLowerCase();
      const symbol = submitButton.querySelector('[data-trade-symbol-text]').textContent;
      
      if (amount > 0) {
        // Here you would normally send the trade to a backend
        console.log(`Executing ${action} order:`, {
          symbol,
          amount,
          orderType
        });
        
        // Show success message (you could add a toast notification here)
        alert(`${action === 'buy' ? 'Buy' : 'Sell'} order for ${amount} ${symbol} submitted successfully!`);
        
        // Close modal
        closeTradeModal();
      } else {
        alert('Please enter a valid amount');
      }
    });
  }
}

function populateTradeModal(action, symbol, name, currentPrice) {
  const modal = document.getElementById('trade-modal');
  if (!modal) return;
  
  // Update title
  const title = modal.querySelector('[data-trade-modal-title]');
  if (title) {
    title.textContent = `${action === 'buy' ? 'Buy' : 'Sell'} ${symbol}`;
  }
  
  // Update current price
  const priceElement = modal.querySelector('[data-trade-current-price]');
  if (priceElement) {
    // Format price based on its value (small prices like 0.845 need more decimals)
    let formattedPrice;
    if (currentPrice < 1) {
      formattedPrice = currentPrice.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    } else if (currentPrice < 100) {
      formattedPrice = currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
      formattedPrice = currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    priceElement.textContent = `$${formattedPrice}`;
  }
  
  // Update amount label
  const amountLabel = modal.querySelector('[data-trade-amount-label]');
  if (amountLabel) {
    amountLabel.textContent = `Amount to ${action}`;
  }
  
  // Update submit button
  const submitText = modal.querySelector('[data-trade-submit-text]');
  const symbolText = modal.querySelector('[data-trade-symbol-text]');
  if (submitText) {
    submitText.textContent = action === 'buy' ? 'Buy' : 'Sell';
  }
  if (symbolText) {
    symbolText.textContent = symbol;
  }
  
  // Reset amount input
  const amountInput = modal.querySelector('[data-trade-amount-input]');
  if (amountInput) {
    amountInput.value = '';
  }
  
  // Reset totals
  const estimatedTotal = modal.querySelector('[data-trade-estimated-total]');
  const finalAmount = modal.querySelector('[data-trade-final-amount]');
  if (estimatedTotal) estimatedTotal.textContent = '$0.00';
  if (finalAmount) finalAmount.textContent = '$0.00';
  
  // Store current price for calculations
  modal.dataset.currentPrice = currentPrice.toString();
}

function calculateTradeTotals() {
  const modal = document.getElementById('trade-modal');
  if (!modal) return;
  
  const amountInput = modal.querySelector('[data-trade-amount-input]');
  const currentPrice = parseFloat(modal.dataset.currentPrice) || 0;
  const amount = parseFloat(amountInput.value) || 0;
  
  if (amount > 0 && currentPrice > 0) {
    const estimatedTotal = amount * currentPrice;
    const tradingFee = estimatedTotal * 0.001; // 0.1% fee
    const finalAmount = estimatedTotal + tradingFee;
    
    const estimatedTotalEl = modal.querySelector('[data-trade-estimated-total]');
    const finalAmountEl = modal.querySelector('[data-trade-final-amount]');
    
    if (estimatedTotalEl) {
      estimatedTotalEl.textContent = `$${estimatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (finalAmountEl) {
      finalAmountEl.textContent = `$${finalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  } else {
    const estimatedTotalEl = modal.querySelector('[data-trade-estimated-total]');
    const finalAmountEl = modal.querySelector('[data-trade-final-amount]');
    if (estimatedTotalEl) estimatedTotalEl.textContent = '$0.00';
    if (finalAmountEl) finalAmountEl.textContent = '$0.00';
  }
}

function closeTradeModal() {
  const modal = document.getElementById('trade-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    const backdrop = modal.querySelector('[data-modal-backdrop]');
    if (backdrop) {
      backdrop.classList.add('hidden');
    }
    
    // Reset form
    const amountInput = modal.querySelector('[data-trade-amount-input]');
    if (amountInput) amountInput.value = '';
  }
}

// Add close handlers for trade modal
function initTradeModalClose() {
  const modal = document.getElementById('trade-modal');
  if (!modal) return;
  
  // Close button
  const closeButtons = modal.querySelectorAll('[data-modal-close="trade-modal"]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeTradeModal);
  });
  
  // Backdrop click
  const backdrop = modal.querySelector('[data-modal-backdrop="trade-modal"]');
  if (backdrop) {
    backdrop.addEventListener('click', closeTradeModal);
  }
  
  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeTradeModal();
    }
  });
}

// Initialize shares page with real stock data
function initSharesPage() {
  // Check if we're on the shares page
  const isSharesPage = window.location.pathname.includes('shares.html') || 
                       window.location.href.includes('shares.html') ||
                       document.querySelector('h1')?.textContent.includes('Company Shares');
  
  if (!isSharesPage) return;
  
  // Stock symbols to fetch
  const stockSymbols = ['TSLA', 'AAPL', 'SHEL', 'MSFT', 'NVDA', 'XOM'];
  
  async function updateStockPrices() {
    try {
      // Using Alpha Vantage API (free tier) or Yahoo Finance API via proxy
      // For now, using a free stock API or simulating with realistic data
      // Note: Most free stock APIs require API keys or have rate limits
      
      // Alternative: Use a CORS proxy with Yahoo Finance or use a free API
      // For demonstration, we'll use a free API endpoint
      
      const symbols = stockSymbols.join(',');
      
      // Using finnhub.io free API (requires free API key) or similar
      // For now, we'll simulate realistic stock prices based on current market trends
      // You can replace this with a real API endpoint
      
      // Try to fetch from multiple sources
      const fetchPromises = stockSymbols.map(async (symbol) => {
        try {
          // Method 1: Try Yahoo Finance API (may have CORS issues)
          try {
            const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`, {
              mode: 'cors'
            });
            
            if (response.ok) {
              const data = await response.json();
              const result = data.chart?.result?.[0];
              if (result && result.meta) {
                const price = result.meta.regularMarketPrice;
                const previousClose = result.meta.previousClose || price;
                const change = price - previousClose;
                const changePercent = (change / previousClose) * 100;
                
                updateStockInPage(symbol, price, change, changePercent);
                return; // Success, exit
              }
            }
          } catch (yahooError) {
            // Yahoo Finance failed, try alternative
            console.log(`Yahoo Finance failed for ${symbol}, trying alternative...`);
          }
          
          // Method 2: Try Alpha Vantage (requires API key - replace YOUR_API_KEY)
          // Uncomment and add your API key if you have one
          /*
          try {
            const avResponse = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=YOUR_API_KEY`);
            if (avResponse.ok) {
              const avData = await avResponse.json();
              const quote = avData['Global Quote'];
              if (quote) {
                const price = parseFloat(quote['05. price']);
                const change = parseFloat(quote['09. change']);
                const changePercent = parseFloat(quote['10. change percent'].replace('%', ''));
                updateStockInPage(symbol, price, change, changePercent);
                return;
              }
            }
          } catch (avError) {
            console.log(`Alpha Vantage failed for ${symbol}`);
          }
          */
          
          // Fallback: Use realistic simulated prices
          console.log(`Using simulated price for ${symbol}`);
          simulateStockPrice(symbol);
        } catch (error) {
          console.error(`Error fetching ${symbol}:`, error);
          simulateStockPrice(symbol);
        }
      });
      
      await Promise.all(fetchPromises);
    } catch (error) {
      console.error('Error fetching stock prices:', error);
      // Fallback to simulated prices
      stockSymbols.forEach(symbol => simulateStockPrice(symbol));
    }
  }
  
  function simulateStockPrice(symbol) {
    // Realistic price ranges for each stock
    const priceRanges = {
      'TSLA': { base: 248, variation: 20 },
      'AAPL': { base: 192, variation: 10 },
      'SHEL': { base: 55, variation: 5 },
      'MSFT': { base: 380, variation: 15 },
      'NVDA': { base: 480, variation: 30 },
      'XOM': { base: 110, variation: 8 }
    };
    
    const range = priceRanges[symbol];
    if (!range) return;
    
    const price = range.base + (Math.random() * range.variation * 2 - range.variation);
    const change = (Math.random() * 4 - 2); // ±2% change
    const changePercent = change;
    
    updateStockInPage(symbol, price, change, changePercent);
  }
  
  function updateStockInPage(symbol, price, change, changePercent) {
    const isPositive = change >= 0;
    
    // Update portfolio table
    const portfolioRows = document.querySelectorAll('table tbody tr');
    portfolioRows.forEach(row => {
      const symbolCell = row.querySelector('.font-semibold.text-gold-400');
      if (symbolCell && symbolCell.textContent.trim() === symbol) {
        // Update current value (assuming shares are fixed)
        const sharesCell = row.querySelectorAll('td.text-right.text-gold-400.font-semibold')[0];
        const avgPriceCell = row.querySelectorAll('td.text-right.text-gold-600')[0];
        if (sharesCell && avgPriceCell) {
          const shares = parseInt(sharesCell.textContent) || 0;
          const avgPrice = parseFloat(avgPriceCell.textContent.replace('$', '')) || price;
          const currentValue = shares * price;
          const pnl = (price - avgPrice) * shares;
          const pnlPercent = ((price - avgPrice) / avgPrice) * 100;
          
          // Update current value
          const valueCell = row.querySelectorAll('td.text-right.text-gold-400.font-semibold')[1];
          if (valueCell) {
            valueCell.textContent = `$${currentValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          }
          
          // Update P&L
          const pnlCell = row.querySelectorAll('td.text-right.font-semibold')[1];
          if (pnlCell) {
            pnlCell.textContent = `${isPositive ? '+' : ''}$${Math.abs(pnl).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${isPositive ? '+' : ''}${pnlPercent.toFixed(2)}%)`;
            pnlCell.className = `text-right py-4 font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`;
          }
        }
      }
    });
    
    // Update available stocks cards
    const stockCards = document.querySelectorAll('.bg-black\\/60.backdrop-blur-sm.border');
    stockCards.forEach(card => {
      const cardSymbol = card.querySelector('.text-lg.font-semibold.text-gold-400');
      if (cardSymbol && cardSymbol.textContent.trim() === symbol) {
        // Update price
        const priceSpan = card.querySelector('.text-2xl.font-bold.text-gold-400');
        if (priceSpan) {
          priceSpan.textContent = `$${price.toFixed(2)}`;
        }
        
        // Update change
        const changeSpan = card.querySelector('.flex.items-center.space-x-1 span');
        if (changeSpan) {
          const changeValue = Math.abs(change);
          changeSpan.textContent = `${isPositive ? '+' : '-'}$${changeValue.toFixed(2)} (${isPositive ? '+' : ''}${changePercent.toFixed(2)}%)`;
          const changeContainer = changeSpan.closest('.flex.items-center.space-x-1');
          if (changeContainer) {
            changeContainer.className = `flex items-center space-x-1 text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`;
            
            // Update icon
            const icon = changeContainer.querySelector('svg');
            if (icon) {
              if (isPositive) {
                icon.innerHTML = '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>';
              } else {
                icon.innerHTML = '<polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline>';
                icon.style.transform = 'rotate(180deg)';
              }
            }
          }
        }
        
        // Update data attributes for modals
        const tradeButtons = card.querySelectorAll('[data-trade-data]');
        tradeButtons.forEach(btn => {
          try {
            const data = JSON.parse(btn.getAttribute('data-trade-data'));
            if (data.symbol === symbol) {
              data.price = `$${price.toFixed(2)}`;
              data.change = `${isPositive ? '+' : ''}$${Math.abs(change).toFixed(2)} (${isPositive ? '+' : ''}${changePercent.toFixed(2)}%)`;
              btn.setAttribute('data-trade-data', JSON.stringify(data));
            }
          } catch (e) {
            console.error('Error updating trade data:', e);
          }
        });
      }
    });
  }
  
  updateStockPrices();
  setInterval(updateStockPrices, 15000); // Update every 15 seconds for real-time data
}

// Initialize watchlist functionality
function initWatchlist() {
  // Load watchlist from localStorage
  let watchlist = JSON.parse(localStorage.getItem('watchlist') || '["TSLA", "AAPL"]');
  
  // Get watchlist state
  function getWatchlist() {
    return JSON.parse(localStorage.getItem('watchlist') || '["TSLA", "AAPL"]');
  }
  
  // Update watchlist
  function updateWatchlist(symbol, add) {
    let current = getWatchlist();
    if (add) {
      if (!current.includes(symbol)) {
        current.push(symbol);
      }
    } else {
      current = current.filter(s => s !== symbol);
    }
    localStorage.setItem('watchlist', JSON.stringify(current));
    return current;
  }
  
  // Update watchlist buttons based on saved state
  function updateWatchlistButtons() {
    const currentWatchlist = getWatchlist();
    document.querySelectorAll('[data-watchlist-toggle]').forEach(button => {
      const symbol = button.getAttribute('data-watchlist-toggle');
      const isInWatchlist = currentWatchlist.includes(symbol);
      const svg = button.querySelector('svg');
      
      if (isInWatchlist) {
        button.classList.remove('text-gold-600');
        button.classList.add('text-gold-400', 'bg-gold-600/20');
        if (svg) {
          svg.setAttribute('fill', 'currentColor');
        }
      } else {
        button.classList.remove('text-gold-400', 'bg-gold-600/20');
        button.classList.add('text-gold-600');
        if (svg) {
          svg.setAttribute('fill', 'none');
        }
      }
    });
    
    // Update watchlist count in stat card
    const watchlistCards = document.querySelectorAll('.text-2xl.font-bold.text-blue-400');
    watchlistCards.forEach(countEl => {
      const parent = countEl.parentElement;
      if (parent && parent.textContent.includes('Watchlist')) {
        countEl.textContent = currentWatchlist.length;
      }
    });
    
    // Update modal watchlist button if modal is open
    const modalWatchlistBtn = document.querySelector('[data-stock-watchlist-toggle]');
    const modalWatchlistText = document.querySelector('[data-stock-watchlist-text]');
    if (modalWatchlistBtn && modalWatchlistText) {
      const modalSymbol = document.querySelector('[data-stock-modal-symbol]')?.textContent;
      if (modalSymbol) {
        const isInWatchlist = currentWatchlist.includes(modalSymbol);
        modalWatchlistText.textContent = isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist';
      }
    }
  }
  
  // Add click handlers to watchlist buttons
  document.querySelectorAll('[data-watchlist-toggle]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const symbol = button.getAttribute('data-watchlist-toggle');
      const currentWatchlist = getWatchlist();
      const isInWatchlist = currentWatchlist.includes(symbol);
      
      updateWatchlist(symbol, !isInWatchlist);
      updateWatchlistButtons();
    });
  });
  
  // Handle modal watchlist toggle - this will be set up in initStockModal
  window.updateWatchlistFromModal = function(symbol) {
    const currentWatchlist = getWatchlist();
    const isInWatchlist = currentWatchlist.includes(symbol);
    updateWatchlist(symbol, !isInWatchlist);
    updateWatchlistButtons();
  };
  
  // Initial update
  updateWatchlistButtons();
  
  // Expose update function globally for modal to use
  window.updateWatchlistButtons = updateWatchlistButtons;
}

// Initialize stock modal functionality
function initStockModal() {
  const stockModal = document.getElementById('stock-modal');
  if (!stockModal) return;
  
  // Sector color mapping
  const sectorColors = {
    'Technology': 'text-blue-400 bg-blue-600/20',
    'Energy': 'text-orange-400 bg-orange-600/20',
    'Automotive': 'text-green-400 bg-green-600/20'
  };
  
  // Open stock modal
  document.querySelectorAll('[data-stock-modal-open]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      const symbol = button.getAttribute('data-stock-symbol');
      const name = button.getAttribute('data-stock-name');
      const price = parseFloat(button.getAttribute('data-stock-price')) || 0;
      const change = parseFloat(button.getAttribute('data-stock-change')) || 0;
      const changePercent = parseFloat(button.getAttribute('data-stock-change-percent')) || 0;
      const marketCap = button.getAttribute('data-stock-market-cap');
      const volume = button.getAttribute('data-stock-volume');
      const sector = button.getAttribute('data-stock-sector');
      const description = button.getAttribute('data-stock-description');
      const logo = button.getAttribute('data-stock-logo');
      
      // Populate modal
      const title = stockModal.querySelector('[data-stock-modal-title]');
      const logoEl = stockModal.querySelector('[data-stock-modal-logo]');
      const symbolEl = stockModal.querySelector('[data-stock-modal-symbol]');
      const nameEl = stockModal.querySelector('[data-stock-modal-name]');
      const sectorEl = stockModal.querySelector('[data-stock-modal-sector]');
      const priceEl = stockModal.querySelector('[data-stock-modal-price]');
      const changeEl = stockModal.querySelector('[data-stock-modal-change]');
      const descriptionEl = stockModal.querySelector('[data-stock-modal-description]');
      const marketCapEl = stockModal.querySelector('[data-stock-modal-market-cap]');
      const volumeEl = stockModal.querySelector('[data-stock-modal-volume]');
      const watchlistText = stockModal.querySelector('[data-stock-watchlist-text]');
      
      if (title) title.textContent = `${symbol} - ${name}`;
      if (logoEl) logoEl.textContent = logo;
      if (symbolEl) symbolEl.textContent = symbol;
      if (nameEl) nameEl.textContent = name;
      if (sectorEl) {
        sectorEl.textContent = sector;
        sectorEl.className = `inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${sectorColors[sector] || 'text-gold-400 bg-gold-600/20'}`;
      }
      if (priceEl) priceEl.textContent = `$${price}`;
      if (changeEl) {
        const changeSign = change >= 0 ? '+' : '';
        const percentSign = changePercent >= 0 ? '+' : '';
        changeEl.textContent = `${changeSign}$${Math.abs(change)} (${percentSign}${changePercent}%)`;
        changeEl.className = `font-semibold ${change >= 0 ? 'text-green-400' : 'text-red-400'}`;
      }
      if (descriptionEl) descriptionEl.textContent = description;
      if (marketCapEl) marketCapEl.textContent = marketCap;
      if (volumeEl) volumeEl.textContent = volume;
      
      // Update watchlist button text
      const watchlist = JSON.parse(localStorage.getItem('watchlist') || '["TSLA", "AAPL"]');
      if (watchlistText) {
        watchlistText.textContent = watchlist.includes(symbol) ? 'Remove from Watchlist' : 'Add to Watchlist';
      }
      
      // Store current symbol for watchlist toggle
      stockModal.dataset.currentSymbol = symbol;
      
      // Update watchlist buttons on page (in case modal was opened from card)
      if (window.updateWatchlistButtons) {
        // This will be called from initWatchlist
      }
      
      // Open modal
      stockModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      const backdrop = stockModal.querySelector('[data-modal-backdrop="stock-modal"]');
      if (backdrop) {
        backdrop.classList.remove('hidden');
      }
    });
  });
  
  // Handle modal watchlist toggle
  const modalWatchlistBtn = stockModal.querySelector('[data-stock-watchlist-toggle]');
  if (modalWatchlistBtn) {
    modalWatchlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const symbol = stockModal.dataset.currentSymbol;
      if (symbol && window.updateWatchlistFromModal) {
        window.updateWatchlistFromModal(symbol);
        // Update button text after a brief delay to ensure localStorage is updated
        setTimeout(() => {
          const watchlist = JSON.parse(localStorage.getItem('watchlist') || '["TSLA", "AAPL"]');
          const watchlistText = stockModal.querySelector('[data-stock-watchlist-text]');
          if (watchlistText) {
            watchlistText.textContent = watchlist.includes(symbol) ? 'Remove from Watchlist' : 'Add to Watchlist';
          }
        }, 10);
      }
    });
  }
  
  // Handle Buy/Sell buttons
  const buyBtn = stockModal.querySelector('[data-stock-buy]');
  const sellBtn = stockModal.querySelector('[data-stock-sell]');
  const sharesInput = stockModal.querySelector('[data-stock-shares-input]');
  
  if (buyBtn) {
    buyBtn.addEventListener('click', () => {
      const shares = parseInt(sharesInput.value) || 0;
      const symbol = stockModal.dataset.currentSymbol;
      if (shares > 0) {
        alert(`Buy order for ${shares} shares of ${symbol} submitted!`);
        closeStockModal();
      } else {
        alert('Please enter a valid number of shares');
      }
    });
  }
  
  if (sellBtn) {
    sellBtn.addEventListener('click', () => {
      const shares = parseInt(sharesInput.value) || 0;
      const symbol = stockModal.dataset.currentSymbol;
      if (shares > 0) {
        alert(`Sell order for ${shares} shares of ${symbol} submitted!`);
        closeStockModal();
      } else {
        alert('Please enter a valid number of shares');
      }
    });
  }
  
  // Close handlers
  const closeButtons = stockModal.querySelectorAll('[data-modal-close="stock-modal"]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeStockModal);
  });
  
  const backdrop = stockModal.querySelector('[data-modal-backdrop="stock-modal"]');
  if (backdrop) {
    backdrop.addEventListener('click', closeStockModal);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !stockModal.classList.contains('hidden')) {
      closeStockModal();
    }
  });
}

function closeStockModal() {
  const stockModal = document.getElementById('stock-modal');
  if (stockModal) {
    stockModal.classList.add('hidden');
    document.body.style.overflow = '';
    
    const backdrop = stockModal.querySelector('[data-modal-backdrop="stock-modal"]');
    if (backdrop) {
      backdrop.classList.add('hidden');
    }
    
    // Reset input
    const sharesInput = stockModal.querySelector('[data-stock-shares-input]');
    if (sharesInput) sharesInput.value = '';
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  loadUserName(); // Load saved name on all pages
  initTabs();
  initModals();
  initLanguageDropdown();
  initForecastPage();
  initProfilePage();
  initMarketTicker(); // Initialize market ticker with real data
  initTradingPage(); // Initialize trading page with real crypto data
  initSharesPage(); // Initialize shares page with real stock data
  initTradeModalClose(); // Initialize trade modal close handlers
  initWatchlist(); // Initialize watchlist functionality
  initStockModal(); // Initialize stock detail modal
});

