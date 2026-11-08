import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, ChevronRight } from 'lucide-react';
import SEOHead from './SEOHead';
import HeroSection from './HeroSection';
import { localCities } from '@/data/LocalCityData';
import { generateBreadcrumbSchema } from '@/lib/schemas';

const LocalSectorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = localCities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breadcrumbItems = [
    { name: 'Accueil', url: 'https://isolationqc.com/' },
    { name: 'Secteurs desservis', url: 'https://isolationqc.com/secteurs-desservis' }
  ];

  const schemas = [
    generateBreadcrumbSchema(breadcrumbItems)
  ];

  const heroImage = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&fm=webp&q=80";

  return (
    <div className="bg-background flex-grow flex flex-col w-full">
      <SEOHead 
        title="Secteurs desservis | Isolation Québec"
        description="Découvrez nos secteurs desservis au Québec. 26 villes couvertes. Isolation grenier, entre-toit, thermopompe."
        robots="index, follow"
        canonical="https://isolationqc.com/secteurs-desservis"
        schemas={schemas}
        preloadImage={heroImage}
      />

      <HeroSection 
        title="Secteurs desservis — Isolation Québec"
        subtitle="Nos secteurs d'intervention"
        introText="Isolation QC intervient à travers la province pour améliorer le confort et l'efficacité énergétique de votre résidence. Grâce à notre réseau d'entrepreneurs certifiés locaux, nous garantissons une intervention rapide et des travaux conformes aux normes."
        ctaText="Rechercher votre secteur"
        ctaLink="#secteurs"
        image={heroImage}
      />

      <section id="secteurs" className="py-[80px] md:py-[120px] bg-[hsl(var(--background))]">
        <div className="container-default">
          
          <div className="flex flex-col items-center mb-[64px]">
            <h2 className="text-[36px] md:text-[40px] font-[700] text-[hsl(var(--primary))] text-center mb-[24px]">
              Rechercher votre secteur
            </h2>

            <div className="relative w-full max-w-[600px] mb-[16px]">
              <div className="absolute inset-y-0 left-0 pl-[16px] flex items-center pointer-events-none">
                <Search className="h-[24px] w-[24px] text-[#f97316]" />
              </div>
              <input 
                type="text" 
                placeholder="Rechercher une ville..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-[48px] pr-[16px] py-[12px] md:py-[16px] rounded-[8px] text-[16px] text-[#1e293b] placeholder:text-[#94a3b8] bg-[#ffffff] border-[2px] border-[#e2e8f0] focus:border-[#f97316] focus:ring-4 focus:ring-[#f97316]/20 shadow-sm outline-none transition-all duration-300"
              />
            </div>
            
            <div className="flex gap-4 mt-6 text-sm text-[hsl(var(--primary))] font-semibold">
              <span>Isolation Montréal</span>
              <span>•</span>
              <span>Isolation Québec</span>
              <span>•</span>
              <span>Isolation Laval</span>
            </div>
          </div>

          {filteredCities.length === 0 ? (
            <div className="text-center py-[80px] bg-[#f8fafc] rounded-[12px] border-[2px] border-dashed border-[#e2e8f0]">
              <MapPin className="w-12 h-12 text-[#94a3b8] mx-auto mb-4 opacity-50" />
              <p className="text-[20px] text-[#1e293b] font-[600] mb-2">Aucune ville trouvée pour "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-[#f97316] font-[700] hover:underline"
              >
                Afficher toutes les villes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {filteredCities.map((city) => (
                <Link 
                  key={city.slug} 
                  to={`/entrepreneur-isolation-${city.slug}`}
                  className="group bg-[#ffffff] p-[24px] md:p-[32px] rounded-[12px] shadow-sm border border-[#e2e8f0] hover:shadow-md hover:-translate-y-2 hover:bg-[#f8fafc] transition-all duration-300 flex items-start gap-[16px]"
                >
                  <MapPin className="w-[24px] h-[24px] text-[#f97316] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[18px] md:text-[20px] font-[700] text-[hsl(var(--primary))] leading-tight mb-[4px]">
                      {city.name}
                    </h3>
                    <p className="text-[14px] text-[#94a3b8]">
                      Entrepreneur isolation
                    </p>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-[#94a3b8] ml-auto group-hover:text-[#f97316] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LocalSectorsPage;