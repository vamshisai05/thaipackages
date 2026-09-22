/**
 * ThaiPackages.com - Destination Catalog Context
 * Single source of truth for all Thailand destination guides, regions, imagery, and quick facts.
 */

export const DESTINATIONS = [
  {
    slug: "phuket",
    name: "Phuket",
    country: "Thailand",
    region: "Andaman Coast",
    tagline: "The Pearl of the Andaman Sea",
    shortDescription: "Dramatic limestone cliffs, vibrant night markets, pristine beaches, and premier beachfront luxury resorts.",
    description: "Thailand’s largest island, famed for dramatic limestone cliffs, vibrant night markets, pristine beaches, and premier beachfront luxury resorts.",
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    
    quickFacts: {
      bestTime: "Nov – Apr",
      currency: "Thai Baht (THB)",
      idealDuration: "4 – 7 Days",
      travelStyle: ["Beach", "Island Hopping", "Luxury Resorts", "Marine Adventures"]
    },
    longDescriptionHTML: `
<h2>Phuket – The Pearl of the Andaman Sea</h2>
<p>Discover Phuket, Thailand's premier island destination, famous for its dramatic limestone cliffs, pristine beaches, vibrant night markets, and luxurious resorts.</p>
<p>Enjoy spectacular speedboat tours to the Phi Phi Islands, witness breathtaking sunsets at Promthep Cape, explore the Sino-Portuguese heritage of Old Phuket Town, and experience thrilling marine adventures.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Phuket offers a perfect mix of relaxation, culture, and coastal excitement.</p>
<p><strong>Beaches • Island Hopping • Night Markets • Heritage • Marine Adventures • Luxury</strong></p>
<p>Phuket – Discover the ultimate island escape.</p>
    `,

    highlights: [
      "Speedboat day tours to Phi Phi Islands, Maya Bay, and Pileh Lagoon",
      "Sunset panorama at Promthep Cape and Big Buddha viewpoint",
      "Old Phuket Town Sino-Portuguese heritage architecture and street dining",
      "Private beach clubs and luxury pool villa accommodations"
    ],

    packageSlugs: [
      "phuket-krabi-romantic-escape"
    ]
  },
  {
    slug: "krabi",
    name: "Krabi",
    country: "Thailand",
    region: "Andaman Coast",
    tagline: "Dramatic Karsts & Emerald Waters",
    shortDescription: "Towering limestone karst monoliths, tranquil emerald bays, hidden lagoons, and world-class island hopping.",
    description: "Towering limestone karst monoliths, tranquil emerald bays, hidden lagoons, and world-class island hopping around Railay Beach.",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",

    quickFacts: {
      bestTime: "Nov – Apr",
      currency: "Thai Baht (THB)",
      idealDuration: "3 – 5 Days",
      travelStyle: ["Scenic Nature", "Island Hopping", "Relaxation", "Rock Climbing"]
    },
    longDescriptionHTML: `
<h2>Krabi – Tropical Beauty & Island Adventures</h2>
<p>Discover Krabi, a stunning tropical destination famous for its crystal-clear waters, limestone cliffs, beautiful beaches and breathtaking islands.</p>
<p>Enjoy exciting island-hopping tours, snorkeling, beach activities, scenic viewpoints and sunset experiences. Explore the spectacular Railay Beach, Phi Phi Islands and Four Islands, or simply relax surrounded by nature.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon or with friends, Krabi offers the perfect blend of relaxation, adventure and natural beauty.</p>
<p><strong>Beaches • Island Tours • Snorkeling • Adventure • Nature • Sunsets</strong></p>
<p>Krabi – Where tropical dreams become unforgettable memories.</p>
    `,

    highlights: [
      "Traditional longtail boat cruise around Krabi 4 Islands (Koh Tup, Chicken Island, Koh Mor)",
      "Phra Nang Cave Beach with dramatic limestone climbing walls",
      "Geothermal Hot Springs and natural Emerald Pool in lush rainforest",
      "Uncrowded tranquil sunsets along Ao Nang and Klong Muang beaches"
    ],

    packageSlugs: [
      "phuket-krabi-romantic-escape"
    ]
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    region: "Central Thailand",
    tagline: "The Electric Capital of Smiles",
    shortDescription: "Opulent golden palaces, historic riverfront temples, vibrant street markets, and luxury rooftop lounges.",
    description: "Opulent golden palaces, historic riverfront temples, vibrant street markets, Michelin-rated dining, and luxury rooftop lounges.",
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",

    quickFacts: {
      bestTime: "Nov – Feb",
      currency: "Thai Baht (THB)",
      idealDuration: "3 – 5 Days",
      travelStyle: ["Culture", "Shopping", "Urban Gastronomy", "River Cruises"]
    },
    longDescriptionHTML: `
<h2>Bangkok – Where Tradition Meets Modern Thailand</h2>
<p>Discover Bangkok, Thailand's vibrant capital, where rich culture, modern city life and unforgettable experiences come together. Explore magnificent temples, enjoy a scenic Chao Phraya River cruise, shop at colorful markets and world-class malls, and experience Bangkok's famous food scene.</p>
<p>From Grand Palace and Wat Pho to bustling markets, rooftop views and exciting nightlife, Bangkok offers something for every traveller.</p>
<p>Whether you're travelling with family, as a couple, on your honeymoon, with friends or as a group, ThaiPackages.com can customize your Bangkok experience around your interests and budget.</p>
<p><strong>Culture • Shopping • Food • Sightseeing • River Cruises • Nightlife</strong></p>
<p>Bangkok – Experience the heart of Thailand.</p>
    `,

    highlights: [
      "Grand Palace, Wat Phra Kaew (Emerald Buddha), and Wat Arun (Temple of Dawn)",
      "Chao Phraya River luxury dinner cruise with illuminated temple vistas",
      "Shopping at ICONSIAM, CentralWorld, and Chatuchak Weekend Market",
      "Full-day family safari and animal presentations at Safari World"
    ],

    packageSlugs: [
      "bangkok-pattaya-classic-vacation"
    ]
  },
  {
    slug: "pattaya",
    name: "Pattaya",
    country: "Thailand",
    region: "Gulf of Thailand",
    tagline: "Seaside Entertainment & Coastal Fun",
    shortDescription: "A dynamic coastal resort city offering golden beaches, Coral Island day trips, and botanical gardens.",
    description: "A dynamic coastal resort city offering golden beaches, Coral Island day trips, botanical gardens, and non-stop entertainment.",
    heroImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",

    quickFacts: {
      bestTime: "Nov – Mar",
      currency: "Thai Baht (THB)",
      idealDuration: "2 – 4 Days",
      travelStyle: ["Watersports", "Family Attractions", "Entertainment", "Beaches"]
    },
    longDescriptionHTML: `
<h2>Pattaya – Beaches, Adventure & Exciting Nights</h2>
<p>Discover Pattaya, one of Thailand's most popular seaside destinations, known for its beautiful coastline, island adventures, entertainment and vibrant nightlife.</p>
<p>Enjoy Coral Island trips, water sports, beach activities, scenic viewpoints, shopping, restaurants and spectacular entertainment shows. As the sun sets, Pattaya comes alive with lively streets, music, restaurants, bars and nightlife—making it especially popular with friends and bachelor groups.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Pattaya offers experiences to match every travel style.</p>
<p><strong>Beaches • Island Tours • Water Sports • Shopping • Entertainment • Nightlife</strong></p>
<p>Pattaya – Fun, adventure and unforgettable memories.</p>
    `,

    highlights: [
      "Coral Island (Koh Larn) speedboat tour with parasailing and snorkeling",
      "The Sanctuary of Truth all-wood architectural marvel",
      "Nong Nooch Tropical Botanical Garden with cultural displays",
      "Alcazar / Tiffany world-class cabaret theatre shows"
    ],

    packageSlugs: [
      "bangkok-pattaya-classic-vacation"
    ]
  },
  {
    slug: "samui",
    name: "Koh Samui",
    country: "Thailand",
    region: "Gulf of Thailand",
    tagline: "Pristine Island Paradise & Luxury Villas",
    shortDescription: "Lush coconut groves, tranquil turquoise waters, serene wellness spas, and ultra-luxury private pool villas.",
    description: "Lush coconut groves, tranquil turquoise waters, serene wellness spas, and ultra-luxury private pool villa retreats.",
    heroImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=800&q=80",

    quickFacts: {
      bestTime: "Dec – Sep",
      currency: "Thai Baht (THB)",
      idealDuration: "4 – 6 Days",
      travelStyle: ["Luxury Villas", "Wellness Spas", "Island Cruising", "Romance"]
    },
    longDescriptionHTML: `
<h2>Koh Samui – Tropical Luxury & Coconut Groves</h2>
<p>Discover Koh Samui, an upscale island sanctuary celebrated for its private beachfront villas, lush coconut-fringed shores, and tranquil turquoise waters.</p>
<p>Experience yacht excursions to Ang Thong Marine Park, visit the iconic Big Buddha temple, stroll through Fisherman’s Village, and indulge in world-class holistic spa treatments overlooking the ocean.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon, with friends or as a group, Koh Samui offers an unforgettable blend of serenity, romance, and tropical luxury.</p>
<p><strong>Luxury Villas • Wellness Spas • Island Cruising • Romance • Beaches • Serenity</strong></p>
<p>Koh Samui – Unwind in an exclusive tropical paradise.</p>
    `,

    highlights: [
      "Ang Thong National Marine Park yacht expedition and sea kayaking",
      "Big Buddha Temple (Wat Phra Yai) and Fisherman’s Village night market",
      "Private sunset cocktail cruises around tranquil island coves",
      "Holistic traditional Thai spa treatments overlooking the ocean"
    ],

    packageSlugs: []
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    region: "Northern Thailand",
    tagline: "Misty Mountains & Ancient Lanna Heritage",
    shortDescription: "Tranquil mountain valleys, sacred ancient temples, ethical elephant sanctuaries, and artisan crafts.",
    description: "Tranquil mountain valleys, sacred ancient temples, ethical elephant rescue sanctuaries, and rich Northern Thai artisan traditions.",
    heroImage: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1512553353614-82a7370096dc?auto=format&fit=crop&w=800&q=80",

    quickFacts: {
      bestTime: "Oct – Feb",
      currency: "Thai Baht (THB)",
      idealDuration: "3 – 5 Days",
      travelStyle: ["Culture & Heritage", "Mountain Sanctuaries", "Eco-Travel", "Cooking"]
    },
    longDescriptionHTML: `
<h2>Chiang Mai – Culture, Nature & Mountain Charm</h2>
<p>Discover Chiang Mai, a beautiful destination in northern Thailand known for its ancient temples, lush mountains, peaceful surroundings and rich local culture.</p>
<p>Explore magnificent temples, visit vibrant night markets, experience traditional Thai culture and enjoy the natural beauty of the surrounding mountains and countryside.</p>
<p>Whether you're travelling with family, as a couple, on honeymoon or with friends, Chiang Mai offers a relaxing escape filled with culture, nature and memorable experiences.</p>
<p><strong>Temples • Mountains • Culture • Night Markets • Nature • Local Experiences</strong></p>
<p>Chiang Mai – Discover the peaceful and beautiful side of Thailand.</p>
    `,

    highlights: [
      "Ethical elephant sanctuary interactions and jungle river bathing",
      "Wat Phra That Doi Suthep mountaintop temple overlooking the valley",
      "Old City historic moat temples (Wat Chedi Luang, Wat Phra Singh)",
      "Vibrant Sunday Walking Street night market with local handicrafts"
    ],

    packageSlugs: []
  }
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.DESTINATIONS = DESTINATIONS;
}

