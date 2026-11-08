import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Save, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import { trackOpenAISetup } from '../../lib/gtmClient';
import useGoogleAds from '../../hooks/useGoogleAds';

const OpenAIKeyForm = ({ onSave, onSkip }) => {
  const { t } = useLanguage();
  const { trackOpenAISetup: trackGoogleAdsOpenAI } = useGoogleAds();
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const translations = {
    fr: {
      placeholder: "Entrez votre clé OpenAI (sk-...)",
      save: "Sauvegarder",
      skip: "Ignorer",
      secure: "Votre clé reste privée et sécurisée",
      validating: "Validation...",
    },
    en: {
      placeholder: "Enter your OpenAI key (sk-...)",
      save: "Save",
      skip: "Skip",
      secure: "Your key remains private and secure",
      validating: "Validating...",
    }
  };

  const lang = t('chatbot.openai.save') ? (t('chatbot.openai.save') === "Sauvegarder la clé" ? 'fr' : 'en') : 'fr';
  const txt = translations[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!key.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const success = await onSave(key);
      if (success) {
        trackOpenAISetup('success');
        trackGoogleAdsOpenAI(); // Track conversion in Google Ads
      } else {
        setError(lang === 'fr' ? "Clé invalide" : "Invalid key");
        trackOpenAISetup('failure_invalid');
      }
    } catch (err) {
      setError(lang === 'fr' ? "Erreur de connexion" : "Connection error");
      trackOpenAISetup('failure_network');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 w-full max-w-[90%] mx-auto mt-2"
    >
      <div className="flex items-center gap-2 mb-3 text-slate-700">
        <div className="bg-primary-100 p-1.5 rounded-lg text-primary-600">
          <Lock size={16} />
        </div>
        <span className="text-xs font-medium">{txt.secure}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder={txt.placeholder}
            className={`w-full bg-slate-50 border ${error ? 'border-red-300 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-200'} rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 transition-all`}
            disabled={isLoading}
          />
        </div>
        
        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-600">
            <AlertCircle size={12} />
            {error}
          </div>
        )}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={!key.trim() || isLoading}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 size={12} className="animate-spin" />
                {txt.validating}
              </>
            ) : (
              <>
                <Save size={12} />
                {txt.save}
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={() => {
              trackOpenAISetup('skip');
              onSkip();
            }}
            disabled={isLoading}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg transition-colors"
          >
            {txt.skip}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default OpenAIKeyForm;