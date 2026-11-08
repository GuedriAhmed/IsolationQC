import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import TimelineComponent from '@/components/TimelineComponent';
import FAQAccordion from '@/components/FAQAccordion';
import { Search, Thermometer, Camera, FileText, CheckCircle, AlertTriangle, Droplets, Wind, Home, TrendingDown, DollarSign, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InspectionGrenierDetailPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Inspection de grenier', url: '/inspection-grenier' }
  ];

  const warningSignsData = [
    {
      icon: DollarSign,
      title: "Factures de Chauffage Élevées",
      description: "Une augmentation inexpliquée de vos coûts de chauffage peut indiquer une isolation défaillante permettant jusqu'à 30-40% de perte de chaleur par le toit."
    },
    {
      icon: Thermometer,
      title: "Variations de Température",
      description: "Des différences importantes de température entre les pièces ou les étages suggèrent une isolation inadéquate ou inégale du grenier."
    },
    {
      icon: Droplets,
      title: "Humidité et Moisissure",
      description: "Des traces d'humidité, de moisissure ou de condensation dans le grenier révèlent des problèmes de ventilation et d'étanchéité à l'air."
    },
    {
      icon: AlertTriangle,
      title: "Infiltrations d'Eau",
      description: "Les taches d'eau au plafond, les fuites ou les traces d'humidité indiquent des problèmes d'étanchéité du toit nécessitant une inspection urgente."
    },
    {
      icon: Wind,
      title: "Odeurs Désagréables",
      description: "Des odeurs de moisi ou de renfermé provenant du grenier signalent souvent la présence de moisissure ou de problèmes de ventilation."
    },
    {
      icon: Home,
      title: "Présence d'Insectes ou Rongeurs",
      description: "Les nuisibles s'installent souvent dans les greniers mal isolés ou présentant des ouvertures. Leur présence indique des failles dans l'enveloppe."
    },
    {
      icon: Thermometer,
      title: "Gel ou Condensation",
      description: "La formation de givre ou de condensation excessive dans le grenier en hiver révèle des fuites d'air chaud et des problèmes de ventilation."
    },
    {
      icon: Zap,
      title: "Surchauffe en Été",
      description: "Si votre maison devient excessivement chaude en été malgré la climatisation, l'isolation du grenier est probablement insuffisante."
    }
  ];

  const inspectionSteps = [
    {
      icon: Search,
      title: "Évaluation Initiale",
      description: "Notre expert certifié RBQ commence par une discussion pour comprendre vos préoccupations et identifier les zones problématiques potentielles.",
      duration: "15-20 minutes"
    },
    {
      icon: Camera,
      title: "Inspection Visuelle Complète",
      description: "Examen minutieux de votre grenier et entre-toit pour identifier tous les problèmes visibles: isolation, ventilation, humidité, structure.",
      details: [
        "État et épaisseur de l'isolation existante",
        "Signes d'humidité, moisissure ou infiltration",
        "Ventilation du grenier (évents de soffite, faîte)",
        "Présence de vermiculite ou matériaux dangereux"
      ],
      duration: "30-40 minutes"
    },
    {
      icon: Thermometer,
      title: "Mesures Thermiques",
      description: "Utilisation d'une caméra thermique pour détecter les pertes de chaleur invisibles à l'œil nu et localiser précisément les ponts thermiques.",
      details: [
        "Détection des fuites d'air et infiltrations",
        "Localisation des ponts thermiques",
        "Mesure de l'efficacité de l'isolation actuelle",
        "Images thermiques avant/après disponibles"
      ],
      duration: "20-30 minutes"
    },
    {
      icon: CheckCircle,
      title: "Vérification Complète",
      description: "Contrôle approfondi de tous les aspects: structure, ventilation, pare-vapeur, étanchéité à l'air, présence de nuisibles.",
      duration: "15-20 minutes"
    },
    {
      icon: FileText,
      title: "Rapport Détaillé",
      description: "Préparation d'un rapport complet avec photos haute résolution, images thermiques, recommandations priorisées et estimation des coûts.",
      details: [
        "Photos et documentation de tous les problèmes",
        "Recommandations techniques précises",
        "Estimation des coûts de correction",
        "Calcul des économies d'énergie potentielles"
      ],
      duration: "Remis sous 24-48h"
    },
    {
      icon: DollarSign,
      title: "Consultation et Devis",
      description: "Présentation détaillée du rapport et des travaux recommandés, accompagnement pour les subventions Logis Vert disponibles.",
      duration: "30-45 minutes"
    }
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Économies d'Énergie",
      metric: "Jusqu'à 30%",
      description: "Identifiez précisément les sources de perte de chaleur pour réduire drastiquement vos factures de chauffage et climatisation."
    },
    {
      icon: Home,
      title: "Confort Thermique",
      description: "Détectez les problèmes d'isolation et de ventilation qui causent les variations de température et l'inconfort dans votre maison."
    },
    {
      icon: Droplets,
      title: "Prévention de l'Humidité",
      description: "L'inspection précoce permet de détecter l'humidité et la moisissure avant qu'ils ne causent des dommages structurels coûteux."
    },
    {
      icon: FileText,
      title: "Planification Éclairée",
      description: "Obtenez un diagnostic précis et des recommandations priorisées pour planifier vos travaux d'isolation de manière stratégique."
    },
    {
      icon: DollarSign,
      title: "Augmentation de Valeur",
      description: "Une maison bien isolée avec documentation d'inspection vaut 5-10% de plus sur le marché immobilier."
    },
    {
      icon: Zap,
      title: "Qualité de l'Air",
      description: "Détectez les problèmes de ventilation et de moisissure qui affectent la qualité de l'air intérieur et la santé de votre famille."
    },
    {
      icon: CheckCircle,
      title: "Zones Prioritaires",
      description: "Identifiez quelles zones nécessitent une intervention urgente et lesquelles peuvent attendre, pour optimiser votre budget."
    },
    {
      icon: DollarSign,
      title: "Accès aux Subventions",
      description: "Le rapport d'inspection facilite l'obtention des subventions Logis Vert d'Hydro-Québec jusqu'à 5 000$ pour vos travaux."
    }
  ];

  const faqItems = [
    {
      question: "Combien coûte une inspection de grenier?",
      answer: "Nous offrons une inspection de grenier GRATUITE sans engagement pour tous les propriétaires au Québec. Cette inspection complète inclut l'évaluation visuelle, les mesures thermiques, la documentation photographique et un rapport détaillé avec recommandations. Il n'y a aucun frais caché et aucune obligation de procéder aux travaux recommandés."
    },
    {
      question: "Combien de temps dure une inspection complète?",
      answer: "Une inspection complète de grenier prend généralement entre 1h30 et 2h selon la superficie et la complexité de votre maison. L'évaluation initiale dure 15-20 minutes, l'inspection visuelle 30-40 minutes, les mesures thermiques 20-30 minutes, et la vérification complète 15-20 minutes. Notre expert prend le temps nécessaire pour un examen minutieux et répond à toutes vos questions sur place."
    },
    {
      question: "Quels sont les signes qu'une inspection est nécessaire?",
      answer: "Plusieurs signes indiquent qu'une inspection s'impose: factures de chauffage anormalement élevées, variations importantes de température entre les pièces, présence d'humidité ou de moisissure, infiltrations d'eau, odeurs de moisi, présence d'insectes ou rongeurs, formation de givre/condensation dans le grenier, surchauffe excessive en été. Si vous constatez un ou plusieurs de ces signes, contactez-nous pour une inspection gratuite."
    },
    {
      question: "Puis-je inspecter mon grenier moi-même?",
      answer: "Vous pouvez faire une inspection visuelle de base, mais une inspection professionnelle offre plusieurs avantages cruciaux: équipement spécialisé (caméra thermique FLIR pour détecter les pertes invisibles), expertise technique pour identifier tous les problèmes, rapport détaillé avec photos et recommandations priorisées, accès sécuritaire à toutes les zones, et documentation nécessaire pour les subventions Logis Vert. Notre inspection gratuite vous garantit un diagnostic complet et professionnel."
    },
    {
      question: "Quelle est la meilleure période pour une inspection?",
      answer: "L'inspection de grenier peut être réalisée toute l'année, mais certaines périodes sont optimales: en hiver, les problèmes de perte de chaleur et de condensation sont plus visibles avec la caméra thermique; au printemps/automne, les conditions sont idéales pour l'accès et les travaux de correction; en été, la surchauffe révèle les failles d'isolation. Nous recommandons une inspection tous les 10 ans minimum, ou dès l'apparition de signes problématiques."
    },
    {
      question: "Que se passe-t-il après l'inspection?",
      answer: "Après l'inspection, vous recevez sous 24-48h un rapport complet avec photos haute résolution, images thermiques infrarouges, liste détaillée des problèmes identifiés, et recommandations priorisées. Notre expert vous présente ensuite le rapport en détail, répond à vos questions, et vous fournit un devis gratuit pour les travaux recommandés. Nous vous accompagnons aussi dans les démarches pour obtenir les subventions Logis Vert. Aucune obligation - vous décidez si et quand procéder aux travaux."
    },
    {
      question: "Puis-je combiner l'inspection avec d'autres services?",
      answer: "Absolument! Nous offrons souvent des inspections combinées pour maximiser l'efficacité: inspection grenier + murs + sous-sol pour une évaluation complète de l'enveloppe, inspection thermique de toute la maison, évaluation pour thermopompe, test d'infiltrométrie (blower door test). Les inspections combinées vous donnent une vue d'ensemble et permettent de planifier des travaux complémentaires optimaux. Contactez-nous pour discuter de vos besoins spécifiques."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Inspection de Grenier et Entre-Toit – Détectez les Pertes de Chaleur au Québec"
        description="Inspection professionnelle de grenier et entre-toit au Québec. Détection des pertes de chaleur, humidité et moisissures. Rapport détaillé avec photos. Inspection gratuite!"
        keywords="inspection grenier, inspection entre-toit, perte chaleur Québec, caméra thermique, inspection gratuite, moisissure grenier, isolation grenier, efficacité énergétique"
        canonical="https://isolationqc.com/inspection-grenier"
      />

      <HeroSection 
        title="Inspection de Grenier et Entre-Toit – Détectez les Pertes de Chaleur au Québec"
        subtitle="Inspection Professionnelle Gratuite"
        introText="Inspection complète GRATUITE avec caméra thermique. Identifiez les 30-40% de chaleur qui s'échappent par votre toit mal isolé. Rapport détaillé sous 24-48h avec recommandations d'experts certifiés RBQ."
        image="https://images.unsplash.com/photo-1696065595189-2aa2de13c4f4"
      />

      <BreadcrumbNav items={breadcrumbs} />

      {/* Introduction Section */}
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
              Inspection de Grenier Professionnelle au Québec
            </h2>
            <div className="space-y-4 text-[17px] text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                Saviez-vous que <strong className="font-[600] text-[hsl(var(--primary))]">30 à 40% de la chaleur de votre maison s'échappe par le toit</strong> lorsque le grenier est mal isolé? Au Québec, avec nos hivers rigoureux et nos étés chauds, une isolation de grenier déficiente entraîne des factures d'énergie exorbitantes, un inconfort thermique constant, et des risques de dommages structurels dus à l'humidité et à la moisissure.
              </p>
              <p>
                Une inspection professionnelle de grenier tous les 10 ans minimum est essentielle pour maintenir l'efficacité énergétique de votre maison. Nos experts certifiés RBQ utilisent des technologies de pointe, incluant la <strong className="font-[600] text-[hsl(var(--primary))]">caméra thermique infrarouge FLIR</strong>, pour détecter toutes les anomalies invisibles à l'œil nu: pertes de chaleur, ponts thermiques, infiltrations d'air, humidité excessive, et problèmes de ventilation.
              </p>
              <p>
                Vous recevez un <strong className="font-[600] text-[hsl(var(--primary))]">rapport détaillé avec photos haute résolution</strong>, images thermiques annotées, et recommandations précises pour optimiser votre isolation. Cette inspection gratuite est la première étape essentielle pour réduire vos coûts énergétiques, améliorer votre confort, et maximiser vos subventions Logis Vert d'Hydro-Québec.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Inspection */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-6 text-[hsl(var(--primary))]">
              Qu'est-ce qu'une Inspection de Grenier?
            </h2>
            <div className="space-y-4 text-[17px] text-[hsl(var(--foreground))] leading-relaxed mb-8">
              <p>
                Une inspection de grenier professionnelle est un <strong className="font-[600] text-[hsl(var(--primary))]">examen complet et systématique</strong> de votre grenier et entre-toit réalisé par un expert certifié RBQ équipé de technologies de diagnostic avancées. Cette inspection va bien au-delà d'une simple visite visuelle en utilisant des outils spécialisés pour détecter les problèmes invisibles.
              </p>
              <p>
                Notre inspection inclut l'évaluation de l'isolation existante (type, épaisseur, valeur R), l'examen de la ventilation (évents de soffite, faîte, pignon), la détection d'humidité et moisissure, et surtout un <strong className="font-[600] text-[hsl(var(--primary))]">diagnostic thermique par caméra infrarouge</strong> pour localiser précisément toutes les pertes de chaleur.
              </p>
              <p>
                L'inspection dure généralement <strong className="font-[600] text-[hsl(var(--primary))]">1 à 2 heures</strong> selon la superficie de votre maison. Vous recevez ensuite un rapport détaillé sous 24-48h avec toutes les informations nécessaires pour prendre des décisions éclairées sur vos travaux d'isolation et d'amélioration énergétique.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <Camera size={32} className="text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Équipement Professionnel</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
                  Caméra thermique FLIR, hygromètre, luxmètre, et outils de mesure certifiés pour un diagnostic précis.
                </p>
              </div>
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <CheckCircle size={32} className="text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Experts Certifiés RBQ</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
                  Tous nos inspecteurs sont certifiés par la Régie du bâtiment du Québec avec plus de 10 ans d'expérience.
                </p>
              </div>
              <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <FileText size={32} className="text-[hsl(var(--accent))] mb-4" />
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-2">Rapport Complet</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
                  Documentation détaillée avec photos, images thermiques, et recommandations priorisées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Signes d'un Grenier Mal Isolé
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Reconnaissez ces symptômes courants d'une isolation de grenier défaillante qui augmente vos coûts énergétiques et réduit votre confort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {warningSignsData.map((sign, index) => (
              <BenefitCard 
                key={index}
                icon={sign.icon}
                title={sign.title}
                description={sign.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Notre Processus d'Inspection en 6 Étapes
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Un examen systématique et méthodique pour garantir qu'aucun problème ne passe inaperçu dans votre grenier.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TimelineComponent steps={inspectionSteps} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Bénéfices de l'Inspection de Grenier
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Découvrez comment notre inspection gratuite peut transformer l'efficacité énergétique et le confort de votre maison.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                metric={benefit.metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Questions Fréquentes sur l'Inspection de Grenier
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Réponses détaillées aux questions les plus courantes sur notre service d'inspection gratuite.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-6 text-white">
            Obtenez Votre Inspection de Grenier Gratuite
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Diagnostic thermique complet, rapport détaillé sous 24-48h, et accompagnement pour les subventions Logis Vert. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Obtenez Votre Inspection Gratuite
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

export default InspectionGrenierDetailPage;