
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  // Load current preferences from localStorage when modal opens
  useEffect(() => {
    if (isOpen) {
      console.log('🍪 [COOKIE MODAL] Modal opened, loading preferences from localStorage');
      const savedConsent = localStorage.getItem('cookieConsent');
      console.log('🍪 [COOKIE MODAL] Saved consent:', savedConsent);
      
      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent);
          console.log('🍪 [COOKIE MODAL] Parsed consent:', parsed);
          setPreferences({
            essential: true,
            analytics: parsed.analytics || false,
            marketing: parsed.marketing || false
          });
        } catch (e) {
          console.error('❌ [COOKIE MODAL] Error parsing saved consent:', e);
        }
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggle = (key) => {
    if (key === 'essential') return; // Essential cookies cannot be toggled
    console.log(`🍪 [COOKIE MODAL] Toggling ${key} from ${preferences[key]} to ${!preferences[key]}`);
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSavePreferences = () => {
    console.log('💾 [COOKIE MODAL] Saving preferences:', preferences);
    const consentData = {
      accepted: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    console.log('✅ [COOKIE MODAL] Preferences saved to localStorage');
    onClose();
  };

  const handleAcceptAll = () => {
    console.log('✅ [COOKIE MODAL] Accept all clicked');
    const allAccepted = { 
      accepted: true,
      analytics: true, 
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    console.log('💾 [COOKIE MODAL] All preferences accepted and saved');
    onClose();
  };

  const handleRejectAll = () => {
    console.log('❌ [COOKIE MODAL] Reject all clicked');
    const allRejected = { 
      accepted: true,
      analytics: false, 
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allRejected));
    console.log('💾 [COOKIE MODAL] All non-essential preferences rejected and saved');
    onClose();
  };

  return (
    <div className="cookie-modal-overlay fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center p-4 animate-fade-in">
      <div className="cookie-modal bg-white rounded-2xl shadow-2xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto animate-scale-in">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-[24px] font-bold text-[hsl(var(--primary))]">
            Gérer vos préférences de cookies
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            aria-label="Fermer"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6 space-y-6">
          
          {/* Essential Cookies */}
          <div className="cookie-preference-item">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-1">
                  Cookies essentiels
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Nécessaires au fonctionnement du site. Toujours actifs.
                </p>
              </div>
              <div className="cookie-toggle cookie-toggle-disabled flex items-center">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="sr-only"
                  aria-label="Cookies essentiels (toujours actifs)"
                />
                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-not-allowed">
                  <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="cookie-preference-item">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-1">
                  Cookies analytiques
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Nous aident à comprendre comment vous utilisez le site pour l'améliorer.
                </p>
              </div>
              <button
                onClick={() => handleToggle('analytics')}
                className="cookie-toggle flex items-center"
                aria-label={`Cookies analytiques: ${preferences.analytics ? 'activés' : 'désactivés'}`}
              >
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-[hsl(var(--accent))]' : 'bg-gray-300'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${preferences.analytics ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="cookie-preference-item">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1">
                <h3 className="text-[18px] font-semibold text-gray-900 mb-1">
                  Cookies marketing
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Utilisés pour vous proposer du contenu personnalisé et des publicités pertinentes.
                </p>
              </div>
              <button
                onClick={() => handleToggle('marketing')}
                className="cookie-toggle flex items-center"
                aria-label={`Cookies marketing: ${preferences.marketing ? 'activés' : 'désactivés'}`}
              >
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-[hsl(var(--accent))]' : 'bg-gray-300'}`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${preferences.marketing ? 'right-0.5' : 'left-0.5'}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-5 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
          <button
            onClick={handleSavePreferences}
            className="flex-1 px-6 py-3 bg-[hsl(var(--accent))] text-white font-semibold rounded-lg hover:bg-[#ea580c] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px]"
          >
            Enregistrer les préférences
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-6 py-3 bg-transparent text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px]"
          >
            Accepter tout
          </button>
          <button
            onClick={handleRejectAll}
            className="flex-1 px-6 py-3 bg-transparent text-gray-700 font-semibold border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px]"
          >
            Refuser tout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
