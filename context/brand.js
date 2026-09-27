/**
 * ThaiPackages.com - Brand Context
 * Single source of truth for branding identity, naming, domain, and core positioning.
 */

export const BRAND = {
  name: "ThaiPackages.com",
  shortName: "ThaiPackages",
  domain: "https://thaipackages.com",
  logo: "images/favicon.jpeg",
  logoUrl: "https://thaipackages.com/images/favicon.jpeg",
  tagline: "Thailand",
  positioning: "Thailand-focused travel packages and personalized trip planning"
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.BRAND = BRAND;
}
