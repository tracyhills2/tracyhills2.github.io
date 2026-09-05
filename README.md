# Tracy Hills II | Community Resource Hub

An open-source, high-performance, mobile-first community portal built by resident volunteers for **Tracy Hills Phase II** homeowners in Tracy, California.

---

## 🌟 Overview & Purpose

The **Tracy Hills II Community Resource Hub** serves as a central directory for Phase II residents. It provides instant access to official HOA portals, city emergency contacts, verified service provider recommendations, community FAQ, and a secure workflow for joining the private resident WhatsApp group and Advocacy Email list.

---

## 🛠️ Technology Stack & Architecture

### 1. Frontend Technologies
- **HTML5 & Semantic Markup:** Accessible, SEO-optimized HTML5 structure with Open Graph metadata and micro-data attributes.
- **Vanilla CSS3 (Design System):** Built with custom CSS variables, Slate Dark Mode design system (`#0F172A`), Flexbox, CSS Grid layout, and glassmorphism backdrop blurs. Zero external CSS frameworks (no Tailwind/Bootstrap overhead) ensuring near-instant page loads.
- **Vanilla JavaScript (ES6+):** Lightweight DOM event handling, dynamic search filtering, accordion interactions, drawer navigation, and asynchronous API form dispatches.

### 2. Backend Serverless API Gateway
- **Cloudflare Workers (V8 Isolate Serverless Edge Platform):** Form dispatches are processed globally on Cloudflare’s edge network with near-zero latency.
- **Email Service (Resend REST API):** Form dispatches (WhatsApp verification requests, vendor suggestions, website correction reports) are routed through the Resend API to community administrators (`tracyhillsphase2@gmail.com`).
- **Open-Source Safe & Credentials-Free:** Secrets (`RESEND_API_KEY`, `ADMIN_EMAILS`, `ALLOWED_ORIGIN`) are stored in encrypted Cloudflare Environment Secrets, keeping the public Git repository 100% free of credentials.

### 3. Security & Anti-Spam Protection
- **Honeypot Bot Protection (`b_hp_field`):** All forms include off-screen honeypot inputs (`aria-hidden="true"`). Automated spambots filling this field are silently dropped (`200 OK` response) without consuming Resend email quotas or triggering admin notifications.
- **CORS Protection:** Cloudflare Worker limits POST dispatches exclusively to authorized site origins (`https://tracyhills2.github.io`).
- **Cloudflare Web Analytics:** Privacy-first, cookie-less website analytics tracking performance and traffic patterns.

---

## 📱 Key Features & Modules

### 1. WhatsApp Resident Verification Modal (`js/whatsapp-modal.js`)
- Intercepts all "Join WhatsApp Community" links site-wide.
- Displays a mobile-friendly modal requesting verification details (Full Name, Address / Lot #, Phone, Email, Immediate Neighbors, and Notes).
- Formats emails for admins with a 1-click **"Chat with Resident on WhatsApp"** deep-link button (`https://wa.me/...`).

### 2. Resident Advocacy Email Group Opt-In
- Integrated directly into the WhatsApp verification workflow.
- Expandable toggle allows residents to opt into important community updates regarding **HOA Governance**, **City of Tracy Issues**, **Developer / Lennar Matters**, and the **Jefferson School District**.
- Includes sub-community collection tag selection (*Rockingham, Crestwick, Cairnway, Slateshire, Ridgerton, Rangewood, Boulder*).

### 3. Service Directory & Suggest/List a Provider (`providers.html` & `suggest-provider.html`)
- Categorized listing of local contractors and service providers (electricians, handymen, plumbers, hardscaping, solar, house cleaning, HVAC, internet & technology).
- Includes dedicated **Lennar Direct Connectivity Representatives** for new home high-speed internet setup (AT&T Fiber: Max Mejia | Comcast Xfinity: Raul Ramirez).
- **Suggest / List a Provider:** Dedicated mobile page supporting both **Resident Recommendations** and **Business Owner Self-Listings**. Includes optional fields for **Google Business / Yelp Review Profile Links** and **24/7 Emergency Dispatch**.
- **Direct Vendor Registration Link:** Pass `?type=vendor` in the URL (`suggest-provider.html?type=vendor`) to open the page directly with *Business Owner Self-Listing* pre-selected.

### 4. Website Information Correction Portal (`report-information.html`)
- Enables residents to report outdated HOA phone numbers, changed procedures, broken links, or updated listing details directly to site admins.

### 5. Quick Contacts & FAQ (`contacts.html` & `faq.html`)
- **Quick Contacts:** One-touch phone dialing and email links for Lennar Care, Seabreeze HOA Management, City of Tracy Emergency/Non-Emergency, Utilities, and Trash Services. Includes a print-friendly CSS stylesheet.
- **Community FAQ:** Interactive accordion interface with live keyword search for HOA architectural reviews, water softeners, trash pickup schedules, new home internet setup, USPS mailbox key retrieval, and community amenities.

---

## 📂 Project Directory Structure

```
website/
├── index.html              # Home / Community Resource Portal Overview
├── contacts.html           # Quick Directory & Emergency Contacts (Printable)
├── providers.html          # Community Service Directory (Search & Category Filters)
├── suggest-provider.html   # Dedicated Mobile Page to Recommend Vendors
├── report-information.html # Website Correction & Information Update Form
├── faq.html                # Frequently Asked Questions (Accordion Search)
├── about.html              # About Community Volunteers & Website Purpose
├── disclaimer.html         # Legal Terms & Independent Community Disclaimer
├── favicon.svg             # SVG Favicon Brand Asset
├── sitemap.xml             # Search Engine Sitemap Index
├── robots.txt              # Search Engine Crawler Guidance
├── css/
│   └── styles.css          # Core Slate Dark Design System & Responsive Rules
└── js/
    ├── data.js             # Static dataset for Service Providers & FAQ items
    ├── app.js              # Core UI interactivity (search, drawers, accordions)
    └── whatsapp-modal.js   # Interceptor modal for WhatsApp access & Advocacy opt-in
```

---

## ⚡ Cloudflare Worker API Setup (`worker.js`)

To set up or modify the Cloudflare Worker API Gateway:

1. Create a new Cloudflare Worker named `tracy-hills-api`.
2. Copy the code from the project's [`worker.js`](worker.js) artifact into your Worker script editor.
3. Configure the following **Environment Variables / Secrets** in Cloudflare Worker Settings:
   - `RESEND_API_KEY`: Your Resend API token (`re_...`).
   - `ADMIN_EMAILS`: Target email(s), e.g., `tracyhillsphase2@gmail.com`.
   - `ALLOWED_ORIGIN`: Your GitHub Pages domain URL (`https://tracyhills2.github.io`).

---

## 🚀 Local Development

No `npm install`, build pipeline, or compilation process is required. Simply open any `.html` file directly in your browser, or launch a basic local HTTP server:

```bash
# Using Python Simple HTTP Server
python -m http.server 8080

# Or using Node.js http-server
npx http-server ./ -p 8080
```

Open `http://localhost:8080` in your web browser to test.

---

## 📄 License & Governance

This project is an independent community initiative created by resident volunteers. It is **not officially affiliated with, operated by, or endorsed by** the Tracy Hills HOA, Seabreeze Management Company, Lennar Homes, or the City of Tracy.
