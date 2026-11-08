
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, BarChart, ShoppingBag, Zap } from 'lucide-react';
import { useCookies } from '@/CookieContext';

const CookiePreferencesModal = () => {
  const { isModalOpen, closeModal, preferences, savePreferences, acceptAllCookies, refuseNonEssential } = useCookies();
  const [localPrefs, setLocalPrefs] = useState(preferences);

  useEffect(() => {
    if (isModalOpen) {
      setLocalPrefs(preferences);
    }
  }, [isModalOpen, preferences]);

  const handleToggle = (category) => {
    if (category === 'essential') return;
    setLocalPrefs(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  const categories = [
    { 
      id: 'essential', 
      icon: Shield, 
      color: 'text-green-600',
      title: 'Cookies essentiels',
      desc: 'Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés car ils permettent des fonctionnalités de base comme la navigation et l\'accès aux zones sécurisées.'
    },
    { 
      id: 'analytics', 
      icon: BarChart, 
      color: 'text-blue-600',
      title: 'Cookies analytiques',
      desc: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site en collectant et en rapportant des informations de manière anonyme.'
    },
    { 
      id: 'marketing', 
      icon: ShoppingBag, 
      color: 'text-purple-600',
      title: 'Cookies marketing',
      desc: 'Utilisés pour suivre les visiteurs sur les sites web afin d\'afficher des publicités pertinentes et engageantes pour l\'utilisateur individuel.'
    },
    { 
      id: 'performance', 
      icon: Zap, 
      color: 'text-yellow-600',
      title: 'Cookies de performance',
      desc: 'Nous permettent de compter les visites et les sources de trafic afin de mesurer et d\'améliorer les performances de notre site.'
    },
  ];

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cookie-modal-overlay"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          role="dialog"
          aria-labelledby="cookie-modal-title"
          aria-describedby="cookie-modal-description"
        >
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 id="cookie-modal-title" className="text-2xl font-bold text-slate-900">
              Préférences de cookies
            </h2>
            <button 
              onClick={closeModal}
              className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
              aria-label="Fermer la fenêtre"
            >
              <X size={20} />
            </button>
          </div>

          <div id="cookie-modal-description" className="p-6 overflow-y-auto flex-1 space-y-6">
            <p className="text-slate-600 mb-4">
              Gérez vos préférences de cookies ci-dessous. Vous pouvez activer ou désactiver différents types de cookies selon vos préférences.
            </p>

            {categories.map((cat) => {
              const isActive = localPrefs[cat.id];
              const isDisabled = cat.id === 'essential';
              
              return (
                <div key={cat.id} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors bg-white shadow-sm cookie-preference-item">
                  <div className={`mt-1 p-2 rounded-lg bg-slate-50 h-fit ${cat.color}`}>
                    <cat.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-900">{cat.title}</h3>
                      <div 
                        onClick={() => !isDisabled && handleToggle(cat.id)}
                        className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out toggle-track ${
                          isActive ? 'bg-[hsl(var(--accent))]' : 'bg-slate-200'
                        } ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        role="switch"
                        aria-checked={isActive}
                        aria-label={`${cat.title} - ${isActive ? 'Activé' : 'Désactivé'}`}
                      >
                        <span className={`toggle-thumb ${
                          isActive ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={refuseNonEssential}
                className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-100 transition-colors min-h-[44px]"
              >
                Refuser tous
              </button>
              <button
                onClick={acceptAllCookies}
                className="flex-1 px-4 py-2.5 border border-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] font-medium rounded-xl hover:bg-[hsl(var(--accent))]/5 transition-colors min-h-[44px]"
              >
                Accepter tous
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2.5 bg-[hsl(var(--accent))] text-white font-bold rounded-xl hover:bg-[#ea580c] transition-colors shadow-lg shadow-[hsl(var(--accent))]/20 min-h-[44px]"
              >
                Enregistrer la sélection
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
