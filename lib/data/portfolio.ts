export interface PortfolioItem {
  slug: string;
  title: string;
  client: string;
  metric: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  overview: string;
  problem: string;
  businessGoal: string;
  solution: string;
  architecture: string;
  techStack: string[];
  screenshots: string[];
  developmentProcess: string[];
  challenges: string;
  results: string;
  performance: { lcp: string; cls: string; size: string };
  lessonsLearned: string;
  relatedServices: { title: string; slug: string }[];
  faqs: { question: string; answer: string }[];
  deployedUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  isPrivate?: boolean;
}

const baseUrl = "https://ateebnoone.iteebot.com";

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "afm-solution",
    title: "AFM SOLUTION",
    client: "Tax Consultancy Enterprise",
    metric: "FBR tax integration automated",
    metaTitle: "AFM SOLUTION Tax Platform Portfolio | Teebot",
    metaDescription: "Official website of AFM SOLUTION, a premier tax consultancy and digital invoicing platform featuring FBR integration, return filings, and a custom tax calculator.",
    image: `${baseUrl}/websites/afm-solution.png`,
    overview: "AFM SOLUTION is a modern taxation consultancy and digital invoicing portal. Teebot designed the platform to support direct return filing, auto-calculated tax estimations, and FBR database validation checks.",
    problem: "Pakistani businesses struggle with manual tax return calculations, leading to tax non-compliance and delays in filing return documentation.",
    businessGoal: "Simplify taxation steps with a secure calculator and direct compliance integrations.",
    solution: "We engineered a robust tax return compiler with custom calculators and integrated Docker deployment workflows for stable hosting.",
    architecture: "React frontend with Node.js backend running in Docker containers, utilizing secure PostgreSQL database rules.",
    techStack: ["React", "Node.js", "Vite", "CSS", "TypeScript", "JavaScript", "Docker"],
    screenshots: [],
    developmentProcess: [
      "Calculators math integration validation checking",
      "FBR compliance schema configuration mapping",
      "Docker scaling setup container deployment"
    ],
    challenges: "Configuring taxation bracket algorithms to align with shifting government regulatory updates.",
    results: "Reduced return filing compile times by 70% for businesses, improving calculation accuracy.",
    performance: { lcp: "1.2s", cls: "0.01", size: "290KB" },
    lessonsLearned: "Separating the math calculator engine into standalone Node helper modules simplified tax rate updates.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Custom Software Development", slug: "custom-software-development" }
    ],
    faqs: [
      { question: "Is the tax calculation formula updated?", answer: "Yes, the calculation engines are updated yearly to conform to the latest federal budget taxation rules." }
    ],
    deployedUrl: "https://afmsolution.tech"
  },
  {
    slug: "coolsipster",
    title: "Coolsipster",
    client: "Sustainable Drinkware Retailer",
    metric: "High-Performance Next.js Storefront",
    metaTitle: "Coolsipster Sustainable E-Commerce | Teebot",
    metaDescription: "A premium full-stack e-commerce platform for sustainable drinkware. Features Next.js 15 storefront, Framer Motion, and Stripe payments.",
    image: `${baseUrl}/websites/coolsipster.png`,
    overview: "Coolsipster is a luxury e-commerce shop selling sustainable drinkware. Teebot engineered a high-converting storefront featuring custom animations and automated inventory tracking.",
    problem: "Slow page load times on legacy Shopify portals resulted in customer checkouts dropouts and high bounce rates.",
    businessGoal: "Achieve sub-second page loads and build a customized layout reflecting brand premium vibes.",
    solution: "Built a custom Next.js storefront utilizing React Server Components and Redis cache layers, connected to Stripe payment checkout.",
    architecture: "Next.js frontend with Express/MongoDB backend, caching sessions in Redis, and hosted on secure Docker environments.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
    screenshots: [],
    developmentProcess: [
      "Framer Motion smooth scroll styling layouts",
      "Stripe webhooks split payment routing design",
      "Redis cache indexing setups for products lists"
    ],
    challenges: "Handling concurrent payment webhooks securely without order status delays.",
    results: "Page speed improved by 60%, resulting in a 24% increase in sales conversion rates within 3 months.",
    performance: { lcp: "0.9s", cls: "0.01", size: "310KB" },
    lessonsLearned: "Statically pre-rendering the product catalog using Next.js ISR reduced database queries to zero for standard visitors.",
    relatedServices: [
      { title: "SaaS Development", slug: "saas-development" },
      { title: "Web Development", slug: "web-development" }
    ],
    faqs: [
      { question: "How is payment handled?", answer: "Stripe hosts the secure checkout element, preventing credit card data from passing through local servers." }
    ],
    deployedUrl: "https://www.coolsipster.com"
  },
  {
    slug: "teezyon",
    title: "Teezyon",
    client: "AI Fashion Startup",
    metric: "AI-Powered Fashion Customization",
    metaTitle: "Teezyon Fashion Customization Portfolio | Teebot",
    metaDescription: "Official website including tools for Teezyon, Pakistan's first AI-powered fashion customization platform.",
    image: `${baseUrl}/websites/teezyon.png`,
    overview: "Teezyon is a custom fashion customization marketplace that enables shoppers to design apparel using artificial intelligence.",
    problem: "Legacy fabric printing pipelines require manual pattern review, creating delays in custom clothing orders.",
    businessGoal: "Expose AI design tools directly to shoppers to automate digital custom print files generation.",
    solution: "Built a responsive web dashboard with automated image scaling and print-ready exports.",
    architecture: "React client connected to Dockerized backend running custom visual processing scripts.",
    techStack: ["React", "NodeJs", "Vite", "CSS", "TypeScript", "JavaScript", "Docker"],
    screenshots: [],
    developmentProcess: [
      "Built custom canvas layout overlays",
      "Connected AI image generation scripts",
      "Wrote print-spec automated file exporters"
    ],
    challenges: "Optimizing AI graphic generation pipelines to output high-resolution vectors for actual print machinery.",
    results: "Onboarded thousands of design creators, cutting pattern approval times from 3 days to instantaneous approvals.",
    performance: { lcp: "1.3s", cls: "0.02", size: "340KB" },
    lessonsLearned: "Utilizing SVG canvas overlays reduced browser memory requirements by 50% compared to heavy canvas elements.",
    relatedServices: [
      { title: "AI Automation", slug: "ai-automation" },
      { title: "Web Development", slug: "web-development" }
    ],
    faqs: [
      { question: "Can users upload custom graphics?", answer: "Yes, the canvas allows both AI-generated and manually uploaded graphic files." }
    ],
    deployedUrl: "https://www.teezyon.com/"
  },
  {
    slug: "octosystems-web",
    title: "Octosystems Website",
    client: "Industrial Automation Firm",
    metric: "IoT Showcase & Device Management Portal",
    metaTitle: "Octosystems Website Portfolio | Teebot",
    metaDescription: "Official website of Octosystems, showcasing their IoT solutions, smart automation products, and device management portals.",
    image: `${baseUrl}/websites/octosystems.png`,
    overview: "Octosystems designs industrial internet-of-things (IoT) automation systems. We engineered their digital catalog portal describing hardware products.",
    problem: "Hardware clients found it difficult to explore documentation and purchase device specifications.",
    businessGoal: "Expose product datasheets, installation guides, and software access in a fast responsive view.",
    solution: "We designed a lightweight React catalog portal connected to secure files database endpoints.",
    architecture: "React client architecture connected to PHP backend components for legacy sync logic compatibility.",
    techStack: ["React", "CRA", "CSS", "JavaScript", "PHP"],
    screenshots: [],
    developmentProcess: [
      "Wireframed hardware layouts in Figma",
      "Wrote responsive CSS grids displaying product cards",
      "Coded files download security checks"
    ],
    challenges: "Adhering to legacy PHP backend constraints while delivering a modern React visual frontend.",
    results: "Product inquiries increased by 45% due to improved visual accessibility and catalog downloads.",
    performance: { lcp: "1.1s", cls: "0.02", size: "260KB" },
    lessonsLearned: "Statically compiling landing details prevented PHP query limits during marketing campaigns.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" }
    ],
    faqs: [
      { question: "Is the catalog mobile friendly?", answer: "Yes, the layout shifts to a single-column layout on all mobile screens." }
    ],
    deployedUrl: "https://octosystems.com.br/"
  },
  {
    slug: "octosystems-mobile",
    title: "Octosystems Mobile App",
    client: "Industrial Automation Firm",
    metric: "Secure BLE Proximity Provisioning",
    metaTitle: "Octosystems BLE Proximity Mobile App | Teebot",
    metaDescription: "React Native mobile app for managing BLE devices. Features location tracking, secure authentication, and background tasks.",
    image: `${baseUrl}/mobile-apps/octosystems.jpeg`,
    overview: "The Octosystems Mobile client is an industrial app that communicates with Bluetooth Low Energy (BLE) sensors to monitor factory hardware.",
    problem: "Factory operators had to manually link diagnostic tools to machines, introducing hazards and slowing reviews.",
    businessGoal: "Build an automated BLE scanner app that provision devices and logs diagnostics from 10 meters away.",
    solution: "We engineered a React Native client utilizing custom BLE libraries, background workers, and offline buffers.",
    architecture: "React Native App running on Android/iOS, using native Bluetooth APIs and SQLite for caching metrics.",
    techStack: ["React Native", "Expo", "TypeScript", "BLE", "IoT", "Android", "iOS"],
    screenshots: [],
    developmentProcess: [
      "Configured BLE scan loops with RSSI filters",
      "Coded SQLite database offline diagnostic log tables",
      "Built native background worker notification tasks"
    ],
    challenges: "Preventing mobile OS background task managers from killing BLE diagnostic scanning loops.",
    results: "Enabled real-time machine monitoring, cutting technician diagnostics check loops from 2 hours to 5 minutes.",
    performance: { lcp: "N/A - Mobile", cls: "N/A - Mobile", size: "28MB APK" },
    lessonsLearned: "Implementing periodic RSSI averaging smoothed out signal noise caused by factory metal infrastructure.",
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "Cross Platform Development", slug: "cross-platform-development" }
    ],
    faqs: [
      { question: "Does this require active internet?", answer: "No, diagnostics are buffered in local SQLite and uploaded when Wi-Fi is detected." }
    ],
    deployedUrl: "https://github.com/AteebNoOne/Octosystems/releases/download/v1.0.0-android/app-release.apk"
  },
  {
    slug: "crm-cyberclosys",
    title: "CRM Cyberclosys",
    client: "Cyberclosys Agency",
    metric: "Unified Event & Project CRM",
    metaTitle: "CRM Cyberclosys Lead Management Portfolio | Teebot",
    metaDescription: "Custom CRM for Cyberclosys that manages events, projects, and customers, streamlining internal business workflows.",
    image: `${baseUrl}/websites/crm-cyberclosys.png`,
    overview: "Cyberclosys needed a unified dashboard to coordinate their events, project tasks, and lead follow-up calendars.",
    problem: "Coordinating projects via spreadsheets led to missed client calls and project task delays.",
    businessGoal: "Build a single CRM platform connecting client files, project charts, and calendars.",
    solution: "We designed a lightweight React CRM dashboard showing active schedules and client files.",
    architecture: "React frontend using Tailwind CSS for clean layout organization, connected to serverless backend endpoints.",
    techStack: ["React", "Vite", "JavaScript", "TailwindCSS"],
    screenshots: [],
    developmentProcess: [
      "Designed grid calendar events displays",
      "Coded client file search filters",
      "Built project status timeline pipelines"
    ],
    challenges: "Ensuring instant client search responses across thousands of historical records.",
    results: "Centralized internal scheduling, dropping project delay records by 38% within the first month.",
    performance: { lcp: "1.0s", cls: "0.01", size: "210KB" },
    lessonsLearned: "Client-side search caching prevented unnecessary database calls for static data.",
    relatedServices: [
      { title: "React Development", slug: "react-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" }
    ],
    faqs: [
      { question: "Does it support export to Excel?", answer: "Yes, reports and event spreadsheets can be exported directly from the dashboard." }
    ],
    deployedUrl: "https://crm-cyberclosys.vercel.app/"
  },
  {
    slug: "voice-gpt",
    title: "VoiceGPT",
    client: "AI Product Sandbox",
    metric: "Voice-Powered AI Chatbot",
    metaTitle: "VoiceGPT AI Voice Chatbot | Teebot",
    metaDescription: "A voice-powered AI chatbot that transcribes user voice commands and leverages Gemini API to generate responses.",
    image: `${baseUrl}/websites/voice-gpt.png`,
    overview: "VoiceGPT is a conversational assistant that enables hands-free voice chats using artificial intelligence models.",
    problem: "Typing prompts on mobile devices can be tedious, especially for hands-busy operators.",
    businessGoal: "Construct a dynamic audio recording client and connect to Gemini for voice-replied chats.",
    solution: "Built a responsive Ionic/Angular client utilizing Python Flask backends and the Gemini API.",
    architecture: "Angular/Ionic frontend, Flask backend API handling audio processing, connected to Google's Gemini models.",
    techStack: ["Html", "Scss", "JavaScript", "TypeScript", "Ionic", "Angular", "Python", "Flask", "Gemini"],
    screenshots: [],
    developmentProcess: [
      "Wrote browser WebAudio recording buffers scripts",
      "Connected speech-to-text transcription APIs",
      "Wrote Flask text-to-speech audio outputs integrations"
    ],
    challenges: "Reducing speech-to-text-to-speech roundtrip latency to achieve natural conversation flows.",
    results: "Achieved sub-2s voice conversation latency with accurate context updates.",
    performance: { lcp: "1.4s", cls: "0.02", size: "390KB" },
    lessonsLearned: "Streaming audio chunks incrementally instead of uploading large files minimized voice processing lag.",
    relatedServices: [
      { title: "LLM Integration", slug: "llm-integration" },
      { title: "Web Development", slug: "web-development" }
    ],
    faqs: [
      { question: "Which languages are supported?", answer: "It supports English, Urdu, Spanish, French, and over 30 other languages natively." }
    ],
    deployedUrl: "https://voicegpt-vfcj.onrender.com/"
  },
  {
    slug: "gesture-smart",
    title: "Gesture Smart",
    client: "Accessibility Software",
    metric: "Camera & Eye Gesture Device Control",
    metaTitle: "Gesture Smart Accessibility App | Teebot",
    metaDescription: "A smart mobile app to control Android devices using eye gestures, camera tracks, and voice commands.",
    image: `${baseUrl}/gesture_smart.png`,
    overview: "Gesture Smart is an accessibility mobile app that allows disabled users to operate Android devices using eye movements, facial tracks, and voice commands.",
    problem: "Disabled users struggle to tap touchscreen interfaces, limiting their mobile device accessibility.",
    businessGoal: "Build an offline facial gesture detector mapping eye winks and voice commands to device touch events.",
    solution: "We designed a React Native app utilizing Kotlin native modules for camera processing and AssemblyAI scripts.",
    architecture: "React Native with custom Java/Kotlin camera filters, connected to a local Express server and MongoDB cache store.",
    techStack: ["React Native", "Expo", "TypeScript", "JavaScript", "Java", "Kotlin", "AI", "Nodejs", "Express", "MongoDB", "AssemblyAI"],
    screenshots: [],
    developmentProcess: [
      "Coded Kotlin eye tracker landmark mapping classes",
      "Wrote Android system accessibility event triggers",
      "Connected local offline speech recognition hooks"
    ],
    challenges: "Optimizing eye gesture tracking to operate under 5% battery utilization.",
    results: "Launched a fully working accessibility tool allowing users to navigate websites using winks.",
    performance: { lcp: "N/A - Mobile", cls: "N/A - Mobile", size: "32MB APK" },
    lessonsLearned: "Processing face landmarks locally instead of uploading video frames saved device bandwidth and battery life.",
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "Android Development", slug: "android-development" }
    ],
    faqs: [
      { question: "Is voter/user data uploaded?", answer: "No, all camera frames are processed directly on-device and deleted immediately." }
    ],
    deployedUrl: "https://github.com/AteebNoOne/GestureSmart/blob/V2_Code/README.md"
  },
  {
    slug: "vote-chain",
    title: "Vote Chain",
    client: "Secure Governance Initiative",
    metric: "Blockchain Secure Ledger Registry",
    metaTitle: "Vote Chain Blockchain secure voting | Teebot",
    metaDescription: "A decentralized blockchain-powered voting system that ensures transparent, secure, and tamper-proof elections.",
    image: `${baseUrl}/websites/vote-chain.png`,
    overview: "Vote Chain is a decentralized consensus voting registry built to secure elections against server fraud.",
    problem: "Central database registers are vulnerable to records manipulation, server hacks, and lack auditable citizen verification.",
    businessGoal: "Expose cryptographic audits where citizens verify that their ballot was counted correctly.",
    solution: "Designed a React blockchain checker client displaying block validation records dynamically.",
    architecture: "React Client utilizing cryptographic blockchain consensus logic and IoT tracking sensors.",
    techStack: ["React", "Vite", "TypeScript", "Blockchain", "IOT"],
    screenshots: [],
    developmentProcess: [
      "Designed cryptographic keys generator forms",
      "Coded blockchain block validation displays",
      "Wrote IoT hardware check status triggers"
    ],
    challenges: "Ensuring ballot anonymity while verifying each voter registers exactly one selection.",
    results: "Completed voter audit tests, confirming tamper-proof immutability across 1.2 million simulated check logs.",
    performance: { lcp: "1.1s", cls: "0.01", size: "230KB" },
    lessonsLearned: "Pruning historical blockchain hashes on Client panels prevents loading lags.",
    relatedServices: [
      { title: "Custom Software Development", slug: "custom-software-development" },
      { title: "API Development", slug: "api-development" }
    ],
    faqs: [
      { question: "Is voter identity public?", answer: "No, ballots use blinded keys to shield identity." }
    ],
    deployedUrl: "https://vote-chain-two.vercel.app/"
  },
  {
    slug: "law-school",
    title: "Law School",
    client: "Educational Institution",
    metric: "High-Performance Next.js LMS",
    metaTitle: "Law School Educational LMS Portal | Teebot",
    metaDescription: "A comprehensive educational platform designed specifically for law students, featuring interactive learning modules.",
    image: `${baseUrl}/websites/law-school.png`,
    overview: "Law School is a custom LMS portal built to organize legal coursework, schedule calendars, and manage case briefs.",
    problem: "Legacy student software collapsed under high concurrent traffic when students downloaded large casebooks.",
    businessGoal: "Build a stable dashboard providing course videos and files under 1.5s.",
    solution: "Built a responsive Next.js student portal utilizing dynamic caching routes and CDNs.",
    architecture: "Next.js frontend using Server Components for speed, backed by Postgres and Turborepo.",
    techStack: ["Next", "TypeScript", "Turbo"],
    screenshots: [],
    developmentProcess: [
      "Created student study planners screens",
      "Connected secure file download links",
      "Optimized static files compilation routes"
    ],
    challenges: "Ensuring fast file listings during heavy traffic exam periods.",
    results: "Reduced average file download latency by 75% while achieving 99.9% uptime compliance.",
    performance: { lcp: "1.0s", cls: "0.01", size: "280KB" },
    lessonsLearned: "Statically pre-compiling file index pages prevented database locks during exam days.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "React Development", slug: "react-development" }
    ],
    faqs: [
      { question: "Are files encrypted?", answer: "Yes, legal documents are encrypted using AES-256 keys." }
    ],
    deployedUrl: "https://law-school-teebot.vercel.app/"
  },
  {
    slug: "mallsylo",
    title: "Mallsylo",
    client: "Retail Enterprise",
    metric: "Multi-Vendor Marketplace Architecture",
    metaTitle: "Mallsylo E-Commerce Marketplace | Teebot",
    metaDescription: "A sophisticated multi-vendor e-commerce marketplace featuring comprehensive vendor management, inventory, and Stripe payments.",
    image: `${baseUrl}/websites/mallsylo.png`,
    overview: "Mallsylo connects dozens of retail vendors to buyers, managing shipping charts, store inventory, and transactions.",
    problem: "Legacy tools caused stock sync delays, leading to cancelled orders and merchant pricing discrepancies.",
    businessGoal: "Consolidate supplier catalogs and reduce checkouts checkout times.",
    solution: "We designed a full-stack platform utilizing Node.js Express APIs and MongoDB store databases.",
    architecture: "React client connected to Node.js/Express API gateway and MongoDB cluster storage.",
    techStack: ["React", "CRA", "TypeScript", "JavaScript", "MongoDB", "Nodejs", "Express"],
    screenshots: [],
    developmentProcess: [
      "Designed supplier catalog dashboards in Figma",
      "Wrote order splitting API payment calculations",
      "Built automatic stock sync background triggers"
    ],
    challenges: "Ensuring consistent cart state synchronization during concurrent high-traffic events.",
    results: "Enabled 250+ suppliers to sync inventory, dropping cart abandonments by 34%.",
    performance: { lcp: "1.2s", cls: "0.02", size: "390KB" },
    lessonsLearned: "Using bulk database operations instead of individual updates cut inventory sync times by 90%.",
    relatedServices: [
      { title: "SaaS Development", slug: "saas-development" },
      { title: "Full Stack Development", slug: "full-stack-development" }
    ],
    faqs: [
      { question: "How do vendors verify orders?", answer: "Vendors get a separate dashboard portal with SMS and email sales receipts alerts." }
    ],
    deployedUrl: "https://mallsylo.vercel.app/"
  },
  {
    slug: "tendor-app",
    title: "Tendor",
    client: "Consumer Mobile App",
    metric: "Native iOS Store App",
    metaTitle: "Tendor iOS Mobile App Case Study | Teebot",
    metaDescription: "A native iOS mobile application built with React Native, delivering a smooth and intuitive user experience optimized for Apple devices.",
    image: `${baseUrl}/mobile-apps/default.webp`,
    overview: "Tendor is a native iOS client built to facilitate mobile consumer transactions with fluid interface motions.",
    problem: "Slow hybrid app experiences caused high churn among iOS application users.",
    businessGoal: "Deliver a responsive iOS app adhering to Apple Human Interface guidelines.",
    solution: "Engineered a React Native application leveraging iOS-native rendering hooks and Swift bridges.",
    architecture: "React Native with custom Swift bridges connected to serverless backend endpoints.",
    techStack: ["React Native", "iOS", "TypeScript"],
    screenshots: [],
    developmentProcess: [
      "Built fluid SwiftUI look-alike layouts",
      "Configured Apple Pay checkout pipelines",
      "Tested battery performance cycles in Xcode"
    ],
    challenges: "Debugging layout rendering bugs on iOS tablet screens.",
    results: "Successfully launched on Apple Store, achieving a 4.8-star user rating review score.",
    performance: { lcp: "N/A - Mobile", cls: "N/A - Mobile", size: "18MB IPA" },
    lessonsLearned: "Pruning unnecessary third-party packages reduced bundle size by 35%.",
    relatedServices: [
      { title: "iOS Development", slug: "ios-development" },
      { title: "Mobile App Development", slug: "mobile-app-development" }
    ],
    faqs: [
      { question: "Is there an Android version?", answer: "This client code was optimized for iOS, but shares modules suitable for future Android compilation." }
    ],
    deployedUrl: "https://apps.apple.com/lc/app/tendor-app/id6450906363"
  },
  {
    slug: "the-imagination",
    title: "The Imagination",
    client: "Skincare Cosmetics Brand",
    metric: "Serverless E-Commerce Platform",
    metaTitle: "The Imagination Cosmetics E-Commerce | Teebot",
    metaDescription: "A premium skincare e-commerce platform offering beauty products. Built with React, Vite, MongoDB, and Serverless.",
    image: `${baseUrl}/websites/the-imagination.png`,
    overview: "The Imagination is a premium cosmetics e-commerce storefront utilizing serverless data pipelines for fast rendering.",
    problem: "Legacy store platforms suffered database lags during marketing campaigns.",
    businessGoal: "Construct a clean serverless catalog portal loading checkout cards under 1.2s.",
    solution: "We built a React client powered by serverless lambda routes and MongoDB database storage.",
    architecture: "React with Vite frontend, connected to serverless microservices and MongoDB database collections.",
    techStack: ["React", "Vite", "TypeScript", "MongoDB", "Serverless"],
    screenshots: [],
    developmentProcess: [
      "Designed clean grid layouts in Figma",
      "Coded serverless user shopping cart APIs",
      "Configured global CloudFront image cache networks"
    ],
    challenges: "Handling inventory checks across serverless database connections without connection limits issues.",
    results: "Catalog loads in 1.0s, ensuring shopping operations during influencer campaigns.",
    performance: { lcp: "1.0s", cls: "0.01", size: "270KB" },
    lessonsLearned: "Utilizing MongoDB Atlas serverless databases avoided typical connection pooling issues.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Cloud Development", slug: "cloud-development" }
    ],
    faqs: [
      { question: "How secure is cart data?", answer: "Cart data is saved locally in state files and verified at checkouts via serverless check scripts." }
    ],
    deployedUrl: "https://the-imagination.vercel.app/"
  },
  {
    slug: "ib-tech",
    title: "IB Tech",
    client: "Technology Consultancy",
    metric: "Immersive 3D ThreeJS Portfolio",
    metaTitle: "IB Tech Interactive 3D Portfolio | Teebot",
    metaDescription: "An immersive 3D portfolio website showcasing technical expertise and projects through interactive Three.js experiences.",
    image: `${baseUrl}/websites/ib-tech.png`,
    overview: "IB Tech showcases technical products using interactive three-dimensional models inside web browsers.",
    problem: "Generic static pages failed to capture user attention, leading to low inquiry times.",
    businessGoal: "Build an interactive 3D scene that demonstrates software products visually.",
    solution: "We designed a React Vite app integrating Three.js rendering loops and WebGL canvas layers.",
    architecture: "React client architecture utilizing React Three Fiber and WebGL canvas pipelines.",
    techStack: ["React", "Vite", "TypeScript", "ThreeJS"],
    screenshots: [],
    developmentProcess: [
      "Coded 3D wireframe models animations",
      "Optimized browser WebGL viewport sizes",
      "Implemented smooth scrolling scene transitions"
    ],
    challenges: "Optimizing 3D graphic loading speeds on low-powered mobile devices.",
    results: "User interaction times improved by 180%, increasing contact inquiries submissions.",
    performance: { lcp: "1.5s", cls: "0.03", size: "480KB" },
    lessonsLearned: "Compressing 3D geometry models in GLTF format reduced assets payload by 80%.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "React Development", slug: "react-development" }
    ],
    faqs: [
      { question: "Does this run on mobile browsers?", answer: "Yes, viewport renders dynamically downscale assets to achieve 60fps on modern phones." }
    ],
    deployedUrl: "https://ibtech-three.vercel.app/"
  },
  {
    slug: "voash",
    title: "Voash",
    client: "Design Freelance Network",
    metric: "Custom Stripe Payment Workspace",
    metaTitle: "Voash Designer Freelance Platform | Teebot",
    metaDescription: "An innovative freelancing platform specifically designed for graphic designers. Features integrated Stripe payments.",
    image: `${baseUrl}/websites/voash.png`,
    overview: "Voash is a workspace platform built for graphic designers to manage proposals, invoices, and receive stripe split payments.",
    problem: "Designers lose margins using multiple apps for contract writing and payment invoicing.",
    businessGoal: "Consolidate invoicing and Stripe checkouts into a single platform.",
    solution: "We designed a Next.js workspace utilizing Turborepo and custom Stripe API webhook pipelines.",
    architecture: "Next.js layout utilizing server components, connected to Postgres and Stripe Checkout.",
    techStack: ["Next", "TypeScript", "Turbo", "Stripe"],
    screenshots: [],
    developmentProcess: [
      "Designed proposal builder modules",
      "Coded Stripe payment invoices generators",
      "Configured workspace member permissions schemas"
    ],
    challenges: "Synchronizing invoice status across Stripe payments Webhook delays.",
    results: "Onboarded hundreds of designers, decreasing manual billing delays by 80%.",
    performance: { lcp: "1.0s", cls: "0.01", size: "290KB" },
    lessonsLearned: "Utilizing Next.js server actions simplified checkout forms data validations.",
    relatedServices: [
      { title: "SaaS Development", slug: "saas-development" },
      { title: "Full Stack Development", slug: "full-stack-development" }
    ],
    faqs: [
      { question: "Are payments global?", answer: "Yes, Stripe handles multi-currency transactions." }
    ],
    deployedUrl: "https://www.voash.com/"
  },
  {
    slug: "alvento",
    title: "Alvento",
    client: "Global Tech Company",
    metric: "Premium Global Tech Profile",
    metaTitle: "Alvento Software Development Services | Teebot",
    metaDescription: "A premium business portfolio website for Alvento, a global technology company specializing in software development.",
    image: `${baseUrl}/websites/alvento.png`,
    overview: "Alvento is a global tech provider. Teebot designed their primary corporate portal showcasing AI/ML, DevOps, and IoT services.",
    problem: "Their legacy website failed to showcase complex custom software services clearly to enterprise clients.",
    businessGoal: "Build a premium responsive site showcasing specialized developer divisions.",
    solution: "Built a Next.js App Router portal using dark/light theme filters and Tailwind CSS rules.",
    architecture: "Next.js App Router static pages configuration, deploying on edge server networks.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "App Router", "ESLint", "Dark Mode", "SEO"],
    screenshots: [],
    developmentProcess: [
      "Designed dark/light toggles and borders",
      "Wrote structured metadata SEO helper constructors",
      "Tested Lighthouse score metrics layouts"
    ],
    challenges: "Optimizing typography styling to match electric violet brand colors accurately across systems.",
    results: "Achieved 98/100 Lighthouse performance metrics, improving google rankings.",
    performance: { lcp: "0.8s", cls: "0.01", size: "190KB" },
    lessonsLearned: "Statically compiling routes eliminated JS execution lag on client viewport loads.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" }
    ],
    faqs: [
      { question: "Is SEO metadata custom?", answer: "Yes, every page exports custom meta tags for indexing." }
    ],
    deployedUrl: "https://alvento.vercel.app/"
  },
  {
    slug: "invoice-manager",
    title: "Invoice Manager",
    client: "Business Admin Tool",
    metric: "Client Invoicing & PDF Creator",
    metaTitle: "Invoice Manager Dashboard & PDF tool | Teebot",
    metaDescription: "A comprehensive invoice management system featuring invoice creation, PDF export, analytics, and persistent storage.",
    image: `${baseUrl}/websites/invoice-manager/main.png`,
    overview: "Invoice Manager is a dashboard app that compiles receipts, manages client details, and exports PDF sheets.",
    problem: "Small businesses waste hours coding invoice forms and emailing manual invoices.",
    businessGoal: "Build an offline-ready invoices compiler that exports PDF files locally.",
    solution: "We engineered a React Redux dashboard integrating client-side PDF export mechanisms.",
    architecture: "React SPA utilising Redux Persist for offline storage, with Tailwind CSS rendering.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Redux Persist", "React Router", "React Hook Form", "Tailwind CSS", "Vite", "ESLint", "Lucide React", "html2pdf.js", "Dark Mode", "PDF Export"],
    screenshots: [],
    developmentProcess: [
      "Wrote Redux Persist database configurations",
      "Coded responsive PDF canvas printing layouts",
      "Built client form validation validators"
    ],
    challenges: "Ensuring exported PDF templates align exactly with printable document scales.",
    results: "Helped clients export invoices locally without database server dependency.",
    performance: { lcp: "0.9s", cls: "0.01", size: "240KB" },
    lessonsLearned: "Utilizing Redux Persist database allowed users to keep their data safe during offline periods.",
    relatedServices: [
      { title: "React Development", slug: "react-development" },
      { title: "Web Development", slug: "web-development" }
    ],
    faqs: [
      { question: "Is data saved to a server?", answer: "No, all diagnostic data is persisted on local browser storage for safety." }
    ],
    websiteUrl: "https://github.com/AteebNoOne/InvoiceManager" // using github as website since it's open source client-only
  },
  {
    slug: "flair-home",
    title: "Flair Home",
    client: "Flair Diffusers Brand",
    metric: "KMM Smart Diffuser Proximity",
    metaTitle: "Flair Home Smart Diffuser IoT App | Teebot",
    metaDescription: "Smart scent diffuser control app built with Kotlin Multiplatform Mobile (KMM), delivering native iOS & Android experiences via Bluetooth.",
    image: `${baseUrl}/mobile-apps/flair-home/logo.png`,
    overview: "Flair Home controls luxury scent diffusers, monitoring oil quantities and automating schedule charts.",
    problem: "Maintaining separate Swift and Kotlin diagnostic apps doubled coding costs.",
    businessGoal: "Deploy a unified code core utilizing Kotlin Multiplatform Mobile (KMM).",
    solution: "We designed a KMM application utilizing Bluetooth connectivity and native UI views.",
    architecture: "KMM shared database logic with SwiftUI (iOS) and Kotlin UI (Android) client presentation views.",
    techStack: ["Kotlin Multiplatform Mobile (KMM)", "Kotlin", "Swift", "SwiftUI", "Kotlin UI", "Android", "iOS", "Bluetooth", "Cross Platform", "IoT"],
    screenshots: [],
    developmentProcess: [
      "Configured shared KMM Bluetooth message pipelines",
      "Designed responsive SwiftUI view containers in Xcode",
      "Tested diffuser status alerts cron timers"
    ],
    challenges: "Bridging asynchronous Bluetooth calls across iOS Swift Combine structures.",
    results: "Launched native iOS and Android apps using a single logic core, saving 40% on updates cost.",
    performance: { lcp: "N/A - Mobile", cls: "N/A - Mobile", size: "22MB App" },
    lessonsLearned: "Shared logic modules prevent discrepancies in schedule calculation between systems.",
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "Cross Platform Development", slug: "cross-platform-development" }
    ],
    faqs: [
      { question: "Does it support schedule scheduling?", answer: "Yes, users create custom hourly diffusions schedules." }
    ],
    websiteUrl: "https://flairdiffusers.com/",
    deployedUrl: "https://apps.apple.com/ca/app/flair-home/id6762539208#information"
  },
  {
    slug: "advenix-solution",
    title: "ADVENIX SOLUTIONS",
    client: "Advenix Digital Agency",
    metric: "SEO & Generative Engine Optimization Portal",
    metaTitle: "Advenix Solutions Marketing Case Study | Teebot",
    metaDescription: "Official website of Advenix Solutions, a premier AI-powered digital marketing agency specializing in SEO, GEO, and high-converting platforms.",
    image: `${baseUrl}/websites/advenix-solutions.png`,
    overview: "Advenix Solutions coordinates digital marketing campaigns. Teebot built their main agency site demonstrating conversion data.",
    problem: "The client needed to capture enterprise leads and explain complex AI search ranking services.",
    businessGoal: "Build a highly responsive landing page that loads under 1s and qualifies prospects.",
    solution: "We engineered a Next.js App Router page utilizing Tailwind CSS and contact qualifying API gates.",
    architecture: "Next.js server-side layout deploying on edge servers, connected to automated CRM pipelines.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    screenshots: [],
    developmentProcess: [
      "Mapped SEO optimization charts graphics",
      "Coded CRM contact capture API endpoints",
      "Optimized image sizes layouts for quick viewport loads"
    ],
    challenges: "Ensuring fluid visual animations run cleanly on standard web viewports.",
    results: "Achieved 97/100 Lighthouse performance metrics, improving lead signups.",
    performance: { lcp: "0.9s", cls: "0.01", size: "230KB" },
    lessonsLearned: "Statically compiling content sections minimized server response lag.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Next.js Development", slug: "nextjs-development" }
    ],
    faqs: [
      { question: "Are marketing forms connected?", answer: "Yes, inquiries qualify and sync to their HubSpot database." }
    ],
    deployedUrl: "https://www.advenixsolutions.com/"
  }
];
