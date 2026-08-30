/* ==========================================================================
   Tracy Hills II - Interactive Application Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollToTop();
  initDynamicYear();
  
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

  // Handle URL Query Params if present (e.g. ?q=handyman)
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get('q');
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

      const matchesQuery = synonyms.some((term) =>
        provider.businessName.toLowerCase().includes(term) ||
        provider.category.toLowerCase().includes(term) ||
        provider.description.toLowerCase().includes(term) ||
        (provider.contactPerson && provider.contactPerson.toLowerCase().includes(term)) ||
        (provider.communityNotes && provider.communityNotes.toLowerCase().includes(term)) ||
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
              ${phoneHtml}
              ${emailHtml}
              ${websiteHtml}
            </div>
          </div>
          <div class="trust-meta-bar">
            <span class="trust-badge trust-badge-recommendation">⭐ Community Recommendation</span>
            <span class="trust-meta-date">Last Reviewed: August 22, 2026</span>
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
      renderProviders();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      currentCategory = 'All';
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

