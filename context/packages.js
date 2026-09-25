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
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "3 Nights in Pattaya in a Premium Sea-View Condo (with Private Kitchen)",
      "2 Nights in Bangkok in a City-Center Luxury Condo",
      "🗣️ 100% Telugu-Speaking Guides & Dedicated Local Coordinators Available",
      "💰 25% Discount on Group Packages (4+ Travelers)",
      "Food Flexibility: Option A (Self-cook with groceries) or Option B (Daily fresh Indian meals)",
      "Alcazar Cabaret Show (VIP Seating)",
      "Coral Island (Koh Larn) Speedboat Tour with Indian Lunch",
      "Pattaya City Highlights (Big Buddha & coastal viewpoints)",
      "Chao Phraya Princess Luxury Dinner Cruise with live music",
      "100% Private door-to-door AC Vehicle Transfers (Zero shared buses)"
    ],

    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

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
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in and relaxation; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Pattaya", summary: "Breakfast at the hotel; Coral Island (Koh Larn) tour by speedboat; Enjoy the beach and optional water activities; Return to Pattaya; Evening at leisure; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast and hotel check-out; Transfer to Bangkok; Bangkok city sightseeing; Visit Wat Traimit (Golden Buddha); Hotel check-in; Evening free for shopping and leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Bangkok Sightseeing", summary: "Breakfast at the hotel; Visit Grand Palace and Wat Pho; Chao Phraya River experience; Shopping at popular malls/markets; Evening at leisure; Overnight stay in Bangkok." },
      { day: 5, title: "Bangkok Departure", summary: "Breakfast and hotel check-out; Free time depending on flight schedule; Transfer to Bangkok Airport; Departure with wonderful memories of Thailand." }
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
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "3 Nights accommodation in Phuket (4★/5★ Beachfront Resort)",
      "3 Nights accommodation in Krabi (4★/5★ Cliffside Resort)",
      "Full-day Phi Phi Islands & Maya Bay Speedboat Tour with Buffet Lunch",
      "Krabi 4 Islands Scenic Sunset Boat Tour with Snorkeling Gear",
      "100% Private air-conditioned vehicle transfers between all airports and hotels",
      "Daily buffet breakfast at resorts"
    ],

    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

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
      { day: 1, title: "Phuket Arrival", summary: "Arrival at Phuket Airport; Private transfer to hotel; Hotel check-in and relaxation; Evening at leisure; Overnight stay in Phuket." },
      { day: 2, title: "Phi Phi Island Tour", summary: "Breakfast at hotel; Full-day Phi Phi Island tour by speedboat; Enjoy beautiful beaches, crystal-clear waters and snorkeling; Return to Phuket; Romantic evening at leisure; Overnight stay in Phuket." },
      { day: 3, title: "Phuket Sightseeing", summary: "Breakfast at hotel; Visit Wat Chalong; Phuket Old Town; Karon Viewpoint; Visit Promthep Cape for a beautiful sunset; Overnight stay in Phuket." },
      { day: 4, title: "Phuket → Krabi", summary: "Breakfast and hotel check-out; Private transfer to Krabi; Hotel check-in; Relax at the beach; Evening at leisure; Overnight stay in Krabi." },
      { day: 5, title: "Four Islands Tour", summary: "Breakfast at hotel; Full-day Four Islands tour; Visit scenic islands and beaches; Enjoy swimming, snorkeling and beach time; Return to Krabi; Romantic sunset evening; Overnight stay in Krabi." },
      { day: 6, title: "Krabi Leisure & Romance", summary: "Breakfast at hotel; Visit Railay Beach and Phra Nang Beach; Enjoy a relaxed afternoon; Optional couple spa/romantic dinner; Overnight stay in Krabi." },
      { day: 7, title: "Krabi Departure", summary: "Breakfast and hotel check-out; Free time depending on flight schedule; Transfer to Krabi Airport; Departure with beautiful memories of Thailand." }
    ]
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
    startingPriceINR: 24500,
    startingPriceUSD: 310,
    startingPriceTHB: 11500,
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    shortDescription: "The ultimate kid-friendly Thailand family tour package featuring Safari World, Sea Life Ocean World, and spacious family condo stays.",
    description: "Our top-rated 5-day Thailand Family Tour Package ensures a stress-free holiday for parents and endless fun for kids. Experience the best of Bangkok and Pattaya with a family-friendly itinerary featuring a speedboat tour to Coral Island, underwater marvels at SEA LIFE Bangkok Ocean World, celebrity encounters at Madame Tussauds, and a full day of excitement at Safari World.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Full day at Safari World and Marine Park with Indian Lunch",
      "Sea Life Bangkok Ocean World entry tickets",
      "Spacious Family Condo with Kitchen Access",
      "Private AC vehicles for all transfers (child seats on request)"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "4 Nights Family-Sized Accommodation",
      "Safari World & Marine Park tickets with transfers",
      "Sea Life Bangkok tickets",
      "Daily breakfast or kitchen provisions",
      "🚐 100% Private AC Vehicle Transfers"
    ],
    exclusions: [
      "International Flights & Visa Fees",
      "Personal expenses & tipping"
    ],
    hotelOptions: [
      { tier: "Premium Family Condo", pattaya: "The Base Central", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "Family Comfort", details: "Pre-stocked kitchen for self-cooking (milk, bread, etc.) plus optional Indian restaurant meals." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "100% Private AC vehicle for a relaxed family pace." }
    ],
    travelNotes: ["Perfect for families with toddlers or teens."],
    importantNotes: ["Perfect for families with toddlers or teens."],
    itinerary: [
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in and relaxation; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Beach Fun", summary: "Breakfast at hotel; Coral Island (Koh Larn) tour by speedboat; Enjoy the beach, swimming and optional water activities; Return to Pattaya; Evening at leisure; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast and hotel check-out; Transfer to Bangkok; Visit SEA LIFE Bangkok Ocean World; Visit Madame Tussauds Bangkok; Hotel check-in; Evening shopping and leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Safari World & Bangkok Family Fun", summary: "Breakfast at hotel; Full-day visit to Safari World Bangkok; Enjoy the Safari Park and exciting animal shows; Return to Bangkok; Evening at leisure; Overnight stay in Bangkok." },
      { day: 5, title: "Bangkok Departure", summary: "Breakfast and hotel check-out; Free time depending on flight schedule; Transfer to Bangkok Airport; Return home with wonderful family memories of Thailand." }
    ]
  },
  {
    slug: "thailand-honeymoon-packages",
    title: "Phuket • Krabi • Bangkok – Honeymoon Special",
    destination: "Phuket & Krabi",
    destinationSlug: "phuket",
    category: "Honeymoon & Romantic",
    duration: { days: 6, nights: 5 },
    durationDays: 6,
    durationNights: 5,
    startingPriceINR: 34900,
    startingPriceUSD: 420,
    startingPriceTHB: 15500,
    heroImage: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    shortDescription: "A luxurious and romantic Thailand Honeymoon Package with private pool villas, sunset dinner cruises, and couple's spa sessions.",
    description: "Celebrate your love with our premium 6-day honeymoon package. Experience a romantic island retreat featuring a private beachfront stay, a full-day Phi Phi Island speedboat tour, a scenic Krabi Four Islands excursion, and an optional romantic dinner cruise in Bangkok to end your trip with beautiful memories.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Romantic Private Pool Villa accommodations",
      "Exclusive Sunset Dinner Cruise in Phuket",
      "Phi Phi Islands premium speedboat tour",
      "Couple's Spa and Massage Session"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "5 Nights Luxury Accommodation (Pool Villa option)",
      "Sunset Dinner Cruise with transfers",
      "Phi Phi Island Tour",
      "Welcome Honeymoon bed decoration & fruit basket",
      "100% Private Transfers"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "Personal expenses"
    ],
    hotelOptions: [
      { tier: "Honeymoon Luxury", phuket: "The Shore at Katathani", krabi: "Rayavadee Resort" }
    ],
    diningOptions: [
      { plan: "Romantic Dining", details: "Daily breakfast and one complimentary private beachfront candlelight dinner." }
    ],
    transferOptions: [
      { type: "Luxury Private Transfers", details: "VIP private AC car for all transfers." }
    ],
    travelNotes: ["Designed for maximum privacy and romance."],
    importantNotes: ["Designed for maximum privacy and romance."],
    itinerary: [
      { day: 1, title: "Phuket Arrival", summary: "Arrival at Phuket Airport; Private transfer to hotel; Hotel check-in and relaxation; Romantic evening at leisure; Overnight stay in Phuket." },
      { day: 2, title: "Phi Phi Island Tour", summary: "Breakfast at hotel; Full-day Phi Phi Island tour by speedboat; Enjoy beautiful beaches, crystal-clear waters and snorkeling; Return to Phuket; Romantic sunset evening; Overnight stay in Phuket." },
      { day: 3, title: "Phuket → Krabi", summary: "Breakfast and hotel check-out; Transfer to Krabi; Hotel check-in; Relax and enjoy the resort; Evening at leisure; Overnight stay in Krabi." },
      { day: 4, title: "Four Islands Tour", summary: "Breakfast at hotel; Full-day Four Islands tour; Visit beautiful beaches and islands; Enjoy swimming, snorkeling and beach time; Romantic evening at leisure; Overnight stay in Krabi." },
      { day: 5, title: "Krabi → Bangkok", summary: "Breakfast and hotel check-out; Transfer to Krabi Airport; Flight to Bangkok; Hotel check-in; Evening shopping and leisure; Optional romantic dinner cruise; Overnight stay in Bangkok." },
      { day: 6, title: "Bangkok Departure", summary: "Breakfast and hotel check-out; Free time depending on flight schedule; Transfer to Bangkok Airport; Departure with beautiful memories of your honeymoon in Thailand." }
    ]
  },
  {
    slug: "bangkok-tour-packages",
    cardTitle: "Bangkok Tour Packages",
    title: "Bangkok Tour – 4 Days / 3 Nights",
    destination: "Bangkok",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 4, nights: 3 },
    durationDays: 4,
    durationNights: 3,
    startingPriceINR: 14900,
    startingPriceUSD: 180,
    startingPriceTHB: 6800,
    heroImage: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Experience the vibrant heart of Thailand with our Bangkok Tour Packages, featuring majestic temples, endless shopping, and luxury dinner cruises.",
    description: "Dive into the bustling metropolis with our dedicated Bangkok Tour Packages. Perfect for a quick city break, this itinerary covers the cultural majesty of the Grand Palace and Wat Arun, the shopping paradise of Pratunam and MBK, and the dazzling nightlife from premier skybars.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Guided tour of the Grand Palace and Wat Arun",
      "Chao Phraya Princess Luxury Dinner Cruise",
      "Dedicated shopping day at Platinum Mall & MBK",
      "City-Center Luxury Condo stay"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "3 Nights City-Center Condo Accommodation",
      "Grand Palace & Temples Guided Tour",
      "Dinner Cruise Tickets",
      "Airport Transfers in Private AC Vehicle"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "Lunch & Personal Shopping expenses"
    ],
    hotelOptions: [
      { tier: "Premium City Condo", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "City Explorer", details: "Pre-stocked kitchen for breakfast, leaving you free to explore Bangkok's incredible street food and cafes." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Private airport pickups and drop-offs." }
    ],
    travelNotes: ["Ideal for a long weekend city break."],
    importantNotes: ["Ideal for a long weekend city break."],
    itinerary: [
        { day: 1, title: "Bangkok Arrival & City Evening", summary: "Arrival at Bangkok Airport; Private transfer to hotel; Hotel check-in and relaxation; Evening visit to a local night market; Overnight stay in Bangkok." },
        { day: 2, title: "Bangkok City & Cultural Tour", summary: "Breakfast at hotel; Visit **Grand Palace & Wat Pho**; Visit **Wat Arun**; Chao Phraya River experience; Evening shopping at popular markets/malls; Overnight stay in Bangkok." },
        { day: 3, title: "Safari World & Shopping", summary: "Breakfast at hotel; Full-day visit to **Safari World Bangkok**; Enjoy Safari Park and animal shows; Return to Bangkok; Evening shopping and leisure; Overnight stay in Bangkok." },
        { day: 4, title: "Leisure & Departure", summary: "Breakfast and hotel check-out; Free time for shopping or leisure, depending on flight timing; Transfer to Bangkok Airport; **Departure with wonderful memories of Bangkok.**" }
      ]
    },
  {
    slug: "pattaya-tour-packages",
    cardTitle: "Pattaya Tour Packages",
    title: "Pattaya Tour – 4 Days / 3 Nights",
    destination: "Pattaya",
    destinationSlug: "pattaya",
    category: "Family & City Breaks",
    duration: { days: 4, nights: 3 },
    durationDays: 4,
    durationNights: 3,
    startingPriceINR: 15900,
    startingPriceUSD: 190,
    startingPriceTHB: 7200,
    heroImage: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Thrilling Pattaya Tour Packages packed with Coral Island water sports, Alcazar VIP shows, and premium sea-view condo stays.",
    description: "Discover the entertainment capital with our action-packed Pattaya Tour Packages. Enjoy a premium sea-view condo, thrilling water sports at Coral Island, the world-famous Alcazar Cabaret Show, and visits to the awe-inspiring Sanctuary of Truth.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Premium Sea-View Condo Accommodation",
      "Coral Island (Koh Larn) Speedboat Tour with Lunch",
      "Alcazar Cabaret Show VIP Seating",
      "Sanctuary of Truth Guided Visit"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "3 Nights Sea-View Condo Accommodation",
      "Coral Island Tour by Speedboat",
      "Alcazar Show Tickets",
      "Sanctuary of Truth Entry",
      "Private AC Airport Transfers"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "Optional Water Sports (Parasailing, Jet Ski)"
    ],
    hotelOptions: [
      { tier: "Premium Sea-View Condo", pattaya: "The Base Central / Riviera Ocean Drive" }
    ],
    diningOptions: [
      { plan: "Condo Convenience", details: "Pre-stocked kitchen for easy breakfasts and snacks." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Direct private transfers from Bangkok airport to Pattaya." }
    ],
    travelNotes: ["Perfect for friends groups and entertainment seekers."],
    importantNotes: ["Perfect for friends groups and entertainment seekers."],
    itinerary: [
        { day: 1, title: "Pattaya Arrival & Nightlife", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in and relaxation; Evening at leisure; Experience Pattaya’s vibrant nightlife, including **Walking Street, live music, bars and entertainment venues**; Overnight stay in Pattaya." },
        { day: 2, title: "Coral Island & Pattaya Nightlife", summary: "Breakfast at hotel; Coral Island (Koh Larn) tour by speedboat; Enjoy beaches, swimming and optional water activities; Return to Pattaya; Evening free for dinner and nightlife; Explore **Walking Street and Pattaya’s evening entertainment**; Overnight stay in Pattaya." },
        { day: 3, title: "Pattaya Sightseeing & Evening Entertainment", summary: "Breakfast at hotel; Visit **Sanctuary of Truth**; Visit Pattaya Viewpoint; Shopping and leisure time; Evening at leisure or enjoy a **cabaret/entertainment show**; Optional nightlife experience; Overnight stay in Pattaya." },
        { day: 4, title: "Leisure & Departure", summary: "Breakfast and hotel check-out; Free time for shopping or relaxation; Transfer to Bangkok Airport; **Departure with unforgettable Pattaya memories.**" }
      ]
    },
  {
    slug: "thailand-vietnam-tour-packages",
    cardTitle: "Thailand & Vietnam Tour Packages",
    title: "Thailand & Vietnam Tour Packages",
    tag: "Twin Country Special",
    destination: "Thailand & Vietnam",
    destinationSlug: "bangkok",
    category: "Twin Country Special",
    duration: { days: 7, nights: 6 },
    durationDays: 7,
    durationNights: 6,
    startingPriceINR: 34999,
    startingPriceUSD: 420,
    startingPriceTHB: 15500,
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Experience the ultimate twin-country journey across Thailand and Vietnam, featuring Bangkok, Pattaya nightlife, and tropical Phu Quoc island.",
    description: "Experience the best of two iconic Southeast Asian destinations in one seamless journey. Explore Bangkok's vibrant city culture and Pattaya's famous nightlife before flying to the pristine beaches, island tours, and breathtaking cable car experiences of Phu Quoc, Vietnam.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",
      "3 Nights in Thailand (Pattaya & Bangkok)",
      "3 Nights in Phu Quoc, Vietnam",
      "Coral Island (Koh Larn) Speedboat Excursion",
      "World-famous Hon Thom Cable Car Experience in Phu Quoc",
      "Full-Day Phu Quoc Island & Snorkeling Tour"
    ],
    hotelOptions: [
      { tier: "Selected 4★ Beach Resorts & City Hotels", pattaya: "Centara Pattaya", bangkok: "Amari Bangkok", phuquoc: "Novotel Phu Quoc Resort" }
    ],
    diningOptions: [
      { plan: "Breakfast Included", details: "Daily buffet breakfast at hotels/resorts with Indian and vegetarian dining options accessible." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Private AC vehicle transfers for all airport pickups, inter-city, and scheduled tours." }
    ],
    travelNotes: [
      "Twin country travel: Valid passport and Vietnam Visa required. Flight between Bangkok and Phu Quoc is typically under 2 hours."
    ],
    importantNotes: [
      "Twin country travel: Valid passport and Vietnam Visa required. Flight between Bangkok and Phu Quoc is typically under 2 hours."
    ],
    itinerary: [
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in and relaxation; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Pattaya", summary: "Breakfast at hotel; Coral Island (Koh Larn) tour by speedboat; Beach activities and optional water sports; Return to Pattaya; Evening at leisure / nightlife; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast and hotel check-out; Pattaya sightseeing; Transfer to Bangkok; Hotel check-in; Evening shopping and leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Bangkok → Phu Quoc", summary: "Breakfast and hotel check-out; Transfer to Bangkok Airport; Flight to Phu Quoc, Vietnam; Hotel check-in; Relax and enjoy the beach; Evening at leisure; Overnight stay in Phu Quoc." },
      { day: 5, title: "Phu Quoc Island Tour", summary: "Breakfast at hotel; Full-day island and beach experience; Enjoy snorkeling, swimming and scenic island views; Visit selected attractions; Return to hotel; Evening at leisure; Overnight stay in Phu Quoc." },
      { day: 6, title: "Phu Quoc Cable Car & Leisure", summary: "Breakfast at hotel; Experience the famous **Hon Thom Cable Car**; Enjoy beach time and island views; Explore local markets / leisure; Sunset by the beach; Overnight stay in Phu Quoc." },
      { day: 7, title: "Phu Quoc Departure", summary: "Breakfast and hotel check-out; Free time depending on flight schedule; Transfer to Phu Quoc Airport; **Departure with wonderful memories of Thailand & Vietnam.**" }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.PACKAGES = PACKAGES;
}
