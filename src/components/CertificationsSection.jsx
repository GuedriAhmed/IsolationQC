import React from 'react';
import { useLanguage } from '../LanguageContext';
import { CheckCircle2, Award, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const CertificationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-20 bg-[#1E5A8E] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('certifications.title')}</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              {t('certifications.desc')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Award className="w-8 h-8 text-[#FFD700]" />
                <span className="font-bold text-xl">{t('certifications.rbq')}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Shield className="w-8 h-8 text-[#4ADE80]" />
                <span className="font-bold text-xl">{t('certifications.insurance')}</span>
              </div>
            </div>

            {/* Certification Badge Image */}
            <div className="mt-8">
                <img 
                    src="https://images.unsplash.com/photo-1691402541630-106051aaf28a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Certification Badge"
                    loading="lazy"
                    className="w-24 h-24 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 inline-block border-2 border-white/30"
                />
                <span className="ml-4 text-sm font-bold text-blue-200 align-middle">
                    Certifié RBQ &<br/>Eco-Responsable
                </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center w-40 h-40">
                    <CheckCircle2 className="w-12 h-12 text-[#2D7A4A] mb-2" />
                    <span className="text-gray-800 font-bold text-center text-sm">Régie du Bâtiment</span>
                    <span className="text-xs text-gray-500">Certifié</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center w-40 h-40 mt-8">
                     <Shield className="w-12 h-12 text-[#1E5A8E] mb-2" />
                    <span className="text-gray-800 font-bold text-center text-sm">Assurance Complète</span>
                    <span className="text-xs text-gray-500">2M$ Couverture</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center w-40 h-40 -mt-8">
                     <Award className="w-12 h-12 text-yellow-500 mb-2" />
                    <span className="text-gray-800 font-bold text-center text-sm">Garantie 10 Ans</span>
                    <span className="text-xs text-gray-500">Main d'oeuvre</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-center w-40 h-40">
                     <HomeIcon />
                     <span className="text-gray-800 font-bold text-center text-sm mt-2">APCHQ</span>
                     <span className="text-xs text-gray-500">Membre</span>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Simple icon placeholder for APCHQ style icon
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2D7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
)

export default CertificationsSection;