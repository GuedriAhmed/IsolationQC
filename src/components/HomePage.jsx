
import React from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitCard from '@/components/BenefitCard';
import TrustCard from '@/components/TrustCard';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import { ThermometerSun, TrendingDown, Leaf, Star, Award, Users, ShieldCheck } from 'lucide-react';
import { generateLocalBusinessSchema } from '@/lib/schemas';

const HomePage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqItems = [
    {
      question: "Combien coûte une isolation de grenier en moyenne?",
      answer: "Le coût varie selon la superficie et la quantité d'isolant requise pour atteindre R50, mais la moyenne se situe entre 1.50$ et 3.50$ le pied carré. Contactez-nous pour une évaluation précise."
    },
    {
      question: "Qu'est-ce que la norme R50?",
      answer: "La cote R indique la résistance thermique d'un isolant. R50 est la norme recommandée au Québec pour les toitures et greniers, garantissant une protection optimale contre nos hivers rigoureux."
    },
    {
      question: "Combien de temps durent les travaux?",
      answer: "La majorité de nos projets d'isolation par soufflage sont complétés en une seule journée. Nos équipes travaillent efficacement et laissent les lieux propres."
    },
    {
      question: "Êtes-vous certifiés?",
      answer: "Absolument. Nous détenons une licence RBQ valide et nos techniciens sont certifiés. Tous nos travaux respectent ou dépassent le Code de construction du Québec."
    },
    {
      question: "Offrez-vous une garantie?",
      answer: "Oui, nous offrons une garantie solide de 10 ans sur la qualité de notre main-d'œuvre et nos matériaux."
    }
  ];

  const schemas = [
    generateLocalBusinessSchema("Québec", "https://isolationqc.com/")
  ];

  const heroImage = "https://images.unsplash.com/photo-1691709997089-d7830bd2074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&fm=webp&q=80";

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Isolation Québec | Entrepreneur certifié | Devis gratuit"
        description="Entrepreneur isolation au Québec. Isolation grenier, entre-toit, thermopompe. Devis gratuit, aide Logis Vert. Réservez votre inspection dès maintenant!"
        robots="index, follow"
        canonical="https://isolationqc.com/"
        schemas={schemas}
        preloadImage={heroImage}
      />

      <HeroSection 
        title="Isolation Québec — Entrepreneur certifié, devis gratuit"
        subtitle="Services d'isolation au Québec"
        introText="Économisez jusqu'à 30% sur vos factures de chauffage. Nos experts garantissent des travaux conformes aux normes (R50) pour une isolation thermique maximale face aux hivers rigoureux."
        ctaText="Obtenir un devis gratuit"
        ctaOnClick={scrollToQuoteForm}
        image={heroImage}
      />

      <ServicesSection />

      <section className="section-padding bg-[#ffffff]">
        <div className="container-default">
          <div className="text-center mb-[64px]">
            <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">Pourquoi choisir isolationqc.com?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[24px]">
            <BenefitCard icon={TrendingDown} title="Économies" description="-30% sur votre chauffage" />
            <BenefitCard icon={ThermometerSun} title="Confort" description="Chaleur uniforme l'hiver" />
            <BenefitCard icon={Leaf} title="Écologique" description="Matériaux écoresponsables" />
            <BenefitCard icon={ShieldCheck} title="Protection" description="Prévient la moisissure" />
            <BenefitCard icon={Award} title="Valeur" description="Augmente la valeur marchande" />
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      <TestimonialsSection />

      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-[32px] text-white">Nos secteurs desservis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <TrustCard icon={Users} value="500+" label="Clients Satisfaits" />
            <TrustCard icon={Star} value="10 Ans" label="D'expérience" />
            <TrustCard icon={ShieldCheck} value="RBQ" label="Entreprise Certifiée" />
            <TrustCard icon={Award} value="10 Ans" label="Garantie Complète" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8fafc]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px]">
            
            <div>
              <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">Aide Logis Vert — Financement disponible</h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[32px]">Bénéficiez de subventions pour financer vos travaux d'isolation avec notre aide experte.</p>
              
              <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">Questions fréquentes sur l'isolation</h2>
              <FAQAccordion items={faqItems} />
            </div>

            <div>
              <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">Devis gratuit — Inspection sans engagement</h2>
              <QuoteForm defaultService="Grenier" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
