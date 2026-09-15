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
  whatsappNumber: "+918121214181",
  displayPhone: "+91 81212 14181",
  email: "info@thaipackages.com",

  address: {
    company: "ThaiPackages Co., Ltd.",
    building: "Interchange 21 Tower, Level 18",
    street: "399 Sukhumvit Road, Khlong Toei Nuea, Watthana",
    city: "Bangkok",
    postalCode: "10110",
    country: "Thailand",
    full: "ThaiPackages Co., Ltd., Level 18, Interchange 21 Tower, 399 Sukhumvit Road, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand"
  },

  officeLocations: [
    "ThaiPackages Co., Ltd.",
    "Level 18, Interchange 21 Tower",
    "399 Sukhumvit Road, Khlong Toei Nuea, Watthana",
    "Bangkok 10110, Thailand"
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

/**
 * Generates a clean tel: direct call URL if configured, or 'contact.html' if placeholder.
 */
export function getPhoneUrl() {
  if (!isContactConfigured(CONTACT.displayPhone)) {
    return 'contact.html';
  }
  const cleanNumber = CONTACT.displayPhone.replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
}

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.CONTACT = CONTACT;
  window.TRAVEL_CONTEXT.isContactConfigured = isContactConfigured;
  window.TRAVEL_CONTEXT.getWhatsAppUrl = getWhatsAppUrl;
  window.TRAVEL_CONTEXT.getPhoneUrl = getPhoneUrl;
}

