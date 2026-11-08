
import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadGTM } from './lib/gtmClient';
import { loadFacebookPixel } from './lib/facebookPixel';
import { initGoogleAds } from './hooks/useGoogleAds';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    performance: false
  });
  const [showBanner, setShowBanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookieConsent');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const prefs = {
          essential: true,
          analytics: parsed.analytics ?? false,
          marketing: parsed.marketing ?? false,
          performance: parsed.performance ?? false
        };
        setPreferences(prefs);
        setHasConsent(true);
        applyConsents(prefs);
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const applyConsents = (prefs) => {
    if (prefs.analytics) {
      loadGTM();
    }
    if (prefs.marketing) {
      loadFacebookPixel();
      initGoogleAds();
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    }
  };

  const savePreferences = (newPrefs) => {
    const prefsToSave = { ...newPrefs, essential: true };
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365);

    const consentData = {
      essential: true,
      analytics: prefsToSave.analytics ?? false,
      marketing: prefsToSave.marketing ?? false,
      performance: prefsToSave.performance ?? false,
      timestamp: new Date().toISOString(),
      expiresAt: expirationDate.toISOString()
    };

    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setPreferences(prefsToSave);
    setHasConsent(true);
    setShowBanner(false);
    setIsModalOpen(false);
    applyConsents(prefsToSave);
  };

  const acceptAllCookies = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      performance: true
    });
  };

  const refuseNonEssential = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      performance: false
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CookieContext.Provider value={{
      preferences,
      showBanner,
      isModalOpen,
      hasConsent,
      acceptAllCookies,
      refuseNonEssential,
      savePreferences,
      openModal,
      closeModal
    }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within CookieProvider');
  }
  return context;
};
