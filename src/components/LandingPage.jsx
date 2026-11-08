import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectShowcase from './ProjectShowcase';
import BenefitsSection from './BenefitsSection';
import CertificationsSection from './CertificationsSection';
import TestimonialsSection from './TestimonialsSection';
import EnergyCalculator from './EnergyCalculator';
import RisksWarningSection from './RisksWarningSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ChatBot from './ChatBot/ChatBot';
import JSONLDSchema from './JSONLDSchema';
import { trackPageView, trackScrollEvent } from '../lib/gtmClient';
import { useScroll } from 'framer-motion';
import useGoogleAds from '../hooks/useGoogleAds';

const LandingPage = () => {
  const scrollMilestones = useRef(new Set());
  const { trackPageView: trackGoogleAdsPageView } = useGoogleAds();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    trackPageView(window.location.pathname);
    trackGoogleAdsPageView();

    const handleScroll = () => {
      const h = document.documentElement;
      const b = document.body;
      const st = 'scrollTop';
      const sh = 'scrollHeight';

      const scrollTop = h[st] || b[st];
      const scrollHeight = (h[sh] || b[sh]) - h.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;

      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(m => {
        if (percent >= m && !scrollMilestones.current.has(m)) {
          scrollMilestones.current.add(m);
          trackScrollEvent(m);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackGoogleAdsPageView]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Isolation Grenier Québec | Devis Gratuit Isolation QC</title>
        <meta name="description" content="Isolation grenier au Québec avec R50 certifiée. Économisez jusqu'à 30% en chauffage. Devis gratuit en 24h. Experts depuis 10 ans." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="fr-CA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://isolationqc.com/" />

        <meta property="og:title" content="Isolation Grenier Québec | Devis Gratuit Isolation QC" />
        <meta property="og:description" content="Isolation grenier au Québec avec R50 certifiée. Économisez jusqu'à 30% en chauffage. Devis gratuit en 24h." />
        <meta property="og:url" content="https://isolationqc.com/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Isolation Grenier Québec | Devis Gratuit" />
        <meta name="twitter:description" content="Isolation grenier au Québec. Économisez 30% en chauffage. Devis gratuit en 24h." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <JSONLDSchema type="LocalBusiness" data={{
        name: "Isolation QC",
        description: "Expert en isolation grenier au Québec",
        telephone: "+15141234567",
        url: "https://isolationqc.com/",
        areaServed: "Québec",
        serviceType: "Isolation Grenier"
      }} />

      <JSONLDSchema type="Organization" data={{
        name: "Isolation QC",
        url: "https://isolationqc.com/",
        logo: "https://isolationqc.com/favicon.svg",
        description: "Solutions d'isolation grenier certifiées au Québec",
        foundingDate: "2014",
        areaServed: "Québec"
      }} />

      <JSONLDSchema type="Service" data={{
        name: "Isolation Grenier",
        description: "Service d'isolation grenier avec certification R50",
        provider: "Isolation QC",
        areaServed: "Québec",
        serviceType: "Isolation Grenier"
      }} />

      <JSONLDSchema type="BreadcrumbList" data={{
        items: [
          { name: "Accueil", url: "https://isolationqc.com/" }
        ]
      }} />

      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectShowcase />
        <BenefitsSection />
        <CertificationsSection />
        <TestimonialsSection />
        <EnergyCalculator />
        <RisksWarningSection />
        <BlogSection />
        <ContactSection />
      </main>
      <ChatBot />
      <Footer />
    </>
  );
};

export default LandingPage;