/* ==========================================================================
   Tracy Hills II - Static Data Repository
   ========================================================================== */

const WHATSAPP_URL = 'https://chat.whatsapp.com/JbKtulmPtaKJ3CA4htB0uS?mode=gi_t';
const FACEBOOK_URL = 'https://www.facebook.com/groups/1039884364940491';

const ANNOUNCEMENTS_DATA = [
  {
    "id": "ann-002",
    "title": "Welcome to the New Tracy Hills II Community Resource Hub!",
    "category": "Announcement",
    "priority": "high",
    "date": "2026-08-22",
    "summary": "We are excited to launch the new Tracy Hills II Community Resource Hub! Please note that updates to several parts of the website are currently in progress.",
    "details": "In the meantime, if you notice any issues or have any feedback, please email us directly at tracyhillsphase2@gmail.com.",
    "link": "mailto:tracyhillsphase2@gmail.com"
  }
];

const EVENTS_DATA = [
  {
    "id": "evt-001",
    "title": "HOA Board Meeting",
    "date": "2026-10-22",
    "time": "Time To Be Announced",
    "location": "Zoom",
    "description": "Upcoming quarterly HOA Board Meeting for Tracy Hills II. Meeting agenda and Zoom stream link will be shared by Seabreeze Management prior to the meeting.",
    "category": "HOA Meeting"
  }
];

const CONTACTS_DATA = {
  "hoa": {
    "managementCompany": "Seabreeze Management Company",
    "businessHours": "(800) 232-7517",
    "customerServiceEmail": "customercare@seabreezemgmt.com",
    "customerServicePhone": "(800) 232-7517",
    "afterHoursEmergency": "(800) 232-7517",
    "portalUrl": "https://commarea.cincwebaxis.com",
    "staff": [
      {
        "name": "Jackie Beasley",
        "email": "jackie.beasley@seabreezemgmt.com"
      },
      {
        "name": "Lorenzo Faderogao",
        "email": "lorenzo.faderogao@seabreezemgmt.com"
      },
      {
        "name": "Belinda Prunty",
        "email": "Belinda.Prunty@seabreezemgmt.com"
      },
      {
        "name": "Victoria Ellis",
        "email": "victoria.ellis@seabreezemgmt.com"
      },
      {
        "name": "Laura Ravazza",
        "email": "laura.ravazza@seabreezemgmt.com"
      }
    ]
  },
  "city": {
    "generalPhone": "(209) 831-6000",
    "generalEmail": "cm@cityoftracy.org",
    "policeEmergency": "911",
    "policeNonEmergency": "(209) 831-6550",
    "policeEmail": "policedept@cityoftracy.org",
    "policeRecords": "(209) 831-6560",
    "fireEmergency": "911",
    "fireNonEmergency": "(209) 831-6700",
    "fireEmail": "fire.dept@sjcfire.org",
    "firePrevention": "(209) 831-6707",
    "animalControl": "(209) 831-6364",
    "animalAfterHours": "(209) 831-6550",
    "animalEmail": "Animal.Services@CityofTracy.org",
    "utilitiesWater": "(209) 831-6800",
    "utilitiesEmail": "customerservice@cityoftracy.org",
    "utilityPaymentPortal": "https://ipn.paymentus.com/cp/trcy?lang=en",
    "codeEnforcement": "(209) 831-6410",
    "codeEnforcementEmail": "code.enforcement@tracypd.com",
    "publicWorks": "(209) 831-6300",
    "publicWorksEmail": "publicworks@cityoftracy.org",
    "buildingSafety": "(209) 831-6400",
    "buildingSafetyEmail": "plancheck@cityoftracy.org",
    "parksAndRec": "(209) 831-6200",
    "parksAndRecEmail": "parks@cityoftracy.org",
    "trashRecycling": "(209) 835-0601",
    "trashEmail": "info@tdswm.com",
    "trashProvider": "Tracy Delta Solid Waste Management",
    "trashAppAndroid": "https://play.google.com/store/apps/details?id=com.tdswm.recollect.waste",
    "trashAppIos": "https://apps.apple.com/us/app/tdswm-wvd-collection-services/id6459505232",
    "websiteUrl": "https://www.cityoftracy.org",
    "serviceRequestPortal": "https://user.govoutreach.com/tracy/support.php"
  },
  "developer": {
    "name": "Lennar Homes",
    "customerCarePhone": "(888) 214-2494",
    "afterHoursPhone": "(800) 295-7361",
    "warrantyPortal": "https://myhome.lennar.com",
    "hours": "Mon - Fri: 7:00 AM - 4:00 PM | After-Hours Emergency: (800) 295-7361"
  }
};

const FAQ_DATA = [
  {
    "id": "faq-001",
    "category": "HOA",
    "question": "How do I access the Seabreeze HOA portal and pay dues?",
    "answer": `<div class="faq-details">
  <p>
    Seabreeze Management Company handles HOA dues billing, account balance statements, and architectural submittals for Tracy Hills II.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Portal Access Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.35); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 0.4rem; margin-bottom: 0.6rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-link); margin: 0;">Seabreeze CINC Portal</h4>
          <span style="background: rgba(37, 99, 235, 0.15); color: #60A5FA; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px; white-space: nowrap;">Online Portal</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.5;">
          Access your resident account to pay monthly dues, set up auto-pay, download account statements, or track submittals.
        </p>
      </div>
      <a href="https://commarea.cincwebaxis.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: var(--accent-primary); color: #FFFFFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Log In to CINC Portal ↗</span>
      </a>
    </div>

    <!-- Seabreeze Customer Care Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">Customer Care Contacts</h4>
      <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.825rem; color: var(--text-secondary);">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-link)" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>Phone: <a href="tel:8002327517" style="color: var(--text-primary); font-weight: 600;">(800) 232-7517</a></span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-link)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>Email: <a href="mailto:customercare@seabreezemgmt.com" style="color: var(--accent-link);">customercare@seabreezemgmt.com</a></span>
        </div>
        <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 0.25rem;">
          Mon – Fri: 8:00 AM – 5:00 PM (After-hours emergency call center active 24/7).
        </div>
      </div>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: The details provided above are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["dues", "payment", "seabreeze", "portal", "hoa fee", "cinc", "billing", "account", "management"]
  },
  {
    "id": "faq-012",
    "category": "HOA",
    "question": "What are the Architectural Review Committee (ARC) approval rules, fees, deadlines, and submittal process?",
    "answer": `<div class="faq-arc-details">
  <p>
    Prior to commencing any exterior addition, modification, construction, hardscape, or landscaping work on your lot, you must obtain written approval from the Architectural Review Committee (ARC).
  </p>

  <!-- Review Requirement Levels -->
  <div style="margin: 1.25rem 0;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-link)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      <span>When Is ARC Approval Required?</span>
    </h4>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem;">
      
      <!-- Full Review Card -->
      <div style="background: #0F172A; border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; font-size: 0.875rem; color: #FCA5A5;">Full Review Required</span>
          <span style="background: rgba(239, 68, 68, 0.15); color: #FCA5A5; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">$200 Fee</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          All new backyard/side yard landscaping, concrete patios, pavers, retaining walls, aluminum pergolas/patio covers, outdoor kitchens, water features, swimming pools, and solar panels.
        </p>
      </div>

      <!-- Minor Review Card -->
      <div style="background: #0F172A; border: 1px solid rgba(234, 179, 8, 0.3); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; font-size: 0.875rem; color: #FEF08A;">Minor Review Required</span>
          <span style="background: rgba(234, 179, 8, 0.15); color: #FEF08A; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">$175 Fee</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          Exterior house repainting (different color), storage sheds extending above fence line, and post-mounted exterior lighting.
        </p>
      </div>

      <!-- Exempt Card -->
      <div style="background: #0F172A; border: 1px solid rgba(34, 197, 94, 0.3); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 700; font-size: 0.875rem; color: #86EFAC;">Exempt / No Review</span>
          <span style="background: rgba(34, 197, 94, 0.15); color: #86EFAC; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">$0 Fee</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          Minor seasonal flower plantings, matching original exterior paint, potted plants (up to 2 visible from common areas), and matching replacement side gates.
        </p>
      </div>

    </div>
  </div>

  <!-- Timelines & Costs -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
    
    <!-- Timelines Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.4rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Timelines & Review Deadlines</span>
      </h4>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.5rem;">
        <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
          <span style="color: var(--accent-link); font-weight: 700;">•</span>
          <span><strong>New Homeowner Submittal:</strong> Initial landscape plans must be submitted within <strong>6 months</strong> (recommended within 90 days) of close of escrow.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
          <span style="color: var(--accent-link); font-weight: 700;">•</span>
          <span><strong>New Homeowner Completion:</strong> Landscape work must be completed within <strong>9 months (180 days)</strong> of close of escrow.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
          <span style="color: var(--accent-link); font-weight: 700;">•</span>
          <span><strong>ARC Review Turnaround:</strong> ARC has up to <strong>45 calendar days</strong> from receipt of a <em>complete</em> application to approve or deny.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
          <span style="color: var(--accent-link); font-weight: 700;">•</span>
          <span><strong>Construction Window:</strong> Work must commence within <strong>12 months</strong> of approval and be completed within <strong>6 months</strong> of commencement.</span>
        </li>
      </ul>
    </div>

    <!-- Costs & Fees Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.4rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        <span>Costs & Security Deposit</span>
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.825rem;">
        <div style="background: #0F172A; border-radius: var(--radius-sm); padding: 0.65rem 0.85rem;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            <span>Submittal Fee (Non-Refundable):</span>
            <span style="color: #FCA5A5; white-space: nowrap;">$200 / $175</span>
          </div>
          <span style="color: var(--text-muted); font-size: 0.775rem;">$200 for Full Review or $175 for Minor Review, payable to <em>Tracy Hills II Community Association</em>.</span>
        </div>
        <div style="background: #0F172A; border-radius: var(--radius-sm); padding: 0.65rem 0.85rem;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 0.35rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            <span>Security Deposit (100% Refundable):</span>
            <span style="color: #86EFAC; white-space: nowrap;">$250</span>
          </div>
          <span style="color: var(--text-muted); font-size: 0.775rem;">Payable to <em>Tracy Hills II Community Association</em>. Refunded in full after Form E (Notice of Completion) & photos verify zero common area damage.</span>
        </div>
      </div>
    </div>

  </div>

  <!-- Step-by-Step Submittal Process -->
  <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.15rem; margin-bottom: 1.25rem;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.4rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-link)" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
      <span>Step-by-Step: How to Submit Your Application</span>
    </h4>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      
      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.825rem;">
        <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">1</span>
        <div>
          <strong style="color: var(--text-primary);">Prepare Your 2D Plan Drawing (Sheet L-1):</strong> Create a dimensioned layout showing property lines, house foundation, proposed patio/pergola/walls, tree locations with setbacks, and surface drainage arrows. Include your <strong>Name, Address, Lot #, Tract #, and a North Arrow</strong>.
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.825rem;">
        <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">2</span>
        <div>
          <strong style="color: var(--text-primary);">Collect Neighbor Signatures (Form D):</strong> Show your plan drawing to left/right adjacent neighbors, rear neighbors, and 3 facing neighbors across the street to sign Form D (or note "Vacant/Builder" if unoccupied).
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.825rem;">
        <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">3</span>
        <div>
          <strong style="color: var(--text-primary);">Complete Association Forms:</strong> Fill out and sign <strong>Form B</strong> (Checklist), <strong>Form C</strong> (Review Request), and <strong>Form G</strong> (Water Quality BMP Agreement).
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.825rem;">
        <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">4</span>
        <div>
          <strong style="color: var(--text-primary);">Attach Product Cut Sheets & Site Photos:</strong> Include photos of existing yard (front, back, left, right) plus manufacturer specification sheets for items like your pergola, artificial turf, and stone veneers.
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.825rem;">
        <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">5</span>
        <div>
          <strong style="color: var(--text-primary);">Send Package to Seabreeze:</strong> Email your consolidated PDF to <a href="mailto:csteam@seabreezemgmt.com" style="color: var(--accent-link); font-weight: 600;">csteam@seabreezemgmt.com</a> (or mail to Seabreeze Management Company, 4305 Hacienda Dr., Suite 350, Pleasanton, CA 94588) with the two checks.
        </div>
      </div>

    </div>
  </div>

  <!-- Top 6 Rules Grid -->
  <div style="margin-bottom: 1.25rem;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDE047" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      <span>Top 6 Rules to Ensure First-Time Approval</span>
    </h4>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem;">
      
      <!-- Rule 1 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">1. Pergolas / Patio Covers</strong>
        Must be constructed of <strong>non-combustible heavy-gauge aluminum</strong> (e.g., powder-coated extruded aluminum). Traditional wood pergolas are strictly prohibited under the Phase 2 Fire Protection Plan. Minimum setbacks: <strong>5′-0″ from rear fence</strong> and <strong>3′-0″ from side fence</strong>.
      </div>

      <!-- Rule 2 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">2. Retaining Walls</strong>
        Must <strong>never exceed 24 inches in height</strong> from finished grade, must be sealed with Thoroseal waterproofing, and must include an integrated sub-drain pipe.
      </div>

      <!-- Rule 3 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">3. Tree Setbacks & Root Barriers</strong>
        All trees must maintain a minimum <strong>5′-0″ setback from all property lines and fences</strong> and must use root barrier collars.
      </div>

      <!-- Rule 4 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">4. Prohibited Flammable Plants</strong>
        Never submit pyrophytic species prohibited by the Fire Protection Plan (zero cypress, pines, junipers, bamboo, eucalyptus, or palm trees).
      </div>

      <!-- Rule 5 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">5. Drainage & Runoff Slopes</strong>
        Hardscape must have a minimum <strong>1.0% slope away from house</strong>; landscape beds must have <strong>2.0% slope to drains</strong> connecting to builder storm PVC pipe. Zero sheet-flow runoff permitted onto neighboring lots.
      </div>

      <!-- Rule 6 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem;">
        <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">6. Synthetic Turf Standards</strong>
        Must specify a <strong>Class A fire-resistance rating</strong> (ASTM E84 / SFM standard) and a minimum <strong>10-year manufacturer warranty</strong> installed over aggregate base.
      </div>

    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle);">
    ℹ️ <em>Note: The facts and guidelines provided above are as of Summer 2026.</em>
  </div>

