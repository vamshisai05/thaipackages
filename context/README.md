# ThaiPackages.com — Centralized Project Context

Welcome to the **centralized context system** for ThaiPackages.com.

This directory (`/context/`) is the **single source of truth** for all business data, brand settings, destination guides, holiday packages, pricing, contact channels, navigation links, SEO metadata, and design tokens across the entire website.

When business details change, you only need to update the relevant file in this directory — **never edit or hunt through dozens of HTML files**.

---

## Quick Reference: "Which file do I edit?"

| If you want to change... | Edit this file |
| :--- | :--- |
| **WhatsApp Number** | [`context/contact.js`](./contact.js) |
| **Phone Number & Email** | [`context/contact.js`](./contact.js) |
| **Office Locations & Addresses** | [`context/contact.js`](./contact.js) |
| **Package Baseline Prices (INR / USD / THB)** | [`context/packages.js`](./packages.js) |
| **Package Itineraries, Inclusions & Hotels** | [`context/packages.js`](./packages.js) |
| **Add a New Travel Package** | [`context/packages.js`](./packages.js) |
| **Destination Guides, Highlights & Photos** | [`context/destinations.js`](./destinations.js) |
| **Add a New Destination** | [`context/destinations.js`](./destinations.js) |
| **Brand Name, Domain or Tagline** | [`context/brand.js`](./brand.js) |
| **Currency Conversion Reference Rates** | [`context/business.js`](./business.js) |
| **Navigation Links & Main CTA Button** | [`context/navigation.js`](./navigation.js) |
| **SEO Page Titles, Descriptions & Social Share Images** | [`context/seo.js`](./seo.js) |
| **Brand Colors (Navy, Terracotta, Gold) & Typography** | [`context/design.js`](./design.js) |
| **Homepage Copy, Trust Pillars, FAQs & Steps** | [`context/content.js`](./content.js) |
| **Pricing Disclaimers & Legal Policies** | [`context/legal.js`](./legal.js) |

---

## File-by-File Guide

### 1. `brand.js`
Controls the fundamental identity of the website.
* **`name`**: Full brand name (`"ThaiPackages.com"`).
* **`shortName`**: Short brand name (`"ThaiPackages"`).
* **`domain`**: Production domain (`"https://thaipackages.com"`).
* **`tagline`**: Official brand slogan (`"Thailand Holidays Made Easy"`).
* **`positioning`**: One-sentence summary of the business offering.

### 2. `business.js`
Controls agency parameters, trust guidelines, and currency settings.
* **`currencies`**: Supported currencies (`INR`, `USD`, `THB`) and static exchange reference rates used for price estimations.
* **`trustPrinciples`**: Core standards guaranteeing transparent pricing and factual statements.

### 3. `contact.js`
Controls public contact channels and phone numbers.
* **`whatsappNumber`**: Primary WhatsApp inquiry phone number (e.g. `"66812345678"`).
* **`displayPhone`**: Formatted phone number for human display (e.g. `"+66 81 234 5678"`).
* **`email`**: Support and quotation email address.
* **`officeLocations`**: Array of verified physical office addresses.
> **Safety Rule**: Any field starting with `REPLACE_WITH_` is automatically detected by the website and hidden or handled safely to prevent publishing unverified placeholders to customers.

### 4. `destinations.js`
Contains detailed guides for Thailand travel regions:
* **Initial 6 Destinations**: Phuket, Krabi, Bangkok, Pattaya, Koh Samui, Chiang Mai.
* Each entry contains:
  * `slug`: URL identifier (e.g. `"phuket"`, accessed via `destination-detail.html?dest=phuket`).
  * `name`: Destination name.
  * `region`: Thai geographical region (`"Andaman Coast"`, `"Central Thailand"`, etc.).
  * `quickFacts`: Best travel season, currency, ideal duration, and travel style tags.
  * `highlights`: Bulleted attractions.
  * `packageSlugs`: Array of package slugs linked to this destination.

### 5. `packages.js`
Contains all holiday packages and day-by-day itineraries:
* **Initial 6 Packages**:
  1. *Phuket & Krabi Romantic Island Escape* (7D/6N) — Starting `₹34,999`
  2. *Bangkok & Pattaya Classic Vacation* (5D/4N) — Starting `₹22,499`
  3. *Grand Thailand: Phuket, Krabi & Bangkok* (9D/8N) — Starting `₹48,999`
  4. *Koh Samui Luxury Pool Villa & Marine Park* (6D/5N) — Starting `₹52,999`
  5. *Chiang Mai Culture & Mountain Sanctuary* (6D/5N) — Starting `₹36,499`
  6. *Phuket, Phi Phi & Phang Nga Bay Adventure* (6D/5N) — Starting `₹38,999`
* Each package includes:
  * `startingPriceINR`, `startingPriceUSD`, `startingPriceTHB`: Baseline twin-sharing rates.
  * `highlights`: Key selling points.
  * `inclusions` & `exclusions`: Clear lists of what is and isn't provided.
  * `hotelOptions`: Accommodations by tier (4★ vs 5★).
  * `itinerary`: Structured array of `{ day, title, summary }` objects.

### 6. `navigation.js`
Controls header menu items, mobile drawer navigation, and the primary call-to-action button across all pages.

### 7. `seo.js`
Controls site-wide and per-page meta tags:
* `defaultTitle`, `defaultDescription`, `ogImage`.
* `pages`: Custom SEO title and description overrides for individual pages (`home`, `destinations`, `packages`, `about`, `contact`).

### 8. `design.js`
Centralized design tokens:
* Primary Navy (`#0A192F`), Terracotta CTA (`#E05A47`), Gold Accent (`#F2A900`), Neutral Surface & Text colors.
* Typography specifications (`Playfair Display` + `Inter`).

### 9. `content.js`
Houses recurring marketing copy:
* Hero section text.
* Why Choose ThaiPackages (3 trust pillars).
* How Planning Works (3-step timeline).
* Editorial travel inspiration articles.
* Thailand FAQs (visas, customization, food, transfers).
* Final quotation CTA section copy.

### 10. `legal.js`
Contains legal terms, copyright notices, and pricing disclaimers.

### 11. `index.js`
The master module uniting all context files into `window.TRAVEL_CONTEXT` for zero-overhead runtime access in the browser.

---

## How to Add a New Package

1. Open [`context/packages.js`](./packages.js).
2. Add a new package object to the `PACKAGES` array following the existing format:
```javascript
{
  slug: "koh-samui-island-hideaway",
  title: "Koh Samui Island Hideaway",
  destination: "Koh Samui",
  destinationSlug: "samui",
  category: "Islands & Beaches",
  duration: { days: 5, nights: 4 },
  durationDays: 5,
  durationNights: 4,
  startingPriceINR: 29999,
  startingPriceUSD: 440,
  startingPriceTHB: 16200,
  heroImage: "https://images.unsplash.com/...",
  thumbnail: "https://images.unsplash.com/...",
  shortDescription: "...",
  highlights: [ ... ],
  inclusions: [ ... ],
  exclusions: [ ... ],
  itinerary: [
    { day: 1, title: "...", summary: "..." },
    ...
  ]
}
```
3. If the destination already exists in [`context/destinations.js`](./destinations.js), add `"koh-samui-island-hideaway"` to the destination's `packageSlugs` array.
4. Save the file. The new package will automatically appear on the Homepage, Packages Directory, Filters, and Destination Detail pages!
