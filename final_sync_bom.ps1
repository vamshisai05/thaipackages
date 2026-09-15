$drawerMenu = @"
      <ul class="drawer-menu">
        <li><a href="packages.html">Holiday Packages <span>→</span></a></li>
        <li><a href="destinations.html">Destinations <span>→</span></a></li>
        <li><a href="about.html">About ThaiPackages <span>→</span></a></li>
        <li><a href="contact.html">Request a Quote <span>→</span></a></li>
      </ul>
"@

$footer = @"
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
"@

$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    $dStart = $content.IndexOf('<ul class="drawer-menu">')
    if ($dStart -ge 0) {
        $dEnd = $content.IndexOf('</ul>', $dStart) + 5
        $content = $content.Substring(0, $dStart) + $drawerMenu + $content.Substring($dEnd)
    }
    
    $fStart = $content.IndexOf('<footer class="site-footer"')
    if ($fStart -ge 0) {
        $fEnd = $content.IndexOf('</footer>', $fStart) + 9
        $content = $content.Substring(0, $fStart) + $footer + $content.Substring($fEnd)
    }

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
Write-Output "Perfect Sync Complete"
