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
      heroImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=800&q=80",
      quickFacts: { bestTime: "Nov – Apr", currency: "Thai Baht (THB)", idealDuration: "3 – 4 Days", travelStyle: ["Watersports", "Nightlife", "Condo Stays", "Family Fun"] },
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
        "Chao Phraya Princess Luxury Dinner Cruise ticket with buffet",
        "100% Private AC vehicle transfers: Airport -> Pattaya -> Bangkok -> Airport",
        "Dedicated 24/7 WhatsApp concierge support"
      ],
      exclusions: ["International flights", "Personal tipping and visa charges"],
      hotelOptions: [
        { tier: "Signature Premium Condo (Flagship - Highly Recommended)", pattaya: "The Base Central / Riviera Ocean Drive Sea-View (with Private Kitchen)", bangkok: "Ideo Mobi / Rhythm Sukhumvit Luxury Condo" },
        { tier: "Standard 3★ / 4★ Hotel Alternative", pattaya: "Centara Pattaya / Nova Platinum 4★", bangkok: "Amari Bangkok / Berkeley Hotel Pratunam 4★" }
      ],
      diningOptions: [
        { plan: "Self-Cook / Home Comfort Plan (Flagship - Highly Recommended)", details: "Condo kitchen pre-stocked with Indian groceries, milk, bread, butter, spices, rice, tea, and cookware. Ideal for families and pure vegetarians." },
        { plan: "Indian Restaurant Plan (Alternative)", details: "Daily fresh pre-arranged lunches & dinners at verified partner Indian restaurants." }
      ],
      itinerary: [
        { day: 1, title: "Suvarnabhumi Airport Private Pickup -> Transfer to Pattaya Condo", summary: "Meet your private chauffeur directly at Bangkok Suvarnabhumi Airport. Private AC drive to Pattaya. Check into your Sea-View Condo with kitchen amenities. Evening at leisure." },
        { day: 2, title: "Coral Island Speedboat Tour with Indian Lunch & Alcazar VIP Show", summary: "Morning speedboat excursion to Coral Island with Indian lunch. In the evening, attend the world-famous Alcazar Cabaret Show with VIP seating." },
        { day: 3, title: "Pattaya City Highlights (Big Buddha & Viewpoints) -> Night Markets", summary: "Tour Pattaya Big Buddha and coastal viewpoints overlooking the bay. Afternoon leisure by your condo pool and evening night markets." },
        { day: 4, title: "Private Transfer to Bangkok -> Luxury City-Center Condo Check-in", summary: "Private door-to-door transfer from Pattaya to Bangkok. Check into your City-Center Luxury Condo. Afternoon at leisure for shopping." },
        { day: 5, title: "Shopping at Pratunam/MBK -> Chao Phraya Princess Dinner Cruise", summary: "Day for shopping at Pratunam, MBK Center, or ICONSIAM. In the evening, board the Chao Phraya Princess Luxury Dinner Cruise with live music and buffet." },
        { day: 6, title: "Relaxed Morning -> Private Transfer to Bangkok Airport", summary: "Enjoy breakfast in your condo or partner cafe. Private AC transfer to Suvarnabhumi or Don Mueang Airport for your flight home." }
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
      heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85",
      thumbnail: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
      shortDescription: "An idyllic 7-day Andaman holiday pairing lively Phuket beaches with Krabi's dramatic limestone karsts, 100% private transfers and island cruises.",
      description: "An idyllic 7-day Andaman holiday pairing the lively beaches of Phuket with the dramatic limestone karsts and tranquil luxury of Krabi.",
      highlights: ["3 Nights in Phuket Beachfront Resort", "3 Nights in Krabi Cliffside Resort", "Phi Phi Islands & Maya Bay Speedboat Excursion", "Krabi 4 Islands Sunset Boat Tour", "100% Private AC Transfers throughout"],
      inclusions: ["6 Nights resort accommodation with breakfast", "Phi Phi & Maya Bay speedboat tour with lunch", "Krabi 4 Islands boat tour", "Private airport & intercity transfers", "Marine park entry permits"],
      exclusions: ["International flights", "Personal expenses"]
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
        if (closeDrawerBtn) closeDrawerBtn.focus();
      };

      const closeMenu = () => {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
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

      drawerLinks.forEach(link => link.addEventListener('click', closeMenu));
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
      if (!homeFeaturedGrid || !PACKAGES || PACKAGES.length === 0) return;
      // Show 2 primary signature packages on homepage
      const featured = PACKAGES.slice(0, 2);
      const badges = ['BESTSELLER', 'COUPLE SPECIAL'];
      
      const featurePillsMap = {
        'bangkok-pattaya-classic-vacation': [
          '🏢 3N Pattaya Condo (Kitchen)',
          '🏢 2N Bangkok Condo',
          '🍽️ Indian Food Options',
          '🚗 100% Private Transfers'
        ],
        'phuket-krabi-romantic-escape': [
          '🏖️ Beachfront Resorts',
          '🛥️ Phi Phi Speedboat',
          '🚗 100% Private AC'
        ]
      };

      homeFeaturedGrid.innerHTML = featured.map((pkg, idx) => {
        const pills = featurePillsMap[pkg.slug] || [
          `🏖️ ${pkg.destination}`,
          '🚗 100% Private AC'
        ];
        const isSignature = pkg.slug === 'bangkok-pattaya-classic-vacation';

        return `
          <article class="package-card w-full" id="${isSignature ? 'cardBangkokPattaya' : ''}">
            <div class="package-media-wrap">
              <img src="${pkg.thumbnail}" alt="${pkg.title}" loading="lazy" width="600" height="450">
              <span class="package-badge-tag">${badges[idx] || pkg.category}</span>
              <span class="package-duration-tag">${pkg.durationDays || pkg.duration.days} Days / ${pkg.durationNights || pkg.duration.nights} Nights</span>
            </div>
            <div class="package-card-body">
              <span class="package-destination">${pkg.destination}</span>
              <h3>${pkg.title}</h3>
              <p>${pkg.shortDescription || pkg.description}</p>
              
              <div class="package-feature-pills flex flex-wrap gap-2">
                ${pills.map(p => `<span class="pill-feature">${p}</span>`).join('')}
              </div>

              <div class="package-card-footer">
                <div class="package-price-wrap">
                  <span class="package-price-label">Starting Price</span>
                  <span class="package-price-value">${formatPrice(pkg)}</span>
                </div>
                ${isSignature ? `
                  <button type="button" class="btn btn-primary btn-sm btn-open-itinerary" data-target-modal="itineraryModal">
                    View Itinerary
                  </button>
                ` : `
                  <a href="package-detail.html?pkg=${pkg.slug}" class="btn btn-primary btn-sm">
                    View Itinerary
                  </a>
                `}
              </div>
            </div>
          </article>
        `;
      }).join('');

      // Attach click handlers to newly rendered itinerary buttons
      const openButtons = homeFeaturedGrid.querySelectorAll('.btn-open-itinerary');
      openButtons.forEach(btn => {
        btn.addEventListener('click', openItineraryModal);
      });

      // Update modal price display
      const modalPriceVal = document.getElementById('modalPriceVal');
      const sigPkg = PACKAGES.find(p => p.slug === 'bangkok-pattaya-classic-vacation') || PACKAGES[1];
      if (modalPriceVal && sigPkg) {
        modalPriceVal.innerHTML = `${formatPrice(sigPkg)} <small style="font-size:14px; font-weight:500; color:var(--text-muted)">/ person</small>`;
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
                <a href="destination-detail.html?dest=${d.slug}" class="link-arrow">
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
              <a href="package-detail.html?pkg=${pkg.slug}" class="btn btn-primary btn-sm">
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
      const slug = getQueryParam('dest');
      let destination = DESTINATIONS.find(d => d.slug === slug);

      if (!destination) {
        destination = DESTINATIONS[0]; // Fallback to Phuket
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

      // Quick Facts
      const factBestTime = document.getElementById('factBestTime');
      const factCurrency = document.getElementById('factCurrency');
      const factDuration = document.getElementById('factDuration');
      const factStyle = document.getElementById('factStyle');

      const qf = destination.quickFacts || {};
      if (factBestTime) factBestTime.textContent = qf.bestTime || destination.bestTime || 'Nov – Apr';
      if (factCurrency) factCurrency.textContent = qf.currency || destination.currency || 'Thai Baht (THB)';
      if (factDuration) factDuration.textContent = qf.idealDuration || destination.idealDuration || '4 – 7 Days';
      if (factStyle) factStyle.textContent = Array.isArray(qf.travelStyle) ? qf.travelStyle.join(', ') : (qf.travelStyle || destination.travelStyle || 'Scenic Travel');

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
                  <a href="package-detail.html?pkg=${pkg.slug}" class="btn btn-primary btn-sm">
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
      const slug = getQueryParam('pkg');
      let pkg = PACKAGES.find(p => p.slug === slug);

      if (!pkg) {
        pkg = PACKAGES[0];
      }
      activeDetailPackage = pkg;

      const durationStr = `${pkg.durationDays || pkg.duration.days} Days / ${pkg.durationNights || pkg.duration.nights} Nights`;

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

