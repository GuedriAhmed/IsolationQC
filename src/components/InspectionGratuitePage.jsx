
import React, { useState } from 'react';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import { Thermometer, Camera, FileText, CheckCircle, Send, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';
import ConfirmationModal from '@/components/ConfirmationModal';

const InspectionGratuitePage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    type_propriete: '',
    services_interesses: [],
    message: '',
    consentement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'consentement') {
      setFormData(prev => ({ ...prev, consentement: checked }));
    } else if (type === 'checkbox') {
      const serviceValue = e.target.value;
      setFormData(prev => ({
        ...prev,
        services_interesses: checked 
          ? [...prev.services_interesses, serviceValue]
          : prev.services_interesses.filter(s => s !== serviceValue)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const resetForm = () => {
    console.log('🔄 [INSPECTION-GRATUITE] Resetting form to initial state');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      adresse: '',
      type_propriete: '',
      services_interesses: [],
      message: '',
      consentement: false
    });
    console.log('✅ [INSPECTION-GRATUITE] Form reset complete');
  };

  const handleModalClose = () => {
    console.log('🚪 [INSPECTION-GRATUITE] Closing confirmation modal and resetting form');
    setShowConfirmation(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 [INSPECTION-GRATUITE] Form submission started');
    console.log('📋 [INSPECTION-GRATUITE] Form data:', JSON.stringify(formData, null, 2));

    if (!formData.consentement) {
      console.error('❌ [INSPECTION-GRATUITE] Consent not provided');
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE
      });
      return;
    }
    console.log('✅ [INSPECTION-GRATUITE] Consent confirmed');

    setIsSubmitting(true);

    try {
      // Step 1: Insert into database
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💾 [INSPECTION-GRATUITE] STEP 1: Database insertion');
      console.log('📋 [INSPECTION-GRATUITE] Table: inspection_reservations');

      const dbInsertStart = Date.now();
      const { data: dbData, error: dbError } = await supabase
        .from('inspection_reservations')
        .insert([{
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          adresse: formData.adresse,
          type_propriete: formData.type_propriete,
          services_interesses: formData.services_interesses.join(', '),
          message: formData.message,
          status: 'new',
          consentement: formData.consentement
        }])
        .select();
      const dbInsertEnd = Date.now();

      console.log(`⏱️  [INSPECTION-GRATUITE] Database insert took: ${dbInsertEnd - dbInsertStart}ms`);

      if (dbError) {
        console.error('❌ [INSPECTION-GRATUITE] Database error:', {
          message: dbError.message,
          details: dbError.details,
          hint: dbError.hint,
          code: dbError.code
        });
        throw dbError;
      }
      console.log('✅ [INSPECTION-GRATUITE] Database insert successful');
      console.log('📝 [INSPECTION-GRATUITE] Inserted record:', dbData);

      // Step 2: Send emails via Edge Function
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 [INSPECTION-GRATUITE] STEP 2: Sending emails via Edge Function');
      console.log('🔌 [INSPECTION-GRATUITE] Invoking: send-contact-emails');

      const emailPayload = {
        type: 'inspection',
        nom: formData.nom,
        email: formData.email,
        telephone: formData.telephone,
        adresse: formData.adresse,
        type_propriete: formData.type_propriete,
        services_interesses: formData.services_interesses.join(', '),
        message: formData.message
      };

      console.log('📋 [INSPECTION-GRATUITE] Email payload:', JSON.stringify(emailPayload, null, 2));

      const emailStartTime = Date.now();
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-emails', {
        body: emailPayload
      });
      const emailEndTime = Date.now();

      console.log(`⏱️  [INSPECTION-GRATUITE] Edge function invocation took: ${emailEndTime - emailStartTime}ms`);
      console.log('📧 [INSPECTION-GRATUITE] Edge function response:', {
        data: emailData,
        error: emailError
      });

      if (emailError) {
        console.error('⚠️ [INSPECTION-GRATUITE] Edge function invocation error:', {
          message: emailError.message,
          context: emailError.context,
          details: emailError.details
        });
        
        toast({
          title: "Inspection enregistrée",
          description: "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé. Nous vous contacterons directement.",
        });
        
        console.log('⚠️  [INSPECTION-GRATUITE] Showing confirmation modal despite email error');
        setShowConfirmation(true);
      } else if (!emailData?.success) {
        console.error('⚠️ [INSPECTION-GRATUITE] Email sending failed:', {
          success: emailData?.success,
          error: emailData?.error
        });
        
        toast({
          title: "Inspection enregistrée",
          description: "Votre inspection a été enregistrée. Notre équipe a été notifiée et vous contactera sous peu.",
        });
        
        console.log('⚠️  [INSPECTION-GRATUITE] Showing confirmation modal despite email failure');
        setShowConfirmation(true);
      } else {
        console.log('✅ [INSPECTION-GRATUITE] Emails sent successfully!');
        console.log('📧 [INSPECTION-GRATUITE] Email details:', {
          adminMessageId: emailData.adminMessageId,
          customerMessageId: emailData.customerMessageId
        });
        
        toast({
          title: "Inspection gratuite confirmée! 🎉",
          description: `Merci ${formData.nom}! Un email de confirmation a été envoyé à ${formData.email}. Nous vous contacterons dans les 24h.`,
          className: "bg-green-600 text-white border-none",
          duration: 5000
        });
        
        console.log('🎉 [INSPECTION-GRATUITE] Opening confirmation modal');
        setShowConfirmation(true);
      }

      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🏁 [INSPECTION-GRATUITE] Form submission completed successfully');

    } catch (error) {
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.error('❌ [INSPECTION-GRATUITE] FATAL ERROR');
      console.error('❌ [INSPECTION-GRATUITE] Error type:', error.constructor.name);
      console.error('❌ [INSPECTION-GRATUITE] Error message:', error.message);
      console.error('❌ [INSPECTION-GRATUITE] Error stack:', error.stack);
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Une erreur est survenue: ${error.message}. Veuillez réessayer ou nous contacter directement au 514-312-0462.`
      });
    } finally {
      setIsSubmitting(false);
      console.log('🏁 [INSPECTION-GRATUITE] Form submission flow completed');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }
  };

  const inspectionSteps = [
    {
      icon: Camera,
      title: 'Inspection à la caméra thermique',
      description: 'Notre technicien certifié analyse votre propriété avec une caméra infrarouge de pointe'
    },
    {
      icon: FileText,
      title: 'Rapport détaillé',
      description: 'Vous recevez un rapport complet avec photos thermiques et recommandations personnalisées'
    },
    {
      icon: Thermometer,
      title: 'Solutions adaptées',
      description: 'Nous vous proposons les meilleures solutions d\'isolation selon vos besoins et votre budget'
    }
  ];

  return (
    <>
      <div className="bg-background flex-grow flex flex-col">
        <SEOHead 
          title="Inspection Thermique Gratuite | Isolation QC"
          description="Réservez votre inspection gratuite avec caméra infrarouge. Identifiez les pertes de chaleur et recevez un diagnostic complet de votre isolation."
          canonical="https://isolationqc.com/inspection-gratuite"
        />

        <BreadcrumbNav items={[
          { label: 'Accueil', path: '/' },
          { label: 'Inspection Gratuite', path: '/inspection-gratuite' }
        ]} />

        <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--accent))] to-[#ea580c] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80" 
              alt="Technicien utilisant une caméra thermique infrarouge pour inspection d'isolation de maison"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-default relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="font-semibold">Offre limitée - Inspection 100% gratuite</span>
              </div>
              <h1 className="text-h1 mb-[24px] text-white">
                Inspection Gratuite - Diagnostic Thermique
              </h1>
              <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
                Réservez votre inspection gratuite et découvrez les solutions d'isolation adaptées à votre maison. Notre diagnostic thermique révèle les zones de déperdition de chaleur invisibles à l'œil nu.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-default">
            <div className="text-center mb-[64px]">
              <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
                Comment se déroule l'inspection?
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] max-w-2xl mx-auto">
                Un processus simple et rapide pour identifier vos besoins en isolation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mb-[64px]">
              {inspectionSteps.map((step, index) => (
                <div key={index} className="card-base p-[32px] text-center">
                  <div className="w-16 h-16 mx-auto mb-[24px] bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[hsl(var(--accent))]" />
                  </div>
                  <h3 className="text-h3 mb-[12px] text-[hsl(var(--primary))]">{step.title}</h3>
                  <p className="text-body text-[hsl(var(--foreground-secondary))]">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px]">
              <div>
                <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                  Ce que révèle notre inspection
                </h2>
                <ul className="space-y-[16px] mb-[32px]">
                  {[
                    'Zones de déperdition thermique (toiture, murs, fenêtres)',
                    'Ponts thermiques et infiltrations d\'air',
                    'Défauts d\'isolation actuels',
                    'Problèmes d\'humidité et de condensation',
                    'Estimation des économies d\'énergie potentielles',
                    'Recommandations de travaux prioritaires'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-[12px]">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-body text-[hsl(var(--foreground-secondary))]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-[24px] bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] border-l-4 border-[hsl(var(--accent))]">
                  <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">💡 Pourquoi c'est gratuit?</h3>
                  <p className="text-body text-[hsl(var(--foreground-secondary))]">
                    L'inspection gratuite nous permet d'évaluer précisément vos besoins et de vous proposer un devis détaillé et personnalisé. Aucune obligation d'achat.
                  </p>
                </div>
              </div>

              <div className="card-base p-[32px] md:p-[40px]">
                <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                  Réserver mon inspection gratuite
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-[24px]">
                  <div>
                    <label htmlFor="nom" className="form-label">Nom complet *</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Jean Dupont"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                    <div>
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="jean@exemple.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="form-label">Téléphone *</label>
                      <input 
                        type="tel" 
                        id="telephone" 
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="514-312-0462"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="adresse" className="form-label">Adresse complète *</label>
                    <input 
                      type="text" 
                      id="adresse" 
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="123 Rue Exemple, Montréal, QC H1A 1A1"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="type_propriete" className="form-label">Type de propriété *</label>
                    <select 
                      id="type_propriete" 
                      name="type_propriete"
                      value={formData.type_propriete}
                      onChange={handleChange}
                      className="form-input"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="maison">Maison unifamiliale</option>
                      <option value="condo">Condo / Appartement</option>
                      <option value="duplex">Duplex / Triplex</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Services qui vous intéressent</label>
                    <div className="space-y-[12px]">
                      {['Isolation grenier', 'Isolation murs', 'Isolation sous-sol', 'Inspection thermique'].map(service => (
                        <label key={service} className="flex items-center gap-[12px] cursor-pointer">
                          <input 
                            type="checkbox" 
                            value={service}
                            checked={formData.services_interesses.includes(service)}
                            onChange={handleChange}
                            className="w-4 h-4 text-[hsl(var(--accent))] rounded"
                            disabled={isSubmitting}
                          />
                          <span className="text-body">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Message (optionnel)</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input resize-y min-h-[100px]"
                      placeholder="Informations complémentaires..."
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <ConsentCheckbox 
                    id="consentement_inspection"
                    checked={formData.consentement}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-[8px] h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Réserver mon inspection gratuite
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation} 
        onClose={handleModalClose}
      />
    </>
  );
};

export default InspectionGratuitePage;
