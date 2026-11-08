import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send } from 'lucide-react';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';
import ConfirmationModal from './ConfirmationModal';

const QuoteForm = ({ defaultService = 'Grenier', onSuccess }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    adresse: '',
    type_isolation: defaultService,
    message: '',
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
      nom: '',
      telephone: '',
      email: '',
      adresse: '',
      type_isolation: defaultService,
      message: '',
      consentement: false
    });
  };

  const handleModalClose = () => {
    setShowConfirmation(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 [QUOTE-FORM] Form submission started');
    console.log('📋 [QUOTE-FORM] Form data:', formData);

    setIsLoading(true);

    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE,
      });
      setIsLoading(false);
      return;
    }

    try {
      const fullMessage = `[Type: ${formData.type_isolation}] ${formData.message}`;

      console.log('💾 [QUOTE-FORM] Inserting into database...');
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          adresse: formData.adresse,
          message: fullMessage,
          status: 'new',
          consentement: formData.consentement
        }]);

      if (dbError) {
        console.error('❌ [QUOTE-FORM] Database error:', dbError);
        throw dbError;
      }
      console.log('✅ [QUOTE-FORM] Database insert successful');

      // Send email via edge function
      console.log('📧 [QUOTE-FORM] Calling send-form-emails edge function...');
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-form-emails', {
        body: {
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          type_isolation: formData.type_isolation,
          adresse: formData.adresse,
          message: formData.message
        }
      });

      console.log('📧 [QUOTE-FORM] Edge function response:', emailData);

      if (emailError) {
        console.error('⚠️ [QUOTE-FORM] Edge function error:', emailError);
        toast({
          variant: "destructive",
          title: "Demande enregistrée",
          description: "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé. Nous vous contacterons directement.",
        });
      } else if (!emailData?.success) {
        console.error('⚠️ [QUOTE-FORM] Email sending failed:', emailData?.error);
        toast({
          variant: "destructive",
          title: "Demande enregistrée",
          description: "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé. Nous vous contacterons directement.",
        });
      } else {
        console.log('✅ [QUOTE-FORM] Emails sent successfully');
        setShowConfirmation(true);
      }

      if (onSuccess) onSuccess();

    } catch (error) {
      console.error("❌ [QUOTE-FORM] Fatal error:", error);
      toast({
        variant: "destructive",
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ou nous contacter directement par téléphone au 514-312-0462."
      });
    } finally {
      setIsLoading(false);
      console.log('🏁 [QUOTE-FORM] Form submission completed');
    }
  };

  return (
    <>
      <div id="quote-form" className="card-base p-[24px] md:p-[32px]">
        <h3 className="text-h3 mb-[24px]">Demander Votre Devis Gratuit</h3>
        <form onSubmit={handleSubmit} className="space-y-[16px] md:space-y-[24px]">
          
          <div>
            <label htmlFor="nom" className="form-label">Nom complet *</label>
            <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} placeholder="Jean Dupont" className="form-input" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
            <div>
              <label htmlFor="telephone" className="form-label">Téléphone *</label>
              <input type="tel" id="telephone" name="telephone" required value={formData.telephone} onChange={handleChange} placeholder="514-123-4567" className="form-input" />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Courriel *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jean@exemple.com" className="form-input" />
            </div>
          </div>

          <div>
            <label htmlFor="adresse" className="form-label">Adresse (Optionnelle)</label>
            <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} placeholder="123 Rue Principale, Ville" className="form-input" />
          </div>

          <div>
            <label htmlFor="type_isolation" className="form-label">Type d'isolation *</label>
            <select 
              id="type_isolation" 
              name="type_isolation" 
              required
              value={formData.type_isolation} 
              onChange={handleChange} 
              className="form-input appearance-none bg-no-repeat"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
            >
              <option value="Grenier">Isolation de Grenier</option>
              <option value="Toit">Isolation de Toit</option>
              <option value="Toit Cathédrale">Toit Cathédrale</option>
              <option value="Entretoit">Isolation d'Entretoit</option>
              <option value="Autre">Autre / Je ne sais pas</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message (Optionnel)</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Détails supplémentaires..." className="form-input min-h-[120px] resize-y" />
          </div>

          <ConsentCheckbox 
            id="consentement_quote" 
            checked={formData.consentement} 
            onChange={handleChange} 
          />

          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full mt-4"
          >
            {isLoading ? (
              <><Loader2 className="animate-spin w-5 h-5 mr-2" /> Envoi en cours...</>
            ) : (
              <><Send size={20} className="mr-2" /> Obtenir mon Devis Gratuit</>
            )}
          </button>
        </form>
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation} 
        onClose={handleModalClose}
      />
    </>
  );
};

export default QuoteForm;