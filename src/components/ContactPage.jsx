
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';
import ConfirmationModal from '@/components/ConfirmationModal';
import { sendContactEmail, validateEmail } from '@/lib/emailService';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    sujet: '',
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
      sujet: '',
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
    console.log('🚀 [CONTACT-PAGE] Form submission started');

    // Validation
    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        variant: "destructive",
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const fullMessage = `[Sujet: ${formData.sujet}] ${formData.message}`;

      // Save to database
      console.log('💾 [CONTACT-PAGE] Saving to database...');
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          message: fullMessage,
          status: 'new',
          consentement: formData.consentement
        }]);

      if (dbError) {
        console.error('❌ [CONTACT-PAGE] Database error:', dbError);
        throw dbError;
      }
      console.log('✅ [CONTACT-PAGE] Database save successful');
      
      // Send email
      console.log('📧 [CONTACT-PAGE] Sending email...');
      const emailResult = await sendContactEmail({
        type: 'contact',
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        adresse: '',
        message: fullMessage,
        consentement: formData.consentement
      });

      if (!emailResult.success) {
        console.error('⚠️ [CONTACT-PAGE] Email failed:', emailResult.error);
        toast({
          title: "Message enregistré",
          description: "Votre message a été enregistré. Nous vous contacterons sous peu.",
        });
      } else {
        console.log('✅ [CONTACT-PAGE] Email sent successfully');
      }

      // Show success modal
      setShowConfirmation(true);

    } catch (error) {
      console.error('❌ [CONTACT-PAGE] Fatal error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter au 514-312-0462."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-background flex-grow flex flex-col">
        <SEOHead 
          title="Contactez-nous | isolationqc.com"
          description="Contactez isolationqc.com. Adresse: 204 rue Saint-Sacrement, Montréal. Téléphone, email, formulaire de contact."
          robots="index, follow"
          canonical="https://isolationqc.com/contact"
        />

        <HeroSection 
          title="Contactez-nous"
          subtitle="Une question ? Un projet d'isolation ?"
          introText="N'hésitez pas à nous contacter, notre équipe d'experts vous répondra dans les plus brefs délais."
          ctaText="Voir nos services"
          ctaLink="/services"
        />

        <section className="section-padding">
          <div className="container-default">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px]">
              
              <div className="card-base p-[24px] md:p-[40px]">
                <h2 className="text-h2 mb-[32px]">Formulaire de contact</h2>

                <form onSubmit={handleSubmit} className="space-y-[24px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                    <div>
                      <label htmlFor="nom" className="form-label">Nom complet *</label>
                      <input 
                        type="text" 
                        id="nom" 
                        name="nom" 
                        required 
                        value={formData.nom} 
                        onChange={handleChange} 
                        className="form-input" 
                        placeholder="Jean Dupont"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="form-label">Téléphone *</label>
                      <input 
                        type="tel" 
                        id="telephone" 
                        name="telephone" 
                        required 
                        value={formData.telephone} 
                        onChange={handleChange} 
                        className="form-input" 
                        placeholder="514-312-0462"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Courriel *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="form-input" 
                      placeholder="jean@exemple.com"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sujet" className="form-label">Sujet *</label>
                    <select 
                      id="sujet" 
                      name="sujet" 
                      required 
                      value={formData.sujet} 
                      onChange={handleChange} 
                      className="form-input appearance-none bg-no-repeat" 
                      style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'/%3e%3c/svg%3e")', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="inspection">Inspection gratuite</option>
                      <option value="question">Question générale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="5" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-y min-h-[120px]" 
                      placeholder="Décrivez votre projet ou posez votre question ici..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <ConsentCheckbox 
                    id="consentement_contact" 
                    checked={formData.consentement} 
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-[8px] h-[56px] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin w-5 h-5 mr-2" /> Envoi en cours...</>
                    ) : (
                      <>Envoyer le message <Send size={20} /></>
                    )}
                  </button>
                </form>
              </div>

              <div className="space-y-[32px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                  <h2 className="text-h2 col-span-1 sm:col-span-2 mb-[8px]">Informations de contact</h2>

                  <div className="card-base p-[24px] section-bg-alt">
                    <Phone className="w-[32px] h-[32px] text-[hsl(var(--accent))] mb-[16px]" />
                    <h3 className="text-h4 mb-[8px]">Téléphone</h3>
                    <a href="tel:514-312-0462" className="text-body font-bold hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm">
                      514-312-0462
                    </a>
                  </div>
                  
                  <div className="card-base p-[24px] section-bg-alt">
                    <Mail className="w-[32px] h-[32px] text-[hsl(var(--accent))] mb-[16px]" />
                    <h3 className="text-h4 mb-[8px]">Courriel</h3>
                    <a href="mailto:contact@isolationqc.com" className="text-body font-bold hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm">
                      contact@isolationqc.com
                    </a>
                  </div>

                  <div className="card-base p-[24px] section-bg-alt sm:col-span-2 flex flex-col sm:flex-row gap-[24px] items-start">
                    <MapPin className="w-[32px] h-[32px] text-[hsl(var(--accent))] shrink-0" />
                    <div>
                      <h3 className="text-h4 mb-[8px]">Horaires d'ouverture</h3>
                      <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                        Lundi au Vendredi: 8h00 - 18h00 <br />
                        Samedi et Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-h2 mt-[24px]">Localisation</h2>
                <div className="card-base overflow-hidden h-[300px] md:h-[400px] p-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5369620785165!2d-73.55745148444456!3d45.50334817910166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5992fae2e5%3A0xc3b44b9ffcf1a1c9!2s204%20St%20Sacrement%20St%2C%20Montreal%2C%20QC%20H2Y%201W8!5e0!3m2!1sen!2sca!4v1655000000000!5m2!1sen!2sca" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte de localisation des bureaux d'Isolation QC à Montréal"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation} 
        onClose={handleModalClose}
        title="Message envoyé avec succès!"
        message={`Merci ${formData.nom}! Nous avons bien reçu votre message et vous contacterons dans les 24 heures. Un email de confirmation a été envoyé à ${formData.email}.`}
        autoCloseDelay={4000}
      />
    </>
  );
};

export default ContactPage;
