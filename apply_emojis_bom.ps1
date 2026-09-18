$ErrorActionPreference = 'Stop'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$files = Get-ChildItem -Path 'c:\Users\theva\OneDrive\Desktop\thaipackages' -Filter '*.html'
$changed = 0

foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName)
    $orig = $c
    
    # Trust Icons (using regex to match the next line's text to differentiate)
    $c = [regex]::Replace($c, 'family-trust-icon">\?\?\?</div>(?=\s*<h3[^>]*>100% Native)', 'family-trust-icon">🗣️</div>')
    $c = [regex]::Replace($c, 'family-trust-icon">\?\?</div>(?=\s*<h3[^>]*>Homely Indian)', 'family-trust-icon">🍛</div>')
    $c = [regex]::Replace($c, 'family-trust-icon">\?\?\?</div>(?=\s*<h3[^>]*>Guaranteed Family)', 'family-trust-icon">🛡️</div>')
    $c = [regex]::Replace($c, 'family-trust-icon">\?\?</div>(?=\s*<h3[^>]*>Transparent Pricing)', 'family-trust-icon">💎</div>')

    # Headers & Badges
    $c = $c.Replace('?? Special Offer', '✨ Special Offer')
    $c = $c.Replace('?? Special Group Offer', '🎉 Special Group Offer')
    $c = $c.Replace('?? Limited Offer', '⏳ Limited Offer')
    $c = $c.Replace('?????', '⭐⭐⭐⭐⭐')

    # Contact Info
    $c = $c.Replace('?? +91 81212 14181', '📞 +91 81212 14181')
    $c = $c.Replace('?? info@thaipackages.com', '✉️ info@thaipackages.com')
    $c = $c.Replace('?? Call:', '📞 Call:')
    $c = $c.Replace('?? Chat on WhatsApp', '💬 Chat on WhatsApp')

    # Category Pages
    $c = $c.Replace('??????????? Family Packages', '👨‍👩‍👧‍👦 Family Packages')
    $c = $c.Replace('?? Couple Packages', '💑 Couple Packages')
    $c = $c.Replace('?? Group Tours', '👥 Group Tours')
    $c = $c.Replace('?? Customized Tour Packages', '✏️ Customized Tour Packages')
    $c = $c.Replace('?? Corporate & Employee', '🏢 Corporate & Employee')
    $c = $c.Replace('?? Huge Discounts', '💸 Huge Discounts')
    $c = $c.Replace('?? Honeymoon Packages', '🥂 Honeymoon Packages')
    $c = $c.Replace('?? Passport Services', '🛂 Passport Services')
    $c = $c.Replace('?? Visa Services', '🛂 Visa Services')

    # Checklists and Icons
    $c = $c.Replace('<div class="info-alert-icon">???</div>', '<div class="info-alert-icon">ℹ️</div>')
    $c = $c.Replace('<div class="info-alert-icon">??</div>', '<div class="info-alert-icon">ℹ️</div>')
    $c = $c.Replace('<span class="checklist-icon">??</span>', '<span class="checklist-icon">✅</span>')
    $c = $c.Replace('<span class="checklist-icon">???</span>', '<span class="checklist-icon">✅</span>')
    $c = $c.Replace('<span>???</span> Pattaya Stay', '<span>🏨</span> Pattaya Stay')
    $c = $c.Replace('<span>???</span> Bangkok Stay', '<span>🏨</span> Bangkok Stay')
    $c = $c.Replace('<span>??</span> Fresh Adult', '<span>📘</span> Fresh Adult')
    $c = $c.Replace('<span>??</span> Minor Applicants', '<span>👦</span> Minor Applicants')
    $c = $c.Replace('<span>??</span> Essential Travel', '<span>📄</span> Essential Travel')
    $c = $c.Replace('<span>??</span> Proof of Adequate', '<span>💰</span> Proof of Adequate')

    # Package Detail Features
    $c = $c.Replace('???? Food:', '🍛 Food:')
    $c = $c.Replace('??? Support:', '🎧 Support:')
    $c = $c.Replace('?? Transport:', '🚐 Transport:')
    $c = $c.Replace('?? Stays:', '🏨 Stays:')
    $c = $c.Replace('???????? Pace:', '🚶‍♂️ Pace:')
    $c = $c.Replace('?? Service:', '🤝 Service:')
    $c = $c.Replace('?? Flex:', '🔄 Flex:')

    if ($orig -cne $c) {
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8NoBom)
        Write-Host "Updated Emojis: $($f.Name)"
        $changed++
    }
}
Write-Host "Total files updated: $changed"
