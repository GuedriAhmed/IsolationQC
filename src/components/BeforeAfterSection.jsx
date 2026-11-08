
import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="text-center max-w-3xl mx-auto mb-[48px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h2 mb-[16px] text-[hsl(var(--primary))]"
          >
            Transformation de Votre Maison
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body text-[hsl(var(--foreground-secondary))] text-balance"
          >
            Voir les résultats réels de nos interventions
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1696065595189-2aa2de13c4f4" 
              alt="Comparaison avant et après des travaux d'isolation montrant la transformation thermique d'une maison au Québec"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-[32px] max-w-2xl mx-auto"
          >
            <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Découvrez comment nos solutions d'isolation transforment votre maison en espace confortable et économe en énergie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
