$ErrorActionPreference = 'Stop'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$files = Get-ChildItem -Path 'c:\Users\theva\OneDrive\Desktop\thaipackages' -Filter '*.html'
$changed = 0

foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8NoBom)
    $orig = $c
    
    # 1. Currency Symbols
    $c = [regex]::Replace($c, '\?(\d{1,2},\d{3})', '₹$1')
    $c = $c.Replace('? ?0', '₹ ₹0')
    $c = $c.Replace('Free (?0', 'Free (₹0')
    $c = $c.Replace('approx ?4,800', 'approx ₹4,800')

    # 2. Directional Arrows
    $c = $c.Replace('? Back to Destinations', '← Back to Destinations')
    $c = $c.Replace('? Back to Packages', '← Back to Packages')

    # 3. Checklists in package-detail
    $c = $c.Replace('? Inclusions', '✅ Inclusions')
    $c = $c.Replace('? Exclusions', '❌ Exclusions')

    # 4. Pace Icon (Replacing corrupted black diamond / star remnants)
    $c = [regex]::Replace($c, '<li><strong>[^<]+Pace:</strong>', '<li><strong>🚶‍♂️ Pace:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Food:</strong>', '<li><strong>🍛 Food:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Support:</strong>', '<li><strong>🎧 Support:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Transport:</strong>', '<li><strong>🚐 Transport:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Stays:</strong>', '<li><strong>🏨 Stays:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Service:</strong>', '<li><strong>🤝 Service:</strong>')
    $c = [regex]::Replace($c, '<li><strong>[^<]+Flex:</strong>', '<li><strong>🔄 Flex:</strong>')


    if ($orig -cne $c) {
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8NoBom)
        Write-Host "Updated: $($f.Name)"
        $changed++
    }
}
Write-Host "Total files updated: $changed"
