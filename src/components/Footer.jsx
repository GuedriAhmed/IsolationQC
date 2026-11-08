
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#0f172a] text-[#ffffff] pt-[64px] md:pt-[80px] pb-[32px] md:pb-[48px] transition-[var(--transition)]">
      <div className="container-default">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[48px] mb-[64px]">
          
          {/* COLUMN 1: Logo & Description */}
          <div className="space-y-[16px]">
            <Link to="/" className="text-[32px] md:text-[40px] font-[700] font-heading tracking-tight inline-block text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">
              Isolation <span className="text-[#f97316]">QC</span>
            </Link>
            <p className="text-[#e2e8f0] text-[14px] leading-relaxed">
              Entrepreneur isolation au Québec. Experts en efficacité énergétique, isolation résidentielle et confort thermique.
            </p>
            <div className="flex gap-[16px] pt-[8px]">
              <a href="https://www.facebook.com/profile.php?id=61586275876169" aria-label="Facebook" className="text-[#e2e8f0] hover:text-[#f97316] hover:-translate-y-1 transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/energiepro2026?igsh=aG95cXJwaXl3emhx" aria-label="Instagram" className="text-[#e2e8f0] hover:text-[#f97316] hover:-translate-y-1 transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Services */}
          <div>
            <h4 className="text-[16px] font-[700] mb-[24px] font-heading text-[#ffffff]">Services</h4>
            <ul className="space-y-[12px] text-[14px]">
              {[
                { name: 'Isolation grenier', path: '/isolation-grenier' },
                { name: 'Isolation entre-toit', path: '/isolation-toit' },
                { name: 'Thermopompe', path: '/thermopompe' },
                { name: 'Devis & Prix', path: '/devis-prix' },
                { name: 'Inspection gratuite', path: '/inspection-gratuite' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-[#ffffff] hover:text-[#f97316] hover:translate-x-2 inline-flex items-center gap-[8px] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm group"
                  >
                    <ArrowRight size={14} className="text-[#f97316] opacity-0 -ml-4 transition-[var(--transition)] group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Secteurs desservis */}
          <div>
            <h4 className="text-[16px] font-[700] mb-[24px] font-heading text-[#ffffff]">Secteurs desservis</h4>
            <ul className="space-y-[12px] text-[14px]">
              {[
                { name: 'Montréal', path: '/entrepreneur-isolation-montreal' },
                { name: 'Québec', path: '/entrepreneur-isolation-quebec' },
                { name: 'Laval', path: '/entrepreneur-isolation-laval' },
                { name: 'Gatineau', path: '/entrepreneur-isolation-gatineau' },
                { name: 'Longueuil', path: '/entrepreneur-isolation-longueuil' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-[#ffffff] hover:text-[#f97316] hover:translate-x-2 inline-block transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-[8px]">
                <Link 
                  to="/secteurs-desservis" 
                  className="text-[#f97316] font-[700] hover:text-[#ea580c] hover:translate-x-1 inline-flex items-center gap-[4px] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm"
                >
                  + Voir tous les secteurs
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h4 className="text-[16px] font-[700] mb-[24px] font-heading text-[#ffffff]">Contact</h4>
            <ul className="space-y-[16px] mb-[32px] text-[14px]">
              <li className="flex items-start gap-[12px] group">
                <MapPin size={20} className="text-[#e2e8f0] group-hover:text-[#f97316] shrink-0 mt-0.5 group-hover:scale-110 transition-[var(--transition)]" />
                <span className="text-[#ffffff] leading-relaxed text-[14px]">
                  204 rue Saint-Sacrement, <br />
                  Montréal, Espace 300
                </span>
              </li>
              <li className="flex items-center gap-[12px] group">
                <Phone size={20} className="text-[#e2e8f0] group-hover:text-[#f97316] shrink-0 group-hover:scale-110 transition-[var(--transition)]" />
                <a href="tel:514-312-0462" className="text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">
                  514-312-0462
                </a>
              </li>
              <li className="flex items-center gap-[12px] group">
                <Mail size={20} className="text-[#e2e8f0] group-hover:text-[#f97316] shrink-0 group-hover:scale-110 transition-[var(--transition)]" />
                <a href="mailto:contact@isolationqc.com" className="text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">
                  contact@isolationqc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[24px] border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-[16px] text-[12px] text-[#94a3b8]">
          <p>&copy; {new Date().getFullYear()} Isolation QC. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center gap-[16px] md:gap-[24px]">
            <Link to="/politique-confidentialite" className="text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">Politique de confidentialité</Link>
            <Link to="/conditions-utilisation" className="text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">Conditions d'utilisation</Link>
            <Link to="/mentions-legales" className="text-[#ffffff] hover:text-[#f97316] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-sm">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
