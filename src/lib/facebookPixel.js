export const PIXEL_ID = '1429260458924642';

/**
 * Checks marketing consent from localStorage
 * @returns {boolean}
 */
export const checkMarketingConsent = () => {
  try {
    const consent = JSON.parse(localStorage.getItem('cookieConsent'));
    return consent?.marketing === true;
  } catch (e) {
    return false;
  }
};

/**
 * Initializes the Facebook Pixel script dynamically
 */
export const loadFacebookPixel = () => {
  if (typeof window === 'undefined') return;
  if (window.fbqInitialized) return;

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  
  window.fbq('init', PIXEL_ID);
  window.fbqInitialized = true;
  console.log('Facebook Pixel Loaded');
};

/**
 * Initializes the Facebook Pixel if consent is granted
 */
export const initFacebookPixel = () => {
  if (checkMarketingConsent()) {
    loadFacebookPixel();
    window.fbq('track', 'PageView');
  } else {
    console.log('Facebook Pixel not loaded (No consent)');
  }
};

/**
 * Tracks a standard Facebook event
 * @param {string} eventName - Standard event name (e.g., 'ViewContent', 'Lead')
 * @param {object} data - Optional event data
 */
export const trackEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.fbq && checkMarketingConsent()) {
    window.fbq('track', eventName, data);
  }
};

/**
 * Tracks a custom Facebook event
 * @param {string} eventName - Custom event name
 * @param {object} data - Optional event data
 */
export const trackCustomEvent = (eventName, data = {}) => {
  if (typeof window !== 'undefined' && window.fbq && checkMarketingConsent()) {
    window.fbq('trackCustom', eventName, data);
  }
};