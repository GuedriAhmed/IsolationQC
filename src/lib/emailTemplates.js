// Utilities for generating email HTML content
// Used by Admin preview and shared reference

export const getAdminEmailHTML = (nom, telephone, email, adresse, message, submissionId, submissionDate) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background-color: #ffffff; }
          .header { background-color: #0f172a; color: white; padding: 24px; text-align: center; }
          .content { padding: 32px 24px; }
          .field { margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .field:last-child { border-bottom: none; }
          .label { font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .value { font-size: 16px; color: #0f172a; font-weight: 500; }
          .message-box { background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; margin-top: 4px; white-space: pre-wrap; }
          .footer { background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          .tag { display: inline-block; padding: 4px 8px; background-color: #e0f2fe; color: #0369a1; border-radius: 4px; font-size: 12px; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 20px;">Nouvelle Demande de Contact</h1>
            <p style="margin:8px 0 0 0; opacity: 0.8;">Isolation QC & Agence Doorway</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Date de réception</div>
              <div class="value">${new Date(submissionDate).toLocaleString('fr-CA', { dateStyle: 'long', timeStyle: 'short' })}</div>
            </div>
            
            <div class="field">
              <div class="label">Nom du client</div>
              <div class="value">${nom}</div>
            </div>

            <div class="field">
              <div class="label">Coordonnées</div>
              <div class="value">
                <div style="margin-bottom: 4px;">📞 <a href="tel:${telephone}" style="color: #2563eb; text-decoration: none;">${telephone}</a></div>
                <div>✉️ <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
            </div>

            <div class="field">
              <div class="label">Adresse</div>
              <div class="value">${adresse || 'Non spécifiée'}</div>
            </div>

            <div class="field">
              <div class="label">Message</div>
              <div class="value message-box">${message}</div>
            </div>

            <div class="field">
              <div class="label">ID de Référence</div>
              <div class="value"><span class="tag">${submissionId}</span></div>
            </div>
          </div>
          <div class="footer">
            <p>Cet e-mail a été envoyé automatiquement via le système de contact Isolation QC.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const getClientConfirmationHTML = (nom, submissionId) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); color: white; padding: 40px 24px; text-align: center; }
          .content { padding: 40px 24px; background-color: #ffffff; }
          .footer { background-color: #f8fafc; padding: 24px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .highlight-box { background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; margin: 24px 0; border-radius: 0 4px 4px 0; }
          .ref-number { font-family: monospace; font-size: 16px; background-color: #f1f5f9; padding: 8px 16px; border-radius: 6px; display: inline-block; margin-top: 8px; color: #0f172a; }
          .btn { display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 24px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 24px; font-weight: 700;">Merci pour votre demande!</h1>
            <p style="margin:8px 0 0 0; opacity: 0.9;">Nous avons bien reçu vos informations.</p>
          </div>
          <div class="content">
            <p style="font-size: 16px;">Bonjour <strong>${nom}</strong>,</p>
            
            <p>Merci d'avoir contacté <strong>Isolation QC</strong>. Votre demande a été enregistrée avec succès et transmise à notre équipe d'experts.</p>
            
            <div class="highlight-box">
              <p style="margin:0; color: #1e40af; font-weight: 500;">📅 Nous nous engageons à vous répondre dans les 24 heures ouvrables.</p>
            </div>

            <p>Pour votre référence, voici le numéro de votre dossier :</p>
            <div class="ref-number">${submissionId}</div>

            <p style="margin-top: 32px;">Si vous avez des questions urgentes, n'hésitez pas à nous appeler directement.</p>
            
            <div style="text-align: center;">
              <a href="tel:514-123-4567" class="btn">Appeler maintenant</a>
            </div>
          </div>
          <div class="footer">
            <p><strong>Isolation Grenier Québec</strong><br>
            Montréal et environs<br>
            <a href="mailto:contact@isolationqc.com" style="color: #2563eb;">contact@isolationqc.com</a></p>
            <p style="margin-top: 16px; font-size: 11px; opacity: 0.7;">Vous recevez cet email car vous avez rempli une demande sur notre site web.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};