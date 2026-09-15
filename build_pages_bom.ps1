$about = [System.IO.File]::ReadAllText("c:\Users\theva\OneDrive\Desktop\thaipackages\about.html", [System.Text.Encoding]::UTF8)

$mainStart = $about.IndexOf('<main>')
$mainEnd = $about.IndexOf('</main>') + 7

$headerPart = $about.Substring(0, $mainStart)
$footerPart = $about.Substring($mainEnd)

# Clean up active nav link
$headerPart = $headerPart -replace 'class="nav-link active"', 'class="nav-link"'

$bangkokMain = @"
<main>
    <header class="page-intro-header">
      <div class="container">
        <span class="eyebrow light">6 Days / 5 Nights</span>
        <h1>Bangkok & Pattaya Super Saver</h1>
        <p>Starting from ₹19,900</p>
      </div>
    </header>
    <section class="section">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <h2 style="margin-bottom: 24px;">Package Details</h2>
        <p style="margin-bottom: 16px;">Our signature 5N/6D holiday with 3N Pattaya Sea-View Condo + 2N Bangkok Luxury Condo, private kitchen, 100% private AC transfers & Telugu-speaking guide options.</p>
        <div style="background: #f1f5f9; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; margin: 0;">
                <li>🗣️ Telugu Guides</li>
                <li>🏢 3N Pattaya Condo</li>
                <li>🏢 2N Bangkok Condo</li>
                <li>🍽️ Indian Food</li>
                <li>🚗 100% Private AC</li>
            </ul>
        </div>
        <a href="https://wa.me/918121214181?text=Hi%20ThaiPackages,%20I'm%20interested%20in%20the%20Bangkok%20%26%20Pattaya%20Super%20Saver%20package." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block text-center" style="display: block; padding: 16px;">Book on WhatsApp →</a>
      </div>
    </section>
  </main>
"@

$phuketMain = @"
<main>
    <header class="page-intro-header">
      <div class="container">
        <span class="eyebrow light">7 Days / 6 Nights</span>
        <h1>Phuket & Krabi Romantic Island Escape</h1>
        <p>Starting from ₹29,999</p>
      </div>
    </header>
    <section class="section">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <h2 style="margin-bottom: 24px;">Package Details</h2>
        <p style="margin-bottom: 16px;">An idyllic 7-day Andaman holiday pairing lively Phuket beaches with Krabi's dramatic limestone karsts, 100% private transfers and island cruises.</p>
        <div style="background: #f1f5f9; padding: 24px; border-radius: 12px; margin-bottom: 32px;">
            <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; margin: 0;">
                <li>🏖️ Beachfront Resorts</li>
                <li>🛥️ Phi Phi Speedboat</li>
                <li>🚗 100% Private AC</li>
                <li>🗣️ Telugu Support</li>
            </ul>
        </div>
        <a href="https://wa.me/918121214181?text=Hi%20ThaiPackages,%20I'm%20interested%20in%20the%20Phuket%20%26%20Krabi%20Romantic%20Island%20Escape%20package." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block text-center" style="display: block; padding: 16px;">Book on WhatsApp →</a>
      </div>
    </section>
  </main>
"@

$bangkokFull = $headerPart + $bangkokMain + $footerPart
$phuketFull = $headerPart + $phuketMain + $footerPart

[System.IO.File]::WriteAllText("c:\Users\theva\OneDrive\Desktop\thaipackages\bangkok-pattaya-saver.html", $bangkokFull, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("c:\Users\theva\OneDrive\Desktop\thaipackages\phuket-krabi-escape.html", $phuketFull, [System.Text.Encoding]::UTF8)

Write-Output "Pages created successfully"
