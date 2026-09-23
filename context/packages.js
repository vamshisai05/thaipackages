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
      days: 5,
      nights: 4
    },
    durationDays: 5,
    durationNights: 4,
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
      "🎉 25% Discount on Group Packages (4+ Travelers)",
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
  }

  ,{
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
      "100% Private AC Vehicle Transfers"
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
    title: "Bangkok Tour Packages",
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
      { day: 1, title: "Arrival -> City-Center Condo", summary: "Private transfer from the airport to your luxury condo in the heart of Sukhumvit." },
      { day: 2, title: "Grand Palace, Temples & Dinner Cruise", summary: "Morning guided tour of the Grand Palace and Wat Arun. Evening Chao Phraya River dinner cruise." },
      { day: 3, title: "Ultimate Shopping Day", summary: "A full day dedicated to shopping at Pratunam, Platinum Fashion Mall, and MBK Center." },
      { day: 4, title: "Departure", summary: "Morning coffee at a local cafe before your private transfer to the airport." }
    ]
  },
  {
    slug: "pattaya-tour-packages",
    title: "Pattaya Tour Packages",
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
      { day: 1, title: "Arrival -> Pattaya Sea-View Condo", summary: "Private transfer from Bangkok airport directly to your Pattaya condo. Evening at leisure." },
      { day: 2, title: "Coral Island & Alcazar Show", summary: "Morning speedboat tour to Coral Island for water sports and lunch. Evening VIP seats at the Alcazar Show." },
      { day: 3, title: "Sanctuary of Truth & Night Markets", summary: "Visit the stunning wooden Sanctuary of Truth. Spend the evening exploring Pattaya's vibrant night markets." },
      { day: 4, title: "Departure", summary: "Private transfer back to the airport." }
    ]
  },
  {
    slug: "phuket-tour-packages",
    title: "Phuket Tour Packages",
    destination: "Phuket",
    destinationSlug: "phuket",
    category: "Beach & Islands",
    duration: { days: 5, nights: 4 },
    durationDays: 5,
    durationNights: 4,
    startingPriceINR: 19900,
    startingPriceUSD: 240,
    startingPriceTHB: 9200,
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Explore Thailand's largest island with our Phuket Tour Packages, featuring Patong beach access, Phi Phi island tours, and Big Buddha views.",
    description: "Our comprehensive Phuket Tour Packages offer the ultimate tropical getaway. Enjoy luxurious beachfront resorts near Patong, embark on full-day speedboat tours to the Phi Phi Islands and James Bond Island, and explore the rich heritage of Old Phuket Town.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "4-Star/5-Star Beachfront Resort Accommodation",
      "Phi Phi Islands & Maya Bay Speedboat Tour",
      "James Bond Island & Phang Nga Bay Tour",
      "Phuket City Tour (Big Buddha & Old Town)"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "4 Nights Resort Accommodation",
      "Phi Phi Island Tour with Lunch",
      "James Bond Island Tour with Lunch",
      "Private AC Airport Transfers"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "National Park Fees (if applicable)"
    ],
    hotelOptions: [
      { tier: "Beach Resort", phuket: "Diamond Cliff Resort / Patong Beach Hotel" }
    ],
    diningOptions: [
      { plan: "Resort Breakfast", details: "Daily buffet breakfast at the resort." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Private airport pickups and drop-offs." }
    ],
    travelNotes: ["Great balance of island hopping and relaxation."],
    importantNotes: ["Great balance of island hopping and relaxation."],
    itinerary: [
      { day: 1, title: "Arrival in Phuket", summary: "Private transfer to your beachfront resort in Patong or Karon. Evening at leisure to explore the beach." },
      { day: 2, title: "Phi Phi Islands Tour", summary: "Full day speedboat excursion to the stunning Phi Phi Islands and Maya Bay." },
      { day: 3, title: "James Bond Island Tour", summary: "Explore the dramatic limestone cliffs of Phang Nga Bay and the famous James Bond Island." },
      { day: 4, title: "Phuket City Tour", summary: "Visit the Big Buddha, Wat Chalong, and wander through the charming streets of Old Phuket Town." },
      { day: 5, title: "Departure", summary: "Enjoy a final morning by the pool before your private transfer to the airport." }
    ]
  },
  {
    slug: "krabi-tour-packages",
    title: "Krabi Tour Packages",
    destination: "Krabi",
    destinationSlug: "krabi",
    category: "Beach & Islands",
    duration: { days: 4, nights: 3 },
    durationDays: 4,
    durationNights: 3,
    startingPriceINR: 21500,
    startingPriceUSD: 260,
    startingPriceTHB: 9800,
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Tranquil Krabi Tour Packages showcasing the iconic 4-Islands tour, Railay Beach, and lush Emerald Pool hot springs.",
    description: "Escape to nature with our Krabi Tour Packages. Famous for its dramatic limestone cliffs and serene atmosphere, Krabi offers the perfect relaxation spot. Enjoy the iconic 4-Islands longtail boat tour, relax on the stunning Railay Beach, and soak in the natural Emerald Pool.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Cliffside or Beachfront Resort Accommodation",
      "Classic Krabi 4-Islands Tour by Longtail Boat",
      "Visit to the stunning Railay Beach",
      "Emerald Pool & Hot Springs Rainforest Tour"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "3 Nights Resort Accommodation",
      "4-Islands Tour with Picnic Lunch",
      "Emerald Pool Tour",
      "Private AC Airport Transfers"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "National Park Fees"
    ],
    hotelOptions: [
      { tier: "Nature Resort", krabi: "Centara Ao Nang Beach Resort / Rayavadee" }
    ],
    diningOptions: [
      { plan: "Resort Breakfast", details: "Daily buffet breakfast at the resort." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Private transfers to and from Krabi airport." }
    ],
    travelNotes: ["Ideal for nature lovers and couples seeking tranquility."],
    importantNotes: ["Ideal for nature lovers and couples seeking tranquility."],
    itinerary: [
      { day: 1, title: "Arrival in Krabi", summary: "Private transfer to your resort in Ao Nang. Watch the sunset over the Andaman Sea." },
      { day: 2, title: "Krabi 4-Islands Tour", summary: "A classic longtail boat tour to Koh Gai (Chicken Island), Koh Tup, Koh Mor, and Phra Nang Cave Beach." },
      { day: 3, title: "Emerald Pool & Hot Springs", summary: "Venture into the rainforest to swim in the natural Emerald Pool and relax in the thermal hot springs." },
      { day: 4, title: "Departure", summary: "Morning relaxation at the resort before your private transfer to the airport." }
    ]
  },
  {
    slug: "bangkok-pattaya-tour-packages",
    title: "Bangkok & Pattaya Tour Packages",
    destination: "Bangkok & Pattaya",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 6, nights: 5 },
    durationDays: 6,
    durationNights: 5,
    startingPriceINR: 19900,
    startingPriceUSD: 240,
    startingPriceTHB: 9200,
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    shortDescription: "The classic twin-city combo. Our Bangkok & Pattaya Tour Packages offer the perfect mix of city shopping and beachside entertainment.",
    description: "Experience the best of both worlds with our Bangkok & Pattaya Tour Packages. This classic twin-city combo offers the vibrant shopping and cultural landmarks of Bangkok paired with the thrilling water sports and nightlife of Pattaya, all with private transfers and luxury condo stays.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Twin-city experience: 3N Pattaya + 2N Bangkok",
      "Coral Island Speedboat Tour & Alcazar Show",
      "Chao Phraya Princess Dinner Cruise",
      "Private AC Inter-city Transfers"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "5 Nights Luxury Condo Accommodation",
      "All major attraction tickets (Alcazar, Coral Island, Dinner Cruise)",
      "100% Private AC Vehicle Transfers",
      "Pre-stocked kitchen options"
    ],
    exclusions: [
      "Flights & Visa Fees",
      "Personal shopping"
    ],
    hotelOptions: [
      { tier: "Premium Condos", pattaya: "The Base Central", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "Flexible", details: "Pre-stocked kitchen groceries or partner Indian restaurant meals." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Seamless door-to-door private transfers." }
    ],
    travelNotes: ["The most popular choice for first-time visitors to Thailand."],
    importantNotes: ["The most popular choice for first-time visitors to Thailand."],
    itinerary: [
      { day: 1, title: "Arrival -> Pattaya", summary: "Private pickup at Bangkok airport and direct transfer to your Pattaya condo." },
      { day: 2, title: "Coral Island & Alcazar Show", summary: "Water sports at Coral Island during the day, VIP Alcazar show in the evening." },
      { day: 3, title: "Pattaya Leisure", summary: "Visit the Big Buddha or relax by the condo pool." },
      { day: 4, title: "Transfer to Bangkok & Dinner Cruise", summary: "Private transfer to Bangkok. Evening luxury dinner cruise on the Chao Phraya River." },
      { day: 5, title: "Bangkok Shopping", summary: "A full day for shopping at MBK, Platinum Mall, and Chatuchak." },
      { day: 6, title: "Departure", summary: "Private transfer to the airport." }
    ]
  },
  {
    slug: "bangkok-phuket-tour-packages",
    title: "Bangkok & Phuket Tour Packages",
    destination: "Bangkok & Phuket",
    destinationSlug: "phuket",
    category: "City & Beach Multi-Destinations",
    duration: { days: 7, nights: 6 },
    durationDays: 7,
    durationNights: 6,
    startingPriceINR: 27500,
    startingPriceUSD: 330,
    startingPriceTHB: 12500,
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    shortDescription: "The ultimate City & Beach combo! Bangkok's urban excitement seamlessly paired with Phuket's tropical island paradise.",
    description: "Combine the energetic pulse of Thailand's capital with the serene beaches of its largest island. Our Bangkok & Phuket Tour Packages provide a seamless, multi-destination experience including city luxury condos, beachfront resorts, and internal flight assistance.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "3 Nights in a Phuket Beachfront Resort + 3 Nights in a Bangkok Luxury Condo",
      "Phi Phi Islands Speedboat Tour",
      "Grand Palace Tour & Chao Phraya Dinner Cruise",
      "Seamless airport transfers for internal flights"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "6 Nights Premium Accommodation",
      "Phi Phi Island Tour",
      "Dinner Cruise in Bangkok",
      "All airport transfers in private AC vehicles"
    ],
    exclusions: [
      "Internal Domestic Flight (BKK to HKT)",
      "International Flights & Visa Fees"
    ],
    hotelOptions: [
      { tier: "Premium Mix", phuket: "Diamond Cliff Resort", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "Mixed Dining", details: "Resort breakfast in Phuket, pre-stocked kitchen in Bangkok." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "All airport-to-hotel transfers are private." }
    ],
    travelNotes: ["Internal flight booking assistance is provided free of charge."],
    importantNotes: ["Internal flight booking assistance is provided free of charge."],
    itinerary: [
      { day: 1, title: "Arrival in Phuket", summary: "Arrive in Phuket, private transfer to your beachfront resort." },
      { day: 2, title: "Phi Phi Islands", summary: "Full day speedboat tour to the stunning Phi Phi Islands." },
      { day: 3, title: "Phuket Leisure", summary: "Relax on the beach or explore Patong." },
      { day: 4, title: "Fly to Bangkok", summary: "Private transfer to Phuket airport, fly to Bangkok, private transfer to your city condo." },
      { day: 5, title: "Bangkok Temples & Dinner Cruise", summary: "Explore the Grand Palace and enjoy an evening dinner cruise." },
      { day: 6, title: "Bangkok Shopping", summary: "Shop at the famous Platinum Mall and MBK." },
      { day: 7, title: "Departure", summary: "Private transfer to the airport." }
    ]
  },
  {
    slug: "thailand-tour-packages-from-hyderabad",
    title: "Thailand Packages from Hyderabad",
    destination: "Bangkok & Pattaya",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 6, nights: 5 },
    durationDays: 6,
    durationNights: 5,
    startingPriceINR: 21900,
    startingPriceUSD: 260,
    startingPriceTHB: 9800,
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Tailored Thailand Tour Packages from Hyderabad featuring Telugu-speaking guides, direct flight convenience (RGIA), and authentic South-Indian food.",
    description: "Designed specifically for travelers flying from Rajiv Gandhi International Airport (RGIA). Our Thailand Packages from Hyderabad offer seamless travel coordination, the option for Telugu-speaking guides, and guaranteed authentic South-Indian meals throughout your stay in Bangkok and Pattaya.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Telugu-Speaking Guides & Dedicated Local Coordinators",
      "Authentic South-Indian Food / Kitchen Access",
      "Optimized for direct flights from Hyderabad (HYD to BKK)",
      "Premium Condo accommodations in Pattaya & Bangkok"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "5 Nights Premium Condo Accommodation",
      "Telugu-Speaking Guide availability",
      "South-Indian Meal Plan or Pre-stocked Kitchen",
      "All major attraction tickets (Alcazar, Coral Island, Dinner Cruise)",
      "100% Private AC Vehicle Transfers"
    ],
    exclusions: [
      "Flights from Hyderabad",
      "Personal expenses"
    ],
    hotelOptions: [
      { tier: "Premium Condos", pattaya: "The Base Central", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "South-Indian Comfort", details: "Guaranteed South-Indian meals at verified partner restaurants or self-cook options." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Seamless private transfers aligning with Hyderabad flight timings." }
    ],
    travelNotes: ["Perfect for families and groups from Telangana and Andhra Pradesh."],
    importantNotes: ["Perfect for families and groups from Telangana and Andhra Pradesh."],
    itinerary: [
      { day: 1, title: "Arrival from HYD -> Pattaya", summary: "Pickup at BKK Airport by your Telugu-speaking coordinator and transfer to Pattaya." },
      { day: 2, title: "Coral Island & Alcazar Show", summary: "Enjoy Coral Island with a South-Indian lunch, followed by the Alcazar show." },
      { day: 3, title: "Pattaya Sightseeing", summary: "Visit the Big Buddha and viewpoints." },
      { day: 4, title: "Transfer to Bangkok & Dinner Cruise", summary: "Transfer to Bangkok. Evening luxury dinner cruise featuring an Indian buffet." },
      { day: 5, title: "Bangkok Shopping", summary: "Guided shopping day at major malls." },
      { day: 6, title: "Departure to HYD", summary: "Private transfer to BKK Airport for your direct flight back to Hyderabad." }
    ]
  },
  {
    slug: "thailand-tour-packages-with-indian-food",
    title: "Thailand Packages for Indian Families & Indian Food",
    destination: "Bangkok & Pattaya",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 6, nights: 5 },
    durationDays: 6,
    durationNights: 5,
    startingPriceINR: 22900,
    startingPriceUSD: 275,
    startingPriceTHB: 10200,
    heroImage: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1549880338-65dd4bc8a4d4?auto=format&fit=crop&w=800&q=80",
    shortDescription: "Zero-hassle Thailand packages guaranteeing 100% pure veg, Jain, and authentic Indian food options with private kitchen access condos.",
    description: "Travel to Thailand without worrying about your dietary preferences. Our specialized packages for Indian families guarantee 100% pure veg, Jain, and authentic Indian meals. Stay in luxury condos equipped with private kitchens pre-stocked with Indian groceries for the ultimate home-away-from-home comfort.",
    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "Guaranteed Pure Veg, Jain, or authentic Indian meals",
      "Luxury Condos with fully equipped private kitchens",
      "Pre-stocked Indian groceries (milk, bread, spices, rice)",
      "Family-friendly pacing with private AC vehicles"
    ],
    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "5 Nights Luxury Condo Accommodation",
      "Comprehensive Indian Meal Plan (or Groceries Option)",
      "All major attraction tickets (Alcazar, Coral Island, Dinner Cruise with Indian Buffet)",
      "100% Private AC Vehicle Transfers"
    ],
    exclusions: [
      "International Flights",
      "Personal expenses"
    ],
    hotelOptions: [
      { tier: "Premium Kitchen Condos", pattaya: "The Base Central", bangkok: "Ideo Mobi Sukhumvit" }
    ],
    diningOptions: [
      { plan: "Pure Veg / Jain / Indian", details: "Strictly vetted partner restaurants and 100% customizable kitchen groceries." }
    ],
    transferOptions: [
      { type: "Private Transfers", details: "Private AC vehicles to accommodate family travel comfortably." }
    ],
    travelNotes: ["The most stress-free option for Indian families with strict dietary requirements."],
    importantNotes: ["The most stress-free option for Indian families with strict dietary requirements."],
    itinerary: [
      { day: 1, title: "Arrival -> Pattaya Condo", summary: "Private transfer to your Pattaya condo. Find your kitchen pre-stocked with Indian groceries." },
      { day: 2, title: "Coral Island with Indian Lunch", summary: "Speedboat tour to Coral Island, featuring a guaranteed pure veg/Indian lunch." },
      { day: 3, title: "Pattaya Leisure & Alcazar Show", summary: "Relax in your condo. Evening VIP seats for the Alcazar Cabaret Show." },
      { day: 4, title: "Transfer to Bangkok & Indian Dinner Cruise", summary: "Transfer to Bangkok. Evening Chao Phraya dinner cruise featuring a dedicated Indian buffet section." },
      { day: 5, title: "Family Shopping Day", summary: "Explore Bangkok's shopping districts with recommendations for nearby Indian restaurants." },
      { day: 6, title: "Departure", summary: "Enjoy a home-cooked breakfast before your private transfer to the airport." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.PACKAGES = PACKAGES;
}
