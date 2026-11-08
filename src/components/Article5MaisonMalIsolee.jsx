
import React from 'react';
import BlogArticleTemplate from '@/components/BlogArticleTemplate';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { generateFAQSchema } from '@/lib/schemas';

const Article5MaisonMalIsolee = () => {
  const publishDate = '2024-03-28';
  const title = 'Comment savoir si votre maison est mal isolée ? (7 signes à vérifier)';
  const description = 'Découvrez les 7 signes révélateurs d\'une maison mal isolée au Québec. Factures élevées, zones froides, humidité, bruits extérieurs. Solutions d\'amélioration et inspection gratuite.';
  const featuredImage = 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf';
  const imageAlt = 'Maison mal isolée - signes perte de chaleur et infiltrations';
  const canonical = 'https://isolationqc.com/blog/maison-mal-isolee-7-signes';

  const tableOfContents = [
    { id: 'signe-1', title: 'Signe 1 : Factures d\'énergie élevées' },
    { id: 'signe-2', title: 'Signe 2 : Zones froides et variations de température' },
    { id: 'signe-3', title: 'Signe 3 : Courants d\'air et fuites' },
    { id: 'signe-4', title: 'Signe 4 : Humidité et condensation excessives' },
    { id: 'signe-5', title: 'Signe 5 : Bruits extérieurs audibles' },
    { id: 'signe-6', title: 'Signe 6 : Dégâts d\'eau ou infiltrations' },
    { id: 'signe-7', title: 'Signe 7 : Présence d\'animaux ou insectes' },
    { id: 'prochaines-etapes', title: 'Prochaines étapes : faites inspecter votre maison' }
  ];

  const faqItems = [
    {
      question: "Comment savoir si mon isolation est suffisante ?",
      answer: "Une inspection professionnelle avec caméra thermique révèle précisément l'état de votre isolation. Les signes visibles incluent : factures élevées, zones froides, condensation excessive, courants d'air perceptibles. La norme québécoise actuelle est R50 pour le grenier, R20-24 pour les murs."
    },
    {
      question: "Quels sont les signes d'une mauvaise isolation ?",
      answer: "Les 7 signes principaux sont : factures d'énergie anormalement élevées, pièces difficiles à chauffer, courants d'air aux fenêtres/portes, condensation excessive, bruits extérieurs audibles, traces d'humidité/infiltrations, et présence d'animaux nuisibles dans le grenier."
    },
    {
      question: "Combien coûte l'amélioration de l'isolation ?",
      answer: "L'isolation complète (grenier, murs, sous-sol) coûte généralement entre 8 000$ et 15 000$ selon la superficie. Avec les subventions Logis Vert et fédérales (jusqu'à 10 000$ combinées), votre investissement net est réduit de 40-60%. Le retour sur investissement est de 4-7 ans."
    }
  ];

  const relatedArticles = [
    {
      title: 'Pourquoi votre facture Hydro est trop élevée (et comment y remédier)',
      excerpt: 'Découvrez les causes principales de factures Hydro élevées et les solutions concrètes pour réduire votre consommation de 20-30%.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Facture Hydro élevée - couple cherchant solutions économies énergie',
      slug: '/blog/facture-hydro-elevee-solutions'
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
      readTime="10 min"
      tableOfContents={tableOfContents}
      relatedArticles={relatedArticles}
      schemas={schemas}
    >
      {/* Introduction */}
      <p className="text-[18px] leading-[1.8] text-[hsl(var(--foreground))] font-[500] mb-[32px]">
        Vous vous demandez si votre maison est correctement isolée ? Au Québec, où les hivers rigoureux exigent une isolation performante, une <strong>maison mal isolée</strong> se traduit par des factures de chauffage exorbitantes, un inconfort constant et des problèmes structurels potentiellement graves. La bonne nouvelle : il existe des <strong>signes révélateurs clairs</strong> qui permettent d'identifier rapidement si votre isolation est déficiente.
      </p>

      <p className="mb-[24px]">
        Dans cet article complet, nous vous présentons les <strong>7 signes principaux d'une isolation insuffisante</strong> que tout propriétaire québécois devrait surveiller. Ces indicateurs vont des symptômes évidents comme les factures élevées et les zones froides, aux signes moins connus mais tout aussi révélateurs comme l'excès d'humidité, les bruits extérieurs audibles et la présence d'animaux nuisibles.
      </p>

      <p className="mb-[32px]">
        Pour chaque signe, nous expliquons pourquoi il indique une isolation déficiente, comment le détecter précisément, et quelles en sont les conséquences à long terme. Nous terminons par un guide pratique des prochaines étapes : comment faire inspecter professionnellement votre maison et quelles améliorations prioriser pour maximiser votre confort et vos économies.
      </p>

      {/* CTA 1 */}
      <div className="bg-[hsl(var(--accent))]/10 border-l-4 border-[hsl(var(--accent))] p-[24px] md:p-[32px] rounded-[var(--radius)] mb-[48px]">
        <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px]">🏠 Vérification complète de votre isolation</h3>
        <p className="text-[16px] text-[hsl(var(--foreground))] mb-[20px]">
          Nos experts certifiés inspectent gratuitement votre grenier, murs et sous-sol avec caméra thermique pour identifier toutes les déficiences d'isolation et vous fournir un rapport détaillé avec solutions personnalisées.
        </p>
        <Link 
          to="/inspection-gratuite" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Inspection gratuite
        </Link>
      </div>

      {/* Signe 1 */}
      <h2 id="signe-1" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">1</span>
        Factures d'énergie anormalement élevées
      </h2>

      <p className="mb-[24px]">
        Le premier et plus évident signe d'une maison mal isolée est une <strong>facture de chauffage beaucoup plus élevée que la moyenne</strong>. Au Québec, une maison unifamiliale de taille moyenne (1500 pi²) bien isolée devrait avoir des factures Hydro mensuelles d'environ 100$ à 150$ pendant la saison de chauffage. Si vos factures dépassent régulièrement 200$ à 250$ par mois, c'est un signal d'alarme clair.
      </p>

      <p className="mb-[24px]">
        Comparez vos factures avec celles de maisons similaires dans votre quartier. Une consommation 30-50% plus élevée que vos voisins ayant des maisons comparables indique presque toujours une <strong>isolation déficiente</strong>. Regardez également l'évolution de vos factures : une augmentation progressive sur plusieurs années (au-delà des hausses tarifaires) suggère que votre isolation se dégrade avec le temps.
      </p>

      <div className="bg-[hsl(var(--secondary))] p-[20px] rounded-[var(--radius-lg)] mb-[24px]">
        <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[12px]">💡 Calcul rapide de surconsommation</h4>
        <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
          Si votre maison de 1500 pi² a des factures de 200$ par mois au lieu de 120$ (moyenne pour une maison bien isolée), vous payez <strong>80$ de trop chaque mois</strong>, soit 480$ par saison de chauffage de 6 mois. Sur 10 ans, c'est 4 800$ gaspillés qui auraient pu financer une isolation complète.
        </p>
      </div>

      <p className="mb-[32px]">
        Les factures élevées ne mentent pas : votre système de chauffage travaille en continu pour compenser les pertes de chaleur massives causées par une isolation insuffisante. C'est le moment de consulter nos <Link to="/services" className="text-[hsl(var(--accent))] hover:underline font-[600]">services d'inspection et d'amélioration de l'isolation</Link>.
      </p>

      {/* Signe 2 */}
      <h2 id="signe-2" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">2</span>
        Zones froides et variations de température importantes
      </h2>

      <p className="mb-[24px]">
        Une maison bien isolée maintient une <strong>température uniforme dans toutes les pièces</strong>. Si certaines chambres sont constamment plus froides que d'autres, si le plancher du rez-de-chaussée est glacial même avec le chauffage au maximum, ou si vous ressentez des variations de température importantes entre les étages, votre isolation est clairement insuffisante.
      </p>

      <p className="mb-[24px]">
        Les zones typiquement froides dans une maison mal isolée incluent : les chambres du haut (grenier sous-isolé), les pièces au-dessus du garage, les coins des pièces près des murs extérieurs, et les planchers au-dessus d'un sous-sol non isolé. Ces zones froides obligent à surchauffer le reste de la maison pour obtenir un minimum de confort, ce qui fait grimper les factures.
      </p>

      <div className="space-y-[16px] mb-[24px]">
        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <AlertCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[4px]">Test simple : mesure des variations</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Utilisez un thermomètre pour mesurer la température dans différentes pièces de votre maison simultanément. Une variation de plus de 3-4°C entre les pièces indique des problèmes d'isolation localisés qui nécessitent une correction.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        Les planchers froids sont particulièrement révélateurs. Si vous devez porter des pantoufles épaisses même avec le chauffage activé, c'est que la chaleur s'échappe vers le sous-sol non isolé ou que les murs extérieurs créent des ponts thermiques. L'<Link to="/isolation-sous-sol" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation du sous-sol</Link> et des murs règle ces problèmes.
      </p>

      {/* Signe 3 */}
      <h2 id="signe-3" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">3</span>
        Courants d'air et fuites d'étanchéité
      </h2>

      <p className="mb-[24px]">
        Si vous sentez des <strong>courants d'air froid</strong> près des fenêtres, des portes, des prises électriques des murs extérieurs ou le long des plinthes, votre maison souffre de graves problèmes d'étanchéité. Ces fuites d'air peuvent représenter jusqu'à 25-30% de vos pertes de chaleur totales, même avec une isolation adéquate.
      </p>

      <p className="mb-[24px]">
        Les jours de grand vent, les courants d'air deviennent particulièrement perceptibles. Vous pouvez littéralement sentir l'air froid s'infiltrer autour des cadres de fenêtres mal calfeutrés, sous les portes sans coupe-froid, et même à travers les prises électriques des murs donnant sur l'extérieur.
      </p>

      <div className="bg-[hsl(var(--secondary))] p-[20px] rounded-[var(--radius-lg)] mb-[24px]">
        <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[12px]">🕯️ Test de la bougie ou de l'encens</h4>
        <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed mb-[12px]">
          Allumez une bougie ou un bâtonnet d'encens et déplacez-le lentement autour des fenêtres, portes, prises électriques et joints de construction. Si la flamme vacille ou si la fumée est déviée, il y a une fuite d'air à cet endroit précis.
        </p>
        <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
          Faites ce test par temps froid et venteux pour des résultats optimaux. Marquez tous les endroits problématiques pour une correction ultérieure.
        </p>
      </div>

      <p className="mb-[32px]">
        Les infiltrations d'air ne se limitent pas aux ouvertures évidentes. Les jonctions entre différents matériaux de construction (mur-fondation, mur-toit, etc.), les pénétrations de conduits (ventilation, plomberie), et même les luminaires encastrés non étanches au plafond peuvent créer des fuites importantes. Un test d'infiltrométrie professionnel identifie toutes ces fuites avec précision.
      </p>

      {/* Signe 4 */}
      <h2 id="signe-4" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">4</span>
        Humidité excessive et condensation
      </h2>

      <p className="mb-[24px]">
        La <strong>condensation excessive sur les fenêtres</strong>, particulièrement en hiver, est un signe classique d'isolation déficiente et de ventilation inadéquate. Si vos fenêtres sont constamment embuées, si vous voyez de la glace se former sur les vitres, ou si de l'eau s'accumule sur les rebords de fenêtres, votre maison a des problèmes sérieux.
      </p>

      <p className="mb-[24px]">
        L'humidité excessive provient de deux sources : l'air chaud et humide de l'intérieur qui rencontre les surfaces froides (murs et fenêtres mal isolés), et l'infiltration d'humidité extérieure à travers les fuites d'étanchéité. Cette humidité ne se contente pas de créer de l'inconfort – elle favorise la croissance de <strong>moisissure dangereuse</strong> pour la santé respiratoire.
      </p>

      <div className="space-y-[16px] mb-[24px]">
        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-red-600 mb-[4px]">⚠️ Signes de moisissure à surveiller</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Taches noires ou verdâtres dans les coins des pièces, odeur de moisi ou de renfermé, papier peint qui se décolle, peinture qui cloque, et aggravation des symptômes d'allergie ou d'asthme. La moisissure nécessite une intervention professionnelle urgente.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[24px]">
        Les zones particulièrement vulnérables à l'humidité incluent : les coins des chambres du haut (près du grenier mal isolé), les murs extérieurs nord qui reçoivent peu de soleil, les salles de bain sans ventilation adéquate, et les sous-sols mal isolés et mal ventilés.
      </p>

      <p className="mb-[32px]">
        Une isolation appropriée maintient les surfaces intérieures à une température suffisamment élevée pour prévenir la condensation. Combinez cela avec une ventilation mécanique adéquate (VRC ou VRE), et vous éliminez les problèmes d'humidité. Consultez notre article sur la <Link to="/blog/moisissure-grenier-causes-solutions" className="text-[hsl(var(--accent))] hover:underline font-[600]">moisissure dans le grenier</Link> pour plus d'informations.
      </p>

      {/* CTA 2 */}
      <div className="bg-[hsl(var(--primary))] text-white p-[24px] md:p-[32px] rounded-[var(--radius-lg)] mb-[48px]">
        <h3 className="text-[20px] font-[700] mb-[16px] text-white">🔬 Obtenez une inspection gratuite</h3>
        <p className="text-[16px] mb-[20px] text-white/90">
          Notre inspection thermique avec caméra infrarouge révèle instantanément tous les problèmes d'isolation, ponts thermiques, fuites d'air et zones d'humidité. Rapport détaillé avec photos et solutions personnalisées.
        </p>
        <Link 
          to="/inspection-gratuite" 
          className="inline-flex items-center justify-center bg-[hsl(var(--accent))] text-white font-bold text-[16px] px-[24px] py-[12px] rounded-[var(--radius)] hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-xl min-h-[44px]"
        >
          Inspection gratuite
        </Link>
      </div>

      {/* Signe 5 */}
      <h2 id="signe-5" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">5</span>
        Bruits extérieurs clairement audibles
      </h2>

      <p className="mb-[24px]">
        Si vous entendez distinctement les <strong>bruits de la circulation</strong>, les conversations des voisins, ou le bruit du vent depuis l'intérieur de votre maison, votre isolation acoustique – et donc thermique – est insuffisante. L'isolation thermique et l'isolation acoustique vont de pair : les matériaux qui bloquent la chaleur bloquent également le son.
      </p>

      <p className="mb-[24px]">
        Une maison correctement isolée avec R50 au grenier et R20+ aux murs offre une excellente isolation acoustique. Le bruit extérieur est considérablement atténué, créant un environnement intérieur calme et paisible. Si ce n'est pas le cas dans votre maison, c'est un indicateur clair que l'épaisseur ou la qualité de l'isolation est déficiente.
      </p>

      <div className="bg-[hsl(var(--secondary))] p-[20px] rounded-[var(--radius-lg)] mb-[24px]">
        <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[12px]">🔊 Le lien isolation thermique-acoustique</h4>
        <p className="text-[15px] text-[hsl(var(--foreground-secondary))] leading-relaxed">
          Les mêmes matériaux qui empêchent la chaleur de s'échapper (cellulose, laine minérale, mousse) absorbent également les ondes sonores. L'amélioration de votre isolation thermique améliore automatiquement l'isolation acoustique, créant un environnement plus calme et confortable.
        </p>
      </div>

      <p className="mb-[32px]">
        Testez l'isolation acoustique de votre maison : fermez toutes les fenêtres et portes, puis demandez à quelqu'un de parler à voix normale à l'extérieur. Si vous entendez clairement la conversation depuis l'intérieur, votre isolation des murs est probablement insuffisante. L'<Link to="/isolation-murs" className="text-[hsl(var(--accent))] hover:underline font-[600]">amélioration de l'isolation des murs</Link> règle ce problème.
      </p>

      {/* Signe 6 */}
      <h2 id="signe-6" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">6</span>
        Dégâts d'eau ou traces d'infiltrations
      </h2>

      <p className="mb-[24px]">
        Les <strong>taches d'humidité au plafond ou aux murs</strong>, les cernes jaunâtres ou brunâtres, et les traces d'eau visibles sont des signaux d'alarme sérieux. Ces infiltrations peuvent provenir de plusieurs sources liées à une mauvaise isolation : toiture endommagée par les barrages de glace, condensation excessive dans le grenier, ou remontée d'humidité depuis un sous-sol mal isolé.
      </p>

      <p className="mb-[24px]">
        Les <strong>barrages de glace (ice dams)</strong> sont particulièrement révélateurs d'une isolation insuffisante au grenier. Ils se forment lorsque la chaleur s'échappe par le toit, fait fondre la neige qui regèle ensuite au rebord froid, créant des barrières de glace massives. L'eau retenue peut s'infiltrer sous les bardeaux et causer des dégâts d'eau importants à l'intérieur.
      </p>

      <div className="space-y-[16px] mb-[24px]">
        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-red-600 mb-[4px]">🚨 Signes d'infiltration à surveiller</h4>
            <ul className="text-[15px] text-[hsl(var(--foreground-secondary))] space-y-[8px]">
              <li>• Taches brunâtres circulaires au plafond (fuites de toiture)</li>
              <li>• Peinture qui cloque ou papier peint qui se décolle (humidité dans les murs)</li>
              <li>• Odeur de moisi persistante (infiltration cachée)</li>
              <li>• Plancher gondolé ou tapis humide (infiltration par le sol)</li>
              <li>• Efflorescence blanche sur les murs de fondation (infiltration d'eau)</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        Ne négligez jamais les signes d'infiltration d'eau. Même de petites fuites peuvent causer des dommages structurels majeurs et de la moisissure dangereuse si elles ne sont pas traitées rapidement. Une inspection professionnelle identifie la source exacte et les corrections nécessaires, incluant souvent l'amélioration de l'isolation et de la ventilation.
      </p>

      {/* Signe 7 */}
      <h2 id="signe-7" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-10 h-10 bg-[hsl(var(--accent))] text-white rounded-full font-bold text-[18px] shrink-0">7</span>
        Présence d'animaux ou d'insectes dans le grenier
      </h2>

      <p className="mb-[24px]">
        Si vous entendez des <strong>bruits de grattement, de course ou de déplacement</strong> dans votre grenier, des animaux nuisibles (écureuils, ratons laveurs, chauves-souris) ou des insectes s'y sont probablement installés. Leur présence indique souvent que l'isolation ou la structure présente des ouvertures et des zones dégradées qui leur permettent d'accéder facilement.
      </p>

      <p className="mb-[24px]">
        Les animaux sont attirés par les greniers mal isolés car ils offrent des espaces chauds et protégés pour nicher. Une fois installés, ils causent des dommages considérables : ils déchirent et compactent l'isolation (réduisant sa valeur R de 50-70%), créent des ouvertures supplémentaires dans la structure, laissent des excréments contaminés, et peuvent même mâcher les fils électriques (risque d'incendie).
      </p>

      <div className="bg-[hsl(var(--secondary))] p-[20px] rounded-[var(--radius-lg)] mb-[24px]">
        <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[12px]">🦝 Signes de présence animale</h4>
        <ul className="text-[15px] text-[hsl(var(--foreground-secondary))] space-y-[8px]">
          <li>• Bruits de grattement ou de course, surtout la nuit</li>
          <li>• Odeurs fortes et désagréables (urine, excréments)</li>
          <li>• Isolation visiblement déplacée ou détruite</li>
          <li>• Excréments d'animaux dans le grenier</li>
          <li>• Traces de rongement sur les structures en bois</li>
          <li>• Nids ou matériaux de nidification (feuilles, branches, isolation arrachée)</li>
        </ul>
      </div>

      <p className="mb-[24px]">
        La présence d'animaux nécessite une intervention en deux étapes : d'abord, <strong>l'extermination et l'exclusion professionnelles</strong> pour retirer les animaux et sceller tous les points d'entrée ; ensuite, la <strong>décontamination et le remplacement de l'isolation</strong> endommagée et contaminée par les excréments.
      </p>

      <p className="mb-[32px]">
        Les excréments d'animaux dans le grenier représentent un risque sanitaire sérieux (hantavirus, histoplasmose, salmonellose). Ne tentez jamais de nettoyer vous-même un grenier infesté. Des professionnels certifiés en décontamination utilisent l'équipement de protection approprié et suivent les protocoles de sécurité. Après la décontamination, l'installation d'une <Link to="/isolation-grenier" className="text-[hsl(var(--accent))] hover:underline font-[600]">isolation neuve R50</Link> restaure l'efficacité énergétique et prévient les réinfestations.
      </p>

      {/* Section Prochaines Étapes */}
      <h2 id="prochaines-etapes" className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[24px] mt-[48px] scroll-mt-24">
        Prochaines étapes : faites inspecter votre maison professionnellement
      </h2>

      <p className="mb-[24px]">
        Si vous avez identifié <strong>un ou plusieurs de ces 7 signes</strong> dans votre maison, il est temps d'agir. Une inspection professionnelle avec caméra thermique infrarouge est la première étape essentielle pour obtenir un diagnostic précis de l'état de votre isolation et identifier toutes les sources de pertes d'énergie.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        L'importance d'une inspection professionnelle
      </h3>

      <p className="mb-[24px]">
        Une inspection thermographique révèle instantanément les problèmes invisibles à l'œil nu. La caméra infrarouge affiche les variations de température en couleurs contrastées, montrant clairement les zones de perte de chaleur, les ponts thermiques, les infiltrations d'air et les zones d'humidité. Vous obtenez une visualisation précise de l'état réel de votre isolation.
      </p>

      <p className="mb-[24px]">
        L'inspection complète inclut également : mesure de l'épaisseur de l'isolation existante, calcul de la valeur R actuelle, évaluation de l'état de la ventilation, détection de moisissure ou de contamination, identification des problèmes structurels, et test d'infiltrométrie pour mesurer les fuites d'air totales.
      </p>

      <h3 className="text-[20px] font-[700] text-[hsl(var(--primary))] mb-[16px] mt-[32px]">
        Ce que vous recevez après l'inspection
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[24px]">
        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[4px]">Rapport détaillé avec photos</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Documentation complète incluant photos thermiques annotées de toutes les zones problématiques, mesures précises, et description claire des déficiences identifiées.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[4px]">Recommandations priorisées</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Plan d'action classant les améliorations par ordre de priorité et de rentabilité, avec estimation des économies potentielles pour chaque intervention.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[4px]">Devis détaillé et transparent</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Estimation précise des coûts pour chaque amélioration, avec options de financement et subventions applicables clairement indiquées.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[12px] p-[16px] bg-white border border-[hsl(var(--border))] rounded-[var(--radius)]">
          <CheckCircle className="w-5 h-5 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-[16px] font-[700] text-[hsl(var(--primary))] mb-[4px]">Information sur les subventions</h4>
            <p className="text-[15px] text-[hsl(var(--foreground-secondary))]">
              Guidance complète sur le programme Logis Vert (jusqu'à 5 000$) et les aides fédérales/municipales disponibles pour vos travaux.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-[32px]">
        Chez Isolation QC, nous offrons cette <strong>inspection complète gratuitement</strong> à tous les propriétaires québécois. Aucun engagement requis – vous recevez simplement l'information nécessaire pour prendre des décisions éclairées concernant l'amélioration de votre maison. Pour en savoir plus sur le processus, consultez notre page sur l'<Link to="/inspection-grenier-entre-toit" className="text-[hsl(var(--accent))] hover:underline font-[600]">inspection de grenier et entre-toit</Link>.
      </p>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[#1e3a8a] text-white p-[32px] md:p-[40px] rounded-[var(--radius-lg)] mb-[32px]">
        <h3 className="text-[24px] md:text-[28px] font-[700] mb-[16px] text-white">🏡 Réservez votre diagnostic d'isolation gratuit</h3>
        <p className="text-[17px] mb-[24px] text-white/90 leading-relaxed">
          Ne laissez pas une isolation déficiente vous coûter des milliers de dollars en factures de chauffage et en dommages structurels. Nos experts certifiés RBQ réalisent une inspection complète avec caméra thermique et vous fournissent un plan d'action détaillé pour améliorer votre confort et réduire vos coûts énergétiques.
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
        Conclusion : agissez avant que les problèmes ne s'aggravent
      </h2>

      <p className="mb-[24px]">
        Les <strong>7 signes d'une maison mal isolée</strong> présentés dans cet article sont tous des indicateurs fiables que votre isolation nécessite une amélioration. Plus vous identifiez de signes dans votre maison, plus l'urgence d'agir est grande. Chaque mois de retard signifie des factures de chauffage excessives continues, un inconfort thermique persistant, et le risque d'aggravation des dommages structurels.
      </p>

      <p className="mb-[24px]">
        La bonne nouvelle : les problèmes d'isolation sont tous corrigeables. Avec les technologies modernes d'isolation (cellulose R50, panneaux rigides, mousse giclée) et les <strong>subventions gouvernementales généreuses</strong> disponibles, améliorer votre isolation est un investissement rentable avec un retour de 4-7 ans en moyenne.
      </p>

      <p className="mb-[24px]">
        Ne continuez pas à gaspiller votre argent en factures de chauffage exorbitantes. Une inspection professionnelle gratuite révèle précisément l'état de votre isolation et vous fournit un plan d'action personnalisé. Investissez dans le confort et l'efficacité énergétique de votre maison – vous commencerez à économiser dès la prochaine saison de chauffage.
      </p>

      <p className="mb-[32px]">
        Contactez Isolation QC dès aujourd'hui pour votre <strong>inspection thermique gratuite</strong>. Nos experts certifiés vous guident à travers chaque étape, de l'évaluation initiale à l'obtention des subventions, jusqu'à la réalisation complète de vos travaux d'amélioration. Faites le choix intelligent pour votre maison et votre portefeuille.
      </p>
    </BlogArticleTemplate>
  );
};

export default Article5MaisonMalIsolee;
