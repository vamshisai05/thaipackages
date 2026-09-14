/**
 * ThaiPackages.com - Legal & Content Integrity Context
 * Centralized pricing disclaimers and policy placeholders.
 * 
 * IMPORTANT:
 * Placeholders marked 'REPLACE_WITH_ACTUAL_POLICY' indicate that formal legal policies
 * must be drafted by company legal counsel before public claims are made.
 */

export const LEGAL = {
  pricingDisclaimer: "Prices shown are commercial starting baselines per person on twin-sharing basis and may vary depending on seasonal travel dates, hotel room tier availability, and customized excursions.",
  
  privacyPolicy: "REPLACE_WITH_ACTUAL_POLICY",
  
  termsOfService: "REPLACE_WITH_ACTUAL_POLICY",
  
  cancellationPolicy: "REPLACE_WITH_ACTUAL_POLICY",

  copyright: "© 2026 ThaiPackages.com. All rights reserved. Thailand Holidays Made Easy."
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.LEGAL = LEGAL;
}
