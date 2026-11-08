import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useLanguage } from '../LanguageContext';
import { useCookies } from '../CookieContext';
import { Shield, Lock, Eye, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const CookiePolicyPage = () => {
  const { t } = useLanguage();
  const { openModal } = useCookies();

  const sections = [
    {
      title: t('cookies.policy.whatAre'),
      content: t('cookies.policy.whatAreDesc'),
      icon: Shield
    },
    {
      title: t('cookies.policy.retention'),
      content: t('cookies.policy.retentionDesc'),
      icon: Lock
    },
    {
      title: t('cookies.policy.rights'),
      content: t('cookies.policy.rightsDesc'),
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
           >
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-heading border-b border-slate-100 pb-6">
                {t('cookies.policy.title')}
              </h1>

              <div className="space-y-12">
                 {sections.map((section, idx) => (
                    <div key={idx} className="flex gap-6">
                       <div className="bg-primary-50 p-3 rounded-xl h-fit text-primary-600 hidden sm:block">
                          <section.icon size={24} />
                       </div>
                       <div>
                          <h2 className="text-xl font-bold text-slate-800 mb-3">{section.title}</h2>
                          <p className="text-slate-600 leading-relaxed">{section.content}</p>
                       </div>
                    </div>
                 ))}

                 <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                       <Zap className="text-yellow-500" />
                       {t('cookies.policy.types')}
                    </h2>
                    
                    <div className="grid gap-4">
                       {['essential', 'analytics', 'marketing', 'performance'].map((cat) => (
                          <div key={cat} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                             <h3 className="font-bold text-slate-900 mb-1">{t(`cookies.categories.${cat}.title`)}</h3>
                             <p className="text-sm text-slate-500">{t(`cookies.categories.${cat}.desc`)}</p>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-100 text-center">
                    <p className="text-slate-600 mb-6">{t('cookies.policy.manage')}</p>
                    <button
                       onClick={openModal}
                       className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/20 transition-all hover:scale-105"
                    >
                       {t('cookies.policy.manage')}
                    </button>
                    <p className="mt-8 text-sm text-slate-400">
                       {t('cookies.policy.contact')} <br/>
                       <a href="mailto:privacy@isolationqc.com" className="text-primary-600 hover:underline">privacy@isolationqc.com</a>
                    </p>
                 </div>
              </div>
           </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;