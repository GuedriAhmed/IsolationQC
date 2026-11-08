import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description, 
  metric = null,
  index = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-base p-[24px] md:p-[32px] flex flex-col items-start group"
    >
      <div className="mb-[20px] inline-flex items-center justify-center w-[56px] h-[56px] bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] group-hover:bg-[hsl(var(--accent))]/20 transition-all">
        <Icon size={28} className="text-[hsl(var(--accent))]" />
      </div>
      
      <h3 className="text-h4 mb-[12px] group-hover:text-[hsl(var(--accent))] transition-colors">
        {title}
      </h3>
      
      {metric && (
        <p className="text-[24px] font-[700] text-[hsl(var(--accent))] mb-[12px]">
          {metric}
        </p>
      )}
      
      <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default BenefitCard;