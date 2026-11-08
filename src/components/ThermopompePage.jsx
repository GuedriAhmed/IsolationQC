import React from 'react';
import SEOHead from '@/components/SEOHead';
import HeroSection from '@/components/HeroSection';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import { ShieldCheck, Thermometer, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThermopompePage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const breadcrumbs = [
    { label: 'Thermopompe', url: '/thermopompe' }
  ];

  const processSteps = [
    { title: "Évaluation", desc: "Analyse gratuite de vos besoins en chauffage et climatisation." },
    { title: "Sélection du modèle", desc: "Choix de la thermopompe adaptée à la taille de votre maison." },
    { title: "Installation professionnelle", desc: "Pose rapide et efficace par nos techniciens certifiés." },
    { title: "Subventions", desc: "Aide pour réclamer vos subventions Logis Vert." }
  ];

  const faqItems = [
    { question: "Quels sont les avantages d'une thermopompe?", answer: "Elle permet de chauffer en hiver et de climatiser en été, tout en réduisant considérablement votre facture d'électricité." },
    { question: "Combien puis-je économiser avec Logis Vert?", answer: "Les subventions gouvernementales peuvent couvrir une part importante des coûts d'installation. Nous vous aidons dans les démarches." },
    { question: "L'installation est-elle rapide?", answer: "Oui, la majorité de nos installations sont complétées en une seule journée par nos équipes d'experts." }
  ];

  const heroImage = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&fm=webp&q=80";

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Thermopompe Québec | Installation, prix, devis"
        description="Thermopompe au Québec. Installation professionnelle, économies d'énergie, aide Logis Vert. Devis gratuit!"
        robots="index, follow"
        canonical="https://isolationqc.com/thermopompe"
        preloadImage={heroImage}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <HeroSection 
        title="Thermopompe Québec — Devis gratuit"
        subtitle="Installation professionnelle & économies d'énergie"
        introText="Maximisez votre confort toute l'année avec nos thermopompes haute performance. Bénéficiez des aides Logis Vert et réduisez vos factures d'énergie."
        ctaText="Obtenir un Devis"
        ctaOnClick={scrollToQuoteForm}
        image={heroImage}
      />

      <section className="section-padding">
        <div className="container-default grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px]">
          
          <div className="lg:col-span-7 xl:col-span-8 text-[hsl(var(--foreground))]">
            <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">Prix thermopompe au Québec</h2>
            <p className="text-body mb-[32px]">
              L'installation d'une thermopompe est un investissement rentable. En combinant efficacité énergétique et subventions gouvernementales, vous rentabiliserez rapidement votre achat tout en améliorant votre confort.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] mb-[48px]">
              <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-[12px] p-[24px] shadow-sm">
                <Thermometer className="text-[#f97316] mb-[16px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Confort 4 Saisons</h4>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">Chauffage performant l'hiver et climatisation rafraîchissante l'été.</p>
              </div>
              <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-[12px] p-[24px] shadow-sm">
                <ShieldCheck className="text-[#f97316] mb-[16px] w-[32px] h-[32px]" />
                <h4 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Garantie & Fiabilité</h4>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">Des marques reconnues et une installation certifiée pour une durabilité maximale.</p>
              </div>
            </div>

            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">Notre Processus d'Intervention</h2>
            <div className="space-y-[16px] mb-[48px]">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-[16px] p-[24px] bg-[#ffffff] border border-[#e2e8f0] rounded-[12px] shadow-sm">
                  <div className="w-[40px] h-[40px] rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-[18px] shrink-0 shadow-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-h4 mb-[4px] text-[hsl(var(--primary))]">{step.title}</h4>
                    <p className="text-body text-[hsl(var(--foreground-secondary))]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">FAQ — Thermopompe</h2>
            <div>
              <FAQAccordion items={faqItems} />
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 space-y-[32px]">
            <div className="sticky top-28">
              <QuoteForm defaultService="Thermopompe" />
              
              <div className="mt-[32px] bg-[hsl(var(--primary))] text-white p-[32px] rounded-[12px] shadow-md">
                <h4 className="text-h4 mb-[24px] text-[#ffffff]">Autres Services</h4>
                <ul className="space-y-[16px]">
                  <li>
                    <Link to="/isolation-grenier" className="flex items-center gap-[12px] hover:text-[#f97316] transition-[var(--transition)] font-[700]">
                      <CheckCircle2 size={24} className="text-[#f97316]" /> Isolation de Grenier
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
    </div>
  );
};

export default ThermopompePage;