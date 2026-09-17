# 1. Fix style.css (Bug 1 & Bug 3)
$stylePath = "c:\Users\theva\OneDrive\Desktop\thaipackages\css\style.css"
if (Test-Path $stylePath) {
    $css = Get-Content -Raw -Path $stylePath -Encoding UTF8
    $oldDesc = '(?s)display:\s*-webkit-box;\s*-webkit-line-clamp:\s*2;\s*-webkit-box-orient:\s*vertical;\s*overflow:\s*hidden;\s*min-height:\s*36px;'
    $newDesc = "display: -webkit-box;`n  -webkit-line-clamp: 3;`n  -webkit-box-orient: vertical;`n  overflow: hidden;`n  text-overflow: ellipsis;"
    $css = $css -replace $oldDesc, $newDesc
    
    # Fix mobile carousel width (100cqw to 85vw)
    $css = $css -replace 'calc\(100cqw\)', '85vw'
    
    Set-Content -Path $stylePath -Value $css -Encoding UTF8
    Write-Output "Fixed style.css"
}

# 2. Fix app.js (Bug 2, Bug 3, Bug 4)
$appPath = "c:\Users\theva\OneDrive\Desktop\thaipackages\js\app.js"
if (Test-Path $appPath) {
    $app = Get-Content -Raw -Path $appPath -Encoding UTF8
    
    # Bug 2: Remove feature pills container
    $app = $app -replace '(?is)<div class="package-feature-pills">.*?</div>', ''
    
    # Bug 3: Fix Carousel JS width computation
    $app = $app -replace 'let cardsVisible = 1;', 'let cardsVisible = 1.15;'
    
    # Bug 4: Replace broken image
    $app = $app -replace '1598970434795-0c54fe7c0648', '1549880338-65dd4bc8a4d4'
    
    Set-Content -Path $appPath -Value $app -Encoding UTF8
    Write-Output "Fixed app.js"
}

# 3. Fix index.html (Bug 2, Bug 4)
$indexPath = "c:\Users\theva\OneDrive\Desktop\thaipackages\index.html"
if (Test-Path $indexPath) {
    $html = Get-Content -Raw -Path $indexPath -Encoding UTF8
    
    # Bug 2: Remove feature pills container
    $html = $html -replace '(?is)<div class="package-feature-pills">.*?</div>', ''
    
    # Bug 4: Replace broken image
    $html = $html -replace '1598970434795-0c54fe7c0648', '1549880338-65dd4bc8a4d4'
    
    Set-Content -Path $indexPath -Value $html -Encoding UTF8
    Write-Output "Fixed index.html"
}

Write-Output "ALL UI FIXES APPLIED SUCCESSFULLY VIA POWERSHELL"
