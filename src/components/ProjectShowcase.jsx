import React from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ProjectShowcase = () => {
    const { language } = useLanguage();

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal className="text-center mb-16">
                     <span className="text-accent-400 font-bold tracking-wider uppercase text-sm mb-2 block">
                        {language === 'fr' ? 'Portfolio' : 'Portfolio'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                        {language === 'fr' ? 'Nos Réalisations' : 'Our Projects'}
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {language === 'fr' 
                            ? 'Voyez la différence par vous-même. Des résultats durables.' 
                            : 'See the difference for yourself. Sustainable results.'}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Before Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                    >
                        <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                        <div className="h-80 md:h-96">
                            <img 
                                src="https://images.unsplash.com/photo-1625577816396-fbf677c54cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Avant décontamination" 
                                loading="lazy"
                                className="w-full h-full object-cover filter brightness-75 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                             <span className="px-4 py-1.5 rounded-lg bg-red-500 text-white font-bold text-sm shadow-lg tracking-wider">
                                {language === 'fr' ? 'AVANT' : 'BEFORE'}
                             </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <h3 className="text-xl font-bold text-white mb-1">
                                {language === 'fr' ? 'Contamination & Moisissure' : 'Contamination & Mold'}
                            </h3>
                            <p className="text-red-200 text-sm">
                                {language === 'fr' ? 'Risques respiratoires et perte de chaleur importante.' : 'Respiratory risks and significant heat loss.'}
                            </p>
                        </div>
                    </motion.div>

                    {/* After Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary-500/30"
                    >
                         <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                         <div className="h-80 md:h-96">
                            <img 
                                src="https://images.unsplash.com/photo-1585142130619-c0e10964d66f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                                alt="Après isolation" 
                                loading="lazy"
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute top-4 left-4 z-20">
                             <span className="px-4 py-1.5 rounded-lg bg-primary-600 text-white font-bold text-sm shadow-lg tracking-wider">
                                {language === 'fr' ? 'APRÈS' : 'AFTER'}
                             </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <h3 className="text-xl font-bold text-white mb-1">
                                {language === 'fr' ? 'Isolation Cellulose R-60' : 'Cellulose R-60 Insulation'}
                            </h3>
                            <p className="text-primary-200 text-sm">
                                {language === 'fr' ? 'Confort optimal et économies garanties.' : 'Optimal comfort and guaranteed savings.'}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;