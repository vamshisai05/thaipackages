$content = Get-Content .\css\style.css -Raw

# 1. Update sidebar padding
$content = $content -replace '(\.drawer-menu a\s*\{[^}]*?padding:\s*)12px\s*0;', '${1}8px 0;'
$content = $content -replace '(\.submenu-toggle\s*\{[^}]*?padding:\s*)12px\s*0;', '${1}8px 0;'

# 2. Replace the old Carousel block
$regex = '(?s)/\* 7\. Featured Package Carousel \*/.*$'
$newCss = @"
/* 7. Featured Package Carousel (Pass 7 Track Layout) */
#packages {
  padding-bottom: 32px;
  margin-bottom: 0;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.carousel-controls {
  display: none; /* Removed from header */
}

.carousel-btn {
  background-color: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  color: var(--teal-900);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  flex-shrink: 0;
}

.carousel-btn:hover {
  background-color: var(--teal-50);
  border-color: var(--teal-200);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}

.featured-carousel-container {
  flex: 1;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 16px;
  padding-bottom: 16px;
  /* Hide scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.featured-carousel-container::-webkit-scrollbar {
  display: none;
}

/* Compact Package Card (Ultra Compact for Pass 7) */
.package-card.compact {
  flex: 0 0 100%;
  scroll-snap-align: start;
  border-radius: 12px;
}

.package-card.compact .package-media-wrap {
  height: 160px; /* Reduced from 200px */
  border-radius: 12px 12px 0 0;
}

.package-card.compact .package-badge-tag {
  top: 10px;
  left: 10px;
  font-size: 10px;
  padding: 3px 8px;
}

.package-card.compact .package-duration-tag {
  bottom: 10px;
  right: 10px;
  font-size: 11px;
  padding: 3px 8px;
}

.package-card.compact .package-card-body {
  padding: 16px; /* Reduced from 20px */
}

.package-card.compact .package-destination {
  font-size: 11px;
  margin-bottom: 4px;
}

.package-card.compact h3 {
  font-size: 16px; /* Reduced from 18px */
  margin-bottom: 6px;
  line-height: 1.3;
}

.package-card.compact p {
  font-size: 13px; /* Reduced from 14px */
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.package-card.compact .package-feature-pills {
  gap: 4px;
  margin-bottom: 16px;
}

.package-card.compact .pill-feature {
  font-size: 10px;
  padding: 3px 6px;
}

.package-card.compact .package-card-footer {
  padding-top: 12px;
  margin-top: auto;
}

.package-card.compact .package-price-label {
  font-size: 11px;
}

.package-card.compact .package-price-value {
  font-size: 16px;
}

/* Responsive Rules for Carousel Widths (Card gap = 16px) */
@media (min-width: 768px) {
  .package-card.compact {
    flex: 0 0 calc(50% - 8px);
  }
}

@media (min-width: 1024px) {
  .package-card.compact {
    flex: 0 0 calc(33.333% - 10.66px);
  }
}

@media (min-width: 1280px) {
  .package-card.compact {
    flex: 0 0 calc(25% - 12px);
  }
}
"@

$content = $content -replace $regex, $newCss

[System.IO.File]::WriteAllText(".\css\style.css", $content, (New-Object System.Text.UTF8Encoding $false))
Write-Host "Updated style.css successfully"
