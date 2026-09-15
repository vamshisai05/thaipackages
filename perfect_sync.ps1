$index = [System.IO.File]::ReadAllText("c:\Users\theva\OneDrive\Desktop\thaipackages\index.html", [System.Text.Encoding]::UTF8)

$drawerStart = $index.IndexOf('<ul class="drawer-menu">')
$drawerEnd = $index.IndexOf('</ul>', $drawerStart) + 5
$drawerMenu = $index.Substring($drawerStart, $drawerEnd - $drawerStart)

$footerStart = $index.IndexOf('<footer class="site-footer" id="contact">')
$footerEnd = $index.IndexOf('</footer>', $footerStart) + 9
$footer = $index.Substring($footerStart, $footerEnd - $footerStart)

$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -eq "index.html") { continue }
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
