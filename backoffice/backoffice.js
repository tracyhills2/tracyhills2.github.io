/* ==========================================================================
   Tracy Hills II - Backoffice Administration Controller
   Handles Authentication, Provider CRUD, GitHub Commit Sync & Review Forwarding
   ========================================================================== */

const WORKER_API_URL = 'https://tracy-hills-api.tracyhillsphase2.workers.dev/';
const REVIEWS_API_URL = 'https://script.google.com/macros/s/AKfycby96aZEpZlcszbfba5DloErXEX_rJQFSggTZ0Dhk0jazYGiZiAdOgxgeTGAT0lYx-QmiQ/exec';
const SESSION_PASS_KEY = 'thp2_bo_admin_pass';
const SESSION_DATA_KEY = 'thp2_bo_session_data';

let boState = {
  providers: [],
  categories: [],
  categoryColors: {},
  hasUnsavedChanges: false,
  pendingCommitMessages: [],
  searchQuery: '',
  selectedCategory: 'All',
  editingProviderId: null // null when creating a new provider
};

/* --------------------------------------------------------------------------
   Utility Helpers
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getTodayIso() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function formatUSPhone(value) {
  if (!value) return '';
  let digits = String(value).replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

function generateNextProviderId(providersList) {
  let maxNum = 1100;
  providersList.forEach(p => {
    const m = String(p.id || '').match(/^sp-(\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (n > maxNum) maxNum = n;
    }
  });
  return `sp-${maxNum + 1}`;
}

function getCatColor(cat) {
  return (boState.categoryColors && boState.categoryColors[cat]) || {
    color: '#60A5FA',
    bg: 'rgba(59, 130, 246, 0.14)',
    border: 'rgba(59, 130, 246, 0.35)',
    solid: '#2563EB'
  };
}

/* --------------------------------------------------------------------------
   Authentication & Session Gate
   -------------------------------------------------------------------------- */
function getAdminPass() {
  return sessionStorage.getItem(SESSION_PASS_KEY) || '';
}

function setAdminPass(pass) {
  sessionStorage.setItem(SESSION_PASS_KEY, pass);
}

function saveSessionCache() {
  try {
    sessionStorage.setItem(SESSION_DATA_KEY, JSON.stringify({
      providers: boState.providers,
      categories: boState.categories,
      categoryColors: boState.categoryColors
    }));
  } catch (e) {
    console.warn('Could not cache session data:', e);
  }
}

function loadSessionCache() {
  try {
    const raw = sessionStorage.getItem(SESSION_DATA_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (parsed && Array.isArray(parsed.providers) && parsed.providers.length > 0) {
      boState.providers = parsed.providers;
    }
    if (parsed && Array.isArray(parsed.categories) && parsed.categories.length > 0) {
      boState.categories = parsed.categories;
    }
    if (parsed && parsed.categoryColors && typeof parsed.categoryColors === 'object') {
      boState.categoryColors = parsed.categoryColors;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function signOutBackoffice() {
  sessionStorage.removeItem(SESSION_PASS_KEY);
  sessionStorage.removeItem(SESSION_DATA_KEY);
  window.location.href = 'index.html';
}

window.signOutBackoffice = signOutBackoffice;

async function verifyAdminPassword(password) {
  const res = await fetch(WORKER_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formType: 'admin_verify',
      password: password
    })
  });
  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Invalid Admin Password.');
  }
  return data;
}

