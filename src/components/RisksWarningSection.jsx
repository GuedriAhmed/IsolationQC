import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import { AlertTriangle, ThermometerSnowflake, Skull, Warehouse, Bug } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const RisksWarningSection = () => {
  const { t } = useLanguage();

  const risks = [
    {
      icon: <ThermometerSnowflake size={48} className="text-orange-500" />,
      title: t('risks.energy.title'),
      text: t('risks.energy.text'),
      gradient: 'from-orange-50 to-white',
      border: 'border-orange-200',
      shadow: 'shadow-orange-500/10'
    },
    {
      icon: <Skull size={48} className="text-red-600" />,
      title: t('risks.health.title'),
      text: t('risks.health.text'),
      gradient: 'from-red-50 to-white',
      border: 'border-red-200',
      shadow: 'shadow-red-500/10'
    },
    {
      icon: <Warehouse size={48} className="text-amber-600" />,
      title: t('risks.structure.title'),
      text: t('risks.structure.text'),
      gradient: 'from-amber-50 to-white',
      border: 'border-amber-200',
      shadow: 'shadow-amber-500/10'
    },
    {
      icon: <Bug size={48} className="text-yellow-700" />,
      title: t('risks.pests.title'),
      text: t('risks.pests.text'),
      gradient: 'from-yellow-50 to-white',
      border: 'border-yellow-200',
      shadow: 'shadow-yellow-500/10'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-red-50 to-white overflow-hidden relative">
      {/* Warning signs pattern bg */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6 text-red-600 shadow-xl shadow-red-500/20"
          >
             <AlertTriangle size={36} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">{t('risks.title')}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('risks.subtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${risk.gradient} p-8 rounded-2xl shadow-xl ${risk.shadow} border ${risk.border} group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                <div className="bg-white p-4 rounded-2xl shadow-sm inline-block">
                    {risk.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading relative z-10">{risk.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm relative z-10">{risk.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:shadow-2xl hover:shadow-red-500/30"
            >
                <AlertTriangle className="mr-2" size={20} />
                {t('risks.cta')}
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default RisksWarningSection;