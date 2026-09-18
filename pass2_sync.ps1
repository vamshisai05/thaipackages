$files = Get-ChildItem -Filter *.html
$drawerMenu = @'
<ul class="drawer-menu">
        <li><a href="index.html" class="drawer-link">Home</a></li>
        <li>
          <div class="menu-item-has-children">
            <a href="destinations.html" class="drawer-link">Destinations</a>
            <button class="submenu-toggle" aria-label="Toggle Destinations Menu">▼</button>
          </div>
          <div class="drawer-submenu">
            <a href="destination-detail.html?id=bangkok" class="drawer-link">Bangkok</a>
            <a href="destination-detail.html?id=pattaya" class="drawer-link">Pattaya</a>
            <a href="destination-detail.html?id=krabi" class="drawer-link">Krabi</a>
            <a href="destination-detail.html?id=samui" class="drawer-link">Koh Samui</a>
            <a href="destination-detail.html?id=chiang-mai" class="drawer-link">Chiang Mai</a>
            <a href="destination-detail.html?id=hua-hin" class="drawer-link">Hua Hin</a>
          </div>
        </li>
        <li>
          <div class="menu-item-has-children">
            <a href="packages.html" class="drawer-link">Tour Packages</a>
            <button class="submenu-toggle" aria-label="Toggle Tour Packages Menu">▼</button>
          </div>
          <div class="drawer-submenu">
            <a href="packages.html?category=family" class="drawer-link">Family Packages</a>
            <a href="packages.html?category=couple" class="drawer-link">Couple Packages</a>
            <a href="packages.html?category=bachelor" class="drawer-link">Bachelor Packages</a>
            <a href="packages.html?category=honeymoon" class="drawer-link">Honeymoon Packages</a>
            <a href="packages.html?category=group" class="drawer-link">Group Tours</a>
            <a href="contact.html?type=custom" class="drawer-link">Customized Packages</a>
          </div>
        </li>
        <li><a href="about.html" class="drawer-link">Why Us</a></li>
        <li><a href="contact.html" class="drawer-link">Contact</a></li>
      </ul>
'@

$navMain = @'
<nav aria-label="Main Navigation">
        <!-- Main nav links moved to hamburger menu -->
      </nav>
'@

$hamburger = @'
<button id="hamburgerBtn" class="hamburger-btn" aria-label="Open Navigation Menu" aria-controls="mobileDrawer">
          <span></span>
          <span></span>
          <span></span>
        </button>
'@

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, (New-Object System.Text.UTF8Encoding $false))
    
    # Replace nav block
    $content = [regex]::Replace($content, '(?s)<nav aria-label="Main Navigation">.*?</nav>', $navMain)
    
    # Replace hamburger button (covers old and new variations)
    $content = [regex]::Replace($content, '(?s)<button id="hamburgerBtn" class="hamburger-btn"[^>]*>.*?<span></span>\s*</button>', $hamburger)
    
    # Replace drawer menu
    $content = [regex]::Replace($content, '(?s)<ul class="drawer-menu">.*?</ul>', $drawerMenu)

    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
}
Write-Output "Updated all HTML files for Pass 2 Navigation"