/* --------------------------------------------------------------------------
   Initialize Backoffice Page
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Load initial local data from ../js/data.js
  if (typeof PROVIDERS_DATA !== 'undefined') {
    boState.providers = JSON.parse(JSON.stringify(PROVIDERS_DATA));
  }
  if (typeof PROVIDER_CATEGORIES !== 'undefined') {
    boState.categories = [...PROVIDER_CATEGORIES];
  }
  if (typeof CATEGORY_COLORS !== 'undefined') {
    boState.categoryColors = JSON.parse(JSON.stringify(CATEGORY_COLORS));
  }

  const loginGate = document.getElementById('bo-login-gate');
  const appContent = document.getElementById('bo-app-content');
  const loginForm = document.getElementById('bo-login-form');
  const passInput = document.getElementById('bo-password-input');
  const loginBtn = document.getElementById('bo-login-btn');
  const loginError = document.getElementById('bo-login-error');

  function renderAuthenticatedView() {
    if (loginGate) loginGate.style.display = 'none';
    if (appContent) appContent.style.display = 'flex';

    initDashboardStats();
    if (document.getElementById('bo-providers-table-body')) {
      initProvidersManager();
    }
  }

  async function unlockBackoffice(passToVerify) {
    try {
      if (loginBtn) {
        loginBtn.disabled = true;
        loginBtn.innerHTML = `<span class="bo-spinner"></span> <span>Verifying...</span>`;
      }
      if (loginError) loginError.style.display = 'none';

      const verifyData = await verifyAdminPassword(passToVerify);
      setAdminPass(passToVerify);

      // If Worker returned live providers from GitHub API, use that freshest copy
      if (verifyData.providers && Array.isArray(verifyData.providers)) {
        boState.providers = verifyData.providers;
      }
      if (verifyData.categories && Array.isArray(verifyData.categories)) {
        boState.categories = verifyData.categories;
      }
      if (verifyData.categoryColors && typeof verifyData.categoryColors === 'object') {
        boState.categoryColors = verifyData.categoryColors;
      }

      saveSessionCache();
      renderAuthenticatedView();
    } catch (err) {
      sessionStorage.removeItem(SESSION_PASS_KEY);
      sessionStorage.removeItem(SESSION_DATA_KEY);
      if (loginGate) loginGate.style.display = 'flex';
      if (appContent) appContent.style.display = 'none';
      if (loginError) {
        loginError.textContent = err.message || 'Authentication failed. Please check your password.';
        loginError.style.display = 'block';
      }
    } finally {
      if (loginBtn) {
        loginBtn.disabled = false;
        loginBtn.innerHTML = `<span>Sign In to Backoffice →</span>`;
      }
    }
  }

  const savedPass = getAdminPass();
  if (savedPass) {
    // Already authenticated in this browser tab: restore cached session data in 0ms with 0 API calls
    loadSessionCache();
    renderAuthenticatedView();
  } else {
    if (loginGate) loginGate.style.display = 'flex';
    if (appContent) appContent.style.display = 'none';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = passInput ? passInput.value.trim() : '';
      if (!val) return;
      unlockBackoffice(val);
    });
  }
});

/* --------------------------------------------------------------------------
   Dashboard Stats Updater
   -------------------------------------------------------------------------- */
function initDashboardStats() {
  const totalEl = document.getElementById('stat-total-providers');
  const catsEl = document.getElementById('stat-total-categories');
  const resEl = document.getElementById('stat-resident-providers');
  const emergEl = document.getElementById('stat-247-providers');

  if (totalEl) totalEl.textContent = boState.providers.length;
  if (catsEl) catsEl.textContent = boState.categories.length;
  if (resEl) {
    resEl.textContent = boState.providers.filter(p => p.isLocalResident === true).length;
  }
  if (emergEl) {
    emergEl.textContent = boState.providers.filter(p => p.is247Service === true).length;
  }
}

/* --------------------------------------------------------------------------
   Service Providers Manager (backoffice/providers.html)
   -------------------------------------------------------------------------- */
function initProvidersManager() {
  const searchInput = document.getElementById('bo-provider-search');
  const catFilter = document.getElementById('bo-provider-cat-filter');
  const addBtn = document.getElementById('bo-add-provider-btn');
  const publishBtn = document.getElementById('bo-publish-changes-btn');
  const discardBtn = document.getElementById('bo-discard-changes-btn');

  populateCategoryFilter();
  renderProvidersTable();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      boState.searchQuery = e.target.value;
      renderProvidersTable();
    });
  }

  if (catFilter) {
    catFilter.addEventListener('change', (e) => {
      boState.selectedCategory = e.target.value;
      renderProvidersTable();
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => openProviderModal(null));
  }

  if (publishBtn) {
    publishBtn.addEventListener('click', () => publishProvidersToGitHub());
  }

  if (discardBtn) {
    discardBtn.addEventListener('click', () => {
      if (confirm('Discard all unpublished changes and reload live data?')) {
        window.location.reload();
      }
    });
  }

  initModalHandlers();
  checkUrlPrefillParam();
}

function populateCategoryFilter() {
  const catFilter = document.getElementById('bo-provider-cat-filter');
  if (!catFilter) return;

  const currentVal = boState.selectedCategory || 'All';
  catFilter.innerHTML = `<option value="All">All Categories (${boState.providers.length})</option>`;

  boState.categories.forEach(cat => {
    const count = boState.providers.filter(p => p.category === cat || (p.categories && p.categories.includes(cat))).length;
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = `${cat} (${count})`;
    if (cat === currentVal) opt.selected = true;
    catFilter.appendChild(opt);
  });
}

