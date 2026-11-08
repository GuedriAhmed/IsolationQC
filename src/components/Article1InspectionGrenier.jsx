
import React from 'react';
import BlogArticleTemplate from '@/components/BlogArticleTemplate';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { generateFAQSchema } from '@/lib/schemas';

const Article1InspectionGrenier = () => {
  const publishDate = '2024-03-20';
  const title = 'Inspection de grenier : pourquoi elle est essentielle tous les 10 ans au Québec';
  const description = 'Découvrez pourquoi une inspection de grenier professionnelle tous les 10 ans est cruciale au Québec. Signes à surveiller, économies d\'énergie, prévention de dommages coûteux.';
  const featuredImage = 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf';
  const imageAlt = 'Inspection de grenier Québec - professionnel avec caméra thermique';
  const canonical = 'https://isolationqc.com/blog/inspection-grenier-essentielle-10-ans-quebec';

  const tableOfContents = [
    { id: 'pourquoi-10-ans', title: 'Pourquoi inspecter tous les 10 ans ?' },
    { id: 'signes-inspection', title: 'Signes qu\'une inspection est nécessaire' },
    { id: 'benefices-inspection', title: 'Bénéfices d\'une inspection régulière' },
    { id: 'processus-inspection', title: 'Comment se déroule une inspection professionnelle' }
  ];

  const faqItems = [
    {
      question: "Pourquoi inspecter mon grenier tous les 10 ans ?",
      answer: "Les matériaux isolants se dégradent naturellement avec le temps. Au Québec, les cycles de gel-dégel, l'humidité et les variations de température extrêmes accélèrent cette détérioration. Une inspection décennale permet de détecter les problèmes avant qu'ils ne deviennent coûteux."
    },
    {
      question: "Combien coûte une inspection de grenier ?",
      answer: "Chez Isolation QC, nous offrons une inspection gratuite de votre grenier. Cette inspection complète inclut l'analyse thermique, l'évaluation de l'isolation existante, la détection d'humidité et un rapport détaillé avec recommandations."
    },
    {
      question: "Quels sont les signes qu'une inspection est nécessaire ?",
      answer: "Les signes principaux incluent : factures de chauffage élevées, pièces difficiles à chauffer, traces d'humidité au plafond, présence d'animaux nuisibles, condensation excessive ou isolation visiblement affaissée."
    }
  ];

  const relatedArticles = [
    {
      title: 'Moisissure dans le grenier : causes, dangers et solutions',
      excerpt: 'Apprenez à identifier les signes de moisissure dans votre grenier et découvrez les solutions de décontamination professionnelle.',
      image: 'https://images.unsplash.com/photo-1702092488232-77271dabe623?w=800&fm=webp&q=80',
      imageAlt: 'Moisissure et dommages d\'humidité dans le grenier',
      slug: '/blog/moisissure-grenier-causes-solutions'
    },
    {
      title: 'Pourquoi isoler son grenier au Québec est essentiel pour économiser',
      excerpt: 'Découvrez comment une isolation de grenier professionnelle peut réduire vos factures de chauffage de 25-30%.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf?w=800&fm=webp&q=80',
      imageAlt: 'Grenier bien isolé avec matériaux d\'isolation professionnels',
      slug: '/blog/isolation-grenier-quebec-economie-energie'
    }
  ];

  const schemas = [
    generateFAQSchema(faqItems)
  ];

  return (
    <BlogArticleTemplate
      title={title}
      description={description}
      canonical={canonical}
      featuredImage={featuredImage}
      imageAlt={imageAlt}
      publishDate={publishDate}
      readTime="8 min"
      tableOfContents={tableOfContents}
      relatedArticles={relatedArticles}
      schemas={schemas}
    >
      {/* Introduction */}
      <p className="text-[18px] leading-[1.8] text-[hsl(var(--foreground))] font-[500] mb-[32px]">
        Au Québec, votre grenier est soumis à des conditions climatiques extrêmes qui mettent à rude épreuve votre isolation et la structure de votre toiture. Une <strong>inspection de grenier professionnelle tous les 10 ans</strong> n'est pas un luxe, mais une nécessité pour maintenir l'efficacité énergétique de votre maison, prévenir des dommages structurels coûteux et garantir un environnement sain pour votre famille.
      </p>

      <p className="mb-[24px]">
        Les experts en rénovation résidentielle recommandent unanimement cette fréquence d'inspection pour plusieurs raisons critiques : la <strong>détérioration naturelle des matériaux isolants</strong>, l'impact des cycles climatiques québécois, et l'accumulation progressive de problèmes invisibles qui, non détectés, peuvent entraîner des réparations majeures. Une <Link to="/inspection-grenier-entre-toit" className="text-[hsl(var(--accent))] hover:underline font-[600]">inspection de grenier à Montréal, Laval ou ailleurs au Québec</Link> permet d'identifier précisément l'état de votre isolation et de planifier les améliorations nécessaires.
      </p>

      <p className="mb-[32px]">
        Dans cet article complet, nous explorons en profondeur pourquoi l'inspection décennale est essentielle, quels sont les signes révélateurs qu'une inspection est nécessaire avant même ce délai, les bénéfices concrets que vous en retirerez, et comment se déroule une inspection professionnelle moderne avec caméra thermique et équipement de pointe.
      </p>

      {/* CTA 1 */}
      <div className="bg-[hsl(var(--accent))]/10 border-l-4 border-[hsl(var(--accent))] p-[24px] md:p-[32px] rounded-[var(--radius)] mb-[48px]">
        <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px]">🔍 Inspection gratuite de votre grenier</h3>
        <p className="text-[16px] text-[hsl(var(--foreground))] mb-[20px]">
          Ne laissez pas les problèmes s'aggraver. Nos experts certifiés RBQ offrent une inspection complète gratuite avec rapport détaillé et recommandations personnalisées.
        </p>
        <Link 
          to="/inspection-gratuite" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Inspection gratuite
        </Link>
      </div>

      {/* Section 1 */}
      <h2 id="pourquoi-10-ans" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Pourquoi inspecter votre grenier tous les 10 ans au Québec ?
      </h2>

      <p className="mb-[24px]">
        La recommandation d'une inspection décennale repose sur des données scientifiques et l'expérience terrain de milliers de rénovations résidentielles. Voici les raisons fondamentales qui justifient cette périodicité :
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        1. Détérioration naturelle des matériaux isolants
      </h3>

      <p className="mb-[24px]">
        Les matériaux d'isolation, qu'il s'agisse de laine minérale, de cellulose soufflée ou de fibre de verre, subissent une dégradation progressive même dans des conditions optimales. La cellulose peut se tasser de <strong>15 à 20% en 10 ans</strong>, réduisant sa valeur R effective. La laine minérale peut s'affaisser sous son propre poids, créant des zones non protégées. Cette dégradation naturelle est inévitable et affecte directement la performance thermique de votre maison.
      </p>

      <p className="mb-[24px]">
        De plus, l'humidité résiduelle présente dans tout grenier peut, sur une décennie, altérer les propriétés isolantes des matériaux. Une isolation qui affichait R50 à l'installation peut se retrouver à R35 ou moins après 10 ans sans entretien, entraînant une <strong>augmentation de 20-30% de vos factures de chauffage</strong> sans que vous ne vous en rendiez compte immédiatement.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        2. Impact des conditions climatiques québécoises extrêmes
      </h3>

      <p className="mb-[24px]">
        Le climat québécois soumet votre grenier à des contraintes exceptionnelles. Les <strong>cycles de gel-dégel</strong> répétés (parfois plusieurs fois par semaine au printemps et à l'automne) créent des mouvements de dilatation et de contraction qui peuvent fissurer les matériaux, déplacer l'isolation et créer des ponts thermiques. En hiver, la différence de température entre l'intérieur chauffé (+21°C) et l'extérieur glacial (-25°C ou moins) crée une pression thermique énorme sur la structure.
      </p>

      <p className="mb-[24px]">
        Les tempêtes de neige abondantes surchargent la toiture, pouvant causer des affaissements structurels mineurs qui compromettent l'intégrité de l'isolation. L'été, la chaleur intense sous le toit (pouvant atteindre 65-70°C dans un grenier mal ventilé) accélère la dégradation des matériaux et favorise la condensation lors du refroidissement nocturne.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        3. Prévention de dommages structurels coûteux
      </h3>

      <p className="mb-[24px]">
        Une inspection décennale permet de détecter les problèmes naissants avant qu'ils ne se transforment en catastrophes financières. Une petite infiltration d'eau non détectée peut, en 10 ans, pourrir complètement une section de charpente, nécessitant des réparations de 15 000$ à 30 000$. La présence de moisissure localisée peut se propager à l'ensemble du grenier, rendant obligatoire une décontamination complète.
      </p>

      <p className="mb-[32px]">
        Les <strong>barrages de glace</strong> (ice dams) causés par une isolation insuffisante ou une ventilation inadéquate peuvent endommager les bardeaux, les gouttières et même infiltrer l'eau sous la membrane, créant des dégâts d'eau intérieurs importants. Une inspection permet d'identifier les zones à risque et de corriger les problèmes de ventilation ou d'isolation avant que les dommages ne surviennent. Pour en savoir plus sur nos <Link to="/services" className="text-[hsl(var(--accent))] hover:underline font-[600]">services d'inspection et d'isolation</Link>, consultez notre page dédiée.
      </p>

      {/* Section 2 */}
      <h2 id="signes-inspection" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        7 signes que votre grenier a besoin d'une inspection immédiate
      </h2>

      <p className="mb-[24px]">
        Bien que l'inspection décennale soit recommandée, certains signes avant-coureurs indiquent qu'une inspection est nécessaire avant ce délai. Soyez attentif aux symptômes suivants :
      </p>

      <div className="space-y-[24px] mb-[32px]">
        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">1. Augmentation inexpliquée des factures de chauffage</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Si vos factures Hydro-Québec ont augmenté de plus de 15% sans changement de tarif ou d'habitudes de consommation, c'est souvent le premier signe d'une perte d'efficacité de l'isolation. La chaleur s'échappe par le toit, obligeant votre système de chauffage à fonctionner en continu.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">2. Traces d'humidité ou de condensation au plafond</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Les taches jaunâtres, brunâtres ou les cernes au plafond du dernier étage sont des signes d'infiltration d'eau ou de condensation excessive dans le grenier. Cela indique généralement un problème de ventilation, d'isolation ou de toiture défaillante.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">3. Présence d'animaux nuisibles (écureuils, ratons laveurs)</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Si vous entendez des bruits de grattement ou de déplacement dans le grenier, des animaux se sont probablement installés. Ils peuvent détruire l'isolation, créer des ouvertures dans la structure et laisser des excréments contaminés qui nécessitent une décontamination professionnelle.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">4. Isolation visiblement affaissée ou compactée</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Si vous montez dans votre grenier et que l'isolation semble tassée, compactée ou qu'elle a perdu de son volume, sa performance thermique est compromise. Une isolation qui a perdu 30% de son épaisseur a perdu environ 30% de sa valeur R.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">5. Odeurs de moisi ou de renfermé</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Une odeur désagréable provenant du grenier ou perceptible dans les chambres du haut indique souvent la présence de moisissure due à l'humidité excessive. La moisissure dans le grenier représente un risque sérieux pour la santé respiratoire.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">6. Barrages de glace récurrents en hiver</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              La formation répétée de barrages de glace (glaçons massifs sur les rebords du toit) est un signe clair d'isolation insuffisante ou de ventilation inadéquate. La chaleur s'échappe par le toit, fait fondre la neige qui regèle ensuite au rebord froid.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">7. Pièces difficiles à chauffer malgré un système performant</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Si certaines pièces du haut restent froides en hiver ou surchauffent en été malgré un système de chauffage et de climatisation adéquat, c'est probablement dû à une isolation déficiente du grenier au-dessus de ces zones.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        Si vous observez l'un de ces signes, ne tardez pas à faire inspecter votre grenier. Plus tôt les problèmes sont détectés, moins les réparations seront coûteuses. Nos <Link to="/isolation-grenier" className="text-[hsl(var(--accent))] hover:underline font-[600]">services d'isolation de grenier au Québec</Link> incluent une inspection complète pour identifier tous les problèmes.
      </p>

      {/* CTA 2 */}
      <div className="bg-[hsl(var(--primary))] text-white p-[24px] md:p-[32px] rounded-[var(--radius-lg)] mb-[48px]">
        <h3 className="text-[20px] font-[700] mb-[16px] text-white">🏠 Découvrez l'état réel de votre grenier</h3>
        <p className="text-[16px] mb-[20px] text-white/90">
          Notre inspection thermique avec caméra infrarouge révèle tous les problèmes invisibles à l'œil nu : pertes de chaleur, ponts thermiques, infiltrations d'air, zones d'humidité.
        </p>
        <Link 
          to="/inspection-gratuite" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Inspection gratuite
        </Link>
      </div>

      {/* Section 3 */}
      <h2 id="benefices-inspection" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Les bénéfices concrets d'une inspection régulière de grenier
      </h2>

      <p className="mb-[24px]">
        Une inspection professionnelle de grenier tous les 10 ans n'est pas une dépense, mais un investissement rentable qui vous procure de multiples avantages tangibles :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[32px]">
        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <TrendingUp className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Économies d'énergie substantielles</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
            Corriger les problèmes d'isolation identifiés lors de l'inspection peut réduire vos factures de chauffage de <strong>20 à 30% annuellement</strong>. Pour une maison moyenne au Québec, cela représente des économies de 500$ à 800$ par an, soit 5 000$ à 8 000$ sur 10 ans.
          </p>
        </div>

        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <CheckCircle className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Prévention de réparations majeures</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
            Détecter une petite infiltration d'eau peut prévenir des dommages structurels catastrophiques. Une réparation précoce de 500$ peut éviter une reconstruction de charpente de 25 000$ dans quelques années.
          </p>
        </div>

        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <CheckCircle className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Confort thermique amélioré</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
            Corriger les zones sous-isolées élimine les courants d'air froids, les pièces difficiles à chauffer et les variations de température entre les étages. Votre maison devient uniformément confortable.
          </p>
        </div>

        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <CheckCircle className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Protection de la santé familiale</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
            Identifier et éliminer la moisissure, l'humidité excessive et les contaminants biologiques protège votre famille des allergies, de l'asthme et d'autres problèmes respiratoires sérieux.
          </p>
        </div>
      </div>

      <p className="mb-[24px]">
        De plus, une inspection régulière vous permet de planifier stratégiquement vos travaux de rénovation et de profiter des <strong>subventions gouvernementales disponibles</strong> comme le programme Logis Vert d'Hydro-Québec qui peut couvrir jusqu'à 5 000$ de vos travaux d'isolation. Le rapport d'inspection professionnelle est souvent requis pour l'obtention de ces aides financières.
      </p>

      <p className="mb-[32px]">
        Enfin, maintenir votre grenier en bon état augmente la valeur de revente de votre propriété. Les acheteurs potentiels accordent une grande importance à l'état de l'isolation et de la toiture, et un rapport d'inspection récent démontrant un grenier en excellent état est un argument de vente puissant. Pour améliorer également l'isolation de vos <Link to="/isolation-murs" className="text-[hsl(var(--accent))] hover:underline font-[600]">murs</Link> ou de votre <Link to="/isolation-sous-sol" className="text-[hsl(var(--accent))] hover:underline font-[600]">sous-sol</Link>, consultez nos services complets.
      </p>

      {/* Section 4 */}
      <h2 id="processus-inspection" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Comment se déroule une inspection professionnelle de grenier ?
      </h2>

      <p className="mb-[24px]">
        Une inspection de grenier professionnelle moderne est une procédure méthodique et approfondie qui utilise des technologies de pointe pour obtenir un diagnostic précis. Voici les étapes détaillées du processus :
      </p>

      <div className="space-y-[24px] mb-[32px]">
        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Consultation initiale et historique</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              L'inspecteur commence par discuter avec vous de l'historique de la maison, des problèmes observés, des travaux antérieurs et de vos préoccupations spécifiques. Cette conversation oriente l'inspection vers les zones prioritaires.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Inspection visuelle complète</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              L'inspecteur accède au grenier et examine visuellement tous les aspects : état de l'isolation (épaisseur, répartition, affaissement), présence d'humidité ou de moisissure, état de la charpente, traces d'infiltration d'eau, ventilation existante, présence d'animaux nuisibles ou de leurs excréments.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Analyse thermique avec caméra infrarouge</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Une caméra thermique FLIR professionnelle scanne l'ensemble du grenier pour détecter les pertes de chaleur invisibles à l'œil nu, les ponts thermiques, les infiltrations d'air et les zones d'isolation insuffisante. Cette technologie révèle les problèmes cachés avec une précision remarquable.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            4
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Mesures et évaluation de la performance</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              L'inspecteur mesure l'épaisseur de l'isolation dans différentes zones, calcule la valeur R actuelle, évalue l'efficacité du système de ventilation (soffites, évents de faîtage), et teste la présence d'humidité avec un hygromètre professionnel.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            5
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Documentation photographique détaillée</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Toutes les anomalies, déficiences et zones problématiques sont photographiées en haute résolution, incluant les images thermiques annotées qui montrent clairement les pertes de chaleur et les ponts thermiques.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            6
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Rapport d'inspection complet</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              Vous recevez un rapport détaillé incluant : photos annotées, description des problèmes identifiés, évaluation de leur gravité, recommandations priorisées de corrections, estimation des coûts, et calcul des économies d'énergie potentielles après travaux.
            </p>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="shrink-0 w-10 h-10 bg-[hsl(var(--accent))] rounded-full flex items-center justify-center text-white font-bold">
            7
          </div>
          <div>
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Présentation des solutions et devis</h3>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
              L'inspecteur vous présente les solutions recommandées, un devis détaillé pour les travaux nécessaires, et vous informe des subventions disponibles (Logis Vert, programmes municipaux) qui peuvent couvrir une partie importante des coûts.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        L'ensemble du processus d'inspection prend généralement entre 45 minutes et 1h30 selon la superficie et la complexité du grenier. Chez Isolation QC, nous offrons cette inspection complète <strong>gratuitement</strong> pour tous les propriétaires du Québec désireux d'améliorer leur isolation. Le rapport que vous recevez est également utilisable pour vos demandes de subventions gouvernementales.
      </p>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[#1e3a8a] text-white p-[32px] md:p-[40px] rounded-[var(--radius-lg)] mb-[32px]">
        <h3 className="text-[24px] md:text-[28px] font-[700] mb-[16px] text-white">✅ Réservez votre inspection gratuite maintenant</h3>
        <p className="text-[17px] mb-[24px] text-white/90 leading-relaxed">
          Ne laissez pas les problèmes d'isolation vous coûter des milliers de dollars en factures de chauffage et en réparations évitables. Nos experts certifiés RBQ réalisent une inspection complète de votre grenier avec caméra thermique et vous fournissent un rapport détaillé avec toutes les solutions adaptées à votre situation.
        </p>
        <Link 
          to="/inspection-gratuite" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Inspection gratuite
        </Link>
      </div>

      {/* Conclusion */}
      <h2 className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px]">
        Conclusion : l'inspection décennale, un investissement rentable
      </h2>

      <p className="mb-[24px]">
        L'inspection de grenier tous les 10 ans n'est pas une dépense superflue, mais un <strong>investissement stratégique</strong> qui protège votre patrimoine immobilier, réduit vos coûts énergétiques et garantit la santé de votre famille. Les conditions climatiques québécoises extrêmes accélèrent la détérioration des matériaux, rendant cette surveillance régulière absolument essentielle.
      </p>

      <p className="mb-[24px]">
        Les bénéfices concrets sont multiples et mesurables : <strong>économies de 20-30% sur les factures de chauffage</strong>, prévention de dommages structurels coûteux, amélioration du confort thermique, protection contre la moisissure et les problèmes de santé, et augmentation de la valeur de revente de votre propriété.
      </p>

      <p className="mb-[24px]">
        Avec les technologies modernes comme la caméra thermique infrarouge, l'inspection révèle des problèmes invisibles à l'œil nu et fournit un diagnostic précis qui permet de prioriser efficacement les travaux de rénovation. Le rapport d'inspection est également indispensable pour obtenir les subventions gouvernementales disponibles.
      </p>

      <p className="mb-[32px]">
        N'attendez pas l'apparition de problèmes visibles pour agir. Une inspection préventive permet d'intervenir avant que les dégâts ne s'aggravent et ne deviennent extrêmement coûteux. Contactez dès aujourd'hui Isolation QC pour bénéficier d'une <strong>inspection gratuite de votre grenier</strong> par nos experts certifiés. Investissez dans la protection et l'efficacité de votre maison dès maintenant.
      </p>
    </BlogArticleTemplate>
  );
};

export default Article1InspectionGrenier;
