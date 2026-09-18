$files = Get-ChildItem -Filter *.html
$drawerMenu = @'
<ul class="drawer-menu">
        <li><a href="index.html" class="drawer-link">Home</a></li>
        <li class="menu-item-has-children">
          <button class="submenu-toggle" aria-expanded="false">
            Destinations
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="drawer-submenu">
            <a href="destination-detail.html?id=bangkok" class="drawer-link">Bangkok</a>
            <a href="destination-detail.html?id=pattaya" class="drawer-link">Pattaya</a>
            <a href="destination-detail.html?id=krabi" class="drawer-link">Krabi</a>
            <a href="destination-detail.html?id=samui" class="drawer-link">Koh Samui</a>
            <a href="destination-detail.html?id=chiang-mai" class="drawer-link">Chiang Mai</a>
            <a href="destination-detail.html?id=hua-hin" class="drawer-link">Hua Hin</a>
          </div>
        </li>
        <li class="menu-item-has-children">
          <button class="submenu-toggle" aria-expanded="false">
            Tour Packages
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="drawer-submenu">
            <a href="family-packages.html" class="drawer-link">Family Packages</a>
            <a href="couple-packages.html" class="drawer-link">Couple Packages</a>
            <a href="bachelor-packages.html" class="drawer-link">Bachelor Packages</a>
            <a href="honeymoon-packages.html" class="drawer-link">Honeymoon Packages</a>
            <a href="group-tours.html" class="drawer-link">Group Tours</a>
            <a href="customized-packages.html" class="drawer-link">Customized Packages</a>
          </div>
        </li>
        <li class="menu-item-has-children">
          <button class="submenu-toggle" aria-expanded="false">
            Services
            <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="drawer-submenu">
            <a href="visa-services.html" class="drawer-link">Visa Services</a>
            <a href="passport-services.html" class="drawer-link">Passport Services</a>
          </div>
        </li>
        <li><a href="about.html" class="drawer-link">Why Us</a></li>
        <li><a href="contact.html" class="drawer-link">Contact</a></li>
      </ul>
'@

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, (New-Object System.Text.UTF8Encoding $false))
    $content = [regex]::Replace($content, '(?s)<ul class="drawer-menu">.*?</ul>', $drawerMenu)
    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
}
Write-Output "Updated HTML files for Pass 4"
