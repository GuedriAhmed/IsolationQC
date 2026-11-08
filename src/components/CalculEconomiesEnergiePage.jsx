
import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingDown, Home, Building2, Thermometer, DollarSign, Calendar, ArrowRight, Calculator } from 'lucide-react';

const CalculEconomiesEnergiePage = () => {
  const breadcrumbs = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Calcul Économies Énergie', url: '/calcul-economies-energie' }
  ];

  const scrollToQuoteForm = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const economiesZones = [
    {
      zone: "Isolation du Grenier (R50)",
      economie: "25-30%",
      description: "Le grenier est responsable de 25 à 30% des pertes de chaleur. L'isolation à R50 réduit drastiquement vos coûts de chauffage.",
      icon: Home
    },
    {
      zone: "Isolation des Murs",
      economie: "15-20%",
      description: "Les murs mal isolés causent 15 à 20% de pertes thermiques. Une isolation adéquate améliore considérablement l'efficacité.",
      icon: Building2
    },
    {
      zone: "Isolation du Sous-Sol",
      economie: "10-15%",
      description: "Le sous-sol représente 10 à 15% des pertes. L'isolation des fondations réduit ces déperditions significativement.",
      icon: Building2
    },
    {
      zone: "Isolation Complète",
      economie: "35-45%",
      description: "Combiner grenier, murs et sous-sol peut réduire vos factures totales de 35 à 45%, maximisant votre retour sur investissement.",
      icon: Thermometer
    }
  ];

  const facteursEconomies = [
    "Type d'isolation installée (cellulose, fibre de verre, uréthane)",
    "Zones isolées (grenier, murs, sous-sol, combinaisons)",
    "État actuel de l'isolation et niveau de détérioration",
    "Climat et rigueur des hivers dans votre région",
    "Système de chauffage utilisé (électricité, gaz, mazout)",
    "Habitudes de consommation et température de confort",
    "Superficie totale de la maison et configuration",
    "Qualité de la ventilation et étanchéité à l'air"
  ];

  const exempleConcret = {
    maison: "Bungalow de 1 500 pi² à Laval",
    situation: "Isolation grenier R20, facture Hydro 2 800$/an",
    travaux: "Isolation grenier à R50 + Isolation murs",
    investissement: "8 500$ (après subventions 5 000$)",
    economies: "840$/an (30% de réduction)",
    roi: "5-6 ans de retour sur investissement",
    long_terme: "25 200$ économisés sur 30 ans"
  };

  const conseilsMaximiser = [
    {
      title: "Combiner Plusieurs Zones",
      description: "Isoler simultanément le grenier, les murs et le sous-sol maximise les économies et réduit les coûts unitaires grâce aux économies d'échelle."
    },
    {
      title: "Profiter des Subventions",
      description: "Les programmes Logis Vert et fédéraux peuvent couvrir jusqu'à 50-60% de vos coûts. Consultez notre page subventions pour maximiser vos aides."
    },
    {
      title: "Utiliser le Financement",
      description: "Nos options de paiements mensuels flexibles permettent de réaliser les travaux immédiatement pendant que vous commencez à économiser."
    },
    {
      title: "Maintenir l'Isolation",
      description: "Une inspection régulière tous les 10 ans assure que votre isolation maintient son efficacité maximale et prolonge sa durée de vie."
    }
  ];

  const faqItems = [
    {
      question: "Combien puis-je réellement économiser avec une meilleure isolation?",
      answer: "En moyenne, nos clients au Québec économisent entre 600$ et 1 200$ par année sur leurs factures de chauffage après une isolation complète du grenier à R50. Pour une maison typique de 1 500 pi², l'isolation du grenier seul réduit les coûts de 25-30%. Combiner grenier, murs et sous-sol peut atteindre des économies de 35-45% sur votre facture annuelle."
    },
    {
      question: "Quel est le retour sur investissement (ROI) typique?",
      answer: "Le ROI moyen pour l'isolation au Québec est de 5 à 7 ans. Cependant, avec les subventions Logis Vert (jusqu'à 5 000$) et les aides fédérales, ce délai peut être réduit à 3-4 ans. Après ce délai, chaque dollar économisé représente un profit direct pendant 20 à 30 ans, la durée de vie moyenne d'une isolation de qualité."
    },
    {
      question: "En combien de temps mon isolation sera-t-elle amortie?",
      answer: "Avec les économies annuelles moyennes de 800$ à 1 200$ et un investissement net (après subventions) de 4 000$ à 6 000$, votre isolation sera complètement amortie en 4 à 6 ans. Ensuite, vous continuez à économiser pendant des décennies. De plus, une bonne isolation augmente la valeur de revente de votre maison de 5 à 10%."
    },
    {
      question: "Comment maximiser mes économies d'énergie?",
      answer: "Pour maximiser vos économies: 1) Isolez d'abord le grenier (plus grand impact), 2) Combinez avec l'isolation des murs et sous-sol, 3) Profitez de toutes les subventions disponibles, 4) Améliorez l'étanchéité à l'air, 5) Assurez une ventilation adéquate, 6) Maintenez votre isolation en bon état. Notre équipe peut vous guider dans la priorisation stratégique de vos travaux."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Calcul Économies Énergie – Estimez Vos Économies Hydro-Québec"
        description="Calculez vos économies d'énergie potentielles. Estimation précise des économies Hydro-Québec. ROI détaillé. Simulation gratuite pour votre maison!"
        robots="index, follow"
        canonical="https://isolationqc.com/calcul-economies-energie"
        keywords="calcul économies énergie, économies Hydro-Québec, estimation économies isolation, ROI isolation, économies isolation grenier, calcul facture Hydro, économies énergie Québec, économies isolation Montréal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619089995839-93db82bf9bdf')] bg-cover bg-center opacity-10"></div>
        <div className="container-default relative z-10">
          <BreadcrumbNav items={breadcrumbs} className="mb-8" />
          
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-[800] mb-6 leading-[1.1] text-white">
              Calcul Économies Énergie – Estimez Vos Économies Hydro-Québec
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8 max-w-3xl">
              Découvrez combien vous pouvez économiser sur vos factures de chauffage avec une meilleure isolation. Notre calculateur gratuit vous fournit une estimation précise de vos économies potentielles et du retour sur investissement de vos travaux d'isolation.
            </p>
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Calculez vos économies gratuitement
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
              Avant d'entreprendre des travaux de rénovation énergétique, il est essentiel d'estimer précisément les économies potentielles pour prendre une décision éclairée. Une isolation adéquate peut réduire vos factures de chauffage de 25% à 45% au Québec, ce qui représente des milliers de dollars d'économies sur la durée de vie de votre maison.
            </p>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Notre calculateur d'économies d'énergie analyse votre situation spécifique pour vous fournir une estimation réaliste et détaillée de vos économies annuelles, de votre retour sur investissement et des bénéfices à long terme de l'amélioration de votre isolation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Comment fonctionnent les économies */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Comment Fonctionnent les Économies d'Énergie?
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Les économies d'énergie proviennent principalement de la réduction des pertes de chaleur à travers l'enveloppe de votre maison. Une isolation performante crée une barrière thermique efficace qui maintient la chaleur à l'intérieur en hiver et la fraîcheur en été.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Réduction des Pertes de Chaleur:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Moins de chaleur s'échappe, moins votre système de chauffage doit travailler</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Impact Direct sur Facture:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Consommation électrique réduite se traduit par des factures Hydro-Québec plus basses</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Amélioration du Confort:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Température plus stable et uniforme dans toutes les pièces</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Augmentation Valeur Maison:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Une maison bien isolée vaut 5 à 10% de plus à la revente</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
                alt="Dashboard estimation économies avec graphiques et chiffres"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Facteurs affectant économies */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 text-center">
              Facteurs Affectant Vos Économies d'Énergie
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-8 text-center">
              Plusieurs facteurs influencent le montant exact de vos économies. Notre calculateur prend en compte tous ces éléments pour vous fournir une estimation personnalisée et précise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {facteursEconomies.map((facteur, index) => (
                <div key={index} className="flex items-start gap-3 bg-[hsl(var(--background))] p-4 rounded-[var(--radius)] border border-[hsl(var(--border))]">
                  <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    {facteur}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Économies par zone */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Économies Potentielles par Zone d'Isolation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {economiesZones.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] flex items-center justify-center shrink-0">
                    <item.icon size={28} className="text-[hsl(var(--accent))]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">{item.zone}</h3>
                    <div className="text-[24px] font-[800] text-[hsl(var(--accent))]">{item.economie}</div>
                  </div>
                </div>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Middle */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-[32px] md:text-[38px] font-[700] mb-6 text-white">
            Calculez Vos Économies Personnalisées
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez une estimation précise de vos économies potentielles et de votre retour sur investissement.
          </p>
          <button 
            onClick={scrollToQuoteForm}
            className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
          >
            <Calculator size={20} className="mr-2" />
            Calculez vos économies gratuitement
          </button>
        </div>
      </section>

      {/* Section 4: ROI */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Rapport thermique avec caméra infrarouge et analyse détaillée"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Retour sur Investissement (ROI) de l'Isolation
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Le calcul du ROI est essentiel pour évaluer la rentabilité de vos travaux d'isolation. Au Québec, avec nos hivers rigoureux et le coût de l'électricité, l'isolation représente l'un des investissements les plus rentables pour votre maison.
              </p>
              <div className="space-y-4">
                <div className="bg-[hsl(var(--background))] p-5 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign size={24} className="text-[hsl(var(--accent))]" />
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Calcul du ROI</h3>
                  </div>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    ROI = (Économies Annuelles × Durée de Vie) ÷ Investissement Net. Avec les subventions, votre investissement net est réduit de 40 à 60%, accélérant significativement le retour.
                  </p>
                </div>
                <div className="bg-[hsl(var(--background))] p-5 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={24} className="text-[hsl(var(--accent))]" />
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Délai d'Amortissement</h3>
                  </div>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    En moyenne 5-7 ans pour une isolation complète, réduit à 3-4 ans avec les <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline">subventions Logis Vert</Link>. Après ce délai, c'est du profit pur pendant 20-30 ans.
                  </p>
                </div>
                <div className="bg-[hsl(var(--background))] p-5 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown size={24} className="text-[hsl(var(--accent))]" />
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Économies Long Terme</h3>
                  </div>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    Sur 30 ans, une isolation complète peut générer 20 000$ à 35 000$ d'économies totales, sans compter l'augmentation de la valeur de revente de votre propriété.
                  </p>
                </div>
                <div className="bg-[hsl(var(--background))] p-5 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-3 mb-2">
                    <Home size={24} className="text-[hsl(var(--accent))]" />
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Valeur de la Propriété</h3>
                  </div>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    Une maison bien isolée se vend plus rapidement et à un prix 5 à 10% supérieur. C'est un investissement qui se récupère doublement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Exemple réel */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Exemple Concret: Maison Typique au Québec
            </h2>
            <div className="bg-white p-8 rounded-[var(--radius-lg)] shadow-xl border border-[hsl(var(--border))]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-2">Type de Maison:</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">{exempleConcret.maison}</p>
                </div>
                <div>
                  <h3 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-2">Situation Initiale:</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">{exempleConcret.situation}</p>
                </div>
                <div>
                  <h3 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-2">Travaux Réalisés:</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">{exempleConcret.travaux}</p>
                </div>
                <div>
                  <h3 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-2">Investissement Net:</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">{exempleConcret.investissement}</p>
                </div>
              </div>
              
              <div className="border-t border-[hsl(var(--border))] pt-6">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4 text-center">Résultats:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center bg-[hsl(var(--background))] p-6 rounded-[var(--radius)]">
                    <div className="text-[32px] font-[800] text-[hsl(var(--accent))] mb-2">840$/an</div>
                    <p className="text-[14px] text-[hsl(var(--foreground-secondary))]">Économies Annuelles</p>
                  </div>
                  <div className="text-center bg-[hsl(var(--background))] p-6 rounded-[var(--radius)]">
                    <div className="text-[32px] font-[800] text-[hsl(var(--accent))] mb-2">5-6 ans</div>
                    <p className="text-[14px] text-[hsl(var(--foreground-secondary))]">Retour sur Investissement</p>
                  </div>
                  <div className="text-center bg-[hsl(var(--background))] p-6 rounded-[var(--radius)]">
                    <div className="text-[32px] font-[800] text-[hsl(var(--accent))] mb-2">25 200$</div>
                    <p className="text-[14px] text-[hsl(var(--foreground-secondary))]">Économies sur 30 ans</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed mt-6 text-center">
              Ces résultats sont basés sur des cas réels de nos clients. Vos économies personnelles peuvent varier selon votre situation spécifique. Utilisez notre calculateur pour obtenir une estimation précise adaptée à votre maison.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Maximiser économies */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Comment Maximiser Vos Économies d'Énergie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {conseilsMaximiser.map((conseil, index) => (
              <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{conseil.title}</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  {conseil.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mt-12 max-w-4xl mx-auto text-center">
            Notre équipe vous aide à optimiser votre stratégie pour maximiser vos économies. Consultez nos pages sur les <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline">subventions disponibles</Link> et les <Link to="/financement-isolation" className="text-[hsl(var(--accent))] hover:underline">options de financement</Link> pour commencer à économiser dès maintenant.
          </p>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Questions Fréquentes sur les Économies d'Énergie
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{item.question}</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-[32px] md:text-[38px] font-[700] mb-6 text-white">
            Commencez à Économiser Aujourd'hui
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez votre estimation personnalisée d'économies d'énergie et découvrez combien vous pouvez économiser sur vos factures Hydro-Québec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Calculez vos économies gratuitement
            </button>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center bg-white text-[hsl(var(--primary))] font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Retour aux services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculEconomiesEnergiePage;
