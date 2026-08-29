# Tracy Hills II | Community Resource Hub

Static, high-performance community resource website for Tracy Hills II built using **Plain HTML5, Vanilla CSS3, and JavaScript**.

## Project Architecture

```
website/
├── index.html          # Home / Overview Page
├── contacts.html       # Quick Directory & Emergency Contacts (Printable)
├── providers.html      # Community Service Providers Directory (Search & Filters)
├── faq.html            # Frequently Asked Questions Knowledge Base (Accordions)
├── favicon.svg         # Site Favicon
├── images/             # Images and graphic media assets
├── css/
│   └── styles.css      # Core Design System, slate dark theme, & responsiveness
└── js/
    ├── data.js         # Static JSON dataset module
    └── app.js          # Interactive UI scripts (search, accordions, drawer, modal)
```

## Running Locally

No `npm install`, build step, or server runner is required. Simply open `index.html` directly in any browser or launch a basic HTTP server:

```bash
# Python simple HTTP server (optional)
python -m http.server 8080
```
