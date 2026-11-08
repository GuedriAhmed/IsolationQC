
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import useContactForm from '../hooks/useContactForm';

const ContactSection = () => {
  const { t } = useLanguage();
  const { formData, handleChange, submitForm, isLoading } = useContactForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm('Contact Section Form');
  };

  const InputField = ({ label, name, type = "text", required = false }) => (
    <div className="relative z-0 group">
        <input
            type={type}
            name={name}
            id={name}
            required={required}
            value={formData[name]}
            onChange={handleChange}
            className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer transition-colors disabled:opacity-50"
            placeholder=" "
            disabled={isLoading}
        />
        <label 
            htmlFor={name} 
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label} {required && <span className="text-red-500">*</span>}
        </label>
    </div>
  );

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
       <div className="absolute -left-40 top-20 w-[600px] h-[600px] bg-accent-100 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
       <div className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-primary-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">{t('contact.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/30 transition-colors" />

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8 font-heading">Coordonnées</h3>
                    
                    <div className="space-y-8">
                        <a href="tel:514-312-0462" className="flex items-center gap-5 group/item">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover/item:bg-primary-500 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{t('contact.phone')}</p>
                                <span className="text-xl font-bold group-hover/item:text-primary-300 transition-colors">514-312-0462</span>
                            </div>
                        </a>

                        <a href="mailto:contact@isolationqc.com" className="flex items-center gap-5 group/item">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover/item:bg-primary-500 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{t('contact.email')}</p>
                                <span className="text-lg font-bold group-hover/item:text-primary-300 transition-colors break-all">contact@isolationqc.com</span>
                            </div>
                        </a>

                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t('common.address'))}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group/item">
                            <div className="bg-white/10 p-4 rounded-2xl group-hover/item:bg-primary-500 transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Bureau / Office</p>
                                <span className="text-lg font-medium group-hover/item:text-primary-300 transition-colors">{t('common.address')}</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <p className="text-sm text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-2 animate-pulse"></span>
                        Ouvert maintenant (8h - 18h)
                    </p>
                </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-64 relative group">
                <img 
                    src="https://images.unsplash.com/photo-1572891458752-1fde7b8074b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Bureau Isolation QC" 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-lg font-heading">Notre Équipe à Montréal</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label={t('contact.name')} name="name" required />
                <InputField label={t('contact.phone')} name="phone" type="tel" required />
              </div>

              <InputField label={t('contact.email')} name="email" type="email" required />
              <InputField label="Adresse (Optionnel)" name="address" required={false} />

              <div className="relative z-0 group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer cursor-pointer disabled:opacity-50"
                  disabled={isLoading}
                >
                  <option value="" disabled className="text-gray-500">Selectionnez un service...</option>
                  <option value="inspection">Inspection Gratuite</option>
                  <option value="isolation">Isolation</option>
                  <option value="decontamination">Décontamination</option>
                </select>
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] text-primary-600">
                    {t('contact.service')}
                </label>
              </div>

              <div className="relative z-0 group">
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer resize-none disabled:opacity-50"
                  placeholder=" "
                  disabled={isLoading}
                ></textarea>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    {t('contact.message')} *
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="consentement_contact" 
                  name="consentement" 
                  checked={formData.consentement} 
                  onChange={handleChange} 
                  required 
                  className="mt-1"
                />
                <label htmlFor="consentement_contact" className="text-sm text-gray-600 leading-tight">
                  J'autorise isolationqc.com et ses installateurs à me contacter par SMS, email et téléphone concernant mes besoins en isolation. *
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" /> 
                        <span>Envoi en cours...</span>
                    </>
                ) : (
                    <>
                        {t('contact.send')} <Send size={18} />
                    </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