</div>`,
    "keywords": ["arc", "architectural", "approval", "landscaping", "patio", "pergola", "retaining wall", "turf", "drainage", "fees", "deposit", "deadlines", "seabreeze", "rules", "form d", "form b", "fire protection", "trees", "submittal"]
  },
  {
    "id": "faq-002",
    "category": "Lennar / Developer",
    "question": "Who is responsible for maintaining the streets in Tracy Hills II?",
    "answer": `<div class="faq-details">
  <p>
    Currently, all streets in Tracy Hills II remain under builder jurisdiction and are maintained by <strong>Lennar Homes</strong> until official public dedication to the City of Tracy is completed.
  </p>

  <div style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: var(--radius-md); padding: 0.85rem 1rem; margin: 1rem 0; font-size: 0.85rem; color: #FDE047;">
    <strong>Notice:</strong> Please report street hazards, unpaved curbs, potholes, or construction debris directly to Lennar Customer Care rather than the City of Tracy.
  </div>

  <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
    <div>
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem;">Lennar Customer Care</h4>
      <div style="font-size: 0.825rem; color: var(--text-secondary);">
        Phone: <a href="tel:8882142494" style="color: var(--accent-link); font-weight: 600;">(888) 214-2494</a> (7 AM–4 PM Mon–Fri) | After-Hours Emergency: <a href="tel:8002957361" style="color: #F59E0B; font-weight: 600;">(800) 295-7361</a>
      </div>
    </div>
    <a href="https://myhome.lennar.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.35rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-primary); font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.85rem; border-radius: var(--radius-sm); text-decoration: none;">
      <span>MyHome Portal ↗</span>
    </a>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Street maintenance responsibility and builder contact details are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["street", "road", "pothole", "curb", "maintenance", "lennar", "city of tracy", "paving"]
  },
  {
    "id": "faq-003",
    "category": "City Services",
    "question": "Who maintains the community parks and green spaces?",
    "answer": `<div class="faq-details">
  <p>
    Public parks, playgrounds, and landscaped green belts in Tracy Hills II are maintained by the <strong>City of Tracy Parks & Recreation Department</strong>.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Phone Card -->
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Parks & Rec Phone Line</h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        For general inquiries, facility rentals, or urgent maintenance issues:
      </p>
      <a href="tel:2098316200" style="color: var(--accent-link); font-weight: 700; font-size: 0.9rem;">(209) 831-6200</a>
    </div>

    <!-- Online Service Request Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.3); border-radius: var(--radius-md); padding: 1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">Report a Park Issue Online</h4>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
          Report broken playground equipment, irrigation leaks, or trash bin issues directly to the City portal.
        </p>
      </div>
      <a href="https://user.govoutreach.com/tracy/support.php" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.35rem; background: var(--accent-primary); color: #FFF; font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.85rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Submit City Service Request ↗</span>
      </a>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: The details provided above are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["park", "green space", "playground", "parks and rec", "city of tracy", "maintenance", "report issue"]
  },
  {
    "id": "faq-004",
    "category": "City Services",
    "question": "Where can I recycle large cardboard boxes, electronics, or bulky items?",
    "answer": `<div class="faq-details">
  <p>
    Large cardboard moving boxes, e-waste, appliances, and bulky household items can be recycled at the official <strong>Tracy Material Recovery Facility</strong> operated by Tracy Delta Solid Waste Management (TDSWM).
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin: 1rem 0;">
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.825rem;">
      <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">📦 Cardboard & Boxes</strong>
      Flattened oversized boxes, packaging materials, and clean paperboard.
    </div>
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.825rem;">
      <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">🖥️ E-Waste & Electronics</strong>
      Monitors, TVs, computers, printers, small appliances, and cables.
    </div>
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.825rem;">
      <strong style="color: var(--accent-link); display: block; margin-bottom: 0.25rem;">🛋️ Bulky Household Items</strong>
      Furniture, mattresses, water heaters, and large metal scrap.
    </div>
  </div>

  <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.75rem;">
    <span style="font-size: 0.85rem; color: var(--text-secondary);">Visit the recovery center website for operating hours, location directions, and fee details:</span>
    <a href="https://tracymaterialrecovery.com/recycling/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.35rem; background: var(--accent-primary); color: #FFF; font-size: 0.8rem; font-weight: 600; padding: 0.4rem 0.85rem; border-radius: var(--radius-sm); text-decoration: none;">
      <span>Tracy Material Recovery Info ↗</span>
    </a>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Recycling guidelines and facility hours are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["boxes", "cardboard", "recycling", "bulky item", "tracy material recovery", "waste", "trash", "drop off"]
  },
  {
    "id": "faq-005",
    "category": "City Services",
    "question": "How do I find my trash collection schedule and download the collection app?",
    "answer": `<div class="faq-details">
  <p>
    Curbside waste, green waste, and recycling service in Tracy Hills II is operated by <strong>Tracy Delta Solid Waste Management (TDSWM)</strong>.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Collection Schedule App Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.3); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">Collection Schedule App</h4>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Download the official TDSWM app on your smartphone to view collection calendars, receive holiday push reminders, and search item sorting guides.
        </p>
      </div>
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="https://apps.apple.com/us/app/tdswm-wvd-collection-services/id6459505232" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.3rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-primary); font-size: 0.775rem; font-weight: 600; padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); text-decoration: none;">
          <span> iOS App Store ↗</span>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.tdswm.recollect.waste" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.3rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-primary); font-size: 0.775rem; font-weight: 600; padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); text-decoration: none;">
          <span>🤖 Google Play ↗</span>
        </a>
      </div>
    </div>

    <!-- Phone Support Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Customer Service Line</h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
        For missed pickups, extra bin requests, or billing questions:
      </p>
      <a href="tel:2098350601" style="color: var(--accent-link); font-weight: 700; font-size: 0.95rem;">(209) 835-0601</a>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Waste collection schedule details are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["trash", "garbage", "recycling", "tracy delta", "app", "collection", "schedule", "tdswm"]
  },
  {
    "id": "faq-006",
    "category": "Utilities",
    "question": "How do I pay my City of Tracy water and municipal utility bill online?",
    "answer": `<div class="faq-details">
  <p>
    City of Tracy municipal utility services (water, sewer, and stormwater fees) are billed directly by the City of Tracy Finance Department.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Online Payment Card -->
    <div style="background: #0F172A; border: 1px solid rgba(34, 197, 94, 0.35); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #86EFAC; margin: 0;">City Paymentus Portal</h4>
          <span style="background: rgba(34, 197, 94, 0.15); color: #86EFAC; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">Official Portal</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Pay water bills securely online via credit card or e-check, set up recurring monthly auto-pay, or view past billing statements.
        </p>
      </div>
      <a href="https://ipn.paymentus.com/cp/trcy?lang=en" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: #166534; color: #FFFFFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Pay City Utility Bill Online ↗</span>
      </a>
    </div>

    <!-- Phone Support Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">City Utility Customer Service</h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
        For account setup, billing inquiries, or service transfers:
      </p>
      <a href="tel:2098316800" style="color: var(--accent-link); font-weight: 700; font-size: 0.95rem;">(209) 831-6800</a>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Utility payment links and billing contacts are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["water", "utilities", "bill", "payment", "city of tracy", "paymentus", "sewer", "billing"]
  },
  {
    "id": "faq-007",
    "category": "Lennar / Developer",
    "question": "How do I submit a new home warranty service request to Lennar?",
    "answer": `<div class="faq-details">
  <p>
    Non-emergency home warranty claims and customer care requests should be submitted directly through the official <strong>MyLennar / MyHome Portal</strong> (<strong>myhome.lennar.com</strong>).
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- MyLennar Portal Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.3); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">MyHome Lennar Care Portal</h4>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Submit non-emergency service requests during business hours, upload photos of defects, and track appointment status.
        </p>
      </div>
      <a href="https://myhome.lennar.com" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: var(--accent-primary); color: #FFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Open MyHome Lennar Portal ↗</span>
      </a>
    </div>

    <!-- Emergency & Business Hours Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Lennar Customer Care Contacts</h4>
      
      <div style="margin-bottom: 0.65rem;">
        <span style="font-size: 0.775rem; color: var(--text-muted); display: block;">Business Hours (7:00 AM – 4:00 PM Mon–Fri):</span>
        <a href="tel:8882142494" style="color: var(--accent-link); font-weight: 700; font-size: 0.9rem;">(888) 214-2494</a>
      </div>

      <div>
        <span style="font-size: 0.775rem; color: #FEF08A; font-weight: 700; display: block;">After-Hours Emergency Message Center:</span>
        <a href="tel:8002957361" style="color: #F59E0B; font-weight: 700; font-size: 0.95rem;">(800) 295-7361</a>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
          Mon–Fri: 4:00 PM – 7:00 AM | Weekends & Holidays: 24 Hours
        </div>
      </div>
    </div>
  </div>

  <!-- Emergency Criteria Box -->
  <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-md); padding: 0.9rem 1rem; margin: 1rem 0;">
    <strong style="color: #FCA5A5; font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">⚠️ What Qualifies as a Lennar After-Hours Emergency?</strong>
    <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.8rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.3rem;">
      <li>• No heat in winter / cold weather or no AC in summer / warm weather</li>
      <li>• Severe plumbing problems or hazardous electrical situations</li>
      <li>• Any condition endangering health/safety or gas leak smell</li>
    </ul>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Lennar Customer Care emergency procedures as of August 2026 update.</em>
  </div>
</div>`,
    "keywords": ["lennar", "warranty", "customer care", "repair", "new home", "builder", "mylennar", "service request"]
  },
  {
    "id": "faq-008",
    "category": "WhatsApp / Communication",
    "question": "How do I join the resident WhatsApp and Facebook groups?",
    "answer": `<div class="faq-details">
  <p>
    Connect with fellow Tracy Hills Phase II homeowners across our active community communication channels:
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- WhatsApp Card -->
    <div style="background: #0F172A; border: 1px solid rgba(37, 211, 102, 0.35); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #4ADE80; margin: 0;">WhatsApp Community</h4>
          <span style="background: rgba(37, 211, 102, 0.15); color: #4ADE80; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">Verified Residents</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Real-time neighborhood alerts, security updates, vendor recommendations, and topic-specific sub-groups.
        </p>
      </div>
      <a href="https://chat.whatsapp.com/JbKtulmPtaKJ3CA4htB0uS?mode=gi_t" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: #15803D; color: #FFFFFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Join WhatsApp Community ↗</span>
      </a>
    </div>

    <!-- Facebook Group Card -->
    <div style="background: #0F172A; border: 1px solid rgba(24, 119, 242, 0.35); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: #60A5FA; margin: 0;">Facebook Resident Group</h4>
          <span style="background: rgba(24, 119, 242, 0.15); color: #60A5FA; font-size: 0.75rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 4px;">Social Group</span>
        </div>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Community discussions, neighbor Q&A, lost & found, and social event planning.
        </p>
      </div>
      <a href="https://www.facebook.com/groups/1039884364940491" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: #1D4ED8; color: #FFFFFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Join Facebook Group ↗</span>
      </a>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Community group links and structure are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["whatsapp", "facebook", "group", "chat", "neighbors", "community", "social", "communication"]
  },
  {
    "id": "faq-009",
    "category": "Utilities",
    "question": "Why is a water softener recommended in Tracy Hills, and what are the system options?",
    "answer": `<div class="faq-water-softener-details">
  <p>
    The water in Tracy Hills and surrounding San Joaquin County is quite hard. If you check tap water in this area, you will typically see a <strong>Total Dissolved Solids (TDS) reading of around 250 ppm</strong>, although exact numbers vary by specific home location and season.
  </p>

  <div style="background: rgba(30, 58, 138, 0.25); border: 1px solid rgba(59, 130, 246, 0.3); border-left: 4px solid var(--accent-link); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin: 1rem 0; font-size: 0.875rem;">
    <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent-link); font-weight: 700; margin-bottom: 0.35rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
      <span>Water Treatment Overview</span>
    </div>
    <div style="color: var(--text-secondary);">
      Installing a whole-home system helps prevent mineral scale buildup in pipes, fixtures, and water heaters, while a reverse osmosis (RO) drinking system provides high-purity drinking water.
    </div>
  </div>

  <p style="font-weight: 600; color: var(--text-primary); margin-top: 1.25rem; margin-bottom: 0.75rem;">
    There are generally two approaches when it comes to setting up a whole-home water treatment system:
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
    
    <!-- Approach 1 Card -->
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.65rem; gap: 0.5rem; flex-wrap: wrap;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin: 0;">1. One-Vendor Solution</h4>
          <span style="background: rgba(239, 68, 68, 0.15); color: #FCA5A5; font-size: 0.775rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; border: 1px solid rgba(239, 68, 68, 0.3);">$3,000 – $10,000+</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem; line-height: 1.5;">
          Some water-treatment companies sell, install, and maintain a combination of a whole-home filtration/conditioning system along with a reverse osmosis (RO) drinking-water system. Complete vendor-installed packages often feature systems like <strong>Clack WS1</strong> or <strong>Puronics</strong>.
        </p>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.825rem; margin-bottom: 0.85rem;">
          <div style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: #4ADE80; font-weight: 700; flex-shrink: 0;">✓</span>
            <span style="color: var(--text-secondary);"><strong>Advantage:</strong> Convenience of dealing with one company as a single point of contact if issues arise.</span>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: #F87171; font-weight: 700; flex-shrink: 0;">✕</span>
            <span style="color: var(--text-secondary);"><strong>Downside:</strong> Fewer component customization options & higher overall investment cost.</span>
          </div>
        </div>
      </div>
      <div style="font-size: 0.775rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.6rem; margin-top: 0.5rem;">
        💡 <em>Note: Clearly verify what exact improvements the proposed system will provide before signing a contract.</em>
      </div>
    </div>

    <!-- Approach 2 Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.35); border-radius: var(--radius-md); padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.65rem; gap: 0.5rem; flex-wrap: wrap;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-link); margin: 0;">2. Select Equipment & Hire Installer</h4>
          <span style="background: rgba(34, 197, 94, 0.15); color: #86EFAC; font-size: 0.775rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; border: 1px solid rgba(34, 197, 94, 0.3);">~$1,350 – $3,200 Total</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.5;">
          Purchase your own whole-home water softener/filtration system and RO system, then hire a qualified installer to connect them. Popular options like <strong>Aquasure</strong> and <strong>Waterdrop</strong> are available through Amazon and Home Depot.
        </p>
        
        <!-- Cost Breakdown List -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; margin-bottom: 0.75rem; font-size: 0.8rem;">
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Typical Equipment & Install Costs:</div>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.3rem; color: var(--text-secondary);">
            <li style="display: flex; justify-content: space-between; gap: 0.5rem;">
              <span>• Whole-home water softener:</span>
              <strong style="color: var(--text-primary); flex-shrink: 0;">$450 – $1,000</strong>
            </li>
            <li style="display: flex; justify-content: space-between; gap: 0.5rem;">
              <span>• RO drinking system:</span>
              <strong style="color: var(--text-primary); flex-shrink: 0;">$200 – $1,200</strong>
            </li>
            <li style="display: flex; justify-content: space-between; gap: 0.5rem;">
              <span>• Installation labor:</span>
              <strong style="color: var(--text-primary); flex-shrink: 0;">$700 – $1,000</strong>
            </li>
          </ul>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.825rem; margin-bottom: 0.65rem;">
          <div style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: #4ADE80; font-weight: 700; flex-shrink: 0;">✓</span>
            <span style="color: var(--text-secondary);"><strong>Advantage:</strong> Freedom to choose component specs & achieve high quality at lower overall cost.</span>
          </div>
          <div style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: #F87171; font-weight: 700; flex-shrink: 0;">✕</span>
            <span style="color: var(--text-secondary);"><strong>Downside:</strong> Requires extra upfront research and coordination.</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Popular Brands Breakdown -->
  <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1rem;">
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 0.75rem;">
      <div style="flex: 1; min-width: 250px;">
        <strong style="color: var(--text-primary); font-size: 0.85rem; display: block; margin-bottom: 0.4rem;">Popular Community Brands & Options:</strong>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: var(--accent-link); font-weight: 700;">•</span>
            <span><strong>Approach 1 (Full Vendor Package):</strong> <strong>Clack WS1</strong> and <strong>Puronics</strong> are typical all-in-one systems provided directly through vendor installation contracts.</span>
          </li>
          <li style="display: flex; align-items: flex-start; gap: 0.4rem;">
            <span style="color: var(--accent-link); font-weight: 700;">•</span>
            <span><strong>Approach 2 (Self-Selected Equipment):</strong> Brands such as <strong>Aquasure</strong> and <strong>Waterdrop</strong> are popular self-purchase options available through Amazon and Home Depot.</span>
          </li>
        </ul>
      </div>
      <a href="providers.html?q=water" style="display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; font-weight: 600; color: var(--accent-link); background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.3); padding: 0.4rem 0.75rem; border-radius: var(--radius-sm); text-decoration: none; transition: background 0.15s ease; align-self: flex-start; margin-top: 0.25rem;">
        <span>Find Local Installers ↗</span>
      </a>
    </div>
  </div>

  <!-- Water Testing Recommendation Box -->
  <div style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: var(--radius-sm); padding: 0.85rem 1rem; font-size: 0.825rem; color: #FDE047; display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.85rem;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; margin-top: 0.1rem;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <div style="line-height: 1.5;">
      <strong style="color: #FEF08A;">Important Advice Before Purchasing:</strong> Always test your water first and clarify what specific issues you are trying to address (hardness, chlorine, sediment, TDS, or drinking-water quality), as different filtration systems solve different problems.
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle);">
    ℹ️ <em>Note: The details provided are based on Summer 2026 community data.</em>
  </div>

