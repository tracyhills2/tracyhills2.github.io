/* ==========================================================================
   Tracy Hills II - Interactive Application Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollToTop();
  initDynamicYear();
  initMobileOnboardingTour();
  
  if (document.getElementById('announcements-list-container')) {
    initAnnouncements();
  }

  if (document.getElementById('faq-list-container')) {
    initFaqPage();
  }
  
  if (document.getElementById('providers-grid-container')) {
    initProvidersPage();
  }
});

/* --------------------------------------------------------------------------
   Dynamic Copyright Year Generator
   -------------------------------------------------------------------------- */
function initDynamicYear() {
  const currentYear = new Date().getFullYear();
  const yearElements = document.querySelectorAll('.dynamic-year, #current-year');
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

/* --------------------------------------------------------------------------
   Mobile Navigation Drawer Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (!toggleBtn || !overlay) return;

  function openDrawer() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   First-Time Mobile Interactive Onboarding Tour
   -------------------------------------------------------------------------- */
function initMobileOnboardingTour() {
  const isMobile = window.innerWidth < 840;
  const tourSeen = localStorage.getItem('tracyHillsMobileTourSeen');
  
  // Expose global helper for easy testing/replay if needed
  window.resetMobileTour = function() {
    localStorage.removeItem('tracyHillsMobileTourSeen');
    location.reload();
  };

  if (!isMobile || tourSeen) return;

  const menuBtn = document.querySelector('[data-tour="menu-toggle"]') || document.getElementById('mobile-menu-toggle');
  const drawerOverlay = document.getElementById('mobile-nav-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links .nav-link');
  const siteHeader = document.querySelector('.site-header');

  if (!menuBtn) return;

  // 3.5 second delay allowing user to review the home page first
  let tourTimer = setTimeout(() => {
    startStep1();
  }, 3500);

  // If user opens the menu on their own during the 3.5s delay, mark tour seen & cancel timer!
  function handleEarlyMenuClick() {
    clearTimeout(tourTimer);
    localStorage.setItem('tracyHillsMobileTourSeen', 'true');
    menuBtn.removeEventListener('click', handleEarlyMenuClick);
  }
  menuBtn.addEventListener('click', handleEarlyMenuClick);

  let backdrop, pointer, tourCard;

  function cleanup() {
    if (backdrop) backdrop.remove();
    if (pointer) pointer.remove();
    if (tourCard) tourCard.remove();
    menuBtn.classList.remove('tour-spotlight');
    if (siteHeader) siteHeader.classList.remove('tour-header-active');
    drawerLinks.forEach(link => link.classList.remove('tour-highlight-pulse'));
    document.body.style.overflow = '';
    localStorage.setItem('tracyHillsMobileTourSeen', 'true');
  }

  function positionPointer() {
    if (!pointer || !menuBtn) return;
    const rect = menuBtn.getBoundingClientRect();
    pointer.style.top = (rect.bottom + 6) + 'px';
    pointer.style.right = (window.innerWidth - rect.right) + 'px';
  }

  function startStep1() {
    // Elevate site-header stacking context so the spotlighted menu button is above backdrop
    if (siteHeader) siteHeader.classList.add('tour-header-active');

    // Backdrop
    backdrop = document.createElement('div');
    backdrop.className = 'tour-backdrop active';
    document.body.appendChild(backdrop);

    // Spotlight menu toggle
    menuBtn.classList.add('tour-spotlight');

    // Pointer Hand Animation
    pointer = document.createElement('div');
    pointer.className = 'tour-pointer-container';
    pointer.innerHTML = `<span class="tour-pointer-hand">👆</span>`;
    document.body.appendChild(pointer);
    positionPointer();

    // Onboarding Card
    tourCard = document.createElement('div');
    tourCard.className = 'tour-card active';
    tourCard.innerHTML = `
      <div class="tour-card-header">
        <span class="tour-step-badge">Step 1 of 2</span>
        <button class="tour-card-close" id="tour-close-btn" aria-label="Close tour">✕</button>
      </div>
      <div class="tour-card-title">Explore Community Pages 📱</div>
      <div class="tour-card-body">
        Tap the <strong>MENU</strong> button in the top-right corner to easily access Quick Contacts, Service Providers, FAQs, and About info.
      </div>
      <div class="tour-card-footer">
        <button class="tour-btn-skip" id="tour-skip-btn">Skip</button>
        <button class="tour-btn-primary" id="tour-step1-next">Explore Menu Now →</button>
      </div>
    `;
    document.body.appendChild(tourCard);

    // Event Listeners for Step 1
    document.getElementById('tour-close-btn').addEventListener('click', cleanup);
    document.getElementById('tour-skip-btn').addEventListener('click', cleanup);

    const step1NextBtn = document.getElementById('tour-step1-next');
    
    function goToStep2() {
      // Open the drawer
      if (drawerOverlay) drawerOverlay.classList.add('open');
      menuBtn.classList.remove('tour-spotlight');
      if (siteHeader) siteHeader.classList.remove('tour-header-active');
      if (pointer) pointer.style.display = 'none';
      startStep2();
    }

    step1NextBtn.addEventListener('click', goToStep2);
    menuBtn.addEventListener('click', function handleMenuClickOnce() {
      menuBtn.removeEventListener('click', handleMenuClickOnce);
      goToStep2();
    }, { once: true });

    window.addEventListener('resize', positionPointer);
  }

  function startStep2() {
    // Highlight links inside drawer
    drawerLinks.forEach(link => link.classList.add('tour-highlight-pulse'));

    tourCard.innerHTML = `
      <div class="tour-card-header">
        <span class="tour-step-badge">Step 2 of 2</span>
        <button class="tour-card-close" id="tour-close-btn2" aria-label="Close tour">✕</button>
      </div>
      <div class="tour-card-title">All Options Right Here ✨</div>
      <div class="tour-card-body">
        Select <strong>Quick Contacts</strong> for city & HOA numbers, <strong>Service Providers</strong> for resident-recommended vendors, or <strong>FAQ</strong> for answers.
      </div>
      <div class="tour-card-footer" style="justify-content: flex-end;">
        <button class="tour-btn-primary" id="tour-finish-btn">Awesome, Got It!</button>
      </div>
    `;

    document.getElementById('tour-close-btn2').addEventListener('click', cleanup);
    document.getElementById('tour-finish-btn').addEventListener('click', cleanup);
  }
}

/* --------------------------------------------------------------------------
   Scroll To Top
   -------------------------------------------------------------------------- */
function initScrollToTop() {
  const topBtns = document.querySelectorAll('.scroll-to-top-btn');
  topBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Create & mount Floating Scroll-to-Top Action Button
  let floatingBtn = document.querySelector('.floating-top-btn');
  if (!floatingBtn) {
    floatingBtn = document.createElement('button');
    floatingBtn.className = 'floating-top-btn';
    floatingBtn.setAttribute('aria-label', 'Scroll to top');
    floatingBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`;
    document.body.appendChild(floatingBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      floatingBtn.classList.add('visible');
    } else {
      floatingBtn.classList.remove('visible');
    }
  });

  floatingBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --------------------------------------------------------------------------
   FAQ Page Interactive Filtering & Accordions
   -------------------------------------------------------------------------- */
function initFaqPage() {
  const container = document.getElementById('faq-list-container');
  const searchInput = document.getElementById('faq-search-input');
  const categoryPillsContainer = document.getElementById('faq-categories-container');
  const noResultsContainer = document.getElementById('faq-no-results');
  const clearBtn = document.getElementById('faq-clear-search');

  let currentCategory = 'All';
  let currentSearchQuery = '';
  let targetIdFromUrl = '';

  // Parse URL parameters and Hash (#solar, #faq-013, ?q=solar, ?id=faq-013, ?category=Utilities)
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q') || urlParams.get('search');
  const catParam = urlParams.get('category') || urlParams.get('cat');
  const idParam = urlParams.get('id');
  const hashParam = window.location.hash ? window.location.hash.substring(1).toLowerCase() : '';

  if (catParam) {
    const decodedCat = decodeURIComponent(catParam).trim();
    const matchedCat = [
      'HOA', 'Seabreeze', 'City Services', 'Lennar / Developer', 
      'Utilities', 'Safety', 'Community Resources', 'WhatsApp / Communication'
    ].find(c => c.toLowerCase() === decodedCat.toLowerCase());
    if (matchedCat) currentCategory = matchedCat;
  }

  if (idParam) {
    targetIdFromUrl = idParam.toLowerCase();
  } else if (hashParam) {
    targetIdFromUrl = hashParam;
  }

  if (qParam) {
    currentSearchQuery = qParam;
    if (searchInput) searchInput.value = qParam;
  } else if (targetIdFromUrl === 'solar' || targetIdFromUrl === 'faq-013') {
    currentSearchQuery = 'solar';
    if (searchInput) searchInput.value = 'solar';
  }

  function updateUrlState() {
    if (!window.history || !window.history.replaceState) return;
    const url = new URL(window.location.href);
    if (currentCategory && currentCategory !== 'All') {
      url.searchParams.set('category', currentCategory);
    } else {
      url.searchParams.delete('category');
      url.searchParams.delete('cat');
    }
    if (currentSearchQuery && currentSearchQuery.trim()) {
      url.searchParams.set('q', currentSearchQuery.trim());
    } else {
      url.searchParams.delete('q');
      url.searchParams.delete('search');
    }
    window.history.replaceState(null, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash);
  }

  // Inject Google FAQPage JSON-LD Structured Data for Search Engine Rich Snippets
  function injectFaqSchema() {
    if (typeof FAQ_DATA === 'undefined') return;
    const existingScript = document.getElementById('faq-schema-jsonld');
    if (existingScript) existingScript.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.map(faq => {
        const cleanAnswer = faq.answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        return {
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": cleanAnswer
          }
        };
      })
    };

    const script = document.createElement('script');
    script.id = 'faq-schema-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  injectFaqSchema();

  const CATEGORIES = [
    'All',
    'HOA',
    'Seabreeze',
    'City Services',
    'Lennar / Developer',
    'Utilities',
    'Safety',
    'Community Resources',
    'WhatsApp / Communication'
  ];

  // Render Category Tabs
  function renderCategories() {
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = '';
    
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.className = `pill-btn ${cat === currentCategory ? 'active' : ''}`;
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        currentCategory = cat;
        updateUrlState();
        renderCategories();
        renderFaqs();
      });
      categoryPillsContainer.appendChild(btn);
    });
  }

  // Render FAQs
  function renderFaqs() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = FAQ_DATA.filter((faq) => {
      const matchesCategory = currentCategory === 'All' || faq.category === currentCategory;
      const q = currentSearchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        (faq.keywords && faq.keywords.some((k) => k.toLowerCase().includes(q)));

      return matchesCategory && matchesQuery;
    });

    if (filtered.length === 0) {
      if (noResultsContainer) noResultsContainer.style.display = 'block';
    } else {
      if (noResultsContainer) noResultsContainer.style.display = 'none';

      filtered.forEach((item, index) => {
        const accordion = document.createElement('div');
        const itemId = item.id || `faq-${index}`;
        accordion.id = itemId;

        const isTarget = targetIdFromUrl && (itemId.toLowerCase() === targetIdFromUrl || (targetIdFromUrl === 'solar' && item.keywords && item.keywords.includes('solar')));
        const shouldBeOpen = isTarget || (index === 0 && currentSearchQuery);

        accordion.className = `accordion-item ${shouldBeOpen ? 'open' : ''}`;
        accordion.innerHTML = `
          <button class="accordion-header" aria-expanded="${shouldBeOpen ? 'true' : 'false'}">
            <div style="display: flex; flex-direction: column; gap: 0.25rem;">
              <span class="badge" style="align-self: flex-start;">${item.category}</span>
              <span>${item.question}</span>
            </div>
            <svg class="accordion-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="accordion-content">
            ${item.answer.trim().startsWith('<') ? item.answer : `<p>${item.answer}</p>`}
          </div>
        `;

        const headerBtn = accordion.querySelector('.accordion-header');
        headerBtn.addEventListener('click', () => {
          const isOpen = accordion.classList.contains('open');
          accordion.classList.toggle('open');
          headerBtn.setAttribute('aria-expanded', !isOpen);
        });

        container.appendChild(accordion);

        if (isTarget) {
          setTimeout(() => {
            accordion.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      });
    }
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      updateUrlState();
      renderFaqs();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'All';
      updateUrlState();
      renderCategories();
      renderFaqs();
    });
  }

  renderCategories();
  renderFaqs();
}

/* --------------------------------------------------------------------------
   Service Providers Page Interactive Search, Filtering, and Modal
   -------------------------------------------------------------------------- */
function initProvidersPage() {
  const container = document.getElementById('providers-grid-container');
  const searchInput = document.getElementById('provider-search-input');
  const categoryPillsContainer = document.getElementById('provider-categories-container');
  const noResultsContainer = document.getElementById('provider-no-results');
  const resetBtn = document.getElementById('provider-reset-filters');
  
  // Reviews & Rating System Config (Google Apps Script API Gateway)
  const REVIEWS_API_ENDPOINT = 'https://script.google.com/macros/s/AKfycby96aZEpZlcszbfba5DloErXEX_rJQFSggTZ0Dhk0jazYGiZiAdOgxgeTGAT0lYx-QmiQ/exec';
  const REVIEWS_CACHE_KEY = 'thp2_provider_reviews_cache_v2';
  const REVIEWS_CACHE_TTL = 15 * 60 * 1000; // 15 minutes cache

  let reviewsState = {
    summaries: {},
    reviews: {}
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function generateStarsHtml(rating) {
    const rounded = Math.round(Number(rating) || 0);
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += (i <= rounded) ? '★' : '<span style="color: #475569;">★</span>';
    }
    return html;
  }

  function loadReviewsCache() {
    try {
      const raw = localStorage.getItem(REVIEWS_CACHE_KEY);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.data && (Date.now() - parsed.timestamp < REVIEWS_CACHE_TTL)) {
        reviewsState = parsed.data;
        return true;
      }
    } catch (e) {
      console.warn('Reviews cache parse error:', e);
    }
    return false;
  }

  function saveReviewsCache(data) {
    try {
      localStorage.setItem(REVIEWS_CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: data
      }));
    } catch (e) {
      console.warn('Reviews cache save error:', e);
    }
  }

  async function fetchLiveReviews() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6500);
      const res = await fetch(REVIEWS_API_ENDPOINT, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      if (json && json.success) {
        reviewsState = {
          summaries: json.summaries || {},
          reviews: json.reviews || {}
        };
        saveReviewsCache(reviewsState);
        renderProviders(); // Re-render with live rating stars
      }
    } catch (err) {
      console.warn('Live reviews fetch failed, fallback active:', err);
    }
  }

  const suggestBtn = document.getElementById('suggest-vendor-btn');
  const suggestModal = document.getElementById('suggest-vendor-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseSecondary = document.getElementById('modal-close-secondary');

  let currentCategory = 'All';
  let currentSearchQuery = '';

  // Function to sync current category and search query with URL address bar
  function updateUrlState() {
    if (!window.history || !window.history.replaceState) return;
    const url = new URL(window.location.href);
    if (currentCategory && currentCategory !== 'All') {
      url.searchParams.set('category', currentCategory);
    } else {
      url.searchParams.delete('category');
      url.searchParams.delete('cat');
    }
    if (currentSearchQuery && currentSearchQuery.trim()) {
      url.searchParams.set('q', currentSearchQuery.trim());
    } else {
      url.searchParams.delete('q');
    }
    window.history.replaceState(null, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams.toString() : '') + url.hash);
  }

  // Handle URL Query Params if present (e.g. ?category=Garage Door Repair, ?cat=garage-door-repair, ?q=garage, or #Garage-Door-Repair)
  const urlParams = new URLSearchParams(window.location.search);
  const rawCatParam = urlParams.get('category') || urlParams.get('cat') || (window.location.hash ? window.location.hash.substring(1) : null);
  const qParam = urlParams.get('q');

  if (rawCatParam) {
    const decoded = decodeURIComponent(rawCatParam).trim();
    const matchedCategory = PROVIDER_CATEGORIES.find(cat => 
      cat.toLowerCase() === decoded.toLowerCase() ||
      cat.toLowerCase().replace(/[^a-z0-9]+/g, '-') === decoded.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    );
    if (matchedCategory) {
      currentCategory = matchedCategory;
    }
  }

  if (qParam && searchInput) {
    searchInput.value = qParam;
    currentSearchQuery = qParam;
  }

  // Render Category Pills with vendor counts (Desktop pills + Mobile dropdown)
  function renderCategories() {
    // 1. Populate & Synchronize Mobile Category Dropdown Selector
    const mobileSelect = document.getElementById('mobile-category-select');
    if (mobileSelect) {
      mobileSelect.innerHTML = '';
      const allOpt = document.createElement('option');
      allOpt.value = 'All';
      allOpt.textContent = `All Categories (${PROVIDERS_DATA.length})`;
      allOpt.selected = currentCategory === 'All';
      mobileSelect.appendChild(allOpt);

      PROVIDER_CATEGORIES.forEach((cat) => {
        const count = PROVIDERS_DATA.filter((p) => p.category === cat || (p.categories && p.categories.includes(cat))).length;
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = `${cat} ${count > 0 ? `(${count})` : ''}`;
        opt.selected = cat === currentCategory;
        if (count === 0) opt.disabled = true;
        mobileSelect.appendChild(opt);
      });
      mobileSelect.value = currentCategory;
    }

    // 2. Populate Desktop Category Pills
    if (!categoryPillsContainer) return;
    categoryPillsContainer.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `pill-btn ${currentCategory === 'All' ? 'active' : ''}`;
    allBtn.textContent = `All (${PROVIDERS_DATA.length})`;
    allBtn.addEventListener('click', () => {
      currentCategory = 'All';
      updateUrlState();
      renderCategories();
      renderProviders();
    });
    categoryPillsContainer.appendChild(allBtn);

    PROVIDER_CATEGORIES.forEach((cat) => {
      const count = PROVIDERS_DATA.filter((p) => p.category === cat || (p.categories && p.categories.includes(cat))).length;
      const catStyle = getCategoryColor(cat);
      const isSelected = cat === currentCategory;
      const btn = document.createElement('button');
      btn.className = `pill-btn ${isSelected ? 'active' : ''}`;
      btn.style.opacity = count === 0 ? '0.45' : '1';

      if (isSelected) {
        btn.style.color = catStyle.color;
        btn.style.backgroundColor = catStyle.bg;
        btn.style.borderColor = catStyle.color;
        btn.style.boxShadow = `0 0 10px ${catStyle.border}`;
      } else {
        btn.style.color = 'var(--text-secondary)';
        btn.style.backgroundColor = 'var(--bg-surface)';
        btn.style.borderColor = 'var(--border-subtle)';
      }

      btn.innerHTML = `<span class="category-dot" style="background-color: ${catStyle.color};"></span><span>${cat} ${count > 0 ? `(${count})` : ''}</span>`;
      btn.style.display = 'inline-flex';
      btn.style.alignItems = 'center';
      btn.style.gap = '0.4rem';

      btn.addEventListener('click', () => {
        currentCategory = cat;
        updateUrlState();
        renderCategories();
        renderProviders();
      });
      categoryPillsContainer.appendChild(btn);
    });
  }

  // Create & Return Firewise 2026 Certificate Card
  function createFirewiseCard() {
    const card = document.createElement('div');
    card.className = 'firewise-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'View Firewise 2026 Certificate');

    card.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
          <span class="firewise-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            <span>Firewise USA® Site</span>
          </span>
          <span style="font-size: 0.75rem; color: #4ADE80; font-weight: 700; background: rgba(34, 197, 94, 0.15); padding: 0.15rem 0.55rem; border-radius: 4px; border: 1px solid rgba(74, 222, 128, 0.3);">2026 Certificate</span>
        </div>

        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
          Tracy Hills II Firewise Certificate
        </h3>
        <p style="color: var(--text-secondary); font-size: 0.825rem; line-height: 1.5; margin-bottom: 0.5rem;">
          Present this official 2026 Firewise USA® Site Certificate to your Homeowners Insurance agent to inquire about community wildfire risk reduction discounts.
        </p>

        <div class="firewise-preview-container">
          <img src="images/2026/Firewise-2026.jpeg" alt="Tracy Hills II Firewise USA 2026 Certificate" class="firewise-preview-img" loading="lazy">
          <div class="firewise-overlay-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            <span>Click / Tap to View Full Size</span>
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 0.65rem; margin-top: 0.25rem;">
        <span style="font-size: 0.775rem; color: var(--accent-link); font-weight: 600; display: inline-flex; align-items: center; gap: 0.3rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          Full View & Download
        </span>
        <span style="font-size: 0.725rem; color: var(--text-muted);">Format: JPEG</span>
      </div>
    `;

    card.addEventListener('click', () => openFirewiseModal());
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openFirewiseModal();
      }
    });

    return card;
  }

  // Open Full-Size Lightbox Popup Modal for Firewise Certificate
  function openFirewiseModal() {
    let modalOverlay = document.getElementById('firewise-modal-overlay');
    if (!modalOverlay) {
      modalOverlay = document.createElement('div');
      modalOverlay.id = 'firewise-modal-overlay';
      modalOverlay.className = 'firewise-lightbox-overlay';
      modalOverlay.innerHTML = `
        <div class="firewise-lightbox-container" role="dialog" aria-modal="true" aria-labelledby="firewise-modal-title">
          <div class="firewise-lightbox-header">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <h3 id="firewise-modal-title" style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin: 0;">
                Firewise USA® Community Certificate (2026)
              </h3>
            </div>
            <button id="firewise-modal-close" style="color: var(--text-muted); padding: 0.35rem; border-radius: var(--radius-sm); border: none; background: transparent; cursor: pointer;" aria-label="Close modal">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <div class="firewise-lightbox-body">
            <img src="images/2026/Firewise-2026.jpeg" alt="Tracy Hills II Firewise USA 2026 Certificate - Full View" class="firewise-lightbox-img">
          </div>
          <div class="firewise-lightbox-footer">
            <div style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.4;">
              <strong style="color: var(--text-primary);">Tracy Hills Phase II Firewise Certificate:</strong> Share this document with your home insurance representative.
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <a href="images/2026/Firewise-2026.jpeg" download="Firewise-2026.jpeg" class="btn btn-primary btn-sm" style="gap: 0.4rem; background: #16A34A; border-color: #22C55E; color: #FFFFFF;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>Download Certificate</span>
              </a>
              <button id="firewise-modal-close-btn" class="btn btn-outline btn-sm">Close</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modalOverlay);

      const closeModal = () => {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
      };

      document.getElementById('firewise-modal-close').addEventListener('click', closeModal);
      document.getElementById('firewise-modal-close-btn').addEventListener('click', closeModal);
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
          closeModal();
        }
      });
    }

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Render Providers Grid Cards
  function renderProviders() {
    if (!container) return;
    container.innerHTML = '';

    const q = currentSearchQuery.toLowerCase().trim();
    const shouldShowFirewise = (currentCategory === 'Home Insurance') ||
      (q && (q.includes('insurance') || q.includes('firewise') || q.includes('fire')));

    if (shouldShowFirewise) {
      container.appendChild(createFirewiseCard());
    }

    const filtered = PROVIDERS_DATA.filter((provider) => {
      const matchesCategory = currentCategory === 'All' || provider.category === currentCategory || (provider.categories && provider.categories.includes(currentCategory));
      if (!q) return matchesCategory;

      // Smart Keyword & Synonym Expansion
      const synonyms = [q];
      if (q.startsWith('electric')) synonyms.push('electrician', 'electrical', 'electric');
      if (q.startsWith('plumb')) synonyms.push('plumber', 'plumbing');
      if (q.startsWith('soften') || q.startsWith('water') || q.startsWith('filtrat') || q.startsWith('ro')) synonyms.push('water softener', 'water', 'softener', 'filtration', 'reverse osmosis', 'ro', 'filter');
      if (q.startsWith('contract')) synonyms.push('contractor', 'contracting');
      if (q.startsWith('handy')) synonyms.push('handyman', 'repair');
      if (q.startsWith('paint')) synonyms.push('painter', 'painting');
      if (q.startsWith('roof')) synonyms.push('roofing', 'roof');
      if (q.startsWith('garden') || q.startsWith('landscap') || q.startsWith('lawn') || q.startsWith('paver') || q.startsWith('hardscap') || q.startsWith('turf') || q.startsWith('concret') || q.startsWith('cement') || q.startsWith('stamp')) synonyms.push('gardener', 'gardening', 'landscaper', 'landscaping', 'lawn', 'paver', 'pavers', 'hardscape', 'hardscaping', 'turf', 'concrete', 'cement', 'stamped concrete');
      if (q.startsWith('blind') || q.startsWith('curtain') || q.startsWith('shade') || q.startsWith('shutter') || q.startsWith('window')) synonyms.push('blinds', 'curtains', 'shades', 'shutters', 'window');
      if (q.startsWith('grocer') || q.startsWith('food') || q.startsWith('deliver') || q.startsWith('produc')) synonyms.push('grocery', 'groceries', 'delivery', 'produce', 'food');
      if (q.startsWith('epoxy') || q.startsWith('granite') || q.startsWith('quartz') || q.startsWith('stone')) synonyms.push('epoxy', 'granite', 'quartz', 'stone', 'restoration');
      if (q.startsWith('garage') || q.startsWith('door')) synonyms.push('garage', 'door', 'repair');
      if (q.startsWith('bird') || q.startsWith('pigeon') || q.startsWith('critter') || q.startsWith('solar')) synonyms.push('bird', 'birdproof', 'birdproofing', 'pigeon', 'pigeons', 'solar', 'mesh', 'critter', 'guard');
      if (q.startsWith('pest') || q.startsWith('bug') || q.startsWith('insect') || q.startsWith('spider') || q.startsWith('ant') || q.startsWith('rodent')) synonyms.push('pest', 'pests', 'pest control', 'bugs', 'insects', 'spiders', 'ants', 'rodents', 'exterminator');
      if (q.startsWith('light') || q.startsWith('holiday') || q.startsWith('xmas') || q.startsWith('christma') || q.startsWith('govee') || q.startsWith('permanent') || q.startsWith('underglow')) synonyms.push('holiday lights', 'lights', 'lighting', 'holiday', 'christmas', 'xmas', 'permanent lights', 'govee', 'underglow');

      const matchesQuery = synonyms.some((term) =>
        provider.businessName.toLowerCase().includes(term) ||
        provider.category.toLowerCase().includes(term) ||
        provider.description.toLowerCase().includes(term) ||
        (provider.contactPerson && provider.contactPerson.toLowerCase().includes(term)) ||
        (provider.communityNotes && provider.communityNotes.toLowerCase().includes(term)) ||
        (provider.whatsAppGroup && provider.whatsAppGroup.toLowerCase().includes(term)) ||
        (provider.website && provider.website.toLowerCase().includes(term)) ||
        (provider.instagram && provider.instagram.toLowerCase().includes(term)) ||
        (provider.phone && provider.phone.includes(term)) ||
        (provider.keywords && provider.keywords.some((k) => k.toLowerCase().includes(term)))
      );

      return matchesCategory && matchesQuery;
    });

    // Group & sort vendors:
    // When on 'All' category: list in default order (by category group)
    // When inside any specific category: rank by resident provider rating (highest rating & review count first)
    if (currentCategory === 'All') {
      filtered.sort((a, b) => {
        const idxA = PROVIDER_CATEGORIES.indexOf(a.category);
        const idxB = PROVIDER_CATEGORIES.indexOf(b.category);
        const orderA = idxA === -1 ? 999 : idxA;
        const orderB = idxB === -1 ? 999 : idxB;
        if (orderA !== orderB) return orderA - orderB;
        return 0;
      });
    } else {
      filtered.sort((a, b) => {
        const sumA = (reviewsState.summaries && reviewsState.summaries[a.id]) || null;
        const sumB = (reviewsState.summaries && reviewsState.summaries[b.id]) || null;
        const ratingA = sumA ? sumA.averageRating : 0;
        const ratingB = sumB ? sumB.averageRating : 0;
        const countA = sumA ? sumA.totalReviews : 0;
        const countB = sumB ? sumB.totalReviews : 0;

        // 1. Higher average rating first
        if (ratingB !== ratingA) {
          return ratingB - ratingA;
        }
        // 2. Higher review count first
        if (countB !== countA) {
          return countB - countA;
        }
        // 3. Community recommended first
        const recA = a.communityRecommended !== false ? 1 : 0;
        const recB = b.communityRecommended !== false ? 1 : 0;
        if (recB !== recA) {
          return recB - recA;
        }
        // 4. Alphabetical fallback
        return a.businessName.localeCompare(b.businessName);
      });
    }

    if (filtered.length === 0 && !shouldShowFirewise) {
      if (noResultsContainer) noResultsContainer.style.display = 'block';
    } else {
      if (noResultsContainer) noResultsContainer.style.display = 'none';
    }

    filtered.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'card card-hoverable provider-card';

        const catList = (p.categories && p.categories.length > 0) ? p.categories : [p.category];
        const categoryBadgesHtml = catList.map(cat => {
          const catStyle = getCategoryColor(cat);
          return `<span class="category-badge" style="color: ${catStyle.color}; background: ${catStyle.bg}; border: 1px solid ${catStyle.border};">
            <span class="category-dot" style="background-color: ${catStyle.color};"></span>
            ${cat}
          </span>`;
        }).join('');

        let contactPersonHtml = p.contactPerson 
          ? `Contact: <strong style="color: var(--text-primary);">${p.contactPerson}</strong>` 
          : '';
        
        let communityNotesHtml = p.communityNotes 
          ? `<div style="padding: 0.5rem 0.75rem; background: #0F172A; border-radius: var(--radius-sm); border-left: 3px solid ${getCategoryColor(p.category).color}; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem;">💬 ${p.communityNotes}</div>` 
          : '';

        let phoneHtml = p.phone 
          ? `<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:${p.phone}" style="color: var(--text-primary); font-weight: 600;">${p.phone}</a>
            </div>` 
          : '';

        let whatsAppHtml = p.whatsAppGroup
          ? `<div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ADE80"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              <a href="${p.whatsAppGroup}" target="_blank" rel="noopener noreferrer" style="color: #4ADE80; font-weight: 600;">Join WhatsApp Group ↗</a>
            </div>`
          : '';

        let emailHtml = p.email 
          ? `<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:${p.email}" style="color: var(--text-secondary); word-break: break-all;">${p.email}</a>
            </div>` 
          : '';

        let websiteHtml = p.website 
          ? `<div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent-link);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <a href="${p.website}" target="_blank" rel="noopener noreferrer">Visit Website ↗</a>
            </div>` 
          : '';

        let instagramHtml = p.instagram 
          ? `<div style="display: flex; align-items: center; gap: 0.5rem; color: #EC4899;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <a href="${p.instagram}" target="_blank" rel="noopener noreferrer" style="color: #F472B6;">Instagram Profile ↗</a>
            </div>` 
          : '';

        let reviewUrlHtml = (p.googleReviewUrl || p.reviewUrl)
          ? `<div style="display: flex; align-items: center; gap: 0.5rem; color: #F59E0B;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <a href="${p.googleReviewUrl || p.reviewUrl}" target="_blank" rel="noopener noreferrer" style="color: #FBBF24;">Google / Yelp Reviews ↗</a>
            </div>`
          : '';

        let formattedDate = 'Aug 22, 2026';
        if (p.lastUpdated) {
          const parts = p.lastUpdated.split('-');
          if (parts.length === 3) {
            const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const monthName = shortMonths[parseInt(parts[1], 10) - 1];
            const dayNum = parseInt(parts[2], 10);
            if (monthName) {
              formattedDate = `${monthName} ${dayNum}, ${parts[0]}`;
            }
          }
        }

        let recBadgeHtml = (p.communityRecommended === false)
          ? `<span class="trust-badge" style="background: rgba(148, 163, 184, 0.12); color: #94A3B8; border: 1px solid rgba(148, 163, 184, 0.25);">📋 Directory Listing</span>`
          : `<span class="trust-badge trust-badge-recommendation">⭐ Community Recommendation</span>`;

        let residentBadgeHtml = (p.isLocalResident === true)
          ? `<span class="trust-badge" style="background: rgba(16, 185, 129, 0.15); color: #86EFAC; border: 1px solid rgba(34, 197, 94, 0.35);">🏡 Phase 2 Resident</span>`
          : '';

        let service247Html = (p.is247Service || (p.description && p.description.includes('24/7')) || (p.communityNotes && p.communityNotes.includes('24/7')))
          ? `<span class="trust-badge" style="background: rgba(220, 38, 38, 0.15); color: #FCA5A5; border: 1px solid rgba(239, 68, 68, 0.35);">⚡ 24/7 Emergency Service</span>`
          : '';

        // Provider Rating & Reviews Integration
        const pSummary = (reviewsState.summaries && reviewsState.summaries[p.id]) || null;
        const pRating = pSummary ? pSummary.averageRating : 0;
        const pReviewsCount = pSummary ? pSummary.totalReviews : 0;

        let ratingBarHtml = '';
        if (pReviewsCount > 0) {
          ratingBarHtml = `
            <div class="provider-rating-bar">
              <button type="button" class="provider-rating-badge btn-open-reviews-view" data-provider-id="${p.id}" title="Read ${pReviewsCount} resident reviews">
                <span class="stars-gold">${generateStarsHtml(pRating)}</span>
                <span class="rating-number">${pRating.toFixed(1)}</span>
                <span class="rating-count">(${pReviewsCount} ${pReviewsCount === 1 ? 'review' : 'reviews'}) ↗</span>
              </button>
              <button type="button" class="btn-write-review-action btn-open-write-review" data-provider-id="${p.id}" data-provider-name="${escapeHtml(p.businessName)}" data-provider-category="${escapeHtml(p.category)}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                <span>Rate & Review</span>
              </button>
            </div>
          `;
        } else {
          ratingBarHtml = `
            <div class="provider-rating-bar">
              <span class="provider-rating-badge no-reviews">
                <span class="stars-empty">★★★★★</span>
                <span class="no-reviews-label">No reviews</span>
              </span>
              <button type="button" class="btn-write-review-action be-first btn-open-write-review" data-provider-id="${p.id}" data-provider-name="${escapeHtml(p.businessName)}" data-provider-category="${escapeHtml(p.category)}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                <span>Be first to review</span>
              </button>
            </div>
          `;
        }

        // Clamp description to 2 lines max with '... more' link
        const fullDesc = (p.description || '').trim();
        let descriptionHtml = '';
        const MAX_DESC_CHARS = 75;

        if (fullDesc.length > 80) {
          let trimmed = fullDesc.substring(0, MAX_DESC_CHARS);
          const lastSpace = trimmed.lastIndexOf(' ');
          if (lastSpace > 35) trimmed = trimmed.substring(0, lastSpace);
          trimmed = trimmed.replace(/[.,;:!?]+$/, '');
          descriptionHtml = `${escapeHtml(trimmed)}... <button type="button" class="desc-more-btn btn-open-provider-details" data-provider-id="${p.id}" title="Read full details and reviews for ${escapeHtml(p.businessName)}">more ↗</button>`;
        } else {
          descriptionHtml = escapeHtml(fullDesc);
        }

        card.innerHTML = `
          <div class="provider-card-top">
            <!-- 1. Category Badges -->
            <div class="provider-categories-wrap">
              ${categoryBadgesHtml}
            </div>

            <!-- 2. Business & Contact Name (Clickable to open full pop-up) -->
            <h3 class="provider-business-name">
              <button type="button" class="provider-name-btn btn-open-provider-details" data-provider-id="${p.id}" title="View full profile and resident reviews for ${escapeHtml(p.businessName)}">
                ${p.businessName}
              </button>
            </h3>
            <div class="provider-contact-person">
              ${contactPersonHtml}
            </div>

            <!-- 3. Clean Description (2 lines max with more link) -->
            <p class="provider-description">
              ${descriptionHtml}
            </p>

            <!-- 4. Contact Information -->
            <div class="provider-contacts-list">
              ${whatsAppHtml}
              ${phoneHtml}
              ${emailHtml}
              ${websiteHtml}
              ${instagramHtml}
              ${reviewUrlHtml}
            </div>
          </div>

          <!-- Bottom Section: Trust Meta & Resident Reviews -->
          <div class="provider-card-footer">
            <!-- 5. Listing Type & Verification Date -->
            <div class="trust-meta-bar">
              <div class="trust-badges-wrap">
                ${recBadgeHtml}
                ${residentBadgeHtml}
                ${service247Html}
              </div>
              <span class="trust-meta-date">Verified: ${formattedDate}</span>
            </div>

            <!-- 6. Resident Community Reviews Action Bar (At Card Footer) -->
            ${ratingBarHtml}
          </div>
        `;

        container.appendChild(card);
      });
  }

  // Card review actions & profile pop-up click delegation
  if (container) {
    container.addEventListener('click', (e) => {
      const detailsBtn = e.target.closest('.btn-open-provider-details, .btn-open-reviews-view');
      if (detailsBtn) {
        e.preventDefault();
        e.stopPropagation();
        const pid = detailsBtn.dataset.providerId;
        if (pid) openReviewsViewModal(pid);
        return;
      }
      const writeBtn = e.target.closest('.btn-open-write-review');
      if (writeBtn) {
        e.preventDefault();
        e.stopPropagation();
        const pid = writeBtn.dataset.providerId;
        const pname = writeBtn.dataset.providerName;
        const pcat = writeBtn.dataset.providerCategory;
        if (pid && pname) openWriteReviewModal(pid, pname, pcat);
        return;
      }
    });
  }

  // ==========================================================================
  // Modal 1: Read Provider Details & Resident Reviews Modal
  // ==========================================================================
  const reviewsViewModal = document.getElementById('reviews-view-modal');
  const reviewsViewCloseBtn = document.getElementById('reviews-view-modal-close');
  const reviewsViewWriteBtn = document.getElementById('reviews-view-write-btn');

  function openReviewsViewModal(providerId) {
    const provider = PROVIDERS_DATA.find(p => p.id === providerId);
    if (!provider || !reviewsViewModal) return;

    const summary = (reviewsState.summaries && reviewsState.summaries[providerId]) || { averageRating: 0, totalReviews: 0, distribution: {1:0, 2:0, 3:0, 4:0, 5:0} };
    const pReviews = (reviewsState.reviews && reviewsState.reviews[providerId]) || [];

    const modalTitle = document.getElementById('reviews-view-modal-title');
    const modalSubtitle = document.getElementById('reviews-view-modal-subtitle');
    const countBadge = document.getElementById('reviews-count-badge');
    const detailsBox = document.getElementById('modal-provider-details-box');
    const summaryBox = document.getElementById('reviews-view-summary-box');
    const feed = document.getElementById('reviews-feed-container');

    if (modalTitle) modalTitle.textContent = provider.businessName;
    if (modalSubtitle) modalSubtitle.textContent = `${provider.category} • Tracy Hills II Community Directory`;
    if (countBadge) countBadge.textContent = summary.totalReviews;

    // Render Full Provider Profile Details Card
    if (detailsBox) {
      const catStyle = getCategoryColor(provider.category);
      const catList = (provider.categories && provider.categories.length > 0) ? provider.categories : [provider.category];
      const categoryBadgesHtml = catList.map(cat => {
        const cs = getCategoryColor(cat);
        return `<span class="category-badge" style="color: ${cs.color}; background: ${cs.bg}; border: 1px solid ${cs.border}; font-size: 0.775rem;">
          <span class="category-dot" style="background-color: ${cs.color};"></span>
          ${cat}
        </span>`;
      }).join('');

      let recBadgeHtml = (provider.communityRecommended === false)
        ? `<span class="trust-badge" style="background: rgba(148, 163, 184, 0.12); color: #94A3B8; border: 1px solid rgba(148, 163, 184, 0.25);">📋 Directory Listing</span>`
        : `<span class="trust-badge trust-badge-recommendation">⭐ Community Recommendation</span>`;

      let residentBadgeHtml = (provider.isLocalResident === true)
        ? `<span class="trust-badge" style="background: rgba(16, 185, 129, 0.15); color: #86EFAC; border: 1px solid rgba(34, 197, 94, 0.35);">🏡 Phase 2 Resident</span>`
        : '';

      let service247Html = (provider.is247Service || (provider.description && provider.description.includes('24/7')) || (provider.communityNotes && provider.communityNotes.includes('24/7')))
        ? `<span class="trust-badge" style="background: rgba(220, 38, 38, 0.15); color: #FCA5A5; border: 1px solid rgba(239, 68, 68, 0.35);">⚡ 24/7 Emergency Service</span>`
        : '';

      let formattedDate = 'August 22, 2026';
      if (provider.lastUpdated) {
        const parts = provider.lastUpdated.split('-');
        if (parts.length === 3) {
          const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const monthName = months[parseInt(parts[1], 10) - 1];
          const dayNum = parseInt(parts[2], 10);
          if (monthName) formattedDate = `${monthName} ${dayNum}, ${parts[0]}`;
        }
      }

      // Contact Information List (clean rows matching the card structure)
      const contactItems = [];
      if (provider.phone) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-primary);">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Phone: <a href="tel:${provider.phone}" style="color: var(--text-primary); font-weight: 600; text-decoration: underline;">${provider.phone}</a></span>
          </div>
        `);
      }
      if (provider.whatsAppGroup) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="#4ADE80"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
            <span>WhatsApp: <a href="${provider.whatsAppGroup}" target="_blank" rel="noopener noreferrer" style="color: #4ADE80; font-weight: 600;">Join WhatsApp Group ↗</a></span>
          </div>
        `);
      }
      if (provider.email) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>Email: <a href="mailto:${provider.email}" style="color: var(--accent-link); word-break: break-all;">${provider.email}</a></span>
          </div>
        `);
      }
      if (provider.website) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent-link);">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>Website: <a href="${provider.website}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-link); font-weight: 600;">Visit Website ↗</a></span>
          </div>
        `);
      }
      if (provider.instagram) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem; color: #EC4899;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram: <a href="${provider.instagram}" target="_blank" rel="noopener noreferrer" style="color: #F472B6; font-weight: 600;">Instagram Profile ↗</a></span>
          </div>
        `);
      }
      if (provider.googleReviewUrl || provider.reviewUrl) {
        contactItems.push(`
          <div style="display: flex; align-items: center; gap: 0.5rem; color: #F59E0B;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>Reviews: <a href="${provider.googleReviewUrl || provider.reviewUrl}" target="_blank" rel="noopener noreferrer" style="color: #FBBF24; font-weight: 600;">Google / Yelp Reviews ↗</a></span>
          </div>
        `);
      }

      detailsBox.innerHTML = `
        <div class="modal-provider-profile">
          <!-- 1. Category Badges ONLY (Cleanly separated on top) -->
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; margin-bottom: 0.65rem;">
            ${categoryBadgesHtml}
          </div>

          <!-- 2. Primary Contact Person -->
          ${provider.contactPerson ? `
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500; margin-bottom: 0.65rem;">
              Contact: <strong style="color: var(--text-primary);">${escapeHtml(provider.contactPerson)}</strong>
            </div>
          ` : ''}

          <!-- 3. Full Uncapped Description -->
          <div style="margin-bottom: 0.85rem;">
            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin: 0;">
              ${escapeHtml(provider.description)}
            </p>
          </div>

          <!-- 4. Contact Information List -->
          <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.85rem; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-bottom: 0.85rem;">
            ${contactItems.join('')}
          </div>

          <!-- 5. Trust Meta Bar: Community Recommendation & Listing Verified Date TOGETHER -->
          <div class="trust-meta-bar" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; border-top: 1px dashed var(--border-subtle); padding-top: 0.65rem; margin-top: 0.25rem;">
            <div class="trust-badges-wrap" style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem;">
              ${recBadgeHtml}
              ${residentBadgeHtml}
              ${service247Html}
            </div>
            <span class="trust-meta-date" style="font-size: 0.775rem; color: var(--text-muted);">Listing Verified: ${formattedDate}</span>
          </div>
        </div>
      `;
    }
    if (countBadge) countBadge.textContent = summary.totalReviews;

    if (summaryBox) {
      if (summary.totalReviews > 0) {
        const dist = summary.distribution || {1:0, 2:0, 3:0, 4:0, 5:0};
        const total = summary.totalReviews;
        summaryBox.innerHTML = `
          <div class="summary-score-col">
            <div class="summary-large-score">${summary.averageRating.toFixed(1)}</div>
            <div class="summary-stars-row">${generateStarsHtml(summary.averageRating)}</div>
            <div class="summary-total-label">${total} ${total === 1 ? 'verified review' : 'verified reviews'}</div>
          </div>
          <div class="summary-bars-col">
            ${[5, 4, 3, 2, 1].map(stars => {
              const count = dist[stars] || 0;
              const pct = total > 0 ? Math.round((count / total) * 100) : 0;
              return `
                <div class="rating-bar-row">
                  <span class="rating-bar-label">${stars}★</span>
                  <div class="rating-bar-track">
                    <div class="rating-bar-fill" style="width: ${pct}%;"></div>
                  </div>
                  <span class="rating-bar-count">${count}</span>
                </div>
              `;
            }).join('')}
          </div>
        `;
        summaryBox.style.display = 'grid';
      } else {
        summaryBox.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 0.5rem;">
            <div class="stars-empty" style="font-size: 1.5rem; margin-bottom: 0.35rem;">★★★★★</div>
            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.25rem;">No Neighbor Reviews Yet</h4>
            <p style="font-size: 0.825rem; color: var(--text-muted); max-width: 380px; margin: 0 auto;">
              Have you hired ${escapeHtml(provider.businessName)}? Be the first Tracy Hills resident to rate and review their work!
            </p>
          </div>
        `;
        summaryBox.style.display = 'block';
      }
    }

    if (feed) {
      if (pReviews.length > 0) {
        feed.innerHTML = pReviews.map(r => {
          const reviewTextHtml = r.reviewText
            ? `<p class="review-item-text">"${escapeHtml(r.reviewText)}"</p>`
            : `<p class="review-item-star-only">★ Star rating submitted by verified resident (no comment)</p>`;

          return `
            <div class="review-item-card">
              <div class="review-item-header">
                <div style="display: flex; align-items: center; gap: 0.45rem;">
                  <span class="stars-gold">${generateStarsHtml(r.rating)}</span>
                  <span style="font-weight: 700; color: #F8FAFC; font-size: 0.85rem;">${r.rating}.0</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <span class="review-item-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    <span>Verified Resident</span>
                  </span>
                  <span class="review-item-date">${r.date || 'Recently'}</span>
                </div>
              </div>
              ${reviewTextHtml}
              <div class="review-item-footer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                <span>Verified by Tracy Hills Phase II Community Volunteer</span>
              </div>
            </div>
          `;
        }).join('');
      } else {
        feed.innerHTML = `
          <div style="text-align: center; padding: 2rem 1rem; background: rgba(15, 23, 42, 0.4); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.75rem;">No resident reviews currently published for this contractor.</p>
            <button type="button" class="btn btn-outline btn-sm btn-feed-write" data-provider-id="${provider.id}">Leave the First Review</button>
          </div>
        `;
        const feedWriteBtn = feed.querySelector('.btn-feed-write');
        if (feedWriteBtn) {
          feedWriteBtn.addEventListener('click', () => {
            closeReviewsViewModal();
            openWriteReviewModal(provider.id, provider.businessName, provider.category);
          });
        }
      }
    }

    if (reviewsViewWriteBtn) {
      reviewsViewWriteBtn.onclick = () => {
        closeReviewsViewModal();
        openWriteReviewModal(provider.id, provider.businessName, provider.category);
      };
    }

    reviewsViewModal.classList.add('active');
    reviewsViewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeReviewsViewModal() {
    if (!reviewsViewModal) return;
    reviewsViewModal.classList.remove('active');
    reviewsViewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (reviewsViewCloseBtn) {
    reviewsViewCloseBtn.addEventListener('click', closeReviewsViewModal);
  }
  if (reviewsViewModal) {
    reviewsViewModal.addEventListener('click', (e) => {
      if (e.target === reviewsViewModal) closeReviewsViewModal();
    });
  }

  // ==========================================================================
  // Modal 2: Write Review Modal Elements & Handlers
  // ==========================================================================
  const writeReviewModal = document.getElementById('write-review-modal');
  const writeReviewCloseBtn = document.getElementById('write-review-modal-close');
  const writeReviewCancelBtn = document.getElementById('write-review-cancel-btn');
  const writeReviewSubmitBtn = document.getElementById('write-review-submit-btn');
  const starPickerContainer = document.getElementById('star-picker-container');
  const starRatingFeedback = document.getElementById('star-rating-text-feedback');
  const selectedRatingInput = document.getElementById('selected-star-rating');
  const reviewSubmitBanner = document.getElementById('review-submit-status-banner');

  const STAR_LABELS = {
    0: 'Tap stars to rate',
    1: '1 ★ - Poor',
    2: '2 ★ - Fair',
    3: '3 ★ - Good',
    4: '4 ★ - Very Good',
    5: '5 ★ - Excellent'
  };

  let currentSelectedRating = 0;

  function updateStarPickerDisplay(rating) {
    if (!starPickerContainer) return;
    const buttons = starPickerContainer.querySelectorAll('.star-pick-btn');
    buttons.forEach(btn => {
      const val = parseInt(btn.dataset.value, 10);
      if (val <= rating) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (starRatingFeedback) {
      starRatingFeedback.textContent = STAR_LABELS[rating] || 'Tap stars to rate';
    }
  }

  if (starPickerContainer) {
    const buttons = starPickerContainer.querySelectorAll('.star-pick-btn');
    buttons.forEach(btn => {
      const val = parseInt(btn.dataset.value, 10);
      btn.addEventListener('click', () => {
        currentSelectedRating = val;
        if (selectedRatingInput) selectedRatingInput.value = val;
        updateStarPickerDisplay(val);
      });
      btn.addEventListener('mouseenter', () => {
        updateStarPickerDisplay(val);
      });
    });

    starPickerContainer.addEventListener('mouseleave', () => {
      updateStarPickerDisplay(currentSelectedRating);
    });
  }

  let reviewFormOpenedAt = 0;
  const REVIEW_COOLDOWN_MS = 30000; // 30 seconds cooldown between submissions per device

  function openWriteReviewModal(providerId, providerName, providerCategory) {
    if (!writeReviewModal) return;
    reviewFormOpenedAt = Date.now();
    const pIdInput = document.getElementById('review-provider-id');
    const pNameInput = document.getElementById('review-provider-name');
    const pDisplay = document.getElementById('review-target-provider-display');
    const catDisplay = document.getElementById('review-target-category-display');

    if (pIdInput) pIdInput.value = providerId;
    if (pNameInput) pNameInput.value = providerName;
    if (pDisplay) pDisplay.textContent = providerName;
    
    if (catDisplay) {
      const catStyle = getCategoryColor(providerCategory || 'Other');
      catDisplay.innerHTML = `
        <span class="category-badge" style="color: ${catStyle.color}; background: ${catStyle.bg}; border: 1px solid ${catStyle.border};">
          <span class="category-dot" style="background-color: ${catStyle.color};"></span>
          ${providerCategory || 'Provider'}
        </span>
      `;
    }

    currentSelectedRating = 0;
    if (selectedRatingInput) selectedRatingInput.value = '0';
    updateStarPickerDisplay(0);

    const txtInput = document.getElementById('review-text-input');
    const nameInput = document.getElementById('reviewer-name-input');
    const addrInput = document.getElementById('reviewer-address-input');
    const phoneInput = document.getElementById('reviewer-phone-input');
    const emailInput = document.getElementById('reviewer-email-input');
    const hpInput = document.getElementById('review-hp-field');

    if (txtInput) txtInput.value = '';
    if (nameInput) nameInput.value = '';
    if (addrInput) addrInput.value = '';
    if (phoneInput) phoneInput.value = '';
    if (emailInput) emailInput.value = '';
    if (hpInput) hpInput.value = '';

    if (reviewSubmitBanner) reviewSubmitBanner.style.display = 'none';
    if (writeReviewSubmitBtn) {
      writeReviewSubmitBtn.disabled = false;
      writeReviewSubmitBtn.innerHTML = '<span>Submit Review for Verification</span>';
    }

    writeReviewModal.classList.add('active');
    writeReviewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeWriteReviewModal() {
    if (!writeReviewModal) return;
    writeReviewModal.classList.remove('active');
    writeReviewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (writeReviewCloseBtn) writeReviewCloseBtn.addEventListener('click', closeWriteReviewModal);
  if (writeReviewCancelBtn) writeReviewCancelBtn.addEventListener('click', closeWriteReviewModal);
  if (writeReviewModal) {
    writeReviewModal.addEventListener('click', (e) => {
      if (e.target === writeReviewModal) closeWriteReviewModal();
    });
  }

  if (writeReviewSubmitBtn) {
    writeReviewSubmitBtn.addEventListener('click', async () => {
      const banner = reviewSubmitBanner;

      // 1. Anti-Spam Device Cooldown Check (Prevents rapid submission spam)
      const lastSubmission = parseInt(localStorage.getItem('thp2_last_review_sub') || '0', 10);
      if (Date.now() - lastSubmission < REVIEW_COOLDOWN_MS) {
        const waitSec = Math.ceil((REVIEW_COOLDOWN_MS - (Date.now() - lastSubmission)) / 1000);
        if (banner) {
          banner.style.background = 'rgba(234, 179, 8, 0.15)';
          banner.style.border = '1px solid rgba(234, 179, 8, 0.4)';
          banner.style.color = '#FDE047';
          banner.textContent = `Please wait ${waitSec} seconds before submitting another review.`;
          banner.style.display = 'block';
        }
        return;
      }

      // 2. Anti-Bot Speed Trap (Bots submit forms instantaneously in < 2 seconds)
      if (Date.now() - reviewFormOpenedAt < 2000) {
        if (banner) {
          banner.style.background = 'rgba(21, 128, 61, 0.2)';
          banner.style.border = '1px solid rgba(74, 222, 128, 0.4)';
          banner.style.color = '#4ADE80';
          banner.textContent = 'Thank you! Your review has been received.';
          banner.style.display = 'block';
        }
        setTimeout(closeWriteReviewModal, 2000);
        return;
      }

      const providerId = (document.getElementById('review-provider-id') || {}).value || '';
      const providerName = (document.getElementById('review-provider-name') || {}).value || '';
      const rating = parseInt(selectedRatingInput ? selectedRatingInput.value : '0', 10);
      const reviewText = (document.getElementById('review-text-input') || {}).value || '';
      const reviewerName = (document.getElementById('reviewer-name-input') || {}).value || '';
      const reviewerAddress = (document.getElementById('reviewer-address-input') || {}).value || '';
      const reviewerPhone = (document.getElementById('reviewer-phone-input') || {}).value || '';
      const reviewerEmail = (document.getElementById('reviewer-email-input') || {}).value || '';
      const hpField = (document.getElementById('review-hp-field') || {}).value || '';

      // 3. Honeypot check (Automated bots fill hidden off-screen fields)
      if (hpField.trim()) {
        if (banner) {
          banner.style.background = 'rgba(21, 128, 61, 0.2)';
          banner.style.border = '1px solid rgba(74, 222, 128, 0.4)';
          banner.style.color = '#4ADE80';
          banner.textContent = 'Thank you! Your review has been submitted for community moderator verification.';
          banner.style.display = 'block';
        }
        setTimeout(closeWriteReviewModal, 2000);
        return;
      }

      // 4. Rating validation
      if (!rating || rating < 1 || rating > 5) {
        if (banner) {
          banner.style.background = 'rgba(220, 38, 38, 0.15)';
          banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
          banner.style.color = '#FCA5A5';
          banner.textContent = 'Please tap the stars above to select a rating (1 to 5 stars).';
          banner.style.display = 'block';
        }
        return;
      }

      // 5. Reviewer Name & Address required for resident verification
      if (!reviewerName.trim() || !reviewerAddress.trim()) {
        if (banner) {
          banner.style.background = 'rgba(220, 38, 38, 0.15)';
          banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
          banner.style.color = '#FCA5A5';
          banner.textContent = 'Please enter your Full Name and Tracy Hills Address for resident verification.';
          banner.style.display = 'block';
        }
        return;
      }

      // 6. At least Phone or Email for moderator contact
      if (!reviewerPhone.trim() && !reviewerEmail.trim()) {
        if (banner) {
          banner.style.background = 'rgba(220, 38, 38, 0.15)';
          banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
          banner.style.color = '#FCA5A5';
          banner.textContent = 'Please provide at least your Phone Number or Email Address for moderator verification.';
          banner.style.display = 'block';
        }
        return;
      }

      // 7. Email format validation (if provided)
      if (reviewerEmail.trim()) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(reviewerEmail.trim())) {
          if (banner) {
            banner.style.background = 'rgba(220, 38, 38, 0.15)';
            banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
            banner.style.color = '#FCA5A5';
            banner.textContent = 'Please enter a valid email address.';
            banner.style.display = 'block';
          }
          return;
        }
      }

      // 8. Phone format validation (if provided)
      if (reviewerPhone.trim()) {
        const digits = reviewerPhone.replace(/\D/g, '');
        if (digits.length < 10) {
          if (banner) {
            banner.style.background = 'rgba(220, 38, 38, 0.15)';
            banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
            banner.style.color = '#FCA5A5';
            banner.textContent = 'Please enter a valid 10-digit phone number.';
            banner.style.display = 'block';
          }
          return;
        }
      }

      writeReviewSubmitBtn.disabled = true;
      writeReviewSubmitBtn.innerHTML = `
        <svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
        <span>Submitting to Moderator...</span>
      `;
      if (banner) banner.style.display = 'none';

      try {
        const response = await fetch(REVIEWS_API_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify({
            providerId: providerId.trim(),
            providerName: providerName.trim(),
            rating: rating,
            reviewText: reviewText.trim(), // Optional review text (allows rating-only)
            reviewerName: reviewerName.trim(),
            reviewerAddress: reviewerAddress.trim(),
            reviewerPhone: reviewerPhone.trim(),
            reviewerEmail: reviewerEmail.trim(),
            b_hp_field: hpField.trim()
          })
        });

        const data = await response.json();

        if (data && data.success) {
          try {
            localStorage.setItem('thp2_last_review_sub', String(Date.now()));
          } catch (e) {}
          if (banner) {
            banner.style.background = 'rgba(21, 128, 61, 0.2)';
            banner.style.border = '1px solid rgba(74, 222, 128, 0.4)';
            banner.style.color = '#4ADE80';
            banner.innerHTML = `
              <strong>✅ Review Submitted!</strong><br>
              Thank you! Your rating has been received. To keep our community directory spam-free, a moderator will verify your resident details in the Google Sheet before publishing your rating to the public site.
            `;
            banner.style.display = 'block';
          }
          writeReviewSubmitBtn.innerHTML = '<span>Submitted!</span>';

          setTimeout(() => {
            closeWriteReviewModal();
          }, 3500);
        } else {
          throw new Error(data.message || 'Error saving review.');
        }
      } catch (err) {
        console.error('Review submit error:', err);
        if (banner) {
          banner.style.background = 'rgba(220, 38, 38, 0.15)';
          banner.style.border = '1px solid rgba(239, 68, 68, 0.4)';
          banner.style.color = '#FCA5A5';
          banner.textContent = 'Submission error: ' + (err.message || 'Please check your connection and try again.');
          banner.style.display = 'block';
        }
        writeReviewSubmitBtn.disabled = false;
        writeReviewSubmitBtn.innerHTML = '<span>Submit Review for Verification</span>';
      }
    });
  }

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (currentSearchQuery.trim() && currentCategory !== 'All') {
        currentCategory = 'All';
        renderCategories();
      }
      updateUrlState();
      renderProviders();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'All';
      updateUrlState();
      renderCategories();
      renderProviders();
    });
  }

  // Mobile Category Dropdown Selector change listener
  const mobileCategorySelect = document.getElementById('mobile-category-select');
  if (mobileCategorySelect) {
    mobileCategorySelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      updateUrlState();
      renderCategories();
      renderProviders();
    });
  }

  // Suggest Vendor Modal Controls
  if (suggestBtn && suggestModal) {
    suggestBtn.addEventListener('click', () => {
      suggestModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
      suggestModal.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalCloseSecondary) modalCloseSecondary.addEventListener('click', closeModal);

    suggestModal.addEventListener('click', (e) => {
      if (e.target === suggestModal) closeModal();
    });
  }

  // Handle direct review URL parameter (e.g. ?review=sp-101)
  const reviewParam = urlParams.get('review');
  if (reviewParam) {
    const matchedP = PROVIDERS_DATA.find(p => p.id === reviewParam);
    if (matchedP) {
      setTimeout(() => openWriteReviewModal(matchedP.id, matchedP.businessName, matchedP.category), 350);
    }
  }

  loadReviewsCache();
  renderCategories();
  renderProviders();
  fetchLiveReviews();
}

/* --------------------------------------------------------------------------
   Announcements Renderer (Home Page)
   -------------------------------------------------------------------------- */
function initAnnouncements() {
  const container = document.getElementById('announcements-list-container');
  if (!container || typeof ANNOUNCEMENTS_DATA === 'undefined') return;
  container.innerHTML = '';

  ANNOUNCEMENTS_DATA.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    let detailsHtml = '';
    if (item.details) {
      const formattedDetails = item.details.replace(
        'tracyhillsphase2@gmail.com',
        '<a href="mailto:tracyhillsphase2@gmail.com" style="color: var(--accent-link); font-weight: 600;">tracyhillsphase2@gmail.com</a>'
      );
      detailsHtml = `<p style="color: var(--text-muted); font-size: 0.8rem; line-height: 1.5; margin-top: 0.25rem;">${formattedDetails}</p>`;
    }

    card.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
        <span class="badge ${item.priority === 'high' ? 'badge-accent' : ''}">${item.category}</span>
        <span style="font-size: 0.775rem; color: var(--text-muted);">${item.date}</span>
      </div>
      <h3 style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.35rem;">
        ${item.title}
      </h3>
      <p style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.4rem; line-height: 1.5;">
        ${item.summary}
      </p>
      ${detailsHtml}
    `;

    container.appendChild(card);
  });
}

