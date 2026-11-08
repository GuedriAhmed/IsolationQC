import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import { MapPin, Phone, Send, Loader2, Star, CheckCircle } from 'lucide-react';
import { localCities } from '@/data/LocalCityData';
import { validateForm } from '@/lib/formValidation';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/hooks/use-toast';
import ConsentCheckbox, { CONSENT_ERROR_MESSAGE } from './ConsentCheckbox';

const LocalCityPage = ({ data }) => {
  const { citySlug } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cityData = data || localCities.find(city => city.slug === citySlug);

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: '',
    consentement: false
  });
  const [errors, setErrors] = useState({});

  if (!cityData) {
    return (
      <div className="container-default py-24 text-center">
        <h1 className="text-h1 mb-6">Ville non trouvée</h1>
        <Link to="/secteurs-desservis" className="btn-primary">
          Voir tous les secteurs
        </Link>
      </div>
    );
  }

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
        .from('local_page_submissions')
        .insert([{
          city: cityData.name,
          nom: formData.nom,
          telephone: formData.telephone,
          email: formData.email,
          message: formData.message,
          status: 'new',
          consentement: formData.consentement
        }]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-form-emails', {
        body: {
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: `Ville: ${cityData.name}\n\n${formData.message}`,
          source: `local-${cityData.slug}`,
          type: 'devis'
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

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title={cityData.title}
        description={cityData.metaDescription}
        canonical={`https://isolationqc.com/entrepreneur-isolation-${cityData.slug}`}
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Secteurs Desservis', path: '/secteurs-desservis' },
        { label: cityData.name, path: `/entrepreneur-isolation-${cityData.slug}` }
      ]} />

      <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={cityData.images?.hero || "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf?w=1920&q=80"} 
            alt={`Vue panoramique de ${cityData.name} avec maisons résidentielles nécessitant isolation thermique`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">{cityData.name}, Québec</span>
            </div>
            <h1 className="text-h1 mb-[24px] text-white">
              {cityData.h1}
            </h1>
            <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
              Services d'isolation professionnels à {cityData.name}. Devis gratuit, sans engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:514-312-0462" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                514-312-0462
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
                {cityData.h2Suggestions[0]}
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                {cityData.localContent.intro}
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                {cityData.localContent.services}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <img 
                src={cityData.images?.service || "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&q=80"} 
                alt={`Technicien installant isolation thermique dans une résidence de ${cityData.name}`}
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              {cityData.h2Suggestions[1]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {[
                { icon: '💰', title: 'Économies d\'énergie', desc: 'Réduisez vos factures de chauffage jusqu\'à 30%' },
                { icon: '🏡', title: 'Confort optimal', desc: 'Température uniforme dans toute la maison' },
                { icon: '🌿', title: 'Écoresponsable', desc: 'Matériaux écologiques certifiés' }
              ].map((item, idx) => (
                <div key={idx} className="card-base p-[24px] text-center">
                  <div className="text-[48px] mb-[16px]">{item.icon}</div>
                  <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">{item.title}</h3>
                  <p className="text-body text-[hsl(var(--foreground-secondary))]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">
              {cityData.h2Suggestions[2]}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
              <div>
                <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                  {cityData.localContent.pricing}
                </p>
                <div className="p-[24px] bg-[hsl(var(--secondary))] rounded-[var(--radius)]">
                  <h3 className="text-h4 mb-[16px] text-[hsl(var(--primary))]">Nos services à {cityData.name}:</h3>
                  <ul className="space-y-[12px]">
                    {['Isolation grenier', 'Isolation murs', 'Isolation sous-sol', 'Inspection thermique gratuite'].map((service, idx) => (
                      <li key={idx} className="flex items-center gap-[12px]">
                        <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0" />
                        <span className="text-body">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
                <img 
                  src={cityData.images?.inspection || "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"} 
                  alt={`Inspection thermique avec caméra infrarouge dans une maison de ${cityData.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {cityData.testimonials && cityData.testimonials.length > 0 && (
            <div className="mb-[64px]">
              <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
                {cityData.localContent.testimonialIntro}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                {cityData.testimonials.map((testimonial, idx) => (
                  <div key={idx} className="card-base p-[24px]">
                    <div className="flex gap-[4px] mb-[16px]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                      ))}
                    </div>
                    <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[16px] italic">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-[12px]">
                      <div className="w-10 h-10 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center font-bold text-[hsl(var(--accent))]">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[hsl(var(--primary))]">{testimonial.name}</p>
                        <p className="text-small text-[hsl(var(--foreground-secondary))]">{testimonial.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="devis" className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-[40px]">
              <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
                Obtenir un devis gratuit à {cityData.name}
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
                    placeholder="Décrivez votre projet d'isolation..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <ConsentCheckbox 
                  id={`consentement_${cityData.slug}`}
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

      {cityData.faqItems && cityData.faqItems.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-default">
            <h2 className="text-h2 mb-[40px] text-[hsl(var(--primary))] text-center">
              {cityData.h2Suggestions[4]}
            </h2>
            <div className="max-w-3xl mx-auto space-y-[16px]">
              {cityData.faqItems.map((faq, idx) => (
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
        </section>
      )}
    </div>
  );
};

export default LocalCityPage;