</div>`,
    "keywords": ["water", "softener", "hardness", "tds", "250 ppm", "filtration", "reverse osmosis", "ro", "aquasure", "waterdrop", "puronics", "clack", "vendor", "installer", "cost", "plumbing"]
  },
  {
    "id": "faq-013",
    "category": "Utilities",
    "question": "How does our home's Solar (GAF), Microinverter (Enphase), and Battery (Tesla Powerwall) system work, how do I activate it, and how do I get free app access?",
    "answer": `<div class="faq-solar-details">
  <p>
    Your home is built with an integrated clean energy system where three key pieces of equipment work together:
  </p>

  <!-- Equipment Overview Cards -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; margin: 1rem 0 1.25rem 0;">
    
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
      <div style="font-weight: 700; color: #60A5FA; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
        <span style="background: rgba(96, 165, 250, 0.15); color: #60A5FA; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">1</span>
        <span>GAF Energy Solar Panels / Shingles</span>
      </div>
      <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
        Mounted on the roof to capture sunlight and generate Direct Current (DC) electricity.
      </p>
    </div>

    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
      <div style="font-weight: 700; color: #F59E0B; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
        <span style="background: rgba(245, 158, 11, 0.15); color: #F59E0B; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">2</span>
        <span>Enphase Microinverters</span>
      </div>
      <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
        Mounted under roof panels to convert DC power into usable Alternating Current (AC) electricity right at the source.
      </p>
    </div>

    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
      <div style="font-weight: 700; color: #4ADE80; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
        <span style="background: rgba(74, 222, 128, 0.15); color: #4ADE80; padding: 0.15rem 0.45rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">3</span>
        <span>Tesla Powerwall & Gateway</span>
      </div>
      <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
        Stores excess solar power, provides home backup power during outages, and offsets expensive peak PG&E utility rates.
      </p>
    </div>

  </div>

  <!-- PTO Critical Warning Callout -->
  <div style="background: rgba(234, 179, 8, 0.12); border: 1px solid rgba(234, 179, 8, 0.35); border-left: 4px solid #EAB308; border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 1.25rem; font-size: 0.875rem;">
    <div style="display: flex; align-items: center; gap: 0.5rem; color: #FEF08A; font-weight: 700; margin-bottom: 0.35rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      <span>Keep System OFF Until Official PTO Is Granted</span>
    </div>
    <div style="color: var(--text-secondary); font-size: 0.825rem; line-height: 1.5;">
      Do <strong>NOT</strong> turn the solar breakers or Powerwall switch on until PG&E issues official written Permission to Operate (PTO). Running early can trigger billing penalties or uncredited power generation.
    </div>
  </div>

  <!-- 1. Activation Process & PTO -->
  <div style="margin-bottom: 1.25rem;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-link)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <span>1. Activation Process & Permission to Operate (PTO)</span>
    </h4>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; margin-bottom: 1rem;">
      
      <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
        <div style="font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">
          Step 1: City Inspection Sign-off
        </div>
        <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
          Lennar and GAF Energy finalize construction and obtain final building inspection approvals from the City of Tracy.
        </p>
      </div>

      <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
        <div style="font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">
          Step 2: Interconnection Submission
        </div>
        <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
          GAF Energy submits permit finals, electrical single-line diagrams, and authorization forms to PG&E.
        </p>
      </div>

      <div style="background: #0F172A; border: 1px solid rgba(34, 197, 94, 0.35); border-radius: var(--radius-md); padding: 0.95rem; font-size: 0.825rem;">
        <div style="font-weight: 700; color: #86EFAC; margin-bottom: 0.35rem; display: flex; align-items: center; justify-content: space-between;">
          <span>Step 3: PTO Issuance</span>
          <span style="font-size: 0.7rem; color: #86EFAC; background: rgba(34, 197, 94, 0.15); padding: 0.1rem 0.4rem; border-radius: 4px;">10–30 Days</span>
        </div>
        <p style="color: var(--text-secondary); margin: 0; line-height: 1.45;">
          PG&E reviews the submission and emails your official PTO approval confirmation letter.
        </p>
      </div>

    </div>

    <!-- How to Avoid Delays Box -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1rem;">
      <strong style="color: var(--accent-link); font-size: 0.875rem; display: block; margin-bottom: 0.5rem;">How to Avoid Delays:</strong>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.45rem;">
        <li style="display: flex; align-items: flex-start; gap: 0.45rem;">
          <span style="color: #4ADE80; font-weight: 700;">✓</span>
          <span><strong>Set up PG&E immediately:</strong> Ensure your PG&E residential electric account is active on day 1 of escrow close. Account name/address mismatches stall processing.</span>
        </li>
        <li style="display: flex; align-items: flex-start; gap: 0.45rem;">
          <span style="color: #4ADE80; font-weight: 700;">✓</span>
          <span><strong>Sign authorization forms promptly:</strong> Watch inbox & spam for e-signature requests from <strong>GAF Energy</strong> or <strong>PG&E</strong> (Agreement & Customer Authorization) and complete right away.</span>
        </li>
      </ul>
    </div>

    <!-- Turning System ON Steps -->
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <strong style="color: var(--text-primary); font-size: 0.875rem; display: block; margin-bottom: 0.65rem;">Turning the System ON (After PTO Arrives):</strong>
      <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.825rem; color: var(--text-secondary);">
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">1</span>
          <span>Switch dedicated breakers labeled <strong>Solar PV</strong>, <strong>Energy Storage</strong>, and <strong>Powerwall</strong> in your main electrical panel to <strong>ON</strong>.</span>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">2</span>
          <span>Flip exterior AC/DC disconnect levers up to <strong>ON</strong> position.</span>
        </div>
        <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
          <span style="background: var(--accent-primary); color: #FFF; font-weight: 800; font-size: 0.75rem; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;">3</span>
          <span>Turn the power toggle switch on the side of the Tesla Powerwall unit to <strong>ON</strong>.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 2. Tesla App vs. Enphase App: Role & Differences -->
  <div style="margin-bottom: 1.25rem;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.75rem;">
      2. Tesla App vs. Enphase App: Role & Differences
    </h4>

    <!-- Responsive App Comparison Cards -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.85rem; margin-bottom: 0.85rem;">
      
      <!-- Tesla App Card -->
      <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.35); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
          <h5 style="font-size: 0.9rem; font-weight: 700; color: var(--accent-link); margin: 0;">⚡ Tesla App</h5>
          <span style="font-size: 0.7rem; color: #93C5FD; background: rgba(59, 130, 246, 0.15); padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 600;">Whole-Home & Battery</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.825rem; color: var(--text-secondary);">
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Main Function:</strong>
            Whole-Home Energy & Powerwall Battery Management
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Data Shown:</strong>
            Total solar produced, Powerwall battery charge %, real-time home power usage, grid import/export.
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Problem Solving:</strong>
            Alerts to overall generation drops, household usage spikes, or grid outages.
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Controls & Modes:</strong>
            Configures Time-Based Control (discharges battery during PG&E 4–9 PM peak rates) & Self-Powered mode.
          </div>
        </div>
      </div>

      <!-- Enphase Enlighten App Card -->
      <div style="background: #0F172A; border: 1px solid rgba(245, 158, 11, 0.35); border-radius: var(--radius-md); padding: 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">
          <h5 style="font-size: 0.9rem; font-weight: 700; color: #F59E0B; margin: 0;">☀️ Enphase Enlighten App</h5>
          <span style="font-size: 0.7rem; color: #FDE047; background: rgba(245, 158, 11, 0.15); padding: 0.15rem 0.5rem; border-radius: 4px; font-weight: 600;">Roof Array & Diagnostics</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.825rem; color: var(--text-secondary);">
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Main Function:</strong>
            Roof Array Health & Microinverter Diagnostics
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Data Shown:</strong>
            Detailed, panel-by-panel wattage produced by each individual solar shingle/panel.
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Problem Solving:</strong>
            Pinpoints exact underperforming, shaded, dirty, or faulty roof panels.
          </div>
          <div>
            <strong style="color: var(--text-primary); display: block; font-size: 0.775rem;">Controls & Modes:</strong>
            View-only production monitoring and diagnostic performance reporting.
          </div>
        </div>
      </div>

    </div>
    
    <p style="font-size: 0.825rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
      💡 <em>In practice:</em> Use the <strong>Tesla App</strong> daily to manage household power flows, battery backup, and rate savings. Use the <strong>Enphase App</strong> as a diagnostic check to verify all roof panels & microinverters are operating at peak efficiency.
    </p>
  </div>

  <!-- 3. How to Get Free Enphase App Access (Purchased vs. Leased) -->
  <div style="margin-bottom: 1.25rem;">
    <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.65rem;">
      3. How to Get Free Enphase App Access (Purchased vs. Leased)
    </h4>
    <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem; line-height: 1.5;">
      Standard homeowner access to the Enphase Enlighten app is <strong>100% free</strong>—original new-construction home buyers do not pay any subscription, activation, or transfer fees.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.85rem;">
      
      <!-- Purchased Card -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
        <div style="font-weight: 700; color: #60A5FA; font-size: 0.875rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          <span>If You OWN / Purchased the System:</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          <li>• Contact <strong>Enphase Customer Support</strong> or GAF Energy Support.</li>
          <li>• Provide your full name, email, home address, and <strong>Enphase Gateway Serial Number</strong> (located on Envoy/Gateway box near main panel or garage).</li>
          <li>• They will register your email as primary system owner, granting full access to your interactive array map.</li>
        </ul>
      </div>

      <!-- Leased Card -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
        <div style="font-weight: 700; color: #F59E0B; font-size: 0.875rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
          <span>If System is LEASED / PPA:</span>
        </div>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.825rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.4rem;">
          <li>• Contact your <strong>Solar Lease Provider</strong> (e.g. GAF Energy / Lennar Solar partner).</li>
          <li>• Because the leasing company remains the legal equipment owner, their support team will send an <strong>authorized homeowner guest invitation</strong> to your email.</li>
          <li>• This allows you to monitor generation without altering master owner settings.</li>
        </ul>
      </div>

    </div>
  </div>

  <!-- 4. Key Contacts -->
  <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 0.85rem; font-size: 0.825rem;">
    <strong style="color: var(--accent-link); display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Key Support Contacts:</strong>
    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; color: var(--text-secondary);">
      <li>• <strong>GAF Energy Support:</strong> Call <a href="tel:18007663411" style="color: var(--accent-link); font-weight: 600;">1-800-766-3411</a> for solar onboarding, lease assistance, & initial account registration.</li>
      <li>• <strong>PG&E Solar Interconnection:</strong> Call <a href="tel:18777434112" style="color: var(--accent-link); font-weight: 600;">1-877-743-4112</a> to track PTO application status.</li>
      <li>• <strong>Lennar Customer Care:</strong> Call <a href="tel:18882142494" style="color: var(--accent-link); font-weight: 600;">1-888-214-2494</a> if City of Tracy final building permit sign-off is pending.</li>
      <li>• <strong>Enphase Support:</strong> Call <a href="tel:18777974743" style="color: var(--accent-link); font-weight: 600;">1-877-797-4743</a> for gateway connection help & Enlighten account linking.</li>
    </ul>
  </div>

  <!-- Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Solar activation procedures and PG&E interconnection guidelines are as of 2026 community records.</em>
  </div>
