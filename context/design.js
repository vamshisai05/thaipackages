/**
 * ThaiPackages.com - Design System Context
 * Centralized design tokens for colors, typography, layout dimensions, and visual aesthetics.
 * Inspired directly by the modern boutique travel agency design specification.
 */

export const DESIGN = {
  colors: {
    // Deep Teal / Forest Navy Primary Brand Colors
    primary: "#0A2A30",
    primaryDark: "#061D22",
    primaryLight: "#133E46",
    primaryMuted: "#1B4F58",
    
    // Warm Amber Gold Accent (Primary CTA & Highlights)
    accentGold: "#F2A900",
    accentGoldHover: "#D99700",
    accentGoldLight: "#FEF3C7",
    
    // Vibrant Cyan / Teal (Badges, Prices & Action Accents)
    accentTeal: "#0E7490",
    accentTealHover: "#0891B2",
    accentTealLight: "#E0F2FE",
    
    // Backgrounds
    background: "#F8FAF9",
    backgroundWarm: "#FDF7ED",
    surface: "#FFFFFF",
    surfaceSubtle: "#F1F5F5",
    
    // Text
    text: "#111827",
    textMuted: "#64748B",
    textLight: "#94A3B8",
    textWhite: "#FFFFFF",
    
    // Borders & UI
    border: "#E2E8F0",
    borderLight: "#F1F5F9",
    
    // WhatsApp
    whatsapp: "#25D366",
    whatsappHover: "#20BA5A"
  },

  typography: {
    heading: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    }
  },

  layout: {
    maxWidth: "1240px",
    headerHeight: "76px",
    borderRadius: {
      sm: "8px",
      md: "14px",
      lg: "20px",
      xl: "28px",
      full: "9999px"
    }
  },

  aesthetic: "Modern Boutique Thailand Travel Agency — Deep Forest Teal, Warm Amber Gold, and Editorial Typography"
};

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.DESIGN = DESIGN;
}