function updatePublishBar() {
  const bar = document.getElementById('bo-publish-bar');
  const countEl = document.getElementById('bo-unsaved-summary');
  if (!bar) return;

  if (boState.hasUnsavedChanges) {
    bar.classList.add('visible');
    if (countEl) {
      countEl.textContent = boState.pendingCommitMessages.length > 0
        ? boState.pendingCommitMessages.join(' • ')
        : 'You have unpublished changes ready to push to production.';
    }
  } else {
    bar.classList.remove('visible');
  }
  initDashboardStats();
  populateCategoryFilter();
}

function renderProvidersTable() {
  const tbody = document.getElementById('bo-providers-table-body');
  const countLabel = document.getElementById('bo-showing-count');
  if (!tbody) return;

  const q = (boState.searchQuery || '').toLowerCase().trim();
  const cat = boState.selectedCategory || 'All';

  const filtered = boState.providers.filter(p => {
    const matchesCat = cat === 'All' || p.category === cat || (p.categories && p.categories.includes(cat));
    if (!q) return matchesCat;
    const hay = [
      p.id,
      p.businessName,
      p.category,
      ...(p.categories || []),
      p.contactPerson,
      p.phone,
      p.email,
      p.description,
      p.communityNotes,
      ...(p.keywords || [])
    ].filter(Boolean).join(' ').toLowerCase();
    return matchesCat && hay.includes(q);
  });

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${boState.providers.length} providers`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--bo-text-muted);">
          No service providers match your current search or filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(p => {
    const allCats = (p.categories && p.categories.length > 0) ? p.categories : [p.category];
    const catBadges = allCats.map(c => {
      const style = getCatColor(c);
      return `<span class="bo-tag" style="color: ${style.color}; background: ${style.bg}; border: 1px solid ${style.border};">${escapeHtml(c)}</span>`;
    }).join(' ');

    const flags = [];
    if (p.communityRecommended === false) {
      flags.push(`<span class="bo-tag" style="background: rgba(148,163,184,0.12); color: #94A3B8; border: 1px solid rgba(148,163,184,0.25);">📋 Directory Listing</span>`);
    } else {
      flags.push(`<span class="bo-tag" style="background: rgba(245,158,11,0.14); color: #FBBF24; border: 1px solid rgba(245,158,11,0.3);">⭐ Recommended</span>`);
    }
    if (p.isLocalResident) {
      flags.push(`<span class="bo-tag" style="background: rgba(16,185,129,0.15); color: #6EE7B7; border: 1px solid rgba(16,185,129,0.35);">🏡 Resident</span>`);
    }
    if (p.is247Service) {
      flags.push(`<span class="bo-tag" style="background: rgba(239,68,68,0.15); color: #FCA5A5; border: 1px solid rgba(239,68,68,0.35);">⚡ 24/7</span>`);
    }

    const contactParts = [];
    if (p.contactPerson) contactParts.push(`<strong>${escapeHtml(p.contactPerson)}</strong>`);
    if (p.phone) contactParts.push(escapeHtml(p.phone));
    if (p.whatsAppGroup) contactParts.push(`<span style="color: #4ADE80;">WhatsApp Group</span>`);
    if (p.website) contactParts.push(`<span style="color: #60A5FA;">Website</span>`);

    return `
      <tr>
        <td><span class="bo-id-pill">${escapeHtml(p.id)}</span></td>
        <td>
          <div style="font-weight: 700; color: var(--bo-text-primary); margin-bottom: 0.2rem;">${escapeHtml(p.businessName)}</div>
          <div style="font-size: 0.775rem; color: var(--bo-text-muted); max-width: 320px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${escapeHtml(p.description || '')}
          </div>
        </td>
        <td><div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">${catBadges}</div></td>
        <td style="font-size: 0.8rem; color: var(--bo-text-secondary);">${contactParts.join(' • ') || '<span style="color: var(--bo-text-muted);">—</span>'}</td>
        <td><div style="display: flex; flex-wrap: wrap; gap: 0.3rem;">${flags.join(' ')}</div></td>
        <td style="text-align: right; white-space: nowrap;">
          <button type="button" class="bo-btn bo-btn-outline bo-btn-sm" onclick="window.openProviderModal('${escapeHtml(p.id)}')">Edit</button>
          <button type="button" class="bo-btn bo-btn-danger bo-btn-sm" onclick="window.deleteProvider('${escapeHtml(p.id)}')" style="margin-left: 0.35rem;">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   Provider Add / Edit Modal Logic
   -------------------------------------------------------------------------- */
function initModalHandlers() {
  const closeBtn = document.getElementById('bo-modal-close');
  const cancelBtn = document.getElementById('bo-modal-cancel');
  const overlay = document.getElementById('bo-provider-modal');
  const form = document.getElementById('bo-provider-form');
  const saveDraftBtn = document.getElementById('bo-save-draft-btn');
  const phoneInput = document.getElementById('field-phone');
  const primaryCatSelect = document.getElementById('field-category');
  const newCatToggleBtn = document.getElementById('bo-toggle-new-cat');
  const addNewCatBtn = document.getElementById('bo-add-new-cat-confirm');
  const toggleMultiCatsBtn = document.getElementById('bo-toggle-multi-cats');
  const toggleExtraLinksBtn = document.getElementById('bo-toggle-extra-links');
  const syncReviewCheckbox = document.getElementById('field-sync-review');
  const syncReviewFields = document.getElementById('bo-initial-review-fields');

  if (closeBtn) closeBtn.addEventListener('click', () => closeProviderModal(false));
  if (cancelBtn) cancelBtn.addEventListener('click', () => closeProviderModal(false));
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProviderModal(false);
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = formatUSPhone(phoneInput.value);
    });
  }

  if (primaryCatSelect) {
    primaryCatSelect.addEventListener('change', () => {
      renderMultiCategoryCheckboxes(primaryCatSelect.value, getSelectedAdditionalCategories());
    });
  }

  if (toggleMultiCatsBtn) {
    toggleMultiCatsBtn.addEventListener('click', () => {
      const box = document.getElementById('field-multi-categories');
      const arrow = document.getElementById('bo-multi-cats-arrow');
      if (!box) return;
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'grid' : 'none';
      if (arrow) arrow.textContent = isHidden ? '▲ Close Dropdown' : '▼ Select Categories';
    });
  }

  if (toggleExtraLinksBtn) {
    toggleExtraLinksBtn.addEventListener('click', () => {
      const box = document.getElementById('bo-extra-links-box');
      const arrow = document.getElementById('bo-extra-links-arrow');
      if (!box) return;
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'block' : 'none';
      if (arrow) arrow.textContent = isHidden ? '▲ Hide' : '▼ Show';
    });
  }

  if (newCatToggleBtn) {
    newCatToggleBtn.addEventListener('click', () => {
      const box = document.getElementById('bo-new-cat-box');
      if (!box) return;
      const isHidden = box.style.display === 'none';
      box.style.display = isHidden ? 'flex' : 'none';
      newCatToggleBtn.textContent = isHidden ? '✕ Cancel' : '+ New Category';
      if (isHidden) {
        const nameInput = document.getElementById('bo-new-cat-name');
        if (nameInput) nameInput.focus();
      }
    });
  }

  if (addNewCatBtn) {
    addNewCatBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('bo-new-cat-name');
      const colorInput = document.getElementById('bo-new-cat-color');
      const newCat = nameInput ? nameInput.value.trim() : '';
      const hex = colorInput ? colorInput.value : '#3B82F6';
      if (!newCat) return;

      if (!boState.categories.includes(newCat)) {
        boState.categories.push(newCat);
        boState.categoryColors[newCat] = {
          color: hex,
          bg: `${hex}24`,
          border: `${hex}59`,
          solid: hex
        };
      }
      populateModalCategoryDropdown(newCat);
      renderMultiCategoryCheckboxes(newCat, getSelectedAdditionalCategories());
      resetNewCategoryBox();
    });
  }

  if (syncReviewCheckbox && syncReviewFields) {
    syncReviewCheckbox.addEventListener('change', () => {
      syncReviewFields.style.display = syncReviewCheckbox.checked ? 'block' : 'none';
    });
  }

  // Stage locally button
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
      handleSaveProviderForm(false);
    });
  }

  // Save & Publish Immediately to GitHub
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSaveProviderForm(true);
    });
  }
}

