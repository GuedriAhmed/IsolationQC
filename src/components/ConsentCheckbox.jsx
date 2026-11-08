import React from 'react';

export const CONSENT_ERROR_MESSAGE = "Vous devez autoriser la communication pour continuer";

const ConsentCheckbox = ({ checked, onChange, id = "consentement", name = "consentement" }) => {
  return (
    <div className="flex items-start gap-3 mt-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
      <input 
        type="checkbox" 
        id={id} 
        name={name} 
        checked={checked} 
        onChange={onChange} 
        required 
        className="mt-1 shrink-0 w-4 h-4 text-[hsl(var(--primary))] border-gray-300 rounded focus:ring-[hsl(var(--primary))]"
      />
      <label htmlFor={id} className="text-sm text-gray-700 leading-tight">
        J'autorise isolationqc.com et ses installateurs à me contacter par SMS, email et téléphone concernant mes besoins en isolation. <span className="text-red-500">*</span>
      </label>
    </div>
  );
};

export default ConsentCheckbox;