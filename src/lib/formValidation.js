
export const validateName = (name) => {
  if (!name || name.trim().length === 0) {
    return { valid: false, error: "Le nom est requis" };
  }
  
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
  if (!nameRegex.test(name)) {
    return { valid: false, error: "Le nom doit contenir uniquement des lettres" };
  }
  
  if (name.trim().length < 2) {
    return { valid: false, error: "Le nom doit contenir au moins 2 caractères" };
  }
  
  return { valid: true, error: null };
};

export const validateEmail = (email) => {
  if (!email || email.trim().length === 0) {
    return { valid: false, error: "L'adresse email est requise" };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Veuillez entrer une adresse email valide" };
  }
  
  return { valid: true, error: null };
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim().length === 0) {
    return { valid: false, error: "Le numéro de téléphone est requis" };
  }
  
  const digitsOnly = phone.replace(/\D/g, '');
  
  if (digitsOnly.length < 10) {
    return { valid: false, error: "Le téléphone doit contenir au moins 10 chiffres" };
  }
  
  return { valid: true, error: null };
};

export const validateMessage = (message) => {
  if (!message || message.trim().length === 0) {
    return { valid: false, error: "Le message est requis" };
  }
  
  if (message.trim().length < 10) {
    return { valid: false, error: "Le message doit contenir au moins 10 caractères" };
  }
  
  return { valid: true, error: null };
};

export const validateConsent = (consent) => {
  if (!consent) {
    return { valid: false, error: "Vous devez accepter la clause de consentement" };
  }
  
  return { valid: true, error: null };
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (formData.nom !== undefined) {
    const nameValidation = validateName(formData.nom);
    if (!nameValidation.valid) errors.nom = nameValidation.error;
  }
  
  if (formData.email !== undefined) {
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) errors.email = emailValidation.error;
  }
  
  if (formData.telephone !== undefined) {
    const phoneValidation = validatePhone(formData.telephone);
    if (!phoneValidation.valid) errors.telephone = phoneValidation.error;
  }
  
  if (formData.message !== undefined) {
    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.valid) errors.message = messageValidation.error;
  }
  
  if (formData.consentement !== undefined) {
    const consentValidation = validateConsent(formData.consentement);
    if (!consentValidation.valid) errors.consentement = consentValidation.error;
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};
