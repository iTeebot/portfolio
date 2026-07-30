export interface IndustryData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  challenges: { title: string; desc: string }[];
  opportunities: { title: string; desc: string }[];
  recommendedTech: string[];
  caseStudies: string[];
  faqs: { question: string; answer: string }[];
}

export const industries: IndustryData[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    metaTitle: "AI Automation & Custom Software for Healthcare | Teebot",
    metaDescription: "HIPAA-compliant custom software, medical patient portals, and intelligent workflow automation to streamline clinical operations.",
    introduction: "We design and build secure, compliant digital software systems for clinical facilities, laboratories, and telemedicine startups. From processing medical documents using AI to secure electronic health records (EHR) integration, our technology solutions enhance clinic efficiency while maintaining strict patient confidentiality.",
    challenges: [
      { title: "HIPAA Compliance & Data Audits", desc: "Securing patient records across legacy software and newer telemedicine channels." },
      { title: "Manual Scheduling & Operations", desc: "Wasting clinic staff hours managing bookings, cancellations, and doctor rotations manually." }
    ],
    opportunities: [
      { title: "Intelligent Document Parsing", desc: "Extract patient data from scanning reports dynamically using secure local OCR models." },
      { title: "Automated Patient Portals", desc: "Expose real-time booking, instant reports delivery, and secure messaging channels." }
    ],
    recommendedTech: ["Next.js", "React Native", "HIPAA AWS ECS", "PostgreSQL", "OpenAI API (Zero Retention Mode)"],
    caseStudies: ["law-school-educational-platform"], // placeholder
    faqs: [
      { question: "Are your platforms HIPAA compliant?", answer: "Yes, we implement complete data encryption at rest and in transit, private database hosting, and multi-factor validation to comply with HIPAA guidelines." }
    ]
  },
  {
    slug: "finance",
    title: "Finance",
    metaTitle: "Fintech Development & Workflow Automation for Finance | Teebot",
    metaDescription: "Secure payment gateways, financial analytics dashboards, and automated report systems for modern fintech platforms.",
    introduction: "Modern financial institutions require secure, highly available software to manage transactions, monitor market metrics, and automate compliance audits. We build custom dashboards and automated reconciliation pipelines.",
    challenges: [
      { title: "Transaction Speed and Safety", desc: "Processing thousands of active transfers securely with zero-downtime tolerance." }
    ],
    opportunities: [
      { title: "AI-Driven Audit Reconciliation", desc: "Automate ledger auditing by cross-matching payment receipts and banking APIs." }
    ],
    recommendedTech: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "Stripe API", "AWS ECS"],
    caseStudies: ["vote-chain-blockchain-system"],
    faqs: [
      { question: "How do you handle API security?", answer: "We apply token expiration policies, strict IP address constraints, and detailed auditing logs to ensure API access is completely locked down." }
    ]
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    metaTitle: "Real Estate Software Development & Lead Automation | Teebot",
    metaDescription: "Custom CRM integrations, MLS listing portals, and automated messaging campaigns for real estate brokers and developers.",
    introduction: "Connect buyers to agents faster. We develop premium real estate search portals, custom CRM dashboards, and automated email follow-ups to close property sales.",
    challenges: [
      { title: "Lead Decay Speed", desc: "Property buyers expect responses within 5 minutes, which busy agents struggle to manage manually." }
    ],
    opportunities: [
      { title: "Instant Lead Capture & Follow-up", desc: "Automatically sync property listing leads to agent WhatsApp threads instantly." }
    ],
    recommendedTech: ["Next.js", "HubSpot API", "WhatsApp Cloud API", "Tailwind CSS"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can we integrate listing databases automatically?", answer: "Yes, we support MLS and RETS API connections to import property listings automatically." }
    ]
  },
  {
    slug: "construction",
    title: "Construction",
    metaTitle: "Construction Project Management Software & IoT | Teebot",
    metaDescription: "Streamline raw material tracking, site log sheets, and employee scheduling with custom construction portal dashboards.",
    introduction: "Manage complex equipment schedules and worker safety. We write custom project-management applications and set up site monitoring IoT sensors.",
    challenges: [
      { title: "Fragmented Communication", desc: "Friction between site managers and head office accounting leads to project cost overruns." }
    ],
    opportunities: [
      { title: "Offline Site Log Sheets", desc: "Mobile apps allowing managers to log site issues without active internet connection." }
    ],
    recommendedTech: ["React Native", "Node.js", "SQLite", "AWS S3"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Does the app support heavy photo uploads?", answer: "Yes, our mobile apps scale and compress photos locally before uploading them to cloud buckets to save bandwidth." }
    ]
  },
  {
    slug: "education",
    title: "Education",
    metaTitle: "EdTech App Development & LMS Customizations | Teebot",
    metaDescription: "Custom Learning Management Systems (LMS), secure student portal dashboards, and automated assignment review pipelines.",
    introduction: "Empower students and faculty. We engineer learning management structures, custom assignment grading tools, and interactive video channels.",
    challenges: [
      { title: "Unengaging User Interfaces", desc: "Outdated legacy student portals lead to low student compliance and dropouts." }
    ],
    opportunities: [
      { title: "Interactive Dynamic Portals", desc: "Sleek, responsive dashboards displaying visual progress trackers and automated notices." }
    ],
    recommendedTech: ["React", "Next.js", "PostgreSQL", "Mux Video API"],
    caseStudies: ["law-school-educational-platform"],
    faqs: [
      { question: "Can you connect with tools like Canvas or Moodle?", answer: "Yes, we connect with existing learning portals using standard LTI integrations." }
    ]
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    metaTitle: "Smart Manufacturing Software & IoT Monitoring | Teebot",
    metaDescription: "Track machine uptime, manage raw material inventory, and build custom operational dashboards for plants.",
    introduction: "Optimize assembly lines. We build customized dashboards mapping machine sensor data and automating raw material supply alerts.",
    challenges: [
      { title: "Unexpected Machine Downtime", desc: "Unscheduled stops in automated machines result in thousands of dollars in lost yield." }
    ],
    opportunities: [
      { title: "Predictive IoT Alerts", desc: "Connect machine thermal and vibration sensors to cloud alerts warning of potential issues." }
    ],
    recommendedTech: ["Node.js", "MQTT Broker", "TimescaleDB", "Raspberry Pi Integration"],
    caseStudies: ["vote-chain-blockchain-system"],
    faqs: [
      { question: "How do you fetch sensor data?", answer: "We deploy lightweight IoT clients utilizing MQTT or WebSockets protocols to stream metrics securely." }
    ]
  },
  {
    slug: "logistics",
    title: "Logistics",
    metaTitle: "Logistics Software & Automated Dispatch Tracking | Teebot",
    metaDescription: "Optimize fleet scheduling, warehouse stock levels, and client delivery notices using custom software.",
    introduction: "Improve delivery times. We develop custom fleet tracking interfaces, warehouse scanning apps, and automated messaging schedules.",
    challenges: [
      { title: "Manual Order Dispatching", desc: "Wasting hours selecting routes and manual driver texting loops." }
    ],
    opportunities: [
      { title: "Automated WhatsApp Alerts", desc: "Send dynamic shipping updates containing tracking maps directly to customers." }
    ],
    recommendedTech: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "WhatsApp API"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can your system plan delivery routes?", answer: "Yes, we integrate routing APIs to group packages and calculate the shortest delivery route." }
    ]
  },
  {
    slug: "retail",
    title: "Retail",
    metaTitle: "Custom Retail POS & E-Commerce Integration | Teebot",
    metaDescription: "Connect physical point-of-sale systems to digital web stores with unified live inventory trackers.",
    introduction: "Bridge offline and online sales channels. We design multi-vendor storefronts and sync inventory levels across outlets.",
    challenges: [
      { title: "Disjointed Inventory Records", desc: "Selling items online that are already sold in physical shops due to sync delays." }
    ],
    opportunities: [
      { title: "Real-time Multi-store Sync", desc: "Run background sync scripts mapping inventory across web and POS terminals." }
    ],
    recommendedTech: ["Next.js", "Shopify API", "Stripe Checkout", "Prisma ORM"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Do you integrate custom credit terminals?", answer: "Yes, we connect POS software to card readers using Stripe Terminal or local payment APIs." }
    ]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    metaTitle: "Custom Booking Platforms & Loyalty Software | Teebot",
    metaDescription: "Develop reservation portals, custom customer loyalty systems, and hotel management dashboards.",
    introduction: "Provide seamless checkins. We build custom booking dashboards, loyalty cards databases, and automated feedback loops.",
    challenges: [
      { title: "High Commission Booking Sites", desc: "Losing up to 20% profit margins to third-party booking networks." }
    ],
    opportunities: [
      { title: "Direct Booking Funnels", desc: "A beautiful direct booking engine coupled with immediate invoice texting." }
    ],
    recommendedTech: ["Next.js", "Tailwind CSS", "Stripe API", "Nodemailer"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can we sync booking calendars with Airbnb?", answer: "Yes, we configure standard iCal feed syncs to prevent double-bookings." }
    ]
  },
  {
    slug: "legal",
    title: "Legal",
    metaTitle: "Legal Case Management & Secure AI Documents | Teebot",
    metaDescription: "Secure file stores, automated client contract generators, and AI-powered document review portals.",
    introduction: "Streamline contract drafting. We build secure cloud storage platforms and write AI scripts that parse legal documents.",
    challenges: [
      { title: "Unstructured Case Scanning", desc: "Wasting hours scrolling through hundreds of case files to locate specific clauses." }
    ],
    opportunities: [
      { title: "Semantic Search Indexes", desc: "Deploy search databases to locate sections across thousands of PDF files using normal questions." }
    ],
    recommendedTech: ["Next.js", "Claude API (200k context)", "Pinecone DB", "AWS S3"],
    caseStudies: ["law-school-educational-platform"],
    faqs: [
      { question: "Is our case data stored securely?", answer: "Yes, all uploaded files are encrypted using AES-256 standard and hosted on secure AWS S3 buckets." }
    ]
  },
  {
    slug: "insurance",
    title: "Insurance",
    metaTitle: "Custom Insurance Claims Portals & Risk Software | Teebot",
    metaDescription: "Speed up claim validation, customer pricing quotes, and automated document checks.",
    introduction: "Streamline insurance steps. We develop custom client portal layouts, risk checkers, and automatic email quote structures.",
    challenges: [
      { title: "Slow Claim Assessments", desc: "Customers waiting weeks for claim updates due to manual paperwork check loops." }
    ],
    opportunities: [
      { title: "Automated OCR Verification", desc: "Deploy AI OCR checks to scan uploaded invoices and flags mismatches instantly." }
    ],
    recommendedTech: ["Next.js", "NestJS", "PostgreSQL", "AWS Textract"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can claims be routed automatically?", answer: "Yes, our backends filter and assign incoming claims based on location and value." }
    ]
  },
  {
    slug: "automotive",
    title: "Automotive",
    metaTitle: "Automotive Workshop Software & Vehicle Tracking | Teebot",
    metaDescription: "Track garage repairs, vehicle histories, and client pickup alerts using custom systems.",
    introduction: "Modernize garage booking and fleet maintenance records. We build custom repair logs and automatic service alerts.",
    challenges: [
      { title: "Tracking Repair Logs", desc: "Losing mechanic repair records across paper sheets, causing billing errors." }
    ],
    opportunities: [
      { title: "Digital Vehicle Log Sheets", desc: "A tablet app for mechanics to tap repairs, automatically calculating parts invoice." }
    ],
    recommendedTech: ["React", "Express Backend", "MySQL", "Docker"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can we track client vehicle pickup?", answer: "Yes, the system triggers text notifications to clients once the vehicle status is marked as complete." }
    ]
  },
  {
    slug: "government",
    title: "Government",
    metaTitle: "Public Sector Portals & Cryptographic Audits | Teebot",
    metaDescription: "Secure public dashboards, cryptographic record validation, and fast citizen databases.",
    introduction: "Deliver public transparency. We engineer secure citizen dashboards, file audits, and high-security databases.",
    challenges: [
      { title: "Public Document Tampering", desc: "Risk of document changes across departments causing legal issues." }
    ],
    opportunities: [
      { title: "Cryptographic File Hashing", desc: "Record document hashes on public ledger chains to verify document authenticity." }
    ],
    recommendedTech: ["Next.js", "Node.js", "Blockchain Networks", "PostgreSQL"],
    caseStudies: ["vote-chain-blockchain-system"],
    faqs: [
      { question: "How do you guarantee server availability?", answer: "We deploy across multiple availability zone groups using automatic recovery protocols." }
    ]
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    metaTitle: "Custom E-Commerce Platform Development | Teebot",
    metaDescription: "Scalable multi-vendor systems, stripe payment checkouts, and custom product catalogs.",
    introduction: "Increase conversion rates. We build customized multi-vendor e-commerce platforms with fast page rendering and secure checkout pathways.",
    challenges: [
      { title: "Abandoned Cart Rates", desc: "Losing sales when users drop out during checkout due to slow load times." }
    ],
    opportunities: [
      { title: "Fast Checkout Funnel", desc: "Construct single-page stripe checkouts loading in milliseconds." }
    ],
    recommendedTech: ["Next.js", "Tailwind CSS", "Stripe API", "Prisma", "PostgreSQL"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can your system handle flash sales?", answer: "Yes, we integrate Redis caching to manage heavy user loads during sale peaks." }
    ]
  },
  {
    slug: "travel",
    title: "Travel",
    metaTitle: "Custom Travel Booking Portals & Itineraries | Teebot",
    metaDescription: "Custom tour planners, itinerary builders, and automated ticket scheduling layouts.",
    introduction: "Plan dynamic trips. We build custom tour search websites, travel schedule managers, and automatic itinerary email generators.",
    challenges: [
      { title: "Dynamic Pricing Changes", desc: "Updating travel tour prices dynamically depending on hotel seasons." }
    ],
    opportunities: [
      { title: "Automated Pricing Rules", desc: "Connect pricing rules that dynamically shift tour prices based on booking dates." }
    ],
    recommendedTech: ["Next.js", "Node.js", "PostgreSQL", "Nodemailer"],
    caseStudies: ["mallsylo-ecommerce-platform"],
    faqs: [
      { question: "Can users print itineraries?", answer: "Yes, we style pages for standard print layouts and generate PDF downloads." }
    ]
  }
];
