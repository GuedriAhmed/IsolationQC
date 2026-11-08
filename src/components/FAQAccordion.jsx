import React from 'react';
import FAQItem from './FAQItem';

const FAQAccordion = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;