
import React from 'react';
import BlogArticleTemplate from '@/components/BlogArticleTemplate';
import { Link } from 'react-router-dom';
import { DollarSign, AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react';
import { generateFAQSchema } from '@/lib/schemas';

const Article4FactureHydro = () => {
  const publishDate = '2024-03-25';
  const title = 'Pourquoi votre facture Hydro est trop élevée (et comment y remédier)';
  const description = 'Découvrez les causes principales de factures Hydro élevées au Québec et les solutions concrètes pour réduire votre consommation de 20-30%. Isolation, étanchéité, subventions disponibles.';
  const featuredImage = 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf';
  const imageAlt = 'Facture Hydro élevée - couple cherchant solutions économies énergie';
  const canonical = 'https://isolationqc.com/blog/facture-hydro-elevee-solutions';

  const tableOfContents = [
    { id: 'causes-factures', title: 'Causes principales des factures élevées' },
    { id: 'identifier-pertes', title: 'Comment identifier vos pertes d\'énergie' },
    { id: 'solutions-reduire', title: 'Solutions pour réduire vos factures' },
    { id: 'economies-roi', title: 'Économies réalistes et retour sur investissement' }
  ];

  const faqItems = [
    {
      question: "Quelle est la facture Hydro moyenne au Québec ?",
      answer: "La facture mensuelle moyenne au Québec est d'environ 100$ à 150$ pour une maison unifamiliale de taille moyenne (1500 pi²). Si votre facture dépasse régulièrement 200$ par mois, il y a probablement des problèmes d'isolation ou d'étanchéité."
    },
    {
      question: "Combien puis-je économiser en améliorant mon isolation ?",
      answer: "En améliorant l'isolation du grenier, des murs et du sous-sol, vous pouvez réduire vos factures de chauffage de 20 à 30% en moyenne. Pour une maison avec des factures de 200$ par mois, cela représente des économies de 480$ à 720$ par année."
    },
    {
      question: "Quelles subventions sont disponibles pour améliorer mon isolation ?",
      answer: "Le programme Logis Vert d'Hydro-Québec offre jusqu'à 5 000$ pour une rénovation complète incluant isolation grenier, murs et sous-sol. Des programmes fédéraux et municipaux complémentaires peuvent porter le total des aides à 7 000$ - 10 000$."
    }
  ];

  const relatedArticles = [
    {
      title: 'Comment savoir si votre maison est mal isolée ? (7 signes à vérifier)',
      excerpt: 'Identifiez les 7 signes révélateurs d\'une isolation déficiente et découvrez comment améliorer l\'efficacité énergétique de votre maison.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Maison mal isolée - signes perte de chaleur et infiltrations',
      slug: '/blog/maison-mal-isolee-7-signes'
    },
    {
      title: 'Inspection de grenier : pourquoi elle est essentielle tous les 10 ans',
      excerpt: 'Découvrez pourquoi une inspection de grenier professionnelle tous les 10 ans est cruciale pour maintenir l\'efficacité énergétique.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Inspection de grenier Québec - professionnel avec caméra thermique',
      slug: '/blog/inspection-grenier-essentielle-10-ans-quebec'
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
      readTime="9 min"
      tableOfContents={tableOfContents}
      relatedArticles={relatedArticles}
      schemas={schemas}
    >
      {/* Introduction */}
      <p className="text-[18px] leading-[1.8] text-[hsl(var(--foreground))] font-[500] mb-[32px]">
        Vous ouvrez votre facture Hydro-Québec chaque mois et vous vous demandez pourquoi elle est si élevée ? Vous n'êtes pas seul. De nombreux propriétaires québécois paient des <strong>factures de chauffage excessives</strong> sans comprendre la cause réelle de cette surconsommation. La bonne nouvelle : dans la plupart des cas, ces factures élevées sont causées par des problèmes identifiables et corrigeables qui, une fois résolus, peuvent réduire vos coûts énergétiques de <strong>20 à 30% annuellement</strong>.
      </p>

      <p className="mb-[24px]">
        Au Québec, où les hivers rigoureux exigent un chauffage intensif pendant 6 mois par an, une maison mal isolée ou présentant des problèmes d'étanchéité devient un véritable gouffre énergétique. Votre système de chauffage fonctionne en continu pour compenser les <strong>pertes de chaleur massives</strong> par le toit, les murs, le sous-sol et les infiltrations d'air, faisant grimper votre facture sans améliorer réellement votre confort.
      </p>

      <p className="mb-[32px]">
        Dans cet article complet, nous identifions les causes principales des factures Hydro élevées, vous montrons comment détecter précisément vos pertes d'énergie, et vous présentons les solutions concrètes qui permettent de réduire durablement vos coûts de chauffage tout en améliorant le confort de votre maison. Nous aborderons également les <strong>subventions gouvernementales disponibles</strong> qui peuvent couvrir jusqu'à 50% de vos travaux d'amélioration énergétique.
      </p>

      {/* CTA 1 */}
      <div className="bg-[hsl(var(--accent))]/10 border-l-4 border-[hsl(var(--accent))] p-[24px] md:p-[32px] rounded-[var(--radius)] mb-[48px]">
        <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px]">🔍 Diagnostic énergétique gratuit de votre maison</h3>
        <p className="text-[16px] text-[hsl(var(--foreground))] mb-[20px]">
          Nos experts identifient gratuitement toutes les sources de pertes d'énergie dans votre maison avec caméra thermique et vous fournissent un plan d'action personnalisé pour réduire vos factures.
        </p>
        <Link 
          to="/devis-et-prix" 
          className="inline-flex items-center justify-center bg-[hsl(var(--primary))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[hsl(var(--primary))]/90 transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Devis gratuite
        </Link>
      </div>

      {/* Section 1 */}
      <h2 id="causes-factures" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Les 5 causes principales de factures Hydro élevées au Québec
      </h2>

      <p className="mb-[24px]">
        Avant de pouvoir réduire vos factures, il est essentiel de comprendre d'où proviennent ces coûts excessifs. Voici les cinq causes les plus fréquentes et les plus impactantes sur votre consommation énergétique :
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        1. Isolation insuffisante du grenier, des murs et du sous-sol
      </h3>

      <p className="mb-[24px]">
        L'isolation déficiente est de loin la cause numéro un des factures élevées. Au Québec, la norme actuelle recommande une <strong>isolation R50 pour le grenier</strong>, R20-24 pour les murs et R20+ pour le sous-sol. Malheureusement, de nombreuses maisons plus anciennes (construites avant 1990) ont une isolation très en deçà de ces standards, parfois R15-R20 au grenier et R5-R10 aux murs.
      </p>

      <p className="mb-[24px]">
        Concrètement, une maison avec un grenier isolé à R20 au lieu de R50 perd environ <strong>40-50% plus de chaleur par le toit</strong>. En hiver, cette chaleur perdue doit être constamment compensée par votre système de chauffage, ce qui peut augmenter vos factures de 100$ à 150$ par mois. Sur une saison de chauffage de 6 mois, cela représente 600$ à 900$ de surcoûts évitables.
      </p>

      <p className="mb-[24px]">
        De plus, l'isolation se dégrade avec le temps. La cellulose peut se tasser de 15-20% en 10-15 ans, réduisant sa valeur R effective. Si votre isolation n'a pas été vérifiée depuis plus de 10 ans, il y a de fortes chances qu'elle soit devenue insuffisante. Nos <Link to="/services" className="text-[hsl(var(--accent))] hover:underline font-[600]">services d'inspection et d'isolation au Québec</Link> permettent d'évaluer précisément l'état de votre isolation actuelle.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        2. Infiltrations d'air et fuites d'étanchéité
      </h3>

      <p className="mb-[24px]">
        Les infiltrations d'air froid représentent jusqu'à <strong>25-30% des pertes de chaleur totales</strong> d'une maison. Ces fuites se produisent autour des portes et fenêtres, dans les prises électriques des murs extérieurs, autour des conduits de ventilation, des cheminées, et dans tous les joints entre différents matériaux de construction.
      </p>

      <p className="mb-[24px]">
        Même de petites fissures ou espaces peuvent causer des pertes énergétiques importantes. Une fuite d'air équivalente à un trou de 2,5 cm de diamètre peut faire perdre l'équivalent de <strong>50 à 100 litres de mazout par an</strong> en énergie de chauffage. Multiplié par les dizaines de petites fuites présentes dans une maison typique, l'impact sur vos factures devient considérable.
      </p>

      <p className="mb-[24px]">
        Un test d'infiltrométrie (blower door test) permet de mesurer précisément le taux de renouvellement d'air de votre maison et d'identifier les zones critiques. L'étanchéisation de ces fuites est souvent l'amélioration énergétique la plus rentable, avec un retour sur investissement de seulement 2-3 ans.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        3. Système de chauffage inefficace ou mal entretenu
      </h3>

      <p className="mb-[24px]">
        Un système de chauffage électrique vieillissant ou mal entretenu consomme significativement plus d'énergie pour produire la même chaleur. Les plinthes électriques encrassées de poussière peuvent perdre jusqu'à <strong>20% de leur efficacité</strong>. Les thermostats mal calibrés ou désuets font fonctionner le chauffage inutilement.
      </p>

      <p className="mb-[24px]">
        De plus, un système de chauffage surdimensionné pour votre maison ou mal zoné crée des cycles de marche-arrêt fréquents qui gaspillent l'énergie. Si certaines pièces sont surchauffées pendant que d'autres restent froides, c'est un signe clair que votre système n'est pas optimisé.
      </p>

      <p className="mb-[24px]">
        L'installation d'un <strong>thermostat programmable ou intelligent</strong> peut réduire les coûts de chauffage de 10-15% simplement en ajustant automatiquement la température selon vos habitudes (température réduite la nuit et lorsque vous êtes absent). C'est un investissement de 150-300$ qui se rembourse rapidement.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        4. Appareils énergivores et mauvaises habitudes de consommation
      </h3>

      <p className="mb-[24px]">
        Bien que le chauffage représente 50-60% de votre facture Hydro, les appareils électroménagers et l'éclairage contribuent également de manière significative. Un vieux réfrigérateur (plus de 15 ans) peut consommer 2 à 3 fois plus d'électricité qu'un modèle récent certifié ENERGY STAR. Un chauffe-eau électrique mal isolé ou surdimensionné gaspille des centaines de dollars par an.
      </p>

      <p className="mb-[24px]">
        Les mauvaises habitudes comme laisser des appareils en mode veille, utiliser l'éclairage incandescent au lieu de LED, faire fonctionner le lave-vaisselle ou la laveuse à moitié vide, et chauffer des pièces inoccupées contribuent toutes à augmenter inutilement vos factures.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        5. Ventilation inadéquate créant humidité et moisissure
      </h3>

      <p className="mb-[24px]">
        Une ventilation insuffisante cause une accumulation d'humidité dans la maison, ce qui augmente la <strong>charge de chauffage</strong> car l'air humide nécessite plus d'énergie pour être réchauffé que l'air sec. De plus, l'humidité excessive dégrade l'isolation en la rendant moins performante.
      </p>

      <p className="mb-[32px]">
        La moisissure résultant de problèmes d'humidité peut endommager la structure et l'isolation, créant des ponts thermiques supplémentaires. Une ventilation adéquate (ventilateur récupérateur de chaleur VRC ou échangeur d'air) maintient une qualité d'air saine tout en minimisant les pertes de chaleur. Pour en savoir plus sur l'<Link to="/isolation-grenier" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation de grenier</Link>, consultez notre page dédiée.
      </p>

      {/* Section 2 */}
      <h2 id="identifier-pertes" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Comment identifier précisément vos pertes d'énergie ?
      </h2>

      <p className="mb-[24px]">
        Pour réduire efficacement vos factures, vous devez d'abord identifier précisément où et comment vous perdez de l'énergie. Voici les méthodes et signes à surveiller :
      </p>

      <div className="space-y-[24px] mb-[32px]">
        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Zones froides et variations de température</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Si certaines pièces sont constamment plus froides que d'autres malgré un chauffage adéquat, c'est un signe clair d'isolation déficiente ou de fuites d'air dans ces zones. Les planchers froids au-dessus du sous-sol ou près des murs extérieurs indiquent une isolation insuffisante.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Courants d'air perceptibles</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Utilisez une bougie ou un bâtonnet d'encens près des fenêtres, portes, prises électriques et joints de construction. Si la flamme vacille ou la fumée est déviée, il y a une fuite d'air. Les jours de grand vent, vous pouvez même sentir l'air froid s'infiltrer.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Humidité excessive et condensation</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              De la condensation excessive sur les fenêtres, des taches d'humidité aux plafonds ou murs, ou une sensation d'air moite indiquent des problèmes de ventilation et d'étanchéité qui augmentent vos coûts de chauffage et peuvent causer de la moisissure.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)]">
          <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))] shrink-0 mt-1" />
          <div>
            <h4 className="text-[18px] font-[700] text-[hsl(var(--primary))] mb-[8px]">Diagnostic thermique professionnel</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              La méthode la plus précise est une <strong>inspection thermographique avec caméra infrarouge</strong>. Cette technologie révèle instantanément toutes les pertes de chaleur, ponts thermiques et infiltrations d'air invisibles à l'œil nu. L'image thermique montre clairement les zones problématiques en couleurs contrastées.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        Chez Isolation QC, nous offrons une <strong>inspection thermique complète gratuite</strong> qui identifie toutes vos sources de pertes d'énergie et vous fournit un rapport détaillé avec photos thermiques annotées et recommandations priorisées. Cette inspection est la première étape essentielle pour réduire efficacement vos factures.
      </p>

      {/* CTA 2 */}
      <div className="bg-[hsl(var(--primary))] text-white p-[24px] md:p-[32px] rounded-[var(--radius-lg)] mb-[48px]">
        <h3 className="text-[20px] font-[700] mb-[16px] text-white">💡 Découvrez combien vous pouvez économiser</h3>
        <p className="text-[16px] mb-[20px] text-white/90">
          Notre calculateur d'économies d'énergie analyse votre situation et estime précisément vos économies potentielles après amélioration de l'isolation et de l'étanchéité.
        </p>
        <Link 
          to="/devis-et-prix" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Devis gratuite
        </Link>
      </div>

      {/* Section 3 */}
      <h2 id="solutions-reduire" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Solutions concrètes pour réduire vos factures Hydro
      </h2>

      <p className="mb-[24px]">
        Maintenant que vous comprenez les causes et savez identifier vos pertes, voici les solutions les plus efficaces pour réduire durablement vos factures de chauffage :
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        1. Améliorer l'isolation du grenier (priorité absolue)
      </h3>

      <p className="mb-[24px]">
        L'isolation du grenier est l'amélioration énergétique la plus rentable. Porter l'isolation de R20 à <strong>R50 (norme actuelle)</strong> peut réduire vos pertes de chaleur par le toit de 60% et diminuer vos factures de chauffage de <strong>25-30%</strong>. Pour une maison avec des factures de 200$ par mois en hiver, cela représente des économies de 50$ à 60$ par mois, soit 300$ à 360$ par saison de chauffage.
      </p>

      <p className="mb-[24px]">
        Le soufflage de cellulose est la méthode la plus efficace et économique pour atteindre R50. L'installation complète se fait en une seule journée et coûte généralement entre 1,50$ et 3,50$ le pied carré selon la superficie. Le retour sur investissement est de 3 à 5 ans, après quoi ce sont des économies pures pendant 20-30 ans. Consultez notre page sur l'<Link to="/isolation-grenier" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation de grenier au Québec</Link> pour plus de détails.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        2. Isoler les murs et le sous-sol
      </h3>

      <p className="mb-[24px]">
        Les murs extérieurs mal isolés représentent 20-25% des pertes de chaleur. L'<strong>isolation par injection dans les cavités murales</strong> ou l'ajout de panneaux isolants rigides à l'intérieur permet d'atteindre R20-R24 et d'éliminer les ponts thermiques. Le sous-sol non isolé cause également des pertes importantes et rend le plancher du rez-de-chaussée inconfortablement froid.
      </p>

      <p className="mb-[24px]">
        L'isolation complète des murs et du sous-sol peut ajouter 10-15% d'économies supplémentaires sur vos factures. Combinée avec l'isolation du grenier, vous atteignez facilement des réductions de 35-40% de vos coûts de chauffage. Pour en savoir plus, visitez nos pages sur l'<Link to="/isolation-murs" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation des murs</Link> et l'<Link to="/isolation-sous-sol" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation du sous-sol</Link>.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        3. Sceller toutes les fuites d'air
      </h3>

      <p className="mb-[24px]">
        Le calfeutrage et l'étanchéisation de toutes les fuites d'air est une amélioration très rentable. Cela inclut : calfeutrage autour des fenêtres et portes, installation de coupe-froid, isolation des prises électriques des murs extérieurs, scellement des joints de construction, et étanchéisation autour des conduits et cheminées.
      </p>

      <p className="mb-[24px]">
        Cette amélioration coûte généralement 500$ à 1 500$ pour une maison complète et peut réduire les factures de <strong>15-20%</strong>. Le retour sur investissement est de seulement 2-3 ans. C'est souvent l'amélioration la plus rentable après l'isolation du grenier.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        4. Installer un thermostat intelligent et optimiser le chauffage
      </h3>

      <p className="mb-[24px]">
        Un thermostat programmable ou intelligent (comme Nest, Ecobee) ajuste automatiquement la température selon vos habitudes. Programmer une réduction de 3-4°C la nuit et lorsque vous êtes absent peut réduire vos factures de <strong>10-15%</strong> sans affecter votre confort. Le coût d'un thermostat intelligent est de 150$ à 300$ et il se rembourse en 1-2 ans.
      </p>

      <p className="mb-[24px]">
        Assurez-vous également que votre système de chauffage est bien entretenu : nettoyez régulièrement les plinthes électriques, dépoussiérez les convecteurs, et vérifiez que les thermostats fonctionnent correctement. Un entretien simple peut améliorer l'efficacité de 10-15%.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        5. Profiter des subventions gouvernementales disponibles
      </h3>

      <p className="mb-[32px]">
        Le <strong>programme Logis Vert d'Hydro-Québec</strong> offre jusqu'à 5 000$ pour une rénovation complète incluant isolation grenier, murs et sous-sol. Des programmes fédéraux complémentaires (Maisons plus vertes) ajoutent jusqu'à 5 600$ supplémentaires. Certaines municipalités offrent également des aides.
      </p>

      <p className="mb-[32px]">
        Ces subventions peuvent couvrir <strong>40-60% du coût total</strong> de vos travaux d'amélioration énergétique, rendant l'investissement encore plus rentable. Nous vous accompagnons dans toutes les démarches administratives pour maximiser vos aides financières. Pour en savoir plus sur les subventions disponibles, consultez notre page dédiée aux <Link to="/subventions-isolation-quebec" className="text-[hsl(var(--accent))] hover:underline font-[600]">subventions d'isolation au Québec</Link>.
      </p>

      {/* Section 4 */}
      <h2 id="economies-roi" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Économies réalistes et retour sur investissement
      </h2>

      <p className="mb-[24px]">
        Parlons chiffres concrets pour vous donner une idée réaliste de ce que vous pouvez économiser et en combien de temps votre investissement sera rentabilisé :
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[32px]">
        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <TrendingDown className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Économies potentielles annuelles</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-[16px]">
            Pour une maison avec des factures de chauffage de 1 800$ par an (150$ par mois en moyenne), les améliorations recommandées peuvent réduire vos coûts de :
          </p>
          <ul className="space-y-[8px] text-[15px] text-[hsl(var(--foreground-secondary))]">
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Isolation grenier R50 :</strong> 450$ - 540$ par an</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Étanchéisation complète :</strong> 270$ - 360$ par an</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Isolation murs/sous-sol :</strong> 180$ - 270$ par an</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Total potentiel :</strong> 900$ - 1 170$ par an</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-[hsl(var(--border))] p-[24px] rounded-[var(--radius-lg)]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <DollarSign className="w-8 h-8 text-[hsl(var(--accent))]" />
            <h3 className="text-[18px] font-[700] text-[hsl(var(--primary))]">Retour sur investissement</h3>
          </div>
          <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-[16px]">
            Avec les subventions disponibles qui couvrent 40-60% des coûts, le retour sur investissement devient très attractif :
          </p>
          <ul className="space-y-[8px] text-[15px] text-[hsl(var(--foreground-secondary))]">
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Isolation grenier :</strong> ROI de 3 à 5 ans</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Étanchéisation :</strong> ROI de 2 à 3 ans</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Isolation complète :</strong> ROI de 4 à 7 ans</span>
            </li>
            <li className="flex items-start gap-[8px]">
              <CheckCircle size={18} className="text-[hsl(var(--accent))] shrink-0 mt-0.5" />
              <span><strong>Économies sur 20 ans :</strong> 18 000$ à 23 000$</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mb-[32px]">
        Ces chiffres sont basés sur des données réelles de milliers de rénovations au Québec. Votre situation spécifique peut varier selon l'état actuel de votre maison, sa superficie, et votre consommation énergétique. C'est pourquoi une <strong>évaluation énergétique professionnelle gratuite</strong> est essentielle pour calculer précisément vos économies potentielles et prioriser les améliorations les plus rentables pour votre situation.
      </p>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[#1e3a8a] text-white p-[32px] md:p-[40px] rounded-[var(--radius-lg)] mb-[32px]">
        <h3 className="text-[24px] md:text-[28px] font-[700] mb-[16px] text-white">💰 Demandez votre diagnostic énergétique gratuit</h3>
        <p className="text-[17px] mb-[24px] text-white/90 leading-relaxed">
          Arrêtez de payer des factures Hydro excessives. Nos experts certifiés identifient toutes vos sources de pertes d'énergie, calculent vos économies potentielles exactes, et vous présentent un plan d'action personnalisé avec subventions applicables. Service gratuit, sans engagement.
        </p>
        <Link 
          to="/devis-et-prix" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Devis gratuite
        </Link>
      </div>

      {/* Conclusion */}
      <h2 className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px]">
        Conclusion : réduisez vos factures dès maintenant
      </h2>

      <p className="mb-[24px]">
        Des factures Hydro élevées ne sont pas une fatalité. Dans la grande majorité des cas, elles résultent de problèmes d'<strong>isolation insuffisante</strong>, de <strong>fuites d'air</strong> et d'un système de chauffage non optimisé – tous des problèmes corrigeables qui, une fois résolus, génèrent des économies substantielles et permanentes.
      </p>

      <p className="mb-[24px]">
        Les améliorations énergétiques sont un investissement rentable avec des retours sur investissement de 3 à 7 ans en moyenne, et les <strong>subventions gouvernementales disponibles</strong> peuvent couvrir jusqu'à 60% de vos coûts. Sur 20 ans, vous pouvez économiser entre 18 000$ et 23 000$ tout en améliorant considérablement le confort de votre maison.
      </p>

      <p className="mb-[24px]">
        La première étape essentielle est de faire <strong>évaluer précisément votre situation</strong> par des professionnels certifiés qui utiliseront une caméra thermique et d'autres outils de diagnostic pour identifier toutes vos sources de pertes d'énergie. Vous recevrez ensuite un plan d'action personnalisé avec estimation des coûts, des économies potentielles et des subventions applicables.
      </p>

      <p className="mb-[32px]">
        Ne continuez pas à gaspiller des milliers de dollars en factures de chauffage inutiles. Contactez Isolation QC dès aujourd'hui pour votre <strong>diagnostic énergétique gratuit</strong> et commencez à réduire vos factures dès la prochaine saison de chauffage. Investissez intelligemment dans votre confort et vos économies à long terme.
      </p>
    </BlogArticleTemplate>
  );
};

export default Article4FactureHydro;
