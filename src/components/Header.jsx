
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Secteurs desservis', path: '/secteurs-desservis' },
    { name: 'Blog', path: '/blog' },
    { name: 'Devis & Prix', path: '/devis-prix' },
    { name: 'Inspection gratuite', path: '/inspection-gratuite' },
    { name: 'Contactez-nous', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container-default flex items-center justify-between">
        
        <Link 
          to="/" 
          className="text-[24px] md:text-[28px] font-bold font-heading tracking-tight text-[hsl(var(--primary))] flex items-center gap-2 z-50 hover:opacity-80 hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm"
        >
          Isolation <span className="text-[hsl(var(--accent))]">QC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[16px] font-semibold transition-[var(--transition)] hover:text-[hsl(var(--accent))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm ${
                location.pathname === link.path 
                  ? 'text-[hsl(var(--accent))]' 
                  : link.path === '/inspection-gratuite' 
                    ? 'text-[hsl(var(--accent))] hover:text-[#ea580c]' 
                    : 'text-[hsl(var(--foreground))]'
              }`}
            >
              {link.path === '/inspection-gratuite' ? (
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent))] animate-pulse"></span>
                  {link.name}
                </span>
              ) : (
                link.name
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:514-312-0462" className="flex items-center gap-2 text-[hsl(var(--foreground))] font-bold hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm">
            <Phone size={20} className="text-[hsl(var(--accent))]" />
            <span className="hidden xl:inline text-[16px]">514-312-0462</span>
          </a>
        </div>

        <button 
          className="lg:hidden relative z-50 p-2 text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm hover:text-[hsl(var(--accent))] transition-[var(--transition)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <div className={`
        fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <nav className="flex flex-col gap-6 text-[18px] font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`pb-3 border-b border-[hsl(var(--border))] transition-[var(--transition)] ${
                location.pathname === link.path ? 'text-[hsl(var(--accent))] border-[hsl(var(--accent))]' : 'text-[hsl(var(--foreground))]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-8 flex flex-col gap-4">
          <a href="tel:514-312-0462" className="flex items-center justify-center gap-2 text-[hsl(var(--foreground))] font-bold p-4 bg-[hsl(var(--secondary))] rounded-[var(--radius)]">
            <Phone size={20} className="text-[hsl(var(--accent))]" />
            514-312-0462
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
