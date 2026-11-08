import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const PrivacyPolicyPage = () => {
  const breadcrumbs = [
    { label: 'Politique de confidentialité', url: '/politique-confidentialite' }
  ];

  return (
    <div className="bg-[#ffffff] text-[#1e293b] flex-grow flex flex-col">
      <SEOHead 
        title="Politique de confidentialité | isolationqc.com"
        description="Politique de confidentialité d'isolationqc.com. Protection de vos données personnelles."
        robots="index, follow"
        canonical="https://isolationqc.com/politique-confidentialite"
      />
      <BreadcrumbNav items={breadcrumbs} />

      <main className="container-default section-padding max-w-4xl mx-auto">
        <h1 className="text-h1 mb-8 text-[hsl(var(--primary))]">Politique de confidentialité</h1>
        
        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Introduction</h2>
            <p>
              Chez Isolation QC, nous accordons une importance primordiale à la confidentialité et à la sécurité des données personnelles de nos clients et visiteurs. Cette politique de confidentialité détaille comment nous recueillons, utilisons, protégeons et partageons vos informations lorsque vous utilisez notre site web et nos services. En naviguant sur notre plateforme ou en sollicitant nos services, vous acceptez les pratiques décrites dans ce document. Nous nous engageons à respecter les lois applicables au Québec et au Canada concernant la protection des renseignements personnels.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Collecte de données</h2>
            <p className="mb-2">Nous collectons différents types d'informations afin d'améliorer nos services :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informations d'identification :</strong> Nom, prénom, adresse électronique, numéro de téléphone, adresse postale.</li>
              <li><strong>Données de projet :</strong> Caractéristiques de votre habitation, type d'isolation requise, budget estimé.</li>
              <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées, temps passé sur le site, via l'utilisation de cookies et de technologies similaires.</li>
            </ul>
            <p className="mt-2">Ces données sont collectées lorsque vous remplissez nos formulaires de contact, de demande de devis, ou lorsque vous naviguez simplement sur notre site.</p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Utilisation des données</h2>
            <p className="mb-2">Vos données personnelles sont utilisées exclusivement pour les finalités suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Traiter vos demandes de devis et répondre à vos questions.</li>
              <li>Planifier et exécuter nos services d'inspection et d'isolation.</li>
              <li>Vous informer des subventions gouvernementales disponibles (ex: Logis Vert).</li>
              <li>Améliorer l'expérience utilisateur sur notre site web.</li>
              <li>Vous envoyer des communications pertinentes concernant nos services, si vous y avez consenti.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Partage des données</h2>
            <p>
              Isolation QC ne vend, ne loue ni ne commercialise vos données personnelles à des tiers. Nous pouvons partager vos informations avec nos partenaires certifiés locaux uniquement dans le but d'exécuter les travaux d'isolation que vous avez demandés. Ces partenaires sont tenus par des accords de confidentialité stricts. Nous pouvons également divulguer vos informations si la loi l'exige ou pour protéger nos droits légaux.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles rigoureuses pour protéger vos renseignements personnels contre l'accès, la modification, la divulgation ou la destruction non autorisés. Nos serveurs sont sécurisés et l'accès à vos données est strictement limité aux employés et partenaires qui en ont besoin pour l'exécution de leurs tâches.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Droits de l'utilisateur</h2>
            <p className="mb-2">Conformément à la législation en vigueur, vous disposez de plusieurs droits concernant vos données :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Le droit d'accéder à vos données personnelles.</li>
              <li>Le droit de rectifier des informations inexactes ou incomplètes.</li>
              <li>Le droit de demander la suppression de vos données.</li>
              <li>Le droit de retirer votre consentement à tout moment pour les communications marketing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Cookies</h2>
            <p>
              Notre site web utilise des cookies pour améliorer votre navigation, mémoriser vos préférences et analyser le trafic. Un cookie est un petit fichier texte stocké sur votre appareil. Vous pouvez paramétrer votre navigateur pour refuser les cookies ou vous alerter lorsqu'ils sont envoyés, mais cela pourrait affecter le bon fonctionnement de certaines fonctionnalités du site.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter à l'adresse suivante :<br /><br />
              <strong>Courriel :</strong> contact@isolationqc.com<br />
              <strong>Téléphone :</strong> (514) 123-4567<br />
              <strong>Adresse :</strong> 204 rue Saint-Sacrement, Montréal, Espace 300, QC H2Y 1W8
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;