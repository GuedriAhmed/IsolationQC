import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const TermsOfUsePage = () => {
  const breadcrumbs = [
    { label: "Conditions d'utilisation", url: '/conditions-utilisation' }
  ];

  return (
    <div className="bg-[#ffffff] text-[#1e293b] flex-grow flex flex-col">
      <SEOHead 
        title="Conditions d'utilisation | isolationqc.com"
        description="Conditions d'utilisation d'isolationqc.com. Droits et obligations des utilisateurs."
        robots="index, follow"
        canonical="https://isolationqc.com/conditions-utilisation"
      />
      <BreadcrumbNav items={breadcrumbs} />

      <main className="container-default section-padding max-w-4xl mx-auto">
        <h1 className="text-h1 mb-8 text-[hsl(var(--primary))]">Conditions d'utilisation</h1>
        
        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">1. Acceptation des conditions</h2>
            <p>
              En accédant et en naviguant sur le site web d'Isolation QC (isolationqc.com), vous acceptez d'être lié par les présentes conditions d'utilisation, toutes les lois et réglementations applicables, et vous convenez que vous êtes responsable du respect de ces règles. Si vous n'êtes pas d'accord avec l'un de ces termes, il vous est interdit d'utiliser ou d'accéder à ce site.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">2. Utilisation du site</h2>
            <p className="mb-2">Il vous est accordé une licence temporaire et non exclusive d'utilisation du site à des fins personnelles et non commerciales. En vertu de cette licence, vous ne pouvez pas :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifier, copier ou reproduire le matériel présenté.</li>
              <li>Utiliser le matériel à des fins commerciales ou pour toute exposition publique.</li>
              <li>Tenter de décompiler ou de faire de l'ingénierie inverse sur tout logiciel contenu sur le site.</li>
              <li>Supprimer les mentions de droits d'auteur ou autres mentions de propriété.</li>
              <li>Transférer le matériel à une autre personne ou héberger le matériel sur un autre serveur ("mirroring").</li>
            </ul>
            <p className="mt-2">Cette licence prendra fin automatiquement si vous violez l'une de ces restrictions et peut être résiliée par Isolation QC à tout moment.</p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">3. Propriété intellectuelle</h2>
            <p>
              Le contenu, l'organisation, les graphiques, le design, la compilation et d'autres éléments liés au site sont protégés par les lois sur les droits d'auteur, les marques de commerce et autres droits de propriété intellectuelle applicables. La copie, la redistribution ou la publication par vous de toute partie du site est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">4. Limitation de responsabilité</h2>
            <p>
              Dans la mesure permise par la loi, Isolation QC et ses fournisseurs ne sauraient être tenus responsables de tout dommage direct, indirect, accidentel, spécial ou consécutif (y compris, sans s'y limiter, les dommages pour perte de données ou de profit, ou en raison d'une interruption des affaires) découlant de l'utilisation ou de l'incapacité à utiliser le matériel sur le site d'Isolation QC, même si un représentant autorisé a été informé de la possibilité de tels dommages.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">5. Modification des conditions</h2>
            <p>
              Isolation QC se réserve le droit de réviser ces conditions d'utilisation à tout moment et sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version actuelle des présentes conditions d'utilisation. Nous vous invitons à consulter cette page régulièrement.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">6. Résiliation</h2>
            <p>
              Nous nous réservons le droit, à notre seule discrétion, de restreindre, de suspendre ou de mettre fin à votre accès à tout ou partie de notre site, à tout moment, pour toute raison, avec ou sans préavis et sans engager notre responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">7. Droit applicable</h2>
            <p>
              Toute réclamation relative au site web d'Isolation QC sera régie par les lois de la province de Québec, sans égard à ses dispositions en matière de conflits de lois. Les tribunaux du district de Montréal seront seuls compétents pour entendre tout litige s'y rattachant.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">8. Contact</h2>
            <p>
              Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à :<br /><br />
              <strong>Courriel :</strong> contact@isolationqc.com<br />
              <strong>Téléphone :</strong> (514) 123-4567
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;