# ThaiPackages — Photography Guide

**Current status:** every image on the site is a free Unsplash stock photo (Unsplash licence: free for commercial use, no attribution required), loaded straight from `images.unsplash.com`. Each one was checked by eye to match its slot. If a stock URL ever stops working, the site shows a branded teal-and-gold tile instead of a broken image.

**Upgrading to your own photos later:** when you have real photos of your guests and trips, they will out-perform any stock image. Use the briefs below as a shot list. To swap one in, save the photo in this folder (e.g. `images/custom/pkg-phuket-krabi.jpg`), then replace the matching Unsplash URL in the page or data file with that path. Package and destination photos live in `context/packages.js` and `context/destinations.js`.

## Current stock photo for each slot

| Slot | Unsplash photo | Subject |
|---|---|---|
| home-hero | photo-1534008897995-27a23e859048 | Maya Bay, Phi Phi: turquoise water, long-tail boats |
| pkg-bangkok-pattaya | photo-1508009603885-50cf7c579365 | Bangkok Chinatown (Yaowarat) neon at night |
| pkg-phuket-krabi | photo-1552465011-b4e21bf6e79a | Railay, Krabi: long-tail boats under karst |
| pkg-family-tour | photo-1475503572774-15a45e5d60b9 | Family walking on the beach |
| pkg-honeymoon | photo-1520250497591-112f2f40a3f4 | Resort pool framed by Thai karsts |
| pkg-bangkok-city | photo-1562602833-0f4ab2fc46e3 | Wat Pho chedis |
| pkg-pattaya-nightlife | photo-1543007630-9710e4a00a20 | Glowing cocktail bar |
| pkg-thailand-vietnam | photo-1528127269322-539801943592 | Ha Long Bay, Vietnam |
| dest-bangkok | photo-1563492065599-3520f775eeed | Grand Palace |
| dest-pattaya | photo-1578922746465-3a80a228f223 | Turquoise bay with speedboat (Coral Island style) |
| dest-phuket | photo-1506665531195-3566af2b4dfa | Phi Phi viewpoint at sunset |
| dest-krabi | photo-1504214208698-ea1916a2195a | Karsts with a long-tail boat |
| dest-koh-samui | photo-1537956965359-7573183d1f57 | Aerial island beach |
| dest-chiang-mai | photo-1512553353614-82a7370096dc | Doi Inthanon pagodas at sunset |
| dest-hua-hin | photo-1586500036706-41963de24d8b | White-sand palm beach |
| why-indian-food / commitment-indian-dining | photo-1585937421612-70a008356fbe / photo-1567337710282-00832b415979 | Indian curries / thali |
| why-family-condos / commitment-condos | photo-1522708323590-d24dbb6b0267 / photo-1596394516093-501ba68a0ba6 | Apartment living room / balcony bedroom |
| why-telugu-guides | photo-1573496359142-b8d87734a5a2 | Smiling guide portrait |
| why-end-to-end-care / service-passport | photo-1530521954074-e64f6810b32d | Traveller in an airport lounge |
| commitment-private-transfers | photo-1449965408869-eaa3f722e40d | Private car at dusk |
| commitment-transparent-pricing | photo-1554224155-8d04cb21cd6c | Costs on a phone calculator |
| about-hero / about-story | photo-1519451241324-20b4ea2c4220 / photo-1507525428034-b723cf961d3e | Karst lagoon / beach at golden hour |
| step-1 … step-4 | 1488646953014 · 1541807084 · 1528605248644 · 1511632765486 | Planning flat-lay · laptop · planning together · friends at sunset |
| category-family / couple / bachelor | 1609220136736 · 1516589178581 · 1514525253161 | Father with kids · heart-hands sunset · concert lights |
| category-honeymoon / group / customized | 1582719508461 · 1511895426328 · 1488646953014 | Infinity-pool deck · friends on the beach · map flat-lay |
| service-flights / service-visa | 1436491865332 · 1450101499163 | Plane wing · signing documents |

Free Unsplash had no clearly identifiable Pattaya or Phuket landmark shot, so those two use the closest matching scenes. They are the first two worth replacing with your own photos.

---

## Art direction (applies to every shot)

