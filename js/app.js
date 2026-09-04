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
        Tap the <strong>MENU</strong> button in the top-right corner to easily access Quick Contacts, Service Directory, FAQs, and About info.
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
        Select <strong>Quick Contacts</strong> for city & HOA numbers, <strong>Service Directory</strong> for resident-recommended vendors, or <strong>FAQ</strong> for answers.
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
        accordion.className = `accordion-item ${index === 0 && currentSearchQuery ? 'open' : ''}`;
        accordion.innerHTML = `
          <button class="accordion-header" aria-expanded="${index === 0 && currentSearchQuery ? 'true' : 'false'}">
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
      });
    }
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderFaqs();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'All';
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

  // Render Category Pills with vendor counts
  function renderCategories() {
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

  // Render Providers Grid Cards
  function renderProviders() {
    if (!container) return;
    container.innerHTML = '';

    const filtered = PROVIDERS_DATA.filter((provider) => {
      const matchesCategory = currentCategory === 'All' || provider.category === currentCategory || (provider.categories && provider.categories.includes(currentCategory));
      const q = currentSearchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      // Smart Keyword & Synonym Expansion
      const synonyms = [q];
      if (q.startsWith('electric')) synonyms.push('electrician', 'electrical', 'electric');
      if (q.startsWith('plumb')) synonyms.push('plumber', 'plumbing');
      if (q.startsWith('contract')) synonyms.push('contractor', 'contracting');
      if (q.startsWith('handy')) synonyms.push('handyman', 'repair');
      if (q.startsWith('paint')) synonyms.push('painter', 'painting');
      if (q.startsWith('roof')) synonyms.push('roofing', 'roof');
      if (q.startsWith('garden') || q.startsWith('landscap') || q.startsWith('lawn') || q.startsWith('paver') || q.startsWith('hardscap')) synonyms.push('gardener', 'gardening', 'landscaper', 'landscaping', 'lawn', 'paver', 'pavers', 'hardscape', 'hardscaping');
      if (q.startsWith('blind') || q.startsWith('curtain') || q.startsWith('shade') || q.startsWith('shutter')) synonyms.push('blinds', 'curtains', 'shades', 'shutters', 'window');
      if (q.startsWith('grocer') || q.startsWith('food') || q.startsWith('deliver') || q.startsWith('produc')) synonyms.push('grocery', 'groceries', 'delivery', 'produce', 'food');
      if (q.startsWith('epoxy') || q.startsWith('granite') || q.startsWith('quartz') || q.startsWith('stone')) synonyms.push('epoxy', 'granite', 'quartz', 'stone', 'restoration');
      if (q.startsWith('garage') || q.startsWith('door')) synonyms.push('garage', 'door', 'repair');

      const matchesQuery = synonyms.some((term) =>
        provider.businessName.toLowerCase().includes(term) ||
        provider.category.toLowerCase().includes(term) ||
        provider.description.toLowerCase().includes(term) ||
        (provider.contactPerson && provider.contactPerson.toLowerCase().includes(term)) ||
        (provider.communityNotes && provider.communityNotes.toLowerCase().includes(term)) ||
        (provider.whatsAppGroup && provider.whatsAppGroup.toLowerCase().includes(term)) ||
        (provider.keywords && provider.keywords.some((k) => k.toLowerCase().includes(term)))
      );

      return matchesCategory && matchesQuery;
    });

    // Group & sort vendors cleanly by category order
    filtered.sort((a, b) => {
      const idxA = PROVIDER_CATEGORIES.indexOf(a.category);
      const idxB = PROVIDER_CATEGORIES.indexOf(b.category);
      const orderA = idxA === -1 ? 999 : idxA;
      const orderB = idxB === -1 ? 999 : idxB;
      return orderA - orderB;
    });

    if (filtered.length === 0) {
      if (noResultsContainer) noResultsContainer.style.display = 'block';
    } else {
      if (noResultsContainer) noResultsContainer.style.display = 'none';

      filtered.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'card card-hoverable';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'space-between';
        card.style.height = '100%';

        const catList = (p.categories && p.categories.length > 0) ? p.categories : [p.category];
        const categoryBadgesHtml = catList.map(cat => {
          const catStyle = getCategoryColor(cat);
          return `<span class="category-badge" style="color: ${catStyle.color}; background: ${catStyle.bg}; border: 1px solid ${catStyle.border};">
            <span class="category-dot" style="background-color: ${catStyle.color};"></span>
            ${cat}
          </span>`;
        }).join('');

        let contactPersonHtml = p.contactPerson 
          ? `<div style="font-size: 0.825rem; color: var(--text-muted); font-weight: 500; margin-bottom: 0.65rem;">Contact: ${p.contactPerson}</div>` 
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
              <a href="${p.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>` 
          : '';

        let formattedDate = 'August 22, 2026';
        if (p.lastUpdated) {
          const parts = p.lastUpdated.split('-');
          if (parts.length === 3) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const monthName = months[parseInt(parts[1], 10) - 1];
            const dayNum = parseInt(parts[2], 10);
            if (monthName) {
              formattedDate = `${monthName} ${dayNum}, ${parts[0]}`;
            }
          }
        }

        card.innerHTML = `
          <div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; margin-bottom: 0.65rem;">
              ${categoryBadgesHtml}
            </div>
            <h3 style="font-size: 1.15rem; font-weight: 600; color: var(--text-primary); margin-bottom: 0.25rem;">
              ${p.businessName}
            </h3>
            ${contactPersonHtml}
            <p style="color: var(--text-secondary); font-size: 0.875rem; line-height: 1.5; margin-bottom: 0.85rem;">
              ${p.description}
            </p>
            ${communityNotesHtml}
            <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.825rem; margin-bottom: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
              ${whatsAppHtml}
              ${phoneHtml}
              ${emailHtml}
              ${websiteHtml}
            </div>
          </div>
          <div class="trust-meta-bar">
            <span class="trust-badge trust-badge-recommendation">⭐ Community Recommendation</span>
            <span class="trust-meta-date">Last Reviewed: ${formattedDate}</span>
          </div>
        `;

        container.appendChild(card);
      });
    }
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

  renderCategories();
  renderProviders();
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

