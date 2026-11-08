
import React, { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/LanguageContext';
import { CookieProvider } from '@/CookieContext';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { SettingsProvider } from '@/SettingsContext';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import PageTransition from '@/components/PageTransition';
import CanonicalTag from '@/components/CanonicalTag';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import CookiePreferencesModal from '@/components/CookiePreferencesModal';
import LoadingScreen from '@/components/LoadingScreen';

const HomePage = lazy(() => import('@/components/HomePage'));
const ServicesPage = lazy(() => import('@/components/ServicesPage'));
const AdminPanel = lazy(() => import('@/components/AdminPanel'));
const CookiePolicyPage = lazy(() => import('@/components/CookiePolicyPage'));
const AdminMessagesPage = lazy(() => import('@/components/AdminMessagesPage'));
const ProtectedAdminRoute = lazy(() => import('@/components/ProtectedAdminRoute'));

const IsolationGrenierPage = lazy(() => import('@/components/IsolationGrenierPage'));
const IsolationToitPage = lazy(() => import('@/components/IsolationToitPage'));
const IsolationEntretoitPage = lazy(() => import('@/components/IsolationEntretoitPage'));
const IsolationMursPage = lazy(() => import('@/components/IsolationMursPage'));
const IsolationSoussolPage = lazy(() => import('@/components/IsolationSoussolPage'));
const ThermopompePage = lazy(() => import('@/components/ThermopompePage'));
const InspectionThermiquePage = lazy(() => import('@/components/InspectionThermiquePage'));
const DevisEtPrixPage = lazy(() => import('@/components/DevisEtPrixPage'));
const InspectionGratuitePage = lazy(() => import('@/components/InspectionGratuitePage'));

const InspectionGrenierEntretoitPage = lazy(() => import('@/components/InspectionGrenierEntretoitPage'));
const SubventionsIsolationPage = lazy(() => import('@/components/SubventionsIsolationPage'));
const CalculEconomiesEnergiePage = lazy(() => import('@/components/CalculEconomiesEnergiePage'));
const FinancementIsolationPage = lazy(() => import('@/components/FinancementIsolationPage'));

const PrivacyPolicyPage = lazy(() => import('@/components/PrivacyPolicyPage'));
const LegalNoticesPage = lazy(() => import('@/components/LegalNoticesPage'));
const TermsOfUsePage = lazy(() => import('@/components/TermsOfUsePage'));

const LocalSectorsPage = lazy(() => import('@/components/LocalSectorsPage'));
const LocalCityPage = lazy(() => import('@/components/LocalCityPage'));
const ContactPage = lazy(() => import('@/components/ContactPage'));

const BlogPage = lazy(() => import('@/components/BlogPage'));
const Article1IsolationGrenier = lazy(() => import('@/components/Article1IsolationGrenier'));
const Article2Moisissure = lazy(() => import('@/components/Article2Moisissure'));
const Article3Vermiculite = lazy(() => import('@/components/Article3Vermiculite'));
const Article1InspectionGrenier = lazy(() => import('@/components/Article1InspectionGrenier'));
const Article4FactureHydro = lazy(() => import('@/components/Article4FactureHydro'));
const Article5MaisonMalIsolee = lazy(() => import('@/components/Article5MaisonMalIsolee'));

import { localCities } from '@/data/LocalCityData';

const ShortcutListener = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        navigate('/admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
};

const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return children;
};

