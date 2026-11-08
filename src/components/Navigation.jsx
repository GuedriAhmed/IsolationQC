import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { useCookies } from '../CookieContext';
import { Menu, X, Phone, Cookie } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { openModal } = useCookies();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['home', 'services', 'benefits', 'certifications', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.services'), href: '#services', id: 'services' },
    { name: t('nav.benefits'), href: '#benefits', id: 'benefits' },
    { name: t('nav.certifications'), href: '#certifications', id: 'certifications' },
    { name: t('nav.blog'), href: '#blog', id: 'blog' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-2.5 rounded-xl font-bold text-xl shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
              Isolation QC
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-medium text-sm lg:text-base tracking-wide transition-colors py-2 ${
                  activeSection === link.id
                    ? 'text-primary-600'
                    : scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                  />
                )}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-400 transition-all duration-300 w-0 group-hover:w-full ${activeSection === link.id ? 'hidden' : ''}`}></span>
              </a>
            ))}
            
            <button
              onClick={openModal}
              title={t('cookies.links.manage')}
              className={`p-2 rounded-full transition-colors ${
                 scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
               <Cookie size={18} />
            </button>

            <button
              onClick={toggleLanguage}
              className={`px-4 py-1.5 rounded-full border-2 font-bold text-sm transition-all hover:scale-105 active:scale-95 ${
                 scrolled 
                   ? 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white' 
                   : 'border-white/50 text-white hover:bg-white hover:text-primary-600'
              }`}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <a
              href={`tel:${t('common.phoneNumber')}`}
              className="flex items-center gap-2 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-accent-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span className="font-semibold text-sm">{t('common.phoneNumber')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
               <X size={28} className="text-gray-800" />
            ) : (
               <Menu size={28} className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col pt-24 px-6"
              >
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`text-xl font-medium transition-colors ${
                        activeSection === link.id ? 'text-primary-600 font-bold' : 'text-gray-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <hr className="border-gray-100 my-2" />
                  
                  <button
                    onClick={() => {
                      openModal();
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 text-gray-600 font-medium"
                  >
                     <Cookie size={20} />
                     {t('cookies.links.manage')}
                  </button>

                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsOpen(false);
                    }}
                    className="text-left font-bold text-primary-600 text-lg flex items-center gap-2"
                  >
                    <span>{language === 'fr' ? 'Switch to English' : 'Passer en Français'}</span>
                  </button>
                  <a
                    href={`tel:${t('common.phoneNumber')}`}
                    className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-xl font-bold mt-4 shadow-lg shadow-primary-500/20 active:scale-95 transition-transform"
                  >
                    <Phone size={20} />
                    {t('common.phoneNumber')}
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;