function resetNewCategoryBox() {
  const box = document.getElementById('bo-new-cat-box');
  const toggleBtn = document.getElementById('bo-toggle-new-cat');
  const nameInput = document.getElementById('bo-new-cat-name');
  const colorInput = document.getElementById('bo-new-cat-color');
  if (box) box.style.display = 'none';
  if (toggleBtn) toggleBtn.textContent = '+ New Category';
  if (nameInput) nameInput.value = '';
  if (colorInput) colorInput.value = '#3B82F6';
}

function populateModalCategoryDropdown(selectedCat) {
  const select = document.getElementById('field-category');
  if (!select) return;
  select.innerHTML = boState.categories.map(c =>
    `<option value="${escapeHtml(c)}" ${c === selectedCat ? 'selected' : ''}>${escapeHtml(c)}</option>`
  ).join('');
}

function renderMultiCategoryCheckboxes(primaryCat, selectedList) {
  const wrap = document.getElementById('field-multi-categories');
  if (!wrap) return;
  const set = new Set(selectedList || []);
  set.add(primaryCat);

  wrap.innerHTML = boState.categories.map(c => {
    const isPrimary = c === primaryCat;
    const isChecked = set.has(c);
    return `
      <label class="bo-cat-chip" style="${isPrimary ? 'opacity: 0.65;' : ''}">
        <input type="checkbox" value="${escapeHtml(c)}" ${isChecked ? 'checked' : ''} ${isPrimary ? 'disabled' : ''}>
        <span>${escapeHtml(c)}${isPrimary ? ' (Primary)' : ''}</span>
      </label>
    `;
  }).join('');

  wrap.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => updateMultiCatsSummaryText(primaryCat));
  });
  updateMultiCatsSummaryText(primaryCat);
}

