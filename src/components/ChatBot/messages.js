import { translations } from "../../translations";

export const STAGES = {
  GREETING: 'GREETING',
  PROPERTY_TYPE: 'PROPERTY_TYPE',
  PROBLEM_TYPE: 'PROBLEM_TYPE',
  ATTIC_SIZE: 'ATTIC_SIZE',
  URGENCY: 'URGENCY',
  NAME: 'NAME',
  PHONE: 'PHONE',
  EMAIL: 'EMAIL',
  ADDRESS: 'ADDRESS',
  OPENAI_SETUP: 'OPENAI_SETUP',
  CONFIRMATION: 'CONFIRMATION',
};

export const getBotResponse = (stage, lang, userData) => {
  const isFr = lang === 'fr';
  const t = translations[lang]?.chatbot?.openai || {};

  const responses = {
    [STAGES.GREETING]: {
      text: isFr 
        ? "Bonjour! Je suis l'assistant virtuel d'Isolation QC. Comment puis-je vous aider aujourd'hui? Je peux vous aider à obtenir une estimation gratuite ou répondre à vos questions."
        : "Hello! I'm the Isolation QC virtual assistant. How can I help you today? I can help you get a free estimate or answer your questions.",
      options: isFr 
        ? [{ label: "Obtenir une estimation", value: "estimate" }, { label: "Parler à un expert", value: "expert" }]
        : [{ label: "Get an estimate", value: "estimate" }, { label: "Talk to an expert", value: "expert" }]
    },
    [STAGES.PROPERTY_TYPE]: {
      text: isFr
        ? "Parfait! Pour commencer, quel type de propriété souhaitez-vous isoler?"
        : "Great! To start, what type of property are you looking to insulate?",
      options: isFr
        ? [{ label: "Maison", value: "house" }, { label: "Condo", value: "condo" }, { label: "Commercial", value: "commercial" }]
        : [{ label: "House", value: "house" }, { label: "Condo", value: "condo" }, { label: "Commercial", value: "commercial" }]
    },
    [STAGES.PROBLEM_TYPE]: {
      text: isFr
        ? "Avez-vous remarqué des problèmes spécifiques?"
        : "Have you noticed any specific problems?",
      options: isFr
        ? [
            { label: "Factures élevées", value: "bills" },
            { label: "Moisissures", value: "mold" },
            { label: "Pièces froides", value: "cold" },
            { label: "Rénovation", value: "renovation" }
          ]
        : [
            { label: "High bills", value: "bills" },
            { label: "Mold", value: "mold" },
            { label: "Cold rooms", value: "cold" },
            { label: "Renovation", value: "renovation" }
          ]
    },
    [STAGES.ATTIC_SIZE]: {
      text: isFr
        ? "Quelle est la superficie approximative de votre grenier (en pieds carrés)?"
        : "What is the approximate size of your attic (in sq ft)?",
      options: isFr
        ? [{ label: "< 800 pi²", value: "small" }, { label: "800-1200 pi²", value: "medium" }, { label: "1200+ pi²", value: "large" }, { label: "Je ne sais pas", value: "unknown" }]
        : [{ label: "< 800 sq ft", value: "small" }, { label: "800-1200 sq ft", value: "medium" }, { label: "1200+ sq ft", value: "large" }, { label: "I don't know", value: "unknown" }]
    },
    [STAGES.URGENCY]: {
      text: isFr
        ? "Quand souhaiteriez-vous que les travaux soient effectués?"
        : "When would you like the work to be done?",
      options: isFr
        ? [{ label: "Urgent (dès que possible)", value: "urgent" }, { label: "Dans le mois", value: "month" }, { label: "Planification future", value: "future" }]
        : [{ label: "Urgent (ASAP)", value: "urgent" }, { label: "Within a month", value: "month" }, { label: "Future planning", value: "future" }]
    },
    [STAGES.NAME]: {
      text: isFr
        ? "Merci! J'ai besoin de quelques informations pour préparer votre dossier. Quel est votre nom complet?"
        : "Thanks! I need a few details to prepare your file. What is your full name?",
      options: []
    },
    [STAGES.PHONE]: {
      text: isFr
        ? `Enchanté ${userData.name || ''}! Quel est votre numéro de téléphone pour vous joindre?`
        : `Nice to meet you ${userData.name || ''}! What is the best phone number to reach you?`,
      options: []
    },
    [STAGES.EMAIL]: {
      text: isFr
        ? "Et votre adresse courriel pour vous envoyer l'estimation?"
        : "And your email address to send the estimate?",
      options: []
    },
    [STAGES.ADDRESS]: {
      text: isFr
        ? "Dernière question: quelle est l'adresse de la propriété concernée?"
        : "Last question: what is the address of the property?",
      options: []
    },
    [STAGES.OPENAI_SETUP]: {
      text: t.prompt || "Merci pour vos coordonnées! Pour améliorer votre expérience, souhaitez-vous activer les réponses IA avancées?",
      options: []
    },
    [STAGES.CONFIRMATION]: {
      text: isFr
        ? "Merci beaucoup! Un de nos experts a reçu votre demande et vous contactera sous peu (généralement en moins de 24h). Bonne journée!"
        : "Thank you very much! One of our experts has received your request and will contact you shortly (usually within 24h). Have a great day!",
      options: []
    }
  };

  return responses[stage];
};