- **Real people, real trips.** Use Indian families and couples who look like our Khammam and Hyderabad travellers, not generic Western models. Photos of our own guests (with written permission) are ideal.
- **Warm, aspirational, honest.** Golden-hour or soft morning light. Rich but natural colour, no heavy filters, nothing that feels like a stock-photo pose.
- **Comfort is the story.** Show the things that make us different: private AC vans, spacious condos with kitchens, Telugu-speaking guides, Indian food, families relaxed and together.
- **Respect and modesty.** Family-appropriate clothing and settings throughout, including the nightlife and bachelor shots.
- **Leave room for text.** Hero images get headline text over the middle, so keep the main subject slightly off-centre, with calm sky or sea behind the text area.

## Technical specs

| Type | Size (px) | Ratio | Max file size |
|---|---|---|---|
| Page heroes (`home-hero`, `about-hero`, `category-*`, `service-*`) | 2400 × 1350 | 16:9 | 450 KB |
| Package & destination photos (`pkg-*`, `dest-*`) | 1600 × 1200 | 4:3 (also used as wide banners, so keep the subject central) | 300 KB |
| Card photos (`commitment-*`, `step-*`, `about-story`) | 1200 × 900 | 4:3 | 200 KB |
| Round icons (`why-*`) | 400 × 400 | 1:1, subject dead-centre | 60 KB |

Save as **.jpg**, sRGB, quality 75–80 (run through squoosh.app or TinyPNG). Lower-case names, exactly as written.

---

## Homepage

| File | Where it appears | The perfect image |
|---|---|---|
| `home-hero.jpg` | Full-screen homepage hero, behind "Your Thailand story starts here." | Aerial drone shot at golden hour over an emerald Andaman bay (Phi Phi / Krabi limestone cliffs). In the lower third, a long-tail boat with a Telugu family of four waving, small in frame. Sky clear in the centre for the headline. |
| `why-indian-food.jpg` | Round icon, "Homely Indian Food" | Top-down shot of a steaming South Indian thali (rice, sambar, pappu, curd, papad) on a banana leaf, on a teak table with a soft-focus Thai beach behind. |
| `why-telugu-guides.jpg` | Round icon, "Native Support" | Friendly portrait of our real Telugu-speaking coordinator in a branded polo, smiling at the camera, with a temple or the airport arrivals hall softly blurred behind. |
| `why-family-condos.jpg` | Round icon, "Family Condos" | Bright, spacious condo living room with a sea-view balcony and an open kitchen, morning light, a child's toy on the sofa for warmth. |
| `why-end-to-end-care.jpg` | Round icon, "End-to-End Care" | Our chauffeur loading a family's suitcases into a spotless white private AC van outside Bangkok airport arrivals. |

## Packages (homepage carousel, packages page, package detail banners)

| File | Package | The perfect image |
|---|---|---|
| `pkg-bangkok-pattaya.jpg` | Bangkok & Pattaya Super Saver (5D/4N) | Split energy: Bangkok's skyline glowing at dusk from a Chao Phraya dinner cruise deck, with an Indian family at the rail. Alternative: the family on Coral Island's white sand with speedboats behind. |
| `pkg-phuket-krabi.jpg` | Phuket & Krabi Romantic Island Escape | An Indian couple walking barefoot on Railay Beach at sunset, limestone karsts glowing orange, long-tail boats in the shallows. |
| `pkg-family-tour.jpg` | Thailand Family Tour (5D/4N) | Kids laughing at Safari World as a giraffe leans in close, parents behind them. Bright midday light, joyful. |
| `pkg-honeymoon.jpg` | Phuket • Krabi • Bangkok Honeymoon Special | A private pool villa at blue hour: floating breakfast tray, rose petals, ocean beyond, the couple seen from behind with feet in the pool. |
| `pkg-bangkok-city.jpg` | Bangkok City Tour (4D/3N) | Wat Arun lit up at twilight across the river, with the reflection in the water and a tourist boat crossing. |
| `pkg-pattaya-nightlife.jpg` | Pattaya Beach & Nightlife Tour (4D/3N) | Walking Street neon at night shot with a slow shutter and colourful light trails. A group of young Indian friends in the foreground, tasteful and celebratory. |
| `pkg-thailand-vietnam.jpg` | Bangkok • Pattaya • Phu Quoc (Vietnam) | The Hon Thom cable car gliding over turquoise Phu Quoc water and islands. Wide and dramatic. |

## Destinations (destinations page, destination detail banners)