</div>`,
    "keywords": ["solar", "tesla", "powerwall", "enphase", "gaf", "pto", "permission to operate", "pg&e", "microinverter", "activation", "battery", "enlighten", "app", "lease", "purchased", "breakers", "interconnection"]
  },
  {
    "id": "faq-010",
    "category": "Safety",
    "question": "What is the non-emergency contact number for Tracy Police?",
    "answer": `<div class="faq-details">
  <p>
    For life-threatening emergencies, active crimes in progress, or fires, always dial <strong>911</strong> immediately.
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Emergency Callout -->
    <div style="background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: var(--radius-md); padding: 1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: #FCA5A5; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        <span>Life Emergencies: Dial 911</span>
      </h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin: 0;">
        For immediate life safety, medical emergencies, active fires, or crimes requiring urgent police response.
      </p>
    </div>

    <!-- Non-Emergency Police -->
    <div style="background: #0F172A; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Tracy Police Non-Emergency</h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
        For noise complaints, non-urgent incident reports, or suspicious activity:
      </p>
      <a href="tel:2098316550" style="color: var(--accent-link); font-weight: 700; font-size: 0.95rem;">(209) 831-6550</a>
    </div>
  </div>

  <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.75rem 1rem; font-size: 0.8rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1rem; justify-content: space-between;">
    <span>🐾 Animal Control: <a href="tel:2098316364" style="color: var(--text-primary); font-weight: 600;">(209) 831-6364</a></span>
    <span>📋 Code Enforcement: <a href="tel:2098316410" style="color: var(--text-primary); font-weight: 600;">(209) 831-6410</a></span>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: Emergency and non-emergency phone numbers are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["police", "safety", "emergency", "non-emergency", "fire", "911", "security", "tracy police"]
  },
  {
    "id": "faq-011",
    "category": "Community Resources",
    "question": "How can I recommend a service provider or contractor to the community directory?",
    "answer": `<div class="faq-details">
  <p>
    We welcome resident recommendations for quality handymen, plumbers, electricians, landscapers, and contractors!
  </p>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
    <!-- Suggest Vendor Button Card -->
    <div style="background: #0F172A; border: 1px solid rgba(96, 165, 250, 0.3); border-radius: var(--radius-md); padding: 1.1rem; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--accent-link); margin-bottom: 0.35rem;">Service Directory Form</h4>
        <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
          Submit your recommended vendor using the interactive suggestion modal in our Service Directory.
        </p>
      </div>
      <a href="providers.html" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem; background: var(--accent-primary); color: #FFF; font-weight: 600; font-size: 0.825rem; padding: 0.5rem 1rem; border-radius: var(--radius-sm); text-decoration: none;">
        <span>Open Service Directory ↗</span>
      </a>
    </div>

    <!-- Email Card -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.1rem;">
      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">Email Recommendation</h4>
      <p style="font-size: 0.825rem; color: var(--text-secondary); margin-bottom: 0.65rem;">
        Or send contractor details directly to the resident volunteer team:
      </p>
      <a href="mailto:tracyhillsphase2@gmail.com" style="color: var(--accent-link); font-weight: 600; font-size: 0.875rem;">tracyhillsphase2@gmail.com</a>
    </div>
  </div>

  <!-- Summer 2026 Note -->
  <div style="font-size: 0.775rem; color: var(--text-muted); padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle); margin-top: 0.85rem;">
    ℹ️ <em>Note: The details provided above are as of Summer 2026.</em>
  </div>
</div>`,
    "keywords": ["recommend", "provider", "contractor", "handyman", "directory", "suggest", "vendor", "email"]
  }
];

