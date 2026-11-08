import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TimelineComponent = ({ steps }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-[20px] md:left-[28px] top-0 bottom-0 w-[2px] bg-[hsl(var(--border))]" />
      
      <div className="space-y-[32px] md:space-y-[40px]">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative flex items-start gap-[20px] md:gap-[32px]"
          >
            {/* Step Number Circle */}
            <div className="relative z-10 flex-shrink-0 w-[40px] h-[40px] md:w-[56px] md:h-[56px] bg-[hsl(var(--accent))] rounded-full flex items-center justify-center shadow-lg">
              {step.icon ? (
                <step.icon size={20} className="text-white" />
              ) : (
                <span className="text-white font-[700] text-[18px] md:text-[20px]">
                  {index + 1}
                </span>
              )}
            </div>
            
            {/* Step Content */}
            <div className="flex-grow pb-[24px]">
              <h3 className="text-[18px] md:text-[20px] font-[700] text-[hsl(var(--primary))] mb-[8px] leading-[1.3]">
                {step.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-[hsl(var(--foreground-secondary))] leading-[1.6]">
                {step.description}
              </p>
              
              {step.details && step.details.length > 0 && (
                <ul className="mt-[12px] space-y-[8px]">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-[8px] text-[14px] text-[hsl(var(--foreground-secondary))]">
                      <CheckCircle size={16} className="text-[hsl(var(--accent))] shrink-0 mt-[2px]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {step.duration && (
                <div className="mt-[12px] inline-flex items-center gap-[8px] text-[13px] font-[600] text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10 px-[12px] py-[6px] rounded-[var(--radius)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {step.duration}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;