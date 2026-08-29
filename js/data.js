/* ==========================================================================
   Tracy Hills II - Static Data Repository
   ========================================================================== */

const WHATSAPP_URL = 'https://chat.whatsapp.com/JbKtulmPtaKJ3CA4htB0uS?mode=gi_t';
const FACEBOOK_URL = 'https://www.facebook.com/groups/1039884364940491';

const ANNOUNCEMENTS_DATA = [
  {
    "id": "ann-002",
    "title": "Welcome to the New Tracy Hills II Resident Portal!",
    "category": "Announcement",
    "priority": "high",
    "date": "2026-08-22",
    "summary": "We are excited to launch the new Tracy Hills II Community Portal! Please note that updates to several parts of the website are currently in progress.",
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
    "policeEmergency": "911",
    "policeNonEmergency": "(209) 831-6550",
    "fireEmergency": "911",
    "fireNonEmergency": "(209) 831-6700",
    "animalControl": "(209) 831-6364",
    "utilitiesWater": "(209) 831-6800",
    "utilityPaymentPortal": "https://ipn.paymentus.com/cp/trcy?lang=en",
    "codeEnforcement": "(209) 831-6410",
    "parksAndRec": "(209) 831-6200",
    "trashRecycling": "(209) 835-0601",
    "trashProvider": "Tracy Delta Solid Waste Management",
    "trashAppAndroid": "https://play.google.com/store/apps/details?id=com.tdswm.recollect.waste",
    "trashAppIos": "https://apps.apple.com/us/app/tdswm-wvd-collection-services/id6459505232",
    "websiteUrl": "https://www.cityoftracy.org",
    "serviceRequestPortal": "https://user.govoutreach.com/tracy/support.php"
  },
  "developer": {
    "name": "Lennar Homes",
    "customerCarePhone": "(888) 214-2494",
    "afterHoursPhone": "Coming Soon",
    "warrantyPortal": "https://www.lennar.com/my-lennar",
    "hours": "Mon – Fri: 8:00 AM – 5:00 PM (After-hours details coming soon)"
  }
};

