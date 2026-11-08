
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import TestimonialsSection from './TestimonialsSection';
import { CheckCircle, Send, Loader2, Home, Shield, Thermometer, DollarSign } from 'lucide-react';
import { validateForm } from '@/lib/formValidation';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';

const IsolationMursPage = () => {
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
          message: `[Isolation Murs] ${formData.message}`,
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
          source: 'isolation-murs',
          type: 'isolation-murs'
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
      question: "Quelle est la différence entre isolation par l'intérieur et par l'extérieur?",
      answer: "L'isolation par l'intérieur est moins coûteuse et ne modifie pas l'apparence extérieure. L'isolation par l'extérieur offre une meilleure performance thermique en éliminant les ponts thermiques, mais nécessite de refaire le revêtement extérieur."
    },
    {
      question: "Combien coûte l'isolation des murs?",
      answer: "Le coût varie selon la méthode choisie et la superficie. En moyenne, l'isolation par l'intérieur coûte entre 8$ et 15$ le pied carré, tandis que l'isolation par l'extérieur peut aller de 15$ à 25$ le pied carré. Contactez-nous pour un devis précis."
    },
    {
      question: "Combien de temps durent les travaux d'isolation des murs?",
      answer: "Pour une maison typique, l'isolation des murs par l'intérieur prend généralement 3 à 5 jours. L'isolation par l'extérieur peut nécessiter 1 à 2 semaines selon la superficie et les conditions météorologiques."
    },
    {
      question: "L'isolation des murs améliore-t-elle vraiment le confort?",
      answer: "Absolument! Une bonne isolation des murs élimine les courants d'air, réduit les variations de température entre les pièces, diminue le bruit extérieur et peut réduire vos factures de chauffage jusqu'à 25%."
    },
    {
      question: "Faut-il isoler les murs du sous-sol aussi?",
      answer: "Oui, c'est fortement recommandé. Les murs de fondation non isolés peuvent représenter jusqu'à 20% des pertes de chaleur d'une maison. L'isolation du sous-sol améliore le confort et prévient les problèmes d'humidité."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Isolation Murs au Québec - Intérieur et Extérieur | Isolation QC"
        description="Services professionnels d'isolation de murs au Québec. Isolation par l'intérieur et l'extérieur. Économisez jusqu'à 25% sur vos factures. Devis gratuit."
        canonical="https://isolationqc.com/isolation-murs"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Isolation Murs', path: '/isolation-murs' }
      ]} />

      <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9" 
            alt="Isolation des murs"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 mb-[24px] text-white">
              Isolation de Murs - Confort et Économies
            </h1>
            <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
              Isolation murale professionnelle par l'intérieur ou l'extérieur. Éliminez les ponts thermiques, réduisez vos factures et améliorez votre confort toute l'année.
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
                Pourquoi isoler vos murs?
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                Les murs représentent une part importante des pertes de chaleur dans une maison, pouvant aller jusqu'à 25% de votre consommation énergétique totale. Une isolation murale adéquate transforme radicalement le confort de votre maison en éliminant les courants d'air froids, en uniformisant la température dans toutes les pièces et en créant une barrière efficace contre le bruit extérieur.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Nos experts en isolation utilisent des matériaux de haute performance comme la laine minérale, le polyuréthane giclé ou la cellulose dense-pack pour offrir une résistance thermique exceptionnelle. Que vous choisissiez l'isolation par l'intérieur ou par l'extérieur, nous garantissons une installation conforme aux normes du Code du bâtiment du Québec et une amélioration mesurable de votre confort.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9" 
                alt="Isolation des murs"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Avantages de l'isolation des murs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {[
                { icon: Thermometer, title: 'Performance thermique', desc: 'Température uniforme dans toute la maison' },
                { icon: DollarSign, title: 'Économies d\'énergie', desc: 'Réduisez vos factures jusqu\'à 25%' },
                { icon: Shield, title: 'Protection durable', desc: 'Prévention de l\'humidité et moisissure' },
                { icon: Home, title: 'Valeur ajoutée', desc: 'Augmentation de la valeur de votre propriété' }
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
              Nos méthodes d'isolation murale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Isolation par l'intérieur</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                  Solution la plus économique qui ne modifie pas l'apparence extérieure de votre maison. Idéale pour les rénovations et permet un contrôle précis de la qualité d'installation.
                </p>
                <ul className="space-y-[12px]">
                  {[
                    'Installation rapide sans échafaudage',
                    'Aucune modification extérieure',
                    'Coût plus abordable',
                    'Parfait pour rénovations intérieures'
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-[12px]">
                      <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                      <span className="text-body text-[hsl(var(--foreground-secondary))]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Isolation par l'extérieur</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                  Performance thermique supérieure en éliminant tous les ponts thermiques. Protège la structure et permet de moderniser l'apparence de votre maison.
                </p>
                <ul className="space-y-[12px]">
                  {[
                    'Meilleure performance énergétique',
                    'Élimine tous les ponts thermiques',
                    'Protège la structure du bâtiment',
                    'Modernise l\'apparence extérieure'
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
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Questions fréquentes sur l'isolation des murs
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
                    placeholder="Décrivez votre projet d'isolation des murs (intérieur/extérieur, superficie approximative, etc.)"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <ConsentCheckbox 
                  id="consentement_murs"
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

export default IsolationMursPage;
