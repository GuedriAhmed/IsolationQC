import React from 'react';

const TrustCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="card-base p-[24px] flex items-center gap-[16px]">
      <div className="w-[56px] h-[56px] bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center text-[hsl(var(--accent))] shrink-0">
        {Icon && <Icon size={28} />}
      </div>
      <div>
        <div className="text-[24px] font-bold text-[hsl(var(--foreground))] leading-tight">{value}</div>
        <div className="text-small font-semibold text-[hsl(var(--foreground-secondary))]">{label}</div>
      </div>
    </div>
  );
};

export default TrustCard;