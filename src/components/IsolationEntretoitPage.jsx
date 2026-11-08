import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import TestimonialsSection from './TestimonialsSection';
import QuoteForm from './QuoteForm';
import { CheckCircle, TrendingDown, Thermometer, Shield, Clock } from 'lucide-react';

const IsolationEntretoitPage = () => {
  const scrollToQuoteForm = (e) => {
    e.preventDefault();
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: 'Réduction des factures de chauffage',
      description: 'Économisez 20-30% sur vos coûts de chauffage annuels'
    },
    {
      icon: Thermometer,
      title: 'Confort amélioré',
      description: 'Température uniforme et stable dans toute la maison'
    },
    {
      icon: Shield,
      title: 'Durabilité 25+ ans',
      description: 'Investissement durable avec garantie complète'
    },
    {
      icon: Clock,
      title: 'Installation rapide',
      description: 'Travaux complétés en 1-2 jours sans dérangement'
    }
  ];

  const faqItems = [
    {
      question: "Quelle est la différence entre grenier et entre-toit?",
      answer: "L'entre-toit est l'espace entre le plafond et le toit d'une maison. Le grenier est un espace accessible sous le toit. L'entre-toit nécessite une isolation spécifique car il n'est généralement pas accessible et doit être ventilé adéquatement."
    },
    {
      question: "Combien coûte l'isolation d'entre-toit?",
      answer: "Le coût varie selon la superficie et le type d'isolant utilisé. En moyenne, comptez entre 2$ et 4$ le pied carré pour une isolation complète avec cellulose soufflée atteignant R50. Contactez-nous pour un devis précis gratuit."
    },
    {
      question: "Quelle épaisseur d'isolant est nécessaire?",
      answer: "Pour atteindre la valeur R50 recommandée au Québec, il faut environ 16 à 18 pouces de cellulose soufflée. Nos experts évaluent votre situation et recommandent l'épaisseur optimale selon votre structure."
    },
    {
      question: "L'isolation d'entre-toit nécessite-t-elle une ventilation?",
      answer: "Oui, une ventilation adéquate est essentielle! Nous installons des déflecteurs pour assurer la circulation d'air depuis les soffites, prévenant ainsi l'accumulation d'humidité et la formation de glace sur le toit."
    },
    {
      question: "Combien de temps dure l'installation?",
      answer: "Pour une maison typique, l'isolation d'entre-toit par soufflage de cellulose prend généralement 1 à 2 jours. Le processus est propre, efficace et cause un minimum de dérangement."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Isolation Entre-toit au Québec - R50 | Isolation QC"
        description="Services professionnels d'isolation d'entre-toit au Québec. Économisez 20-30% sur le chauffage. Installation rapide, norme R50. Devis gratuit."
        canonical="https://isolationqc.com/isolation-entre-toit"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Services', path: '/services' },
        { label: 'Isolation Entre-toit', path: '/isolation-entre-toit' }
      ]} />

      <section className="relative py-[80px] md:py-[120px] bg-gradient-to-br from-[hsl(var(--primary))] to-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1625577816396-fbf677c54cee" 
            alt="Ouvrier professionnel installant isolation d'entre-toit avec cellulose soufflée dans une maison au Québec"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-default relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 mb-[24px] text-white">
              Isolation Entre-toit - Réduisez vos Pertes de Chaleur
            </h1>
            <p className="text-[20px] leading-relaxed text-white/95 mb-[32px]">
              Isolation professionnelle d'entre-toit avec cellulose soufflée. Atteignez la norme R50 et économisez jusqu'à 30% sur vos factures de chauffage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:514-312-0462" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
                Appeler: 514-312-0462
              </a>
              <button
                onClick={scrollToQuoteForm}
                className="btn-primary bg-[hsl(var(--accent))] hover:bg-[#ea580c]"
              >
                Obtenir un devis gratuit
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
                Pourquoi isoler votre entre-toit?
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                L'entre-toit est l'espace critique entre votre plafond et votre toiture. Une isolation inadéquate de cet espace peut causer jusqu'à 30% de vos pertes de chaleur totales. En hiver, la chaleur monte naturellement et s'échappe par un entre-toit mal isolé, forçant votre système de chauffage à travailler continuellement.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[24px] leading-relaxed">
                Nos experts en isolation utilisent de la cellulose soufflée écologique pour créer une barrière thermique uniforme et performante. Cette méthode permet d'atteindre facilement la valeur R50 recommandée au Québec tout en s'adaptant parfaitement à toutes les configurations d'entre-toit, même les plus complexes.
              </p>
              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed">
                L'isolation d'entre-toit améliore non seulement votre confort thermique en hiver, mais aussi en été en bloquant la chaleur excessive du toit. Vous bénéficierez d'économies d'énergie significatives tout au long de l'année.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1625577816396-fbf677c54cee" 
                alt="Application de cellulose soufflée dans un entre-toit pour atteindre la norme R50 au Québec"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-[64px]">
            <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
              Avantages de l'isolation d'entre-toit
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
              Notre processus d'isolation d'entre-toit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="card-base p-[24px]">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-[20px] mb-[16px]">
                  1
                </div>
                <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">Inspection initiale</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">
                  Évaluation complète de votre entre-toit, vérification de la ventilation et mesure de l'isolation existante.
                </p>
              </div>

              <div className="card-base p-[24px]">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-[20px] mb-[16px]">
                  2
                </div>
                <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">Installation des déflecteurs</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">
                  Pose de déflecteurs de ventilation pour assurer une circulation d'air adéquate depuis les soffites.
                </p>
              </div>

              <div className="card-base p-[24px]">
                <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center font-bold text-[20px] mb-[16px]">
                  3
                </div>
                <h3 className="text-h4 mb-[12px] text-[hsl(var(--primary))]">Soufflage de cellulose</h3>
                <p className="text-body text-[hsl(var(--foreground-secondary))]">
                  Application uniforme de cellulose soufflée pour atteindre la valeur R50 dans tout l'entre-toit.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-[64px] p-[32px] bg-[hsl(var(--accent))]/10 rounded-[var(--radius-lg)] border-l-4 border-[hsl(var(--accent))]">
            <h3 className="text-h3 mb-[16px] text-[hsl(var(--primary))]">Matériaux et durabilité</h3>
            <p className="text-body text-[hsl(var(--foreground-secondary))] mb-[16px] leading-relaxed">
              Nous utilisons de la cellulose soufflée de qualité supérieure, fabriquée à partir de papier recyclé et traitée avec des produits ignifuges non toxiques. Ce matériau écologique offre une excellente performance thermique et acoustique.
            </p>
            <ul className="space-y-[12px]">
              {[
                'Durabilité exceptionnelle de 25 ans et plus',
                'Matériau écologique et recyclé',
                'Résistance au feu certifiée',
                'Ne se tasse pas avec le temps',
                'Excellente isolation acoustique'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-[12px]">
                  <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-body text-[hsl(var(--foreground-secondary))]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-h2 mb-[32px] text-[hsl(var(--primary))] text-center">
            Questions fréquentes sur l'isolation d'entre-toit
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
                Demandez votre devis gratuit
              </h2>
              <p className="text-body text-[hsl(var(--foreground-secondary))]">
                Remplissez le formulaire ci-dessous pour recevoir votre estimation personnalisée
              </p>
            </div>
            <QuoteForm defaultService="Entretoit" />
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

export default IsolationEntretoitPage;