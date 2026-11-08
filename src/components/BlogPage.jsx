
import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import BlogCard from '@/components/BlogCard';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const BlogPage = () => {
  const breadcrumbs = [
    { label: 'Blog', url: '/blog' }
  ];

  const articles = [
    {
      title: 'Comment savoir si votre maison est mal isolée ? (7 signes à vérifier)',
      excerpt: 'Identifiez les 7 signes révélateurs d\'une isolation déficiente : factures élevées, zones froides, humidité excessive, bruits extérieurs. Découvrez comment améliorer l\'efficacité énergétique de votre maison au Québec.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Maison mal isolée - signes perte de chaleur et infiltrations',
      date: '2024-03-28',
      slug: '/blog/maison-mal-isolee-7-signes'
    },
    {
      title: 'Pourquoi votre facture Hydro est trop élevée (et comment y remédier)',
      excerpt: 'Découvrez les causes principales de factures Hydro élevées au Québec et les solutions concrètes pour réduire votre consommation de 20-30%. Isolation, étanchéité, subventions disponibles expliquées en détail.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Facture Hydro élevée - couple cherchant solutions économies énergie',
      date: '2024-03-25',
      slug: '/blog/facture-hydro-elevee-solutions'
    },
    {
      title: 'Inspection de grenier : pourquoi elle est essentielle tous les 10 ans au Québec',
      excerpt: 'Découvrez pourquoi une inspection de grenier professionnelle tous les 10 ans est cruciale au Québec. Signes à surveiller, économies d\'énergie jusqu\'à 30%, prévention de dommages coûteux. Guide complet.',
      image: 'https://images.unsplash.com/photo-1619089995839-93db82bf9bdf',
      imageAlt: 'Inspection de grenier Québec - professionnel avec caméra thermique',
      date: '2024-03-20',
      slug: '/blog/inspection-grenier-essentielle-10-ans-quebec'
    },
    {
      title: 'Moisissure dans le grenier : causes, dangers et solutions',
      excerpt: 'Apprenez à identifier les signes de moisissure dans votre grenier, comprenez les risques pour votre santé et découvrez les solutions de décontamination professionnelle certifiées au Québec.',
      image: 'https://images.unsplash.com/photo-1702092488232-77271dabe623?w=800&fm=webp&q=80',
      imageAlt: 'Moisissure et dommages d\'humidité dans le grenier',
      date: '2024-02-10',
      slug: '/blog/moisissure-grenier-causes-solutions'
    },
    {
      title: 'Vermiculite et amiante : comment savoir si votre grenier est dangereux ?',
      excerpt: 'La vermiculite contaminée à l\'amiante représente un danger sérieux pour la santé. Découvrez comment la reconnaître et les solutions de décontamination professionnelle sécuritaire.',
      image: 'https://images.unsplash.com/photo-1696065595189-2aa2de13c4f4?w=800&fm=webp&q=80',
      imageAlt: 'Vermiculite contaminée à l\'amiante - danger pour la santé',
      date: '2024-03-05',
      slug: '/blog/vermiculite-amiante-grenier-danger'
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&fm=webp&q=80';

  return (
    <>
      <div className="bg-background flex-grow flex flex-col">
        <SEOHead 
          title="Blog Isolation QC – Conseils en isolation, décontamination et ventilation"
          description="Découvrez nos conseils d'experts en isolation de grenier, décontamination de vermiculite et ventilation toiture au Québec. Guides complets et solutions."
          robots="index, follow"
          canonical="https://isolationqc.com/blog"
          keywords="isolation grenier Québec, moisissure entretoit, vermiculite amiante, décontamination, ventilation toiture, économie énergie, isolation résidentielle"
          preloadImage={heroImage}
        />

        <BreadcrumbNav items={breadcrumbs} />

        {/* Hero Section - FIXED */}
        <section className="relative bg-gradient-to-br from-[#1e3a8a] to-[#1e293b] text-white py-[80px] md:py-[120px] overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 opacity-30">
            <img 
              src={heroImage}
              alt="Blog isolation et ventilation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-default relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-[hsl(var(--accent))]" />
                <span className="text-[hsl(var(--accent))] font-bold text-[14px] md:text-[16px] uppercase tracking-wide">Blog & Conseils</span>
              </div>
              <h1 className="text-[36px] sm:text-[44px] md:text-[56px] font-[800] mb-[20px] md:mb-[24px] leading-[1.1] tracking-tight text-white">
                Blog Isolation QC – Conseils en isolation, décontamination et ventilation
              </h1>
              <p className="text-[16px] md:text-[20px] leading-[1.6] text-white">
                Découvrez nos guides d'experts pour optimiser l'isolation de votre maison, prévenir les problèmes de moisissure et garantir une ventilation efficace.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              <p className="text-[17px] leading-[1.8] text-[hsl(var(--foreground))] mb-[24px]">
                L'<strong>isolation de grenier au Québec</strong> est l'un des investissements les plus rentables pour réduire vos factures d'énergie et améliorer le confort de votre maison. Un grenier mal isolé peut représenter jusqu'à <strong>30% de pertes de chaleur</strong>, ce qui se traduit par des coûts de chauffage excessifs et un inconfort thermique constant.
              </p>
              <p className="text-[17px] leading-[1.8] text-[hsl(var(--foreground))] mb-[24px]">
                Au-delà de l'isolation, il est crucial de surveiller les problèmes de <strong>moisissure dans l'entretoit</strong> et de <strong>ventilation de toiture</strong>. Une ventilation inadéquate peut entraîner de la condensation, favorisant la croissance de moisissures et la dégradation structurelle. Si vous suspectez la présence de <strong>vermiculite contaminée à l'amiante</strong>, une <strong>décontamination professionnelle</strong> est impérative pour protéger la santé de votre famille.
              </p>
              <p className="text-[17px] leading-[1.8] text-[hsl(var(--foreground))]">
                Notre blog vous offre des conseils pratiques, des guides détaillés et des solutions professionnelles pour tous vos besoins en <strong>isolation résidentielle</strong>, <strong>décontamination</strong> et <strong>ventilation</strong>. Que vous cherchiez à économiser sur vos factures, à prévenir les dommages causés par l'humidité ou à assurer un environnement sain, vous trouverez ici toutes les informations nécessaires.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-[hsl(var(--secondary))]">
          <div className="container-default">
            <h2 className="text-h2 text-center mb-[48px] md:mb-[64px]">Nos derniers articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[64px]">
              {articles.map((article, index) => (
                <BlogCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-default">
            <div className="blog-cta-section">
              <h2 className="text-[32px] md:text-[40px] font-[700] text-[hsl(var(--primary))] mb-[16px]">
                Besoin d'une inspection gratuite ?
              </h2>
              <p className="text-[18px] text-[hsl(var(--foreground-secondary))] mb-[32px] max-w-2xl mx-auto">
                Notre équipe d'experts certifiés est prête à évaluer vos besoins en isolation, décontamination et ventilation. Contactez-nous dès aujourd'hui pour une consultation gratuite.
              </p>
              <Link to="/contact" className="btn-primary">
                Contactez-nous maintenant
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
