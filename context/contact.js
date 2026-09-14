/**
 * ThaiPackages.com - Contact Context
 * Centralized contact information and helper functions for configuration validation.
 * 
 * IMPORTANT:
 * Placeholders starting with 'REPLACE_WITH_' indicate that verified production
 * details have not yet been provided. The frontend checks these and hides or
 * disables fake data channels automatically.
 */

export const CONTACT = {
  whatsappNumber: "REPLACE_WITH_REAL_WHATSAPP_NUMBER",
  displayPhone: "REPLACE_WITH_REAL_PHONE",
  email: "REPLACE_WITH_REAL_EMAIL",

  officeLocations: [
    "REPLACE_WITH_REAL_LOCATION"
  ],

  social: {
    instagram: "",
    facebook: "",
    youtube: ""
  }
};

/**
 * Returns true if a contact field contains valid business information
 * (not empty, not null, and does not start with REPLACE_WITH_)
 */
export function isContactConfigured(value) {
  if (!value || typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (trimmed === '') return false;
  if (trimmed.startsWith('REPLACE_WITH_')) return false;
  return true;
}

/**
 * Generates a clean WhatsApp web/mobile direct URL if configured, or '#' if placeholder.
 */
export function getWhatsAppUrl(customMessage = '') {
  if (!isContactConfigured(CONTACT.whatsappNumber)) {
    return '#';
  }
  const cleanNumber = CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(customMessage);
  return `https://wa.me/${cleanNumber}${encodedMsg ? `?text=${encodedMsg}` : ''}`;
}

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.CONTACT = CONTACT;
  window.TRAVEL_CONTEXT.isContactConfigured = isContactConfigured;
  window.TRAVEL_CONTEXT.getWhatsAppUrl = getWhatsAppUrl;
}
