import React from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';

const LegalNoticesPage = () => {
  const breadcrumbs = [
    { label: 'Mentions légales', url: '/mentions-legales' }
  ];

  return (
    <div className="bg-[#ffffff] text-[#1e293b] flex-grow flex flex-col">
      <SEOHead 
        title="Mentions légales | isolationqc.com"
        description="Mentions légales d'isolationqc.com. Informations légales et responsabilités."
        robots="index, follow"
        canonical="https://isolationqc.com/mentions-legales"
      />
      <BreadcrumbNav items={breadcrumbs} />

      <main className="container-default section-padding max-w-4xl mx-auto">
        <h1 className="text-h1 mb-8 text-[hsl(var(--primary))]">Mentions légales</h1>
        
        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">1. Éditeur du site</h2>
            <p>
              Le site web <strong>Isolation QC</strong> est édité par la société Isolation QC, entreprise enregistrée au Québec.<br /><br />
              <strong>Siège social :</strong> 204 rue Saint-Sacrement, Espace 300, Montréal, QC H2Y 1W8<br />
              <strong>Téléphone :</strong> (514) 123-4567<br />
              <strong>Courriel :</strong> contact@isolationqc.com<br />
              <strong>Numéro d'entreprise du Québec (NEQ) :</strong> [Numéro NEQ à venir]<br />
              <strong>Licence RBQ :</strong> [Numéro de licence à venir]
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">2. Hébergeur</h2>
            <p>
              L'hébergement de ce site est assuré par :<br /><br />
              <strong>Nom de l'hébergeur :</strong> Vercel Inc.<br />
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              <strong>Site web :</strong> https://vercel.com
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">3. Responsable de publication</h2>
            <p>
              <strong>Directeur de la publication :</strong> L'équipe de direction d'Isolation QC.<br />
              Pour toute remarque concernant le contenu du site, veuillez nous écrire à contact@isolationqc.com.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève des législations québécoise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et photographiques. La reproduction, l'adaptation, la modification ou la diffusion de tout ou partie de ce site, sous quelque forme que ce soit, est formellement interdite sauf autorisation expresse du responsable de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">5. Limitation de responsabilité</h2>
            <p>
              Isolation QC s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, l'entreprise ne garantit pas l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. Les informations présentées sont données à titre indicatif et ne sauraient engager la responsabilité d'Isolation QC en cas d'erreur ou d'omission.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">6. Liens externes</h2>
            <p>
              Le site peut contenir des liens hypertextes menant vers d'autres sites web indépendants. Isolation QC n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs politiques de confidentialité ou leurs pratiques.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">7. Données personnelles</h2>
            <p>
              Le traitement des données à caractère personnel effectuées via le site est soumis à notre Politique de confidentialité, consultable sur la page dédiée. Conformément à la Loi 25 sur la protection des renseignements personnels au Québec, vous disposez d'un droit d'accès, de modification et de suppression de vos données.
            </p>
          </section>

          <section>
            <h2 className="text-h3 mb-4 text-[hsl(var(--primary))]">8. Contact</h2>
            <p>
              Pour toute question juridique ou demande concernant ce site internet, vous pouvez nous contacter à <strong>contact@isolationqc.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LegalNoticesPage;