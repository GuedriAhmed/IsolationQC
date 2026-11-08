
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { CheckCircle, DollarSign, FileText, Building2, Home, Wind, Eye, ClipboardCheck, ArrowLeft } from 'lucide-react';

const SubventionsIsolationPage = () => {
  const programmeLogisVert = [
    "Jusqu'à 5 000$ pour une rénovation complète avec isolation grenier, murs et sous-sol",
    "1 000$ à 2 000$ pour isolation du grenier seulement (selon superficie)",
    "500$ à 1 500$ pour isolation des murs",
    "300$ à 1 000$ pour isolation du sous-sol",
    "Subventions cumulables avec d'autres programmes fédéraux et municipaux",
    "Remboursement rapide après complétion des travaux certifiés"
  ];

  const travauxAdmissibles = [
    {
      icon: Home,
      title: "Isolation du Grenier",
      description: "Soufflage de cellulose pour atteindre R50+, amélioration de la ventilation"
    },
    {
      icon: Building2,
      title: "Isolation des Murs",
      description: "Injection d'isolant dans les cavités murales, panneaux isolants rigides"
    },
    {
      icon: Building2,
      title: "Isolation du Sous-Sol",
      description: "Isolation des murs de fondation, installation pare-vapeur, contrôle humidité"
    },
    {
      icon: Eye,
      title: "Portes et Fenêtres",
      description: "Remplacement par modèles certifiés ENERGY STAR avec haute performance thermique"
    },
    {
      icon: Wind,
      title: "Système de Ventilation",
      description: "Installation VRC/VRE pour améliorer qualité air et récupération chaleur"
    }
  ];

  const processusEtapes = [
    {
      number: "1",
      title: "Consultation Gratuite",
      description: "Évaluation de votre maison et vérification de votre admissibilité aux différents programmes de subventions disponibles."
    },
    {
      number: "2",
      title: "Évaluation Rénoclimat Pré-Travaux",
      description: "Un conseiller accrédité effectue l'évaluation énergétique initiale de votre maison, requise pour le programme Logis Vert."
    },
    {
      number: "3",
      title: "Préparation du Dossier",
      description: "Nous rassemblons tous les documents nécessaires, devis détaillés et formulaires requis pour votre demande de subvention."
    },
    {
      number: "4",
      title: "Soumission de la Demande",
      description: "Envoi de votre dossier complet à Hydro-Québec et autres programmes applicables. Nous gérons toute la correspondance."
    },
    {
      number: "5",
      title: "Approbation et Travaux",
      description: "Dès réception de l'approbation, nous planifions et réalisons vos travaux d'isolation selon les normes certifiées."
    },
    {
      number: "6",
      title: "Évaluation Post-Travaux et Remboursement",
      description: "Évaluation finale Rénoclimat confirmant les améliorations. Vous recevez votre remboursement sous 4 à 8 semaines."
    }
  ];

  const faqItems = [
    {
      question: "Suis-je admissible aux subventions Logis Vert?",
      answer: "Pour être admissible, vous devez être propriétaire d'une résidence unifamiliale ou d'un duplex construit avant 1990 et chauffé à l'électricité. La maison doit être votre résidence principale et située sur le territoire d'Hydro-Québec. Nous vérifions votre admissibilité gratuitement lors de la consultation initiale."
    },
    {
      question: "Quel est le montant maximal des subventions disponibles?",
      answer: "Le programme Logis Vert d'Hydro-Québec offre jusqu'à 5 000$ pour une rénovation complète incluant isolation grenier, murs et sous-sol. Ce montant peut être combiné avec d'autres aides fédérales et municipales pour atteindre des subventions totales de 7 000$ à 10 000$ selon votre situation."
    },
    {
      question: "Combien de temps faut-il pour recevoir les subventions?",
      answer: "Après la complétion de vos travaux et l'évaluation finale Rénoclimat, le remboursement d'Hydro-Québec est généralement versé dans un délai de 4 à 8 semaines. Notre équipe accélère ce processus en s'assurant que tous les documents sont complets et conformes dès le départ."
    },
    {
      question: "Que se passe-t-il si ma demande est approuvée?",
      answer: "Dès l'approbation de votre demande, nous planifions immédiatement vos travaux d'isolation. Vous pouvez également combiner les subventions avec nos options de financement flexible pour minimiser votre investissement initial et maximiser vos économies à long terme."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Subventions Isolation Québec – Programme Logis Vert Hydro-Québec 2024-2025"
        description="Subventions isolation Québec jusqu'à 5 000$. Programme Logis Vert Hydro-Québec. Accompagnement complet. Gestion administrative. Maximisez vos aides!"
        robots="index, follow"
        canonical="https://isolationqc.com/subventions-isolation-quebec"
        keywords="subvention isolation Québec, Logis Vert Hydro-Québec, aide isolation Québec, subvention grenier Québec, programme isolation Montréal, aide financière rénovation, subvention isolation Laval, subvention isolation Rive-Sud"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619089995839-93db82bf9bdf')] bg-cover bg-center opacity-10"></div>
        <div className="container-default relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-[800] mb-6 leading-[1.1] text-white">
              Subventions Isolation Québec – Programme Logis Vert Hydro-Québec 2024-2025
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8 max-w-3xl">
              Profitez des aides financières pouvant atteindre 5 000$ pour vos travaux d'isolation au Québec. Notre équipe gère toutes les démarches administratives pour maximiser vos subventions et faciliter la réalisation de votre projet.
            </p>
            <Link 
              to="/inspection-gratuite"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Inspection gratuite
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Services Button */}
      <section className="bg-white border-b border-[hsl(var(--border))]">
        <div className="container-default py-4">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 text-[hsl(var(--foreground-secondary))] hover:text-[hsl(var(--accent))] transition-colors text-[14px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
          >
            <ArrowLeft size={18} />
            Retour aux services
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
              Au Québec, plusieurs programmes de subventions sont disponibles pour encourager l'amélioration de l'efficacité énergétique des maisons. Le programme Logis Vert d'Hydro-Québec est le plus avantageux et accessible pour les propriétaires résidentiels souhaitant améliorer leur isolation.
            </p>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Notre expertise dans la gestion des demandes de subventions vous garantit d'obtenir le maximum d'aide financière disponible tout en simplifiant grandement le processus administratif. Nous nous occupons de tout, de l'évaluation initiale jusqu'au remboursement final.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Programme Logis Vert */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Programme Logis Vert Hydro-Québec
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Le programme Logis Vert d'Hydro-Québec offre une aide financière substantielle aux propriétaires qui améliorent l'efficacité énergétique de leur maison. Lancé en 2024, ce programme vise à réduire la consommation d'électricité et améliorer le confort des Québécois.
              </p>
              <ul className="space-y-3 mb-6">
                {programmeLogisVert.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Les critères principaux incluent: maison unifamiliale ou duplex, construction avant 1990, chauffage électrique, et résidence principale. Une évaluation Rénoclimat pré et post-travaux est requise.
              </p>
            </div>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf"
                alt="Subventions isolation Québec"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Autres programmes */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Autres Programmes et Aides Financières Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <DollarSign size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Programme Fédéral Canadien</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Le programme fédéral Maisons plus vertes offre jusqu'à 5 600$ supplémentaires pour des rénovations écoénergétiques, incluant l'isolation. Ces aides sont cumulables avec Logis Vert pour maximiser votre financement.
              </p>
            </div>
            <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <Building2 size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Programmes Municipaux</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Plusieurs villes comme Montréal, Laval et Québec offrent des programmes complémentaires d'aide à la rénovation résidentielle. Nous vérifions votre admissibilité à tous les programmes municipaux disponibles.
              </p>
            </div>
            <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <FileText size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Crédits d'Impôt</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Le crédit d'impôt provincial pour rénovation écoresponsable (RénoVert) peut s'ajouter aux subventions directes. Nous vous guidons pour maximiser vos avantages fiscaux lors de votre déclaration.
              </p>
            </div>
            <div className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <ClipboardCheck size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Autres Subventions Spécialisées</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Des aides additionnelles existent pour les personnes à revenus modestes, les aînés, et certaines zones géographiques. Notre équipe identifie toutes les aides applicables à votre situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Middle */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-[32px] md:text-[38px] font-[700] mb-6 text-white">
            Maximisez Vos Subventions Dès Maintenant
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts vous accompagne dans toutes les démarches pour obtenir le maximum d'aide financière disponible.
          </p>
          <Link 
            to="/inspection-gratuite"
            className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Inspection gratuite
          </Link>
        </div>
      </section>

      {/* Section 3: Travaux admissibles */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Travaux d'Isolation Admissibles aux Subventions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travauxAdmissibles.map((travail, index) => (
              <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] flex items-center justify-center mb-4">
                  <travail.icon size={28} className="text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{travail.title}</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  {travail.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mt-12 max-w-4xl mx-auto text-center">
            Tous ces travaux doivent être réalisés par des entrepreneurs certifiés RBQ et respecter les normes de performance énergétique établies. Notre équipe garantit la conformité totale de tous vos travaux pour assurer l'admissibilité aux subventions.
          </p>
        </div>
      </section>

      {/* Section 4: Critères admissibilité */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Critères d'Admissibilité aux Subventions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">Type de Propriété</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Maison unifamiliale ou duplex construit avant 1990 et situé sur le territoire d'Hydro-Québec. Doit être votre résidence principale.
                </p>
              </div>
              <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">Système de Chauffage</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Chauffage principal électrique (plinthes, air pulsé, planchers radiants). Les thermopompes et systèmes biénergie sont également admissibles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">Évaluation Énergétique</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Une évaluation Rénoclimat pré-travaux et post-travaux est obligatoire. Nous coordonnons ces évaluations avec des conseillers accrédités.
                </p>
              </div>
              <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">Travaux Conformes</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  Tous les travaux doivent respecter le Code de construction du Québec et être réalisés par des entrepreneurs certifiés RBQ comme notre équipe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Notre accompagnement */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1625849490903-882527916c80"
                alt="Financement isolation"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Notre Accompagnement Complet
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                Naviguer dans les programmes de subventions peut être complexe et fastidieux. C'est pourquoi nous gérons l'ensemble du processus administratif pour vous, de A à Z, garantissant que vous obtenez le maximum d'aide financière disponible sans stress ni complications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Évaluation d'Admissibilité:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Vérification gratuite de votre éligibilité à tous les programmes disponibles</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Préparation Complète du Dossier:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Rassemblement de tous les documents, formulaires et pièces justificatives</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Coordination Rénoclimat:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Organisation des évaluations pré et post-travaux avec conseillers certifiés</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Soumission et Suivi:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Envoi de votre demande et communication continue avec Hydro-Québec</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Gestion Administrative Complète:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Nous nous occupons de toute la paperasse jusqu'au remboursement final</span>
                  </div>
                </li>
              </ul>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mt-6">
                Nous combinons également les subventions avec nos <Link to="/financement-isolation" className="text-[hsl(var(--accent))] hover:underline">options de financement flexible</Link> pour minimiser votre investissement initial. Utilisez notre <Link to="/calcul-economies-energie" className="text-[hsl(var(--accent))] hover:underline">calculateur d'économies</Link> pour voir votre retour sur investissement exact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Processus étape par étape */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Processus de Demande Étape par Étape
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processusEtapes.map((etape, index) => (
              <div key={index} className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] relative">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold text-[20px] shadow-lg">
                  {etape.number}
                </div>
                <div className="pt-6">
                  <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{etape.title}</h3>
                  <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: FAQ */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Questions Fréquentes sur les Subventions
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
            Commencez à Économiser Dès Aujourd'hui
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Profitez de notre expertise pour maximiser vos subventions et réaliser vos travaux d'isolation sans stress administratif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/inspection-gratuite"
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Inspection gratuite
            </Link>
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

export default SubventionsIsolationPage;
