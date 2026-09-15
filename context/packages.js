/**
 * ThaiPackages.com - Package Catalog Context
 * Single source of truth for all Thailand travel packages, baseline starting prices,
 * detailed day-by-day itineraries, inclusions, exclusions, and hotel options.
 * Curated to highlight our two primary signature offerings:
 * 1. Bangkok & Pattaya Super Saver (Signature Flagship 5N/6D)
 * 2. Phuket & Krabi Romantic Island Escape (Signature 6N/7D)
 */

export const PACKAGES = [
  {
    slug: "bangkok-pattaya-classic-vacation",
    title: "Bangkok & Pattaya Super Saver",
    destination: "Bangkok & Pattaya",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: {
      days: 6,
      nights: 5
    },
    durationDays: 6,
    durationNights: 5,
    startingPriceINR: 19900,
    startingPriceUSD: 290,
    startingPriceTHB: 10500,
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Our signature 5N/6D holiday with 3N Pattaya Sea-View Condo + 2N Bangkok Luxury Condo, private kitchen, 100% private AC transfers & Telugu-speaking guides.",
    description: "Our signature 5N/6D holiday featuring 3 Nights in Pattaya in a Premium Sea-View Condo and 2 Nights in Bangkok in a City-Center Luxury Condo. Includes private kitchen/food options, 100% private AC vehicle transfers, Alcazar VIP show, Coral Island speedboat tour, Chao Phraya luxury dinner cruise, and 100% Telugu-speaking guide options.",

    highlights: [
      "3 Nights in Pattaya in a Premium Sea-View Condo (with Private Kitchen)",
      "2 Nights in Bangkok in a City-Center Luxury Condo",
      "🗣️ 100% Telugu-Speaking Guides & Dedicated Local Coordinators Available",
      "🎉 25% Discount on Group Packages (4+ Travelers)",
      "Food Flexibility: Option A (Self-cook with groceries) or Option B (Daily fresh Indian meals)",
      "Alcazar Cabaret Show (VIP Seating)",
      "Coral Island (Koh Larn) Speedboat Tour with Indian Lunch",
      "Pattaya City Highlights (Big Buddha & coastal viewpoints)",
      "Chao Phraya Princess Luxury Dinner Cruise with live music",
      "100% Private door-to-door AC Vehicle Transfers (Zero shared buses)"
    ],

    inclusions: [
      "3 Nights in Premium Sea-View Condo in Pattaya",
      "2 Nights in City-Center Luxury Condo in Bangkok",
      "Kitchen access in condo with pre-stocked fridge/groceries (Option A) or Indian partner meals (Option B)",
      "Coral Island speedboat excursion with Indian lunch",
      "Alcazar Cabaret Show VIP admission tickets",
      "Pattaya Big Buddha and scenic coastal viewpoints tour",
      "Chao Phraya Princess Luxury Dinner Cruise ticket with international & Indian buffet",
      "100% Private AC vehicle transfers: Airport -> Pattaya -> Bangkok -> Airport",
      "Dedicated 24/7 WhatsApp concierge support"
    ],

    exclusions: [
      "International flights (assistance provided upon request)",
      "Thailand Visa fees (free/on-arrival per government rules)",
      "Optional motorized watersports (Parasailing, Jet Ski)",
      "Personal tipping and personal expenses"
    ],

    hotelOptions: [
      { tier: "Signature Premium Condo (Flagship - Highly Recommended)", pattaya: "The Base Central / Riviera Ocean Drive Sea-View (with Private Kitchen)", bangkok: "Ideo Mobi / Rhythm Sukhumvit Luxury Condo" },
      { tier: "Standard 3★ / 4★ Hotel Alternative", pattaya: "Centara Pattaya / Nova Platinum 4★", bangkok: "Amari Bangkok / Berkeley Hotel Pratunam 4★" }
    ],

    diningOptions: [
      { plan: "Self-Cook / Home Comfort Plan (Flagship - Highly Recommended)", details: "Condo kitchen pre-stocked with Indian groceries, milk, bread, butter, spices, rice, tea, and cookware. Ideal for families and pure vegetarians." },
      { plan: "Indian Restaurant Plan (Alternative)", details: "Daily fresh pre-arranged lunches & dinners at verified partner Indian restaurants." }
    ],

    transferOptions: [
      { type: "100% Private Transfers (Exclusive Standard)", details: "Dedicated private AC vehicles for airport pickups, inter-city transfers (Bangkok <-> Pattaya), and airport drop. Zero shared buses or delays." }
    ],

    travelNotes: [
      "Signature Condo experience: Spacious private condo living with functional kitchen, pool & gym access.",
      "100% Private transfers: Dedicated AC vehicle exclusively for your party with direct door-to-door pickups.",
      "Indian Food Choice: Select between pre-stocked kitchen groceries (Option A) or daily fresh partner restaurant meals (Option B)."
    ],
    importantNotes: [
      "Signature Condo experience: Spacious private condo living with functional kitchen, pool & gym access.",
      "100% Private transfers: Dedicated AC vehicle exclusively for your party with direct door-to-door pickups.",
      "Indian Food Choice: Select between pre-stocked kitchen groceries (Option A) or daily fresh partner restaurant meals (Option B)."
    ],

    itinerary: [
      {
        day: 1,
        title: "Suvarnabhumi Airport Private Pickup -> Transfer to Pattaya Condo",
        summary: "Meet your private chauffeur directly at Bangkok Suvarnabhumi Airport. Enjoy a comfortable private AC drive to Pattaya. Check into your Premium Sea-View Condo with kitchen amenities. Evening at leisure to stroll Pattaya Beach or relax."
      },
      {
        day: 2,
        title: "Coral Island Speedboat Tour with Indian Lunch & Alcazar VIP Show",
        summary: "Morning speedboat excursion to Coral Island (Koh Larn) with crystal-clear waters and white sands, followed by a delicious Indian lunch. In the evening, enjoy VIP seating at the world-famous Alcazar Cabaret Show."
      },
      {
        day: 3,
        title: "Pattaya City Highlights (Big Buddha & Viewpoints) -> Night Markets",
        summary: "Visit the towering Big Buddha (Wat Phra Yai) and panoramic coastal viewpoints overlooking Pattaya Bay. Spend the afternoon exploring local cafes or relaxing in your condo pool, followed by vibrant evening night markets."
      },
      {
        day: 4,
        title: "Private Transfer to Bangkok -> Luxury City-Center Condo Check-in",
        summary: "Private door-to-door transfer from Pattaya to Bangkok. Check into your City-Center Luxury Condo. Afternoon at leisure for street shopping, visiting Platinum Fashion Mall, or exploring downtown Sukhumvit."
      },
      {
        day: 5,
        title: "Shopping at Pratunam/MBK -> Chao Phraya Princess Dinner Cruise",
        summary: "Enjoy shopping at Pratunam, MBK Center, or ICONSIAM. In the evening, board the Chao Phraya Princess Luxury Dinner Cruise with live music, breathtaking illuminated views of Wat Arun and the Grand Palace, and a lavish buffet."
      },
      {
        day: 6,
        title: "Relaxed Morning -> Private Transfer to Bangkok Airport",
        summary: "Enjoy a relaxed breakfast in your condo or partner cafe. Your private AC chauffeur will transfer you directly to Suvarnabhumi or Don Mueang Airport for your return flight home."
      }
    ]
  },

  {
    slug: "phuket-krabi-romantic-escape",
    title: "Phuket & Krabi Romantic Island Escape",
    destination: "Phuket & Krabi",
    destinationSlug: "phuket",
    category: "Honeymoon & Romantic",
    duration: {
      days: 7,
      nights: 6
    },
    durationDays: 7,
    durationNights: 6,
    startingPriceINR: 29999,
    startingPriceUSD: 450,
    startingPriceTHB: 16200,
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    shortDescription: "An idyllic 7-day Andaman holiday pairing lively Phuket beaches with Krabi's dramatic limestone karsts, 100% private transfers and island cruises.",
    description: "An idyllic 7-day Andaman holiday pairing the lively beaches of Phuket with the dramatic limestone karsts and tranquil luxury of Krabi.",
    
    highlights: [
      "3 Nights accommodation in Phuket (4★/5★ Beachfront Resort)",
      "3 Nights accommodation in Krabi (4★/5★ Cliffside Resort)",
      "Full-day Phi Phi Islands & Maya Bay Speedboat Tour with Buffet Lunch",
      "Krabi 4 Islands Scenic Sunset Boat Tour with Snorkeling Gear",
      "100% Private air-conditioned vehicle transfers between all airports and hotels",
      "Daily buffet breakfast at resorts"
    ],

    inclusions: [
      "6 Nights accommodation in vetted 4-star / 5-star properties",
      "Daily buffet breakfast at hotels",
      "Full-day Phi Phi Islands & Maya Bay tour by Speedboat with Lunch",
      "Krabi 4 Islands Tour by Longtail Boat with Snorkeling Gear & Life Jackets",
      "Phuket Airport Pickup and Krabi Airport Drop in Private AC Vehicle",
      "Private inter-city transfer between Phuket and Krabi",
      "National Marine Park environmental entry permits",
      "Dedicated on-trip WhatsApp support"
    ],

    exclusions: [
      "International and domestic flights (available upon request)",
      "Thailand Visa fees (Visa on arrival / e-Visa if applicable)",
      "Meals not mentioned in the itinerary",
      "Optional motorized watersports (Parasailing, Jet Ski)",
      "Personal tipping and travel insurance"
    ],

    hotelOptions: [
      { tier: "4★ Beach Resort", phuket: "Diamond Cliff Resort / Patong Beach", krabi: "Centara Ao Nang Beach Resort" },
      { tier: "5★ Luxury Pool Villa", phuket: "The Shore at Katathani / Sri Panwa", krabi: "Rayavadee Resort Railay" }
    ],

    travelNotes: [
      "Optimal weather season: November through April for calm seas and sunny skies.",
      "Resort rooms can be customized with king beds, private balconies, or plunge pool upgrades.",
      "Vegetarian, vegan, and Indian meal preferences can be accommodated on day tours with prior notice."
    ],
    importantNotes: [
      "Optimal weather season: November through April for calm seas and sunny skies.",
      "Resort rooms can be customized with king beds, private balconies, or plunge pool upgrades.",
      "Vegetarian, vegan, and Indian meal preferences can be accommodated on day tours with prior notice."
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket & Welcome to the Andaman",
        summary: "Arrive at Phuket International Airport (HKT). Meet your private chauffeur and transfer to your oceanfront resort. Enjoy free time relaxing by the resort pool or strolling along the beach."
      },
      {
        day: 2,
        title: "Phi Phi Islands & Maya Bay Speedboat Excursion",
        summary: "Morning speedboat cruise across turquoise waters to Phi Phi Don and Phi Phi Leh. Swim at Maya Bay, snorkel in Pileh Lagoon, visit Monkey Beach, and enjoy an island buffet lunch."
      },
      {
        day: 3,
        title: "Phuket Sightseeing & Big Buddha Viewpoint",
        summary: "Explore Sino-Portuguese architecture in Old Phuket Town, visit the revered Wat Chalong temple, and admire panoramic views of Chalong Bay from the 45-meter Big Buddha."
      },
      {
        day: 4,
        title: "Private Scenic Transfer: Phuket to Krabi",
        summary: "After breakfast, take a comfortable private drive through southern Thailand’s limestone karst landscapes into Krabi. Check into your resort in Ao Nang. Evening at leisure."
      },
      {
        day: 5,
        title: "Krabi 4 Islands Scenic Boat Tour",
        summary: "Cruise to Koh Gai (Chicken Island), Koh Tup, Koh Mor, and Phra Nang Cave Beach. Snorkel among coral reefs and relax on soft white sands with a picnic lunch."
      },
      {
        day: 6,
        title: "Rainforest Hot Springs & Relaxation Day",
        summary: "Spend the morning visiting Krabi’s natural thermal Hot Springs and Emerald Pool in the rainforest, followed by an afternoon of leisure or resort spa treatments."
      },
      {
        day: 7,
        title: "Farewell Thailand & Airport Departure",
        summary: "Enjoy breakfast and pack your bags. Private transfer to Krabi International Airport (KBV) for your onward flight."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.PACKAGES = PACKAGES;
}
