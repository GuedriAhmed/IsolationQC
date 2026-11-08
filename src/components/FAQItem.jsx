import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card-base mb-[16px] overflow-hidden group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-[24px] text-left focus-visible:outline-none focus-visible:bg-[hsl(var(--background-secondary))] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[hsl(var(--ring))]"
        aria-expanded={isOpen}
      >
        <span className="text-h4 text-[hsl(var(--primary))] pr-4 group-hover:text-[hsl(var(--accent))] transition-[var(--transition)]">
          {question}
        </span>
        <div className="shrink-0 text-[hsl(var(--accent))] p-[4px] rounded-full bg-[hsl(var(--accent))]/10">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-[24px] pb-[24px] pt-0 text-body text-[hsl(var(--foreground-secondary))] border-t border-[hsl(var(--border))] mt-[8px]">
              <div className="pt-[16px]">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;