| File | Destination | The perfect image |
|---|---|---|
| `dest-bangkok.jpg` | Bangkok | Grand Palace golden spires in soft morning light, a few visitors for scale. |
| `dest-pattaya.jpg` | Pattaya | Pattaya Bay viewpoint at sunset, with the curve of the beach, city lights coming on, and boats in the bay. |
| `dest-phuket.jpg` | Phuket | Promthep Cape sunset over the Andaman Sea, warm sky, silhouetted palms. |
| `dest-krabi.jpg` | Krabi | Four Islands: the Koh Poda limestone tower rising from glassy turquoise water, with a long-tail boat. |
| `dest-koh-samui.jpg` | Koh Samui | A coconut-palm-lined beach with an infinity pool in the foreground, overlooking a calm bay at golden hour. |
| `dest-chiang-mai.jpg` | Chiang Mai | Wat Phra That Doi Suthep's golden chedi, with misty green mountains beyond. |
| `dest-hua-hin.jpg` | Hua Hin | A quiet royal-resort beach at dawn, the old wooden train station or the long pier, calm and elegant. |

## About page

| File | Where | The perfect image |
|---|---|---|
| `about-hero.jpg` | About page banner | Wide golden-hour panorama of Thai islands from a boat deck, with our branded flag or cap visible on the rail. |
| `about-story.jpg` | "Our story" image with floating badge | Our founder or team with a happy Khammam family at Bangkok airport arrivals, holding a "Welcome" sign in Telugu. |
| `commitment-condos.jpg` | Commitment 1: Signature Premium Condos | Sea-view condo balcony at sunrise, with coffee cups on the table and the pool below. |
| `commitment-private-transfers.jpg` | Commitment 2: 100% Private AC Transfers | Interior of our private van: clean leather seats, chilled water bottles, a family settling in. |
| `commitment-indian-dining.jpg` | Commitment 3: Self-Cook & Indian Dining | A condo kitchen counter stocked with Indian groceries (atta, rice, spices, milk, tea), and a mother cooking dosa with a child watching. |
| `commitment-transparent-pricing.jpg` | Commitment 4: Transparent Itemized Pricing | Hands holding a phone showing a neat WhatsApp itinerary and quote, with a passport and boarding pass on a desk. |
| `step-1-share-your-plan.jpg` | Step 1: Share Your Travel Plan | A couple at home in Khammam sending a WhatsApp message on a phone, with a map of Thailand on the table. |
| `step-2-custom-proposal.jpg` | Step 2: Receive Custom Proposal | Close-up of a laptop showing a beautifully formatted day-by-day itinerary. |
| `step-3-fine-tune.jpg` | Step 3: Fine-Tune & Confirm | Our consultant on a video call with a family, pointing at the itinerary, everyone smiling. |
| `step-4-enjoy.jpg` | Step 4: Enjoy Seamless Travel | The family jumping for joy on a Phi Phi beach, in a candid moment. |

## Package category pages (top banners)

| File | Page | The perfect image |
|---|---|---|
| `category-family.jpg` | Family Packages | Three generations (grandparents, parents, kids) together at a beach resort pool, everyone laughing. |
| `category-couple.jpg` | Couple Packages | A couple sharing a candle-lit dinner on the sand, with lanterns and the sea at dusk. |
| `category-bachelor.jpg` | Bachelor Packages | Friends on a speedboat bow at Coral Island, arms raised and spray flying, bright and fun. |
| `category-honeymoon.jpg` | Honeymoon Packages | A bride with mehendi-decorated hands holding her husband's hand over the rail of a sunset catamaran. |
| `category-group.jpg` | Group Tours | A big group (12–15 people) posing happily in front of the Sanctuary of Truth, Pattaya. |
| `category-customized.jpg` | Customized Packages | A flat-lay of a Thailand map, passport, sunglasses, a pen and a handwritten itinerary on a wooden table. |

## Service pages

| File | Page | The perfect image |
|---|---|---|
| `service-flights.jpg` | Flight Tickets | A plane window view over Thai islands at golden hour, with the wing visible. |
| `service-visa.jpg` | Visa Services | An Indian passport with the Thai e-Visa printout and travel documents neatly arranged, in soft light. |
| `service-passport.jpg` | Passport Services | A family's new passports fanned out on a table, with a child's hand reaching in. Warm and reassuring. |
