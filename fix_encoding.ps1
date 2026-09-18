$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, (New-Object System.Text.UTF8Encoding $false))
    $content = $content.Replace('â†’', '→')
    $content = $content.Replace('ðŸ“ž', '📞')
    $content = $content.Replace('âœ‰ï¸ ', '✉️ ')
    $content = $content.Replace('âœ‰ï¸', '✉️')
    $content = $content.Replace('â‚¹', '₹')
    [System.IO.File]::WriteAllText($file.FullName, $content, (New-Object System.Text.UTF8Encoding $false))
}
Write-Output "Fixed encoding"