function updateMultiCatsSummaryText(primaryCat) {
  const summaryEl = document.getElementById('bo-multi-cats-summary');
  if (!summaryEl) return;
  const extras = getSelectedAdditionalCategories().filter(c => c !== primaryCat);
  if (extras.length > 0) {
    summaryEl.innerHTML = `🏷️ Additional Categories Selected: <strong style="color: #60A5FA;">${extras.map(escapeHtml).join(', ')}</strong>`;
  } else {
    summaryEl.textContent = '➕ Assign Additional Categories (Optional — if provider offers multiple services)';
  }
}

function getSelectedAdditionalCategories() {
  const wrap = document.getElementById('field-multi-categories');
  if (!wrap) return [];
  const inputs = wrap.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(inputs).map(i => i.value);
}

function openProviderModal(providerId, prefillData) {
  const overlay = document.getElementById('bo-provider-modal');
  const titleEl = document.getElementById('bo-modal-title');
  const idBadge = document.getElementById('field-id-display');
  const reviewBoxWrap = document.getElementById('bo-initial-review-section');
  const syncReviewCheckbox = document.getElementById('field-sync-review');
  const syncReviewFields = document.getElementById('bo-initial-review-fields');
  const modalError = document.getElementById('bo-modal-error');

  if (!overlay) return;
  if (modalError) modalError.style.display = 'none';

  // Snapshot categories before modal opens so Cancel restores any unsaved new category
  boState._modalCategoriesBackup = [...boState.categories];
  boState._modalCategoryColorsBackup = JSON.parse(JSON.stringify(boState.categoryColors));
  resetNewCategoryBox();

  const existing = providerId ? boState.providers.find(p => p.id === providerId) : null;
  boState.editingProviderId = existing ? existing.id : null;

  const targetId = existing ? existing.id : generateNextProviderId(boState.providers);
  if (titleEl) {
    titleEl.textContent = existing
      ? `Edit Provider: ${existing.businessName}`
      : (prefillData ? 'Review & Approve Submitted Provider' : 'Add New Service Provider');
  }
  if (idBadge) idBadge.textContent = `${targetId} ${existing ? '(Locked ID)' : '(New Auto-ID)'}`;

  const data = existing || prefillData || {};
  const primaryCat = data.category && boState.categories.includes(data.category)
    ? data.category
    : (boState.categories[0] || 'Handyman');

  populateModalCategoryDropdown(primaryCat);
  renderMultiCategoryCheckboxes(primaryCat, data.categories || [primaryCat]);

  document.getElementById('field-businessName').value = data.businessName || '';
  document.getElementById('field-contactPerson').value = data.contactPerson || '';
  document.getElementById('field-phone').value = data.phone || '';
  document.getElementById('field-email').value = data.email || '';
  document.getElementById('field-website').value = data.website || '';
  document.getElementById('field-instagram').value = data.instagram || '';
  document.getElementById('field-whatsAppGroup').value = data.whatsAppGroup || '';
  document.getElementById('field-googleReviewUrl').value = data.googleReviewUrl || data.reviewUrl || '';
  document.getElementById('field-description').value = data.description || '';
  document.getElementById('field-communityNotes').value = data.communityNotes || '';
  document.getElementById('field-keywords').value = Array.isArray(data.keywords) ? data.keywords.join(', ') : (data.keywords || '');

  document.getElementById('field-communityRecommended').checked = data.communityRecommended !== false;
  document.getElementById('field-isLocalResident').checked = data.isLocalResident === true;
  document.getElementById('field-is247Service').checked = data.is247Service === true;

  // Auto-collapse or expand optional Multi-Categories & Extra Links sections based on data
  const multiCatWrap = document.getElementById('field-multi-categories');
  const multiCatArrow = document.getElementById('bo-multi-cats-arrow');
  const hasSecondaryCats = Array.isArray(data.categories) && data.categories.some(c => c !== primaryCat);
  if (multiCatWrap) multiCatWrap.style.display = hasSecondaryCats ? 'grid' : 'none';
  if (multiCatArrow) multiCatArrow.textContent = hasSecondaryCats ? '▲ Close Dropdown' : '▼ Select Categories';

  const extraLinksBox = document.getElementById('bo-extra-links-box');
  const extraLinksArrow = document.getElementById('bo-extra-links-arrow');
  const hasExtraLinks = Boolean(data.googleReviewUrl || data.reviewUrl || data.instagram || data.whatsAppGroup);
  if (extraLinksBox) extraLinksBox.style.display = hasExtraLinks ? 'block' : 'none';
  if (extraLinksArrow) extraLinksArrow.textContent = hasExtraLinks ? '▲ Hide' : '▼ Show';

  // Initial review sync section (only shown when adding a new provider)
  if (reviewBoxWrap) {
    if (!existing) {
      reviewBoxWrap.style.display = 'block';
      const hasPrefillReview = Boolean(prefillData && prefillData.initialRating);
      if (syncReviewCheckbox) syncReviewCheckbox.checked = hasPrefillReview;
      if (syncReviewFields) syncReviewFields.style.display = hasPrefillReview ? 'block' : 'none';
      document.getElementById('field-rev-rating').value = (prefillData && prefillData.initialRating) || '5';
      document.getElementById('field-rev-text').value = (prefillData && prefillData.initialReviewText) || '';
      document.getElementById('field-rev-name').value = (prefillData && prefillData.reviewerName) || 'Verified Tracy Hills II Resident';
      document.getElementById('field-rev-address').value = (prefillData && prefillData.reviewerAddress) || 'Tracy Hills II';
    } else {
      reviewBoxWrap.style.display = 'none';
      if (syncReviewCheckbox) syncReviewCheckbox.checked = false;
    }
  }

  overlay.classList.add('open');
}

