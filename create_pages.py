import os

template_top = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>{title} | ThaiPackages.com</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="site-header solid-nav">
    <div class="container nav-container">
      <a href="index.html" class="brand-logo" aria-label="ThaiPackages.com Homepage">
        ThaiPackages<span>.com</span>
      </a>
      <nav aria-label="Main Navigation"></nav>
      <div class="nav-actions">
        <a href="contact.html" class="btn btn-primary btn-sm">Request a Quote</a>
        <button id="hamburgerBtn" class="hamburger-btn" aria-label="Open Navigation Menu" aria-controls="mobileDrawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <div id="mobileDrawer" class="mobile-drawer" aria-hidden="true" role="dialog" aria-label="Mobile Navigation">
    <div class="drawer-content">
      <div class="drawer-header">
        <span class="brand-logo">ThaiPackages<span>.com</span></span>
        <button id="closeDrawerBtn" class="close-drawer-btn" aria-label="Close Menu">&times;</button>
      </div>
      <ul class="drawer-menu"></ul>
    </div>
  </div>
  <main>
    <section class="hero-section" style="min-height: 420px; padding: 140px 0 80px;">
      <img src="{hero_image}" alt="{title}" class="hero-bg-media" fetchpriority="high">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-inner">
          <h1>{title}</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container" style="max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 17px; color: var(--text-dark);">
"""

template_bottom = """
        <div style="margin-top: 48px; text-align: center;">
          <a href="contact.html" class="btn btn-primary">Plan Your Trip Now →</a>
        </div>
      </div>
    </section>
  </main>
  <div class="global-sticky-actions" id="globalStickyActions" aria-label="Quick contact actions">
    <a href="tel:+918121214181" class="sticky-action-btn btn-call" id="stickyPhoneBtn" aria-label="Direct Phone Call" title="Call Us Directly">
      <svg class="call-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span class="sticky-action-label">Call Now</span>
    </a>
    <a href="https://wa.me/918121214181" class="sticky-action-btn btn-whatsapp" id="stickyWhatsAppBtn" aria-label="WhatsApp Chat" title="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.075-1.895-.445-1.571-.648-2.586-2.247-2.664-2.352-.078-.104-.633-.843-.633-1.608 0-.765.399-1.144.542-1.299.143-.156.312-.195.416-.195.104 0 .208.002.299.006.096.004.224-.036.35.267.13.312.442 1.079.481 1.157.039.078.065.169.013.273-.052.104-.078.169-.156.26-.078.091-.163.203-.234.273-.078.078-.159.163-.068.319.091.156.403.665.865 1.077.595.531 1.097.695 1.253.773.156.078.247.065.338-.039.091-.104.39-.455.494-.611.104-.156.208-.13.351-.078.143.052.909.429 1.065.507.156.078.26.117.299.182.039.065.039.377-.105.782z"/></svg>
      <span class="sticky-action-label">WhatsApp</span>
    </a>
  </div>
  <footer class="site-footer" id="contact">
    <div class="container">
      <div class="footer-top-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand-logo">ThaiPackages<span>.com</span></a>
          <p>Customized Thailand holiday packages, private island tours, and vetted luxury condo & beachfront resort stays across Phuket, Krabi, Bangkok, and Pattaya.</p>
          <div class="footer-address-block">
            <span class="footer-address-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Offices & Contact
            </span>
            <address class="footer-address-text">
              <strong>Thailand Office:</strong> Level 18, Interchange 21 Tower, Sukhumvit Road, Bangkok 10110<br>
              <strong>India Office:</strong> Surya Residency, Khammam, Telangana
            </address>
            <div class="footer-direct-contacts">
              <a href="tel:+918121214181" class="footer-direct-link">📞 +91 81212 14181</a>
              <a href="mailto:info@thaipackages.com" class="footer-direct-link">✉️ info@thaipackages.com</a>
            </div>
          </div>
        </div>
        <div class="footer-col">
          <h4>Destinations</h4>
          <ul class="footer-links">
            <li><a href="destination-detail.html?dest=phuket">Phuket Holidays</a></li>
            <li><a href="destination-detail.html?dest=krabi">Krabi Island Tours</a></li>
            <li><a href="destination-detail.html?dest=bangkok">Bangkok City Breaks</a></li>
            <li><a href="destination-detail.html?dest=pattaya">Pattaya Packages</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Traveler Services</h4>
          <ul class="footer-links">
            <li><a href="packages.html">Holiday Packages (from ₹19,900)</a></li>
            <li><a href="about.html">About ThaiPackages.com</a></li>
            <li><a href="contact.html">Request a Custom Quote</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact & Inquiries</h4>
          <ul class="footer-links">
            <li><a href="tel:+918121214181">Direct Call: +91 81212 14181</a></li>
            <li><a href="https://wa.me/918121214181" target="_blank" rel="noopener noreferrer">WhatsApp 24/7 Support</a></li>
            <li><a href="mailto:info@thaipackages.com">info@thaipackages.com</a></li>
            <li><a href="contact.html">Plan Tailored Itinerary</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 ThaiPackages.com. All rights reserved. Thailand Holidays Made Easy.</p>
      </div>
    </div>
  </footer>
  <script type="module" src="context/index.js" defer></script>
  <script src="js/app.js" defer></script>