const PROVIDERS_DATA = [
  {
    "id": "sp-101",
    "businessName": "Morse Visnys",
    "category": "Handyman",
    "contactPerson": "Morse Visnys",
    "phone": "(209) 684-8332",
    "email": null,
    "website": null,
    "description": "Plumbing, backyard projects, washer/dryer installation, and all kinds of home repair work.",
    "communityNotes": "Plumbing, backyard, washer/dryer installation, all kinds of work.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-102",
    "businessName": "Edger Contractor",
    "category": "General Contractor",
    "contactPerson": "Edger",
    "phone": "(209) 641-4338",
    "email": null,
    "website": null,
    "description": "General contracting, home improvements, and remodeling projects.",
    "communityNotes": "Contractor recommended from Sunny’s Manteca neighbor.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-115",
    "businessName": "Rafael Ramirez (General Contractor)",
    "category": "General Contractor",
    "contactPerson": "Rafael Ramirez",
    "phone": "(209) 649-8891",
    "email": null,
    "website": null,
    "description": "General contracting, home improvements, and construction projects.",
    "communityNotes": "Recommended by community member's friend in Mountain House.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-116",
    "businessName": "Javier Cordova (General Contractor)",
    "category": "General Contractor",
    "contactPerson": "Javier Cordova",
    "phone": "(209) 482-3139",
    "email": null,
    "website": null,
    "description": "General contracting, remodeling, and home improvement work.",
    "communityNotes": "Recommended by community member's friend in Mountain House.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-103",
    "businessName": "Lazzaro Handyman",
    "category": "Handyman",
    "contactPerson": "Lazzaro",
    "phone": "(925) 478-9435",
    "email": null,
    "website": null,
    "description": "General handyman and home repair services.",
    "communityNotes": "General handyman.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-104",
    "businessName": "Geramias Handyman",
    "category": "Handyman",
    "contactPerson": "Geramias",
    "phone": "(510) 395-3779",
    "email": null,
    "website": null,
    "description": "General handyman repairs, wall mounting, and home maintenance.",
    "communityNotes": "Recommended by 5M Lane homeowners.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-105",
    "businessName": "Sergio’s Handyman Services",
    "category": "Handyman",
    "contactPerson": "Sergio",
    "phone": "(408) 449-2105",
    "email": null,
    "website": null,
    "description": "General handyman services, maintenance, and home repairs.",
    "communityNotes": "General handyman.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-106",
    "businessName": "Defined Home Services",
    "category": "Handyman",
    "contactPerson": null,
    "phone": "(925) 478-9435",
    "email": null,
    "website": null,
    "description": "All kinds of home repair work and interior/exterior door installations.",
    "communityNotes": "All kinds of work, installs doors.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-107",
    "businessName": "Martin Leon",
    "category": "Handyman",
    "contactPerson": "Martin Leon",
    "phone": "(510) 866-1741",
    "email": null,
    "website": null,
    "description": "Multi-skilled handyman providing high quality home repair and renovation work.",
    "communityNotes": "Multi-skilled, high quality work.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-108",
    "businessName": "Jose Handyman",
    "category": "Handyman",
    "contactPerson": "Jose",
    "phone": "(510) 589-2784",
    "email": null,
    "website": null,
    "description": "General handyman services and routine household repairs.",
    "communityNotes": "Handyman.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-109",
    "businessName": "Efren Handyman",
    "category": "Handyman",
    "contactPerson": "Efren",
    "phone": "(510) 372-7731",
    "email": null,
    "website": null,
    "description": "General handyman services and maintenance work.",
    "communityNotes": "Handyman (provided by Amar).",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-110",
    "businessName": "Andres Handyman",
    "category": "Handyman",
    "contactPerson": "Andres",
    "phone": "(510) 552-8947",
    "email": null,
    "website": null,
    "description": "General handyman, home repairs, and maintenance services.",
    "communityNotes": "Handyman recommended by Phase II residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-111",
    "businessName": "John Handyman",
    "category": "Handyman",
    "contactPerson": "John",
    "phone": "(510) 883-3134",
    "email": null,
    "website": null,
    "description": "General handyman, home maintenance, and repair services.",
    "communityNotes": "Handyman recommended by Phase II residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-112",
    "businessName": "Robert (Handyman & Electrician)",
    "category": "Electrician",
    "contactPerson": "Robert",
    "phone": "(415) 424-9718",
    "email": null,
    "website": null,
    "description": "Handyman and electrical installation/repair services.",
    "communityNotes": "Handyman / Electrician (provided by KSR).",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-113",
    "businessName": "Baishakhi Electrical",
    "category": "Electrician",
    "contactPerson": "Baishakhi",
    "phone": "(650) 798-7444",
    "email": null,
    "website": null,
    "description": "Electrical repairs, lighting fixtures, and electrical panel work.",
    "communityNotes": "Electrician from South San Ramon Group.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-114",
    "businessName": "Jorge Painting",
    "category": "Painter",
    "contactPerson": "Jorge",
    "phone": "(209) 834-4605",
    "email": null,
    "website": null,
    "description": "Interior and exterior painting services for Tracy Hills homes.",
    "communityNotes": "Works for Lennar on contract but also takes jobs from homeowners directly.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-201",
    "businessName": "Soni Walia",
    "category": "Home Insurance",
    "contactPerson": "Soni Walia",
    "phone": "(925) 209-9304",
    "email": null,
    "website": null,
    "description": "Home insurance services.",
    "communityNotes": "Tracy Hills Phase 2 Resident, and highly recommended",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-202",
    "businessName": "Andrew Lemus",
    "category": "Home Insurance",
    "contactPerson": "Andrew Lemus",
    "phone": "(888) 543-6179 ext 104016",
    "email": null,
    "website": null,
    "description": "Home insurance services (Westwood).",
    "communityNotes": "Westwood",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-203",
    "businessName": "CHRISTOPHER M PALMER",
    "category": "Home Insurance",
    "contactPerson": "Christopher M Palmer",
    "phone": "(817) 689-7975",
    "email": "christopher.palmer@mutualofomaha.com",
    "website": null,
    "description": "Home insurance services.",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-204",
    "businessName": "Sidney Atzin",
    "category": "Home Insurance",
    "contactPerson": "Sidney Atzin",
    "phone": "(385) 430-8232",
    "email": null,
    "website": null,
    "description": "Home insurance services (AAA).",
    "communityNotes": "AAA",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-205",
    "businessName": "Samuel",
    "category": "Home Insurance",
    "contactPerson": "Samuel",
    "phone": "(801) 217-5284",
    "email": null,
    "website": null,
    "description": "Home insurance services (AAA).",
    "communityNotes": "AAA",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-206",
    "businessName": "Monica Rodriguez",
    "category": "Home Insurance",
    "contactPerson": "Monica Rodriguez",
    "phone": "(408) 729-7370",
    "email": null,
    "website": null,
    "description": "Home insurance services (Farmers).",
    "communityNotes": "Farmers",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-207",
    "businessName": "Thu Le",
    "category": "Home Insurance",
    "contactPerson": "Thu Le",
    "phone": "(408) 759-9693",
    "email": "tle3@farmersagent.com",
    "website": null,
    "description": "Home insurance services (Hippo).",
    "communityNotes": "Hippo",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-301",
    "businessName": "Miguel",
    "category": "Water Softener",
    "contactPerson": "Miguel",
    "phone": "(209) 662-1364",
    "email": null,
    "website": null,
    "description": "Water Softener Unit & Installation Services",
    "communityNotes": "Installed hundreds of units between Tracy Hills Phase 1 and 2. He can provide unit + installation or only installation service.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-302",
    "businessName": "Kenny",
    "category": "Water Softener",
    "contactPerson": "Kenny",
    "phone": "(510) 342-8997",
    "email": null,
    "website": null,
    "description": "Water Softener Installation",
    "communityNotes": "Unlicensed but does a quality job. Has done many installs in TH2.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-303",
    "businessName": "NorthCal Waters",
    "category": "Water Softener",
    "contactPerson": null,
    "phone": "(510) 305-2600",
    "email": null,
    "website": null,
    "description": "RO & Softener Installation",
    "communityNotes": "Great experience overall. He installs a Clack WS1 water softener (without the fancy outer cover), and for the RO system, he asks you to purchase it from Amazon and then handles the installation. Total installation cost for both the RO and the water softener was around $2,500 - $2,600.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-304",
    "businessName": "Puronics",
    "category": "Water Softener",
    "contactPerson": null,
    "phone": null,
    "email": null,
    "website": null,
    "description": "RO & Softener Installation",
    "communityNotes": "It was great. The guy who came for installation was knowledgeable and did all necessary plumbing work neat and clean. Installed Filtermax IGEN C Water Softener and Micromax 8500 under-counter RO system. Total cost came $4,990. For referral, they give $100 Amazon gift card for the person referred.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-401",
    "businessName": "Plumbing Art",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(925) 854-9848",
    "email": null,
    "website": null,
    "description": "Plumbing Services & Maintenance",
    "communityNotes": "Good experience, from next door neighbor",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-402",
    "businessName": "Eugene",
    "category": "Plumber",
    "contactPerson": "Eugene",
    "phone": "(925) 558-5975",
    "email": null,
    "website": null,
    "description": "Plumbing Repairs & Services",
    "communityNotes": "Plumber from San Ramon Desi Group",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-403",
    "businessName": "Juan",
    "category": "Plumber",
    "contactPerson": "Juan",
    "phone": "(925) 378-9954",
    "email": null,
    "website": null,
    "description": "Plumbing Services",
    "communityNotes": "Plumber from South San Ramon group",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-404",
    "businessName": "Pedro",
    "category": "Plumber",
    "contactPerson": "Pedro",
    "phone": "(510) 209-2283",
    "email": null,
    "website": null,
    "description": "Plumbing & Bathroom/Kitchen Remodeling",
    "communityNotes": "Plumbing + bathroom/kitchen remodeling specialist. Great and reasonable work.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-405",
    "businessName": "Vince",
    "category": "Plumber",
    "contactPerson": "Vince",
    "phone": "(925) 222-5590",
    "email": null,
    "website": null,
    "description": "Plumbing Services",
    "communityNotes": "Plumber from Milford Group",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-406",
    "businessName": "Boris",
    "category": "Plumber",
    "contactPerson": "Boris",
    "phone": "(925) 725-9056",
    "email": null,
    "website": null,
    "description": "Plumbing Repairs",
    "communityNotes": "Plumber",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-407",
    "businessName": "Tracy Knights Plumbing And Drain",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(209) 319-0563",
    "email": null,
    "website": null,
    "description": "Plumbing & Drain Services",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-408",
    "businessName": "Mohammad",
    "category": "Plumber",
    "contactPerson": "Mohammad",
    "phone": "(510) 468-1058",
    "email": null,
    "website": null,
    "description": "Plumbing Repairs & Services",
    "communityNotes": "Plumber recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-409",
    "businessName": "Jeff Kwan",
    "category": "Plumber",
    "contactPerson": "Jeff Kwan",
    "phone": "(650) 273-2267",
    "email": null,
    "website": null,
    "description": "Plumbing Repairs & Services",
    "communityNotes": "Plumber recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-501",
    "businessName": "Samuel Ramirez",
    "category": "Electrician",
    "contactPerson": "Samuel Ramirez",
    "phone": "(408) 603-3722",
    "email": null,
    "website": null,
    "description": "Electrical Installation & Services",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-502",
    "businessName": "Ivo",
    "category": "Electrician",
    "contactPerson": "Ivo",
    "phone": "(925) 848-4287",
    "email": null,
    "website": null,
    "description": "Electrical Services & Repairs",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-503",
    "businessName": "Ricardo (Electrician & Handyman)",
    "category": "Electrician",
    "categories": ["Electrician", "Handyman"],
    "contactPerson": "Ricardo",
    "phone": "(209) 969-9003",
    "email": null,
    "website": null,
    "description": "Electrical services, repairs, and general home maintenance projects.",
    "communityNotes": "Very professional and reasonable price. Highly recommended. Specialization in electrician work, but also does lots of other work.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-504",
    "businessName": "Fabian",
    "category": "Electrician",
    "contactPerson": "Fabian",
    "phone": "(209) 627-6997",
    "email": null,
    "website": null,
    "description": "Electrical Services & Maintenance",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-505",
    "businessName": "Fernando",
    "category": "Electrician",
    "contactPerson": "Fernando",
    "phone": "(209) 409-7427",
    "email": null,
    "website": null,
    "description": "Electrical Installation & Services",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-506",
    "businessName": "Andrew Kingston",
    "category": "Electrician",
    "contactPerson": "Andrew Kingston",
    "phone": "(401) 919-2650",
    "email": null,
    "website": null,
    "description": "Electrical Services & Repairs",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-507",
    "businessName": "Narinder Paji",
    "category": "Electrician",
    "contactPerson": "Narinder Paji",
    "phone": "(510) 786-7332",
    "email": null,
    "website": null,
    "description": "Electrical Services & Maintenance",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-508",
    "businessName": "Paul",
    "category": "Electrician",
    "contactPerson": "Paul",
    "phone": "(925) 382-0948",
    "email": null,
    "website": null,
    "description": "Electrical installation, wiring, and panel services.",
    "communityNotes": "Lennar's electrical contractor. His team worked on most Tracy Hills II homes, so he is very familiar with the electrical installation & layout. On the higher side for cost.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-509",
    "businessName": "Carla",
    "category": "Electrician",
    "contactPerson": "Carla",
    "phone": "(209) 323-0904",
    "email": null,
    "website": null,
    "description": "Electrical services, wiring, and maintenance.",
    "communityNotes": "Contracted with Lennar in Tracy Hills II, giving her deep familiarity with how home electrical systems are set up here. On the higher side for cost.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-601",
    "businessName": "Santiago",
    "category": "Painter",
    "contactPerson": "Santiago",
    "phone": "(669) 232-7465",
    "email": null,
    "website": null,
    "description": "Interior & Exterior Painting Services",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-602",
    "businessName": "Oscar",
    "category": "Painter",
    "contactPerson": "Oscar",
    "phone": "(209) 496-7066",
    "email": null,
    "website": null,
    "description": "Interior & Exterior Painting Services",
    "communityNotes": "Painter recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-603",
    "businessName": "Nick",
    "category": "Painter",
    "contactPerson": "Nick",
    "phone": "(209) 456-9779",
    "email": null,
    "website": null,
    "description": "Interior & Exterior Painting Services",
    "communityNotes": "Painter recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-701",
    "businessName": "Jeff",
    "category": "Snake Removal / Pest Control",
    "contactPerson": "Jeff",
    "phone": "(209) 404-3107",
    "email": null,
    "website": null,
    "description": "Snake Catching, Removal, and Wildlife Control Services.",
    "communityNotes": "Snake Catcher",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-702",
    "businessName": "Marcus",
    "category": "Snake Removal / Pest Control",
    "contactPerson": "Marcus",
    "phone": "(714) 678-8782",
    "email": null,
    "website": null,
    "description": "Snake Catching, Removal, and Wildlife Control Services.",
    "communityNotes": "Snake Catcher",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-22"
  },
  {
    "id": "sp-801",
    "businessName": "Victor Lopez",
    "category": "Landscaper / Gardener",
    "contactPerson": "Victor Lopez",
    "phone": "(209) 539-3946",
    "email": null,
    "website": null,
    "description": "Lawn care, garden maintenance, yard cleanup, and landscaping services.",
    "communityNotes": "Gardener and Landscaper recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-802",
    "businessName": "Javier Barriga",
    "category": "Landscaper / Gardener",
    "contactPerson": "Javier Barriga",
    "phone": "(408) 394-6869",
    "email": null,
    "website": null,
    "description": "Lawn care, garden maintenance, and landscaping services.",
    "communityNotes": "Gardener and Landscaper recommended on Thumbtack.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-803",
    "businessName": "Arsh Newnest Landscape",
    "category": "Landscaper / Gardener",
    "contactPerson": "Arsh",
    "phone": "(510) 786-8106",
    "email": null,
    "website": null,
    "description": "Custom landscaping design, yard maintenance, and outdoor living projects.",
    "communityNotes": "Landscaping contractor recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-804",
    "businessName": "Martinez Landscape",
    "category": "Landscaper / Gardener",
    "contactPerson": "Martinez",
    "phone": "(209) 603-4640",
    "email": null,
    "website": null,
    "description": "Landscaping, lawn installation, and yard care services.",
    "communityNotes": "Landscaping services recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-805",
    "businessName": "Sam Landscape",
    "category": "Landscaper / Gardener",
    "contactPerson": "Sam",
    "phone": "(510) 750-6505",
    "email": null,
    "website": null,
    "description": "Professional landscaping, lawn maintenance, and garden projects.",
    "communityNotes": "Landscaper recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-806",
    "businessName": "Traina Thought Landscapes",
    "category": "Landscaper / Gardener",
    "contactPerson": "Traina Thought Landscapes",
    "phone": "(209) 829-9868",
    "email": null,
    "website": null,
    "description": "Custom landscape design, hardscaping, and yard transformations.",
    "communityNotes": "Landscape design & installation recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-807",
    "businessName": "Kingdom Pavers",
    "category": "Landscaper / Gardener",
    "contactPerson": "Kingdom Pavers",
    "phone": "(925) 408-9550",
    "email": null,
    "website": null,
    "description": "Custom paver installation, patio stones, retaining walls, and hardscaping services.",
    "communityNotes": "Paver & hardscaping specialist recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-901",
    "businessName": "Star Blindz",
    "category": "Curtains / Blinds",
    "contactPerson": "Sunny",
    "phone": "(510) 361-6235",
    "email": null,
    "website": null,
    "description": "Custom window blinds, shades, shutters, and window treatment installation.",
    "communityNotes": "Blinds and window coverings specialist recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-902",
    "businessName": "Charanjith Singh Blinds",
    "category": "Curtains / Blinds",
    "contactPerson": "Charanjith Singh",
    "phone": "(510) 372-4088",
    "email": null,
    "website": null,
    "description": "Window blinds installation, custom window coverings, and shades.",
    "communityNotes": "Blinds installer recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-903",
    "businessName": "Chaya Outdoors",
    "category": "Curtains / Blinds",
    "contactPerson": "Chaya Outdoors",
    "phone": "(925) 766-2678",
    "email": null,
    "website": null,
    "description": "Outdoor shades, patio enclosures, motorized awnings, and outdoor window coverings.",
    "communityNotes": "Outdoor shades & patio enclosures recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-904",
    "businessName": "Prashanth Giridhani",
    "category": "Curtains / Blinds",
    "contactPerson": "Prashanth Giridhani",
    "phone": "(707) 881-7611",
    "email": null,
    "website": null,
    "description": "Custom window blinds, shades, and window treatment installation services.",
    "communityNotes": "Blinds installer recommended by residents.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-29"
  },
  {
    "id": "sp-1001",
    "businessName": "Ivan",
    "category": "Window Cleaning",
    "categories": ["Window Cleaning", "Solar Services", "Pest Control", "Handyman"],
    "contactPerson": "Ivan",
    "phone": "(925) 758-2765",
    "email": null,
    "website": null,
    "description": "Solar panel cleaning, birdproofing & bird spikes installation, window cleaning, permanent holiday lights installation, and wasp/bee nest removal.",
    "communityNotes": "Tracy Hills local resident. Highly recommended by many residents for exterior home services.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-01"
  },
  {
    "id": "sp-1101",
    "businessName": "New India Bazar Dublin",
    "category": "Grocery Delivery",
    "contactPerson": null,
    "phone": null,
    "email": null,
    "website": null,
    "whatsAppGroup": "https://chat.whatsapp.com/BZsOBwHvgLx5X31g1tW1P8",
    "description": "Weekly grocery delivery service for Tracy Hills II residents.",
    "communityNotes": "Delivers groceries to Tracy Hills II once a week. Order & coordinate via WhatsApp group.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-1102",
    "businessName": "Alondras Produce",
    "category": "Grocery Delivery",
    "contactPerson": null,
    "phone": null,
    "email": null,
    "website": null,
    "whatsAppGroup": "https://chat.whatsapp.com/KwynXFHNo8QHtbhcTedLwh",
    "description": "Weekly fresh produce & grocery delivery service for Tracy Hills II residents.",
    "communityNotes": "Delivers fresh produce & groceries to Tracy Hills II once a week. Order & coordinate via WhatsApp group.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-410",
    "businessName": "Tony's Plumbing - Heating - Air",
    "category": "Plumber",
    "categories": ["Plumber", "HVAC"],
    "contactPerson": null,
    "phone": null,
    "email": null,
    "website": "https://www.tonysplumbing.com/",
    "description": "Professional plumbing, heating, and air conditioning repair and installation services.",
    "communityNotes": "Plumbing, Heating & Air Conditioning services.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-411",
    "businessName": "Iman Plumbing Services",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(925) 535-8680",
    "email": null,
    "website": null,
    "description": "Residential plumbing repairs, maintenance, and installation services.",
    "communityNotes": "Plumbing services.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-412",
    "businessName": "United Xpress Plumbing Rooter",
    "category": "Plumber",
    "contactPerson": "Alain",
    "phone": "(209) 471-2972",
    "email": null,
    "website": null,
    "description": "Plumbing and drain rooter services.",
    "communityNotes": "Plumbing & rooter service. Contact person: Alain.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-413",
    "businessName": "SJH PLUMBING SERVICE LLC",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(925) 548-0926",
    "email": null,
    "website": null,
    "description": "Licensed plumbing repair and installation services.",
    "communityNotes": "Plumbing service LLC.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-414",
    "businessName": "Plumbing Care Inc",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(925) 695-7907",
    "email": null,
    "website": null,
    "description": "Full-service plumbing repair and maintenance care.",
    "communityNotes": "Plumbing care services.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-415",
    "businessName": "Knights Plumbing and Drain",
    "category": "Plumber",
    "contactPerson": null,
    "phone": "(209) 837-3852",
    "email": null,
    "website": null,
    "description": "Professional plumbing, drain cleaning, and repair services.",
    "communityNotes": "Plumbing and drain services.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-1201",
    "businessName": "Quartz & Granite Repairs",
    "category": "Handyman",
    "categories": ["Handyman", "Flooring"],
    "contactPerson": "Mauricio",
    "phone": "(209) 915-2385",
    "email": null,
    "website": null,
    "description": "Quartz, granite, and stone repair, installation, and restoration services.",
    "communityNotes": "Same contractor Lennar used to install stone/granite countertops in many Tracy Hills II homes.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  },
  {
    "id": "sp-1301",
    "businessName": "Revive Cleaning & Restoration",
    "category": "Cleaning Services",
    "categories": ["Cleaning Services", "Flooring"],
    "contactPerson": null,
    "phone": "(408) 764-7188",
    "email": null,
    "website": null,
    "description": "Cleaning, restoration, and professional epoxy coating services.",
    "communityNotes": "Specializes in Epoxy Services, cleaning, and restoration.",
    "isPlaceholder": false,
    "lastUpdated": "2026-09-03"
  }
];

const PROVIDER_CATEGORIES = [
  'Handyman',
  'Electrician',
  'Plumber',
  'Water Softener',
  'Home Insurance',
  'Painter',
  'General Contractor',
  'Grocery Delivery',
  'Snake Removal / Pest Control',
  'Mortgage Lenders',
  'Landscaper / Gardener',
  'Curtains / Blinds',
  'HVAC',
  'Roofing',
  'Pest Control',
  'Cleaning Services',
  'Pool Services',
  'Solar Services',
  'Home Security',
  'Locksmith',
  'Appliance Repair',
  'Flooring',
  'Window Cleaning',
  'Moving Services',
  'Internet / Technology Services',
  'Tree Services',
  'Fence Repair',
  'Garage Door Repair',
  'Pressure Washing'
];

const CATEGORY_COLORS = {
  'Handyman': { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.14)', border: 'rgba(245, 158, 11, 0.35)', solid: '#F59E0B' },
  'Electrician': { color: '#FACC15', bg: 'rgba(250, 204, 21, 0.14)', border: 'rgba(250, 204, 21, 0.35)', solid: '#EAB308' },
  'Plumber': { color: '#3B82F6', bg: 'rgba(59, 130, 246, 0.14)', border: 'rgba(59, 130, 246, 0.35)', solid: '#2563EB' },
  'Water Softener': { color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.14)', border: 'rgba(6, 182, 212, 0.35)', solid: '#0E7490' },
  'Painter': { color: '#C084FC', bg: 'rgba(192, 132, 252, 0.14)', border: 'rgba(192, 132, 252, 0.35)', solid: '#9333EA' },
  'Home Insurance': { color: '#22C55E', bg: 'rgba(34, 197, 94, 0.14)', border: 'rgba(34, 197, 94, 0.35)', solid: '#16A34A' },
  'Snake Removal / Pest Control': { color: '#F43F5E', bg: 'rgba(244, 63, 94, 0.14)', border: 'rgba(244, 63, 94, 0.35)', solid: '#E11D48' },
  'General Contractor': { color: '#818CF8', bg: 'rgba(129, 140, 248, 0.14)', border: 'rgba(129, 140, 248, 0.35)', solid: '#4F46E5' },
  'Grocery Delivery': { color: '#10B981', bg: 'rgba(16, 185, 129, 0.14)', border: 'rgba(16, 185, 129, 0.35)', solid: '#047857' },
  'Mortgage Lenders': { color: '#A3E635', bg: 'rgba(163, 230, 53, 0.14)', border: 'rgba(163, 230, 53, 0.35)', solid: '#65A30D' },
  'Landscaper / Gardener': { color: '#4ADE80', bg: 'rgba(74, 222, 128, 0.14)', border: 'rgba(74, 222, 128, 0.35)', solid: '#16A34A' },
  'Curtains / Blinds': { color: '#F472B6', bg: 'rgba(244, 114, 182, 0.14)', border: 'rgba(244, 114, 182, 0.35)', solid: '#DB2777' },
  'HVAC': { color: '#FB923C', bg: 'rgba(251, 146, 60, 0.14)', border: 'rgba(251, 146, 60, 0.35)', solid: '#EA580C' },
  'Roofing': { color: '#F97316', bg: 'rgba(249, 115, 22, 0.14)', border: 'rgba(249, 115, 22, 0.35)', solid: '#C2410C' },
  'Pest Control': { color: '#F43F5E', bg: 'rgba(244, 63, 94, 0.14)', border: 'rgba(244, 63, 94, 0.35)', solid: '#E11D48' },
  'Cleaning Services': { color: '#22D3EE', bg: 'rgba(34, 211, 238, 0.14)', border: 'rgba(34, 211, 238, 0.35)', solid: '#0891B2' },
  'Pool Services': { color: '#60A5FA', bg: 'rgba(96, 165, 250, 0.14)', border: 'rgba(96, 165, 250, 0.35)', solid: '#2563EB' },
  'Solar Services': { color: '#FCD34D', bg: 'rgba(252, 211, 77, 0.14)', border: 'rgba(252, 211, 77, 0.35)', solid: '#D97706' },
  'Home Security': { color: '#E11D48', bg: 'rgba(225, 29, 72, 0.14)', border: 'rgba(225, 29, 72, 0.35)', solid: '#BE123C' },
  'Locksmith': { color: '#E879F9', bg: 'rgba(232, 121, 249, 0.14)', border: 'rgba(232, 121, 249, 0.35)', solid: '#C026D3' },
  'Appliance Repair': { color: '#6366F1', bg: 'rgba(99, 102, 241, 0.14)', border: 'rgba(99, 102, 241, 0.35)', solid: '#4338CA' },
  'Flooring': { color: '#D97706', bg: 'rgba(217, 119, 6, 0.14)', border: 'rgba(217, 119, 6, 0.35)', solid: '#B45309' },
  'Window Cleaning': { color: '#0EA5E9', bg: 'rgba(14, 165, 233, 0.14)', border: 'rgba(14, 165, 233, 0.35)', solid: '#0284C7' },
  'Moving Services': { color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.14)', border: 'rgba(139, 92, 246, 0.35)', solid: '#6D28D9' },
  'Internet / Technology Services': { color: '#06B6D4', bg: 'rgba(6, 182, 212, 0.14)', border: 'rgba(6, 182, 212, 0.35)', solid: '#0E7490' },
  'Tree Services': { color: '#10B981', bg: 'rgba(16, 185, 129, 0.14)', border: 'rgba(16, 185, 129, 0.35)', solid: '#047857' },
  'Fence Repair': { color: '#A1A1AA', bg: 'rgba(161, 161, 170, 0.14)', border: 'rgba(161, 161, 170, 0.35)', solid: '#52525B' },
  'Garage Door Repair': { color: '#EC4899', bg: 'rgba(236, 72, 153, 0.14)', border: 'rgba(236, 72, 153, 0.35)', solid: '#BE185D' },
  'Pressure Washing': { color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.14)', border: 'rgba(56, 189, 248, 0.35)', solid: '#0284C7' }
};

const FALLBACK_CATEGORY_PALETTE = [
  { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.14)', border: 'rgba(245, 158, 11, 0.35)', solid: '#F59E0B' },
  { color: '#FACC15', bg: 'rgba(250, 204, 21, 0.14)', border: 'rgba(250, 204, 21, 0.35)', solid: '#EAB308' },
  { color: '#38BDF8', bg: 'rgba(56, 189, 248, 0.14)', border: 'rgba(56, 189, 248, 0.35)', solid: '#0284C7' },
  { color: '#2DD4BF', bg: 'rgba(45, 212, 191, 0.14)', border: 'rgba(45, 212, 191, 0.35)', solid: '#0D9488' },
  { color: '#C084FC', bg: 'rgba(192, 132, 252, 0.14)', border: 'rgba(192, 132, 252, 0.35)', solid: '#9333EA' },
  { color: '#34D399', bg: 'rgba(52, 211, 153, 0.14)', border: 'rgba(52, 211, 153, 0.35)', solid: '#059669' },
  { color: '#FB7185', bg: 'rgba(251, 113, 133, 0.14)', border: 'rgba(251, 113, 133, 0.35)', solid: '#E11D48' },
  { color: '#818CF8', bg: 'rgba(129, 140, 248, 0.14)', border: 'rgba(129, 140, 248, 0.35)', solid: '#4F46E5' }
];

function getCategoryColor(category) {
  if (CATEGORY_COLORS[category]) return CATEGORY_COLORS[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % FALLBACK_CATEGORY_PALETTE.length;
  return FALLBACK_CATEGORY_PALETTE[index];
}

