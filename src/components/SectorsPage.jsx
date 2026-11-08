import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './SEOHead';
import BreadcrumbNav from './BreadcrumbNav';
import QuoteForm from './QuoteForm';
import HeroSection from './HeroSection';
import { MapPin, ArrowRight } from 'lucide-react';
import { localCities } from '@/data/LocalCityData';

const SectorsPage = () => {
  return (
    <div className="bg-background flex-grow flex flex-col">
      <SEOHead 
        title="Secteurs Desservis - Isolation au Québec | Isolation QC"
        description="Services d'isolation thermique dans toute la région de Montréal et du Québec. Entrepreneurs certifiés RBQ disponibles dans votre ville."
        canonical="https://isolationqc.com/secteurs-desservis"
      />

      <BreadcrumbNav items={[
        { label: 'Accueil', path: '/' },
        { label: 'Secteurs Desservis', path: '/secteurs-desservis' }
      ]} />

      <HeroSection
        title="Secteurs Desservis"
        subtitle="Présents partout au Québec"
        introText="Nous intervenons dans toute la région de Montréal et ses environs. Nos équipes d'experts sont disponibles dans votre ville pour tous vos projets d'isolation thermique."
        image="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
        hideButtons={true}
      />

      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center mb-[64px]">
            <h2 className="text-h2 mb-[16px] text-[hsl(var(--primary))]">
              Nos Villes de Service
            </h2>
            <p className="text-body text-[hsl(var(--foreground-secondary))] max-w-2xl mx-auto">
              Trouvez votre entrepreneur local certifié en isolation thermique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] mb-[64px]">
            {localCities.map((city) => (
              <Link 
                key={city.slug}
                to={`/entrepreneur-isolation-${city.slug}`}
                className="card-base p-[24px] group hover:border-[hsl(var(--accent))] transition-all"
              >
                <div className="flex items-center justify-between mb-[12px]">
                  <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
                  <ArrowRight className="w-5 h-5 text-[hsl(var(--foreground-secondary))] group-hover:text-[hsl(var(--accent))] group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-h4 text-[hsl(var(--primary))] mb-[8px] group-hover:text-[hsl(var(--accent))] transition-colors">
                  {city.name}
                </h3>
                <p className="text-small text-[hsl(var(--foreground-secondary))]">
                  Entrepreneur isolation certifié
                </p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[64px]">
            <div>
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                Pourquoi choisir un entrepreneur local?
              </h2>
              <div className="space-y-[24px]">
                <div className="flex gap-[16px]">
                  <div className="w-10 h-10 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[hsl(var(--accent))] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Connaissance du climat local</h3>
                    <p className="text-body text-[hsl(var(--foreground-secondary))]">
                      Nos entrepreneurs connaissent parfaitement les défis climatiques spécifiques à votre région et adaptent les solutions en conséquence.
                    </p>
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <div className="w-10 h-10 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[hsl(var(--accent))] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Intervention rapide</h3>
                    <p className="text-body text-[hsl(var(--foreground-secondary))]">
                      Proximité géographique pour des inspections et interventions rapides, souvent dans les 48 heures.
                    </p>
                  </div>
                </div>

                <div className="flex gap-[16px]">
                  <div className="w-10 h-10 bg-[hsl(var(--accent))]/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[hsl(var(--accent))] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-h4 mb-[8px] text-[hsl(var(--primary))]">Expertise des normes locales</h3>
                    <p className="text-body text-[hsl(var(--foreground-secondary))]">
                      Connaissance approfondie des codes du bâtiment et des programmes de subventions disponibles dans votre municipalité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-h2 mb-[24px] text-[hsl(var(--primary))]">
                Demander un devis dans votre ville
              </h2>
              <QuoteForm defaultService="Grenier" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[hsl(var(--primary))] text-white">
        <div className="container-default text-center">
          <h2 className="text-h2 mb-[24px] text-white">
            Votre ville n'est pas dans la liste?
          </h2>
          <p className="text-[18px] mb-[32px] max-w-2xl mx-auto text-white/90">
            Nous desservons également plusieurs autres municipalités du Québec. Contactez-nous pour vérifier la disponibilité dans votre secteur.
          </p>
          <Link to="/contactez-nous" className="btn-primary bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;