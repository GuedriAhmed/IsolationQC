import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TrendingDown, DollarSign, Home, Layers, Building2, Thermometer, Calendar, Zap, Calculator, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstimationEconomiesPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Estimation des économies', url: '/estimation-economies' }
  ];

  const savingsData = [
    {
      icon: Home,
      title: "Isolation Grenier Seule",
      metric: "20-30% d'économies",
      description: "L'isolation du grenier jusqu'à R50 réduit vos factures de chauffage de 20-30% annuellement. Pour une facture de 2 400$/an, économisez 480-720$ par année."
    },
    {
      icon: Layers,
      title: "Isolation Murs",
      metric: "15-25% d'économies",
      description: "L'isolation des murs par injection ou panneaux réduit les pertes thermiques de 15-25%. Combinée avec le grenier, atteignez jusqu'à 45% d'économies totales."
    },
    {
      icon: Building2,
      title: "Isolation Sous-sol",
      metric: "10-15% d'économies",
      description: "L'isolation du sous-sol avec contrôle d'humidité économise 10-15% sur les coûts de chauffage. Bonus: espace habitable plus confortable et sain."
    },
    {
      icon: Zap,
      title: "Thermopompe",
      metric: "30-40% d'économies",
      description: "Le remplacement de votre système de chauffage par une thermopompe à haute efficacité peut réduire vos coûts énergétiques de 30-40% annuellement."
    },
    {
      icon: TrendingDown,
      title: "Isolation Complète (Combinée)",
      metric: "40-50% d'économies",
      description: "Combiner grenier + murs + sous-sol maximise les économies à 40-50%. Pour une facture de 2 400$/an, économisez 960-1 200$ par année."
    },
    {
      icon: Calculator,
      title: "Exemple de Calcul",
      metric: "Cas Concret",
      description: "Maison 1 500 pi² - Facture annuelle: 2 400$ - Isolation grenier + murs: 8 000$ (après subvention 5 500$) - Économies: 1 200$/an - ROI: 4.6 ans"
    }
  ];

  const influencingFactors = [
    {
      icon: Home,
      title: "État actuel de l'isolation",
      description: "Plus votre isolation actuelle est déficiente, plus les économies seront importantes. Une maison sans isolation peut économiser jusqu'à 50% après travaux."
    },
    {
      icon: Thermometer,
      title: "Climat et région",
      description: "Les régions plus froides (Québec, Saguenay) voient des économies plus élevées que les régions tempérées. Le climat rigoureux amplifie l'impact de l'isolation."
    },
    {
      icon: Calendar,
      title: "Habitudes de chauffage",
      description: "La température de consigne et les habitudes de chauffage influencent les économies. Une température maintenue à 21°C vs 18°C peut doubler la consommation."
    },
    {
      icon: Zap,
      title: "Type de chauffage",
      description: "L'électricité, le gaz naturel, le mazout ont des coûts différents. Les systèmes électriques au Québec bénéficient particulièrement de l'isolation renforcée."
    },
    {
      icon: Building2,
      title: "Taille et configuration de la maison",
      description: "Une grande maison avec beaucoup de surface exposée bénéficie davantage de l'isolation qu'une petite maison compacte à superficie équivalente."
    },
    {
      icon: Home,
      title: "Âge et état général",
      description: "Les maisons anciennes (pré-1980) sans isolation moderne peuvent voir des économies de 50%+. Les maisons récentes économisent moins mais restent rentables."
    },
    {
      icon: Thermometer,
      title: "Exposition au soleil",
      description: "L'orientation de la maison et l'ombrage affectent les gains solaires. Une maison bien exposée économise un peu moins mais reste très rentable."
    },
    {
      icon: Layers,
      title: "Qualité des portes et fenêtres",
      description: "Des fenêtres énergivores réduisent l'efficacité de l'isolation. Combiner isolation et remplacement de fenêtres maximise les économies globales."
    }
  ];

  const caseStudies = [
    {
      city: "Montréal",
      title: "Maison unifamiliale 1 500 pi²",
      description: "Maison construite en 1975 avec isolation minimale. Propriétaire chauffant à l'électricité (plinthes).",
      annualBillBefore: "2 400$ / an",
      workCost: "8 000$",
      subsidy: "2 500$ (Logis Vert)",
      netCost: "5 500$",
      annualSavings: "1 200$ / an (50%)",
      roi: "4.6 ans",
      savingsOver10: "12 000$"
    },
    {
      city: "Laval",
      title: "Bungalow 1 800 pi²",
      description: "Bungalow de 1960 sans isolation de grenier. Propriétaire chauffant au gaz naturel.",
      annualBillBefore: "2 800$ / an",
      workCost: "6 500$",
      subsidy: "2 000$ (Logis Vert)",
      netCost: "4 500$",
      annualSavings: "900$ / an (32%)",
      roi: "5 ans",
      savingsOver10: "9 000$"
    },
    {
      city: "Québec",
      title: "Maison 2 étages 2 000 pi²",
      description: "Maison de 1985 avec isolation vieillissante. Propriétaire avec thermopompe existante.",
      annualBillBefore: "3 200$ / an",
      workCost: "12 000$",
      subsidy: "4 000$ (Logis Vert + Rénoclimat)",
      netCost: "8 000$",
      annualSavings: "1 600$ / an (50%)",
      roi: "5 ans",
      savingsOver10: "16 000$"
    }
  ];

  const faqItems = [
    {
      question: "Combien puis-je économiser avec l'isolation?",
      answer: "Entre 20-50% de vos coûts de chauffage selon les travaux réalisés. Isolation grenier seule: 20-30% d'économies. Combinaison grenier + murs + sous-sol: 40-50% d'économies. Pour une facture annuelle de 2 400$, cela représente 480$ à 1 200$ d'économies par année, soit 4 800$ à 12 000$ sur 10 ans."
    },
    {
      question: "Combien de temps avant de récupérer mon investissement (ROI)?",
      answer: "Généralement 4-7 ans selon le type de travaux et les subventions obtenues. Isolation grenier avec subvention: 3-5 ans. Isolation complète avec subventions maximales: 4-6 ans. Après ce délai, vous économisez pendant 20-30 ans minimum, cumulant des milliers de dollars d'économies nettes."
    },
    {
      question: "Les économies sont-elles garanties?",
      answer: "Les économies dépendent de vos habitudes de consommation et de chauffage, mais nos estimations sont basées sur des données réelles et des calculs thermiques reconnus. Nous estimons conservativement pour être réaliste. La plupart de nos clients constatent des économies égales ou supérieures à nos prévisions initiales."
    },
    {
      question: "Comment sont calculées les économies?",
      answer: "Les économies sont calculées en fonction de: votre consommation annuelle actuelle (kWh ou m³), votre région climatique (degrés-jours de chauffage), le type de chauffage et ses coûts, l'état actuel de votre isolation (valeur R), et les travaux d'isolation proposés (nouvelle valeur R atteinte). Nous utilisons des logiciels de calcul thermique certifiés pour des estimations précises."
    },
    {
      question: "Puis-je combiner plusieurs travaux pour plus d'économies?",
      answer: "Oui! Combiner grenier + murs + sous-sol maximise les économies (40-50% vs 20-30% pour grenier seul). L'effet cumulatif est plus qu'additif car l'enveloppe devient étanche. C'est la stratégie optimale pour maximiser vos économies à long terme tout en bénéficiant de subventions combinées plus élevées."
    },
    {
      question: "Les subventions réduisent-elles le retour sur investissement?",
      answer: "Oui! Les subventions Logis Vert réduisent considérablement le coût initial, améliorant drastiquement le ROI. Exemple: 8 000$ de travaux - 2 500$ de subvention = coût net 5 500$. Avec 1 200$/an d'économies, ROI de seulement 4.6 ans au lieu de 6.7 ans sans subvention. Les subventions peuvent réduire le ROI de 30-40%."
    },
    {
      question: "Puis-je utiliser le calculateur sans engagement?",
      answer: "Absolument! Notre calculateur d'économies en ligne est gratuit, sans obligation, et ne nécessite aucune information personnelle. Il vous donne une estimation instantanée basée sur votre région, type de maison et travaux envisagés. Pour une estimation précise avec inspection thermique, contactez-nous pour une évaluation gratuite à domicile."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Calcul Économies Énergie – Estimez Vos Économies Hydro-Québec"
        description="Calculez vos économies d'énergie avec isolation au Québec. Estimation précise des économies Hydro-Québec. ROI détaillé. Outil gratuit!"
        keywords="économie énergie, calcul économies isolation, ROI isolation, économies Hydro-Québec, réduction facture chauffage, efficacité énergétique, économies grenier isolé"
        canonical="https://isolationqc.com/estimation-economies"
      />

      <HeroSection 
        title="Calcul Économies Énergie – Estimez Vos Économies Hydro-Québec"
        subtitle="Calculateur Gratuit"
        introText="Découvrez combien vous pouvez économiser sur vos factures Hydro-Québec avec l'isolation. Calcul personnalisé du ROI, économies annuelles, et retour sur investissement. Exemples concrets de clients satisfaits."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
      />

      <BreadcrumbNav items={breadcrumbs} />

      {/* Introduction */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 text-[hsl(var(--accent))] font-semibold text-[14px] mb-8 hover:gap-3 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux services
            </Link>

            <h2 className="text-h2 mb-6 text-[hsl(var(--primary))]">
              Estimez Vos Économies d'Énergie
            </h2>
            <div className="space-y-4 text-[17px] text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                Avant d'investir dans l'isolation de votre maison, il est essentiel de comprendre <strong className="font-[600] text-[hsl(var(--primary))]">combien vous allez économiser</strong> et en combien de temps votre investissement sera rentabilisé. Au Québec, avec nos hivers rigoureux, une maison mal isolée peut perdre jusqu'à 30-40% de sa chaleur par le toit, entraînant des factures d'Hydro-Québec excessives.
              </p>
              <p>
                L'isolation du grenier seule génère des <strong className="font-[600] text-[hsl(var(--primary))]">économies de 20-30%</strong> sur vos coûts de chauffage. En combinant grenier + murs + sous-sol, vous atteignez <strong className="font-[600] text-[hsl(var(--primary))]">40-50% d'économies</strong>. Le retour sur investissement (ROI) typique est de 3-7 ans, après quoi vous continuez d'économiser pendant 30-40 ans.
              </p>
              <p>
                Notre calculateur d'économies vous permet d'estimer précisément vos économies annuelles, votre ROI, et vos économies cumulatives sur 10 ans. Nous utilisons des données réelles basées sur des milliers de projets réalisés au Québec pour vous fournir des estimations fiables et prudentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings by Type */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Combien Pouvez-Vous Économiser?
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Estimation des économies annuelles selon le type d'isolation réalisée dans une maison moyenne au Québec.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {savingsData.map((saving, index) => (
              <BenefitCard 
                key={index}
                icon={saving.icon}
                title={saving.title}
                description={saving.description}
                metric={saving.metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Influencing Factors */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Facteurs Influençant Vos Économies
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Comprendre les variables qui impactent le montant exact de vos économies annuelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {influencingFactors.map((factor, index) => (
              <BenefitCard 
                key={index}
                icon={factor.icon}
                title={factor.title}
                description={factor.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculation */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-6 text-[hsl(var(--primary))]">
              Calcul du Retour sur Investissement (ROI)
            </h2>
            <div className="space-y-6 text-[17px] text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                Le calcul du ROI pour l'isolation est simple mais essentiel pour prendre une décision éclairée. Voici la formule et un exemple détaillé:
              </p>

              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Formule Simple:</h3>
                <div className="bg-[hsl(var(--accent))]/10 p-4 rounded-[var(--radius)] text-center mb-4">
                  <p className="text-[18px] font-[600] text-[hsl(var(--primary))]">
                    ROI (années) = Coût des Travaux ÷ Économies Annuelles
                  </p>
                </div>
                
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3 mt-6">Exemple Détaillé:</h3>
                <ul className="space-y-2 text-[16px]">
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Coût isolation grenier:</span>
                    <strong className="text-[hsl(var(--primary))]">3 000$</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Subvention Logis Vert:</span>
                    <strong className="text-[#16a34a]">- 2 000$</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2 font-[600]">
                    <span>Coût net:</span>
                    <strong className="text-[hsl(var(--accent))]">1 000$</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Économies annuelles (25%):</span>
                    <strong className="text-[hsl(var(--primary))]">600$ / an</strong>
                  </li>
                  <li className="flex justify-between items-center pt-2 text-[18px] font-[700]">
                    <span>ROI:</span>
                    <strong className="text-[hsl(var(--accent))]">1.7 ans seulement!</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Économies Cumulatives:</h3>
                <ul className="space-y-2 text-[16px]">
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Économies sur 10 ans (600$/an):</span>
                    <strong className="text-[hsl(var(--primary))]">6 000$</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Économies sur 20 ans:</span>
                    <strong className="text-[hsl(var(--primary))]">12 000$</strong>
                  </li>
                  <li className="flex justify-between items-center border-b border-[hsl(var(--border))] pb-2">
                    <span>Investissement initial (net):</span>
                    <strong className="text-[#dc2626]">- 1 000$</strong>
                  </li>
                  <li className="flex justify-between items-center pt-2 text-[18px] font-[700]">
                    <span>Profit net sur 20 ans:</span>
                    <strong className="text-[#16a34a]">11 000$</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Cas d'Études Réels – Économies de Nos Clients
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Découvrez les résultats réels obtenus par nos clients au Québec avec leurs projets d'isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard 
                key={index}
                {...study}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator size={48} className="text-[hsl(var(--accent))] mx-auto mb-6" />
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Notre Calculateur d'Économies
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] mb-8">
              Utilisez notre calculateur gratuit en ligne pour obtenir une estimation instantanée de vos économies potentielles. Aucune information personnelle requise, sans obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/devis-prix#calculateur"
                className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
              >
                Calculez Vos Économies
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center bg-[hsl(var(--primary))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:opacity-90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
              >
                Demander une Estimation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Questions Fréquentes sur les Économies d'Énergie
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Réponses détaillées sur le calcul des économies, le ROI et la rentabilité de l'isolation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-6 text-white">
            Commencez à Économiser Dès Maintenant
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez une estimation gratuite personnalisée de vos économies potentielles avec notre inspection à domicile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/inspection-gratuite"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Inspection Gratuite
            </Link>
            <Link 
              to="/devis-prix"
              className="inline-flex items-center justify-center bg-white text-[hsl(var(--primary))] font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstimationEconomiesPage;