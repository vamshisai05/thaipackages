/**
 * ThaiPackages.com - Navigation Context
 * Central definition for header links, mobile drawer menu, and primary call-to-actions.
 */

export const NAVIGATION = [
  {
    label: "Packages",
    href: "packages.html",
    description: "Curated 5 to 9-day Thailand holiday itineraries"
  },
  {
    label: "Destinations",
    href: "destinations.html",
    description: "Explore Phuket, Krabi, Bangkok, Pattaya, Koh Samui, and Chiang Mai"
  },
  {
    label: "About",
    href: "about.html",
    description: "Learn about our Thailand travel expertise & standards"
  },
  {
    label: "Contact",
    href: "contact.html",
    description: "Request a custom quotation or inquire on WhatsApp"
  }
];



export const PRIMARY_CTA = {
  label: "Request a Quote",
  href: "contact.html"
};

export const SECONDARY_CTA = {
  label: "WhatsApp Enquiry",
  action: "whatsapp"
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.NAVIGATION = NAVIGATION;
  window.TRAVEL_CONTEXT.PRIMARY_CTA = PRIMARY_CTA;
  window.TRAVEL_CONTEXT.SECONDARY_CTA = SECONDARY_CTA;
}
