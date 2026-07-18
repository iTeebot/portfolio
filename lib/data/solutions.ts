export interface SolutionData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  features: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const solutions: SolutionData[] = [
  {
    slug: "crm",
    title: "CRM",
    metaTitle: "Custom CRM Solution Development | Teebot",
    metaDescription: "Streamline customer relationships, capture sales leads, and manage contacts with a custom CRM dashboard.",
    introduction: "Our custom CRM solutions help businesses organize, track, and manage all customer interactions and lead information in a single, high-performance web dashboard tailored to their specific sales pipelines.",
    features: [
      "Dynamic customer contact profiles and timeline views",
      "Lead scoring and automated sales rep assignment",
      "Custom email, SMS, and WhatsApp follow-up triggers",
      "Sales revenue reports and forecasting metrics"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Twilio API"],
    faqs: [
      { question: "Can this replace Salesforce?", answer: "Yes, our custom CRM solutions are built specifically for your workflows, eliminating Salesforce subscription fees and complicated features you do not use." }
    ]
  },
  {
    slug: "erp",
    title: "ERP",
    metaTitle: "Custom ERP Enterprise Systems | Teebot",
    metaDescription: "Integrate logistics, inventory, sales, and employee records in a central secure database.",
    introduction: "Enterprise Resource Planning (ERP) tools unify all company data. We build custom ERP backends that bridge departments, streamline reporting, and secure operations.",
    features: [
      "Centralized databases mapping transactions and records",
      "Multi-level manager approval pipelines",
      "Automated balance sheets and audit trail logs"
    ],
    technologies: ["NestJS", "Next.js", "PostgreSQL", "AWS ECS", "Docker"],
    faqs: [
      { question: "How secure is the ERP database?", answer: "We apply AES-256 field-level encryption, SSL transit tunnels, and automatic backups on private subnets to secure all system data." }
    ]
  },
  {
    slug: "inventory",
    title: "Inventory",
    metaTitle: "Inventory Management & Barcode Scanning Software | Teebot",
    metaDescription: "Track stock counts, monitor product movements, and automate reorder alerts for warehouses and stores.",
    introduction: "Eliminate stockouts. We build custom inventory tracking apps featuring camera-based barcode scanning, low-stock warnings, and warehouse bin allocation.",
    features: [
      "Live product quantity monitoring",
      "Low-stock email and Slack alerts",
      "Camera-based barcode and QR scanning controls"
    ],
    technologies: ["React Native", "Node.js", "SQLite", "PostgreSQL"],
    faqs: [
      { question: "Does the scanner work on standard mobile cameras?", answer: "Yes, our mobile apps leverage native device camera integrations to scan barcodes quickly with no special hardware." }
    ]
  },
  {
    slug: "booking-system",
    title: "Booking System",
    metaTitle: "Custom Ticket Booking & Reservations Software | Teebot",
    metaDescription: "Build seat booking systems, ticket reservation engines, and payment checkouts.",
    introduction: "Sell tickets directly. We develop booking engines that support interactive seat maps, secure checkouts, and automatic PDF ticket delivery.",
    features: [
      "Interactive seat selection grids",
      "Live checkout time reservations and locking",
      "Automatic PDF invoice and ticket generation"
    ],
    technologies: ["Next.js", "Redis", "Stripe API", "Nodemailer"],
    faqs: [
      { question: "How do you prevent double-bookings?", answer: "We implement temporary seat locking using Redis key expirations during the checkout process." }
    ]
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    metaTitle: "Multi-Vendor Marketplace Development | Teebot",
    metaDescription: "Develop multi-vendor e-commerce platforms with split payments, seller portals, and admin dashboards.",
    introduction: "Launch your own marketplace. We construct secure multi-vendor portals where sellers list goods and you capture commissions automatically.",
    features: [
      "Dedicated vendor product upload panels",
      "Automated split payments via Stripe Connect",
      "Admin validation checklists for new listings"
    ],
    technologies: ["Next.js", "Stripe Connect", "Prisma", "PostgreSQL"],
    faqs: [
      { question: "How do sellers get paid?", answer: "We integrate Stripe Connect to automatically distribute funds to sellers while transferring your commission fee to your account." }
    ]
  },
  {
    slug: "learning-platform",
    title: "Learning Platform",
    metaTitle: "Custom LMS & Course Delivery Platforms | Teebot",
    metaDescription: "Deliver video courses, manage quizzes, and track student grading records with custom learning platforms.",
    introduction: "Build your own academy. We engineer course hosting databases, quiz managers, and student progress dashboards.",
    features: [
      "Optimized video streaming panels",
      "Automated grading quiz systems",
      "Downloadable student completion certificates"
    ],
    technologies: ["React", "Node.js", "Mux API", "PostgreSQL"],
    faqs: [
      { question: "Where are course videos hosted?", answer: "We use video CDNs like Mux or AWS CloudFront to deliver high-speed, secure, buffer-free streaming." }
    ]
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    metaTitle: "Secure Medical Patient Portals | Teebot",
    metaDescription: "Schedule clinical visits, view laboratory results, and message doctors in a HIPAA-compliant medical portal.",
    introduction: "Connect patients to care. We build secure patient portals that list medical reports, facilitate scheduling, and provide secure chat screens.",
    features: [
      "Secure encrypted laboratory reports delivery",
      "Interactive doctor scheduling calendars",
      "Encrypted messaging threads with doctors"
    ],
    technologies: ["Next.js", "React Native", "HIPAA AWS", "PostgreSQL"],
    faqs: [
      { question: "Are files encrypted?", answer: "Yes, all medical documents are encrypted using AES-256 keys before storage." }
    ]
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    metaTitle: "Intelligent AI Customer Support Chatbots | Teebot",
    metaDescription: "Automate website customer support. AI chatbots trained on your company documents (RAG).",
    introduction: "Reduce support volumes. We deploy smart customer support chatbots that answer client queries based on your website pages, manuals, and FAQs.",
    features: [
      "Contextual database searching (RAG)",
      "Instant site floating chat interface",
      "Seamless agent handoff indicators"
    ],
    technologies: ["OpenAI API", "Pinecone DB", "Node.js", "React"],
    faqs: [
      { question: "Can the chatbot resolve issues?", answer: "Yes, we can connect the chatbot to backend API functions, allowing it to look up order statuses or reschedule bookings." }
    ]
  },
  {
    slug: "document-processing",
    title: "Document Processing",
    metaTitle: "AI-Powered Document Parsing & OCR | Teebot",
    metaDescription: "Extract text fields from scanning receipts, invoices, and contracts automatically using OCR models.",
    introduction: "Stop reading forms manually. We write automated scripts that parse incoming PDF documents, extract relevant fields, and sync them to your database.",
    features: [
      "Custom OCR template parsing",
      "Confidence score validation checkpoints",
      "Automated data syncing pipelines"
    ],
    technologies: ["Python", "OpenAI Vision API", "AWS Textract", "Docker"],
    faqs: [
      { question: "What document formats are supported?", answer: "We support PDF, PNG, JPEG, and TIFF document formats." }
    ]
  },
  {
    slug: "lead-management",
    title: "Lead Management",
    metaTitle: "Lead Generation & Routing Software | Teebot",
    metaDescription: "Capture web leads, track campaign UTM metrics, and route contacts to sales reps automatically.",
    introduction: "Speed up lead outreach. We engineer contact qualification forms, trace marketing UTM tags, and alert reps of fresh incoming leads.",
    features: [
      "UTM campaign parameter logging",
      "Lead routing logic pathways",
      "Instant Slack and WhatsApp notification templates"
    ],
    technologies: ["Next.js", "PostgreSQL", "Slack Webhooks", "HubSpot API"],
    faqs: [
      { question: "Can this sync with our advertising accounts?", answer: "Yes, we can route leads coming from Facebook, Google, and LinkedIn ads into this system." }
    ]
  },
  {
    slug: "payment-platform",
    title: "Payment Platform",
    metaTitle: "Secure Online Payment Platform Development | Teebot",
    metaDescription: "Custom billing panels, recurrent subscriptions, invoice managers, and checkout APIs.",
    introduction: "Unify billing operations. We connect Stripe, PayPal, and local card APIs to custom invoicing systems and subscription profiles.",
    features: [
      "Single-charge and recurring subscription managers",
      "Automatic PDF receipts generation",
      "Webhook payment status tracking networks"
    ],
    technologies: ["Next.js", "Stripe SDK", "Express Backend", "PostgreSQL"],
    faqs: [
      { question: "How do you secure payment forms?", answer: "We utilize tokenized payment gateways (Stripe Elements), ensuring credit card numbers never touch our servers." }
    ]
  },
  {
    slug: "hr-system",
    title: "HR System",
    metaTitle: "Custom Human Resource (HR) Portals | Teebot",
    metaDescription: "Manage employee files, track department permissions, log assets, and process leave requests.",
    introduction: "Manage your internal team. We develop custom HR dashboards that record employee files, department trees, company assets, and holidays.",
    features: [
      "Department org chart maps",
      "Leave request approvals dashboards",
      "Asset allocation logs"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      { question: "Is this accessible to employees?", answer: "Yes, you can configure worker account profiles with limited view permissions." }
    ]
  },
  {
    slug: "attendance-system",
    title: "Attendance System",
    metaTitle: "Employee Attendance & Time Log Software | Teebot",
    metaDescription: "Log employee work shifts, configure geo-fencing checks, and generate payroll logs.",
    introduction: "Track work hours accurately. We build mobile-responsive shift logging checkins with optional GPS geo-fencing rules.",
    features: [
      "Clock-in and clock-out shift trackers",
      "GPS geo-fencing check validation",
      "Monthly payroll timecard reports"
    ],
    technologies: ["React Native", "Next.js", "PostgreSQL", "Google Maps API"],
    faqs: [
      { question: "Can we restrict clock-in to the office?", answer: "Yes, the system verifies the user's location matches the office coordinates before allowing clock-in." }
    ]
  },
  {
    slug: "pos",
    title: "POS",
    metaTitle: "Custom Point-of-Sale (POS) Systems | Teebot",
    metaDescription: "Develop offline-first, high-speed retail checkout registers with live receipt printers support.",
    introduction: "Modernize checkout registers. We design offline-first retail POS checkouts that load inventory instantly and connect to barcode readers.",
    features: [
      "High-speed offline product lists search",
      "Thermal ticket receipt printer configurations",
      "Shift cashier drawer reconciliation logs"
    ],
    technologies: ["React", "Zustand", "SQLite", "Electron Framework"],
    faqs: [
      { question: "Does this work when the internet is down?", answer: "Yes, transactions are saved to a local database and synced to the cloud once the network returns." }
    ]
  },
  {
    slug: "warehouse",
    title: "Warehouse",
    metaTitle: "Warehouse Management Systems (WMS) | Teebot",
    metaDescription: "Track product storage positions, organize picking lists, and verify delivery packing.",
    introduction: "Coordinate warehouse workers. We build structural layouts mapping inventory bins, picker routing, and packaging checks.",
    features: [
      "Warehouse grid storage mapping",
      "Optimized picker routes maps",
      "Scan-to-verify package packaging checks"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Docker"],
    faqs: [
      { question: "Can it print shipping labels?", answer: "Yes, we connect to wireless label printers like Zebra to print barcode slips automatically." }
    ]
  },
  {
    slug: "fleet-management",
    title: "Fleet Management",
    metaTitle: "Vehicle Fleet Tracking & Dispatch Systems | Teebot",
    metaDescription: "Track delivery vehicle routes, monitor fuel logs, and schedule driver dispatch logs.",
    introduction: "Optimize fleets. We build map dashboards showcasing vehicle positions, driver details, repair schedules, and fuel costs.",
    features: [
      "GPS map tracking integration",
      "Fuel receipt logs and usage graphs",
      "Driver shift scheduling timelines"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API"],
    faqs: [
      { question: "How is vehicle position updated?", answer: "We connect to lightweight GPS tracker APIs or driver mobile app clients." }
    ]
  },
  {
    slug: "appointment-scheduling",
    title: "Appointment Scheduling",
    metaTitle: "Custom Appointment Scheduling Software | Teebot",
    metaDescription: "Allow clients to book online meetings, sync calendar availability, and send text reminders.",
    introduction: "Stop scheduling back-and-forths. We build reservation engines that sync with Google Calendar and send automated text warnings.",
    features: [
      "Interactive booking availability calendars",
      "Google Calendar sync updates",
      "SMS appointment confirmation texts"
    ],
    technologies: ["Next.js", "Google Calendar API", "Twilio API", "PostgreSQL"],
    faqs: [
      { question: "Does this prevent overlap?", answer: "Yes, the system queries calendar availability in real-time before displaying booking slots." }
    ]
  }
];
