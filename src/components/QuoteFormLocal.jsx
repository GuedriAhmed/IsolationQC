import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';
import ConfirmationModal from './ConfirmationModal';

const QuoteFormLocal = ({ cityName }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    code_postal: '',
    type_isolation: '',
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
      code_postal: '', 
      type_isolation: '', 
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
    setIsSubmitting(true);

    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('local_page_submissions')
        .insert([{
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          code_postal: formData.code_postal,
          type_isolation: formData.type_isolation,
          message: formData.message,
          city: cityName,
          consentement: formData.consentement
        }]);

      if (error) throw error;

      setShowConfirmation(true);

    } catch (error) {
      console.error('Error submitting local quote:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="card-base p-[24px] md:p-[32px] sticky top-24">
        <h3 className="text-h3 mb-[8px]">Demande de devis gratuit</h3>
        <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px]">Service rapide dans le secteur de {cityName}</p>
        
        <form onSubmit={handleSubmit} className="space-y-[16px] md:space-y-[24px]">
          <div>
            <label htmlFor="nom" className="form-label">Nom complet *</label>
            <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} className="form-input" placeholder="Jean Tremblay" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
            <div>
              <label htmlFor="telephone" className="form-label">Téléphone *</label>
              <input type="tel" id="telephone" name="telephone" required value={formData.telephone} onChange={handleChange} className="form-input" placeholder="(514) 555-0123" />
            </div>
            <div>
              <label htmlFor="code_postal" className="form-label">Code postal *</label>
              <input type="text" id="code_postal" name="code_postal" required value={formData.code_postal} onChange={handleChange} className="form-input uppercase" placeholder="H1A 1A1" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email (Optionnel)</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="jean@exemple.com" />
          </div>

          <div>
            <label htmlFor="type_isolation" className="form-label">Type d'isolation *</label>
            <select id="type_isolation" name="type_isolation" required value={formData.type_isolation} onChange={handleChange} className="form-input appearance-none bg-no-repeat" style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}>
              <option value="" disabled>Sélectionnez un service</option>
              <option value="Grenier">Grenier / Entre-toit</option>
              <option value="Murs">Murs</option>
              <option value="Sous-sol">Sous-sol</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="form-label">Message (Optionnel)</label>
            <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} className="form-input resize-y min-h-[100px]" placeholder="Détails de votre projet..." />
          </div>

          <ConsentCheckbox 
            id="consentement_local" 
            checked={formData.consentement} 
            onChange={handleChange} 
          />

          <button type="submit" disabled={isSubmitting} className="btn-primary w-full mt-4">
            {isSubmitting ? (
              <><Loader2 className="animate-spin w-5 h-5 mr-2" /> Envoi en cours...</>
            ) : (
              `Demandez un devis à ${cityName}`
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

export default QuoteFormLocal;