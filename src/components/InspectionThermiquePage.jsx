
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import TestimonialsSection from './TestimonialsSection';
import QuoteForm from './QuoteForm';
import { Search, FileText, Lightbulb, TrendingDown } from 'lucide-react';

const InspectionThermiquePage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Search,
      title: 'Détection des fuites thermiques',
      description: 'Identification précise des zones de perte de chaleur avec caméra infrarouge'
    },
    {
      icon: FileText,
      title: 'Rapport détaillé',
      description: 'Documentation complète avec photos thermiques et analyses'
    },
    {
      icon: Lightbulb,
      title: 'Recommandations personnalisées',
      description: 'Plan d\'action sur mesure adapté à votre maison'
    },
    {
      icon: TrendingDown,
      title: 'Économies garanties',
      description: 'Estimation des économies potentielles après corrections'
    }
  ];

  const faqItems = [
    {
      question: "Qu'est-ce qu'une inspection thermique?",
      answer: "Une inspection thermique utilise une caméra infrarouge de pointe pour détecter les variations de température dans votre maison. Elle révèle les zones de perte de chaleur, les défauts d'isolation, les infiltrations d'air et les ponts thermiques invisibles à l'œil nu."
    },
    {
      question: "Combien coûte une inspection thermique?",
      answer: "Le coût d'une inspection thermique complète varie entre 300$ et 600$ selon la taille de votre propriété. Cependant, nous offrons une inspection gratuite avec tout projet d'isolation accepté. C'est un investissement qui vous permettra d'économiser des milliers de dollars à long terme."
    },
    {
      question: "Combien de temps dure l'inspection?",
      answer: "Une inspection thermique complète pour une maison unifamiliale typique prend environ 1 à 2 heures. Cela inclut l'inspection extérieure et intérieure, la prise de photos thermiques et une discussion préliminaire des résultats."
    },
    {
      question: "Quand devrais-je faire une inspection thermique?",
      answer: "Le meilleur moment est en hiver lorsqu'il y a une différence de température significative entre l'intérieur et l'extérieur. Idéalement, effectuez l'inspection avant d'entreprendre des travaux de rénovation ou si vous constatez des factures d'énergie élevées."
    },
    {
      question: "Que comprend le rapport d'inspection?",
      answer: "Notre rapport détaillé comprend: photos thermiques annotées de toutes les zones problématiques, explication des déficiences détectées, recommandations priorisées de corrections, estimation des coûts et du retour sur investissement pour chaque amélioration suggérée."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Inspection Thermique au Québec - Caméra Infrarouge | Isolation QC"
        description="Inspection thermique professionnelle avec caméra infrarouge au Québec. Détectez les pertes de chaleur. Rapport détaillé. Inspection gratuite disponible."
        canonical="https://isolationqc.com/inspection-thermique"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Inspection Thermique', path: '/inspection-thermique' }
      ]} />

      <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
            alt="Diagnostic thermique"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 mb-[24px] text-white">
              Inspection Thermique - Diagnostiquez vos Pertes de Chaleur
            </h1>
            <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
              Inspection thermique professionnelle avec caméra infrarouge. Identifiez précisément les zones de perte de chaleur et recevez un plan d'action personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:514-312-0462" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
                Appeler: 514-312-0462
              </a>
              <button
                onClick={scrollToQuoteForm}
                className="btn-primary bg-[hsl(var(--accent))] hover:bg-[#ea580c]"
              >
                Réserver une inspection
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px] mb-[64px]">
            <div>
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                L'inspection thermique: un diagnostic précis
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                L'inspection thermique avec caméra infrarouge est l'outil le plus efficace pour identifier les problèmes d'isolation et d'étanchéité de votre maison. Cette technologie de pointe permet de visualiser les variations de température invisibles à l'œil nu, révélant ainsi les zones problématiques qui vous font perdre de l'argent en chauffage.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                Nos techniciens certifiés utilisent des caméras thermiques professionnelles pour scanner l'ensemble de votre propriété, de la toiture aux fondations. L'inspection révèle les défauts d'isolation, les infiltrations d'air, les ponts thermiques, l'humidité cachée et même les problèmes électriques potentiels.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Suite à l'inspection, vous recevez un rapport détaillé avec photos thermiques annotées, explications claires des problèmes détectés et recommandations priorisées. Ce rapport vous permet de prendre des décisions éclairées sur les améliorations à apporter à votre maison.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" 
                alt="Diagnostic thermique"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Avantages de l'inspection thermique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="card-base p-[24px] text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-[16px] bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-[hsl(var(--accent))]" />
                  </div>
                  <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">{benefit.title}</h3>
                  <p className="text-body text-[hsl(var(--foreground-secondary))]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))]">
              Ce que nous inspectons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Enveloppe extérieure</h3>
                <ul className="space-y-[12px] text-body text-[hsl(var(--foreground-secondary))]">
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Toiture et grenier - détection des pertes de chaleur
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Murs extérieurs - identification des ponts thermiques
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Portes et fenêtres - vérification de l'étanchéité
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Fondations et sous-sol - détection d'humidité
                  </li>
                </ul>
              </div>

              <div className="card-base p-[32px]">
                <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Systèmes intérieurs</h3>
                <ul className="space-y-[12px] text-body text-[hsl(var(--foreground-secondary))]">
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Système de chauffage - vérification de l'efficacité
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Ventilation - analyse du flux d'air
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Plomberie - détection de fuites cachées
                  </li>
                  <li className="flex items-start gap-[8px]">
                    <span className="text-[hsl(var(--accent))] font-bold">•</span>
                    Système électrique - points chauds anormaux
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-[32px] bg-[hsl(var(--accent))]/10 rounded-[var(--radius-lg)] border-l-4 border-[hsl(var(--accent))]">
            <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">💰 Inspection gratuite disponible</h3>
            <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Nous offrons une inspection thermique gratuite avec tout projet d'isolation d'une valeur de 3000$ et plus. C'est notre façon de vous assurer que vous investissez au bon endroit et obtenez les meilleurs résultats possibles.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
            Questions fréquentes sur l'inspection thermique
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
      </section>

      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-[40px]">
              <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
                Réservez votre inspection thermique
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))]">
                Complétez le formulaire pour planifier votre inspection
              </p>
            </div>
            <QuoteForm defaultService="Inspection Thermique" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-[24px] text-white">
            Prêt à améliorer l'efficacité énergétique de votre maison?
          </h2>
          <p className="text-[18px] mb-[32px] max-w-2xl mx-auto text-white/90">
            Profitez de notre inspection gratuite avec tout projet d'isolation
          </p>
          <Link to="/inspection-gratuite" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
            Réserver une inspection gratuite
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InspectionThermiquePage;
