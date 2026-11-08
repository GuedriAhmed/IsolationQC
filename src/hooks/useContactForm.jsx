import React, { useState } from 'react';
import { supabase } from '../lib/customSupabaseClient';
import { validateEmail } from '../lib/emailValidator';
import { useToast } from '../components/ui/use-toast';
import { trackLead } from '../lib/gtmClient';
import useFacebookPixel from './useFacebookPixel';
import useGoogleAds from './useGoogleAds';

const useContactForm = () => {
  const { toast } = useToast();
  const { track } = useFacebookPixel();
  const { trackContactFormSubmission } = useGoogleAds();
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    address: '',
    consentement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      address: '',
      consentement: false
    });
  };

  const submitForm = async (source = 'Web Form') => {
    setIsLoading(true);

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires (Nom, Email, Téléphone, Message).",
      });
      setIsLoading(false);
      return false;
    }

    if (!validateEmail(formData.email)) {
      toast({
        variant: "destructive",
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
      });
      setIsLoading(false);
      return false;
    }

    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: "Vous devez autoriser la communication pour continuer.",
      });
      setIsLoading(false);
      return false;
    }

    try {
      const payload = {
        nom: formData.name,
        telephone: formData.phone,
        email: formData.email,
        adresse: formData.address || 'Non spécifiée',
        message: `${source}: ${formData.service || 'Général'} - ${formData.message}`,
        consentement: formData.consentement
      };

      const { data, error } = await supabase.functions.invoke('send-contact-emails', {
        body: payload
      });

      if (error) {
        throw new Error(error.message || "Erreur de connexion au serveur.");
      }

      if (!data?.success) {
        throw new Error(data?.error || "Le serveur a renvoyé une erreur.");
      }

      track('Lead', {
        content_name: source,
        content_category: formData.service || 'General',
        currency: 'CAD',
        value: 0
      });

      trackLead({
        contact_name: formData.name,
        contact_email: formData.email,
        contact_message: formData.message,
        service_type: formData.service || 'General'
      });

      trackContactFormSubmission();

      toast({
        title: "Demande envoyée avec succès! 🚀",
        description: `Un email de confirmation a été envoyé à ${formData.email}. Nous vous répondrons sous 24h.`,
        className: "bg-green-600 text-white border-none duration-5000"
      });

      resetForm();
      return true;

    } catch (err) {
      console.error('Submission Error:', err);
      toast({
        variant: "destructive",
        title: "Échec de l'envoi",
        description: "Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.",
        action: <button onClick={() => submitForm(source)} className="bg-white text-red-600 px-3 py-1 rounded text-xs font-bold hover:bg-red-50">Réessayer</button>
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    submitForm,
    isLoading,
    resetForm
  };
};

export default useContactForm;