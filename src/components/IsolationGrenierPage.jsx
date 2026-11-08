
import React from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import { ShieldCheck, Thermometer, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas';

const IsolationGrenierPage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbs = [
    { label: 'Isolation Grenier', url: '/isolation-grenier' }
  ];

  const faqItems = [
    { question: "Quel isolant utilisez-vous pour le grenier?", answer: "Nous utilisons principalement la fibre de cellulose soufflée. Elle est écologique, très performante, ignifuge et ne perd pas son efficacité avec le temps." },
    { question: "Puis-je rester dans la maison pendant les travaux?", answer: "Absolument. Nos méthodes sont sécuritaires et les produits utilisés ne dégagent pas de vapeurs toxiques." },
    { question: "La pose de déflecteurs est-elle obligatoire?", answer: "Oui, pour assurer une bonne circulation d'air depuis les soffites et éviter l'accumulation d'humidité dans le grenier." },
    { question: "Avez-vous besoin de retirer l'ancien isolant?", answer: "Généralement non, à moins qu'il ne soit contaminé par des moisissures, de l'eau ou de la vermine. Nous pouvons simplement souffler par-dessus." }
  ];

  const schemas = [
    generateServiceSchema("Québec", "https://isolationqc.com/isolation-grenier", "Isolation de grenier"),
    generateFAQSchema(faqItems)
  ];

  const heroImage = "https://images.unsplash.com/photo-1702092488232-77271dabe623";

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Isolation grenier Québec | Prix, R-50, devis gratuit"
        description="Isolation grenier au Québec. Isolation R-50, prix compétitifs, entrepreneurs certifiés. Devis gratuit et inspection sans engagement!"
        robots="index, follow"
        canonical="https://isolationqc.com/isolation-grenier"
        schemas={schemas}
        preloadImage={heroImage}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <HeroSection 
        title="Isolation grenier Québec — Devis gratuit"
        subtitle="Isolation grenier R-50 — Norme Québec"
        introText="Stoppez les pertes thermiques par le haut de votre maison. Avec notre soufflage de cellulose normé R50, protégez votre habitation des hivers québécois rigoureux."
        ctaText="Obtenir un Devis"
        ctaOnClick={scrollToQuoteForm}
        image={heroImage}
      />

      <section className="section-padding">
        <div className="container-default grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px]">
          
          <div className="lg:col-span-7 xl:col-span-8 text-[hsl(var(--foreground))]">
            <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">Prix isolation grenier au Québec</h2>
            <p className="text-body mb-[32px]">
              Près de 30% des pertes de chaleur d'une maison s'effectuent par la toiture. Un grenier mal isolé oblige votre système de chauffage à fonctionner en permanence. En augmentant la résistance thermique à <strong className="text-[hsl(var(--primary))]">R50</strong> avec de la cellulose soufflée, vous créez une barrière étanche.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mb-[48px]">
              <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-[12px] p-[24px] shadow-sm">
                <Thermometer className="text-[#f97316] mb-[16px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Combien coûte une isolation grenier?</h4>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">Généralement entre 1.50$ et 3.50$ le pied carré. Garde la chaleur en hiver et bloque la chaleur du toit en été.</p>
              </div>
              <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-[12px] p-[24px] shadow-sm">
                <ShieldCheck className="text-[#f97316] mb-[16px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Durée d'une isolation grenier</h4>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">Complétée en une seule journée. Évite la formation de barrages de glace (glaçons) sur les rebords du toit.</p>
              </div>
            </div>

            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">Aide Logis Vert pour isolation grenier</h2>
            <div className="space-y-[16px] mb-[48px]">
              <p className="text-body text-[hsl(var(--foreground-secondary))]">Maximisez vos économies avec les aides gouvernementales Logis Vert et Rénoclimat pour vos travaux d'isolation.</p>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-[32px]">
            <div className="sticky top-28">
              <QuoteForm defaultService="Grenier" />
              
              <div className="mt-[32px] bg-[hsl(var(--primary))] text-white p-[32px] rounded-[12px] shadow-md">
                <h4 className="text-h4 mb-[24px] text-[#ffffff]">Autres Services</h4>
                <ul className="space-y-[16px]">
                  <li>
                    <Link to="/isolation-toit" className="flex items-center gap-[12px] hover:text-[#f97316] transition-[var(--transition)] font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Isolation d'entre-toit
                    </Link>
                  </li>
                  <li>
                    <Link to="/inspection-gratuite" className="flex items-center gap-[12px] hover:text-[#f97316] transition-[var(--transition)] font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Inspection gratuite
                    </Link>
                  </li>
                  <li>
                    <Link to="/devis-prix" className="flex items-center gap-[12px] hover:text-[#f97316] transition-[var(--transition)] font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Consulter nos prix
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">FAQ — Isolation grenier</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsolationGrenierPage;
