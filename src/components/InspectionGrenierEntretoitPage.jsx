
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Camera, FileText, ClipboardCheck, Thermometer, Wind, Droplets, Home, ArrowLeft } from 'lucide-react';

const InspectionGrenierEntretoitPage = () => {
  const scrollToQuoteForm = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const faqItems = [
    {
      question: "Combien coûte une inspection de grenier au Québec?",
      answer: "Nous offrons une inspection gratuite de votre grenier et entre-toit lors de votre première consultation. Cette inspection complète inclut l'analyse thermique, l'évaluation de l'isolation existante, la détection d'humidité et de moisissures, ainsi qu'un rapport détaillé avec photos et recommandations personnalisées."
    },
    {
      question: "Combien de temps dure une inspection de grenier?",
      answer: "Une inspection complète de grenier et entre-toit dure généralement entre 45 minutes et 1 heure, selon la superficie de votre maison. Nos experts prennent le temps nécessaire pour examiner minutieusement chaque zone critique et identifier tous les problèmes potentiels."
    },
    {
      question: "Quand est le meilleur moment pour faire inspecter mon grenier?",
      answer: "Le meilleur moment est avant l'hiver pour détecter et corriger les problèmes avant la saison froide. Nous recommandons également une inspection tous les 10 ans, après des rénovations, ou si vous remarquez des signes comme une augmentation des factures de chauffage, de la condensation, ou des traces d'humidité au plafond."
    },
    {
      question: "Que se passe-t-il après l'inspection?",
      answer: "Vous recevez un rapport détaillé avec photos, analyse des problèmes détectés, et recommandations priorisées. Nous vous présentons ensuite un devis personnalisé pour les travaux nécessaires, incluant les subventions disponibles et les options de financement. Vous pouvez également utiliser ce rapport pour demander des aides financières Logis Vert."
    }
  ];

  const inspectionZones = [
    {
      icon: Home,
      title: "Grenier et Entre-Toit",
      description: "Examen complet de l'espace sous toiture, vérification de l'état de la structure et détection des zones problématiques."
    },
    {
      icon: Wind,
      title: "Système de Ventilation",
      description: "Évaluation des évents de soffite, de faîtage et de pignon pour assurer une circulation d'air optimale."
    },
    {
      icon: Thermometer,
      title: "Isolation Existante",
      description: "Mesure de l'épaisseur et de la valeur R, identification des ponts thermiques et zones sous-isolées."
    },
    {
      icon: Droplets,
      title: "Humidité et Infiltrations",
      description: "Détection de traces d'eau, condensation, moisissures et infiltrations d'air avec équipement professionnel."
    }
  ];

  const benefits = [
    "Identifier les problèmes avant qu'ils ne s'aggravent",
    "Planifier vos rénovations de manière stratégique",
    "Maximiser vos économies d'énergie potentielles",
    "Obtenir un rapport pour les aides financières Logis Vert",
    "Augmenter la valeur de revente de votre maison",
    "Améliorer la santé et le confort de votre famille"
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Inspection de Grenier et Entre-Toit au Québec – Détectez les Pertes de Chaleur"
        description="Inspection professionnelle de grenier et entre-toit au Québec. Détection des pertes de chaleur, humidité et moisissures. Rapport détaillé avec photos. Inspection gratuite!"
        robots="index, follow"
        canonical="https://isolationqc.com/inspection-grenier-entre-toit"
        keywords="inspection grenier Québec, inspection entre-toit, inspection grenier Montréal, inspection grenier Laval, inspection grenier Rive-Sud, perte de chaleur maison, inspection gratuite, diagnostic grenier"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619089995839-93db82bf9bdf')] bg-cover bg-center opacity-10"></div>
        <div className="container-default relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-[800] mb-6 leading-[1.1] text-white">
              Inspection de Grenier et Entre-Toit au Québec – Détectez les Pertes de Chaleur
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8 max-w-3xl">
              Une inspection professionnelle de votre grenier et entre-toit permet d'identifier les problèmes d'isolation, de ventilation et d'humidité avant qu'ils n'entraînent des coûts importants. Nos experts certifiés RBQ vous fournissent un rapport détaillé pour optimiser l'efficacité énergétique de votre maison.
            </p>
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Demandez votre inspection gratuite
            </button>
          </div>
        </div>
      </section>

      {/* Back to Services Button */}
      <section className="bg-white border-b border-[hsl(var(--border))]">
        <div className="container-default py-4">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-[hsl(var(--foreground-secondary))] hover:text-[hsl(var(--accent))] transition-colors text-[14px] font-medium"
          >
            <ArrowLeft size={18} />
            Retour aux services
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
              Au Québec, où les hivers rigoureux mettent à rude épreuve l'isolation de nos maisons, une inspection régulière du grenier et de l'entre-toit est essentielle. Les experts recommandent une inspection tous les 10 ans pour maintenir l'efficacité énergétique et prévenir les dommages coûteux causés par l'humidité, la moisissure et les pertes de chaleur.
            </p>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Notre service d'inspection professionnelle identifie précisément les zones problématiques de votre grenier et vous fournit un plan d'action clair pour améliorer le confort de votre maison tout en réduisant vos factures de chauffage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Qu'est-ce qu'une inspection */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Qu'est-ce qu'une Inspection de Grenier Professionnelle?
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Une inspection complète de grenier et entre-toit examine tous les aspects critiques qui affectent l'efficacité énergétique et la santé de votre maison. Nos techniciens certifiés utilisent des équipements professionnels pour détecter les problèmes invisibles à l'œil nu.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    <strong>Détection des pertes de chaleur:</strong> Utilisation de caméra thermique pour identifier les ponts thermiques et zones mal isolées
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    <strong>Analyse de l'humidité et moisissures:</strong> Recherche de traces d'eau, condensation et croissance fongique
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    <strong>Évaluation de la ventilation:</strong> Vérification du système d'aération pour prévenir l'accumulation d'humidité
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    <strong>Mesure de l'isolation existante:</strong> Calcul de la valeur R actuelle et identification des zones à améliorer
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
                alt="Inspection de grenier et entre-toit"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pourquoi inspecter */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 text-center">
              Pourquoi Faire Inspecter Votre Grenier?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Économies d'Énergie Substantielles</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Une inspection révèle les zones de pertes de chaleur qui peuvent augmenter vos factures de chauffage jusqu'à 30%. En corrigeant ces problèmes, vous réalisez des économies importantes année après année.
                </p>
              </div>
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Prévention des Dommages Coûteux</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Détecter l'humidité et les problèmes de ventilation avant qu'ils ne causent de la moisissure ou pourriture du bois vous évite des réparations majeures pouvant coûter des milliers de dollars.
                </p>
              </div>
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Amélioration du Confort</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Une isolation adéquate et une bonne ventilation maintiennent une température uniforme dans toute la maison, éliminant les pièces froides en hiver et la chaleur excessive en été.
                </p>
              </div>
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Protection de la Santé Familiale</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Identifier et éliminer la moisissure et l'humidité excessive améliore la qualité de l'air intérieur et prévient les problèmes respiratoires et allergies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Processus d'inspection */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Inspection avec caméra thermique et rapport détaillé"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Notre Processus d'Inspection Professionnel
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Visite sur Site</h3>
                    <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      Nos experts se rendent à votre domicile et examinent minutieusement votre grenier et entre-toit avec équipement professionnel.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Analyse Thermique et Mesures</h3>
                    <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      Utilisation de caméra thermique pour détecter les pertes de chaleur, mesure de la valeur R de l'isolation existante, et évaluation de la ventilation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Rapport Détaillé avec Photos</h3>
                    <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      Vous recevez un rapport complet avec photos haute résolution, images thermiques annotées et documentation de tous les problèmes identifiés.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Recommandations Personnalisées</h3>
                    <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      Nous vous présentons un plan d'action priorisé avec devis détaillé, estimation des économies potentielles et information sur les <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline">subventions disponibles</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Middle */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-[32px] md:text-[38px] font-[700] mb-6 text-white">
            Réservez Votre Inspection Gratuite Aujourd'hui
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Profitez de notre inspection professionnelle sans frais et découvrez comment optimiser l'efficacité énergétique de votre maison.
          </p>
          <button 
            onClick={scrollToQuoteForm}
            className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Demandez votre inspection gratuite
          </button>
        </div>
      </section>

      {/* Section 4: Zones inspectées */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Zones Clés Inspectées par Nos Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionZones.map((zone, index) => (
              <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] flex items-center justify-center mb-4">
                  <zone.icon size={28} className="text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{zone.title}</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Bénéfices */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Les Bénéfices d'une Inspection Professionnelle
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Notre inspection gratuite vous permet de prendre des décisions éclairées concernant l'amélioration de votre maison. Vous obtenez une vision claire de l'état actuel et des actions prioritaires pour maximiser votre confort et vos économies.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mt-6">
                De plus, notre rapport d'inspection est accepté pour les demandes de <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline">subventions Logis Vert Hydro-Québec</Link> et peut faciliter l'obtention de <Link to="/financement-isolation" className="text-[hsl(var(--accent))] hover:underline">financement pour vos travaux</Link>.
              </p>
            </div>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1702092488232-77271dabe623"
                alt="Installation isolation grenier par professionnel"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Questions Fréquentes sur l'Inspection de Grenier
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
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
            Prêt à Optimiser Votre Grenier?
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Bénéficiez d'une inspection professionnelle gratuite et recevez un plan d'action personnalisé pour améliorer l'efficacité énergétique de votre maison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Demandez votre inspection gratuite
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

export default InspectionGrenierEntretoitPage;
