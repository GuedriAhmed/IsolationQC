import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Home, Heart, DollarSign, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: t('benefits.comfort.title'),
      desc: t('benefits.comfort.desc'),
      color: 'bg-blue-500',
      image: "https://images.unsplash.com/photo-1687046423521-2cc65132d5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: t('benefits.health.title'),
      desc: t('benefits.health.desc'),
      color: 'bg-red-500',
      image: null
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: t('benefits.savings.title'),
      desc: t('benefits.savings.desc'),
      color: 'bg-green-600',
      image: "https://images.unsplash.com/photo-1679274742404-4320c22ebe75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: <Wallet className="w-8 h-8 text-white" />,
      title: t('benefits.logisVert.title'),
      desc: t('benefits.logisVert.desc'),
      color: 'bg-purple-600',
      image: null
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
       {/* Decorative circles */}
       <div className="absolute top-0 left-0 w-64 h-64 bg-[#2D7A4A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E5A8E]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t('benefits.title')}</h2>
          <div className="w-24 h-1 bg-[#2D7A4A] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col relative overflow-hidden"
            >
              {benefit.image && (
                 <div className="absolute top-0 left-0 w-full h-24 opacity-10 pointer-events-none">
                    <img src={benefit.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
                 </div>
              )}
              
              <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{benefit.title}</h3>
              <p className="text-gray-600 relative z-10">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;