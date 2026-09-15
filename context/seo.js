/**
 * ThaiPackages.com - SEO Context
 * Centralized SEO defaults, OpenGraph parameters, Schema.org definitions, and page metadata helpers.
 */

export const SEO = {
  defaultTitle: "ThaiPackages.com | Thailand Travel Packages & Custom Tours",
  defaultDescription: "Explore Thailand travel packages and plan your trip with ThaiPackages.com. Curated holidays across Phuket, Krabi, Bangkok, Pattaya, Koh Samui, and Chiang Mai.",
  siteUrl: "https://thaipackages.com",
  organization: "ThaiPackages.com",
  ogImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=85",
  locale: "en_US",
  themeColor: "#0A192F",

  pages: {
    home: {
      title: "ThaiPackages.com | Thailand Holidays & Custom Travel Packages",
      description: "Discover customized Thailand holiday packages across Phuket, Krabi, Bangkok, Pattaya, Koh Samui, and Chiang Mai. Handpicked hotels, island tours, and dedicated on-trip support."
    },
    destinations: {
      title: "Thailand Travel Destinations | Phuket, Krabi, Bangkok & More | ThaiPackages.com",
      description: "Explore the top Thailand holiday destinations. Discover travel guides, best seasons to visit, and signature tours for Phuket, Krabi, Bangkok, Koh Samui, and Chiang Mai."
    },
    packages: {
      title: "Thailand Holiday Packages & Itineraries | ThaiPackages.com",
      description: "Browse all curated Thailand holiday packages with transparent starting prices and day-by-day itineraries. From romantic island getaways to luxury pool villas."
    },
    about: {
      title: "About Us | Thailand Travel Specialists | ThaiPackages.com",
      description: "Meet ThaiPackages.com — your dedicated Thailand travel planning agency. Learn about our curated itineraries, verified partner resorts, and transparent pricing."
    },
    contact: {
      title: "Request a Custom Quote | Contact ThaiPackages.com",
      description: "Plan your Thailand holiday with ThaiPackages.com. Request a custom travel proposal and speak directly with our destination specialists via form or WhatsApp."
    },
    passport: {
      title: "Apply for Indian Passport | Step-by-Step Guide & Checklist | ThaiPackages.com",
      description: "Complete step-by-step guidance to apply for or renew your Indian Passport for Thailand travel. Document checklist, Passport Seva Kendra process, and 6-month validity rule."
    },
    visa: {
      title: "Thailand Visa Services & Entry Guidelines | ThaiPackages.com",
      description: "Complete guide to Thailand Visa rules for Indian travelers. Learn about the 60-Day Visa Exemption, Visa on Arrival (VoA), required entry documents, and fast-track support."
    },
    digitalArrivalCard: {
      title: "Free Thailand Digital Arrival Card Guide | ThaiPackages.com",
      description: "Step-by-step free guide to submit your Thailand Digital Arrival Card (TM6 Electronic Form). Avoid third-party fees, access condo address templates, and download your QR code."
    }
  }
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.SEO = SEO;
}