window.openProviderModal = openProviderModal;

function closeProviderModal(keepCategoryChanges) {
  resetNewCategoryBox();
  if (keepCategoryChanges !== true && boState._modalCategoriesBackup) {
    boState.categories = [...boState._modalCategoriesBackup];
    boState.categoryColors = JSON.parse(JSON.stringify(boState._modalCategoryColorsBackup));
  }
  const overlay = document.getElementById('bo-provider-modal');
  if (overlay) overlay.classList.remove('open');
}

function buildProviderObjectFromModal() {
  const existing = boState.editingProviderId
    ? boState.providers.find(p => p.id === boState.editingProviderId)
    : null;

  const id = existing ? existing.id : generateNextProviderId(boState.providers);
  const businessName = document.getElementById('field-businessName').value.trim();
  const primaryCat = document.getElementById('field-category').value;
  const allCats = getSelectedAdditionalCategories();
  if (!allCats.includes(primaryCat)) allCats.unshift(primaryCat);

  const contactPerson = document.getElementById('field-contactPerson').value.trim() || null;
  const phone = document.getElementById('field-phone').value.trim() || null;
  const email = document.getElementById('field-email').value.trim() || null;
  const website = document.getElementById('field-website').value.trim() || null;
  const instagram = document.getElementById('field-instagram').value.trim() || undefined;
  const whatsAppGroup = document.getElementById('field-whatsAppGroup').value.trim() || undefined;
  const googleReviewUrl = document.getElementById('field-googleReviewUrl').value.trim() || undefined;
  const description = document.getElementById('field-description').value.trim();
  const communityNotes = document.getElementById('field-communityNotes').value.trim() || null;

  const rawKeywords = document.getElementById('field-keywords').value.trim();
  const keywords = rawKeywords
    ? rawKeywords.split(',').map(k => k.trim().toLowerCase()).filter(Boolean)
    : undefined;

  const communityRecommended = document.getElementById('field-communityRecommended').checked;
  const isLocalResident = document.getElementById('field-isLocalResident').checked;
  const is247Service = document.getElementById('field-is247Service').checked;

  if (!businessName || !description) {
    throw new Error('Business Name and Description are required.');
  }

  // Construct clean object matching data.js conventions
  const obj = {
    id: id,
    businessName: businessName,
    category: primaryCat
  };

  if (allCats.length > 1) {
    obj.categories = allCats;
  }

  obj.contactPerson = contactPerson;
  obj.phone = phone;
  obj.email = email;
  obj.website = website;

  if (whatsAppGroup) obj.whatsAppGroup = whatsAppGroup;
  if (instagram) obj.instagram = instagram;
  if (googleReviewUrl) obj.googleReviewUrl = googleReviewUrl;

  obj.description = description;
  obj.communityNotes = communityNotes;

  if (!communityRecommended) {
    obj.communityRecommended = false;
  } else if (existing && existing.communityRecommended === true) {
    obj.communityRecommended = true;
  }

  if (isLocalResident) obj.isLocalResident = true;
  if (is247Service) obj.is247Service = true;

  obj.isPlaceholder = false;
  if (keywords && keywords.length > 0) {
    obj.keywords = keywords;
  }
  obj.lastUpdated = getTodayIso();

  return obj;
}

