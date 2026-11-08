import { useEffect, useState } from 'react';
import { trackEvent, trackCustomEvent, initFacebookPixel } from '../lib/facebookPixel';

const useFacebookPixel = () => {
  const [hasConsent, setHasConsent] = useState(true); // Default to true for this implementation

  useEffect(() => {
    // In a real application, you would check for cookie consent here
    // const consent = localStorage.getItem('cookie-consent') === 'accepted';
    // setHasConsent(consent);
    
    // Ensure pixel is initialized
    initFacebookPixel();
  }, []);

  const track = (eventName, data = {}) => {
    if (hasConsent) {
      trackEvent(eventName, data);
    } else {
      console.log(`Pixel tracking blocked for ${eventName} due to lack of consent`);
    }
  };

  const trackCustom = (eventName, data = {}) => {
    if (hasConsent) {
      trackCustomEvent(eventName, data);
    }
  };

  return { track, trackCustom };
};

export default useFacebookPixel;