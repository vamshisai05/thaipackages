$css = @"

/* 7. Featured Package Carousel */
.carousel-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.carousel-btn {
  background-color: #ffffff;
  border: 1px solid var(--border-color, #e5e7eb);
  color: var(--teal-900);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.carousel-btn:hover {
  background-color: var(--teal-50);
  border-color: var(--teal-200);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.carousel-btn:active {
  transform: translateY(0);
}

.carousel-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.featured-carousel-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 20px;
  padding-bottom: 24px;
  /* Hide scrollbar for clean design */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.featured-carousel-container::-webkit-scrollbar {
  display: none;
}

/* Compact Package Card (Carousel) */
.package-card.compact {
  flex: 0 0 100%;
  scroll-snap-align: start;
  border-radius: 12px;
}

.package-card.compact .package-media-wrap {
  height: 200px;
  border-radius: 12px 12px 0 0;
}

.package-card.compact .package-badge-tag {
  top: 12px;
  left: 12px;
  font-size: 11px;
  padding: 4px 10px;
}

.package-card.compact .package-duration-tag {
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  padding: 4px 10px;
}

.package-card.compact .package-card-body {
  padding: 20px;
}

.package-card.compact .package-destination {
  font-size: 11px;
  margin-bottom: 6px;
}

.package-card.compact h3 {
  font-size: 18px;
  margin-bottom: 10px;
  line-height: 1.3;
}

.package-card.compact p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  /* Line clamp for description */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.package-card.compact .package-feature-pills {
  gap: 6px;
  margin-bottom: 20px;
}

.package-card.compact .pill-feature {
  font-size: 11px;
  padding: 4px 8px;
}

.package-card.compact .package-card-footer {
  padding-top: 16px;
  margin-top: auto;
}

.package-card.compact .package-price-label {
  font-size: 11px;
}

.package-card.compact .package-price-value {
  font-size: 18px;
}

/* Responsive Rules for Carousel */
@media (min-width: 768px) {
  .package-card.compact {
    flex: 0 0 calc(50% - 10px);
  }
}

@media (min-width: 1024px) {
  .package-card.compact {
    flex: 0 0 calc(33.333% - 13.33px);
  }
}
"@

Add-Content -Path .\css\style.css -Value $css
Write-Host "CSS Appended successfully"
