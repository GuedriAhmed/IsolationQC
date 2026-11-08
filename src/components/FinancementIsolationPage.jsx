
import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';
import { CheckCircle, CreditCard, DollarSign, Clock, Shield, TrendingUp, FileText, Zap } from 'lucide-react';

const FinancementIsolationPage = () => {
  const breadcrumbs = [
    { label: 'Accueil', url: '/' },
    { label: 'Services', url: '/services' },
    { label: 'Financement Isolation', url: '/financement-isolation' }
  ];

  const scrollToQuoteForm = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const caracteristiques = [
    {
      icon: CreditCard,
      title: "Paiements Mensuels Flexibles",
      description: "Choisissez la durée de remboursement qui convient à votre budget: 12, 24, 36, 48 ou 60 mois. Adaptez vos paiements selon vos capacités financières."
    },
    {
      icon: Clock,
      title: "Approbation Rapide 24-48h",
      description: "Processus d'approbation accéléré. La plupart des demandes sont approuvées en moins de 24 heures pour que vous puissiez démarrer vos travaux rapidement."
    },
    {
      icon: DollarSign,
      title: "Taux Compétitifs",
      description: "Profitez de taux d'intérêt avantageux grâce à nos partenariats avec des institutions financières spécialisées en rénovation écoénergétique."
    },
    {
      icon: Shield,
      title: "Aucun Frais Caché",
      description: "Transparence totale sur tous les frais. Ce que vous voyez est ce que vous payez, sans mauvaises surprises ni frais cachés."
    },
    {
      icon: FileText,
      title: "Processus Simple",
      description: "Demande en ligne facile, documentation minimale requise. Nous vous guidons à chaque étape pour simplifier au maximum le processus."
    },
    {
      icon: Zap,
      title: "Aucun Paiement Pendant Travaux",
      description: "Commencez à rembourser seulement après la complétion de vos travaux d'isolation. Profitez de cette période de grâce pour planifier votre budget."
    }
  ];

  const exemplesPaiements = [
    {
      projet: "Projet Standard",
      montant: "5 000$",
      duree: "60 mois",
      paiement: "105$/mois*",
      description: "Isolation complète du grenier avec cellulose R50"
    },
    {
      projet: "Projet Confort",
      montant: "10 000$",
      duree: "60 mois",
      paiement: "210$/mois*",
      description: "Isolation grenier + isolation des murs extérieurs"
    },
    {
      projet: "Projet Performance",
      montant: "15 000$",
      duree: "60 mois",
      paiement: "315$/mois*",
      description: "Isolation complète: grenier, murs et sous-sol"
    }
  ];

  const processusApprobation = [
    {
      etape: "1",
      title: "Demande de Financement",
      description: "Remplissez notre formulaire en ligne simple ou contactez-nous par téléphone. Nous évaluons vos besoins et votre projet d'isolation."
    },
    {
      etape: "2",
      title: "Évaluation de Crédit",
      description: "Vérification rapide de votre crédit et de votre capacité de remboursement. Nous travaillons avec plusieurs partenaires pour maximiser vos chances d'approbation."
    },
    {
      etape: "3",
      title: "Approbation Conditionnelle",
      description: "Réception de votre approbation conditionnelle dans les 24-48 heures avec le montant approuvé et les conditions de financement."
    },
    {
      etape: "4",
      title: "Signature du Contrat",
      description: "Signature électronique simple et sécurisée du contrat de financement. Lecture et acceptation des termes et conditions."
    },
    {
      etape: "5",
      title: "Réalisation des Travaux",
      description: "Nos équipes certifiées procèdent à l'installation de votre isolation selon les normes les plus élevées. Aucun paiement requis pendant cette période."
    },
    {
      etape: "6",
      title: "Début des Paiements",
      description: "Vos paiements mensuels débutent après la complétion des travaux. Vous commencez simultanément à économiser sur vos factures de chauffage!"
    }
  ];

  const avantages = [
    "Accessibilité pour tous les budgets, même limités",
    "Flexibilité totale dans le choix de la durée de remboursement",
    "Rapidité d'approbation pour démarrer vos travaux sans délai",
    "Simplicité du processus de demande et documentation minimale",
    "Économies d'énergie immédiates qui compensent les paiements mensuels",
    "Possibilité de combiner avec les subventions pour réduire le montant financé"
  ];

  const faqItems = [
    {
      question: "Quels sont les critères d'approbation pour le financement?",
      answer: "Les critères principaux incluent: un historique de crédit raisonnable (pas nécessairement parfait), un revenu stable démontrable, et la capacité de rembourser les paiements mensuels. Nous travaillons avec plusieurs partenaires financiers pour maximiser vos chances d'approbation, même avec un crédit imparfait. L'approbation tient également compte de la valeur ajoutée à votre propriété par les travaux d'isolation."
    },
    {
      question: "Quel est le délai pour obtenir une approbation?",
      answer: "La plupart des demandes reçoivent une réponse dans les 24 heures. Dans certains cas plus complexes, le délai peut s'étendre à 48 heures. Dès réception de votre approbation, nous pouvons planifier vos travaux immédiatement. Notre processus accéléré vous permet de commencer à économiser sur vos factures de chauffage le plus rapidement possible."
    },
    {
      question: "Quels sont les taux d'intérêt applicables?",
      answer: "Les taux d'intérêt varient généralement entre 6,9% et 12,9% selon votre profil de crédit, le montant financé et la durée du prêt. Grâce à nos partenariats avec des institutions spécialisées en rénovation écoénergétique, nous obtenons des taux plus avantageux que les prêts personnels traditionnels. Nous vous présentons toujours plusieurs options pour que vous choisissiez celle qui convient le mieux à votre situation."
    },
    {
      question: "Puis-je rembourser mon prêt par anticipation sans pénalité?",
      answer: "Absolument! La plupart de nos options de financement permettent le remboursement anticipé sans aucune pénalité. Si vous recevez vos subventions Logis Vert ou si votre situation financière s'améliore, vous pouvez rembourser le solde à tout moment. Cette flexibilité vous permet d'économiser sur les intérêts futurs et de devenir propriétaire de votre amélioration énergétique plus rapidement."
    }
  ];

  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Financement Isolation – Solutions Flexibles au Québec"
        description="Financement isolation Québec. Solutions flexibles et accessibles. Paiements mensuels. Approbation rapide. Réalisez vos travaux d'isolation maintenant!"
        robots="index, follow"
        canonical="https://isolationqc.com/financement-isolation"
        keywords="financement isolation Québec, financement rénovation Québec, paiement isolation, financement grenier, financement isolation Montréal, financement isolation Laval, financement isolation Rive-Sud, crédit rénovation"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625849490903-882527916c80')] bg-cover bg-center opacity-10"></div>
        <div className="container-default relative z-10">
          <BreadcrumbNav items={breadcrumbs} className="mb-8" />
          
          <div className="max-w-4xl">
            <h1 className="text-[42px] sm:text-[52px] md:text-[60px] font-[800] mb-6 leading-[1.1] text-white">
              Financement Isolation – Solutions Flexibles au Québec
            </h1>
            <p className="text-[18px] md:text-[20px] text-white/90 leading-relaxed mb-8 max-w-3xl">
              Rendez vos projets d'isolation accessibles et abordables avec nos solutions de financement flexibles. Paiements mensuels adaptés à votre budget, approbation rapide et aucun paiement pendant les travaux. Commencez à économiser dès maintenant!
            </p>
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Demandez votre financement
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
              L'efficacité énergétique ne devrait jamais être compromise par des contraintes budgétaires. C'est pourquoi nous offrons des solutions de financement flexibles et accessibles qui permettent à tous les propriétaires québécois d'améliorer l'isolation de leur maison, peu importe leur situation financière actuelle.
            </p>
            <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Nos options de financement sont spécialement conçues pour les projets de rénovation écoénergétique, offrant des taux compétitifs et des conditions avantageuses. Vous commencez à économiser sur vos factures de chauffage immédiatement, souvent avant même de commencer vos remboursements mensuels.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Pourquoi financer */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Pourquoi Financer Vos Travaux d'Isolation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <TrendingUp size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Réaliser Vos Travaux Immédiatement</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Ne reportez pas vos travaux d'isolation à plus tard. Le financement vous permet de procéder maintenant et de bénéficier immédiatement des économies d'énergie, du confort amélioré et de la protection contre les dommages causés par l'humidité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <DollarSign size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Les Économies Commencent Tout de Suite</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Vos économies d'énergie débutent dès la complétion des travaux. Dans de nombreux cas, la réduction de votre facture Hydro-Québec compense partiellement ou totalement vos paiements mensuels de financement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <CreditCard size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Paiements Mensuels Abordables</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Étalez le coût de vos travaux sur 12 à 60 mois selon votre budget. Des paiements aussi bas que 100$ par mois peuvent financer des projets d'isolation majeurs qui transformeront le confort de votre maison.
              </p>
            </div>
            <div className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
              <Shield size={32} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-4">Amélioration du Confort Immédiate</h3>
              <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Pourquoi souffrir un autre hiver froid ou un autre été étouffant? Le financement vous permet d'améliorer votre confort familial sans attendre d'avoir accumulé tout le montant nécessaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Caractéristiques */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Caractéristiques de Notre Financement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caracteristiques.map((item, index) => (
              <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[hsl(var(--accent))]/10 rounded-[var(--radius)] flex items-center justify-center mb-4">
                  <item.icon size={28} className="text-[hsl(var(--accent))]" />
                </div>
                <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-3">{item.title}</h3>
                <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Exemples paiements */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Exemples de Paiements Mensuels
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-8">
                Voici des exemples de paiements mensuels pour différents types de projets d'isolation. Les montants réels peuvent varier selon votre situation de crédit et la durée choisie.
              </p>
              <div className="space-y-6">
                {exemplesPaiements.map((exemple, index) => (
                  <div key={index} className="bg-white p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">{exemple.projet}</h3>
                      <div className="text-[24px] font-[800] text-[hsl(var(--accent))]">{exemple.paiement}</div>
                    </div>
                    <p className="text-[14px] text-[hsl(var(--foreground-secondary))] mb-2">
                      Montant financé: {exemple.montant} sur {exemple.duree}
                    </p>
                    <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                      {exemple.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-[hsl(var(--foreground-secondary))] mt-6 italic">
                * Exemples à titre indicatif seulement. Taux d'intérêt moyen de 9,9%. Les taux réels varient selon le profil de crédit.
              </p>
            </div>
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1625849490903-882527916c80"
                alt="Options financement et paiements mensuels flexibles"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Middle */}
      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-[32px] md:text-[38px] font-[700] mb-6 text-white">
            Démarrez Votre Projet Sans Délai
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Obtenez une approbation de financement rapide et commencez à améliorer votre maison dès maintenant.
          </p>
          <button 
            onClick={scrollToQuoteForm}
            className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Demandez votre financement
          </button>
        </div>
      </section>

      {/* Section 5: Processus approbation */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
            Processus d'Approbation Simple et Rapide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processusApprobation.map((etape, index) => (
              <div key={index} className="bg-[hsl(var(--background))] p-6 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] relative">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold text-[20px] shadow-lg">
                  {etape.etape}
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

      {/* Section 6: Combiner financement + subventions */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden shadow-xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="Bureau avec documents financement et options paiement"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-6 leading-[1.2]">
                Combinez Financement et Subventions
              </h2>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-6">
                La stratégie la plus avantageuse consiste à combiner nos solutions de financement avec les <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline">subventions Logis Vert</Link> et autres aides gouvernementales. Cette approche maximise vos bénéfices financiers.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Maximiser les Aides Financières:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Profitez jusqu'à 5 000$ de subventions Logis Vert pour réduire votre investissement initial</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Réduire le Montant Financé:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Les subventions diminuent le montant que vous devez financer, réduisant vos paiements mensuels</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Diminuer les Paiements Mensuels:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Un montant financé plus bas signifie des paiements mensuels plus abordables</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[hsl(var(--primary))]">Améliorer le ROI:</strong>
                    <span className="text-[15px] text-[hsl(var(--foreground-secondary))]"> Avec moins d'argent investi, votre retour sur investissement est accéléré significativement</span>
                  </div>
                </li>
              </ul>
              <p className="text-[17px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                Notre équipe coordonne l'ensemble du processus: financement, demandes de subventions et travaux. Utilisez notre <Link to="/calcul-economies-energie" className="text-[hsl(var(--accent))] hover:underline">calculateur d'économies</Link> pour voir exactement combien vous économiserez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Avantages */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Avantages du Financement pour Vos Travaux
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start gap-3 bg-[hsl(var(--background))] p-5 rounded-[var(--radius-lg)] border border-[hsl(var(--border))]">
                  <CheckCircle size={20} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
                    {avantage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section-padding bg-[hsl(var(--background))]">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-[hsl(var(--primary))] mb-12 text-center">
              Questions Fréquentes sur le Financement
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
            Réalisez Vos Travaux Maintenant, Payez Plus Tard
          </h2>
          <p className="text-[18px] text-white/90 mb-8 max-w-2xl mx-auto">
            Profitez de nos solutions de financement flexibles pour améliorer votre confort et commencer à économiser dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToQuoteForm}
              className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-8 py-4 rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Demandez votre financement
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

export default FinancementIsolationPage;
