/**
 * ThaiPackages.com - Package Catalog Context
 * Single source of truth for all Thailand travel packages, baseline starting prices,
 * detailed day-by-day itineraries, inclusions, exclusions, and hotel options.
 * Curated to highlight our two primary signature offerings:
 * 1. Bangkok & Pattaya Super Saver (Signature Flagship 4N/5D)
 * 2. Phuket & Krabi Romantic Island Escape (Signature 6N/7D)
 */

export const PACKAGES = [
  {
    slug: "bangkok-pattaya-classic-vacation",
    title: "Bangkok & Pattaya Super Saver",
    destination: "Bangkok & Pattaya",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 5, nights: 4 },
    durationDays: 5,
    durationNights: 4,
    startingPriceINR: 19900,
    startingPriceUSD: 290,
    startingPriceTHB: 10500,
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Our signature 5-day escape: 2 nights by the sea in Pattaya and 2 in the heart of Bangkok, with the Alcazar Show, Coral Island, a Chao Phraya dinner cruise and Telugu-speaking guides.",
    description: "Our most-loved holiday, perfected over many family trips. Spend 2 nights in a premium sea-view condo in Pattaya and 2 nights in a city-centre luxury condo in Bangkok, each with your own kitchen. Enjoy the Alcazar Show and Pattaya's nightlife, a speedboat day on Coral Island, the Golden Buddha at Wat Traimit, the Grand Palace and Wat Pho, a Chao Phraya River dinner cruise under the city lights, and a final day of shopping. Every transfer is private and air-conditioned, and Telugu-speaking guides are available throughout.",

    highlights: [
      "🇮🇳 Guaranteed Authentic Indian/Veg Food Options",
      "🗣️ 24/7 Telugu & Hindi On-Ground Support",
      "🚐 100% Private AC Vehicle Transfers",
      "👨‍👩‍👧 Well-paced, family & couple friendly itinerary",
      "💰 Fully Customisable to your exact preferences",

      "2 Nights in Pattaya in a Premium Sea-View Condo (with Private Kitchen)",
      "2 Nights in Bangkok in a City-Center Luxury Condo",
      "🗣️ 100% Telugu-Speaking Guides & Dedicated Local Coordinators Available",
      "💰 25% Discount on Group Packages (4+ Travelers)",
      "Food Flexibility: Option A (Self-cook with groceries) or Option B (Daily fresh Indian meals)",
      "Alcazar Cabaret Show (VIP Seating)",
      "Coral Island (Koh Larn) Speedboat Tour with Indian Lunch",
      "Grand Palace, Wat Pho & Wat Traimit (Golden Buddha) in Bangkok",
      "Chao Phraya Princess Luxury Dinner Cruise with live music",
      "100% Private door-to-door AC Vehicle Transfers (Zero shared buses)"
    ],

    inclusions: [
      "Dedicated Telugu & Hindi speaking local coordinator",
      "End-to-End guidance from India to return home",
      "Private AC transfers from airport to hotel and between attractions",

      "2 Nights in Premium Sea-View Condo in Pattaya",
      "2 Nights in City-Center Luxury Condo in Bangkok",
      "Kitchen access in condo with pre-stocked fridge/groceries (Option A) or Indian partner meals (Option B)",
      "Coral Island speedboat excursion with Indian lunch",
      "Alcazar Cabaret Show VIP admission tickets",
      "Bangkok city sightseeing: Wat Traimit, Grand Palace & Wat Pho",
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
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in & relaxation; Enjoy the **Alcazar Show**; **Experience Pattaya nightlife**; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Pattaya", summary: "Breakfast at hotel; Coral Island (Koh Larn) tour by speedboat; Enjoy the beach & optional water activities; Return to Pattaya; **Enjoy Pattaya nightlife**; Evening at leisure; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast & hotel check-out; Transfer to Bangkok; Bangkok city sightseeing; Visit **Wat Traimit (Golden Buddha)**; Hotel check-in; Evening free for shopping & leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Bangkok Sightseeing", summary: "Breakfast at hotel; Visit **Grand Palace & Wat Pho**; Enjoy a memorable **Chao Phraya River Dinner Cruise**; Experience Bangkok's beautiful skyline with dinner onboard; Overnight stay in Bangkok." },
      { day: 5, title: "Shopping & Departure", summary: "Breakfast & hotel check-out; Shopping at Bangkok's famous shopping malls and local markets; Enjoy some last-minute shopping and leisure time; Transfer to Bangkok Airport as per flight schedule; Departure with wonderful memories of Thailand." }
    ]
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
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Seven unhurried days on the Andaman Sea: Phuket's beaches and sunsets, Krabi's limestone islands, private transfers and island cruises for two.",
    description: "An idyllic 7-day Andaman holiday made for couples. Begin with Phuket's lively beaches, a speedboat day to the Phi Phi Islands and sunset at Promthep Cape. Then move to Krabi's dramatic limestone karsts for the Four Islands tour, Railay and Phra Nang beaches, and slow, romantic evenings. Every transfer is private, and every day is paced for the two of you.",
    
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
      "Wonderful all year round: we plan each day around the conditions on your travel dates, so every season brings its own highlights.",
      "Resort rooms can be customized with king beds, private balconies, or plunge pool upgrades.",
      "Vegetarian, vegan, and Indian meal preferences can be accommodated on day tours with prior notice."
    ],
    importantNotes: [
      "Wonderful all year round: we plan each day around the conditions on your travel dates, so every season brings its own highlights.",
      "Resort rooms can be customized with king beds, private balconies, or plunge pool upgrades.",
      "Vegetarian, vegan, and Indian meal preferences can be accommodated on day tours with prior notice."
    ],

    itinerary: [
      { day: 1, title: "Phuket Arrival", summary: "Arrival at Phuket Airport; Private transfer to hotel; Hotel check-in & relaxation; Evening at leisure; Overnight stay in Phuket." },
      { day: 2, title: "Phi Phi Island Tour", summary: "Breakfast at hotel; Full-day **Phi Phi Island tour** by speedboat; Enjoy beautiful beaches, crystal-clear waters & snorkeling; Return to Phuket; Romantic evening at leisure; Overnight stay in Phuket." },
      { day: 3, title: "Phuket Sightseeing", summary: "Breakfast at hotel; Visit **Wat Chalong**; Explore **Phuket Old Town**; Visit **Karon Viewpoint**; Sunset at **Promthep Cape**; Overnight stay in Phuket." },
      { day: 4, title: "Phuket → Krabi", summary: "Breakfast & hotel check-out; Private transfer to Krabi; Hotel check-in; Relax at the beach & evening at leisure; Overnight stay in Krabi." },
      { day: 5, title: "Four Islands Tour", summary: "Breakfast at hotel; Full-day **Four Islands tour**; Visit scenic islands, swimming, snorkeling & beach time; Return to Krabi; Romantic sunset evening; Overnight stay in Krabi." },
      { day: 6, title: "Krabi Leisure & Romance", summary: "Breakfast at hotel; Visit **Railay Beach & Phra Nang Beach**; Enjoy a relaxed afternoon; Optional couple spa / romantic dinner; Overnight stay in Krabi." },
      { day: 7, title: "Krabi Departure", summary: "Breakfast & hotel check-out; Free time depending on flight schedule; Private transfer to Krabi Airport; Departure with beautiful memories of Thailand." }
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
    heroImage: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=900&q=80",
    shortDescription: "A carefree family holiday: Coral Island, SEA LIFE Ocean World, Madame Tussauds and a full day at Safari World, with a spacious family condo stay.",
    description: "Five stress-free days for parents and endless fun for the children. Speedboat to Coral Island in Pattaya, meet the marine life at SEA LIFE Bangkok Ocean World, pose with the stars at Madame Tussauds and spend a full day at Safari World. Spacious family condos, homely Indian food and private AC transfers from arrival to departure keep everyone comfortable.",
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
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Private transfer to Pattaya; Family Condo/Hotel check-in & relaxation; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Beach Fun", summary: "Breakfast at hotel; **Coral Island (Koh Larn)** tour by speedboat; Enjoy the beach, swimming & optional water activities; Return to Pattaya; Evening at leisure; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast & hotel check-out; Transfer to Bangkok; Visit **SEA LIFE Bangkok Ocean World**; Visit **Madame Tussauds Bangkok**; Hotel check-in; Evening shopping & leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Safari World & Family Fun", summary: "Breakfast at hotel; Full-day visit to **Safari World Bangkok**; Enjoy the Safari Park & exciting animal shows; Return to Bangkok; Evening at leisure; Overnight stay in Bangkok." },
      { day: 5, title: "Bangkok Departure", summary: "Breakfast & hotel check-out; Free time depending on flight schedule; Transfer to Bangkok Airport; Return home with wonderful family memories of Thailand." }
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
    heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
    shortDescription: "A romantic island honeymoon: private pool-villa stays, the Phi Phi Islands, Krabi's Four Islands, couple's spa moments and an optional sunset dinner cruise.",
    description: "Celebrate the beginning of your story. Six days of quiet luxury: a private beachfront stay in Phuket, a speedboat day to the Phi Phi Islands, Krabi's Four Islands by boat, and an optional romantic dinner cruise in Bangkok before you fly home with beautiful memories.",
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
      { day: 1, title: "Phuket Arrival", summary: "Arrival at Phuket Airport; Private transfer to hotel; Hotel check-in & relaxation; Romantic evening at leisure; Overnight stay in Phuket." },
      { day: 2, title: "Phi Phi Island Tour", summary: "Breakfast at hotel; Full-day **Phi Phi Island tour** by speedboat; Enjoy beautiful beaches, crystal-clear waters & snorkeling; Return to Phuket; Romantic sunset evening; Overnight stay in Phuket." },
      { day: 3, title: "Phuket → Krabi", summary: "Breakfast & hotel check-out; Private transfer to Krabi; Hotel check-in & enjoy the resort; Evening at leisure; Overnight stay in Krabi." },
      { day: 4, title: "Four Islands Tour", summary: "Breakfast at hotel; Full-day **Four Islands tour**; Visit beautiful beaches, swimming & snorkeling; Romantic evening at leisure; Overnight stay in Krabi." },
      { day: 5, title: "Krabi → Bangkok", summary: "Breakfast & hotel check-out; Transfer to Krabi Airport & flight to Bangkok; Hotel check-in; Evening shopping & leisure; Optional **Romantic Dinner Cruise**; Overnight stay in Bangkok." },
      { day: 6, title: "Bangkok Departure", summary: "Breakfast & hotel check-out; Free time depending on flight schedule; Transfer to Bangkok Airport; Departure with beautiful memories of your honeymoon in Thailand." }
    ]
  },
  {
    slug: "bangkok-tour-packages",
    cardTitle: "Bangkok Tour Packages",
    title: "Bangkok City Tour",
    destination: "Bangkok",
    destinationSlug: "bangkok",
    category: "Family & City Breaks",
    duration: { days: 4, nights: 3 },
    durationDays: 4,
    durationNights: 3,
    startingPriceINR: 14900,
    startingPriceUSD: 180,
    startingPriceTHB: 6800,
    heroImage: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Four vibrant days in Bangkok: the Grand Palace, Wat Pho and Wat Arun, the Chao Phraya River, Safari World and the city's best shopping.",
    description: "The perfect city break. Explore the golden Grand Palace, Wat Pho and Wat Arun, take in the Chao Phraya River, spend a full day at Safari World, shop Pratunam, MBK and the night markets, and see the city lights from a rooftop sky bar, all from a comfortable city-centre stay.",
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
      { day: 1, title: "Bangkok Arrival & City Evening", summary: "Arrival at Bangkok Airport; Private transfer to hotel; Hotel check-in & relaxation; Evening visit to a local night market; Overnight stay in Bangkok." },
      { day: 2, title: "Bangkok City & Cultural Tour", summary: "Breakfast at hotel; Visit **Grand Palace & Wat Pho**; Visit **Wat Arun**; **Chao Phraya River experience**; Evening shopping at popular markets/malls; Overnight stay in Bangkok." },
      { day: 3, title: "Safari World & Shopping", summary: "Breakfast at hotel; Full-day visit to **Safari World Bangkok**; Enjoy Safari Park & animal shows; Return to Bangkok; Evening shopping & leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Leisure & Departure", summary: "Breakfast & hotel check-out; Free time for shopping or leisure depending on flight timing; Transfer to Bangkok Airport; Departure with wonderful memories of Bangkok." }
    ]
    },
  {
    slug: "pattaya-tour-packages",
    cardTitle: "Pattaya Tour Packages",
    title: "Pattaya Beach & Nightlife Tour",
    destination: "Pattaya",
    destinationSlug: "pattaya",
    category: "Family & City Breaks",
    duration: { days: 4, nights: 3 },
    durationDays: 4,
    durationNights: 3,
    startingPriceINR: 15900,
    startingPriceUSD: 190,
    startingPriceTHB: 7200,
    heroImage: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Four lively days in Pattaya: Coral Island by speedboat, the Alcazar VIP Show, the Sanctuary of Truth and Walking Street nightlife, from a sea-view condo.",
    description: "Pattaya at its most exciting. Stay in a premium sea-view condo, speedboat to Coral Island for beaches and water sports, see the world-famous Alcazar Cabaret Show, explore the awe-inspiring Sanctuary of Truth, and enjoy the energy of Walking Street after dark.",
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
      { day: 1, title: "Pattaya Arrival & Nightlife", summary: "Arrival at Bangkok Airport; Private transfer to Pattaya; Sea-view Condo/Hotel check-in & relaxation; Experience Pattaya's vibrant nightlife (**Walking Street, live music & entertainment**); Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Nightlife", summary: "Breakfast at hotel; **Coral Island (Koh Larn)** tour by speedboat; Enjoy beaches, swimming & optional water sports; Return to Pattaya; Explore **Walking Street & evening entertainment**; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya Sightseeing & Shows", summary: "Breakfast at hotel; Visit **Sanctuary of Truth**; Visit **Pattaya Viewpoint**; Shopping & leisure time; Evening **Cabaret/Alcazar VIP Show** & nightlife; Overnight stay in Pattaya." },
      { day: 4, title: "Leisure & Departure", summary: "Breakfast & hotel check-out; Free time for shopping or relaxation; Transfer to Bangkok Airport; Departure with unforgettable Pattaya memories." }
    ]
    },
  {
    slug: "thailand-vietnam-tour-packages",
    cardTitle: "Thailand & Vietnam Tour Packages",
    title: "Bangkok • Pattaya • Phu Quoc (Vietnam)",
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
    heroImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=80",
    thumbnail: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Two countries, one seamless week: Pattaya and Bangkok, then a short flight to tropical Phu Quoc for island tours and the famous Hon Thom cable car.",
    description: "The best of two Southeast Asian favourites in one effortless journey. Enjoy Bangkok's vibrant city culture and Pattaya's famous nightlife, then fly to Phu Quoc, Vietnam, for pristine beaches, a full-day island and snorkelling tour, and the breathtaking Hon Thom Cable Car.",
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
      { day: 1, title: "Bangkok Arrival → Pattaya", summary: "Arrival at Bangkok Airport; Transfer to Pattaya; Hotel check-in & relaxation; Evening at leisure; Overnight stay in Pattaya." },
      { day: 2, title: "Coral Island & Pattaya", summary: "Breakfast at hotel; **Coral Island (Koh Larn)** tour by speedboat; Beach activities & optional water sports; Return to Pattaya; Evening at leisure / Pattaya nightlife; Overnight stay in Pattaya." },
      { day: 3, title: "Pattaya → Bangkok", summary: "Breakfast & hotel check-out; Pattaya sightseeing & transfer to Bangkok; Hotel check-in; Evening shopping & leisure; Overnight stay in Bangkok." },
      { day: 4, title: "Bangkok → Phu Quoc (Vietnam)", summary: "Breakfast & hotel check-out; Transfer to Bangkok Airport & flight to **Phu Quoc, Vietnam**; Hotel check-in; Relax on the beach & evening at leisure; Overnight stay in Phu Quoc." },
      { day: 5, title: "Phu Quoc Island Tour", summary: "Breakfast at hotel; Full-day **Phu Quoc island & beach experience**; Enjoy snorkeling, swimming & scenic island views; Return to hotel & evening at leisure; Overnight stay in Phu Quoc." },
      { day: 6, title: "Phu Quoc Cable Car & Leisure", summary: "Breakfast at hotel; Experience the famous **Hon Thom Cable Car**; Enjoy beach time, island views & local markets; Sunset by the beach; Overnight stay in Phu Quoc." },
      { day: 7, title: "Phu Quoc Departure", summary: "Breakfast & hotel check-out; Free time depending on flight schedule; Transfer to Phu Quoc Airport; Departure with wonderful memories of Thailand & Vietnam." }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.TRAVEL_CONTEXT = window.TRAVEL_CONTEXT || {};
  window.TRAVEL_CONTEXT.PACKAGES = PACKAGES;
}
