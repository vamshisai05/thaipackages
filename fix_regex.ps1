$files = Get-ChildItem -Filter *.html
$arrow = [char]0x2192
$rupee = [char]0x20B9
$envelope = [string]([char]0x2709) + [string]([char]0xFE0F)
$phone = [string]([char]0xD83D) + [string]([char]0xDCDE)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)

    $content = [regex]::Replace($content, '(?s)Holiday Packages <span>.*?</span>', "Holiday Packages <span>$arrow</span>")
    $content = [regex]::Replace($content, '(?s)Destinations <span>.*?</span>', "Destinations <span>$arrow</span>")
    $content = [regex]::Replace($content, '(?s)About ThaiPackages <span>.*?</span>', "About ThaiPackages <span>$arrow</span>")
    $content = [regex]::Replace($content, '(?s)Request a Quote <span>.*?</span>', "Request a Quote <span>$arrow</span>")

    $content = [regex]::Replace($content, '(?s)class="footer-direct-link">.*?\+91', "class=`"footer-direct-link`">$phone +91")
    $content = [regex]::Replace($content, '(?s)class="footer-direct-link">.*?\sinfo@thaipackages.com', "class=`"footer-direct-link`">$envelope info@thaipackages.com")

    $content = [regex]::Replace($content, '(?s)\(from .*?19,900\)', "(from $rupee`19,900)")

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
Write-Output "Fixed via Regex Unicode Strings"