async function handleSaveProviderForm(publishImmediately) {
  const modalError = document.getElementById('bo-modal-error');
  const publishModalBtn = document.getElementById('bo-save-publish-btn');

  try {
    if (modalError) modalError.style.display = 'none';
    const providerObj = buildProviderObjectFromModal();
    const isNew = !boState.editingProviderId;

    if (isNew) {
      boState.providers.push(providerObj);
      boState.pendingCommitMessages.push(`Add ${providerObj.businessName} (${providerObj.id})`);
    } else {
      const idx = boState.providers.findIndex(p => p.id === boState.editingProviderId);
      if (idx !== -1) {
        boState.providers[idx] = providerObj;
        boState.pendingCommitMessages.push(`Update ${providerObj.businessName} (${providerObj.id})`);
      }
    }

    boState.hasUnsavedChanges = true;
    renderProvidersTable();
    updatePublishBar();

    // Check if we also need to sync an initial resident rating/review to Google Sheet
    const syncReviewCheckbox = document.getElementById('field-sync-review');
    const shouldSyncReview = isNew && syncReviewCheckbox && syncReviewCheckbox.checked;
    let reviewPayload = null;

    if (shouldSyncReview) {
      reviewPayload = {
        providerId: providerObj.id,
        providerName: providerObj.businessName,
        rating: parseInt(document.getElementById('field-rev-rating').value || '5', 10),
        reviewText: (document.getElementById('field-rev-text').value || '').trim(),
        reviewerName: (document.getElementById('field-rev-name').value || 'Verified Resident').trim(),
        reviewerAddress: (document.getElementById('field-rev-address').value || 'Tracy Hills II').trim(),
        reviewerPhone: '',
        reviewerEmail: 'tracyhillsphase2@gmail.com',
        b_hp_field: ''
      };
    }

    if (publishImmediately) {
      if (publishModalBtn) {
        publishModalBtn.disabled = true;
        publishModalBtn.innerHTML = `<span class="bo-spinner"></span> <span>Publishing to GitHub...</span>`;
      }

      await publishProvidersToGitHub(reviewPayload);
      closeProviderModal(true);
    } else {
      closeProviderModal(true);
    }
  } catch (err) {
    if (modalError) {
      modalError.textContent = err.message || 'Error saving provider.';
      modalError.style.display = 'block';
    }
  } finally {
    if (publishModalBtn) {
      publishModalBtn.disabled = false;
      publishModalBtn.innerHTML = `<span>Save & Publish to Production →</span>`;
    }
  }
}

function deleteProvider(providerId) {
  const target = boState.providers.find(p => p.id === providerId);
  if (!target) return;

  if (!confirm(`Are you sure you want to remove "${target.businessName}" (${target.id}) from the directory?`)) {
    return;
  }

  boState.providers = boState.providers.filter(p => p.id !== providerId);
  boState.hasUnsavedChanges = true;
  boState.pendingCommitMessages.push(`Remove ${target.businessName} (${target.id})`);
  renderProvidersTable();
  updatePublishBar();
}

window.deleteProvider = deleteProvider;

/* --------------------------------------------------------------------------
   Publish Updated Providers Array to GitHub via Cloudflare Worker
   -------------------------------------------------------------------------- */