const LoginPlaceholder = () => (
  <PageTransition>
    <div className="container-default py-24 text-center">
      <h1 className="text-h1 mb-6 text-primary">Connexion</h1>
      <p>Cette page est en cours de construction.</p>
    </div>
  </PageTransition>
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <LanguageProvider>
          <CookieProvider>
            <SettingsProvider>
              <BrowserRouter>
                <ScrollToTopWrapper>
                  <CanonicalTag />
                  
                  <div className="min-h-screen font-body bg-[hsl(var(--background))] text-[hsl(var(--foreground))] flex flex-col w-full">
                    
                    <ShortcutListener />
                    <Header />
                    
                    <main className="flex-grow flex flex-col pt-[72px] md:pt-[88px] w-full relative">
                      <Suspense fallback={<LoadingScreen inline />}>
                        <Routes>
                          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
                          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
                          <Route path="/login" element={<LoginPlaceholder />} />
                          
                          <Route path="/isolation-grenier" element={<PageTransition><IsolationGrenierPage /></PageTransition>} />
                          <Route path="/isolation-toit" element={<PageTransition><IsolationToitPage /></PageTransition>} />
                          <Route path="/isolation-entre-toit" element={<PageTransition><IsolationEntretoitPage /></PageTransition>} />
                          <Route path="/isolation-murs" element={<PageTransition><IsolationMursPage /></PageTransition>} />
                          <Route path="/isolation-sous-sol" element={<PageTransition><IsolationSoussolPage /></PageTransition>} />
                          <Route path="/thermopompe" element={<PageTransition><ThermopompePage /></PageTransition>} />
                          <Route path="/inspection-thermique" element={<PageTransition><InspectionThermiquePage /></PageTransition>} />
                          <Route path="/devis-prix" element={<PageTransition><DevisEtPrixPage /></PageTransition>} />
                          <Route path="/devis-et-prix" element={<PageTransition><DevisEtPrixPage /></PageTransition>} />
                          <Route path="/inspection-gratuite" element={<PageTransition><InspectionGratuitePage /></PageTransition>} />

                          <Route path="/inspection-grenier-entre-toit" element={<PageTransition><InspectionGrenierEntretoitPage /></PageTransition>} />
                          <Route path="/subventions-isolation-quebec" element={<PageTransition><SubventionsIsolationPage /></PageTransition>} />
                          <Route path="/calcul-economies-energie" element={<PageTransition><CalculEconomiesEnergiePage /></PageTransition>} />
                          <Route path="/financement-isolation" element={<PageTransition><FinancementIsolationPage /></PageTransition>} />

                          <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
                          <Route path="/blog/isolation-grenier-quebec-economie-energie" element={<PageTransition><Article1IsolationGrenier /></PageTransition>} />
                          <Route path="/blog/moisissure-grenier-causes-solutions" element={<PageTransition><Article2Moisissure /></PageTransition>} />
                          <Route path="/blog/vermiculite-amiante-grenier-danger" element={<PageTransition><Article3Vermiculite /></PageTransition>} />
                          <Route path="/blog/inspection-grenier-essentielle-10-ans-quebec" element={<PageTransition><Article1InspectionGrenier /></PageTransition>} />
                          <Route path="/blog/facture-hydro-elevee-solutions" element={<PageTransition><Article4FactureHydro /></PageTransition>} />
                          <Route path="/blog/maison-mal-isolee-7-signes" element={<PageTransition><Article5MaisonMalIsolee /></PageTransition>} />

                          <Route path="/secteurs-desservis" element={<PageTransition><LocalSectorsPage /></PageTransition>} />
                          {localCities.map((city) => (
                            <Route 
                              key={city.slug}
                              path={`/entrepreneur-isolation-${city.slug}`} 
                              element={<PageTransition><LocalCityPage data={city} /></PageTransition>} 
                            />
                          ))}

                          <Route path="/politique-confidentialite" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
                          <Route path="/mentions-legales" element={<PageTransition><LegalNoticesPage /></PageTransition>} />
                          <Route path="/conditions-utilisation" element={<PageTransition><TermsOfUsePage /></PageTransition>} />
                          <Route path="/cookies" element={<PageTransition><CookiePolicyPage /></PageTransition>} />

                          <Route path="/admin" element={<PageTransition><AdminPanel /></PageTransition>} />
                          <Route 
                            path="/admin/messages" 
                            element={
                              <PageTransition>
                                <ProtectedAdminRoute>
                                  <AdminMessagesPage />
                                </ProtectedAdminRoute>
                              </PageTransition>
                            } 
                          />
                        </Routes>
                      </Suspense>
                    </main>
                    
                    <Footer />
                    
                    <CookieBanner />
                    <Suspense fallback={null}>
                      <CookiePreferencesModal />
                    </Suspense>
                    <Toaster />
                  </div>
                </ScrollToTopWrapper>
              </BrowserRouter>
            </SettingsProvider>
          </CookieProvider>
        </LanguageProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
