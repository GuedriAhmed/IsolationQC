
import { supabase } from './customSupabaseClient';

/**
 * Send contact form email via Supabase Edge Function
 * @param {Object} data - Form data
 * @returns {Promise<Object>} - Result object with success status
 */
export const sendContactEmail = async (data) => {
  console.log('📧 [EMAIL-SERVICE] Sending contact email with data:', data);
  
  try {
    const { data: result, error } = await supabase.functions.invoke('send-contact-emails', {
      body: {
        type: data.type || 'contact',
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        adresse: data.adresse || '',
        message: data.message,
        secteur: data.secteur,
        type_isolation: data.type_isolation,
        type_propriete: data.type_propriete,
        services_interesses: data.services_interesses,
        consentement: data.consentement
      }
    });

    if (error) {
      console.error('❌ [EMAIL-SERVICE] Edge function error:', error);
      return { 
        success: false, 
        error: error.message || 'Failed to invoke email function'
      };
    }

    console.log('✅ [EMAIL-SERVICE] Edge function response:', result);
    
    return { 
      success: result?.success || false,
      error: result?.error || null,
      data: result
    };
  } catch (error) {
    console.error('❌ [EMAIL-SERVICE] Fatal error:', error);
    return { 
      success: false, 
      error: error.message || 'Unknown error occurred'
    };
  }
};

/**
 * Retry email sending with exponential backoff
 * @param {Function} emailFunction - Email sending function to retry
 * @param {Object} data - Email data
 * @param {number} maxRetries - Maximum retry attempts
 * @returns {Promise<Object>} - Result object
 */
export const retryEmailSend = async (emailFunction, data, maxRetries = 2) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`🔄 [EMAIL-SERVICE] Attempt ${attempt}/${maxRetries}`);
    
    const result = await emailFunction(data);
    
    if (result.success) {
      console.log('✅ [EMAIL-SERVICE] Email sent successfully');
      return result;
    }
    
    if (attempt < maxRetries) {
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      console.log(`⏳ [EMAIL-SERVICE] Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  console.error('❌ [EMAIL-SERVICE] All retry attempts failed');
  return { success: false, error: 'Failed after multiple attempts' };
};

/**
 * Validate email address format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number format (Quebec)
 * @param {string} phone - Phone to validate
 * @returns {boolean} - True if valid
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phone);
};

export default {
  sendContactEmail,
  retryEmailSend,
  validateEmail,
  validatePhone
};
