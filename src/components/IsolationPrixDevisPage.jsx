import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from './SEOHead';
import JSONLDSchema from './JSONLDSchema';
import BreadcrumbNav from './BreadcrumbNav';
import QuoteForm from './QuoteForm';
import { Calculator, DollarSign, PiggyBank, CheckCircle2 } from 'lucide-react';

const IsolationPrixDevisPage = () => {
  const faqData = {
    questions: [
      {
        question: "Est-ce que l'inspection pour un devis d'isolation est gratuite?",
        answer: "Oui, notre évaluation complète incluant l'inspection de votre grenier, la vérification de l'isolant actuel, de la ventilation et le devis détaillé est 100% gratuite et sans obligation."
      },
      {
        question: "Qu'est-ce qui influence le prix pour isoler un grenier?",
        answer: "Les principaux facteurs sont : la superficie en pieds carrés, la quantité et le type d'isolant à ajouter (cellulose vs uréthane), l'état de l'isolant existant (nécessité de décontamination ou de retrait), et l'ajout de déflecteurs pour la ventilation."
      },
      {
        question: "En combien de temps mon investissement sera-t-il rentabilisé?",
        answer: "En général, les économies d'énergie générées (jusqu'à 30% sur le chauffage) permettent un retour sur investissement en 3 à 5 ans, surtout avec les subventions disponibles actuellement."
      },
      {
        question: "Comment puis-je obtenir les subventions pour l'isolation?",
        answer: "Il faut généralement participer à un programme comme Rénoclimat. Vous devez faire évaluer votre maison avant et après les travaux. Nous vous guiderons étape par étape dans ce processus pour maximiser vos retours financiers."
      },
      {
        question: "Pourquoi le prix de l'isolation d'un toit cathédrale est-il plus élevé?",
        answer: "Un toit cathédrale nécessite l'utilisation d'uréthane giclé à haute performance, qui est un matériau plus coûteux que la cellulose. De plus, l'accès restreint demande des techniques d'application plus complexes."
      }
    ]
  };

  const breadcrumbs = [
    { label: 'Prix et Devis', url: '/isolation-prix-devis' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead 
        title="Isolation Grenier & Toit: Prix et Devis Gratuit"
        description="Découvrez les prix d'isolation grenier et toit. Devis gratuit en 24h. Isolation R50 certifiée. Économisez jusqu'à 30%."
        canonicalUrl="/isolation-prix-devis"
        keywords="isoler un grenier prix, isolation entretoit prix, isolation grenier r50"
        ogImage="https://images.unsplash.com/photo-1625849490903-882527916c80?w=1200&q=80"
      />
      
      <JSONLDSchema type="Service" data={{
        "name": "Estimation et Devis d'Isolation",
        "description": "Services d'estimation gratuite pour l'isolation de grenier et de toiture.",
        "areaServed": "Quebec"
      }} />
      <JSONLDSchema type="FAQ" data={faqData} />
      <JSONLDSchema type="BreadcrumbList" data={{ items: breadcrumbs }} />

      <Header />
      <BreadcrumbNav items={breadcrumbs} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6 text-slate-900 text-balance">
              Prix Isolation Grenier et Toit - Devis Gratuit
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed text-balance">
              Investir dans une isolation R50 de qualité est le meilleur moyen de réduire vos factures d'énergie. Obtenez une estimation claire, détaillée et sans frais cachés pour isoler votre maison de manière optimale. 
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-8 prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-primary-600">
                
                <h2>Isoler un Grenier: Prix Moyen</h2>
                <p>
                  Lorsque l'on cherche <strong>isoler un grenier prix</strong>, il est important de comprendre que l'investissement initial se rentabilise rapidement. En moyenne, l'isolation complète d'un grenier standard (par ajout de cellulose soufflée pour atteindre R50) coûte entre <strong>1.50$ et 3.00$ le pied carré</strong>.
                </p>
                <p>
                  Pour une maison moyenne de 1000 pieds carrés, le budget d'isolation de base oscille généralement entre 1 500$ et 3 000$. À cela, il faut soustraire les subventions potentielles qui allègent la facture.
                </p>

                <img 
                  src="https://images.unsplash.com/photo-1619089995839-93db82bf9bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="isolation grenier prix m2" 
                  className="rounded-2xl shadow-md my-10 w-full"
                />

                <h2>Isolation Entretoit Prix: Coûts Détaillés</h2>
                <p>
                  Outre le soufflage d'isolant, un devis d'<strong>isolation entretoit prix</strong> peut inclure divers travaux essentiels pour garantir l'efficacité de l'isolation :
                </p>
                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-slate-200 not-prose">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 p-3 text-left font-bold">Type d'intervention</th>
                        <th className="border border-slate-200 p-3 text-left font-bold">Prix indicatif (Moyenne)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 p-3">Ajout de cellulose (pour atteindre <strong>isolation grenier R50</strong>)</td>
                        <td className="border border-slate-200 p-3">1.50$ - 2.50$ / pi.ca.</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">Pose de déflecteurs d'air (ventilation)</td>
                        <td className="border border-slate-200 p-3">5$ - 8$ par unité</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 p-3">Isolation par uréthane (Toit cathédrale)</td>
                        <td className="border border-slate-200 p-3">3.50$ - 6.00$ / pi.ca.</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 p-3">Retrait d'ancien isolant contaminé</td>
                        <td className="border border-slate-200 p-3">1.00$ - 2.50$ / pi.ca.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 italic mt-2">
                  *Ces tarifs sont indicatifs et dépendent de la complexité de l'accès et des prix des matériaux du marché. Un devis officiel est nécessaire.
                </p>

                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-10 rounded-r-xl">
                  <h3 className="text-xl font-bold text-slate-900 mt-0 mb-2">Facteurs Affectant le Prix</h3>
                  <ul className="mb-0">
                    <li><strong>La surface totale à couvrir :</strong> De plus grands volumes diminuent souvent le coût au pied carré.</li>
                    <li><strong>Le matériau choisi :</strong> Cellulose recyclée (plus abordable) vs uréthane giclé (plus coûteux mais plus isolant au pouce).</li>
                    <li><strong>L'accessibilité de l'entretoit :</strong> Un grenier très bas ou difficile d'accès allonge le temps de travail.</li>
                    <li><strong>Travaux préparatoires :</strong> Colmatage de fuites d'air, isolation de trappe d'accès, installation de boîtes encastrées pour lumières.</li>
                  </ul>
                </div>

                <h2>Économies Réalisées avec Isolation R50</h2>
                <p>
                  Bien que le coût initial soit une considération importante, l'isolation est l'une des seules rénovations qui "se paie d'elle-même". Une <strong>isolation grenier r50</strong> performante peut réduire vos coûts de chauffage et de climatisation jusqu'à 30%. Si votre facture annuelle est de 2 500$, c'reprèsente des économies potentielles de 750$ par an.
                </p>

                <img 
                  src="https://images.unsplash.com/photo-1625849490903-882527916c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="économies isolation r50" 
                  className="rounded-2xl shadow-md my-10 w-full"
                />

                <hr className="my-12 border-slate-200" />

                <h2>FAQ - Prix et Devis</h2>
                <div className="space-y-6 not-prose">
                  {faqData.questions.map((faq, index) => (
                    <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-start gap-3">
                        <span className="text-primary-600 mt-1"><CheckCircle2 size={20} /></span>
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 pl-8">{faq.answer}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Sticky Form */}
              <div className="lg:col-span-4">
                <div className="sticky top-28" id="devis">
                  <div className="mb-6 bg-gradient-to-br from-primary-900 to-slate-900 text-white rounded-2xl p-8 shadow-xl">
                    <h4 className="font-bold font-heading text-2xl mb-4 flex items-center gap-3">
                      <PiggyBank className="text-primary-400 w-8 h-8" />
                      Subventions
                    </h4>
                    <p className="text-slate-300 mb-6 text-sm">
                      Nos experts vous aident à maximiser vos subventions gouvernementales. Obtenez de l'aide financière pour vos travaux d'isolation R50!
                    </p>
                    <div className="flex items-center gap-2 text-primary-300 font-bold bg-white/10 p-3 rounded-lg">
                      <DollarSign size={20} /> Aide jusqu'à des centaines de dollars
                    </div>
                  </div>
                  
                  <QuoteForm defaultService="Grenier" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IsolationPrixDevisPage;