/**
 * Tracy Hills Phase II - WhatsApp Community Resident Verification Modal
 * Intercepts clicks on WhatsApp group links and opens a verification form dialog.
 */

(function () {
  'use strict';

  // Configured Cloudflare Worker API Endpoint
  const API_ENDPOINT = 'https://tracy-hills-api.tracyhillsphase2.workers.dev/';

  // Modal HTML Template
  const modalMarkup = `
    <div id="whatsapp-modal-overlay" class="wa-modal-overlay" aria-hidden="true">
      <div class="wa-modal-container" role="dialog" aria-labelledby="wa-modal-title" aria-modal="true">
        
        <!-- Modal Header -->
        <div class="wa-modal-header">
          <div class="wa-modal-title-group">
            <div class="wa-modal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div>
              <h3 id="wa-modal-title" class="wa-modal-title">Resident Verification</h3>
              <p class="wa-modal-subtitle">Tracy Hills Phase II WhatsApp Community</p>
            </div>
          </div>
          <button type="button" id="wa-modal-close" class="wa-modal-close-btn" aria-label="Close modal">&times;</button>
        </div>

        <!-- Modal Body (Form View) -->
        <div id="wa-modal-body-form" class="wa-modal-body">
          <div class="wa-notice-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>This is a private group for Tracy Hills Phase II resident homeowners. Information is used solely by volunteer admins to verify residency and is never shared publicly.</span>
          </div>

          <form id="wa-verification-form" onsubmit="event.preventDefault(); window.submitWhatsAppVerification();">
            
            <div class="wa-form-group">
              <label for="wa-full-name" class="wa-label">Full Name *</label>
              <input type="text" id="wa-full-name" class="wa-input" placeholder="e.g. Jane Doe" required>
            </div>

            <div class="wa-form-group">
              <label for="wa-address" class="wa-label">Tracy Hills II Address / Lot # *</label>
              <input type="text" id="wa-address" class="wa-input" placeholder="e.g. 1234 Corning Way / Lot 45" required>
            </div>

            <div class="wa-form-grid">
              <div class="wa-form-group">
                <label for="wa-phone" class="wa-label">WhatsApp Phone Number *</label>
                <input type="tel" id="wa-phone" class="wa-input" placeholder="e.g. (209) 555-0199" required>
              </div>

              <div class="wa-form-group">
                <label for="wa-email" class="wa-label">Email Address *</label>
                <input type="email" id="wa-email" class="wa-input" placeholder="e.g. jane@example.com" required>
              </div>
            </div>

            <div class="wa-form-group">
              <label for="wa-neighbors" class="wa-label">Immediate Neighbors' Names or Lot #s <span style="font-weight: 400; color: #94A3B8;">(Helps speed up verification)</span></label>
              <input type="text" id="wa-neighbors" class="wa-input" placeholder="e.g. Left neighbor: John Smith / Facing across: Lot 42">
            </div>

            <div class="wa-form-group">
              <label for="wa-notes" class="wa-label">Additional Notes (Optional)</label>
              <input type="text" id="wa-notes" class="wa-input" placeholder="e.g. Move-in date / Phase II Lot owner">
            </div>

            <!-- Resident Advocacy Email Group Opt-In -->
            <div class="wa-advocacy-box" style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(59, 130, 246, 0.35); border-radius: 8px; padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.65rem; cursor: pointer; color: #F8FAFC; font-size: 0.875rem; font-weight: 600;">
                <input type="checkbox" id="wa-advocacy-optin" style="margin-top: 0.2rem; accent-color: #3B82F6; width: 18px; height: 18px;" onchange="document.getElementById('wa-advocacy-options').style.display = this.checked ? 'block' : 'none'">
                <span>
                  📢 Also join Tracy Hills II Resident Advocacy Email Group
                  <span style="display: block; font-weight: 400; font-size: 0.775rem; color: #94A3B8; margin-top: 0.15rem;">
                    Receive critical emails regarding HOA governance, City of Tracy representation, builder updates, and school district matters.
                  </span>
                </span>
              </label>

              <div id="wa-advocacy-options" style="display: none; margin-top: 0.85rem; padding-top: 0.85rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.8rem; color: #CBD5E1;">
                <div style="font-weight: 600; color: #60A5FA; margin-bottom: 0.5rem;">I agree to receive updates / participate in (optional):</div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.4rem 0.75rem; margin-bottom: 0.75rem;">
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="checkbox" class="wa-advocacy-topic" value="HOA Communication & Governance" checked style="accent-color: #3B82F6;">
                    <span>HOA Governance</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="checkbox" class="wa-advocacy-topic" value="City of Tracy Issues" checked style="accent-color: #3B82F6;">
                    <span>City of Tracy Issues</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="checkbox" class="wa-advocacy-topic" value="Developer / Lennar Matters" checked style="accent-color: #3B82F6;">
                    <span>Developer / Lennar</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                    <input type="checkbox" class="wa-advocacy-topic" value="Jefferson School District" checked style="accent-color: #3B82F6;">
                    <span>Jefferson School Dist.</span>
                  </label>
                </div>

                <div>
                  <label for="wa-community-name" style="display: block; font-size: 0.775rem; font-weight: 600; color: #94A3B8; margin-bottom: 0.25rem;">Sub-Community / Collection Name (Optional)</label>
                  <select id="wa-community-name" style="width: 100%; background: #0F172A; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; padding: 0.45rem 0.65rem; color: #F8FAFC; font-size: 0.8rem;">
                    <option value="">Select sub-community collection...</option>
                    <option value="Rockingham">Rockingham</option>
                    <option value="Crestwick">Crestwick</option>
                    <option value="Cairnway">Cairnway</option>
                    <option value="Slateshire">Slateshire</option>
                    <option value="Ridgerton">Ridgerton</option>
                    <option value="Rangewood">Rangewood</option>
                    <option value="Boulder">Boulder</option>
                    <option value="Other / Phase II Resident">Other / Phase II Resident</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Anti-Spam Honeypot Field (Hidden from humans) -->
            <div style="position: absolute; left: -9999px; opacity: 0; pointer-events: none;" aria-hidden="true">
              <input type="text" id="wa-hp-field" name="b_hp_field" tabindex="-1" autocomplete="off">
            </div>

            <div id="wa-error-message" class="wa-error-banner" style="display: none;"></div>

            <button type="submit" id="wa-submit-btn" class="wa-submit-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span>Submit Verification Request</span>
            </button>
          </form>
        </div>

        <!-- Modal Body (Success View) -->
        <div id="wa-modal-body-success" class="wa-modal-body" style="display: none; text-align: center; padding: 2rem 1.5rem;">
          <div class="wa-success-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h4 class="wa-success-title">Verification Request Submitted!</h4>
          <p class="wa-success-desc">
            Thank you for submitting your verification details. Community admins have received your information and will review and add your phone number to the WhatsApp group shortly.
          </p>

          <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 0.85rem 1rem; margin-top: 1.25rem; font-size: 0.825rem; color: #CBD5E1; text-align: left; line-height: 1.5;">
            <strong style="color: #4ADE80; display: block; margin-bottom: 0.25rem;">📌 Quick Reminder Once Added:</strong>
            Please set your WhatsApp member display name/tag to include your community and street name (e.g., <em>"Jane (Corning Way)"</em>). Full home addresses are not required in member tags.
          </div>

          <button type="button" id="wa-success-close-btn" class="wa-submit-btn" style="margin: 1.5rem auto 0; background: #15803D; width: 100%; justify-content: center;">
            Done / Close
          </button>
        </div>

      </div>
    </div>
  `;

  // Inject Modal DOM elements when DOM is ready
  function initModal() {
    if (document.getElementById('whatsapp-modal-overlay')) return;
    
    const div = document.createElement('div');
    div.innerHTML = modalMarkup;
    document.body.appendChild(div.firstElementChild);

    // Bind event listeners
    const overlay = document.getElementById('whatsapp-modal-overlay');
    const closeBtn = document.getElementById('wa-modal-close');
    const successCloseBtn = document.getElementById('wa-success-close-btn');

    closeBtn.addEventListener('click', closeModal);
    successCloseBtn.addEventListener('click', closeModal);
    
    // Close on overlay click outside container
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });

    // Attach click interceptor to all WhatsApp community links
    attachWhatsAppInterceptors();
  }

  // Intercept all links targeting WhatsApp community
  function attachWhatsAppInterceptors() {
    document.addEventListener('click', function (e) {
      const target = e.target.closest('a[href*="chat.whatsapp.com"], .js-whatsapp-join');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        openModal();
      }
    }, true);
  }

  function openModal() {
    const overlay = document.getElementById('whatsapp-modal-overlay');
    const formView = document.getElementById('wa-modal-body-form');
    const successView = document.getElementById('wa-modal-body-success');
    const errorBanner = document.getElementById('wa-error-message');
    const advocacyOptions = document.getElementById('wa-advocacy-options');

    if (!overlay) return;

    // Reset views & form
    formView.style.display = 'block';
    successView.style.display = 'none';
    errorBanner.style.display = 'none';
    if (advocacyOptions) advocacyOptions.style.display = 'none';
    document.getElementById('wa-verification-form').reset();

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
    const overlay = document.getElementById('whatsapp-modal-overlay');
    if (!overlay) return;

    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Submit verification request to Cloudflare Worker API
  window.submitWhatsAppVerification = async function () {
    const submitBtn = document.getElementById('wa-submit-btn');
    const errorBanner = document.getElementById('wa-error-message');
    const formView = document.getElementById('wa-modal-body-form');
    const successView = document.getElementById('wa-modal-body-success');

    const fullName = document.getElementById('wa-full-name').value.trim();
    const address = document.getElementById('wa-address').value.trim();
    const phone = document.getElementById('wa-phone').value.trim();
    const email = document.getElementById('wa-email').value.trim();
    const neighbors = document.getElementById('wa-neighbors') ? document.getElementById('wa-neighbors').value.trim() : '';
    const notes = document.getElementById('wa-notes').value.trim();
    const hpField = document.getElementById('wa-hp-field') ? document.getElementById('wa-hp-field').value : '';

    const joinAdvocacy = document.getElementById('wa-advocacy-optin') ? document.getElementById('wa-advocacy-optin').checked : false;
    const communityName = document.getElementById('wa-community-name') ? document.getElementById('wa-community-name').value : '';
    const advocacyTopics = Array.from(document.querySelectorAll('.wa-advocacy-topic:checked')).map(cb => cb.value);

    if (!fullName || !address || !phone || !email) {
      errorBanner.textContent = 'Please fill out all required fields marked with *';
      errorBanner.style.display = 'block';
      return;
    }

    // UI Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="wa-spinner"></span> <span>Submitting...</span>`;
    errorBanner.style.display = 'none';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formType: 'whatsapp_verification',
          fullName: fullName,
          address: address,
          phone: phone,
          email: email,
          neighbors: neighbors,
          notes: notes,
          joinAdvocacy: joinAdvocacy,
          communityName: communityName,
          advocacyTopics: joinAdvocacy ? advocacyTopics : [],
          b_hp_field: hpField
        })
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        // Show Success View
        formView.style.display = 'none';
        successView.style.display = 'block';
      } else {
        throw new Error(resData.message || 'Server error submitting request.');
      }
    } catch (err) {
      console.error('WhatsApp Verification Error:', err);
      errorBanner.textContent = err.message || 'Network error. Please check your internet connection and try again.';
      errorBanner.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        <span>Submit Verification Request</span>
      `;
    }
  };

  // Initialize when DOM content is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }

  // Global trigger helper
  window.openWhatsAppVerificationModal = openModal;
})();