</body>
</html>
"""

pages = [
    {
        "filename": "bachelor-packages.html",
        "title": "Bachelor Packages",
        "hero_image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">Pattaya Nightlife for Bachelor & Friends Trips</h2>
<p>Looking for an exciting night out with your friends? <strong>Pattaya is one of Thailand’s most vibrant destinations for bachelor and friends’ trips.</strong></p>
<p>As the sun goes down, Pattaya transforms into a lively world of <strong>music, entertainment, beachside restaurants, bars, nightclubs and late-night experiences</strong>. Explore the famous <strong>Walking Street</strong>, enjoy live music and shows, visit popular nightlife venues, or simply relax with friends over dinner and drinks.</p>
<p>At <strong>ThaiPackages.com</strong>, we can customize your bachelor trip around your preferred nightlife experience—from <strong>evening entertainment and pub-hopping to nightclubs and late-night dining</strong>.</p>
<p><strong>Good friends. Great music. Exciting nights. Unforgettable memories.</strong></p>
<p><strong>Pattaya after dark is an experience you and your friends will remember.</strong></p>
"""
    },
    {
        "filename": "couple-packages.html",
        "title": "Couple Packages",
        "hero_image": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">💕 Couple Packages – Romantic Thailand Getaways</h2>
<p>Escape together and create unforgettable memories in the beautiful destinations of Thailand. Our <strong>Couple Packages</strong> are designed for couples looking for <strong>romance, relaxation, adventure and quality time together</strong>.</p>
<p>Enjoy beautiful beaches, romantic sunsets, island tours, sightseeing, shopping and memorable experiences—with <strong>comfortable stays and customized itineraries</strong>.</p>
<p><strong>Travel together. Create unforgettable memories.</strong></p>
"""
    },
    {
        "filename": "honeymoon-packages.html",
        "title": "Honeymoon Packages",
        "hero_image": "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">💕 Honeymoon Packages – Romantic Thailand Getaways</h2>
<p>Begin your new journey together with an unforgettable honeymoon in Thailand. Our <strong>Honeymoon Packages</strong> are designed for newlyweds seeking <strong>romance, relaxation, beautiful beaches and special moments together</strong>.</p>
<p>Enjoy romantic sunsets, island tours, candlelight dinners, scenic experiences and comfortable stays in beautiful destinations like <strong>Phuket, Krabi, Bangkok and Pattaya</strong>.</p>
<p><strong>Your first journey together. Beautiful memories forever.</strong></p>
"""
    },
    {
        "filename": "group-tours.html",
        "title": "Group Tours",
        "hero_image": "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">👥 Group Tours – Travel Together, Save More!</h2>
<p>Make your Thailand trip more exciting by travelling with family, friends, colleagues or a group. Our <strong>Group Tour Packages</strong> offer comfortable stays, sightseeing, transfers and customized itineraries to suit your group.</p>

<h3 style="margin-top: 32px; margin-bottom: 16px; color: var(--teal-800);">🏢 Corporate & Employee Group Tours</h3>
<p>If your company is planning an <strong>employee meeting, team outing, incentive tour or a Thailand trip to reward employees for achieving targets</strong>, we can create a customized package to match your requirements and budget.</p>

<h3 style="margin-top: 32px; margin-bottom: 16px; color: var(--teal-800);">🎉 Huge Discounts for Groups!</h3>
<p><strong>The bigger the group, the more you save.</strong> Enjoy special group discounts and customized packages designed to give you more value for your money.</p>
<p><strong>More people • More fun • Bigger savings • Unforgettable memories</strong></p>
"""
    },
    {
        "filename": "customized-packages.html",
        "title": "Customized Packages",
        "hero_image": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">✈️ Customized Tour Packages – Thailand Your Way</h2>
<p>Plan your Thailand holiday <strong>your way</strong>. Choose your destinations, hotels, activities, sightseeing and travel dates according to your interests and budget.</p>
<p>Whether you are travelling <strong>with family, as a couple, with friends, or as a corporate group</strong>, we create a personalized itinerary that suits your needs.</p>
<p><strong>You choose. We customize. You enjoy.</strong></p>
<p><strong>Your Thailand trip, designed around you.</strong></p>
"""
    },
    {
        "filename": "family-packages.html",
        "title": "Family Packages",
        "hero_image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">👨‍👩‍👧‍👦 Family Packages – Thailand With The Comfort Of Home</h2>
<p>We understand the hesitations Indian families face. We initially built this specifically for families from Khammam and surrounding regions. We guarantee safety, homely Indian food, and 100% native Telugu-speaking guides to ensure you feel at home, even in Thailand.</p>
<p>Instead of squeezing into standard hotel rooms, we provide spacious Pattaya and Bangkok luxury condos with private kitchen access. Instead of shared group shuttles, every journey is conducted in a 100% private, air-conditioned vehicle.</p>
<p><strong>Family-friendly itineraries. Zero hidden costs. Unforgettable memories.</strong></p>
"""
    },
    {
        "filename": "visa-services.html",
        "title": "Visa Services",
        "hero_image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">🛂 Visa Services – Simple & Hassle-Free</h2>
<p>Planning a trip to Thailand? Let <strong>ThaiPackages.com</strong> assist you with the visa process. We provide <strong>visa guidance, document support and application assistance</strong> to help make your travel preparations simple and convenient.</p>
<p>Our team helps you understand the <strong>required documents, application procedures and important travel requirements</strong>, based on your trip and nationality.</p>
<p><strong>Visa Guidance • Document Assistance • Application Support • Travel Guidance</strong></p>
<p><strong>Plan your trip with confidence. We’ll help make the paperwork easier.</strong></p>
"""
    },
    {
        "filename": "passport-services.html",
        "title": "Passport Services",
        "hero_image": "https://images.unsplash.com/photo-1518335032549-980cdb90a6ea?auto=format&fit=crop&w=1920&q=80",
        "content": """
<h2 style="margin-bottom: 24px; color: var(--teal-900);">🛂 Passport Services – Easy & Convenient</h2>
<p>Planning your international trip? <strong>ThaiPackages.com</strong> can assist you with your passport requirements and application process.</p>
<p>We provide <strong>passport application guidance, document assistance and renewal support</strong>, helping you understand the necessary procedures and requirements.</p>
<p><strong>New Passport • Renewal • Document Assistance • Application Guidance</strong></p>
<p><strong>Get your passport ready. Get ready to travel!</strong></p>
"""
    }
]

for page in pages:
    with open(f"c:\\Users\\theva\\OneDrive\\Desktop\\thaipackages\\{page['filename']}", "w", encoding="utf-8") as f:
        html = template_top.format(title=page['title'], hero_image=page['hero_image']) + page['content'] + template_bottom
        f.write(html)

print("Created 8 pages successfully.")
