import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InspectionPromoBanner = ({ type = 'full' }) => {
  if (type === 'compact') {
    return (
      <div className="bg-accent text-accent-foreground py-3 px-4 w-full text-center">
        <div className="container-default flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 font-medium text-sm md:text-base">
            <Search size={18} className="shrink-0" />
            <span>Prévenez les problèmes coûteux avec notre inspection gratuite!</span>
          </div>
          <Button asChild size="sm" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-bold whitespace-nowrap">
            <Link to="/inspection-gratuite">
              Réserver <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Full version
  return (
    <section className="bg-accent text-accent-foreground py-12 md:py-16 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
      
      <div className="container-default relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Search size={24} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold m-0 leading-tight">Inspection Gratuite de votre Entretoit</h2>
            </div>
            <p className="text-white/90 text-lg mb-0 text-balance">
              Ne laissez pas l'humidité ou le manque d'isolation gonfler vos factures. Réservez une inspection complète gratuite et découvrez vos options d'aide financière Logis Vert.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            <Button asChild size="lg" className="w-full md:w-auto bg-white text-accent hover:bg-slate-100 h-14 px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <Link to="/inspection-gratuite">
                Réserver mon inspection <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspectionPromoBanner;