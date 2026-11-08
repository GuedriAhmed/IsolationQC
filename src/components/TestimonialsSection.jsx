
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marc Dubois',
      city: 'Montréal, QC',
      photo: 'https://images.unsplash.com/photo-1609741199878-3e8ebdb1dbc7?w=400&q=80',
      text: 'Excellent service! L\'équipe était très professionnelle et a terminé le travail rapidement. Ma maison est maintenant beaucoup plus confortable. Je recommande vivement!',
      rating: 5
    },
    {
      name: 'Sophie Gagnon',
      city: 'Québec, QC',
      photo: 'https://images.unsplash.com/photo-1670584300913-eda2da71e1e8?w=400&q=80',
      text: 'Incroyable! Ma facture de chauffage a baissé de 35% après l\'isolation du grenier. L\'équipe a été très courtoise et le devis était transparent. Merci!',
      rating: 5
    },
    {
      name: 'Jean-Pierre Côté',
      city: 'Laval, QC',
      photo: 'https://images.unsplash.com/photo-1580128637392-35b81ba47467?w=400&q=80',
      text: 'Service rapide et efficace. L\'équipe a bien expliqué les options et nous a aidés à choisir la meilleure solution. Très satisfait du résultat!',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-[hsl(var(--secondary))]">
      <div className="container-default">
        <div className="text-center max-w-3xl mx-auto mb-[48px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h2 mb-[16px] text-[hsl(var(--primary))]"
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body text-[hsl(var(--foreground-secondary))]"
          >
            Des centaines de clients satisfaits à travers le Québec
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[var(--radius-lg)] p-[32px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-[hsl(var(--primary))] transform rotate-180" />
              </div>

              <div className="flex flex-col items-center text-center mb-[24px]">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-[16px] border-4 border-[hsl(var(--accent))]/20">
                  <img 
                    src={testimonial.photo} 
                    alt={`Portrait de ${testimonial.name}, client satisfait d'Isolation QC`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-h4 text-[hsl(var(--primary))] mb-[4px]">{testimonial.name}</h4>
                <p className="text-small text-[hsl(var(--foreground-secondary))]">{testimonial.city}</p>
              </div>

              <p className="text-body text-[hsl(var(--foreground-secondary))] leading-relaxed mb-[24px] flex-grow italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-center gap-[4px] pt-[16px] border-t border-[hsl(var(--border))]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
