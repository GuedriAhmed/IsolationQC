
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Search, Thermometer, Home, ToyBrick as Brick, Building2, DollarSign, TrendingUp, CreditCard } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Inspection de Grenier et Entre-Toit",
      description: "Détection complète des problèmes d'isolation, de ventilation et d'humidité dans votre grenier. Notre inspection professionnelle identifie les zones critiques de perte de chaleur pour optimiser l'efficacité énergétique de votre maison.",
      benefits: [
        "Détection des pertes de chaleur",
        "Rapport détaillé avec photos",
        "Recommandations personnalisées"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/inspection-grenier-entre-toit",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
    },
    {
      icon: Thermometer,
      title: "Diagnostic Thermique",
      description: "Analyse thermographique avancée par caméra infrarouge pour identifier toutes les déperditions énergétiques de votre maison. Notre diagnostic précis révèle les ponts thermiques, infiltrations d'air et zones mal isolées pour cibler les interventions prioritaires.",
      benefits: [
        "Caméra thermique professionnelle",
        "Localisation précise des problèmes",
        "Estimation des économies potentielles"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/inspection-thermique",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
    },
    {
      icon: Home,
      title: "Isolation de Grenier",
      description: "Installation professionnelle d'isolation en cellulose soufflée pour atteindre la norme R50 recommandée au Québec. Réduisez vos factures de chauffage jusqu'à 30% et améliorez considérablement le confort thermique de votre maison.",
      benefits: [
        "Norme R50 garantie",
        "Économies jusqu'à 30%",
        "Installation en une journée"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-grenier",
      image: "https://images.unsplash.com/photo-1702092488232-77271dabe623"
    },
    {
      icon: Brick,
      title: "Isolation des Murs",
      description: "Amélioration de la performance thermique de vos murs par injection ou installation de panneaux isolants. Notre expertise garantit une isolation uniforme qui élimine les ponts thermiques et améliore significativement le confort de votre maison.",
      benefits: [
        "Isolation intérieure ou extérieure",
        "Réduction des ponts thermiques",
        "Amélioration acoustique incluse"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-murs",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9"
    },
    {
      icon: Building2,
      title: "Isolation du Sous-sol",
      description: "Solutions complètes d'isolation de sous-sol avec contrôle d'humidité intégré. Transformez votre sous-sol en espace confortable tout en éliminant les problèmes de moisissure, condensation et infiltrations d'eau.",
      benefits: [
        "Contrôle total de l'humidité",
        "Prévention de la moisissure",
        "Espace habitable confortable"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/isolation-sous-sol",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
    },
    {
      icon: DollarSign,
      title: "Subventions Isolation Québec",
      description: "Accompagnement complet pour obtenir les subventions Logis Vert d'Hydro-Québec et maximiser vos aides financières. Nous gérons toutes les démarches administratives pour vous faire bénéficier des programmes gouvernementaux d'efficacité énergétique.",
      benefits: [
        "Subventions jusqu'à 5 000$",
        "Gestion administrative complète",
        "Expertise des programmes disponibles"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/subventions-isolation-quebec",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
    },
    {
      icon: TrendingUp,
      title: "Calcul Économies Énergie",
      description: "Calculateur précis pour estimer vos économies d'énergie potentielles suite à l'isolation de votre maison. Notre analyse détaillée vous montre le retour sur investissement exact et les économies annuelles sur vos factures Hydro-Québec.",
      benefits: [
        "Calcul personnalisé précis",
        "ROI détaillé par projet",
        "Économies Hydro-Québec estimées"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/calcul-economies-energie",
      image: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
    },
    {
      icon: CreditCard,
      title: "Financement Isolation",
      description: "Solutions de financement flexibles adaptées à votre budget pour réaliser vos travaux d'isolation sans délai. Nous proposons des plans de paiement avantageux avec approbation rapide pour rendre l'efficacité énergétique accessible à tous.",
      benefits: [
        "Paiements mensuels flexibles",
        "Approbation rapide en 24h",
        "Taux compétitifs"
      ],
      ctaText: "En savoir plus",
      ctaLink: "/financement-isolation",
      image: "https://images.unsplash.com/photo-1625849490903-882527916c80"
    }
  ];

  return (
    <section className="section-padding bg-[hsl(var(--background))]">
      <div className="container-default">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
            Nos Services d'Isolation au Québec
          </h2>
          <p className="text-body text-[hsl(var(--foreground-secondary))] text-balance">
            Solutions complètes d'isolation et d'efficacité énergétique pour votre maison. De l'inspection à l'installation, nous vous accompagnons à chaque étape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
