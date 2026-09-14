# ThaiPackages.com 🌴 | Thailand Holidays Made Easy

A lightweight, ultra-fast, mobile-responsive static website for **ThaiPackages.com**, engineered specifically for **Cloudflare Pages / Free-tier Static Web Hosting**.

---

## ✨ Features & Architecture

- **Centralized Context System (`/context/`)**: The single source of truth for all business parameters, destination guides, holiday packages, pricing, contact channels, navigation links, SEO metadata, and design tokens.
- **Accessible Luxury Aesthetic**: Elegant typography pairing (`Playfair Display` serif headlines + `Inter` UI body text), deep midnight navy (`#0A192F`), warm terracotta CTA (`#E05A47`), and subtle gold accents (`#F2A900`).
- **Authentic Trust Architecture**: Zero fabricated reviews, certifications, or fake ratings. Backed by honest value propositions (*Expertly Curated Itineraries*, *Personalized Planning*, *Dedicated On-Trip Assistance*).
- **Multi-Page Static Structure**:
  - `index.html` — Homepage (Hero, Trust Pillars, 4:3 Destinations Grid, 3:4 Featured Packages, Value Propositions, Thailand Travel Insights, Final CTA).
  - `destinations.html` & `destination-detail.html` — Thailand destination directory and detail views with quick facts (season, currency, duration, style) and curated itineraries.
  - `packages.html` & `package-detail.html` — Complete holiday packages catalog with search, duration, and category multi-filters. Package detail conversion page with accessible `<details>`/`<summary>` accordion itineraries, desktop sticky sidebar, and mobile bottom conversion bar.
  - `about.html` — Story, philosophy, and 4-step planning process.
  - `contact.html` — Lead inquiry form with URL parameter pre-population and safe contact handling.
- **Centralized Currency Conversion**:
  - Toggles between **INR (₹)**, **USD ($)**, and **THB (฿)** with persistent preference stored in `localStorage`.
  - Configurable in `context/business.js`.
- **Zero Backend Dependencies**: Operates 100% in-browser with zero database latency.
- **Cloudflare Ready**: Includes `_headers` for immutable asset caching and `_redirects` for clean semantic routing.

---

## 📁 Project Structure

```text
thaipackages/
├── context/                      # Centralized source of truth
│   ├── brand.js                  # Brand name, domain, tagline, and positioning
│   ├── business.js               # Business model, goals, trust principles, currencies
│   ├── contact.js                # Contact channels & configuration safety helpers
│   ├── destinations.js           # 6 core Thailand destination guides & quick facts
│   ├── packages.js               # 6 holiday packages, starting prices & itineraries
│   ├── navigation.js             # Header navigation links & CTA configuration
│   ├── seo.js                    # Site-wide and page-specific SEO meta tokens
│   ├── design.js                 # Design tokens (colors, typography, layout)
│   ├── content.js                # Recurring marketing copy, trust pillars, FAQs
│   ├── legal.js                  # Pricing disclaimers & legal policy placeholders
│   ├── index.js                  # Master context aggregator & runtime binder
│   └── README.md                 # Non-developer guide to managing website data
├── css/
│   └── style.css                 # Accessible Luxury CSS design system & responsive layout
├── js/
│   └── app.js                    # Client-side controller (currency, filters, UI, details)
├── index.html                    # Homepage
├── destinations.html             # Destinations Directory (Region filterable)
├── destination-detail.html       # Destination Detail (Quick facts, highlights, packages)
├── packages.html                 # Holiday Packages Directory (Multi-filter & Search)
├── package-detail.html           # Package Detail (Accordion itinerary, sticky & mobile CTA bars)
├── about.html                    # About Us & Travel Ethos
├── contact.html                  # Request a Quote / Lead Form
├── _headers                      # Cloudflare Pages caching & security policies
├── _redirects                    # Cloudflare Pages semantic redirect rules
└── README.md                     # Documentation & deployment guide
```

---

## 🛠️ Content & Business Customization Guide

All website data is centralized in the [`/context/`](./context/) folder. **You do not need to edit HTML files to update business information or travel data.**

| What do you want to change? | Edit this file |
| :--- | :--- |
| **WhatsApp Number & Public Contact** | [`context/contact.js`](./context/contact.js) |
| **Package Baseline Prices (INR / USD / THB)** | [`context/packages.js`](./context/packages.js) |
| **Package Itineraries, Inclusions & Hotels** | [`context/packages.js`](./context/packages.js) |
| **Add a New Package** | [`context/packages.js`](./context/packages.js) |
| **Destination Guides & Highlights** | [`context/destinations.js`](./context/destinations.js) |
| **Add a New Destination** | [`context/destinations.js`](./context/destinations.js) |
| **Brand Name, Tagline or Domain** | [`context/brand.js`](./context/brand.js) |
| **Currency Conversion Reference Rates** | [`context/business.js`](./context/business.js) |
| **Navigation Links & Main CTA Button** | [`context/navigation.js`](./context/navigation.js) |
| **SEO Titles, Descriptions & Share Images** | [`context/seo.js`](./context/seo.js) |
| **Theme Colors & Typography Tokens** | [`context/design.js`](./context/design.js) |
| **Homepage Copy, Trust Pillars & FAQs** | [`context/content.js`](./context/content.js) |
| **Pricing Disclaimer & Legal Notice** | [`context/legal.js`](./context/legal.js) |

> 📖 **Detailed Step-by-Step Guide**: See [`context/README.md`](./context/README.md) for full examples and code snippets for adding new packages or modifying destinations.

---

## 🔒 Contact Information & Safety Notice

Any contact field in `context/contact.js` containing a `REPLACE_WITH_` prefix (e.g. `REPLACE_WITH_REAL_WHATSAPP_NUMBER`) is automatically identified by the frontend as unconfigured. The site gracefully routes inquiries through the online quote form rather than generating broken or fake phone numbers.

---

## ☁️ Deployment to Cloudflare Pages

1. Push this repository to GitHub (`git push origin main`).
2. In the **Cloudflare Dashboard** → Navigate to **Compute (Workers & Pages)** → **Create Application** → **Pages** → **Connect to Git**.
3. Select `thaipackages`.
4. Set Build Settings:
   - **Framework preset**: None
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `/` *(or root directory)*
5. Click **Save and Deploy**. Your site will be globally distributed across Cloudflare's edge network in seconds.
