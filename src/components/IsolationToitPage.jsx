import React from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import { Home, Activity, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schemas';

const IsolationToitPage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbs = [
    { label: 'Isolation Entre-toit', url: '/isolation-entre-toit' }
  ];

  const faqItems = [
    { question: "Toit cathédrale vs entretoit?", answer: "L'entretoit permet le soufflage économique de cellulose. Le toit cathédrale n'ayant pas d'espace vide, nécessite l'injection d'uréthane à haute performance." },
    { question: "La ventilation est-elle importante?", answer: "Oui, primordiale. Un toit mal ventilé accumule l'humidité, ce qui réduit l'efficacité de l'isolant et cause la pourriture du bois." },
    { question: "Quel est l'avantage de l'uréthane giclé?", answer: "Il offre la plus haute valeur R par pouce et scelle complètement les fuites d'air en même temps, agissant comme pare-vapeur." }
  ];

  const schemas = [
    generateServiceSchema("Québec", "https://isolationqc.com/isolation-entre-toit", "Isolation d'entre-toit"),
    generateFAQSchema(faqItems)
  ];

  const heroImage = "https://images.unsplash.com/photo-1625577816396-fbf677c54cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&fm=webp&q=80";

  return (
    <div className="bg-background flex-grow flex flex-col pb-12">
      <SEOHead 
        title="Isolation entre-toit Québec | Devis gratuit"
        description="Isolation entre-toit au Québec. Prévention condensation, isolation thermique. Entrepreneurs certifiés, devis gratuit!"
        robots="index, follow"
        canonical="https://isolationqc.com/isolation-entre-toit"
        schemas={schemas}
        preloadImage={heroImage}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <HeroSection 
        title="Isolation entre-toit Québec — Devis gratuit"
        subtitle="Isolation entre-toit — Prévention condensation"
        introText="Solutions sur mesure pour toitures standard et cathédrales. Nous évaluons vos combles et appliquons les matériaux les plus performants pour éliminer les ponts thermiques."
        ctaText="Demander une estimation"
        ctaOnClick={scrollToQuoteForm}
        image={heroImage}
      />

      <section className="section-padding">
        <div className="container-default grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 prose prose-lg max-w-none text-foreground">
            <h2 className="text-h2 mt-0 text-[hsl(var(--primary))]">Prix isolation entre-toit</h2>
            <p className="text-body text-[hsl(var(--foreground-secondary))]">
              Selon le type de toiture, la méthode d'isolation varie grandement. Nos experts évaluent votre structure pour recommander le matériau le plus adapté, assurant une protection thermique optimale (R50).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] my-[32px] not-prose">
              <div className="bg-[#f8fafc] p-[24px] rounded-[12px] border-[2px] border-[#e2e8f0] border-l-[4px] border-l-[hsl(var(--primary))]">
                <Home className="text-[hsl(var(--primary))] mb-[12px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Aide Logis Vert pour entre-toit</h4>
                <p className="text-body text-[#64748b]">Profitez des aides gouvernementales pour financer vos travaux d'isolation d'entre-toit facilement.</p>
              </div>
              <div className="bg-[#f8fafc] p-[24px] rounded-[12px] border-[2px] border-[#e2e8f0] border-l-[4px] border-l-[#f97316]">
                <Activity className="text-[#f97316] mb-[12px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Durée d'une isolation entre-toit</h4>
                <p className="text-body text-[#64748b]">Travaux rapides, généralement effectués en moins de 24h avec un nettoyage complet inclus.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-[32px]">
            <div className="sticky top-28">
              <QuoteForm defaultService="Toit" />
              
              <div className="mt-[32px] bg-[hsl(var(--primary))] text-white p-[32px] rounded-[12px] shadow-md">
                <h4 className="text-h4 mb-[24px] text-[#ffffff]">Autres Services</h4>
                <ul className="space-y-[16px]">
                  <li>
                    <Link to="/isolation-grenier" className="flex items-center gap-[12px] hover:text-[#f97316] transition-colors font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Isolation de Grenier
                    </Link>
                  </li>
                  <li>
                    <Link to="/inspection-gratuite" className="flex items-center gap-[12px] hover:text-[#f97316] transition-colors font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Inspection gratuite
                    </Link>
                  </li>
                  <li>
                    <Link to="/devis-prix" className="flex items-center gap-[12px] hover:text-[#f97316] transition-colors font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Grille de tarifs
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
          <h2 className="text-h2 text-[hsl(var(--primary))] text-center mb-[32px]">FAQ — Isolation entre-toit</h2>
          <div className="max-w-3xl mx-auto not-prose">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IsolationToitPage;