/* ==========================================================================
   ThaiPackages — Motion & Micro-interaction Controller
   Works on every page; safe to load alongside app.js.
   - Scroll progress bar + smart (hide/show) header
   - Scroll-reveal for sections, headers and card grids (incl. JS-rendered ones)
   - Animated number counters
   - Pointer tilt + glare on cards (fine pointers only)
   - Button click ripple
   - Back-to-top button with progress ring
   - Carousel position dots
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* ------------------------------------------------------------------------
     1. Scroll progress + smart header + back-to-top (single rAF loop)
     ------------------------------------------------------------------------ */
  var progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  var header = $('.site-header');
  var stickyActions = $('.global-sticky-actions');
  var backTop = null;
  var ringBar = null;
  var RING_LEN = 125.66; // 2 * PI * 20

  /* Highlight the current section in the desktop nav */
  (function () {
    // Normalise clean URLs (/packages) and file URLs (/packages.html) to the same key
    var page = (location.pathname.split('/').pop() || 'index').toLowerCase().replace(/\.html$/, '') + '.html';
    var groups = {
      'destinations.html': 1, 'destination-detail.html': 1,
      'packages.html': 2, 'package-detail.html': 2, 'family-packages.html': 2, 'couple-packages.html': 2,
      'bachelor-packages.html': 2, 'honeymoon-packages.html': 2, 'group-tours.html': 2, 'customized-packages.html': 2,
      'flights.html': 3, 'visa-services.html': 3, 'passport-services.html': 3, 'visa.html': 3, 'passport.html': 3, 'digital-arrival-card.html': 3,
      'about.html': 4, 'contact.html': 5
    };
    var links = $$('.dnav > li > .dnav-link');
    var idx = groups.hasOwnProperty(page) ? groups[page] : (page === 'index.html' ? 0 : -1);
    if (links[idx]) links[idx].classList.add('active');
  })();

  /* Upgrade the floating call / WhatsApp buttons into two distinct widgets */
  if (stickyActions) {
    stickyActions.classList.add('tp-widgets');
    document.body.classList.add('has-contact-widgets');
    var callBtn = $('.btn-call', stickyActions);
    var waBtn = $('.btn-whatsapp', stickyActions);
    if (callBtn) {
      var callLabel = $('.sticky-action-label', callBtn);
      if (callLabel) {
        callLabel.innerHTML = '<small>Call our experts</small><strong>+91 81212 14181</strong>';
      }
      callBtn.insertAdjacentHTML('beforeend', '<span class="widget-mobile-text">Call Now</span>');
    }
    if (waBtn) {
      var waLabel = $('.sticky-action-label', waBtn);
      if (waLabel) {
        waLabel.innerHTML = '<small>Plan your trip on</small><strong>WhatsApp Chat</strong>';
      }
      waBtn.insertAdjacentHTML('afterbegin', '<span class="wa-online-dot" aria-hidden="true"></span>');
      waBtn.insertAdjacentHTML('beforeend', '<span class="widget-mobile-text">WhatsApp</span>');
    }
  }

  if (stickyActions) {
    backTop = document.createElement('button');
    backTop.type = 'button';
    backTop.className = 'back-to-top';
    backTop.setAttribute('aria-label', 'Back to top');
    backTop.innerHTML =
      '<svg class="ring" viewBox="0 0 46 46" aria-hidden="true"><circle class="track" cx="23" cy="23" r="20"/><circle class="bar" cx="23" cy="23" r="20"/></svg>' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    stickyActions.insertBefore(backTop, stickyActions.firstChild);
    ringBar = backTop.querySelector('.bar');
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  var lastY = window.scrollY;
  var ticking = false;

  function onScrollFrame() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;

    progress.style.transform = 'scaleX(' + ratio + ')';

    if (header) {
      header.classList.toggle('is-compact', y > 60);
      var drawerOpen = document.body.classList.contains('drawer-open');
      if (!drawerOpen && y > 320 && y > lastY + 4) {
        header.classList.add('nav-hidden');
      } else if (y < lastY - 4 || y <= 320 || drawerOpen) {
        header.classList.remove('nav-hidden');
      }
    }

    if (backTop) {
      backTop.classList.toggle('show', y > 600);
      if (ringBar) ringBar.style.strokeDashoffset = String(RING_LEN * (1 - ratio));
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(onScrollFrame);
    }
  }, { passive: true });
  window.addEventListener('resize', onScrollFrame, { passive: true });
  onScrollFrame();

  /* ------------------------------------------------------------------------
     2. Scroll reveal
     ------------------------------------------------------------------------ */
  var SINGLE_SELECTORS = [
    '.section-header',
    '.info-section-header',
    '.group-discount-banner',
    '.final-cta-inner',
    '.info-cta-banner',
    '.info-alert-box',
    '.city-description-block',
    '.detail-block',
    '.story-img-wrap',
    '.contact-form-card',
    '.footer-bottom'
  ];

  var GROUP_SELECTORS = [
    '.carousel-track',
    '.family-trust-grid',
    '.reviews-grid',
    '.packages-grid',
    '.destinations-grid',
    '.commitments-visual-grid',
    '.step-grid-4',
    '.step-flow-grid',
    '.checklist-grid',
    '.info-faq-grid',
    '.footer-top-grid',
    '.stats-strip',
    '.cat-highlights'
  ];

  function setGroupIndexes(group) {
    var kids = group.children;
    for (var i = 0; i < kids.length; i++) {
      // Cap stagger so long lists don't take forever to appear
      kids[i].style.setProperty('--i', String(Math.min(i, 5)));
    }
  }

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px 80px 0px' });

    $$(SINGLE_SELECTORS.join(',')).forEach(function (el) {
      // Skip anything inside the hero (it has its own entrance animation)
      if (el.closest('.hero-section, .info-hero')) return;
      el.classList.add('reveal');
      io.observe(el);
    });

    $$(GROUP_SELECTORS.join(',')).forEach(function (group) {
      group.classList.add('reveal-group');
      setGroupIndexes(group);
      io.observe(group);
      // Re-index when app.js renders/filter-updates cards into the grid
      if ('MutationObserver' in window) {
        new MutationObserver(function () { setGroupIndexes(group); })
          .observe(group, { childList: true });
      }
    });

    // Safety net: if something never intersects (e.g. hidden tab), show it anyway
    window.addEventListener('load', function () {
      setTimeout(function () {
        $$('.reveal:not(.is-visible), .reveal-group:not(.is-visible)').forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-visible');
        });
      }, 400);
    });
  }

  /* Pause looping background animations while their section is off-screen (saves CPU/battery) */
  if ('IntersectionObserver' in window) {
    var pauseIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('tp-offscreen', !e.isIntersecting); });
    }, { rootMargin: '100px 0px' });
    $$('.hero-section, .group-discount-banner, .section-aurora, .final-cta-section').forEach(function (el) {
      pauseIo.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     3. Number counters  <span data-count-to="25" data-suffix="%">
     ------------------------------------------------------------------------ */
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
    var dur = 900;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  var counters = $$('[data-count-to]');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (c) { cio.observe(c); });
    } else {
      counters.forEach(runCounter);
    }
  }

  /* ------------------------------------------------------------------------
     4. Tilt + glare on cards (delegated, so JS-rendered cards work too)
     ------------------------------------------------------------------------ */
  var TILT_SELECTOR = '.package-card, .destination-card, .commitment-card-visual, .review-card';

  if (finePointer && !reduceMotion) {
    var activeCard = null;

    document.addEventListener('pointermove', function (e) {
      var card = e.target.closest ? e.target.closest(TILT_SELECTOR) : null;
      if (activeCard && activeCard !== card) resetCard(activeCard);
      if (!card) { activeCard = null; return; }
      activeCard = card;
      card.classList.add('tp-glare', 'tp-tilting');
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var rx = (0.5 - py) * 4;
      var ry = (px - 0.5) * 5;
      card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      card.style.transform =
        'perspective(1000px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-6px)';
    }, { passive: true });

    document.addEventListener('pointerleave', function () {
      if (activeCard) resetCard(activeCard);
      activeCard = null;
    });

    function resetCard(card) {
      card.classList.remove('tp-tilting');
      card.style.transform = '';
    }
  }

  /* ------------------------------------------------------------------------
     5. Ripple on buttons
     ------------------------------------------------------------------------ */
  if (!reduceMotion) {
    document.addEventListener('pointerdown', function (e) {
      var btn = e.target.closest ? e.target.closest('.btn, .group-discount-btn') : null;
      if (!btn) return;
      var r = btn.getBoundingClientRect();
      var size = Math.max(r.width, r.height);
      var ink = document.createElement('span');
      ink.className = 'tp-ripple';
      ink.style.width = ink.style.height = size + 'px';
      ink.style.left = (e.clientX - r.left - size / 2) + 'px';
      ink.style.top = (e.clientY - r.top - size / 2) + 'px';
      btn.appendChild(ink);
      setTimeout(function () { ink.remove(); }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     6. Carousel position dots
     ------------------------------------------------------------------------ */
  $$('.featured-carousel-container').forEach(function (scroller) {
    var track = $('.carousel-track', scroller);
    var wrapper = scroller.closest('.carousel-wrapper');
    if (!track || !wrapper) return;

    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    dotsWrap.setAttribute('role', 'tablist');
    dotsWrap.setAttribute('aria-label', 'Package carousel position');
    wrapper.parentNode.insertBefore(dotsWrap, wrapper.nextSibling);

    function pages() {
      var cards = track.children;
      if (!cards.length) return 0;
      var visible = Math.max(1, Math.round(scroller.clientWidth / cards[0].getBoundingClientRect().width));
      return Math.max(1, cards.length - visible + 1);
    }

    function build() {
      var n = pages();
      dotsWrap.innerHTML = '';
      if (n <= 1) { dotsWrap.style.display = 'none'; return; }
      dotsWrap.style.display = '';
      for (var i = 0; i < n; i++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Go to package ' + (i + 1));
        (function (idx) {
          b.addEventListener('click', function () {
            var card = track.children[idx];
            if (card) scroller.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
          });
        })(i);
        dotsWrap.appendChild(b);
      }
      sync();
    }

    function sync() {
      var cards = track.children;
      if (!cards.length) return;
      var step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '16');
      var idx = Math.round(scroller.scrollLeft / step);
      var dots = dotsWrap.children;
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.toggle('active', i === Math.min(idx, dots.length - 1));
      }
    }

    scroller.addEventListener('scroll', function () { window.requestAnimationFrame(sync); }, { passive: true });
    window.addEventListener('resize', build, { passive: true });
    window.addEventListener('load', build);
    build();
  });
})();
