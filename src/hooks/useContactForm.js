
import { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { sendContactEmail, retryEmailSend, validateEmail, validatePhone } from '@/lib/emailService';

/**
 * Custom hook for handling contact form submissions
 * @param {Object} options - Configuration options
 * @returns {Object} - Form state and handlers
 */
const useContactForm = (options = {}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    message: '',
    consentement: false,
    ...options.initialData
  });

  /**
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  /**
   * Reset form to initial state
   */
  const resetForm = () => {
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      adresse: '',
      message: '',
      consentement: false,
      ...options.initialData
    });
  };

  /**
   * Validate form data
   */
  const validateForm = () => {
    if (!formData.nom?.trim()) {
      toast({
        variant: "destructive",
        title: "Nom requis",
        description: "Veuillez entrer votre nom complet."
      });
      return false;
    }

    if (!formData.email?.trim() || !validateEmail(formData.email)) {
      toast({
        variant: "destructive",
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide."
      });
      return false;
    }

    if (!formData.telephone?.trim()) {
      toast({
        variant: "destructive",
        title: "Téléphone requis",
        description: "Veuillez entrer votre numéro de téléphone."
      });
      return false;
    }

    if (!formData.message?.trim()) {
      toast({
        variant: "destructive",
        title: "Message requis",
        description: "Veuillez entrer un message."
      });
      return false;
    }

    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: "Vous devez accepter notre politique de confidentialité pour continuer."
      });
      return false;
    }

    return true;
  };

  /**
   * Submit form data
   * @param {Object} additionalData - Additional data to merge with form data
   * @returns {Promise<boolean>} - Success status
   */
  const submitForm = async (additionalData = {}) => {
    console.log('🚀 [USE-CONTACT-FORM] Form submission started');
    
    if (!validateForm()) {
      return false;
    }

    setIsLoading(true);

    try {
      const submissionData = {
        ...formData,
        ...additionalData
      };

      // Send email with retry logic
      const emailResult = await retryEmailSend(sendContactEmail, submissionData, 2);

      if (!emailResult.success) {
        console.error('❌ [USE-CONTACT-FORM] Email sending failed:', emailResult.error);
        
        toast({
          variant: "destructive",
          title: "Erreur d'envoi",
          description: "L'email n'a pas pu être envoyé. Votre demande a été enregistrée et nous vous contacterons directement."
        });
        
        // Don't return false - submission was saved to database
      } else {
        console.log('✅ [USE-CONTACT-FORM] Email sent successfully');
      }

      // Success - form was submitted
      console.log('✅ [USE-CONTACT-FORM] Form submission completed successfully');
      
      return true;

    } catch (error) {
      console.error('❌ [USE-CONTACT-FORM] Fatal error:', error);
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Une erreur est survenue: ${error.message}. Veuillez réessayer ou nous contacter au 514-312-0462.`
      });
      
      return false;
    } finally {
      setIsLoading(false);
      console.log('🏁 [USE-CONTACT-FORM] Form submission flow completed');
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    submitForm,
    resetForm,
    isLoading,
    validateForm
  };
};

export default useContactForm;
