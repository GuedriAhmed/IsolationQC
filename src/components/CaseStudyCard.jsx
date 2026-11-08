
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, TrendingUp, Calendar } from 'lucide-react';

const CaseStudyCard = ({ 
  city,
  title,
  description,
  annualBillBefore,
  workCost,
  subsidy,
  netCost,
  annualSavings,
  roi,
  savingsOver10,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-base p-0 overflow-hidden"
    >
      <div className="bg-[hsl(var(--accent))] text-white p-[20px]">
        <div className="flex items-center gap-[8px] mb-[8px]">
          <MapPin size={18} />
          <span className="text-[14px] font-[600]">{city}</span>
        </div>
        <h3 className="text-[20px] md:text-[22px] font-[700]">{title}</h3>
      </div>

      <div className="p-[24px]">
        <p className="text-[15px] text-[hsl(var(--foreground-secondary))] mb-[20px] leading-relaxed">
          {description}
        </p>

        <div className="space-y-[12px] mb-[20px]">
          <div className="flex justify-between items-center text-[14px] pb-[8px] border-b border-[hsl(var(--border))]">
            <span className="text-[hsl(var(--foreground-secondary))]">Facture annuelle avant:</span>
            <strong className="text-[hsl(var(--primary))]">{annualBillBefore}</strong>
          </div>
          <div className="flex justify-between items-center text-[14px] pb-[8px] border-b border-[hsl(var(--border))]">
            <span className="text-[hsl(var(--foreground-secondary))]">Coût des travaux:</span>
            <strong className="text-[hsl(var(--primary))]">{workCost}</strong>
          </div>
          <div className="flex justify-between items-center text-[14px] pb-[8px] border-b border-[hsl(var(--border))]">
            <span className="text-[hsl(var(--foreground-secondary))]">Subvention reçue:</span>
            <strong className="text-[#16a34a]">{subsidy}</strong>
          </div>
          <div className="flex justify-between items-center text-[14px] font-[600] pb-[8px] border-b border-[hsl(var(--border))]">
            <span>Coût net:</span>
            <strong className="text-[hsl(var(--accent))]">{netCost}</strong>
          </div>
        </div>

        <div className="bg-[hsl(var(--secondary))] p-[16px] rounded-[var(--radius)] mb-[16px]">
          <div className="space-y-[8px] text-[14px]">
            <div className="flex justify-between items-center">
              <span className="text-[hsl(var(--foreground-secondary))]">Économies annuelles:</span>
              <strong className="text-[hsl(var(--primary))]">{annualSavings}</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[hsl(var(--foreground-secondary))]">Retour sur investissement:</span>
              <strong className="text-[hsl(var(--accent))]">{roi}</strong>
            </div>
            <div className="flex justify-between items-center font-[600] pt-[8px] border-t border-[hsl(var(--border))]">
              <span>Économies sur 10 ans:</span>
              <strong className="text-[#16a34a]">{savingsOver10}</strong>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[8px] text-[13px] text-[hsl(var(--foreground-secondary))] italic">
          <TrendingUp size={16} className="text-[hsl(var(--accent))] shrink-0 mt-[2px]" />
          <span>Cas réel vérifié - Économies garanties avec nos travaux certifiés RBQ</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
