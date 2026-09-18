$content = Get-Content .\index.html -Raw
# 1. Remove Hero Badges
$content = $content -replace '(?s)<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">.*?</div>\s*<h1>', '<h1>'

# 2. Modify Featured Best Sellers Section
# Replace the carousel-controls in section-header
$content = $content -replace '(?s)<div class="carousel-controls">.*?</div>\s*</div>\s*<div class="featured-carousel-container" id="homeFeaturedGrid">', '</div>
        <div class="carousel-wrapper">
          <button class="carousel-btn prev-btn" aria-label="Previous Package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="featured-carousel-container" id="homeFeaturedGrid">'

# Add closing div for carousel-wrapper and next button
$content = $content -replace '(?s)(</article>\s*)\s*</div>\s*</div>\s*</section>', '$1
          </div>
          <button class="carousel-btn next-btn" aria-label="Next Package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>'

# 3. Move "Thailand With The Comfort Of Home" Section
# Extract the section
$regex = '(?s)<!-- 2\. Value Proposition / Feature Grid -->\s*<section class="section-family-trust" id="about">.*?</section>\s*'
$match = [regex]::Match($content, $regex)
if ($match.Success) {
    $familySection = $match.Value
    # Remove from current location
    $content = $content -replace $regex, ''
    
    # Insert after reviews section
    $reviewsRegex = '(?s)(<!-- 4\. Happy Travellers \(Reviews Section\) -->.*?id="reviews".*?</section>\s*)'
    $content = $content -replace $reviewsRegex, "`$1`n    $familySection"
}

[System.IO.File]::WriteAllText(".\index.html", $content, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Reordered index.html successfully"
