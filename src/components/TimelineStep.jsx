import React from 'react';

const TimelineStep = ({ number, icon: Icon, title, description, isLast }) => {
  return (
    <div className="relative flex flex-row md:flex-col items-start md:items-center flex-1 w-full group">
      
      {/* Connecting Line (Desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-[hsl(var(--border))] transition-colors duration-300 group-hover:bg-[hsl(var(--accent))] z-0" />
      )}
      
      {/* Connecting Line (Mobile) */}
      {!isLast && (
        <div className="block md:hidden absolute top-14 left-7 w-[2px] h-[calc(100%-20px)] bg-[hsl(var(--border))] transition-colors duration-300 group-hover:bg-[hsl(var(--accent))] z-0" />
      )}

      {/* Step Icon / Number Container */}
      <div className="relative z-10 flex shrink-0 items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-[hsl(var(--background))] rounded-full border-4 border-[hsl(var(--background-secondary))] shadow-md mb-0 md:mb-6 mr-6 md:mr-0 group-hover:border-[hsl(var(--accent))] transition-colors duration-300">
        <span className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] rounded-full flex items-center justify-center font-bold text-sm md:text-lg shadow-sm">
          {number}
        </span>
        <div className="text-[hsl(var(--accent))]">
          {typeof Icon === 'string' ? (
            <span className="text-2xl md:text-3xl">{Icon}</span>
          ) : (
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 md:text-center pt-2 md:pt-0 pb-10 md:pb-0">
        <h3 className="text-[18px] md:text-[20px] font-bold text-[hsl(var(--primary))] mb-2">{title}</h3>
        <p className="text-[14px] md:text-[16px] text-[hsl(var(--foreground-secondary))] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TimelineStep;