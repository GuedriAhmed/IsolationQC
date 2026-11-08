
import { useState, useEffect, useCallback } from 'react';

const COOKIE_KEY = 'cookieConsent';
const EXPIRATION_DAYS = 365;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const savedConsent = getConsent();
    if (savedConsent) {
      setConsent(savedConsent);
      setHasConsent(true);
    }
  }, []);

  const getConsent = useCallback(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) return null;

      const parsed = JSON.parse(stored);
      
      if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) {
        localStorage.removeItem(COOKIE_KEY);
        return null;
      }

      return {
        essential: parsed.essential ?? true,
        analytics: parsed.analytics ?? false,
        marketing: parsed.marketing ?? false
      };
    } catch (error) {
      console.error('Error reading cookie consent:', error);
      return null;
    }
  }, []);

  const saveConsent = useCallback((preferences) => {
    try {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + EXPIRATION_DAYS);

      const consentData = {
        essential: true,
        analytics: preferences.analytics ?? false,
        marketing: preferences.marketing ?? false,
        performance: preferences.performance ?? false,
        timestamp: new Date().toISOString(),
        expiresAt: expirationDate.toISOString()
      };

      localStorage.setItem(COOKIE_KEY, JSON.stringify(consentData));
      
      setConsent({
        essential: true,
        analytics: consentData.analytics,
        marketing: consentData.marketing,
        performance: consentData.performance
      });
      setHasConsent(true);

      return true;
    } catch (error) {
      console.error('Error saving cookie consent:', error);
      return false;
    }
  }, []);

  const isCookieTypeEnabled = useCallback((type) => {
    if (type === 'essential') return true;
    const savedConsent = getConsent();
    if (!savedConsent) return false;
    return savedConsent[type] === true;
  }, [getConsent]);

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(COOKIE_KEY);
      setConsent({
        essential: true,
        analytics: false,
        marketing: false,
        performance: false
      });
      setHasConsent(false);
      return true;
    } catch (error) {
      console.error('Error resetting cookie consent:', error);
      return false;
    }
  }, []);

  const getCookieConsent = useCallback(() => {
    return getConsent();
  }, [getConsent]);

  return {
    consent,
    saveConsent,
    getConsent: getCookieConsent,
    isCookieTypeEnabled,
    resetConsent,
    hasConsent
  };
};
