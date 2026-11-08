
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  benefits = [], 
  ctaText = "En savoir plus", 
  ctaLink = "#",
  image 
}) => {
  return (
    <div className="card-base flex flex-col h-full group overflow-hidden">
      {image && (
        <div className="relative h-[200px] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/80 to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-[var(--radius)] shadow-md">
            <Icon size={28} className="text-[hsl(var(--accent))]" />
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        {!image && (
          <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-[hsl(var(--secondary))] rounded-[var(--radius)] group-hover:bg-[hsl(var(--accent))]/10 transition-colors">
            <Icon size={28} className="text-[hsl(var(--accent))]" />
          </div>
        )}
        
        <h3 className="text-h4 mb-3 group-hover:text-[hsl(var(--accent))] transition-colors">
          {title}
        </h3>
        
        <p className="text-body text-[hsl(var(--foreground-secondary))] mb-4 flex-grow leading-relaxed">
          {description}
        </p>
        
        {benefits && benefits.length > 0 && (
          <ul className="mb-6 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-[14px] text-[hsl(var(--foreground-secondary))]">
                <svg className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="leading-tight">{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Link 
          to={ctaLink}
          className="inline-flex items-center gap-2 text-[hsl(var(--accent))] font-semibold text-[14px] hover:gap-3 transition-all group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
        >
          {ctaText}
          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
