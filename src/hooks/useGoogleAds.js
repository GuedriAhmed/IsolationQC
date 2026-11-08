import { useEffect, useCallback } from 'react';
import { useCookies } from '../CookieContext';

export const GOOGLE_ADS_ID = 'AW-17908576914';
export const CONVERSION_LABEL = 'IoZ0CN6h-PcbEJLlvNtC';
export const CONVERSION_ID = `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`;

/**
 * Standalone initialization function for use in Context
 */
export const initGoogleAds = () => {
  if (typeof window === 'undefined') return;
  if (window.googleAdsInitialized) return;

  // Create script tag
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GOOGLE_ADS_ID);

  window.googleAdsInitialized = true;
  console.log('Google Ads Initialized');
};

const useGoogleAds = () => {
  const { preferences } = useCookies();
  const isMarketingEnabled = preferences?.marketing;

  // Initialize on mount if consent exists
  useEffect(() => {
    if (isMarketingEnabled) {
      initGoogleAds();
    }
  }, [isMarketingEnabled]);

  const trackEvent = useCallback((eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.gtag && isMarketingEnabled) {
      window.gtag('event', eventName, params);
    }
  }, [isMarketingEnabled]);

  const trackConversion = useCallback((sendTo = CONVERSION_ID) => {
    trackEvent('conversion', { 'send_to': sendTo });
  }, [trackEvent]);

  const trackContactFormSubmission = useCallback(() => {
    trackConversion(CONVERSION_ID);
  }, [trackConversion]);

  const trackChatBotLead = useCallback(() => {
    // Using the same conversion ID for now as it's the primary lead goal
    trackConversion(CONVERSION_ID); 
  }, [trackConversion]);

  const trackOpenAISetup = useCallback(() => {
    // Tracking this as a custom event or conversion if needed
    trackEvent('openai_setup_complete', {
      'event_category': 'configuration',
      'event_label': 'success'
    });
  }, [trackEvent]);

  const trackPageView = useCallback((url) => {
    if (typeof window !== 'undefined' && window.gtag && isMarketingEnabled) {
      window.gtag('event', 'page_view', {
        page_location: url || window.location.href,
        send_to: GOOGLE_ADS_ID
      });
    }
  }, [isMarketingEnabled]);

  return {
    trackContactFormSubmission,
    trackChatBotLead,
    trackOpenAISetup,
    trackPageView
  };
};

export default useGoogleAds;