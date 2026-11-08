import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useCookies } from '../CookieContext';

const CookieConsent = () => {
  const { t } = useLanguage();
  const { showBanner, acceptAllCookies, refuseNonEssential, openModal } = useCookies();

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl shadow-2xl p-6 md:flex items-center gap-8 ring-1 ring-black/5">
          <div className="flex-1 flex gap-4">
             <div className="hidden md:flex p-3 bg-primary-100 text-primary-600 rounded-xl h-fit shrink-0">
                <Cookie size={24} />
             </div>
             <div>
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2 md:hidden">
                   <Cookie size={18} className="text-primary-600" /> 
                   Cookies
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                   {t('cookies.banner.text')}
                </p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 shrink-0">
             <button
               onClick={openModal}
               className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors hover:underline decoration-primary-300 underline-offset-4"
             >
               {t('cookies.banner.customize')}
             </button>
             <button
               onClick={refuseNonEssential}
               className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
             >
               {t('cookies.banner.refuseNonEssential')}
             </button>
             <button
               onClick={acceptAllCookies}
               className="px-5 py-2.5 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-lg shadow-primary-500/20 transition-all active:scale-95"
             >
               {t('cookies.banner.acceptAll')}
             </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;