
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Search, Thermometer, Home, ToyBrick as Brick, Building2, DollarSign, TrendingUp, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      id: "inspection-grenier",
      icon: Search,
      title: "Inspection de grenier et entre-toit – Détectez les pertes de chaleur",
      seoKeywords: "inspection grenier Québec, inspection entre-toit, perte de chaleur maison, inspection grenier Montréal, inspection grenier Laval",
      description: "Notre service d'inspection professionnelle de grenier et entre-toit au Québec utilise des technologies avancées pour détecter toutes les anomalies affectant l'efficacité énergétique de votre maison. Nos experts certifiés examinent minutieusement l'isolation existante, la ventilation, les signes d'humidité et de moisissure, ainsi que les zones critiques de perte de chaleur. Vous recevez un rapport détaillé avec photos et recommandations précises pour optimiser votre isolation et réduire vos factures de chauffage.",
      benefits: [
        "Inspection complète par experts certifiés RBQ",
        "Détection précise des pertes de chaleur et ponts thermiques",
        "Rapport détaillé avec photos haute résolution",
        "Identification des problèmes d'humidité et moisissure",
        "Recommandations personnalisées et chiffrées",
        "Évaluation de la ventilation du grenier"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/inspection-grenier-entre-toit",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf",
      imageAlt: "Inspection de grenier et entre-toit"
    },
    {
      id: "diagnostic-thermique",
      icon: Thermometer,
      title: "Diagnostic thermique maison – Analyse complète des pertes d'énergie",
      seoKeywords: "diagnostic thermique Québec, inspection thermique maison, caméra thermique, diagnostic énergétique",
      description: "Notre diagnostic thermique par caméra infrarouge professionnelle révèle toutes les déperditions énergétiques invisibles à l'œil nu dans votre maison au Québec. Cette analyse thermographique de pointe identifie avec précision les ponts thermiques, les infiltrations d'air froid, les défauts d'isolation et les zones de condensation. Nos techniciens certifiés en thermographie vous fournissent un rapport détaillé avec images thermiques annotées et recommandations priorisées pour améliorer l'efficacité énergétique et le confort de votre résidence.",
      benefits: [
        "Caméra thermique FLIR professionnelle haute résolution",
        "Localisation exacte de tous les ponts thermiques",
        "Détection des infiltrations d'air invisibles",
        "Images thermiques avant/après travaux",
        "Estimation précise des économies d'énergie potentielles",
        "Rapport conforme aux normes d'Hydro-Québec"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/inspection-thermique",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      imageAlt: "Diagnostic thermique"
    },
    {
      id: "isolation-grenier",
      icon: Home,
      title: "Isolation de grenier au Québec – Réduisez vos factures d'énergie",
      seoKeywords: "isolation grenier Québec, isolation entre-toit, isolation cellulose, isolation grenier Montréal, isolation grenier Laval, réduction facture Hydro",
      description: "Spécialistes de l'isolation de grenier par soufflage de cellulose au Québec, nous garantissons l'atteinte de la norme R50 recommandée pour un confort thermique optimal. Notre cellulose écologique traitée au bore offre une résistance thermique supérieure, prévient la moisissure et assure une couverture uniforme sans ponts thermiques. Réduisez vos factures de chauffage jusqu'à 30%, améliorez votre confort toute l'année et augmentez la valeur de votre propriété. Installation professionnelle complétée en une seule journée avec garantie de 10 ans sur la main-d'œuvre.",
      benefits: [
        "Norme R50 garantie pour isolation optimale",
        "Économies de chauffage jusqu'à 30% annuellement",
        "Installation rapide en une journée par équipe certifiée",
        "Cellulose écologique traitée ignifuge et anti-moisissure",
        "Garantie 10 ans sur main-d'œuvre et matériaux",
        "Éligible aux subventions Logis Vert Hydro-Québec"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-grenier",
      image: "https://images.unsplash.com/photo-1702092488232-77271dabe623",
      imageAlt: "Isolation de grenier"
    },
    {
      id: "isolation-murs",
      icon: Brick,
      title: "Isolation des murs – Améliorez la performance thermique de votre maison",
      seoKeywords: "isolation mur Québec, isolation maison, isolation mur intérieur, isolation mur extérieur, isolation thermique",
      description: "Nos solutions d'isolation de murs intérieurs et extérieurs au Québec éliminent définitivement les ponts thermiques et améliorent considérablement la performance énergétique de votre maison. Que ce soit par injection d'isolant dans les cavités murales existantes ou par l'installation de panneaux isolants rigides, nos techniciens certifiés garantissent une isolation uniforme et durable. Bénéficiez d'un confort thermique accru, d'une meilleure isolation acoustique et d'une réduction significative de vos coûts de chauffage et de climatisation.",
      benefits: [
        "Isolation par l'intérieur ou l'extérieur selon vos besoins",
        "Élimination complète des ponts thermiques",
        "Amélioration acoustique significative (réduction bruit)",
        "Matériaux isolants haute performance certifiés",
        "Augmentation de la valeur de revente de 5-10%",
        "Installation sans dommage aux finitions existantes"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-murs",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9",
      imageAlt: "Isolation des murs"
    },
    {
      id: "isolation-sous-sol",
      icon: Building2,
      title: "Isolation sous-sol – Éliminez l'humidité et les pertes de chaleur",
      seoKeywords: "isolation sous-sol Québec, isolation sous-sol humide, isolation fondation, contrôle humidité",
      description: "Transformez votre sous-sol en espace confortable et habitable grâce à nos solutions complètes d'isolation avec contrôle d'humidité intégré au Québec. Notre approche globale combine l'isolation thermique des murs de fondation, l'installation de membranes pare-vapeur, et des systèmes de drainage pour éliminer définitivement les problèmes d'humidité, de moisissure et de condensation. Profitez d'un sous-sol sec, chaud en hiver, frais en été, et augmentez votre surface habitable tout en réduisant vos coûts énergétiques.",
      benefits: [
        "Contrôle total de l'humidité et prévention moisissure",
        "Isolation thermique R20+ pour murs de fondation",
        "Installation de membranes pare-vapeur certifiées",
        "Système de drainage et évacuation d'eau si nécessaire",
        "Transformation en espace habitable confortable",
        "Garantie 10 ans sur imperméabilisation et isolation"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-sous-sol",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf",
      imageAlt: "Isolation du sous-sol"
    },
    {
      id: "subventions-logis-vert",
      icon: DollarSign,
      title: "Subventions isolation Québec – Programme Logis Vert Hydro-Québec",
      seoKeywords: "subvention isolation Québec, Logis Vert Hydro-Québec, aide rénovation énergétique, subvention rénovation",
      description: "Maximisez vos économies grâce à notre expertise des programmes de subventions d'isolation au Québec. Nous vous accompagnons dans toutes les démarches pour obtenir les aides financières Logis Vert d'Hydro-Québec, Rénoclimat, et autres programmes gouvernementaux d'efficacité énergétique. Notre équipe gère l'ensemble du processus administratif, de l'évaluation initiale à la demande de remboursement finale, vous permettant de bénéficier de subventions pouvant atteindre 5 000$ pour vos travaux d'isolation et de rénovation écoénergétique.",
      benefits: [
        "Subventions jusqu'à 5 000$ pour isolation complète",
        "Gestion administrative complète de A à Z",
        "Expertise de tous les programmes disponibles au Québec",
        "Optimisation des aides cumulables",
        "Accompagnement pour évaluation Rénoclimat",
        "Garantie d'admissibilité maximale aux subventions"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/subventions-isolation-quebec",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf",
      imageAlt: "Subventions isolation Québec"
    },
    {
      id: "calcul-economies",
      icon: TrendingUp,
      title: "Calcul économies énergie – Estimez vos économies Hydro-Québec",
      seoKeywords: "économie énergie maison Québec, calcul économies Hydro, ROI rénovation énergétique",
      description: "Notre calculateur d'économies d'énergie avancé vous fournit une estimation précise et personnalisée de vos économies potentielles suite à l'isolation de votre maison au Québec. En analysant votre consommation actuelle d'Hydro-Québec, la superficie de votre maison, l'isolation existante et vos projets de rénovation, nous calculons vos économies annuelles exactes sur le chauffage et la climatisation. Vous obtenez également le retour sur investissement (ROI) détaillé de chaque projet d'isolation, vous permettant de prioriser vos travaux pour maximiser vos bénéfices financiers.",
      benefits: [
        "Calcul personnalisé basé sur votre consommation réelle",
        "Estimation ROI détaillée par type de projet",
        "Projection des économies sur 10, 15 et 20 ans",
        "Comparaison avant/après travaux d'isolation",
        "Intégration des subventions dans le calcul",
        "Rapport téléchargeable pour financement"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/calcul-economies-energie",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf",
      imageAlt: "Calcul économies énergie"
    },
    {
      id: "financement-travaux",
      icon: CreditCard,
      title: "Financement isolation – Solutions flexibles au Québec",
      seoKeywords: "financement rénovation Québec, financement isolation, paiement flexible, crédit rénovation",
      description: "Réalisez vos projets d'isolation sans délai grâce à nos solutions de financement flexibles et avantageuses adaptées à tous les budgets au Québec. Nous avons développé des partenariats avec des institutions financières spécialisées en rénovation écoénergétique pour vous offrir des plans de paiement mensuels à taux compétitifs. Approbation rapide en 24 heures, aucun paiement pendant les travaux, et remboursement étalé sur 12 à 60 mois selon vos préférences. Rendez l'efficacité énergétique accessible et commencez à économiser dès maintenant.",
      benefits: [
        "Paiements mensuels flexibles de 12 à 60 mois",
        "Approbation rapide en 24 heures maximum",
        "Taux d'intérêt compétitifs et transparents",
        "Aucun paiement requis pendant les travaux",
        "Options de remboursement anticipé sans pénalité",
        "Financement jusqu'à 50 000$ pour projets complets"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/financement-isolation",
      image: "https://images.unsplash.com/photo-1625849490903-882527916c80",
      imageAlt: "Financement isolation"
    }
  ];

  const scrollToService = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Services d'Isolation au Québec | Inspection, Isolation, Subventions"
        description="Services complets d'isolation au Québec : inspection thermique, isolation grenier R50, murs, sous-sol. Subventions Logis Vert, financement flexible. Devis gratuit!"
        robots="index, follow"
        canonical="https://isolationqc.com/services"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625577816396-fbf677c54cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container-default relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-[800] mb-6 leading-[1.1] text-white">
              Nos Services d'Isolation et d'Efficacité Énergétique
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8 max-w-3xl">
              Solutions complètes pour améliorer le confort de votre maison et réduire vos factures d'énergie au Québec. De l'inspection à l'installation, en passant par le financement et les subventions.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-[var(--radius-lg)] p-6 border border-white/20">
            <h3 className="text-[16px] font-[700] mb-4 text-white">Accès rapide aux services :</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => scrollToService(service.id)}
                  className="text-left text-[14px] text-white/90 hover:text-white hover:bg-white/10 p-3 rounded-[var(--radius)] transition-all flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <service.icon size={18} className="shrink-0 text-[hsl(var(--accent))]" />
                  <span className="group-hover:translate-x-1 transition-transform">{service.title.split('–')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <article 
                key={index} 
                id={service.id}
                className="scroll-mt-32"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-lg group">
                      <img 
                        src={service.image} 
                        alt={service.imageAlt}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/60 to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-[var(--radius)] shadow-lg">
                        <service.icon size={36} className="text-[hsl(var(--accent))]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-4 leading-[1.2] tracking-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-4">Avantages clés :</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                            <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to={service.ctaLink}
                      className="inline-flex items-center gap-2 text-[hsl(var(--accent))] font-semibold text-[14px] hover:gap-3 transition-all group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
                    >
                      {service.ctaText}
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Separator */}
                {index < services.length - 1 && (
                  <div className="mt-16 md:mt-24 border-t border-[hsl(var(--border))]"></div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-6 text-white">
            Prêt à améliorer l'efficacité énergétique de votre maison?
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Réservez votre inspection gratuite et obtenez un devis personnalisé avec estimation des économies d'énergie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/inspection-gratuite"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Réserver une inspection gratuite
            </Link>
            <Link 
              to="/devis-prix"
              className="inline-flex items-center justify-center bg-white text-[hsl(var(--primary))] font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Obtenir un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
