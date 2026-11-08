
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import TestimonialsSection from './TestimonialsSection';
import { CheckCircle, Send, Loader2, Droplets, Home, Thermometer, Shield } from 'lucide-react';
import { validateForm } from '@/lib/formValidation';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';

const IsolationSoussolPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    consentement: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      toast({
        variant: "destructive",
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire"
      });
      return;
    }

    if (!formData.consentement) {
      toast({
        variant: "destructive",
        title: "Consentement requis",
        description: CONSENT_ERROR_MESSAGE
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          message: `[Isolation Sous-sol] ${formData.message}`,
          status: 'new',
          consentement: formData.consentement
        }]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-form-emails', {
        body: {
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message,
          source: 'isolation-sous-sol',
          type: 'isolation-sous-sol'
        }
      });

      if (emailError) console.error('Email error:', emailError);

      toast({
        title: "Demande envoyée!",
        description: "Votre demande a bien été envoyée. Nous vous contacterons rapidement.",
        className: "bg-green-600 text-white border-none"
      });

      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: '',
        consentement: false
      });
      setErrors({});

    } catch (error) {
      console.error('Submit error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      question: "Pourquoi isoler mon sous-sol?",
      answer: "Un sous-sol non isolé peut représenter jusqu'à 20% des pertes de chaleur d'une maison. L'isolation crée un espace confortable, réduit l'humidité, prévient la moisissure et permet de transformer votre sous-sol en espace habitable supplémentaire."
    },
    {
      question: "Quel type d'isolant est recommandé pour un sous-sol?",
      answer: "Nous recommandons généralement le polyuréthane giclé ou des panneaux rigides en polystyrène extrudé (XPS) pour les murs de fondation. Ces matériaux résistent à l'humidité et offrent une excellente valeur R. Pour le plafond, la laine minérale est aussi une option efficace."
    },
    {
      question: "Combien coûte l'isolation d'un sous-sol?",
      answer: "Le coût varie selon la superficie et la méthode choisie. En moyenne, comptez entre 5$ et 12$ le pied carré pour l'isolation complète des murs et du plafond. Contactez-nous pour une évaluation précise de votre projet."
    },
    {
      question: "L'isolation du sous-sol aide-t-elle avec les problèmes d'humidité?",
      answer: "Oui! Une isolation appropriée avec pare-vapeur réduit considérablement les problèmes d'humidité et de condensation. Cependant, il est important de résoudre d'abord tout problème d'infiltration d'eau avant d'isoler."
    },
    {
      question: "Combien de temps durent les travaux d'isolation de sous-sol?",
      answer: "Pour un sous-sol de taille moyenne (environ 1000 pi²), les travaux prennent généralement 3 à 5 jours. La durée peut varier selon l'état actuel du sous-sol et les travaux préparatoires nécessaires."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Isolation Sous-sol au Québec - Espace Habitable | Isolation QC"
        description="Services professionnels d'isolation de sous-sol au Québec. Transformez votre sous-sol en espace confortable. Contrôle d'humidité. Devis gratuit."
        canonical="https://isolationqc.com/isolation-sous-sol"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Isolation Sous-sol', path: '/isolation-sous-sol' }
      ]} />

      <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf" 
            alt="Isolation du sous-sol"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 mb-[24px] text-white">
              Isolation Sous-sol - Espace Habitable Supplémentaire
            </h1>
            <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
              Transformez votre sous-sol en espace habitable confortable et sec. Isolation professionnelle des murs et plafonds avec contrôle d'humidité garanti.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:514-312-0462" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
                Appeler: 514-312-0462
              </a>
              <a href="#devis" className="btn-primary bg-[hsl(var(--accent))] hover:bg-[#ea580c]">
                Obtenir un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px] mb-[64px]">
            <div>
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                Transformez votre sous-sol en espace de vie
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                Le sous-sol représente souvent un espace sous-utilisé qui, avec une isolation adéquate, peut devenir une extension précieuse de votre maison. Que vous souhaitiez créer une salle familiale, un bureau à domicile, une salle de jeux ou une chambre supplémentaire, l'isolation appropriée est la première étape essentielle.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Nos experts utilisent des techniques d'isolation spécialement adaptées aux sous-sols québécois pour créer un environnement sain, confortable et écoénergétique. Nous isolons les murs de fondation avec des matériaux résistants à l'humidité et installons un système de contrôle de la vapeur pour prévenir tout problème de moisissure ou de condensation.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf" 
                alt="Isolation du sous-sol"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Avantages de l'isolation du sous-sol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { icon: Home, title: 'Espace habitable', desc: 'Créez une pièce supplémentaire confortable' },
                { icon: Droplets, title: 'Contrôle humidité', desc: 'Prévention de la moisissure et condensation' },
                { icon: Thermometer, title: 'Confort thermique', desc: 'Température stable toute l\'année' },
                { icon: Shield, title: 'Économies d\'énergie', desc: 'Réduction des coûts de chauffage' }
              ].map((item, idx) => (
                <div key={idx} className="card-base p-[24px] text-center">
                  <div className="w-16 h-16 mx-auto mb-[16px] bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[hsl(var(--accent))]" />
                  </div>
                  <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">{item.title}</h3>
                  <p className="text-body text-[hsl(var(--foreground-secondary))]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">
              Nos solutions d'isolation pour sous-sol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Isolation des murs de fondation</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                  Application de panneaux isolants rigides ou de polyuréthane giclé directement sur les murs de béton. Création d'une barrière thermique continue sans ponts thermiques.
                </p>
                <ul className="space-y-[12px]">
                  {[
                    'Résistance thermique R20 à R30',
                    'Imperméable à l\'humidité',
                    'Installation de pare-vapeur',
                    'Prêt pour finition intérieure'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-[12px]">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-body text-[hsl(var(--foreground-secondary))]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Isolation du plafond</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                  Isolation entre les solives avec laine minérale ou cellulose pour améliorer l'insonorisation et le confort thermique de l'étage supérieur.
                </p>
                <ul className="space-y-[12px]">
                  {[
                    'Isolation acoustique supérieure',
                    'Réduit transmission des bruits',
                    'Améliore efficacité énergétique',
                    'Protection contre les infiltrations'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-[12px]">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-body text-[hsl(var(--foreground-secondary))]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-[64px] p-[32px] bg-[hsl(var(--accent))]/10 rounded-[var(--radius-lg)] border-l-4 border-[hsl(var(--accent))]">
            <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">⚠️ Important: Contrôle de l'humidité</h3>
            <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Avant d'isoler votre sous-sol, il est crucial de s'assurer qu'il n'y a pas de problèmes d'infiltration d'eau ou d'humidité excessive. Nos experts effectuent une inspection complète et peuvent recommander des solutions de drainage ou d'imperméabilisation si nécessaire. Une isolation sur un sous-sol humide peut causer des problèmes de moisissure et endommager votre investissement.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Questions fréquentes sur l'isolation du sous-sol
            </h2>
            <div className="max-w-3xl mx-auto space-y-[16px]">
              {faqItems.map((faq, idx) => (
                <details key={idx} className="card-base p-[24px] group">
                  <summary className="font-bold text-[hsl(var(--primary))] cursor-pointer flex items-center justify-between">
                    {faq.question}
                    <span className="text-[hsl(var(--accent))] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-[16px] text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-[40px]">
              <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
                Obtenir un devis gratuit
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))]">
                Remplissez le formulaire ci-dessous et recevez une réponse dans les 24 heures
              </p>
            </div>

            <div className="card-base p-[32px] md:p-[40px]">
              <form onSubmit={handleSubmit} className="space-y-[24px]">
                <div>
                  <label htmlFor="nom" className="form-label">Nom complet *</label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className={`form-input ${errors.nom ? 'border-red-500' : ''}`}
                    placeholder="Jean Dupont"
                  />
                  {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="jean@exemple.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="telephone" className="form-label">Téléphone *</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`form-input ${errors.telephone ? 'border-red-500' : ''}`}
                      placeholder="514-312-0462"
                    />
                    {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input resize-y min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Décrivez votre projet d'isolation de sous-sol (superficie, utilisation prévue, problèmes d'humidité éventuels, etc.)"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <ConsentCheckbox 
                  id="consentement_soussol"
                  checked={formData.consentement}
                  onChange={handleChange}
                />

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-[8px] h-[56px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-[24px] text-white">
            Besoin d'une inspection avant votre projet?
          </h2>
          <p className="text-[18px] mb-[32px] max-w-2xl mx-auto text-white/90">
            Notre inspection thermique gratuite vous permet d'identifier précisément vos besoins
          </p>
          <Link to="/inspection-gratuite" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
            Réserver une inspection gratuite
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IsolationSoussolPage;
