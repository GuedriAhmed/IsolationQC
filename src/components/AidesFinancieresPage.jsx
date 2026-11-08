import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import HeroSection from '@/components/HeroSection';
import BenefitCard from '@/components/BenefitCard';
import TimelineComponent from '@/components/TimelineComponent';
import FAQAccordion from '@/components/FAQAccordion';
import { DollarSign, FileText, CheckCircle, Users, TrendingUp, Zap, Home, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AidesFinancieresPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Aides financières', url: '/aides-financieres' }
  ];

  const aidTypesData = [
    {
      icon: DollarSign,
      title: "Subvention Logis Vert – Isolation Grenier",
      metric: "Jusqu'à 2 000$",
      description: "Aide financière d'Hydro-Québec pour l'isolation du grenier jusqu'à la norme R50. Montant basé sur la superficie isolée et l'amélioration de la valeur R."
    },
    {
      icon: Home,
      title: "Subvention Logis Vert – Isolation Murs",
      metric: "Jusqu'à 2 500$",
      description: "Programme pour l'isolation des murs par injection de mousse ou panneaux isolants. Encourage l'isolation complète de l'enveloppe pour maximiser l'efficacité énergétique."
    },
    {
      icon: Zap,
      title: "Subvention Logis Vert – Isolation Sous-sol",
      metric: "Jusqu'à 1 500$",
      description: "Aide pour l'isolation du sous-sol avec contrôle de l'humidité. Améliore le confort et réduit les pertes de chaleur par les fondations."
    },
    {
      icon: TrendingUp,
      title: "Subvention Thermopompe",
      metric: "Jusqu'à 5 000$",
      description: "Programme de remplacement de système de chauffage par une thermopompe à haute efficacité. La subvention la plus généreuse pour réduction maximale de la consommation."
    },
    {
      icon: Home,
      title: "Subvention Portes et Fenêtres",
      metric: "Jusqu'à 1 500$",
      description: "Aide pour le remplacement de fenêtres et portes énergivores. S'applique si combiné avec d'autres travaux d'isolation admissibles."
    },
    {
      icon: CheckCircle,
      title: "Autres Aides Disponibles",
      metric: "Variables",
      description: "Programmes municipaux, crédits d'impôt fédéraux, et autres aides gouvernementales cumulables avec Logis Vert pour maximiser votre financement."
    }
  ];

  const eligibilityCriteria = [
    {
      icon: Home,
      title: "Propriétaire-occupant au Québec",
      description: "Vous devez être propriétaire et occuper la résidence visée par les travaux. Les maisons unifamiliales, jumelées et en rangée sont admissibles."
    },
    {
      icon: CheckCircle,
      title: "Maison construite avant 2012",
      description: "Votre résidence doit avoir été construite avant 2012 pour être admissible au programme Logis Vert d'Hydro-Québec."
    },
    {
      icon: Users,
      title: "Résidence au Québec",
      description: "La propriété doit être située au Québec et être votre résidence principale. Aucune limite de revenu n'est imposée."
    },
    {
      icon: FileText,
      title: "Entrepreneur certifié Logis Vert",
      description: "Les travaux doivent être réalisés par un entrepreneur qualifié et certifié par le programme Logis Vert. Notre entreprise détient cette certification."
    },
    {
      icon: Search,
      title: "Inspection énergétique préalable",
      description: "Une évaluation énergétique de votre maison peut être requise avant les travaux pour documenter l'état initial et calculer les économies potentielles."
    },
    {
      icon: DollarSign,
      title: "Devis approuvé avant travaux",
      description: "Le devis des travaux doit être soumis et approuvé par Hydro-Québec avant le début des travaux pour garantir l'admissibilité à la subvention."
    }
  ];

  const supportServices = [
    {
      icon: Search,
      title: "Évaluation gratuite de l'admissibilité",
      description: "Nous analysons votre situation gratuitement pour confirmer votre admissibilité à toutes les subventions disponibles (Logis Vert, Rénoclimat, crédits d'impôt).",
      duration: "Immédiat"
    },
    {
      icon: FileText,
      title: "Préparation complète du dossier",
      description: "Notre équipe prépare tous les documents requis: formulaires de demande, preuves de propriété, plans et devis détaillés, photos avant travaux.",
      duration: "2-3 jours ouvrables"
    },
    {
      icon: Users,
      title: "Gestion administrative complète",
      description: "Nous gérons toutes les communications avec Hydro-Québec et les autres organismes. Vous n'avez aucune démarche administrative à faire.",
      duration: "Processus complet"
    },
    {
      icon: CheckCircle,
      title: "Suivi de dossier avec Hydro-Québec",
      description: "Nous assurons un suivi rigoureux de votre dossier auprès d'Hydro-Québec pour garantir une approbation rapide et éviter les retards.",
      duration: "Continu"
    },
    {
      icon: TrendingUp,
      title: "Maximisation des aides",
      description: "Notre expertise nous permet d'identifier toutes les aides cumulables auxquelles vous avez droit pour maximiser votre financement total.",
      duration: "Optimisation continue"
    },
    {
      icon: Home,
      title: "Coordination des travaux",
      description: "Une fois la subvention approuvée, nous coordonnons la réalisation des travaux avec nos équipes certifiées RBQ pour respecter toutes les exigences.",
      duration: "Selon l'ampleur"
    },
    {
      icon: DollarSign,
      title: "Assistance à la réception de la subvention",
      description: "Après les travaux, nous soumettons les documents finaux à Hydro-Québec et vous assistons jusqu'à la réception de votre chèque de subvention.",
      duration: "4-6 semaines après travaux"
    }
  ];

  const applicationProcess = [
    {
      icon: Users,
      title: "Consultation gratuite et évaluation à domicile",
      description: "Contactez-nous pour une consultation gratuite. Notre expert se déplace chez vous pour évaluer vos besoins et confirmer votre admissibilité.",
      duration: "Même jour - 3 jours"
    },
    {
      icon: CheckCircle,
      title: "Vérification de l'admissibilité",
      description: "Nous vérifions tous les critères d'admissibilité: type de propriété, année de construction, statut de propriétaire-occupant, client Hydro-Québec.",
      duration: "Immédiat"
    },
    {
      icon: Search,
      title: "Inspection énergétique (si requise)",
      description: "Si une évaluation énergétique est nécessaire, nous la planifions avec un évaluateur accrédité pour documenter l'état actuel de votre maison.",
      duration: "1-2 semaines"
    },
    {
      icon: FileText,
      title: "Préparation de la demande Logis Vert",
      description: "Notre équipe prépare votre dossier complet de demande de subvention avec tous les documents, photos, devis détaillé et formulaires requis.",
      duration: "2-3 jours"
    },
    {
      icon: DollarSign,
      title: "Soumission à Hydro-Québec",
      description: "Nous soumettons votre demande complète à Hydro-Québec et assurons un suivi rigoureux pour accélérer le traitement et l'approbation.",
      duration: "Traitement 4-8 semaines"
    },
    {
      icon: CheckCircle,
      title: "Approbation et autorisation",
      description: "Une fois votre demande approuvée par Hydro-Québec, vous recevez une autorisation officielle confirmant le montant de la subvention accordée.",
      duration: "Variable"
    },
    {
      icon: Home,
      title: "Réalisation des travaux",
      description: "Nos équipes certifiées RBQ réalisent les travaux d'isolation conformément aux normes Logis Vert et aux exigences d'Hydro-Québec.",
      duration: "1-5 jours selon ampleur"
    },
    {
      icon: DollarSign,
      title: "Inspection finale et réception de la subvention",
      description: "Après les travaux, inspection finale et soumission des documents de fin de chantier. Vous recevez votre chèque de subvention sous 4-6 semaines.",
      duration: "4-6 semaines"
    }
  ];

  const faqItems = [
    {
      question: "Quel est le montant maximum de subvention que je peux obtenir?",
      answer: "Jusqu'à 5 000$ selon le type de travaux et votre admissibilité. Par exemple: isolation grenier jusqu'à 2 000$, isolation murs jusqu'à 2 500$, isolation sous-sol jusqu'à 1 500$, thermopompe jusqu'à 5 000$. Vous pouvez combiner plusieurs types de travaux pour maximiser le montant total de subvention reçu."
    },
    {
      question: "Suis-je admissible au programme Logis Vert?",
      answer: "Si vous êtes propriétaire d'une maison unifamiliale construite avant 2012 au Québec, vous êtes probablement admissible. Les critères principaux sont: être propriétaire-occupant, résidence principale au Québec, client d'Hydro-Québec pour le chauffage, et maison construite avant 2012. Contactez-nous pour une vérification gratuite de votre admissibilité."
    },
    {
      question: "Combien de temps prend le processus de demande?",
      answer: "De 4 à 8 semaines généralement, de la soumission de la demande à l'approbation par Hydro-Québec. Notre accompagnement accélère ce processus en préparant un dossier complet et conforme dès le départ. Une fois approuvé, les travaux peuvent débuter immédiatement. La réception finale de la subvention prend 4-6 semaines après la fin des travaux."
    },
    {
      question: "Puis-je combiner plusieurs aides financières?",
      answer: "Oui! Vous pouvez combiner plusieurs types de travaux sous le programme Logis Vert: isolation grenier + murs + sous-sol, jusqu'à concurrence du maximum de 5 000$ pour les travaux d'isolation. Vous pouvez également cumuler avec d'autres programmes gouvernementaux comme Rénoclimat et les crédits d'impôt fédéraux pour maximiser votre aide totale."
    },
    {
      question: "Que se passe-t-il après l'approbation de ma demande?",
      answer: "Une fois votre demande approuvée par Hydro-Québec, vous recevez une autorisation officielle confirmant le montant de la subvention. Vous pouvez alors procéder aux travaux avec un entrepreneur certifié Logis Vert (notre entreprise). Nous gérons tout le suivi avec Hydro-Québec jusqu'à la réception finale de votre chèque de subvention après les travaux."
    },
    {
      question: "Y a-t-il des frais pour votre service d'accompagnement?",
      answer: "Non! Notre service d'accompagnement complet pour l'obtention des subventions est entièrement gratuit. Cela inclut: vérification d'admissibilité, préparation de tous les documents, soumission de la demande, suivi avec Hydro-Québec, et assistance jusqu'à la réception de la subvention. Vous ne payez que pour les travaux d'isolation réalisés."
    },
    {
      question: "Puis-je faire les travaux moi-même pour économiser?",
      answer: "Non, les travaux doivent être réalisés par un entrepreneur certifié Logis Vert pour être admissibles à la subvention. Cette certification garantit que les travaux respectent les normes d'efficacité énergétique requises et que la documentation nécessaire est fournie à Hydro-Québec. Notre entreprise détient toutes les certifications requises pour maximiser votre subvention."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Subventions Isolation Québec – Programme Logis Vert Hydro-Québec"
        description="Subventions Logis Vert Hydro-Québec pour isolation au Québec. Aides jusqu'à 5 000$. Accompagnement complet. Gestion administrative. Demandez votre subvention!"
        keywords="subvention isolation Québec, Logis Vert, aide financière rénovation, programme gouvernemental isolation, subvention Hydro-Québec, aide énergie, financement isolation, crédit impôt rénovation"
        canonical="https://isolationqc.com/aides-financieres"
      />

      <HeroSection 
        title="Subventions Isolation Québec – Programme Logis Vert Hydro-Québec"
        subtitle="Maximisez Vos Aides Financières"
        introText="Obtenez jusqu'à 5 000$ de subventions pour vos travaux d'isolation au Québec. Accompagnement GRATUIT pour toutes les démarches administratives. Expertise des programmes Logis Vert, Rénoclimat et crédits d'impôt."
        image="https://images.unsplash.com/photo-1625849490903-882527916c80"
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
              Subventions Logis Vert – Maximisez Vos Aides Financières
            </h2>
            <div className="space-y-4 text-[17px] text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                Réaliser des travaux d'isolation représente un investissement important, mais les <strong className="font-[600] text-[hsl(var(--primary))]">programmes de subventions gouvernementales et d'Hydro-Québec</strong> peuvent réduire considérablement vos coûts. En cumulant les différentes aides disponibles, vous pouvez obtenir <strong className="font-[600] text-[hsl(var(--primary))]">jusqu'à 5 000$ et plus</strong> en subventions directes pour vos travaux d'isolation.
              </p>
              <p>
                Le programme <strong className="font-[600] text-[hsl(var(--primary))]">Logis Vert d'Hydro-Québec</strong> est la principale aide financière pour l'isolation résidentielle au Québec, offrant des subventions substantielles pour l'isolation du grenier, des murs et du sous-sol. Le processus de demande peut sembler complexe, mais notre équipe d'experts vous accompagne gratuitement dans toutes les démarches administratives.
              </p>
              <p>
                Notre <strong className="font-[600] text-[hsl(var(--primary))]">service d'accompagnement complet</strong> inclut: vérification d'admissibilité, préparation de tous les documents, soumission de la demande, suivi rigoureux avec Hydro-Québec, et assistance jusqu'à la réception de votre chèque de subvention. Vous n'avez aucune démarche à faire – nous gérons tout le processus pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Logis Vert */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 mb-6 text-[hsl(var(--primary))]">
              Qu'est-ce que le Programme Logis Vert?
            </h2>
            <div className="space-y-4 text-[17px] text-[hsl(var(--foreground))] leading-relaxed">
              <p>
                Le <strong className="font-[600] text-[hsl(var(--primary))]">programme Logis Vert</strong> est une initiative majeure d'Hydro-Québec en partenariat avec le gouvernement du Québec visant à améliorer l'efficacité énergétique des résidences québécoises. Lancé pour encourager la réduction de la consommation d'énergie et des émissions de gaz à effet de serre, ce programme offre des subventions directes aux propriétaires qui réalisent des travaux d'isolation et de rénovation écoénergétique.
              </p>
              <p>
                L'objectif principal est de <strong className="font-[600] text-[hsl(var(--primary))]">réduire la consommation énergétique</strong> des ménages québécois tout en améliorant leur confort thermique. Le programme cible particulièrement les maisons construites avant 2012, qui présentent généralement une isolation insuffisante selon les normes actuelles. Les subventions sont versées directement aux propriétaires après la réalisation des travaux par un entrepreneur certifié.
              </p>
              <p>
                Pour être admissible, votre maison doit avoir été <strong className="font-[600] text-[hsl(var(--primary))]">construite avant 2012</strong>, vous devez être propriétaire-occupant, et les travaux doivent être réalisés par un entrepreneur certifié Logis Vert comme notre entreprise. Notre expertise du programme nous permet de maximiser le montant de subvention auquel vous avez droit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aid Types */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Aides Financières Disponibles
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Découvrez les différents types de subventions Logis Vert pour vos travaux d'isolation et d'efficacité énergétique au Québec.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aidTypesData.map((aid, index) => (
              <BenefitCard 
                key={index}
                icon={aid.icon}
                title={aid.title}
                description={aid.description}
                metric={aid.metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Conditions d'Admissibilité au Programme Logis Vert
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Vérifiez si vous remplissez les critères pour bénéficier des subventions Logis Vert d'Hydro-Québec.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <BenefitCard 
                key={index}
                icon={criteria.icon}
                title={criteria.title}
                description={criteria.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Support */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Notre Accompagnement Complet pour Vos Subventions
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Service gratuit de A à Z pour maximiser vos aides financières sans aucune démarche de votre part.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TimelineComponent steps={supportServices} />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-[hsl(var(--secondary))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Processus de Demande de Subvention en 8 Étapes
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              De votre premier contact à la réception de votre chèque de subvention, nous gérons tout le processus.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TimelineComponent steps={applicationProcess} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-4 text-[hsl(var(--primary))]">
              Questions Fréquentes sur les Subventions Logis Vert
            </h2>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))]">
              Réponses détaillées aux questions courantes sur l'obtention des aides financières pour l'isolation.
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
            Découvrez Vos Aides Financières Disponibles
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous gratuitement pour une évaluation d'admissibilité et découvrez combien vous pouvez économiser avec les subventions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Découvrez Vos Aides
            </Link>
            <Link 
              to="/inspection-gratuite"
              className="inline-flex items-center justify-center bg-white text-[hsl(var(--primary))] font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Vérifier l'Admissibilité
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AidesFinancieresPage;