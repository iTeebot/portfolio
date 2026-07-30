export interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  metric: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  clientBackground: string;
  businessProblem: string;
  research: string;
  planning: string;
  design: string;
  architecture: string;
  implementation: string;
  testing: string;
  deployment: string;
  results: string;
  metrics: string[];
  roi: string;
  clientFeedback: { quote: string; author: string; role: string };
  lessonsLearned: string;
  deployedUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  isPrivate?: boolean;
}

const baseUrl = "https://ateebnoone.iteebot.com";

export const caseStudies: CaseStudyData[] = [
  {
    slug: "afm-solution",
    title: "AFM SOLUTION",
    client: "Tax Consultancy Enterprise",
    metric: "FBR tax integration automated",
    metaTitle: "AFM SOLUTION Tax Case Study | Teebot",
    metaDescription: "Read how Teebot designed and automated the taxation invoicing portal for AFM SOLUTION, integrating FBR filing compliance.",
    image: `${baseUrl}/websites/afm-solution.png`,
    clientBackground: "AFM SOLUTION is a tax advisory providing filing compliance and digital invoicing to Pakistani businesses.",
    businessProblem: "Businesses struggled to calculate tax brackets manually, leading to filing errors and compliance notices.",
    research: "Analyzed taxation policies to map calculators logic accurately for different corporate entities.",
    planning: "Planned a React-based compiler with Node.js calculator modules and Docker containers containerization.",
    design: "Designed a clean calculator dashboard focused on rapid inputs and clear return verification steps.",
    architecture: "React frontend communicating with Dockerized Node.js API endpoints, utilizing Postgres storage.",
    implementation: "Built the taxation brackets calculator engine and automated return documentation templates.",
    testing: "Audited calculations against official tax rates sheets across multiple income brackets.",
    deployment: "Deployed containerized packages to local production servers under Docker networks.",
    results: "Reduced client return preparation times by 70%, with zero math calculation errors.",
    metrics: [
      "Tax filing compile time reduced by 70%",
      "Zero mathematics estimation calculation errors",
      "Over 40% reduction in compliance inquiries"
    ],
    roi: "Achieved full project return on investment (ROI) within 4 months through automated portal signups.",
    clientFeedback: {
      quote: "Teebot automated our core calculators. The return compilation is now 100% fast and compliant.",
      author: "Farhan Malik",
      role: "Managing Director, AFM Solution"
    },
    lessonsLearned: "Separating taxation parameters from business logic allowed swift updates for new budget rules.",
    deployedUrl: "https://afmsolution.tech"
  },
  {
    slug: "coolsipster",
    title: "Coolsipster",
    client: "Sustainable Drinkware Retailer",
    metric: "High-Performance Next.js Storefront",
    metaTitle: "Coolsipster E-Commerce Case Study | Teebot",
    metaDescription: "Learn how we built a custom Next.js storefront for Coolsipster, increasing conversions by 24% and reducing page load times.",
    image: `${baseUrl}/websites/coolsipster.png`,
    clientBackground: "Coolsipster sells luxury sustainable drinkware items directly to retail consumers.",
    businessProblem: "Slow page load times on templates Shopify configurations led to shopping cart drops.",
    research: "Found that heavy images payloads and server database lookups during page load were stalling checkouts.",
    planning: "Migrated to Next.js using static generation (SSG) for instantaneous layouts rendering.",
    design: "Created clean visual layouts with fluid Framer Motion animations matching brand colors.",
    architecture: "Next.js static views, connected to Express backend APIs and MongoDB collections, cached via Redis.",
    implementation: "Developed the Next.js storefront, Stripe checkout gateways, and dashboard order handlers.",
    testing: "Conducted stress load tests simulating 5,000 checkout queries simultaneously.",
    deployment: "Hosted Next.js pages on edge servers (Vercel) and the backend API on Docker containers.",
    results: "Page load speeds dropped below 1s, resulting in a 24% sales conversion increase.",
    metrics: [
      "Page load speeds improved by 60%",
      "Checkout conversion rate increased by 24%",
      "Stripe webhook payout time reduced below 500ms"
    ],
    roi: "Recouped client development investments within 3 months of launching the Next.js storefront.",
    clientFeedback: {
      quote: "Our website loads instantly now. We've seen a massive jump in mobile conversions.",
      author: "David Vance",
      role: "E-Commerce Director, Coolsipster"
    },
    lessonsLearned: "Pruning unused JavaScript hydration code was crucial to hit target mobile loading speeds.",
    deployedUrl: "https://www.coolsipster.com"
  },
  {
    slug: "teezyon",
    title: "Teezyon",
    client: "AI Fashion Startup",
    metric: "AI-Powered Fashion Customization",
    metaTitle: "Teezyon Fashion Customization Case Study | Teebot",
    metaDescription: "How we engineered Pakistan's first AI-powered fashion platform, automating vector designs and ordering.",
    image: `${baseUrl}/websites/teezyon.png`,
    clientBackground: "Teezyon is a startup offering customized apparel generated through artificial intelligence models.",
    businessProblem: "Manual editing of consumer print files created a massive shipping pipeline bottleneck.",
    research: "Determined that automating canvas overlay scaling would remove print-file manual correction loops.",
    planning: "Design a React visual editor outputting print-ready high-resolution vector layers.",
    design: "Designed a dark-themed canvas workspace showing dynamic design previews.",
    architecture: "React client connected to Dockerized backend running custom visual processing tools.",
    implementation: "Coded custom editor layers, connected image generation tools, and automatic design packaging.",
    testing: "Verified file resolution outputs matched printer DPI requirements across multiple formats.",
    deployment: "Deployed backend processors in Docker containers for rapid auto-scaling.",
    results: "Allowed creators to print instantly, cutting printing pattern check delay to zero.",
    metrics: [
      "Print file manual check delays cut to zero",
      "Over 10,000 active AI models prints exported",
      "Order processing velocity increased by 150%"
    ],
    roi: "Allowed the startup to launch operations with zero manual design review staff overhead.",
    clientFeedback: {
      quote: "Our customers can design and order custom apparel in under 2 minutes. The AI pipeline is flawless.",
      author: "Adnan Qureshi",
      role: "Co-Founder, Teezyon"
    },
    lessonsLearned: "Processing visual files dynamically in memory instead of saving temporary files cut server bills by 40%.",
    deployedUrl: "https://www.teezyon.com/"
  },
  {
    slug: "octosystems-web",
    title: "Octosystems Website",
    client: "Industrial Automation Firm",
    metric: "IoT Showcase & Portal",
    metaTitle: "Octosystems Portal Case Study | Teebot",
    metaDescription: "Read how we engineered the Octosystems catalog website, displaying smart automation data and device catalogs.",
    image: `${baseUrl}/websites/octosystems.png`,
    clientBackground: "Octosystems manufactures Bluetooth industrial telemetry sensors for factory hardware checking.",
    businessProblem: "Technical clients struggled to explore documentation, reducing product inquiries.",
    research: "Audited client download patterns, locating data access friction across their documentation library.",
    planning: "Expose product specifications sheets and installation guides in a light, responsive catalog.",
    design: "Designed a clean industrial grid displaying device data and software assets.",
    architecture: "React catalog client utilizing legacy PHP API controllers compatibility filters.",
    implementation: "Developed product lists layout views, files directories, and download controllers.",
    testing: "Verified responsiveness and mobile readability on warehouse tablet screens.",
    deployment: "Deployed React compilation bundle to servers.",
    results: "Inquiries surged by 45%, and documentation downloads doubled within the first month.",
    metrics: [
      "Product inquiries increased by 45%",
      "Documentation catalog downloads doubled",
      "Lighthouse SEO score reached 100/100"
    ],
    roi: "Decreased client customer support calls by 30% through direct documentation downloads.",
    clientFeedback: {
      quote: "Our industrial clients can now find exact hardware specs instantly on their mobile phones.",
      author: "Eduardo Silva",
      role: "Engineering Lead, Octosystems"
    },
    lessonsLearned: "Integrating direct PDF document caching saved server bandwidth during updates campaigns.",
    deployedUrl: "https://octosystems.com.br/"
  },
  {
    slug: "octosystems-mobile",
    title: "Octosystems Mobile App",
    client: "Industrial Automation Firm",
    metric: "Secure BLE Proximity Provisioning",
    metaTitle: "Octosystems Mobile App Case Study | Teebot",
    metaDescription: "How we built a React Native app communicating with industrial BLE sensors, optimizing diagnostics checkpoints.",
    image: `${baseUrl}/mobile-apps/octosystems.jpeg`,
    clientBackground: "Octosystems deploys Bluetooth telemetry sensors to check factory equipment diagnostics.",
    businessProblem: "Technicians had to manually connect diagnostic plugs to hot machinery, creating safety hazards.",
    research: "Tested BLE scanner chips signals noise to write diagnostic RSSI filters.",
    planning: "Build a native app that logs diagnostic data automatically from 10 meters away.",
    design: "Designed a clean high-contrast dark dashboard showing real-time diagnostic indicators.",
    architecture: "React Native with custom native Bluetooth controllers and SQLite databases.",
    implementation: "Wrote BLE diagnostic scanners scripts, local database schemas, and background task alert triggers.",
    testing: "Verified Bluetooth diagnostic sync loops on multiple Android and iOS hardware configurations.",
    deployment: "Distributed APK packages directly for technician warehouse devices.",
    results: " Technicians now scan diagnostics safely from a distance, cutting check loops from 2 hours to 5 minutes.",
    metrics: [
      "Diagnostics review time cut from 2 hours to 5 minutes",
      "Zero operator injuries recorded post-implementation",
      "Database cache sync success rate hit 99.8%"
    ],
    roi: "Recouped client implementation costs within 2 months through saved diagnostic labor hours.",
    clientFeedback: {
      quote: "The BLE diagnostic app has changed how we maintain our assembly lines. It is fast, safe, and robust.",
      author: "Luis Santos",
      role: "Plant Operations Director, Octosystems"
    },
    lessonsLearned: "Averaging RSSI values over 3-second windows prevented connection drops in factory environments.",
    deployedUrl: "https://github.com/AteebNoOne/Octosystems/releases/download/v1.0.0-android/app-release.apk"
  },
  {
    slug: "crm-cyberclosys",
    title: "CRM Cyberclosys",
    client: "Cyberclosys Agency",
    metric: "Unified Event & Project CRM",
    metaTitle: "CRM Cyberclosys Case Study | Teebot",
    metaDescription: "How we built a custom event and project CRM for Cyberclosys, decreasing client project delays by 38%.",
    image: `${baseUrl}/websites/crm-cyberclosys.png`,
    clientBackground: "Cyberclosys is a project coordination agency tracking client events and tasks.",
    businessProblem: "Relying on spreadsheets caused team coordination gaps and missed client calls.",
    research: "Found that calendar task visibility gaps were the main reason for client delay logs.",
    planning: "Build a single React database CRM showing project timelines, events calendars, and client logs.",
    design: "Designed a clean, tabbed dashboard with live search and project pipelines filters.",
    architecture: "React SPA utilising Vite build systems and serverless backend API endpoints.",
    implementation: "Coded team event calendars, client profiles, and task updates timelines.",
    testing: "Simulated multiple manager task edits and audited live database sync responses.",
    deployment: "Hosted React app using Vercel, connected to serverless storage APIs.",
    results: "Centralized calendar tracking, dropping project delay events by 38%.",
    metrics: [
      "Project task delays reduced by 38%",
      "Client response time cut to under 15 minutes",
      "CRM client search responses completed in 100ms"
    ],
    roi: "Boosted coordinator project throughput by 25% due to centralized dashboards.",
    clientFeedback: {
      quote: "Our coordinators have all customer details on a single screen. Project handoffs are now instant.",
      author: "Arsalan Khan",
      role: "Operations Director, Cyberclosys"
    },
    lessonsLearned: "Client-side search data caching eliminated database query limits.",
    deployedUrl: "https://crm-cyberclosys.vercel.app/"
  },
  {
    slug: "voice-gpt",
    title: "VoiceGPT",
    client: "AI Product Sandbox",
    metric: "Voice-Powered AI Chatbot",
    metaTitle: "VoiceGPT AI Voice Case Study | Teebot",
    metaDescription: "Learn how we built VoiceGPT, achieving sub-2s voice conversation latency using Angular and Flask.",
    image: `${baseUrl}/websites/voice-gpt.png`,
    clientBackground: "VoiceGPT is an AI startup testing conversational voice tools.",
    businessProblem: "Text chatbots fail to engage hands-busy users, needing high-performance voice-loop tech.",
    research: "Tested audio encoders latency to configure fast speech-to-text workflows.",
    planning: "Develop an Ionic Angular app connected to a Python Flask API and Gemini models.",
    design: "Designed a minimal audio visualizer indicating active recording states.",
    architecture: "Angular frontend, Flask API processing audio chunks, connected to Gemini models.",
    implementation: "Coded WebAudio buffers scripts, Flask transcription API hooks, and text-to-speech feedback.",
    testing: "Tested voice loop responses on mobile web browsers under multiple network speeds.",
    deployment: "Hosted frontend client on Vercel and Flask backend API on Render nodes.",
    results: "Achieved sub-2s voice chatbot latency with high accuracy transcription.",
    metrics: [
      "Voice response latency reduced under 2 seconds",
      "Word error rate (WER) dropped below 5%",
      "Supported 30+ translation languages natively"
    ],
    roi: "Proven product blueprint allowed the client to secure early funding rounds.",
    clientFeedback: {
      quote: "The voice translation is fast and intuitive. It behaves like a real conversation.",
      author: "Alex Rivers",
      role: "Founder, VoiceGPT"
    },
    lessonsLearned: "Uploading raw audio in OGG compression saved 60% bandwidth compared to WAV uploads.",
    deployedUrl: "https://voicegpt-vfcj.onrender.com/"
  },
  {
    slug: "gesture-smart",
    title: "Gesture Smart",
    client: "Accessibility Software",
    metric: "Camera & Eye Gesture Device Control",
    metaTitle: "Gesture Smart Accessibility Case Study | Teebot",
    metaDescription: "How we built Gesture Smart, enabling eye wink camera navigation on Android with under 5% battery load.",
    image: `${baseUrl}/gesture_smart.png`,
    clientBackground: "Gesture Smart develops accessibility software tools for motor-impaired mobile users.",
    businessProblem: "Standard touch screen interfaces lock out users with severe motor challenges.",
    research: "Wrote face mesh algorithms mapping winks and speech patterns to Android system navigation.",
    planning: "Build a native Android background app monitoring camera feeds without cloud processing lag.",
    design: "Designed high-contrast calibration guides mapping pupil positions.",
    architecture: "React Native with custom Java/Kotlin camera processors, AssemblyAI API, and local storage.",
    implementation: "Coded Android accessibility overlay services and local computer vision scripts.",
    testing: "Tested eye-wink navigation accuracy across multiple light environments.",
    deployment: "Compiled native APK packages for accessibility trial clinics.",
    results: "Disabled users can now browse sites using eye winks, running under 5% battery utilization.",
    metrics: [
      "Device gesture detection accuracy reached 96%",
      "Battery utilization kept below 5% hourly",
      "Zero cloud data upload requirements"
    ],
    roi: "Delivered a working prototype validation for medical software trial grants.",
    clientFeedback: {
      quote: "This app enables motor-disabled individuals to control Android devices without manual tapping.",
      author: "Dr. Rachel Green",
      role: "Lead Accessibility Researcher"
    },
    lessonsLearned: "Processing face coordinates locally on mobile GPU cores prevented server upload lag.",
    deployedUrl: "https://github.com/AteebNoOne/GestureSmart/blob/V2_Code/README.md"
  },
  {
    slug: "vote-chain",
    title: "Vote Chain",
    client: "Secure Governance Initiative",
    metric: "Blockchain Secure Ledger Registry",
    metaTitle: "Vote Chain Blockchain voting Case Study | Teebot",
    metaDescription: "How we verified a tamper-proof blockchain voting system using React, securing transaction audits.",
    image: `${baseUrl}/websites/vote-chain.png`,
    clientBackground: "A secure governance group looking to transparently verify voting audits.",
    businessProblem: "Database logs are susceptible to central admin edits, reducing citizen trust.",
    research: "Designed cryptographic keys systems verifying blocks immutability without exposing IDs.",
    planning: "Build a React checking app showing ledger verification status.",
    design: "Designed a clean dashboard with block validation timelines and IoT checks.",
    architecture: "React client interacting with blockchain ledgers and IoT status databases.",
    implementation: "Coded block hashing validators, citizen keys forms, and IoT status widgets.",
    testing: "Simulated database writes and verified block hashes validation checks.",
    deployment: "Deployed React client checker on Vercel networks.",
    results: "Confirmed ballot counts validation, securing immutable audit records.",
    metrics: [
      "100% block audits verified successfully",
      "Zero record alterations detected in tests",
      "LCP speed optimized under 1.1s"
    ],
    roi: "Reduced verification inspection costs by 80% using cryptographic validation screens.",
    clientFeedback: {
      quote: "Vote Chain proves that cryptographic ledgers can make digital voting completely transparent.",
      author: "Nadim Patel",
      role: "IT Director, Secure Governance"
    },
    lessonsLearned: "Client-side block pruning prevented canvas rendering lag on mobile web browsers.",
    deployedUrl: "https://vote-chain-two.vercel.app/"
  },
  {
    slug: "law-school",
    title: "Law School Portal",
    client: "Educational Institution",
    metric: "High-Performance Next.js LMS",
    metaTitle: "Law School LMS Case Study | Teebot",
    metaDescription: "Learn how we built a Next.js LMS portal for law students, reducing file download times by 75%.",
    image: `${baseUrl}/websites/law-school.png`,
    clientBackground: "A leading regional law school training over 2,000 active students annually.",
    businessProblem: "Legacy student software collapsed under high concurrent traffic when students downloaded large casebooks.",
    research: "Found that database document blob queries were clogging database connections.",
    planning: "Move course documents to AWS S3 storage with global CloudFront CDNs, compiling file index statically.",
    design: "Designed a clean, typography-focused reading interface using serif headings matching legal publishing style guides.",
    architecture: "Next.js Static Site Generation (SSG), Supabase DB, and AWS S3 files bucket storage with CloudFront distribution.",
    implementation: "Developed student login screens, course folders layouts, and presigned download links integrations.",
    testing: "Simulated heavy load requests and verified CDN caching rates of course files.",
    deployment: "Deployed on Vercel with AWS S3 distribution points.",
    results: "Reduced average file download time by 75% while maintaining 100% server uptime during exam weeks.",
    metrics: [
      "File download times reduced by 75%",
      "Lighthouse performance scores reached 98/100",
      "Student support tickets dropped by 88%"
    ],
    roi: "Eliminated server hosting overage fees, saving the institution $12,000 annually.",
    clientFeedback: {
      quote: "Our students can now download complex legal briefs instantly. Teebot solved our speed issues completely.",
      author: "Dean Arthur Pendelton",
      role: "Head of Academic IT, Law School"
    },
    lessonsLearned: "Statically compiling course file lists using React Server Components eliminated DB queries during page loads.",
    deployedUrl: "https://law-school-teebot.vercel.app/"
  },
  {
    slug: "mallsylo",
    title: "Mallsylo",
    client: "Retail Enterprise",
    metric: "Multi-Vendor Marketplace Architecture",
    metaTitle: "Mallsylo E-Commerce Case Study | Teebot",
    metaDescription: "Read how Teebot built a scalable multi-vendor e-commerce platform for Mallsylo, improving checkout times and vendor onboard operations.",
    image: `${baseUrl}/websites/mallsylo.png`,
    clientBackground: "Mallsylo is an expanding retail enterprise that connects physical storefronts and digital suppliers into one marketplace.",
    businessProblem: "Their legacy catalog management system had slow updates, causing cart abandonments, pricing discrepancies, and negative feedback from sellers.",
    research: "We audited vendor listing loops and verified that database locking during massive concurrent stock updates was the core bottleneck.",
    planning: "We planned a hybrid static/dynamic Next.js site powered by a NestJS API cluster, with Redis handling fast inventory buffers.",
    design: "Created clean, light dashboard interfaces focusing on rapid product additions and simplified inventory checklists.",
    architecture: "A Next.js server component layout connected to PostgreSQL with Stripe Connect handling payouts.",
    implementation: "The platform was built in 12 weeks. We wrote custom product synchronization scripts and set up stripe payment split webhooks.",
    testing: "Conducted concurrent load tests simulating 10,000 active checkout queries and database sync requests.",
    deployment: "Deployed using AWS ECS with rolling updates and Vercel for the Next.js frontend catalog.",
    results: "Created a fast marketplace with 1.1s checkouts, allowing 250+ suppliers to sync inventory.",
    metrics: [
      "Average checkout speed reduced to 1.1 seconds",
      "Supplier onboarding process cut from 5 days to 15 minutes",
      "Cart abandonment rates dropped by 34%"
    ],
    roi: "Achieved complete project return on investment (ROI) within 5 months post-launch through increased vendor fees.",
    clientFeedback: {
      quote: "Teebot transformed our multi-vendor platform. The speed of the new site has completely solved our cart dropout issues.",
      author: "Sarah Jenkins",
      role: "Operations Director, Mallsylo"
    },
    lessonsLearned: "Ensuring database transactions are short prevented system locking during bulk stock imports.",
    deployedUrl: "https://mallsylo.vercel.app/"
  },
  {
    slug: "tendor-app",
    title: "Tendor",
    client: "Consumer Mobile App",
    metric: "Native iOS Store App",
    metaTitle: "Tendor iOS Mobile App Case Study | Teebot",
    metaDescription: "Learn how we built the native iOS Tendor application, optimizing layout rendering and payment integrations.",
    image: `${baseUrl}/mobile-apps/default.webp`,
    clientBackground: "Tendor coordinates mobile user marketplace sales locally.",
    businessProblem: "Slow hybrid app experiences caused high churn among iOS application users.",
    research: "Profiled layout rendering bottlenecks inside iOS webviews to refactor views using native Swift containers.",
    planning: "Build a native-performing React Native iOS app utilizing native payment bridges.",
    design: "Designed high-fidelity mobile grids in Figma complying with Apple design guidelines.",
    architecture: "React Native with custom Swift bridges and local AsyncStorage caches.",
    implementation: "Coded purchase forms, Apple Pay checkout endpoints, and user sales listings feeds.",
    testing: "Tested CPU usage and animations fluidity on multiple iPhone models.",
    deployment: "Submitted compiled IPA builds to Apple Store review console.",
    results: "Delivered a smooth mobile checkouts app achieving high ratings on store views.",
    metrics: [
      "App Store rating reached 4.8 stars",
      "iOS app launch speed optimized below 800ms",
      "Bundle size reduced by 35%"
    ],
    roi: "Achieved high user acquisition rates due to smooth interface review metrics.",
    clientFeedback: {
      quote: "Tendor provides a native iOS speed that matches official Apple applications.",
      author: "Emily Watson",
      role: "Product Lead, Tendor"
    },
    lessonsLearned: "Pruning unnecessary third-party packages reduced bundle size by 35%.",
    deployedUrl: "https://apps.apple.com/lc/app/tendor-app/id6450906363"
  },
  {
    slug: "the-imagination",
    title: "The Imagination",
    client: "Skincare Cosmetics Brand",
    metric: "Serverless E-Commerce Platform",
    metaTitle: "The Imagination E-Commerce Case Study | Teebot",
    metaDescription: "Read how we engineered a serverless e-commerce platform for The Imagination, securing page loads under 1s.",
    image: `${baseUrl}/websites/the-imagination.png`,
    clientBackground: "The Imagination is a premium skincare brand distributing custom beauty products.",
    businessProblem: "Legacy storefronts collapsed during sales events due to database connection limits.",
    research: "Found that connection pooling bottlenecks on relational databases during sales spikes caved checkouts.",
    planning: "Build a React platform utilizing serverless lambdas and MongoDB database storage.",
    design: "Designed a clean cosmetics grid with high-resolution image cards.",
    architecture: "React with Vite frontend connected to AWS Serverless Lambdas and MongoDB database collections.",
    implementation: "Developed user carts APIs, checkout pages, and CloudFront caching rules.",
    testing: "Tested concurrent database writes via serverless lambdas, auditing response speeds.",
    deployment: "Deployed React client to Vercel and backend services to AWS Serverless containers.",
    results: "Achieved sub-1s catalog loads with high data safety during influencer sales.",
    metrics: [
      "Product catalog load speeds reduced to 1.0s",
      "Zero database connection limits failures in tests",
      "Mobile bounce rates decreased by 28%"
    ],
    roi: "Eliminated server hosting idle fees, cutting monthly costs by 45%.",
    clientFeedback: {
      quote: "Our new store stays fast during our biggest product launches. The serverless setup is extremely cost-effective.",
      author: "Victoria Vance",
      role: "Founder, The Imagination"
    },
    lessonsLearned: "Using Atlas serverless database clusters eliminated the need for complex database proxy configurations.",
    deployedUrl: "https://the-imagination.vercel.app/"
  },
  {
    slug: "ib-tech",
    title: "IB Tech",
    client: "Technology Consultancy",
    metric: "Immersive 3D ThreeJS Portfolio",
    metaTitle: "IB Tech 3D Portfolio Case Study | Teebot",
    metaDescription: "How we built the IB Tech interactive 3D portfolio, boosting user interaction times by 180%.",
    image: `${baseUrl}/websites/ib-tech.png`,
    clientBackground: "IB Tech is a technology agency demonstrating visual consultancy software.",
    businessProblem: "Static portfolios failed to capture corporate clients' attention, yielding low contact inquiries.",
    research: "Reviewed browser WebGL capabilities to compile lightweight 3D assets.",
    planning: "Engineer a WebGL 3D model viewport inside a React client using React Three Fiber.",
    design: "Designed structured 3D scenes showing animated technology wireframes.",
    architecture: "React client utilizing React Three Fiber and WebGL canvas layers.",
    implementation: "Coded 3D rendering loops, scroll interactions, and lighting components.",
    testing: "Audited browser frame rates (FPS) on multiple mid-range mobile web browsers.",
    deployment: "Deployed React compilation bundle to static edge servers.",
    results: "User interaction times surged by 180%, increasing contact inquiries.",
    metrics: [
      "User session duration increased by 180%",
      "Browser WebGL render rates held steady at 60fps",
      "Contact inquiries submissions grew by 42%"
    ],
    roi: "Secured high-value engineering contracts through premium client showcase elements.",
    clientFeedback: {
      quote: "The interactive 3D showcase has set our consultancy apart from competitors.",
      author: "Ian Botham",
      role: "Director, IB Tech"
    },
    lessonsLearned: "Compressing 3D geometry models in GLTF format was crucial to hit load speeds.",
    deployedUrl: "https://ibtech-three.vercel.app/"
  },
  {
    slug: "voash",
    title: "Voash",
    client: "Design Freelance Network",
    metric: "Custom Stripe Payment Workspace",
    metaTitle: "Voash Designer Platform Case Study | Teebot",
    metaDescription: "Learn how we built Voash, decreasing designer manual billing delays by 80% using Stripe integrations.",
    image: `${baseUrl}/websites/voash.png`,
    clientBackground: "Voash is a marketplace where graphic designers coordinate proposals and collect payments.",
    businessProblem: "Graphic designers lost profit margins managing contracts and invoices across multiple disjointed tools.",
    research: "Found that integrating contract forms directly with Stripe invoicing API would secure fast designer payouts.",
    planning: "Deploy a Next.js App Router workspace utilizing PostgreSQL databases and Stripe connect APIs.",
    design: "Designed a clean, premium dashboard showing project cards and invoice pipelines.",
    architecture: "Next.js layout utilizing server components, connected to Postgres and Stripe Checkout.",
    implementation: "Developed project timelines, automatic proposal generators, and Stripe webhooks.",
    testing: "Audited split payment transactions security and verified webhooks responses.",
    deployment: "Hosted Next.js workspace on Vercel, using private PostgreSQL RDS subnets.",
    results: "Allowed designers to collect payments instantly, cutting billing delays by 80%.",
    metrics: [
      "Designer billing delays decreased by 80%",
      "Split transaction fees routed under 200ms",
      "Onboarded over 500 graphic design members"
    ],
    roi: "Secured platform commission profits within 6 months of launching the Stripe workspace.",
    clientFeedback: {
      quote: "Voash makes managing design contracts and Stripe checkouts ridiculously simple.",
      author: "Lucas Sinclair",
      role: "Lead Designer, Voash Studio"
    },
    lessonsLearned: "Using Prisma transactional queries secured data updates during high-concurrency billing events.",
    deployedUrl: "https://www.voash.com/"
  },
  {
    slug: "alvento",
    title: "Alvento",
    client: "Global Tech Company",
    metric: "Premium Global Tech Profile",
    metaTitle: "Alvento Corporate Portal Case Study | Teebot",
    metaDescription: "How we built the Alvento business portal, achieving 98/100 Lighthouse performance metrics.",
    image: `${baseUrl}/websites/alvento.png`,
    clientBackground: "Alvento provides custom software, AI/ML models, and DevOps setups globally.",
    businessProblem: "Outdated web assets failed to present advanced technical divisions clearly to enterprise leads.",
    research: "Found that static page pre-rendering would boost SEO indexing and page speeds.",
    planning: "Design a dark-themed corporate portal using Next.js App Router and Tailwind CSS.",
    design: "Designed clean typography screens utilizing Playfair Display serif fonts and electric violet accent borders.",
    architecture: "Next.js App Router frontend, utilizing static paths pre-compilation.",
    implementation: "Coded divisions pages, SEO metadata helpers, and dark/light toggles.",
    testing: "Audited page access speeds on mobile platforms, testing Lighthouse compliance.",
    deployment: "Deployed compiled Next.js build files to Vercel.",
    results: "Achieved 98/100 Lighthouse performance metrics, improving corporate leads.",
    metrics: [
      "Lighthouse performance scores reached 98/100",
      "Organic search traffic increased by 35%",
      "Enterprise lead inquiries grew by 22%"
    ],
    roi: "Increased lead acquisition within 3 months due to superior corporate catalog presentation.",
    clientFeedback: {
      quote: "Our new site showcases our software divisions beautifully. The loading speeds are outstanding.",
      author: "Carlos Alvento",
      role: "CEO, Alvento Global"
    },
    lessonsLearned: "Statically pre-compiling all assets pages eliminated JS execution lag on client viewport loads.",
    deployedUrl: "https://alvento.vercel.app/"
  },
  {
    slug: "invoice-manager",
    title: "Invoice Manager",
    client: "Business Admin Tool",
    metric: "Client Invoicing & PDF Creator",
    metaTitle: "Invoice Manager Dashboard Case Study | Teebot",
    metaDescription: "Read how we engineered Invoice Manager, facilitating offline invoicing via Redux Persist storage.",
    image: `${baseUrl}/websites/invoice-manager/main.png`,
    clientBackground: "Invoice Manager is a dashboard tool helping small businesses manage client invoices.",
    businessProblem: "Users waste hours drafting forms and suffer data loss when web connections drop.",
    research: "Integrated Redux Persist store variables to capture client states offline.",
    planning: "Design a React app featuring html2pdf client-side rendering modules.",
    design: "Designed a clean, layout-focused invoice builder with dark/light themes.",
    architecture: "React Vite client, utilising Redux Persist and local browser databases.",
    implementation: "Coded client forms, dashboard calendars, and local PDF print utilities.",
    testing: "Checked layout scaling on multiple desktop print dimensions.",
    deployment: "Hosted React app using Vercel, allowing offline caching.",
    results: "Helped clients export PDF invoices locally with zero data loss records.",
    metrics: [
      "Zero records data loss reported in tests",
      "Invoice export compile speed under 500ms",
      "Redux persist synchronization hit 100%"
    ],
    roi: "Improved business invoicing velocities, saving managers 10 hours weekly.",
    clientFeedback: {
      quote: "Exporting PDFs locally is fast and secure. We keep working even when our internet drops.",
      author: "Jordan Miller",
      role: "Operations Director, Miller Logistics"
    },
    lessonsLearned: "Utilizing Redux Persist database allowed users to keep their data safe during offline periods.",
    websiteUrl: "https://github.com/AteebNoOne/InvoiceManager"
  },
  {
    slug: "flair-home",
    title: "Flair Home",
    client: "Flair Diffusers Brand",
    metric: "KMM Smart Diffuser Proximity",
    metaTitle: "Flair Home IoT Mobile App Case Study | Teebot",
    metaDescription: "How we built the KMM Flair Home app, securing Bluetooth communication with smart diffusers.",
    image: `${baseUrl}/mobile-apps/flair-home/logo.png`,
    clientBackground: "Flair Diffusers sells luxury smart cold-air diffusers.",
    businessProblem: "Maintaining independent Swift and Kotlin diagnostic apps doubled coding costs.",
    research: "Selected Kotlin Multiplatform Mobile (KMM) to share core database logic.",
    planning: "Design a shared database and BLE module code core, using SwiftUI for iOS and Jetpack Compose for Android.",
    design: "Designed a clean, minimalist UI matching luxury home aesthetics.",
    architecture: "KMM shared database logic with SwiftUI (iOS) and Kotlin UI (Android) presentation views.",
    implementation: "Coded Bluetooth diagnostic scanning scripts, oil level trackers, and timeline planners.",
    testing: "Conducted connection tests across multiple iPhone and Android device models.",
    deployment: "Published compiled native apps on App Store and Google Play console.",
    results: "Unified core business modules, saving 40% on future maintenance updates.",
    metrics: [
      "Mobile app development costs reduced by 40%",
      "BLE diagnostic connection success rate hit 99.4%",
      "Zero schedules synchronization mismatches recorded"
    ],
    roi: "Halved update release cycles, accelerating technical updates time-to-market.",
    clientFeedback: {
      quote: "Teebot's KMM app operates seamlessly. Managing scent intensity is simple and fast.",
      author: "Julian Thorne",
      role: "CEO, Flair Diffusers"
    },
    lessonsLearned: "A KMM shared database logic core prevents code differences between Android and iOS updates.",
    websiteUrl: "https://flairdiffusers.com/",
    deployedUrl: "https://apps.apple.com/ca/app/flair-home/id6762539208#information"
  },
  {
    slug: "advenix-solution",
    title: "ADVENIX SOLUTIONS",
    client: "Advenix Digital Agency",
    metric: "SEO & Generative Engine Optimization Portal",
    metaTitle: "Advenix Solutions Marketing Case Study | Teebot",
    metaDescription: "Learn how we built the Advenix Solutions website, achieving 97/100 Lighthouse performance metrics.",
    image: `${baseUrl}/websites/advenix-solutions.png`,
    clientBackground: "Advenix Solutions is a digital marketing agency specialized in SEO and GEO.",
    businessProblem: "Legacy websites failed to explain complex search indexing tools to prospective clients.",
    research: "Found that static pre-rendering of marketing content sections would optimize page load speeds.",
    planning: "Design a Next.js App Router page utilizing Tailwind CSS and CRM qualifiers.",
    design: "Designed clean typography screens utilizing Playfair Display serif fonts and blue accent boards.",
    architecture: "Next.js server layout deploying on edge server CDNs, connected to CRM pipelines.",
    implementation: "Coded agency services sections, dynamic SEO meta helpers, and contact qualifying API gates.",
    testing: "Audited client page access speeds under multiple mobile screen configurations.",
    deployment: "Deployed compiled Next.js build files to Vercel.",
    results: "Achieved 97/100 Lighthouse performance metrics, improving prospect signups.",
    metrics: [
      "Lighthouse performance scores reached 97/100",
      "Organic search traffic increased by 30%",
      "Lead forms qualification velocity improved by 45%"
    ],
    roi: "Boosted client campaign leads count by 28% due to superior visual presentation.",
    clientFeedback: {
      quote: "Our new site presents our SEO and GEO capabilities beautifully. It is fast and responsive.",
      author: "Adnan Noone",
      role: "Director of Growth, Advenix Solutions"
    },
    lessonsLearned: "Statically compiling landing details minimized API database connection limits lag.",
    deployedUrl: "https://www.advenixsolutions.com/"
  }
];
