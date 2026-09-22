/**
 * ThaiPackages.com - Core Application Controller
 * High-performance, accessible, vanilla JavaScript application controller.
 * Fully decoupled from hardcoded business data; powered by /context/.
 */

(function() {
  'use strict';

  const FALLBACK_DESTINATIONS = [
    {
      slug: "phuket",
      name: "Phuket",
      country: "Thailand",
      region: "Andaman Coast",
      tagline: "The Pearl of the Andaman Sea",
      shortDescription: "Thailand's premier island combining lively beach clubs, world-famous Phi Phi speedboats, and 5-star ocean villas.",
      description: "Thailand's largest island, famed for dramatic limestone cliffs, vibrant night markets, pristine beaches, and premier beachfront luxury resorts.",
      heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Nov – Apr", currency: "Thai Baht (THB)", idealDuration: "4 – 7 Days", travelStyle: ["Beach", "Island Hopping", "Luxury Resorts"] },
      longDescriptionHTML: `
<h2>Phuket – The Pearl of the Andaman Sea</h2>
<p>Discover Phuket, Thailand's premier island destination, famous for its dramatic limestone cliffs, pristine beaches, vibrant night markets, and luxurious resorts.</p>
<p>Enjoy spectacular speedboat tours to the Phi Phi Islands, witness breathtaking sunsets at Promthep Cape, explore the Sino-Portuguese heritage of Old Phuket Town, and experience thrilling marine adventures.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Phuket offers a perfect mix of relaxation, culture, and coastal excitement.</p>
<p><strong>Beaches • Island Hopping • Night Markets • Heritage • Marine Adventures • Luxury</strong></p>
<p>Phuket – Discover the ultimate island escape.</p>
      `,
      highlights: ["Speedboat tours to Phi Phi & Maya Bay", "Promthep Cape and Big Buddha viewpoint", "Old Phuket Town heritage and street food", "Beachfront pool villa resorts"],
      packageSlugs: ["phuket-krabi-romantic-escape", "grand-thailand-phuket-krabi-bangkok", "phuket-phi-phi-island-adventure"]
    },
    {
      slug: "krabi",
      name: "Krabi",
      country: "Thailand",
      region: "Andaman Coast",
      tagline: "Dramatic Karsts & Emerald Waters",
      shortDescription: "Towering limestone cliffs rising from emerald waters, secluded Railay beaches, and world-class snorkeling reefs.",
      description: "Towering limestone karst monoliths, tranquil emerald bays, hidden lagoons, and world-class island hopping around Railay Beach.",
      heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Nov – Apr", currency: "Thai Baht (THB)", idealDuration: "3 – 5 Days", travelStyle: ["Scenic Nature", "Island Hopping", "Relaxation"] },
      longDescriptionHTML: `
<h2>Krabi – Tropical Beauty & Island Adventures</h2>
<p>Discover Krabi, a stunning tropical destination famous for its crystal-clear waters, limestone cliffs, beautiful beaches and breathtaking islands.</p>
<p>Enjoy exciting island-hopping tours, snorkeling, beach activities, scenic viewpoints and sunset experiences. Explore the spectacular Railay Beach, Phi Phi Islands and Four Islands, or simply relax surrounded by nature.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon or with friends, Krabi offers the perfect blend of relaxation, adventure and natural beauty.</p>
<p><strong>Beaches • Island Tours • Snorkeling • Adventure • Nature • Sunsets</strong></p>
<p>Krabi – Where tropical dreams become unforgettable memories.</p>
      `,
      highlights: ["Krabi 4 Islands scenic longtail boat cruise", "Phra Nang Cave Beach and Railay Peninsula", "Rainforest Emerald Pool and Hot Springs", "Tranquil sunsets at Ao Nang Beach"],
      packageSlugs: ["phuket-krabi-romantic-escape", "grand-thailand-phuket-krabi-bangkok"]
    },
    {
      slug: "bangkok",
      name: "Bangkok",
      country: "Thailand",
      region: "Central Thailand",
      tagline: "The Electric Capital of Smiles",
      shortDescription: "A dazzling metropolis of golden temples, world-class luxury shopping malls, Michelin street food, and Chao Phraya river cruises.",
      description: "Opulent golden palaces, historic riverfront temples, vibrant street markets, Michelin-rated dining, and luxury rooftop lounges.",
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Nov – Feb", currency: "Thai Baht (THB)", idealDuration: "3 – 5 Days", travelStyle: ["Culture", "Shopping", "Rooftops", "River Cruises"] },
      longDescriptionHTML: `
<h2>Bangkok – Where Tradition Meets Modern Thailand</h2>
<p>Discover Bangkok, Thailand's vibrant capital, where rich culture, modern city life and unforgettable experiences come together. Explore magnificent temples, enjoy a scenic Chao Phraya River cruise, shop at colorful markets and world-class malls, and experience Bangkok's famous food scene.</p>
<p>From Grand Palace and Wat Pho to bustling markets, rooftop views and exciting nightlife, Bangkok offers something for every traveller.</p>
<p>Whether you're travelling with family, as a couple, on your honeymoon, with friends or as a group, ThaiPackages.com can customize your Bangkok experience around your interests and budget.</p>
<p><strong>Culture • Shopping • Food • Sightseeing • River Cruises • Nightlife</strong></p>
<p>Bangkok – Experience the heart of Thailand.</p>
      `,
      highlights: ["Grand Palace & Wat Traimit Golden Buddha", "Chao Phraya Princess luxury dinner cruise with live music", "Shopping at ICONSIAM, CentralWorld & Platinum Mall", "Safari World & Marine Park family day tour"],
      packageSlugs: ["bangkok-pattaya-classic-vacation", "grand-thailand-phuket-krabi-bangkok"]
    },
    {
      slug: "pattaya",
      name: "Pattaya",
      country: "Thailand",
      region: "Gulf of Thailand",
      tagline: "Beaches, Nightlife & Island Adventures",
      shortDescription: "Vibrant coastal playground featuring Coral Island watersports, sea-view condos with private kitchen, and world-class entertainment.",
      description: "A dynamic coastal resort city just 2 hours from Bangkok, famed for Coral Island watersports, sea-view condos, and cabaret shows.",
      heroImage: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Nov – Apr", currency: "Thai Baht (THB)", idealDuration: "3 – 4 Days", travelStyle: ["Watersports", "Nightlife", "Condo Stays", "Family Fun"] },
      longDescriptionHTML: `
<h2>Pattaya – Beaches, Adventure & Exciting Nights</h2>
<p>Discover Pattaya, one of Thailand's most popular seaside destinations, known for its beautiful coastline, island adventures, entertainment and vibrant nightlife.</p>
<p>Enjoy Coral Island trips, water sports, beach activities, scenic viewpoints, shopping, restaurants and spectacular entertainment shows. As the sun sets, Pattaya comes alive with lively streets, music, restaurants, bars and nightlife—making it especially popular with friends and bachelor groups.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Pattaya offers experiences to match every travel style.</p>
<p><strong>Beaches • Island Tours • Water Sports • Shopping • Entertainment • Nightlife</strong></p>
<p>Pattaya – Fun, adventure and unforgettable memories.</p>
      `,
      highlights: ["Coral Island (Koh Larn) speedboat tour with Indian lunch", "Alcazar Cabaret Show with VIP seating", "Pattaya Big Buddha and scenic coastal viewpoints", "Spacious beachfront condos with kitchen amenities"],
      packageSlugs: ["bangkok-pattaya-classic-vacation"]
    },
    {
      slug: "samui",
      name: "Koh Samui",
      country: "Thailand",
      region: "Gulf of Thailand",
      tagline: "Tropical Luxury & Coconut Groves",
      shortDescription: "Palm-fringed luxury island boasting 5-star private pool villas, yacht charters to Ang Thong Marine Park, and serene wellness retreats.",
      description: "Thailand’s upscale island sanctuary, celebrated for private beachfront villas, coconut-fringed shores, and Ang Thong Marine Park.",
      heroImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Dec – Sep", currency: "Thai Baht (THB)", idealDuration: "4 – 6 Days", travelStyle: ["Luxury Villas", "Couples", "Marine Parks", "Wellness"] },
      longDescriptionHTML: `
<h2>Koh Samui – Tropical Luxury & Coconut Groves</h2>
<p>Discover Koh Samui, an upscale island sanctuary celebrated for its private beachfront villas, lush coconut-fringed shores, and tranquil turquoise waters.</p>
<p>Experience yacht excursions to Ang Thong Marine Park, visit the iconic Big Buddha temple, stroll through Fisherman’s Village, and indulge in world-class holistic spa treatments overlooking the ocean.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Koh Samui offers an unforgettable blend of serenity, romance, and tropical luxury.</p>
<p><strong>Luxury Villas • Wellness Spas • Island Cruising • Romance • Beaches • Serenity</strong></p>
<p>Koh Samui – Unwind in an exclusive tropical paradise.</p>
      `,
      highlights: ["Ang Thong National Marine Park yacht excursion with kayaking", "5-Star oceanfront pool villa resorts", "Big Buddha temple and Fisherman’s Village boutiques", "Herbal spa treatments and beachside dining"],
      packageSlugs: ["samui-luxury-villa-retreat"]
    },
    {
      slug: "chiang-mai",
      name: "Chiang Mai",
      country: "Thailand",
      region: "Northern Thailand",
      tagline: "The Rose of Northern Thailand",
      shortDescription: "The cultural heart of the north: mist-shrouded mountain sanctuaries, ethical elephant care, and ancient golden Lanna temples.",
      description: "Surrounded by misty mountains, Chiang Mai showcases ancient golden temples, ethical elephant sanctuaries, and artisan night markets.",
      heroImage: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Oct – Feb", currency: "Thai Baht (THB)", idealDuration: "3 – 5 Days", travelStyle: ["Culture & Heritage", "Mountains", "Elephants", "Crafts"] },
      longDescriptionHTML: `
<h2>Chiang Mai – Culture, Nature & Mountain Charm</h2>
<p>Discover Chiang Mai, a beautiful destination in northern Thailand known for its ancient temples, lush mountains, peaceful surroundings and rich local culture.</p>
<p>Explore magnificent temples, visit vibrant night markets, experience traditional Thai culture and enjoy the natural beauty of the surrounding mountains and countryside.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon or with friends, Chiang Mai offers a relaxing escape filled with culture, nature and memorable experiences.</p>
<p><strong>Temples • Mountains • Culture • Night Markets • Nature • Local Experiences</strong></p>
<p>Chiang Mai – Discover the peaceful and beautiful side of Thailand.</p>
      `,
      highlights: ["Wat Phra That Doi Suthep mountaintop golden temple", "Ethical elephant rescue sanctuary interaction", "Old City walking street night markets", "Traditional Lanna cooking classes"],
      packageSlugs: ["chiang-mai-northern-heritage"]
    }
  ];

  const FALLBACK_PACKAGES = [
    {
      slug: "bangkok-pattaya-classic-vacation",
      title: "Bangkok & Pattaya Super Saver",
      destination: "Bangkok & Pattaya",
      destinationSlug: "bangkok",
      category: "Family & City Breaks",
      duration: { days: 6, nights: 5 },
      durationDays: 6,
      durationNights: 5,
      startingPriceINR: 19900,
      startingPriceUSD: 290,
      startingPriceTHB: 10500,
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Our signature 5N/6D holiday with 3N Pattaya Sea-View Condo + 2N Bangkok Luxury Condo, private kitchen, 100% private AC transfers & Telugu-speaking guides.",
      description: "Our signature 5N/6D holiday featuring 3 Nights in Pattaya in a Premium Sea-View Condo and 2 Nights in Bangkok in a City-Center Luxury Condo. Includes private kitchen/food options, 100% private AC vehicle transfers, Alcazar VIP show, Coral Island speedboat tour, Chao Phraya luxury dinner cruise, and 100% Telugu-speaking guide options."
    },
    {
      slug: "phuket-krabi-romantic-escape",
      title: "Phuket & Krabi Romantic Island Escape",
      destination: "Phuket & Krabi",
      destinationSlug: "phuket",
      category: "Honeymoon & Romantic",
      duration: { days: 7, nights: 6 },
      durationDays: 7,
      durationNights: 6,
      startingPriceINR: 29999,
      startingPriceUSD: 450,
      startingPriceTHB: 16200,
      heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      shortDescription: "An idyllic 7-day Andaman holiday pairing lively Phuket beaches with Krabi's dramatic limestone karsts, 100% private transfers and island cruises.",
      description: "An idyllic 7-day Andaman holiday pairing the lively beaches of Phuket with the dramatic limestone karsts and tranquil luxury of Krabi."
    },
    {
      slug: "thailand-family-tour-packages",
      title: "Thailand Family Tour Packages",
      destination: "Bangkok & Pattaya",
      destinationSlug: "bangkok",
      category: "Family & City Breaks",
      duration: { days: 5, nights: 4 },
      durationDays: 5,
      durationNights: 4,
      startingPriceINR: 24999,
      startingPriceUSD: 310,
      startingPriceTHB: 11500,
      heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Specially crafted family vacation featuring kid-friendly attractions, Safari World, and spacious condo stays with kitchen.",
      description: "Our top-rated Thailand Family Tour Package ensures a stress-free holiday for parents and endless fun for kids."
    },
    {
      slug: "thailand-honeymoon-packages",
      title: "Thailand Honeymoon Packages",
      destination: "Phuket & Krabi",
      destinationSlug: "phuket",
      category: "Honeymoon & Romantic",
      duration: { days: 6, nights: 5 },
      durationDays: 6,
      durationNights: 5,
      startingPriceINR: 32999,
      startingPriceUSD: 420,
      startingPriceTHB: 15500,
      heroImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Romantic island retreat featuring private pool villas, sunset dinner cruise, couple spa, and secluded island tours.",
      description: "Celebrate your love with private pool villa stays, romantic beachfront dinners, and tranquil couple's spa experiences."
    },
    {
      slug: "bangkok-tour-packages",
      title: "Bangkok Tour Packages",
      destination: "Bangkok",
      destinationSlug: "bangkok",
      category: "City Break",
      duration: { days: 4, nights: 3 },
      durationDays: 4,
      durationNights: 3,
      startingPriceINR: 16999,
      startingPriceUSD: 180,
      startingPriceTHB: 6800,
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Immerse yourself in Bangkok's golden temples, lively shopping malls, Chao Phraya river dinner cruise & street markets.",
      description: "Dive into the bustling metropolis with our dedicated Bangkok Tour Packages featuring Grand Palace, temples, and luxury shopping."
    },
    {
      slug: "pattaya-tour-packages",
      title: "Pattaya Tour Packages",
      destination: "Pattaya",
      destinationSlug: "pattaya",
      category: "Beach Special",
      duration: { days: 4, nights: 3 },
      durationDays: 4,
      durationNights: 3,
      startingPriceINR: 14999,
      startingPriceUSD: 170,
      startingPriceTHB: 6200,
      heroImage: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Experience thrilling watersports at Coral Island, world-class Alcazar cabaret show, Sanctuary of Truth & night markets.",
      description: "Experience the vibrant coastal energy of Pattaya with Coral Island speedboat excursions and cultural landmarks."
    },
    {
      slug: "phuket-tour-packages",
      title: "Phuket Tour Packages",
      destination: "Phuket",
      destinationSlug: "phuket",
      category: "Island Special",
      duration: { days: 5, nights: 4 },
      durationDays: 5,
      durationNights: 4,
      startingPriceINR: 21999,
      startingPriceUSD: 270,
      startingPriceTHB: 9900,
      heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Discover pristine Andaman beaches, Phi Phi Islands tour, Phang Nga Bay James Bond Island & Old Phuket Town heritage.",
      description: "Explore the pearl of the Andaman Sea with luxury beachfront resort stays and island speedboat excursions."
    },
    {
      slug: "krabi-tour-packages",
      title: "Krabi Tour Packages",
      destination: "Krabi",
      destinationSlug: "krabi",
      category: "Nature Special",
      duration: { days: 4, nights: 3 },
      durationDays: 4,
      durationNights: 3,
      startingPriceINR: 18999,
      startingPriceUSD: 230,
      startingPriceTHB: 8500,
      heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Pristine limestone karsts, crystal clear waters of Railay, rainforest Emerald Pool hot springs & 4 Islands cruise.",
      description: "Experience majestic limestone monoliths, tranquil emerald lagoons, and picturesque 4-island boat excursions."
    },
    {
      slug: "bangkok-pattaya-tour-packages",
      title: "Bangkok & Pattaya Tour Packages",
      destination: "Bangkok & Pattaya",
      destinationSlug: "bangkok",
      category: "Combo Tour",
      duration: { days: 5, nights: 4 },
      durationDays: 5,
      durationNights: 4,
      startingPriceINR: 20999,
      startingPriceUSD: 240,
      startingPriceTHB: 9200,
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      shortDescription: "The perfect holiday package covering top sights of both Bangkok and Pattaya with comfortable private transfers.",
      description: "Our twin-city package combines Bangkok's cultural and shopping highlights with Pattaya's scenic coastal charms."
    },
    {
      slug: "bangkok-phuket-tour-packages",
      title: "Bangkok & Phuket Tour Packages",
      destination: "Bangkok & Phuket",
      destinationSlug: "phuket",
      category: "Twin Destination",
      duration: { days: 6, nights: 5 },
      durationDays: 6,
      durationNights: 5,
      startingPriceINR: 27999,
      startingPriceUSD: 330,
      startingPriceTHB: 12500,
      heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Combine metropolitan excitement & temple serenity in Bangkok with the tropical paradise & island hopping of Phuket.",
      description: "The ultimate twin-destination vacation pairing capital city splendors with Andaman seaside luxury."
    },
    {
      slug: "thailand-tour-packages-from-hyderabad",
      title: "Thailand Tour from Hyderabad",
      destination: "Bangkok & Pattaya",
      destinationSlug: "bangkok",
      category: "Telugu Special",
      duration: { days: 5, nights: 4 },
      durationDays: 5,
      durationNights: 4,
      startingPriceINR: 23499,
      startingPriceUSD: 260,
      startingPriceTHB: 9800,
      heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Handcrafted specifically for Telugu travelers with dedicated native Telugu coordination, South Indian food & care.",
      description: "Travel with confidence featuring dedicated Telugu-speaking guides, South Indian dining arrangements, and private door-to-door transit."
    },
    {
      slug: "thailand-tour-packages-with-indian-food",
      title: "Thailand Packages with Indian Food",
      destination: "Bangkok & Pattaya",
      destinationSlug: "bangkok",
      category: "Indian Food",
      duration: { days: 5, nights: 4 },
      durationDays: 5,
      durationNights: 4,
      startingPriceINR: 22499,
      startingPriceUSD: 250,
      startingPriceTHB: 9500,
      heroImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
      shortDescription: "Never worry about meals. Pure veg, Jain, & authentic Indian partner restaurants plus condo kitchen facilities.",
      description: "Enjoy verified partner Indian dining and fully equipped condo kitchens tailored for pure vegetarian and Jain dietary needs."
    }
  ];

  // Obtain centralized context from window or fallback
  const getContext = () => {
    const winCtx = window.TRAVEL_CONTEXT || {};
    return {
      BRAND: winCtx.BRAND || { name: 'ThaiPackages.com', tagline: 'Thailand Holidays Made Easy' },
      BUSINESS: winCtx.BUSINESS || {
        currencies: {
          INR: { code: 'INR', symbol: '₹', rateFromUSD: 83.5 },
          USD: { code: 'USD', symbol: '$', rateFromUSD: 1.0 },
          THB: { code: 'THB', symbol: '฿', rateFromUSD: 36.5 }
        },
        defaultCurrency: 'INR'
      },
      CONTACT: winCtx.CONTACT || { whatsappNumber: "REPLACE_WITH_REAL_WHATSAPP_NUMBER" },
      DESTINATIONS: (winCtx.DESTINATIONS && winCtx.DESTINATIONS.length > 0) ? winCtx.DESTINATIONS : FALLBACK_DESTINATIONS,
      PACKAGES: (winCtx.PACKAGES && winCtx.PACKAGES.length > 0) ? winCtx.PACKAGES : FALLBACK_PACKAGES,
      CONTENT: winCtx.CONTENT || {},
      LEGAL: winCtx.LEGAL || {},
      isContactConfigured: winCtx.isContactConfigured || (() => false),
      getWhatsAppUrl: winCtx.getWhatsAppUrl || (() => '#')
    };
  };

  document.addEventListener('DOMContentLoaded', () => {
    const ctx = getContext();
    const { BRAND, BUSINESS, CONTACT, DESTINATIONS, PACKAGES, CONTENT, LEGAL, isContactConfigured, getWhatsAppUrl } = ctx;

    // ==========================================================================
    // 1. Currency Management (State & LocalStorage Persistence)
    // ==========================================================================
    const savedCurrency = localStorage.getItem('thaipackages_currency') || (BUSINESS.defaultCurrency || 'INR');
    let currentCurrency = savedCurrency;

    function formatPrice(pkg, targetCurr = currentCurrency) {
      if (!pkg) return '';
      const currencies = BUSINESS.currencies || {
        INR: { code: 'INR', symbol: '₹', rateFromUSD: 83.5 },
        USD: { code: 'USD', symbol: '$', rateFromUSD: 1.0 },
        THB: { code: 'THB', symbol: '฿', rateFromUSD: 36.5 }
      };
      const currConfig = currencies[targetCurr] || currencies.INR;
      
      // Direct prices in currency if configured
      if (targetCurr === 'INR' && pkg.startingPriceINR) {
        return `From ${currConfig.symbol}${pkg.startingPriceINR.toLocaleString('en-IN')}`;
      }
      if (targetCurr === 'USD' && pkg.startingPriceUSD) {
        return `From ${currConfig.symbol}${pkg.startingPriceUSD.toLocaleString('en-US')}`;
      }
      if (targetCurr === 'THB' && pkg.startingPriceTHB) {
        return `From ${currConfig.symbol}${pkg.startingPriceTHB.toLocaleString('en-US')}`;
      }

      // Fallback calculation via baseline USD rate
      const baseUSD = pkg.startingPriceUSD || (pkg.startingPriceINR ? pkg.startingPriceINR / 83.5 : 500);
      const converted = Math.round(baseUSD * currConfig.rateFromUSD);
      const locale = targetCurr === 'INR' ? 'en-IN' : 'en-US';
      return `From ${currConfig.symbol}${converted.toLocaleString(locale)}`;
    }

    function setupCurrencySelectors() {
      const selectors = document.querySelectorAll('.currency-select');
      selectors.forEach(sel => {
        sel.value = currentCurrency;
        sel.addEventListener('change', (e) => {
          currentCurrency = e.target.value;
          localStorage.setItem('thaipackages_currency', currentCurrency);
          selectors.forEach(s => s.value = currentCurrency);
          if (typeof renderPackagesList === 'function') renderPackagesList();
          if (typeof updatePackageDetailPrices === 'function') updatePackageDetailPrices();
          if (typeof renderHomeFeaturedPackages === 'function') renderHomeFeaturedPackages();
        });
      });
    }

    setupCurrencySelectors();

    // ==========================================================================
    // 2. Navigation Header & Mobile Drawer Menu
    // ==========================================================================
    const header = document.querySelector('.site-header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerLinks = document.querySelectorAll('.drawer-menu a');

    if (header) {
      const handleScroll = () => {
        if (window.scrollY > 30) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    if (hamburgerBtn && mobileDrawer) {
      const openMenu = () => {
        mobileDrawer.classList.add('open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('drawer-open');
        if (closeDrawerBtn) closeDrawerBtn.focus();
      };

      const closeMenu = () => {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        document.body.classList.remove('drawer-open');
        if (hamburgerBtn) hamburgerBtn.focus();
      };

      hamburgerBtn.addEventListener('click', openMenu);
      if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMenu);

      mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) closeMenu();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
          closeMenu();
        }
      });

      // Handle submenu toggles
      const submenuToggles = document.querySelectorAll('.submenu-toggle');
      submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const submenu = toggle.nextElementSibling;
          if (submenu && submenu.classList.contains('drawer-submenu')) {
            const isExpanded = submenu.classList.contains('open');
            
            // Close other open submenus for accordion behavior
            document.querySelectorAll('.drawer-submenu.open').forEach(openSub => {
               if (openSub !== submenu) {
                  openSub.classList.remove('open');
                  const otherToggle = openSub.previousElementSibling;
                  if (otherToggle && otherToggle.classList.contains('submenu-toggle')) {
                      otherToggle.classList.remove('open');
                      otherToggle.setAttribute('aria-expanded', 'false');
                  }
               }
            });

            if (isExpanded) {
              submenu.classList.remove('open');
              toggle.classList.remove('open');
              toggle.setAttribute('aria-expanded', 'false');
            } else {
              submenu.classList.add('open');
              toggle.classList.add('open');
              toggle.setAttribute('aria-expanded', 'true');
            }
          }
        });
      });

      // Set active state on load based on URL
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const allDrawerLinks = document.querySelectorAll('.drawer-menu a.drawer-link');
      allDrawerLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('?')[0];
        if (linkPath === currentPath) {
           link.classList.add('active');
           // Automatically expand submenu if active link is inside one
           const parentSubmenu = link.closest('.drawer-submenu');
           if (parentSubmenu) {
             parentSubmenu.classList.add('open');
             const siblingToggle = parentSubmenu.previousElementSibling;
             if (siblingToggle && siblingToggle.classList.contains('submenu-toggle')) {
                 siblingToggle.classList.add('open');
                 siblingToggle.setAttribute('aria-expanded', 'true');
             }
           }
        }
      });

      // Close drawer on link click
      allDrawerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
           closeMenu();
        });
      });
    }

    // Helper: URL Query Parameter
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // ==========================================================================
    // 3. Homepage Dynamic Featured Packages & Itinerary Modal
    // ==========================================================================
    const homeFeaturedGrid = document.getElementById('homeFeaturedGrid');
    const itineraryModal = document.getElementById('itineraryModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    function openItineraryModal() {
      if (!itineraryModal) return;
      itineraryModal.classList.add('active');
      itineraryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeItineraryModal() {
      if (!itineraryModal) return;
      itineraryModal.classList.remove('active');
      itineraryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (itineraryModal) {
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeItineraryModal);
      }
      itineraryModal.addEventListener('click', (e) => {
        if (e.target === itineraryModal) closeItineraryModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && itineraryModal.classList.contains('active')) {
          closeItineraryModal();
        }
      });
    }

    function renderHomeFeaturedPackages() {
      const featuredCarousel = document.getElementById('featuredCarousel') || document.querySelector('.featured-carousel-container');
      const homeFeaturedGrid = document.getElementById('homeFeaturedGrid') || document.querySelector('.carousel-track');
      const prevBtn = document.getElementById('featuredPrevBtn') || document.querySelector('.carousel-btn.prev-btn');
      const nextBtn = document.getElementById('featuredNextBtn') || document.querySelector('.carousel-btn.next-btn');

      if (!homeFeaturedGrid) return;
      
      // Show all packages in the carousel
      const featured = (PACKAGES && PACKAGES.length > 0) ? PACKAGES : FALLBACK_PACKAGES;
      const badges = [
        'BESTSELLER', 'COUPLE SPECIAL', 'FAMILY FAVORITE', 'HONEYMOON SPECIAL',
        'CITY BREAK', 'BEACH SPECIAL', 'ISLAND SPECIAL', 'NATURE SPECIAL',
        'COMBO TOUR', 'TWIN DESTINATION', 'TELUGU SPECIAL', 'INDIAN FOOD'
      ];
      
      const featurePillsMap = {
        'bangkok-pattaya-classic-vacation': [
          'Telugu Guides',
          '3N Pattaya Condo',
          '2N Bangkok Condo',
          'Indian Food',
          '100% Private AC'
        ],
        'phuket-krabi-romantic-escape': [
          'Beachfront Resorts',
          'Phi Phi Speedboat',
          '100% Private AC',
          'Telugu Support'
        ],
        'thailand-family-tour-packages': [
          'Family Condos',
          'Safari World',
          'Indian Food',
          'Private AC'
        ],
        'thailand-honeymoon-packages': [
          'Pool Villas',
          'Sunset Cruise',
          'Couple Spa',
          'Private Transfers'
        ],
        'bangkok-tour-packages': [
          'Grand Palace',
          'Dinner Cruise',
          'Shopping Tour',
          'Private AC'
        ],
        'pattaya-tour-packages': [
          'Coral Island',
          'Alcazar VIP',
          'Sanctuary of Truth',
          'Private AC'
        ],
        'phuket-tour-packages': [
          'James Bond Island',
          'Phi Phi Speedboat',
          'Patong Beach',
          'Private AC'
        ],
        'krabi-tour-packages': [
          '4 Islands Tour',
          'Emerald Pool',
          'Railay Beach',
          '🚗 Private AC'
        ],
        'bangkok-pattaya-tour-packages': [
          '🏙️ City + Beach',
          '🛥️ Speedboat Excursion',
          '🍽️ Indian Meals',
          '🚗 Private AC'
        ],
        'bangkok-phuket-tour-packages': [
          '🏙️ Bangkok Sights',
          '🏖️ Phuket Beaches',
          '🛥️ Island Cruise',
          '🚗 Private AC'
        ],
        'thailand-tour-packages-from-hyderabad': [
          '🗣️ Native Telugu Guides',
          'Native Telugu Guides',
          'South Indian Food',
          'Family Condos',
          'Private AC'
        ],
        'thailand-tour-packages-with-indian-food': [
          '100% Indian Meals',
          'Pure Veg / Jain',
          'Kitchen Condos',
          'Private AC'
        ],
        'chiang-mai-tour-packages': [
          'Doi Suthep Temple',
          'Elephant Sanctuary',
          'Night Bazaar',
          'Private AC'
        ],
        'koh-samui-tour-packages': [
          'Ang Thong Marine Park',
          'Big Buddha',
          'Beachfront Stay',
          'Private AC'
        ]
      };

      homeFeaturedGrid.innerHTML = featured.map((pkg, idx) => {
        const pills = featurePillsMap[pkg.slug] || [
          `${pkg.destination || 'Thailand'}`,
          '100% Private AC'
        ];
        const isSignature = pkg.slug === 'bangkok-pattaya-classic-vacation';
        const link = pkg.slug === 'bangkok-pattaya-classic-vacation' ? 'package-detail.html?id=bangkok-pattaya-classic-vacation' :
                     pkg.slug === 'phuket-krabi-romantic-escape' ? 'package-detail.html?id=phuket-krabi-romantic-escape' :
                     pkg.slug === 'thailand-family-tour-packages' ? 'family-packages.html' :
                     pkg.slug === 'thailand-honeymoon-packages' ? 'honeymoon-packages.html' :
                     pkg.slug === 'thailand-tour-packages-from-hyderabad' ? 'group-tours.html' :
                     pkg.slug === 'thailand-tour-packages-with-indian-food' ? 'customized-packages.html' :
                     'packages.html';

        return `
          <article class="package-card compact" id="${isSignature ? 'cardBangkokPattaya' : ''}">
            <div class="package-media-wrap">
              <img src="${pkg.thumbnail || pkg.heroImage}" alt="${pkg.title}" loading="lazy" width="600" height="450">
              <span class="package-badge-tag">${badges[idx] || pkg.category || 'FEATURED'}</span>
              <span class="package-duration-tag">${pkg.durationDays || (pkg.duration && pkg.duration.days) || 5} Days / ${pkg.durationNights || (pkg.duration && pkg.duration.nights) || 4} Nights</span>
            </div>
            <div class="package-card-body">
              <div class="package-price-wrap">
                <span class="package-price-label">Starting Price</span>
                <span class="package-price-value">${formatPrice(pkg)}</span>
              </div>
              <span class="package-destination">${pkg.destination || 'Thailand'}</span>
              <h3>${pkg.title}</h3>
              <p>${pkg.shortDescription || pkg.description}</p>
              
              

              <div class="package-card-footer">
                <a href="${link}" class="btn btn-primary btn-sm">
                  View Itinerary
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');

      // Update modal price display if present
      const modalPriceVal = document.getElementById('modalPriceVal');
      const sigPkg = PACKAGES.find(p => p.slug === 'bangkok-pattaya-classic-vacation') || PACKAGES[0];
      if (modalPriceVal && sigPkg) {
        modalPriceVal.innerHTML = `${formatPrice(sigPkg)} <small style="font-size:14px; font-weight:500; color:var(--text-muted)">/ person</small>`;
      }

      // Setup Carousel Arrow Controls & Dynamic Movement
      if (prevBtn && nextBtn && featuredCarousel) {
        const updateCarouselDimensions = () => {
          const w = featuredCarousel.clientWidth;
          let cardsVisible = 1.15;
          if (window.innerWidth >= 1280) cardsVisible = 4;
          else if (window.innerWidth >= 1024) cardsVisible = 3;
          else if (window.innerWidth >= 768) cardsVisible = 2;
          const gap = 16;
          const cardWidth = Math.floor((w - (cardsVisible - 1) * gap) / cardsVisible);
          if (cardWidth > 0) {
            featuredCarousel.style.setProperty('--computed-card-width', `${cardWidth}px`);
          }
        };

        const getScrollStep = () => {
          const card = featuredCarousel.querySelector('.package-card.compact');
          if (!card) return 300;
          let gap = 16;
          const track = featuredCarousel.querySelector('.carousel-track') || homeFeaturedGrid;
          if (track) {
            const st = window.getComputedStyle(track);
            const g = parseFloat(st.gap || st.columnGap);
            if (!isNaN(g) && g > 0) gap = g;
          }
          return card.getBoundingClientRect().width + gap;
        };

        const updateArrowStates = () => {
          const scrollLeft = Math.round(featuredCarousel.scrollLeft);
          const maxScroll = Math.round(featuredCarousel.scrollWidth - featuredCarousel.clientWidth);

          prevBtn.disabled = scrollLeft <= 4;
          nextBtn.disabled = maxScroll <= 0 || scrollLeft >= maxScroll - 4;
        };

        // Click handlers: move exactly 1 card position dynamically
        prevBtn.onclick = () => {
          featuredCarousel.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        };

        nextBtn.onclick = () => {
          featuredCarousel.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        };

        featuredCarousel.addEventListener('scroll', updateArrowStates, { passive: true });
        window.addEventListener('resize', () => {
          updateCarouselDimensions();
          updateArrowStates();
        });

        // Initialize state
        updateCarouselDimensions();
        updateArrowStates();
        setTimeout(() => {
          updateCarouselDimensions();
          updateArrowStates();
        }, 150);
      }
    }

    if (homeFeaturedGrid) {
      renderHomeFeaturedPackages();
      
      // Also bind existing static button if present
      const staticOpenBtn = document.getElementById('openItineraryBtn');
      if (staticOpenBtn) {
        staticOpenBtn.addEventListener('click', openItineraryModal);
      }
    }

    // ==========================================================================
    // 4. Destinations Page Directory & Region Filter
    // ==========================================================================
    const destinationsGrid = document.getElementById('destinationsGrid');
    const regionFilterBtns = document.querySelectorAll('.filter-btn[data-region]');

    if (destinationsGrid && DESTINATIONS && DESTINATIONS.length > 0) {
      let activeRegion = 'all';

      const renderDestinations = () => {
        const filtered = DESTINATIONS.filter(d => {
          if (activeRegion === 'all') return true;
          return d.region.toLowerCase().includes(activeRegion.toLowerCase());
        });

        if (filtered.length === 0) {
          destinationsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: white; border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
              <h3>No destinations found</h3>
              <p style="margin-top: 8px;">Try selecting another region or view all destinations.</p>
            </div>
          `;
          return;
        }

        destinationsGrid.innerHTML = filtered.map(d => `
          <article class="destination-card">
            <div class="dest-media-wrap">
              <img src="${d.thumbnail}" alt="${d.name}, ${d.country || 'Thailand'}" loading="lazy" width="600" height="450">
              <span class="dest-region-badge">${d.region}</span>
            </div>
            <div class="dest-card-body">
              <h3>${d.name}</h3>
              <p>${d.shortDescription || d.description}</p>
              <div class="dest-card-footer">
                <span>Best: ${d.quickFacts ? d.quickFacts.bestTime : d.bestTime}</span>
                <a href="destination-detail.html?id=${d.slug}" class="link-arrow">
                  Explore ${d.name} →
                </a>
              </div>
            </div>
          </article>
        `).join('');
      };

      renderDestinations();

      regionFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          regionFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeRegion = btn.dataset.region;
          renderDestinations();
        });
      });
    }

    // ==========================================================================
    // 5. Packages Directory Page & Multi-Filter Logic
    // ==========================================================================
    const packagesGrid = document.getElementById('packagesGrid');
    const packageSearchInput = document.getElementById('packageSearch');
    const packageDestFilter = document.getElementById('packageDestFilter');
    const packageDurationFilter = document.getElementById('packageDurationFilter');
    const categoryFilterBtns = document.querySelectorAll('.filter-btn[data-category]');

    let activeCategory = 'all';

    function renderPackagesList() {
      if (!packagesGrid || !PACKAGES || PACKAGES.length === 0) return;

      const searchTerm = packageSearchInput ? packageSearchInput.value.trim().toLowerCase() : '';
      const selectedDest = packageDestFilter ? packageDestFilter.value : 'all';
      const selectedDuration = packageDurationFilter ? packageDurationFilter.value : 'all';

      const filtered = PACKAGES.filter(pkg => {
        // 1. Category Filter
        if (activeCategory !== 'all') {
          const catMatch = pkg.category.toLowerCase().includes(activeCategory.toLowerCase());
          if (!catMatch) return false;
        }

        // 2. Destination Filter
        if (selectedDest !== 'all') {
          const destMatch = (pkg.destinationSlug && pkg.destinationSlug.toLowerCase() === selectedDest.toLowerCase()) || 
                            (pkg.destination && pkg.destination.toLowerCase().includes(selectedDest.toLowerCase()));
          if (!destMatch) return false;
        }

        // 3. Duration Filter
        if (selectedDuration !== 'all') {
          const days = pkg.durationDays || (pkg.duration ? pkg.duration.days : 0);
          if (selectedDuration === 'short' && days > 5) return false;
          if (selectedDuration === 'medium' && (days < 6 || days > 7)) return false;
          if (selectedDuration === 'long' && days < 8) return false;
        }

        // 4. Search Keyword Filter
        if (searchTerm) {
          const titleMatch = pkg.title.toLowerCase().includes(searchTerm);
          const descMatch = (pkg.description || '').toLowerCase().includes(searchTerm);
          const destMatch = (pkg.destination || '').toLowerCase().includes(searchTerm);
          const highlightsMatch = (pkg.highlights || []).some(h => h.toLowerCase().includes(searchTerm));
          if (!titleMatch && !descMatch && !destMatch && !highlightsMatch) return false;
        }

        return true;
      });

      if (filtered.length === 0) {
        packagesGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
            <h3 style="margin-bottom: 8px;">No matching packages found</h3>
            <p style="margin-bottom: 20px; color: var(--text-muted);">Try adjusting your search criteria, duration, or category filters.</p>
            <button id="resetFiltersBtn" class="btn btn-primary btn-sm">Reset All Filters</button>
          </div>
        `;
        const resetBtn = document.getElementById('resetFiltersBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            if (packageSearchInput) packageSearchInput.value = '';
            if (packageDestFilter) packageDestFilter.value = 'all';
            if (packageDurationFilter) packageDurationFilter.value = 'all';
            activeCategory = 'all';
            categoryFilterBtns.forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
            renderPackagesList();
          });
        }
        return;
      }

      packagesGrid.innerHTML = filtered.map(pkg => `
        <article class="package-card">
          <div class="package-media-wrap">
            <img src="${pkg.thumbnail}" alt="${pkg.title}" loading="lazy" width="600" height="800">
            <span class="package-category-tag">${pkg.category}</span>
            <span class="package-duration-tag">${pkg.durationDays || pkg.duration.days} Days / ${pkg.durationNights || pkg.duration.nights} Nights</span>
          </div>
          <div class="package-card-body">
            <span class="package-destination">${pkg.destination}</span>
            <h3>${pkg.title}</h3>
            <p>${pkg.shortDescription || pkg.description}</p>
            <div class="package-card-footer">
              <div class="package-price-wrap">
                <span class="package-price-label">Starting Price</span>
                <span class="package-price-value">${formatPrice(pkg)}</span>
              </div>
              <a href="https://wa.me/918121214181?text=${encodeURIComponent('Hi ThaiPackages, I am interested in the ' + (pkg.title || 'Thailand Holiday') + ' package.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                View Itinerary
              </a>
            </div>
          </div>
        </article>
      `).join('');
    }

    if (packagesGrid) {
      // Check for URL parameters from quick search planner (dest, category, duration)
      const urlDest = getQueryParam('dest');
      const urlCat = getQueryParam('category');
      const urlDur = getQueryParam('duration');

      if (urlDest && packageDestFilter) {
        packageDestFilter.value = urlDest;
      }
      if (urlDur && packageDurationFilter) {
        packageDurationFilter.value = urlDur;
      }
      if (urlCat && urlCat !== 'all') {
        activeCategory = urlCat;
        categoryFilterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.category && b.dataset.category.toLowerCase().includes(urlCat.toLowerCase()));
        });
      }

      renderPackagesList();

      if (packageSearchInput) {
        packageSearchInput.addEventListener('input', () => renderPackagesList());
      }
      if (packageDestFilter) {
        packageDestFilter.addEventListener('change', () => renderPackagesList());
      }
      if (packageDurationFilter) {
        packageDurationFilter.addEventListener('change', () => renderPackagesList());
      }

      categoryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          categoryFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          activeCategory = btn.dataset.category;
          renderPackagesList();
        });
      });
    }

    // ==========================================================================
    // 6. Destination Detail Page Populator & Graceful Fallback
    // ==========================================================================
    const destDetailHero = document.getElementById('destDetailHero');
    if (destDetailHero && DESTINATIONS && DESTINATIONS.length > 0) {
      const slug = getQueryParam('id') || getQueryParam('dest');
      let destination = DESTINATIONS.find(d => d.slug === slug);

      if (!destination) {
        window.location.replace('destinations.html');
        return;
      }

      // Dynamic Title
      document.title = `${destination.name} Holiday Packages & Tours | ${BRAND.name || 'ThaiPackages.com'}`;

      // Populate Hero & Details
      const destTitle = document.getElementById('destTitle');
      const destTagline = document.getElementById('destTagline');
      const destDesc = document.getElementById('destDesc');
      const destHeroBg = document.getElementById('destHeroBg');

      if (destTitle) destTitle.textContent = destination.name;
      if (destTagline) destTagline.textContent = destination.tagline;
      if (destDesc) destDesc.textContent = destination.description;
      if (destHeroBg) destHeroBg.src = destination.heroImage;

      // City Description Block
      const destCityDescription = document.getElementById('destCityDescription');
      if (destCityDescription && destination.longDescriptionHTML) {
        destCityDescription.innerHTML = destination.longDescriptionHTML;
      }

      // Highlights List
      const destHighlightsList = document.getElementById('destHighlightsList');
      if (destHighlightsList && destination.highlights) {
        destHighlightsList.innerHTML = destination.highlights.map(h => `<li>${h}</li>`).join('');
      }

      // Recommended Packages for this destination
      const destRecommendedPackages = document.getElementById('destRecommendedPackages');
      if (destRecommendedPackages && PACKAGES) {
        const packageSlugs = destination.packageSlugs || [];
        const recPackages = PACKAGES.filter(p => packageSlugs.includes(p.slug) || (p.destinationSlug === destination.slug));
        
        if (recPackages.length > 0) {
          destRecommendedPackages.innerHTML = recPackages.map(pkg => `
            <article class="package-card">
              <div class="package-media-wrap">
                <img src="${pkg.thumbnail}" alt="${pkg.title}" loading="lazy" width="600" height="800">
                <span class="package-category-tag">${pkg.category}</span>
                <span class="package-duration-tag">${pkg.durationDays || pkg.duration.days} Days / ${pkg.durationNights || pkg.duration.nights} Nights</span>
              </div>
              <div class="package-card-body">
                <span class="package-destination">${pkg.destination}</span>
                <h3>${pkg.title}</h3>
                <p>${pkg.shortDescription || pkg.description}</p>
                <div class="package-card-footer">
                  <div class="package-price-wrap">
                    <span class="package-price-label">Starting Price</span>
                    <span class="package-price-value">${formatPrice(pkg)}</span>
                  </div>
                  <a href="https://wa.me/918121214181?text=${encodeURIComponent('Hi ThaiPackages, I am interested in the ' + (pkg.title || 'Thailand Holiday') + ' package.')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    View Itinerary
                  </a>
                </div>
              </div>
            </article>
          `).join('');
        } else {
          destRecommendedPackages.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-muted);">Custom itineraries available on request.</p>`;
        }
      }
    }

    // ==========================================================================
    // 7. Package Detail Page Populator (Primary Conversion Page)
    // ==========================================================================
    let activeDetailPackage = null;

    function updatePackageDetailPrices() {
      if (!activeDetailPackage) return;
      const sidebarPrice = document.getElementById('sidebarPrice');
      const mobileBarPrice = document.getElementById('mobileBarPrice');
      const formatted = formatPrice(activeDetailPackage);
      if (sidebarPrice) sidebarPrice.textContent = formatted;
      if (mobileBarPrice) mobileBarPrice.textContent = formatted;
    }

    const pkgDetailMain = document.getElementById('pkgDetailMain');
    if (pkgDetailMain && PACKAGES && PACKAGES.length > 0) {
      const slug = getQueryParam('id') || getQueryParam('dest');
      let pkg = PACKAGES.find(p => p.slug === slug);

      if (!pkg) {
        window.location.replace('packages.html');
        return;
      }
      activeDetailPackage = pkg;

      const durationStr = `${pkg.durationDays || (pkg.duration && pkg.duration.days) || 5} Days / ${pkg.durationNights || (pkg.duration && pkg.duration.nights) || 4} Nights`;

      // Document Title
      document.title = `${pkg.title} (${durationStr}) | ${BRAND.name || 'ThaiPackages.com'}`;

      // Elements
      const pkgHeroBg = document.getElementById('pkgHeroBg');
      const pkgCategory = document.getElementById('pkgCategory');
      const pkgTitle = document.getElementById('pkgTitle');
      const pkgDest = document.getElementById('pkgDest');
      const pkgDuration = document.getElementById('pkgDuration');
      const pkgDesc = document.getElementById('pkgDesc');

      if (pkgHeroBg) pkgHeroBg.src = pkg.heroImage;
      if (pkgCategory) pkgCategory.textContent = pkg.category;
      if (pkgTitle) pkgTitle.textContent = pkg.title;
      if (pkgDest) pkgDest.textContent = pkg.destination;
      if (pkgDuration) pkgDuration.textContent = durationStr;
      if (pkgDesc) pkgDesc.textContent = pkg.description;

      // Highlights
      const pkgHighlights = document.getElementById('pkgHighlights');
      if (pkgHighlights && pkg.highlights) {
        pkgHighlights.innerHTML = pkg.highlights.map(h => `<li>${h}</li>`).join('');
      }

      // Accessible Accordion Itinerary (<details>/<summary>)
      const pkgItinerary = document.getElementById('pkgItinerary');
      if (pkgItinerary && pkg.itinerary) {
        pkgItinerary.innerHTML = pkg.itinerary.map((item, idx) => `
          <details class="itinerary-day" ${idx === 0 ? 'open' : ''}>
            <summary class="itinerary-summary">
              <div class="itinerary-title-wrap">
                <span class="itinerary-day-tag">D${item.day}</span>
                <span>Day ${item.day}: ${item.title}</span>
              </div>
              <span class="itinerary-chevron" aria-hidden="true">▼</span>
            </summary>
            <div class="itinerary-details">
              <p>${item.summary}</p>
            </div>
          </details>
        `).join('');
      }

      // Inclusions & Exclusions
      const pkgInclusions = document.getElementById('pkgInclusions');
      const pkgExclusions = document.getElementById('pkgExclusions');
      if (pkgInclusions && pkg.inclusions) pkgInclusions.innerHTML = pkg.inclusions.map(i => `<li>${i}</li>`).join('');
      if (pkgExclusions && pkg.exclusions) pkgExclusions.innerHTML = pkg.exclusions.map(e => `<li>${e}</li>`).join('');

      // Dynamic Hotel & Dining Options (if defined on package)
      const pkgAccomOptions = document.getElementById('pkgAccomOptions');
      const pkgDiningOptions = document.getElementById('pkgDiningOptions');
      if (pkgAccomOptions && pkg.hotelOptions && pkg.hotelOptions.length > 0) {
        pkgAccomOptions.innerHTML = pkg.hotelOptions.map(h => {
          const locs = Object.entries(h).filter(([k]) => k !== 'tier').map(([k, v]) => `${k.charAt(0).toUpperCase() + k.slice(1)}: ${v}`).join(' • ');
          const isFlagship = h.tier.toLowerCase().includes('condo') || h.tier.toLowerCase().includes('flagship') || h.tier.toLowerCase().includes('recommended');
          return `<p style="font-size: 13.5px; color: var(--teal-900); margin-bottom: 6px;">
            <strong style="color: ${isFlagship ? 'var(--orange-600)' : 'var(--teal-950)'};">${h.tier}:</strong> ${locs}
          </p>`;
        }).join('');
      }
      if (pkgDiningOptions && pkg.diningOptions && pkg.diningOptions.length > 0) {
        pkgDiningOptions.innerHTML = pkg.diningOptions.map(d => {
          const isFlagship = d.plan.toLowerCase().includes('self-cook') || d.plan.toLowerCase().includes('flagship') || d.plan.toLowerCase().includes('recommended');
          return `<p style="font-size: 13.5px; color: var(--teal-900); margin-bottom: 6px;">
            <strong style="color: ${isFlagship ? 'var(--orange-600)' : 'var(--teal-950)'};">${d.plan}:</strong> ${d.details}
          </p>`;
        }).join('');
      }

      // Important Notes / Travel Notes
      const pkgNotes = document.getElementById('pkgNotes');
      const notesList = pkg.travelNotes || pkg.importantNotes || [];
      if (pkgNotes && notesList.length > 0) {
        pkgNotes.innerHTML = notesList.map(n => `<li>${n}</li>`).join('');
      }

      // Desktop Sidebar & Mobile Conversion Bar
      const sidebarDuration = document.getElementById('sidebarDuration');
      const sidebarCtaBtn = document.getElementById('sidebarCtaBtn');
      const mobileBarCtaBtn = document.getElementById('mobileBarCtaBtn');
      const pkgWhatsAppBtn = document.getElementById('pkgWhatsAppBtn');

      if (sidebarDuration) sidebarDuration.textContent = durationStr;

      updatePackageDetailPrices();

      const quoteUrl = `contact.html?package=${encodeURIComponent(pkg.title)}&dest=${encodeURIComponent(pkg.destinationSlug || pkg.destination)}`;
      if (sidebarCtaBtn) sidebarCtaBtn.href = quoteUrl;
      if (mobileBarCtaBtn) mobileBarCtaBtn.href = quoteUrl;

      // WhatsApp Inquiry Link (Safe integration)
      if (pkgWhatsAppBtn) {
        const waMsg = `Hello ${BRAND.name || 'ThaiPackages.com'}! I would like to enquire about the "${pkg.title}" (${durationStr}). Please share available dates and custom options.`;
        
        if (typeof isContactConfigured === 'function' && isContactConfigured(CONTACT.whatsappNumber)) {
          pkgWhatsAppBtn.href = getWhatsAppUrl(waMsg);
          pkgWhatsAppBtn.target = '_blank';
          pkgWhatsAppBtn.rel = 'noopener noreferrer';
        } else {
          // If WhatsApp number not configured yet, direct gracefully to quote form
          pkgWhatsAppBtn.href = quoteUrl;
          pkgWhatsAppBtn.title = "Request inquiry via quotation form";
        }
      }
    }

    // ==========================================================================
    // 8. Lead Generation / Contact Form & Safe Communication Channels
    // ==========================================================================
    const leadQuoteForm = document.getElementById('leadQuoteForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');

    if (leadQuoteForm) {
      const urlPkg = getQueryParam('package');
      const urlDest = getQueryParam('dest');
      const formDestSelect = document.getElementById('formDestination');
      const formNotes = document.getElementById('formNotes');

      if (urlDest && formDestSelect) {
        for (let opt of formDestSelect.options) {
          if (opt.value.toLowerCase().includes(urlDest.toLowerCase())) {
            opt.selected = true;
            break;
          }
        }
      }

      if (urlPkg && formNotes) {
        formNotes.value = `Interested in the "${urlPkg}" itinerary.`;
      }

      leadQuoteForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('formName');
        const emailInput = document.getElementById('formEmail');
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        if (!name || !email) {
          alert('Please provide your name and email address.');
          return;
        }

        // Display clean confirmation message
        if (formSuccessMessage) {
          formSuccessMessage.style.display = 'block';
          leadQuoteForm.reset();
          formSuccessMessage.scrollIntoView({ behavior: 'smooth' });
        }
      });

      // Direct WhatsApp Inquiry Button on Contact Page
      const directWaBtn = document.getElementById('directWaBtn');
      if (directWaBtn) {
        if (typeof isContactConfigured === 'function' && isContactConfigured(CONTACT.whatsappNumber)) {
          directWaBtn.addEventListener('click', () => {
            const name = document.getElementById('formName') ? document.getElementById('formName').value.trim() : '';
            const destination = formDestSelect ? formDestSelect.value : 'Thailand';
            const travelDate = document.getElementById('formDate') ? document.getElementById('formDate').value.trim() : '';
            
            let msg = `Hello ${BRAND.name || 'ThaiPackages.com'}! I would like to request a custom Thailand holiday quote.`;
            if (name) msg += ` My name is ${name}.`;
            if (destination) msg += ` Destination: ${destination}.`;
            if (travelDate) msg += ` Expected travel date: ${travelDate}.`;

            window.open(getWhatsAppUrl(msg), '_blank');
          });
        } else {
          // Hide button or make it focus the main form
          directWaBtn.addEventListener('click', () => {
            const nameInput = document.getElementById('formName');
            if (nameInput) nameInput.focus();
          });
          directWaBtn.innerHTML = '📋 Submit Online Quotation Form';
        }
      }
    }

    // ==========================================================================
    // 9. Centralized Contact / Sticky Actions & Footer Info
    // ==========================================================================
    // Ensure all elements with data-context-field or contact placeholders render safely
    // Global Sticky Action Buttons: WhatsApp & Direct Phone Call
    const stickyWhatsAppBtn = document.getElementById('stickyWhatsAppBtn') || document.getElementById('floatingWhatsAppBtn');
    if (stickyWhatsAppBtn) {
      stickyWhatsAppBtn.href = 'https://wa.me/918121214181';
      stickyWhatsAppBtn.target = '_blank';
      stickyWhatsAppBtn.rel = 'noopener noreferrer';
    }

    const stickyPhoneBtn = document.getElementById('stickyPhoneBtn');
    if (stickyPhoneBtn) {
      stickyPhoneBtn.href = 'tel:+918121214181';
    }

    // Check if mobile conversion bar is present and tag body for CSS offset
    const mobileConversionBar = document.getElementById('mobileConversionBar');
    if (mobileConversionBar) {
      document.body.classList.add('has-mobile-bar');
    }

    // Clean any stray AI asterisks (**) from text nodes
    function removeAsterisksFromTextNodes(element) {
      if (!element) return;
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: function(node) {
            // Ignore script or style content
            if (node.parentElement && ['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(node.parentElement.tagName)) {
              return NodeFilter.FILTER_REJECT;
            }
            return node.nodeValue && node.nodeValue.includes('**') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        },
        false
      );

      const nodesToUpdate = [];
      while (walker.nextNode()) {
        nodesToUpdate.push(walker.currentNode);
      }

      nodesToUpdate.forEach(node => {
        node.nodeValue = node.nodeValue.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*\*/g, '');
      });
    }

    removeAsterisksFromTextNodes(document.body);

  });
})();



