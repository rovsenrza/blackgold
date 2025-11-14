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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initModals();
  initLanguageDropdown();
  initForecastPage();
});

