$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $content = $content.Replace('â†’', '→')
    $content = $content.Replace('ðŸ“ž', '📞')
    $content = $content.Replace('âœ‰ï¸ ', '✉️ ')
    $content = $content.Replace('âœ‰ï¸', '✉️')
    $content = $content.Replace('â‚¹', '₹')
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
Write-Output "Fixed encoding"
