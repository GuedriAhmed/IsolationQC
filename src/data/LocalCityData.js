const generateSlug = (name) => {
  return name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const citiesList = [
  'Montréal', 'Québec', 'Laval', 'Gatineau', 'Longueuil', 
  'Sherbrooke', 'Trois-Rivières', 'Lévis', 'Saguenay', 'Terrebonne', 
  'Repentigny', 'Saint-Jean-sur-Richelieu', 'Drummondville', 'Saint-Jérôme', 'Granby', 
  'Shawinigan', 'Blainville', 'Brossard', 'Rimouski', 'Victoriaville', 
  'Sainte-Thérèse', 'Joliette', 'Salaberry-de-Valleyfield', 'Sorel-Tracy', 'Rivière-des-Prairies', 
  'Mascouche'
];

export const generateCityData = (cityName) => {
  const slug = generateSlug(cityName);
  return {
    name: cityName,
    slug: slug,
    title: `Entrepreneur isolation ${cityName} | Devis gratuit`,
    metaDescription: `Entrepreneur isolation à ${cityName}. Devis gratuit, entrepreneurs locaux certifiés, aide Logis Vert. Réservez votre inspection gratuite dès maintenant!`,
    h1: `Entrepreneur isolation ${cityName}`,
    h2Suggestions: [
      `Services d'isolation professionnels à ${cityName}`,
      `Pourquoi isoler votre maison à ${cityName} ?`,
      `Prix et subventions pour l'isolation à ${cityName}`,
      `Nos réalisations en isolation près de ${cityName}`,
      `Questions fréquentes sur l'isolation à ${cityName}`
    ],
    localContent: {
      intro: `Bienvenue chez Isolation QC, votre expert de confiance pour tous vos besoins en isolation à ${cityName}. Nous comprenons que le climat spécifique de la région exige une isolation performante pour garantir votre confort tout au long de l'année. Que vous habitiez au cœur de ${cityName} ou dans ses environs, notre équipe locale est prête à intervenir rapidement.`,
      services: `Nos experts à ${cityName} se spécialisent dans l'isolation de grenier, d'entretoit, et de murs. Nous utilisons des matériaux de pointe, comme la cellulose soufflée et la mousse d'uréthane, parfaitement adaptés aux hivers rigoureux et aux étés humides de la région de ${cityName}. Une bonne isolation est la clé pour réduire vos factures énergétiques.`,
      benefits: `Faire appel à notre équipe de ${cityName} vous garantit une expertise locale, une connaissance approfondie des normes de construction régionales, et un accès facilité aux subventions gouvernementales comme Logis Vert. Nous vous accompagnons de l'inspection initiale jusqu'à la finalisation des travaux, avec une propreté des lieux irréprochable.`,
      pricing: `Le coût de l'isolation à ${cityName} varie selon la superficie et l'état actuel de votre résidence. En moyenne, un projet typique dans la région peut bénéficier de retours sur investissement rapides grâce aux économies d'énergie. Demandez une soumission sur mesure pour obtenir un prix exact pour votre propriété à ${cityName}.`,
      testimonialIntro: `Découvrez ce que nos clients de ${cityName} disent de nos services d'isolation.`
    },
    faqItems: [
      {
        question: `Combien coûte l'isolation d'un grenier à ${cityName} ?`,
        answer: `Le prix moyen à ${cityName} dépend de la surface et du type d'isolant, mais nos clients récupèrent souvent leur investissement en quelques années grâce aux économies de chauffage.`
      },
      {
        question: `Êtes-vous certifiés pour travailler à ${cityName} ?`,
        answer: `Oui, tous nos entrepreneurs intervenant à ${cityName} possèdent les licences RBQ requises et les certifications pour les programmes de subventions provinciaux.`
      },
      {
        question: `Quels sont les délais d'intervention à ${cityName} ?`,
        answer: `Nous nous efforçons d'effectuer une inspection gratuite dans les 48 à 72 heures suivant votre appel, selon nos disponibilités dans le secteur de ${cityName}.`
      },
      {
        question: `Offrez-vous de l'aide pour les subventions Logis Vert à ${cityName} ?`,
        answer: `Absolument. Nous guidons nos clients de ${cityName} à travers tout le processus de demande de subvention pour maximiser leurs remboursements.`
      },
      {
        question: `Quel isolant est le meilleur pour le climat de ${cityName} ?`,
        answer: `La cellulose soufflée est excellente pour les entretoits de ${cityName} grâce à sa résistance thermique élevée, tandis que l'uréthane est privilégié pour les endroits restreints.`
      }
    ],
    testimonials: [
      {
        name: "Jean-François T.",
        city: cityName,
        review: `Équipe très professionnelle. Ils sont arrivés à l'heure à notre maison de ${cityName}, ont travaillé proprement et la différence de température à l'étage est incroyable. Je recommande fortement!`,
        rating: 5
      },
      {
        name: "Marie-Claude L.",
        city: cityName,
        review: `Le processus d'évaluation a été clair et sans pression. Les travaux ont été faits rapidement et ils nous ont beaucoup aidé avec les papiers pour la subvention. Excellent service local à ${cityName}.`,
        rating: 5
      }
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1619089995839-93db82bf9bdf?w=1920&q=80",
      service: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&q=80",
      inspection: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
    }
  };
};

export const localCities = citiesList.map(city => generateCityData(city));