async function publishProvidersToGitHub(optionalInitialReviewPayload) {
  const publishBtn = document.getElementById('bo-publish-changes-btn');
  const statusBanner = document.getElementById('bo-global-status');

  const commitSummary = boState.pendingCommitMessages.length > 0
    ? `[Backoffice] ${boState.pendingCommitMessages.join('; ')}`
    : `[Backoffice] Update Service Providers in data.js`;

  try {
    if (publishBtn) {
      publishBtn.disabled = true;
      publishBtn.innerHTML = `<span class="bo-spinner"></span> <span>Publishing to GitHub...</span>`;
    }
    if (statusBanner) statusBanner.style.display = 'none';

    const res = await fetch(WORKER_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'admin_save_providers',
        password: getAdminPass(),
        commitMessage: commitSummary,
        providers: boState.providers,
        categories: boState.categories,
        categoryColors: boState.categoryColors
      })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Failed to commit changes to GitHub.');
    }

    // If an initial resident review was included, forward it to Google Sheets Reviews API
    let reviewSyncedMsg = '';
    if (optionalInitialReviewPayload) {
      try {
        await fetch(REVIEWS_API_URL, {
          method: 'POST',
          body: JSON.stringify(optionalInitialReviewPayload)
        });
        reviewSyncedMsg = ' Initial resident star rating was also sent to your Google Sheet!';
      } catch (revErr) {
        console.warn('Initial review sync warning:', revErr);
        reviewSyncedMsg = ' (Note: Provider published, but Google Sheet review sync had a network warning.)';
      }
    }

    boState.hasUnsavedChanges = false;
    boState.pendingCommitMessages = [];
    saveSessionCache();
    updatePublishBar();

    if (statusBanner) {
      statusBanner.className = 'bo-alert bo-alert-success';
      statusBanner.innerHTML = `<strong>✅ Published Successfully!</strong> Committed to GitHub (<code>js/data.js</code>). GitHub Pages will finish deploying in ~45 seconds.${reviewSyncedMsg}`;
      statusBanner.style.display = 'block';
    }

    // Clear ?prefill= query parameter if present so refreshing doesn't re-open modal
    if (window.location.search.includes('prefill=')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  } catch (err) {
    if (statusBanner) {
      statusBanner.className = 'bo-alert bo-alert-error';
      statusBanner.textContent = 'Publish Error: ' + (err.message || 'Could not push to GitHub.');
      statusBanner.style.display = 'block';
    }
    throw err;
  } finally {
    if (publishBtn) {
      publishBtn.disabled = false;
      publishBtn.innerHTML = `<span>Publish Changes to Production →</span>`;
    }
  }
}

/* --------------------------------------------------------------------------
   Check for 1-Click Email Prefill Link (?prefill=base64json)
   -------------------------------------------------------------------------- */
function checkUrlPrefillParam() {
  const params = new URLSearchParams(window.location.search);
  const rawPrefill = params.get('prefill');
  if (!rawPrefill) return;

  try {
    const jsonStr = decodeURIComponent(escape(atob(rawPrefill.replace(/-/g, '+').replace(/_/g, '/'))));
    const parsed = JSON.parse(jsonStr);

    // Smartly parse contactInfo into phone, email, website, or whatsAppGroup
    const cInfo = (parsed.contactInfo || '').trim();
    let phone = '';
    let email = '';
    let website = '';
    let whatsAppGroup = '';

    if (cInfo.includes('chat.whatsapp.com')) {
      whatsAppGroup = cInfo;
    } else if (cInfo.includes('@') && !cInfo.startsWith('http')) {
      email = cInfo;
    } else if (cInfo.startsWith('http://') || cInfo.startsWith('https://') || cInfo.startsWith('www.')) {
      website = cInfo.startsWith('www.') ? 'https://' + cInfo : cInfo;
    } else {
      phone = formatUSPhone(cInfo) || cInfo;
    }

    const isVendorSelf = parsed.submissionType === 'vendor_self_listing';
    const cleanReviewText = (parsed.reviewText || '').replace(/^\[Rating:\s*\d\/5\s*Stars\]\s*/i, '').trim();

    const prefillObj = {
      businessName: parsed.businessName || '',
      category: parsed.category || 'Handyman',
      phone: phone,
      email: email,
      website: website,
      whatsAppGroup: whatsAppGroup,
      googleReviewUrl: parsed.reviewLink || '',
      description: isVendorSelf ? cleanReviewText : `${parsed.category || 'Service'} provider recommended by Tracy Hills II resident.`,
      communityNotes: !isVendorSelf ? cleanReviewText : '',
      communityRecommended: !isVendorSelf,
      is247Service: Boolean(parsed.is247Service),
      isLocalResident: false,
      initialRating: !isVendorSelf ? (parsed.rating || 5) : null,
      initialReviewText: !isVendorSelf ? cleanReviewText : ''
    };

    setTimeout(() => {
      openProviderModal(null, prefillObj);
    }, 200);
  } catch (e) {
    console.warn('Could not parse prefill parameter:', e);
  }
}

