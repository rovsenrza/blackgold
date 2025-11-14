// Set Tailwind CSS gradient position variables and fix gradients dynamically
(function() {
  'use strict';
  
  // Color mapping for all gradient colors
  const colorMap = {
    'gold': { 400: '#ffd700', 500: '#f5c842', 600: '#e6a532' },
    'orange': { 400: '#fb923c', 500: '#f97316', 600: '#ea580c' },
    'green': { 400: '#4ade80', 500: '#22c55e', 600: '#16a34a' },
    'black': { default: '#000000' },
    'gray': { 900: '#111827' }
  };
  
  function setGradientVariables() {
    const root = document.documentElement;
    root.style.setProperty('--tw-gradient-from-position', '0%', 'important');
    root.style.setProperty('--tw-gradient-via-position', '50%', 'important');
    root.style.setProperty('--tw-gradient-to-position', '100%', 'important');
  }
  
  function getGradientDirection(classes) {
    if (classes.includes('bg-gradient-to-br')) return 'to bottom right';
    if (classes.includes('bg-gradient-to-b')) return 'to bottom';
    if (classes.includes('bg-gradient-to-l')) return 'to left';
    if (classes.includes('bg-gradient-to-t')) return 'to top';
    if (classes.includes('bg-gradient-to-tl')) return 'to top left';
    if (classes.includes('bg-gradient-to-tr')) return 'to top right';
    if (classes.includes('bg-gradient-to-bl')) return 'to bottom left';
    return 'to right'; // default
  }
  
  function applyGradientToElement(el, fromColor, toColor, direction) {
    if (fromColor && toColor) {
      // Force apply gradient with !important to override CSS variables
      el.style.setProperty('background-image', `linear-gradient(${direction}, ${fromColor}, ${toColor})`, 'important');
      // Also fix the CSS variables to prevent conflicts
      el.style.setProperty('--tw-gradient-from', fromColor, 'important');
      el.style.setProperty('--tw-gradient-to', toColor, 'important');
    }
  }
  
  function fixGradientElements() {
    // Find all elements with gradient classes - more comprehensive selector
    const selectors = [
      '[class*="bg-gradient-"]',
      '[class*="from-gold"]',
      '[class*="to-gold"]',
      '[class*="from-orange"]',
      '[class*="to-orange"]',
      '[class*="from-green"]',
      '[class*="to-green"]'
    ];
    
    const allElements = new Set();
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => allElements.add(el));
    });
    
    allElements.forEach(el => {
      const classes = el.className || '';
      
      // Skip if already processed (has data-gradient-fixed attribute)
      if (el.dataset.gradientFixed === 'true') return;
      
      // Check if element has both from- and to- classes
      const fromMatch = classes.match(/\bfrom-(\w+)-(\d+)\b/);
      const toMatch = classes.match(/\bto-(\w+)-(\d+)\b/);
      
      if (fromMatch && toMatch) {
        const fromColor = colorMap[fromMatch[1]]?.[fromMatch[2]] || colorMap[fromMatch[1]]?.default;
        const toColor = colorMap[toMatch[1]]?.[toMatch[2]] || colorMap[toMatch[1]]?.default;
        const direction = getGradientDirection(classes);
        
        if (fromColor && toColor) {
          applyGradientToElement(el, fromColor, toColor, direction);
          el.dataset.gradientFixed = 'true';
          el.dataset.gradientFrom = fromColor;
          el.dataset.gradientTo = toColor;
          el.dataset.gradientDirection = direction;
        }
      }
    });
    
    // Handle hover states - add event listeners for buttons with hover gradients
    allElements.forEach(el => {
      const classes = el.className || '';
      const hoverFromMatch = classes.match(/\bhover:from-(\w+)-(\d+)\b/);
      const hoverToMatch = classes.match(/\bhover:to-(\w+)-(\d+)\b/);
      
      if (hoverFromMatch && hoverToMatch) {
        const hoverFromColor = colorMap[hoverFromMatch[1]]?.[hoverFromMatch[2]] || colorMap[hoverFromMatch[1]]?.default;
        const hoverToColor = colorMap[hoverToMatch[1]]?.[hoverToMatch[2]] || colorMap[hoverToMatch[1]]?.default;
        const direction = getGradientDirection(classes);
        
        if (hoverFromColor && hoverToColor) {
          // Store original gradient
          const originalFrom = el.dataset.gradientFrom;
          const originalTo = el.dataset.gradientTo;
          const originalDirection = el.dataset.gradientDirection || direction;
          
          // Remove existing listeners to avoid duplicates
          const existingHover = el.dataset.hoverListener;
          if (!existingHover) {
            el.dataset.hoverListener = 'true';
            
            el.addEventListener('mouseenter', () => {
              applyGradientToElement(el, hoverFromColor, hoverToColor, direction);
            });
            
            el.addEventListener('mouseleave', () => {
              if (originalFrom && originalTo) {
                applyGradientToElement(el, originalFrom, originalTo, originalDirection);
              }
            });
          }
        }
      }
    });
  }
  
  // MutationObserver to catch dynamically added elements
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      let shouldFix = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              const classes = node.className || '';
              if (classes.includes('bg-gradient-') || 
                  classes.includes('from-gold') || 
                  classes.includes('to-gold') ||
                  classes.includes('from-orange') ||
                  classes.includes('to-orange') ||
                  classes.includes('from-green') ||
                  classes.includes('to-green')) {
                shouldFix = true;
              }
              // Also check children
              if (node.querySelectorAll) {
                const gradientChildren = node.querySelectorAll('[class*="bg-gradient-"], [class*="from-gold"], [class*="to-gold"]');
                if (gradientChildren.length > 0) {
                  shouldFix = true;
                }
              }
            }
          });
        } else if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const classes = mutation.target.className || '';
          if (classes.includes('bg-gradient-') || 
              classes.includes('from-gold') || 
              classes.includes('to-gold')) {
            shouldFix = true;
          }
        }
      });
      
      if (shouldFix) {
        setTimeout(fixGradientElements, 50);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }
  
  // Set variables immediately
  setGradientVariables();
  
  // Fix gradients after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setGradientVariables();
      setTimeout(fixGradientElements, 100);
      setupMutationObserver();
    });
  } else {
    setGradientVariables();
    setTimeout(fixGradientElements, 100);
    setupMutationObserver();
  }
  
  // Fix gradients after page load
  window.addEventListener('load', () => {
    setGradientVariables();
    fixGradientElements();
  });
  
  // Fix gradients with delays to catch late-loading content
  setTimeout(() => { setGradientVariables(); fixGradientElements(); }, 200);
  setTimeout(() => { setGradientVariables(); fixGradientElements(); }, 500);
  setTimeout(() => { setGradientVariables(); fixGradientElements(); }, 1000);
  setTimeout(() => { setGradientVariables(); fixGradientElements(); }, 2000);
})();
