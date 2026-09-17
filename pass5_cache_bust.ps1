$htmlFiles = Get-ChildItem -Filter *.html

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw

    # Add cache buster to css/style.css
    # Only replace if it doesn't already have ?v=2.0
    $content = $content -replace 'href="css/style\.css(?![\?])"', 'href="css/style.css?v=2.0"'

    # Add cache buster to js/app.js
    $content = $content -replace 'src="js/app\.js(?![\?])"', 'src="js/app.js?v=2.0"'

    # Add cache buster to context/index.js
    $content = $content -replace 'src="context/index\.js(?![\?])"', 'src="context/index.js?v=2.0"'

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated cache-busters in: $($file.Name)"
}

Write-Host "Pass 5 cache-busting complete."
