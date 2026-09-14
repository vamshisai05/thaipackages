/**
 * ThaiPackages.com - Business Context
 * Defines business model, primary goals, trust principles, and currency conversion configuration.
 */

export const BUSINESS = {
  type: "Thailand travel agency",

  primaryMarket: "International travelers interested in Thailand",

  primaryDestination: "Thailand",

  businessModel: "Travel packages and customized trip planning",

  websiteGoal: "Generate qualified travel enquiries",

  primaryConversion: "Request a Quote",

  secondaryConversion: "WhatsApp Enquiry",

  positioning: [
    "Thailand-focused Accessible Luxury",
    "Signature Condo Stays with Private Kitchen",
    "100% Private AC Transfers Exclusively (Zero Shared Buses)",
    "Indian Culinary Flexibility (Pre-Stocked Kitchen or Partner Meals)"
  ],

  // Core Service Tiers (Strict Accessible Luxury Standard)
  accommodations: {
    signature: {
      id: "condo",
      title: "Signature Premium Condo (Flagship Experience - Highly Recommended)",
      description: "Spacious, private sea-view and city-center apartments with fully functional private kitchens, separate living areas, and resort-grade pools."
    },
    alternative: {
      id: "hotel",
      title: "Standard 3★ / 4★ Vetted Hotels",
      description: "Comfortable resort and downtown hotel rooms with daily buffet breakfast."
    }
  },

  diningPlans: {
    signature: {
      id: "self-cook",
      title: "Self-Cook / Home Comfort Plan (Highly Recommended)",
      description: "Pre-stocked condo kitchen with Indian groceries, milk, bread, butter, spices, rice, tea, and cookware. Ideal for families and pure vegetarians."
    },
    alternative: {
      id: "partner-restaurant",
      title: "Indian Restaurant Meal Plan",
      description: "Pre-arranged fresh daily lunches and dinners at verified partner Indian restaurants."
    }
  },

  transfers: {
    standard: {
      id: "private",
      title: "100% Private Vehicle Transfers (Exclusive Standard)",
      description: "Dedicated air-conditioned cars/vans exclusively for your party. Direct door-to-door pickups from airport arrival to departure with zero shared group buses and zero delays."
    }
  },

  trustPrinciples: [
    "Accessible luxury standard with zero hostels or cramped budget rooms",
    "Strictly 100% private transfers (no shared seat-in-coach buses)",
    "Transparent itemized pricing with no surprise surcharges",
    "No fabricated claims or fake certifications"
  ],

  // Centralized currency configuration (static reference rates for estimation)
  currencies: {
    INR: { code: "INR", symbol: "₹", rateFromUSD: 83.5, label: "INR (₹)" },
    USD: { code: "USD", symbol: "$", rateFromUSD: 1.0, label: "USD ($)" },
    THB: { code: "THB", symbol: "฿", rateFromUSD: 36.5, label: "THB (฿)" }
  },

  defaultCurrency: "INR"
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.BUSINESS = BUSINESS;
}
