/**
 * ThaiPackages.com - Unified Context Aggregator & Runtime Accessor
 * Single import entry point for ES modules and browser scripts.
 */

import { BRAND } from './brand.js';
import { BUSINESS } from './business.js';
import { CONTACT, isContactConfigured, getWhatsAppUrl } from './contact.js';
import { DESTINATIONS } from './destinations.js';
import { PACKAGES } from './packages.js';
import { NAVIGATION, PRIMARY_CTA, SECONDARY_CTA } from './navigation.js';
import { SEO } from './seo.js';
import { DESIGN } from './design.js';
import { CONTENT } from './content.js';
import { LEGAL } from './legal.js';

export {
  BRAND,
  BUSINESS,
  CONTACT,
  isContactConfigured,
  getWhatsAppUrl,
  DESTINATIONS,
  PACKAGES,
  NAVIGATION,
  PRIMARY_CTA,
  SECONDARY_CTA,
  SEO,
  DESIGN,
  CONTENT,
  LEGAL
};

// Global Browser Runtime Registration
const TRAVEL_CONTEXT = {
  BRAND,
  BUSINESS,
  CONTACT,
  isContactConfigured,
  getWhatsAppUrl,
  DESTINATIONS,
  PACKAGES,
  NAVIGATION,
  PRIMARY_CTA,
  SECONDARY_CTA,
  SEO,
  DESIGN,
  CONTENT,
  LEGAL
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = TRAVEL_CONTEXT;
  
  // Legacy compatibility mapping so existing components continue to work seamlessly
  window.TRAVEL_DATA = {
    brand: {
      name: BRAND.name,
      tagline: BRAND.tagline,
      domain: BRAND.domain,
      description: BRAND.positioning,
      whatsappNumber: CONTACT.whatsappNumber,
      displayPhone: CONTACT.displayPhone,
      email: CONTACT.email,
      officeLocations: CONTACT.officeLocations.join(', ')
    },
    currencies: BUSINESS.currencies,
    defaultCurrency: BUSINESS.defaultCurrency,
    destinations: DESTINATIONS,
    packages: PACKAGES,
    trustPillars: CONTENT.whyUs,
    inspiration: CONTENT.inspiration,
    faqs: CONTENT.faqs
  };
}

export default TRAVEL_CONTEXT;
