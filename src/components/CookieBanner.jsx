
import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from '@/CookieContext';

const CookieBanner = () => {
  const { showBanner, acceptAllCookies, refuseNonEssential, openModal } = useCookies();

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner fixed bottom-0 left-0 right-0 bg-[hsl(var(--cookie-banner-bg))] border-t border-[hsl(var(--border))] shadow-lg z-[9999] animate-slide-up">
      <div className="container-default py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          
          <div className="flex-1">
            <p className="text-[15px] md:text-[16px] text-[hsl(var(--cookie-banner-text))] leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu. Vous pouvez accepter tous les cookies ou gérer vos préférences. Consultez notre{' '}
              <Link 
                to="/politique-confidentialite" 
                className="text-[hsl(var(--accent))] font-semibold hover:text-[#ea580c] underline transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
              >
                politique de confidentialité
              </Link>
              {' '}pour en savoir plus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:shrink-0">
            <button
              onClick={acceptAllCookies}
              className="px-6 py-3 bg-[hsl(var(--accent))] text-white font-semibold rounded-lg hover:bg-[#ea580c] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px] whitespace-nowrap shadow-md"
              aria-label="Accepter tous les cookies"
            >
              Accepter tout
            </button>
            <button
              onClick={refuseNonEssential}
              className="px-6 py-3 bg-transparent text-[hsl(var(--cookie-banner-text))] font-semibold border-2 border-[hsl(var(--cookie-button-secondary-border))] rounded-lg hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px] whitespace-nowrap"
              aria-label="Refuser les cookies non essentiels"
            >
              Refuser
            </button>
            <button
              onClick={openModal}
              className="px-6 py-3 bg-transparent text-[hsl(var(--cookie-banner-text))] font-semibold border-2 border-[hsl(var(--cookie-button-secondary-border))] rounded-lg hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 min-h-[44px] whitespace-nowrap"
              aria-label="Personnaliser les préférences de cookies"
            >
              Personnaliser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
