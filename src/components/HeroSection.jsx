
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle, introText, image }) => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a]">
      <div className="absolute inset-0">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="container-default relative z-10 py-[80px] md:py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[18px] md:text-[20px] font-semibold mb-[16px] text-[hsl(var(--accent))]"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-h1 mb-[24px] text-white leading-tight"
          >
            {title}
          </motion.h1>

          {introText && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[18px] md:text-[20px] leading-relaxed mb-[40px] text-white/95 max-w-3xl mx-auto"
            >
              {introText}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-[16px] justify-center"
          >
            <a
              href="/devis-prix#devis-form"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-[32px] py-[16px] text-[18px] font-semibold shadow-lg hover:shadow-xl transition-all rounded-[var(--radius)] inline-block"
            >
              Demander un devis gratuit
            </a>
            <a
              href="tel:514-312-0462"
              className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-[32px] py-[16px] text-[18px] font-semibold shadow-lg hover:shadow-xl transition-all rounded-[var(--radius)] inline-block"
            >
              Appelez: 514-312-0462
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