const FAQ_DATA = [
  {
    "id": "faq-001",
    "category": "HOA",
    "question": "How do I access the Seabreeze HOA portal and pay dues?",
    "answer": "You can log in to the Seabreeze CINC WebAxis portal at commarea.cincwebaxis.com to pay HOA dues, view balance statements, or submit architectural requests. You can also reach Seabreeze Customer Care by calling (800) 232-7517 or emailing customercare@seabreezemgmt.com.",
    "keywords": ["dues", "payment", "seabreeze", "portal", "hoa fee", "cinc", "billing", "account", "management"]
  },
  {
    "id": "faq-002",
    "category": "Lennar / Developer",
    "question": "Who is responsible for maintaining the streets in Tracy Hills II?",
    "answer": "Currently, streets in the Tracy Hills II community are maintained by Lennar (the builder), not the City of Tracy. For any street maintenance issues, potholes, or curb repairs, please contact Lennar Customer Care at (888) 214-2494.",
    "keywords": ["street", "road", "pothole", "curb", "maintenance", "lennar", "city of tracy", "paving"]
  },
  {
    "id": "faq-003",
    "category": "City Services",
    "question": "Who maintains the community parks and green spaces?",
    "answer": "Parks in Tracy Hills II are maintained by the City of Tracy Parks & Recreation department ((209) 831-6200). For any park maintenance, playground equipment, or safety concerns, contact the City directly or report an issue online at user.govoutreach.com/tracy/support.php.",
    "keywords": ["park", "green space", "playground", "parks and rec", "city of tracy", "maintenance", "report issue"]
  },
  {
    "id": "faq-004",
    "category": "City Services",
    "question": "Where can I recycle large cardboard boxes, electronics, or bulky items?",
    "answer": "Large cardboard boxes, household electronics, and bulky waste can be recycled through Tracy Material Recovery (TDSWM). Visit tracymaterialrecovery.com/recycling/ for drop-off location details, hours, and accepted recyclable materials.",
    "keywords": ["boxes", "cardboard", "recycling", "bulky item", "tracy material recovery", "waste", "trash", "drop off"]
  },
  {
    "id": "faq-005",
    "category": "City Services",
    "question": "How do I find my trash collection schedule and download the collection app?",
    "answer": "Garbage, green waste, and recycling collection is operated by Tracy Delta Solid Waste Management (TDSWM). You can view your collection schedule and set reminders using the Tracy Delta Collection Schedule App on iOS or Android, or by calling (209) 835-0601.",
    "keywords": ["trash", "garbage", "recycling", "tracy delta", "app", "collection", "schedule", "tdswm"]
  },
  {
    "id": "faq-006",
    "category": "Utilities",
    "question": "How do I pay my City of Tracy water and municipal utility bill online?",
    "answer": "City of Tracy water and municipal utility bills can be paid online through the official City Paymentus portal at ipn.paymentus.com/cp/trcy?lang=en or by calling City Utility Billing at (209) 831-6800.",
    "keywords": ["water", "utilities", "bill", "payment", "city of tracy", "paymentus", "sewer", "billing"]
  },
  {
    "id": "faq-007",
    "category": "Lennar / Developer",
    "question": "How do I submit a new home warranty service request to Lennar?",
    "answer": "Warranty service requests should be submitted directly through the MyLennar portal (lennar.com/my-lennar) or by calling Lennar Customer Care at (888) 214-2494 (Mon–Fri: 8:00 AM – 5:00 PM).",
    "keywords": ["lennar", "warranty", "customer care", "repair", "new home", "builder", "mylennar", "service request"]
  },
  {
    "id": "faq-008",
    "category": "WhatsApp / Communication",
    "question": "How do I join the resident WhatsApp and Facebook groups?",
    "answer": "You can join the verified resident WhatsApp Community using the link in the site top bar or home page banner (chat.whatsapp.com/JbKtulmPtaKJ3CA4htB0uS?mode=gi_t). You can also join the Tracy Hills 2 Facebook Group at facebook.com/groups/1039884364940491.",
    "keywords": ["whatsapp", "facebook", "group", "chat", "neighbors", "community", "social", "communication"]
  },
  {
    "id": "faq-009",
    "category": "Utilities",
    "question": "Why is a water softener recommended in Tracy Hills?",
    "answer": "Municipal water in Tracy and San Joaquin County generally has moderate-to-high water hardness. Many residents install a whole-home water softener system (such as Clack WS1 or Puronics) to protect appliances, fixtures, and plumbing.",
    "keywords": ["water", "softener", "hardness", "minerals", "plumbing", "puronics", "clack", "reverse osmosis"]
  },
  {
    "id": "faq-010",
    "category": "Safety",
    "question": "What is the non-emergency contact number for Tracy Police?",
    "answer": "For non-emergency police reporting, noise complaints, or suspicious activity in Tracy, call the Tracy Police Department non-emergency line at (209) 831-6550. Always dial 911 for active life-threatening emergencies.",
    "keywords": ["police", "safety", "emergency", "non-emergency", "fire", "911", "security", "tracy police"]
  },
  {
    "id": "faq-011",
    "category": "Community Resources",
    "question": "How can I recommend a service provider or contractor to the community directory?",
    "answer": "Click the 'Suggest a Vendor' button on the Service Directory page of this portal, or email your recommendation directly to tracyhillsphase2@gmail.com.",
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-110",
    "businessName": "Robert (Handyman & Electrician)",
    "category": "Electrician",
    "contactPerson": "Robert",
    "phone": "(415) 424-9718",
    "email": null,
    "website": null,
    "description": "Handyman and electrical installation/repair services.",
    "communityNotes": "Handyman / Electrician (provided by KSR).",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-111",
    "businessName": "Baishakhi Electrical",
    "category": "Electrician",
    "contactPerson": "Baishakhi",
    "phone": "(650) 798-7444",
    "email": null,
    "website": null,
    "description": "Electrical repairs, lighting fixtures, and electrical panel work.",
    "communityNotes": "Electrician from South San Ramon Group.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-301",
    "businessName": "NorthCal Waters",
    "category": "Water Softener",
    "contactPerson": null,
    "phone": "(510) 305-2600",
    "email": null,
    "website": null,
    "description": "RO & Softener Installation",
    "communityNotes": "Great experience overall. He installs a Clack WS1 water softener (without the fancy outer cover), and for the RO system, he asks you to purchase it from Amazon and then handles the installation. Total installation cost for both the RO and the water softener was around $2,500–$2,600.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-302",
    "businessName": "Puronics",
    "category": "Water Softener",
    "contactPerson": null,
    "phone": null,
    "email": null,
    "website": null,
    "description": "RO & Softener Installation",
    "communityNotes": "It was great. The guy who came for installation was knowledgeable and did all necessary plumbing work neat and clean. Installed Filtermax IGEN C Water Softener and Micromax 8500 under-counter RO system. Total cost came $4,990. For referral, they give $100 Amazon gift card for the person referred.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-303",
    "businessName": "Miguel",
    "category": "Water Softener",
    "contactPerson": "Miguel",
    "phone": "(209) 662-1364",
    "email": null,
    "website": null,
    "description": "Water Softener Unit & Installation Services",
    "communityNotes": "Installed hundreds of units between Tracy Hills Phase 1 and 2. He can provide unit + installation or only installation service.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-304",
    "businessName": "Kenny",
    "category": "Water Softener",
    "contactPerson": "Kenny",
    "phone": "(510) 342-8997",
    "email": null,
    "website": null,
    "description": "Water Softener Installation",
    "communityNotes": "Unlicensed but does a quality job. Has done many installs in TH2.",
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
  },
  {
    "id": "sp-503",
    "businessName": "Ricardo",
    "category": "Electrician",
    "contactPerson": "Ricardo",
    "phone": "(209) 969-9003",
    "email": null,
    "website": null,
    "description": "Electrical Services & Repairs",
    "communityNotes": null,
    "isPlaceholder": false,
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
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
    "lastUpdated": "2026-08-28"
  }
];

const PROVIDER_CATEGORIES = [
  'Handyman',
  'Electrician',
  'Plumber',
  'Water Softener',
  'Painter',
  'Home Insurance',
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
  'General Contractor',
  'Window Cleaning',
  'Moving Services',
  'Internet / Technology Services',
  'Tree Services',
  'Fence Repair',
  'Garage Door Repair',
  'Pressure Washing'
];
