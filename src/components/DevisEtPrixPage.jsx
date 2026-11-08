
import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FAQAccordion from '@/components/FAQAccordion';
import ConsentCheckbox from '@/components/ConsentCheckbox';
import ConfirmationModal from '@/components/ConfirmationModal';
import { Calculator, CheckCircle2, ShieldCheck, DollarSign, Home, Activity, Loader2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateFAQSchema } from '@/lib/schemas';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import { CONSENT_ERROR_MESSAGE } from '@/components/ConsentCheckbox';

const DevisEtPrixPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    secteur: '',
    message: ''
  });
  const [consentement, setConsentement] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const breadcrumbs = [
    { label: 'Devis & Prix', url: '/devis-prix' }
  ];

  const faqItems = [
    { question: "Le devis est-il vraiment gratuit?", answer: "Oui, notre évaluation et notre devis détaillé sont 100% gratuits et sans aucune obligation." },
    { question: "Acceptez-vous les subventions Logis Vert?", answer: "Oui, nos travaux d'isolation vous permettent de bénéficier des subventions gouvernementales comme Logis Vert et Rénoclimat. Nous vous aidons avec les démarches." },
    { question: "Quels sont les facteurs de prix?", answer: "Le prix varie selon la superficie (pieds carrés), le type d'isolant (cellulose vs uréthane), l'accessibilité, et s'il faut retirer de l'ancien isolant." }
  ];

  const schemas = [
    generateFAQSchema(faqItems)
  ];

  const pricingCards = [
    {
      title: "Isolation de Grenier",
      price: "1.50$ - 3.00$",
      desc: "Soufflage de cellulose. Atteinte de la norme R50 recommandée pour une isolation optimale.",
      features: ["Fibre de cellulose écologique", "Idéal pour entretoits standards", "Rentabilité rapide (-30% chauffage)"],
      icon: Home
    },
    {
      title: "Toit Cathédrale",
      price: "3.50$ - 6.00$",
      desc: "Uréthane giclé. Parfait pour les espaces restreints et combine isolation et pare-vapeur.",
      features: ["Isolation haute performance", "Étanchéité à l'air totale", "Protection contre la moisissure"],
      icon: Activity
    }
  ];

  const heroImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&fm=webp&q=80";

  const resetForm = () => {
    console.log('🔄 [DEVIS-PRIX] Resetting form to initial state');
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      secteur: '',
      message: ''
    });
    setConsentement(false);
    console.log('✅ [DEVIS-PRIX] Form reset complete');
  };

  const handleModalClose = () => {
    console.log('🚪 [DEVIS-PRIX] Closing confirmation modal and resetting form');
    setShowConfirmation(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 [DEVIS-PRIX] Form submission started');
    console.log('📋 [DEVIS-PRIX] Form data:', JSON.stringify(formData, null, 2));
    console.log('✅ [DEVIS-PRIX] Consentement:', consentement);

    if (!consentement) {
      console.error('❌ [DEVIS-PRIX] Consent not provided');
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE
      });
      return;
    }
    console.log('✅ [DEVIS-PRIX] Consent confirmed');

    setIsSubmitting(true);

    try {
      // Step 1: Insert into database
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('💾 [DEVIS-PRIX] STEP 1: Database insertion');
      console.log('📋 [DEVIS-PRIX] Table: devis_requests');

      const dataToInsert = {
        nom: formData.nom.trim(),
        email: formData.email.trim(),
        telephone: formData.telephone.trim(),
        secteur: formData.secteur.trim(),
        message: formData.message.trim() || null
      };

      console.log('📤 [DEVIS-PRIX] Data to insert:', JSON.stringify(dataToInsert, null, 2));

      const dbInsertStart = Date.now();
      const { data: dbData, error: dbError } = await supabase
        .from('devis_requests')
        .insert([dataToInsert])
        .select();
      const dbInsertEnd = Date.now();

      console.log(`⏱️  [DEVIS-PRIX] Database insert took: ${dbInsertEnd - dbInsertStart}ms`);

      if (dbError) {
        console.error('❌ [DEVIS-PRIX] Database error:', {
          message: dbError.message,
          details: dbError.details,
          hint: dbError.hint,
          code: dbError.code
        });
        throw dbError;
      }

      console.log('✅ [DEVIS-PRIX] Database insert successful');
      console.log('📝 [DEVIS-PRIX] Inserted record:', dbData);

      // Step 2: Send emails via Edge Function
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 [DEVIS-PRIX] STEP 2: Sending emails via Edge Function');
      console.log('🔌 [DEVIS-PRIX] Invoking: send-contact-emails');

      const emailPayload = {
        type: 'devis',
        nom: formData.nom.trim(),
        email: formData.email.trim(),
        telephone: formData.telephone.trim(),
        adresse: formData.secteur.trim(),
        message: formData.message.trim() || `Demande de devis pour le secteur: ${formData.secteur.trim()}`,
        secteur: formData.secteur.trim()
      };

      console.log('📋 [DEVIS-PRIX] Email payload:', JSON.stringify(emailPayload, null, 2));

      const emailStartTime = Date.now();
      const { data: emailData, error: emailError } = await supabase.functions.invoke('send-contact-emails', {
        body: emailPayload
      });
      const emailEndTime = Date.now();

      console.log(`⏱️  [DEVIS-PRIX] Edge function invocation took: ${emailEndTime - emailStartTime}ms`);
      console.log('📧 [DEVIS-PRIX] Edge function response:', {
        data: emailData,
        error: emailError
      });

      if (emailError) {
        console.error('⚠️ [DEVIS-PRIX] Edge function invocation error:', {
          message: emailError.message,
          context: emailError.context,
          details: emailError.details
        });
        
        toast({
          title: "Demande enregistrée",
          description: "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé. Nous vous contacterons directement.",
        });
        
        console.log('⚠️  [DEVIS-PRIX] Showing confirmation modal despite email error');
        setShowConfirmation(true);
      } else if (!emailData?.success) {
        console.error('⚠️ [DEVIS-PRIX] Email sending failed:', {
          success: emailData?.success,
          error: emailData?.error
        });
        
        toast({
          title: "Demande enregistrée",
          description: "Votre demande a été enregistrée. Notre équipe a été notifiée et vous contactera sous peu.",
        });
        
        console.log('⚠️  [DEVIS-PRIX] Showing confirmation modal despite email failure');
        setShowConfirmation(true);
      } else {
        console.log('✅ [DEVIS-PRIX] Emails sent successfully!');
        console.log('📧 [DEVIS-PRIX] Email details:', {
          adminMessageId: emailData.adminMessageId,
          customerMessageId: emailData.customerMessageId
        });
        
        toast({
          title: "Demande envoyée! 🎉",
          description: `Merci ${formData.nom}! Un email de confirmation a été envoyé à ${formData.email}. Nous vous contacterons dans les 24h.`,
          className: "bg-green-600 text-white border-none",
          duration: 5000
        });
        
        console.log('🎉 [DEVIS-PRIX] Opening confirmation modal');
        setShowConfirmation(true);
      }

      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('🏁 [DEVIS-PRIX] Form submission completed successfully');

    } catch (error) {
      console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.error('❌ [DEVIS-PRIX] FATAL ERROR');
      console.error('❌ [DEVIS-PRIX] Error type:', error.constructor.name);
      console.error('❌ [DEVIS-PRIX] Error message:', error.message);
      console.error('❌ [DEVIS-PRIX] Error stack:', error.stack);
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Une erreur est survenue: ${error.message}. Veuillez réessayer ou nous contacter directement au 514-312-0462.`
      });
    } finally {
      setIsSubmitting(false);
      console.log('🏁 [DEVIS-PRIX] Form submission flow completed');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentementChange = (e) => {
    setConsentement(e.target.checked);
  };

  return (
    <>
      <div className="bg-background flex-grow flex flex-col pb-12">
        <SEOHead 
          title="Devis isolation Québec | Tarifs transparents"
          description="Devis isolation gratuit au Québec. Tarifs transparents, sans engagement. Isolation grenier, entre-toit, thermopompe."
          robots="index, follow"
          canonical="https://isolationqc.com/devis-prix"
          schemas={schemas}
          preloadImage={heroImage}
        />

        <BreadcrumbNav items={breadcrumbs} />

        <HeroSection 
          title="Devis isolation Québec — Tarifs transparents"
          subtitle="Nos tarifs d'isolation"
          introText="Découvrez nos tarifs estimés et obtenez une soumission précise pour vos travaux d'isolation. Pas de frais cachés, juste des économies d'énergie garanties. Nos équipes certifiées s'occupent de tout."
          image={heroImage}
        />

        <section className="section-padding">
          <div className="container-default">
            <div className="text-center mb-[48px]">
              <h2 className="text-[36px] md:text-[40px] font-[700] text-[hsl(var(--primary))] mb-[16px]">Facteurs influençant le prix</h2>
              <p className="text-[16px] text-[hsl(var(--foreground-secondary))]">Estimations moyennes par pied carré. Contactez-nous pour un prix exact adapté à votre projet.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[80px]">
              {pricingCards.map((card, idx) => (
                <div key={idx} className="bg-[#ffffff] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 p-[24px] md:p-[32px] border border-[hsl(var(--border))] flex flex-col">
                  <card.icon className="w-[40px] h-[40px] text-[hsl(var(--primary))] mb-[16px]" />
                  <h3 className="text-[18px] md:text-[20px] font-[700] text-[hsl(var(--primary))] mb-[8px]">{card.title}</h3>
                  <div className="text-[24px] md:text-[32px] font-[700] text-[#f97316] mb-[16px]">{card.price} <span className="text-[14px] text-[hsl(var(--foreground-secondary))] font-[400]">/ pi²</span></div>
                  <p className="text-[14px] md:text-[16px] text-[#475569] mb-[24px] flex-grow">{card.desc}</p>
                  <ul className="space-y-[12px] mb-[32px]">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-[8px] text-[14px] text-[#64748b]">
                        <CheckCircle2 size={18} className="text-[#f97316] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#devis-form" className="w-full text-center bg-[#f97316] text-[#ffffff] font-[700] py-[12px] rounded-[8px] hover:bg-[#ea580c] transition-colors">
                    Demander un devis gratuit
                  </a>
                </div>
              ))}
              
              <div className="bg-[#ffffff] rounded-[12px] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 p-[24px] md:p-[32px] border border-[#f97316]/30 flex flex-col bg-gradient-to-b from-[#fff7ed] to-white">
                <DollarSign className="w-[40px] h-[40px] text-[#10b981] mb-[16px]" />
                <h3 className="text-[18px] md:text-[20px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Aide Logis Vert — Financement</h3>
                <div className="text-[24px] md:text-[32px] font-[700] text-[#10b981] mb-[16px]">Aides de l'État</div>
                <p className="text-[14px] md:text-[16px] text-[#475569] mb-[24px] flex-grow">Réduisez considérablement la facture finale grâce aux aides gouvernementales.</p>
                <ul className="space-y-[12px] mb-[32px]">
                  <li className="flex items-start gap-[8px] text-[14px] text-[#64748b]">
                    <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>Programme Logis Vert</span>
                  </li>
                  <li className="flex items-start gap-[8px] text-[14px] text-[#64748b]">
                    <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>Programme Rénoclimat</span>
                  </li>
                  <li className="flex items-start gap-[8px] text-[14px] text-[#64748b]">
                    <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                    <span>Accompagnement dans les démarches</span>
                  </li>
                </ul>
                <Link to="/inspection-gratuite" className="w-full text-center bg-[#10b981] text-[#ffffff] font-[700] py-[12px] rounded-[8px] hover:bg-[#059669] transition-colors">
                  Vérifier mon éligibilité
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
              <div className="lg:col-span-7">
                <h2 className="text-h2 mb-6 text-[hsl(var(--primary))]">FAQ — Devis et prix</h2>
                <FAQAccordion items={faqItems} />
              </div>

              <div className="lg:col-span-5" id="devis-form">
                <div className="sticky top-28">
                  <div className="bg-white rounded-xl shadow-lg p-[24px] md:p-[32px] border border-[hsl(var(--border))]">
                    <div className="flex items-center gap-3 mb-6">
                      <Calculator className="w-8 h-8 text-[hsl(var(--primary))]" />
                      <h3 className="text-[22px] md:text-[24px] font-bold text-[hsl(var(--primary))]">
                        Demander un devis gratuit
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-[20px]">
                      <div>
                        <label htmlFor="nom" className="block text-[14px] font-semibold text-[hsl(var(--foreground))] mb-[8px]">
                          Nom complet <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-[16px] py-[12px] border border-[hsl(var(--border))] rounded-[8px] text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all bg-white"
                          placeholder="Jean Dupont"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[14px] font-semibold text-[hsl(var(--foreground))] mb-[8px]">
                          Email <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-[16px] py-[12px] border border-[hsl(var(--border))] rounded-[8px] text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all bg-white"
                          placeholder="jean@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-[14px] font-semibold text-[hsl(var(--foreground))] mb-[8px]">
                          Téléphone <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-[16px] py-[12px] border border-[hsl(var(--border))] rounded-[8px] text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all bg-white"
                          placeholder="514-312-0462"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="secteur" className="block text-[14px] font-semibold text-[hsl(var(--foreground))] mb-[8px]">
                          Secteur / Ville <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          type="text"
                          id="secteur"
                          name="secteur"
                          value={formData.secteur}
                          onChange={handleChange}
                          className="w-full px-[16px] py-[12px] border border-[hsl(var(--border))] rounded-[8px] text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all bg-white"
                          placeholder="Montréal, Laval, etc."
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[14px] font-semibold text-[hsl(var(--foreground))] mb-[8px]">
                          Message (optionnel)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-[16px] py-[12px] border border-[hsl(var(--border))] rounded-[8px] text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all resize-none bg-white"
                          placeholder="Décrivez brièvement votre projet..."
                          disabled={isSubmitting}
                        />
                      </div>

                      <ConsentCheckbox
                        id="consentement_devis"
                        checked={consentement}
                        onChange={handleConsentementChange}
                        disabled={isSubmitting}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-[14px] px-[24px] rounded-[8px] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Obtenir mon devis gratuit
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-[12px] text-[hsl(var(--foreground-secondary))] text-center mt-4">
                        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                      </p>
                    </form>
                  </div>

                  <div className="mt-6 bg-[#ffffff] border rounded-xl p-6 flex items-start gap-4 shadow-sm">
                    <ShieldCheck className="text-[hsl(var(--primary))] w-10 h-10 shrink-0" />
                    <div>
                      <h4 className="font-bold text-[hsl(var(--foreground))]">Confidentialité garantie</h4>
                      <p className="text-sm text-[hsl(var(--foreground-secondary))] mt-1">Vos informations sont sécurisées et ne seront utilisées que pour vous fournir ce devis.</p>
                    </div>
                  </div>
                </div>
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

export default DevisEtPrixPage;
