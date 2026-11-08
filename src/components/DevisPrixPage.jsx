
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import HeroSection from './HeroSection';
import { CheckCircle, Send, Loader2, DollarSign } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { toast } from 'sonner';
import ConsentCheckbox from './ConsentCheckbox';

const DevisPrixPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    secteur: '',
    type_service: '',
    message: '',
    consentement: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    }

    if (!formData.secteur.trim()) {
      newErrors.secteur = 'Le secteur est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    if (!formData.consentement) {
      newErrors.consentement = 'Vous devez accepter la politique de confidentialité';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    
    if (!validateForm()) {
      toast.error('Veuillez corriger les erreurs dans le formulaire');
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine type_service with message if type_service is selected
      const fullMessage = formData.type_service 
        ? `[Service: ${formData.type_service}] ${formData.message}`
        : formData.message;

      // Insert into devis_requests table
      const { data, error: dbError } = await supabase
        .from('devis_requests')
        .insert([{
          nom: formData.nom.trim(),
          email: formData.email.trim(),
          telephone: formData.telephone.trim(),
          secteur: formData.secteur.trim(),
          message: fullMessage.trim()
        }])
        .select()
        .single();

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      // Send emails via edge function
      try {
        const { error: emailError } = await supabase.functions.invoke('send-devis-email', {
          body: { record: data }
        });

        if (emailError) {
          console.error('Email sending error:', emailError);
          // Don't throw - database insert succeeded
        }
      } catch (emailErr) {
        console.error('Edge function error:', emailErr);
        // Don't throw - database insert succeeded
      }

      toast.success('Votre demande de devis a été envoyée avec succès! Vous recevrez un email de confirmation.');

      // Reset form
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        secteur: '',
        type_service: '',
        message: '',
        consentement: false
      });
      setErrors({});

    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer ou nous appeler au 514-312-0462.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const pricingData = [
    { service: 'Isolation Grenier', price: 'À partir de 1 500$', icon: '🏠' },
    { service: 'Isolation Murs', price: 'À partir de 2 500$', icon: '🧱' },
    { service: 'Isolation Sous-sol', price: 'À partir de 2 000$', icon: '⬇️' },
    { service: 'Inspection Thermique', price: '200$ / gratuit avec devis', icon: '🌡️' }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Devis et Prix Isolation Thermique | Isolation QC"
        description="Obtenez un devis gratuit pour vos travaux d'isolation au Québec. Prix transparents, sans engagement. Inspection thermique offerte."
        canonical="https://isolationqc.com/devis-prix"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Devis et Prix', path: '/devis-prix' }
      ]} />

      <HeroSection
        title="Devis et Prix - Isolation Thermique"
        introText="Nos devis sont gratuits, sans engagement et détaillés. Recevez une estimation précise adaptée à vos besoins en isolation."
        image="https://images.unsplash.com/photo-1691709997089-d7830bd2074e"
        hideButtons={true}
      />

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center mb-[64px]">
            <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
              Grille tarifaire indicative
            </h2>
            <p className="text-body text-[hsl(var(--foreground-secondary))] max-w-2xl mx-auto">
              Les prix varient selon la superficie, l'état actuel et les spécificités de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-4xl mx-auto mb-[64px]">
            {pricingData.map((item, index) => (
              <div key={index} className="card-base p-[32px] text-center hover:shadow-lg transition-shadow">
                <div className="text-[48px] mb-[16px]">{item.icon}</div>
                <h3 className="text-h3 mb-[12px] text-[hsl(var(--primary))]">{item.service}</h3>
                <div className="flex items-center justify-center gap-[8px] text-[hsl(var(--accent))] font-bold text-[24px]">
                  <DollarSign className="w-6 h-6" />
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px]">
            <div>
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                Facteurs influençant le prix
              </h2>
              <ul className="space-y-[16px]">
                {[
                  'Superficie totale à isoler',
                  'Type d\'isolation choisi (cellulose, uréthane, laine minérale)',
                  'État actuel de l\'isolation existante',
                  'Accessibilité des zones à isoler',
                  'Travaux préparatoires nécessaires',
                  'Niveau de performance thermique souhaité (valeur R)'
                ].map((factor, idx) => (
                  <li key={idx} className="flex items-start gap-[12px]">
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-body text-[hsl(var(--foreground-secondary))]">{factor}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-[32px] p-[24px] bg-[hsl(var(--secondary))] rounded-[var(--radius)]">
                <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">💰 Subventions disponibles</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">
                  Profitez des programmes d'aide financière Logis Vert et Rénoclimat pour réduire jusqu'à 50% le coût de vos travaux d'isolation. Nous vous accompagnons dans les démarches.
                </p>
              </div>
            </div>

            <div className="card-base p-[32px] md:p-[40px]">
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                Obtenir un devis gratuit
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
                    className={`form-input ${errors.nom ? 'border-red-500' : ''}`}
                    placeholder="Jean Dupont"
                    disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                    {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="secteur" className="form-label">Secteur / Ville *</label>
                  <input 
                    type="text" 
                    id="secteur" 
                    name="secteur"
                    value={formData.secteur}
                    onChange={handleChange}
                    className={`form-input ${errors.secteur ? 'border-red-500' : ''}`}
                    placeholder="Montréal, Laval, etc."
                    disabled={isSubmitting}
                  />
                  {errors.secteur && <p className="text-red-500 text-sm mt-1">{errors.secteur}</p>}
                </div>

                <div>
                  <label htmlFor="type_service" className="form-label">Type de service</label>
                  <select 
                    id="type_service" 
                    name="type_service"
                    value={formData.type_service}
                    onChange={handleChange}
                    className="form-input"
                    disabled={isSubmitting}
                  >
                    <option value="">Sélectionnez un service (optionnel)</option>
                    <option value="Isolation Grenier">Isolation Grenier</option>
                    <option value="Isolation Murs">Isolation Murs</option>
                    <option value="Isolation Sous-sol">Isolation Sous-sol</option>
                    <option value="Inspection Thermique">Inspection Thermique</option>
                    <option value="Autre / Plusieurs services">Autre / Plusieurs services</option>
                  </select>
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
                    placeholder="Décrivez votre projet (superficie approximative, type de bâtiment, objectifs...)"
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <ConsentCheckbox 
                  id="consentement_devis"
                  checked={formData.consentement}
                  onChange={handleChange}
                  error={errors.consentement}
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
                      Envoyer ma demande
                      <Send size={20} />
                    </>
                  )}
                </button>

                <p className="text-sm text-[hsl(var(--foreground-secondary))] text-center">
                  Réponse garantie sous 24 heures • Sans engagement
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-[24px] text-white">
            Besoin d'une inspection avant votre devis?
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

export default DevisPrixPage;
