/**
 * Google Tag Manager (GTM) Integration Utility
 * GTM ID: GTM-W6L8WLL6
 */

export const GTM_ID = 'GTM-W6L8WLL6';

/**
 * Loads the GTM script dynamically based on consent
 */
export const loadGTM = () => {
  if (typeof window === 'undefined') return;
  
  if (window.gtmInitialized) return;

  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer',GTM_ID);

  window.gtmInitialized = true;
  console.log('GTM Script Loaded');
};

/**
 * Checks analytics consent from localStorage
 * @returns {boolean}
 */
export const checkAnalyticsConsent = () => {
  try {
    const consent = JSON.parse(localStorage.getItem('cookieConsent'));
    return consent?.analytics === true;
  } catch (e) {
    return false;
  }
};

/**
 * Helper to safely push events to the dataLayer
 * @param {object} event 
 */
const pushToDataLayer = (event) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  }
};

/**
 * Tracks a page view event
 * @param {string} path - The URL path tracked
 */
export const trackPageView = (path) => {
  if (!checkAnalyticsConsent()) return;
  pushToDataLayer({
    event: 'page_view',
    page_path: path || window.location.pathname
  });
};

/**
 * Tracks a lead generation event (e.g., form submission)
 * @param {object} data - Lead data (name, email, service type, etc.)
 */
export const trackLead = (data) => {
  if (!checkAnalyticsConsent()) return;
  pushToDataLayer({
    event: 'generate_lead',
    category: 'Lead',
    ...data
  });
};

/**
 * Tracks chatbot interactions
 * @param {string} action - 'open', 'close', 'message_sent', 'message_received'
 * @param {string} label - Optional label for context
 */
export const trackChatBotEvent = (action, label = '') => {
  if (!checkAnalyticsConsent()) return;
  pushToDataLayer({
    event: 'chatbot_interaction',
    action: action,
    label: label
  });
};

/**
 * Tracks OpenAI configuration events
 * @param {string} status - 'success', 'failure', 'skip'
 */
export const trackOpenAISetup = (status) => {
  if (!checkAnalyticsConsent()) return;
  pushToDataLayer({
    event: 'openai_setup',
    status: status
  });
};

/**
 * Tracks scroll depth events
 * @param {number} depth - Scroll percentage (25, 50, 75, 100)
 */
export const trackScrollEvent = (depth) => {
  if (!checkAnalyticsConsent()) return;
  pushToDataLayer({
    event: 'scroll_tracking',
    scroll_depth: depth
  });
};