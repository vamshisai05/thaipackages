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

    highlights: [
      "Ethical elephant sanctuary interactions and jungle river bathing",
      "Wat Phra That Doi Suthep mountaintop temple overlooking the valley",
      "Old City historic moat temples (Wat Chedi Luang, Wat Phra Singh)",
      "Vibrant Sunday Walking Street night market with local handicrafts"
    ],

    packageSlugs: []
  }$huahin
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.DESTINATIONS = DESTINATIONS;
}

