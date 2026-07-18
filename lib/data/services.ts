export interface ServiceData {
  slug: string;
  title: string;
  category: "automation" | "mobile" | "web" | "design" | "cloud";
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  businessBenefits: { title: string; desc: string }[];
  process: { step: number; title: string; desc: string }[];
  technologies: string[];
  features: string[];
  industriesServed: string[];
  faqs: { question: string; answer: string }[];
  pricingApproach: string;
  timeline: string;
  caseStudies: string[]; // Related case study titles or slugs
  relatedServices: string[]; // Slugs of related services
}

export const services: ServiceData[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    category: "automation",
    metaTitle: "AI Automation Services | Deep Learning & Agent Workflows | Teebot",
    metaDescription: "Supercharge your business with custom AI automation services. We integrate intelligent LLMs, design agentic workflows, and automate complex tasks with high precision.",
    introduction: "AI Automation is transforming modern businesses by integrating cognitive decision-making capabilities into software. At Teebot, we build bespoke artificial intelligence solutions, leveraging state-of-the-art Large Language Models (LLMs) to automate tasks that previously required human intervention. From text extraction to smart categorization and autonomous problem solving, our systems are built to scale safely, securely, and with unparalleled speed.",
    businessBenefits: [
      { title: "90% Reduction in Processing Time", desc: "Automate repetitive data operations and make complex decisions in milliseconds rather than hours." },
      { title: "24/7 Continuous Operations", desc: "Keep critical business pipelines running round-the-clock without delays, breaks, or human fatigue." },
      { title: "99.8% Accuracy Rates", desc: "Utilize fine-tuned prompts and vector validation loops to minimize errors in critical document extraction." }
    ],
    process: [
      { step: 1, title: "Discovery & Analysis", desc: "We study your manual workflows, cataloging decision points, inputs, and target outputs." },
      { step: 2, title: "Prototype Development", desc: "We build a rapid proof-of-concept testing prompt strategies, vector database retrieval, and model capabilities." },
      { step: 3, title: "Production Engineering", desc: "We integrate the AI agent into your production architecture with guardrails, monitoring, and validation." },
      { step: 4, title: "Continuous Optimization", desc: "Post-deployment, we analyze edge cases and refine prompt templates to adapt to changing workflows." }
    ],
    technologies: ["OpenAI API", "LangChain", "LlamaIndex", "Python", "Node.js", "Pinecone", "Claude 3.5 Sonnet"],
    features: [
      "Dynamic prompt engineering & management",
      "Vector search & Retrieval-Augmented Generation (RAG)",
      "Autonomous software agent orchestration",
      "Large-scale natural language processing pipelines",
      "Automated optical character recognition (OCR) and document understanding",
      "Comprehensive telemetry, monitoring, and cost-control systems"
    ],
    industriesServed: ["Healthcare", "Finance", "Real Estate", "Legal", "Ecommerce", "Logistics"],
    faqs: [
      { question: "How do you guarantee the accuracy of AI outputs?", answer: "We implement multi-step verification prompts, structured JSON output parser schemas, and strict context limitations (RAG) to ensure our AI systems only respond based on verified source data." },
      { question: "Are my company's data and secrets shared with public AI models?", answer: "No. We configure private VPC endpoints and utilize developer APIs that explicitly guarantee your enterprise data will never be used to train public LLM models." }
    ],
    pricingApproach: "Custom project estimation or monthly retainer based on complexity and ongoing tuning.",
    timeline: "Typically 6 to 12 weeks from scoping to complete rollout.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["business-automation", "llm-integration", "ai-agent-development"]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    category: "automation",
    metaTitle: "Enterprise Business Automation Services | Teebot",
    metaDescription: "Streamline workflows, reduce manual data entry, and improve organizational efficiency with enterprise-grade business automation systems.",
    introduction: "Business Automation eliminates operational bottlenecks by linking legacy software, APIs, and manual steps into automated flows. Teebot designs and deploys custom workflows that bridge databases, emails, file stores, and business tools to orchestrate operations flawlessly.",
    businessBenefits: [
      { title: "Zero Data Entry Errors", desc: "Transfer data across systems automatically without typing errors or copy-paste mistakes." },
      { title: "Higher Employee Morale", desc: "Free your team from tedious data chores so they can focus on high-value strategy and customer service." }
    ],
    process: [
      { step: 1, title: "Workflow Audit", desc: "Mapping your business processes step-by-step." },
      { step: 2, title: "API Mapping", desc: "Identifying integration points across all tools." },
      { step: 3, title: "Automation Build", desc: "Writing custom sync scripts and cron triggers." }
    ],
    technologies: ["Node.js", "Python", "n8n", "Make", "Zapier", "PostgreSQL", "Docker"],
    features: [
      "Custom ERP & CRM API integrations",
      "Automated report generation and email delivery",
      "Multi-system database synchronization",
      "Automatic invoice and quote generation"
    ],
    industriesServed: ["Construction", "Logistics", "Retail", "Manufacturing", "Finance"],
    faqs: [
      { question: "Can you automate legacy software that has no API?", answer: "Yes, we can design Robotic Process Automation (RPA) scripts or build custom scrapers and desktop macros to interact with legacy systems safely." }
    ],
    pricingApproach: "Fixed-price milestone contracts.",
    timeline: "Typically 4 to 8 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["workflow-automation", "crm-automation", "marketing-automation"]
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "automation",
    metaTitle: "Workflow Automation Consulting & Solutions | Teebot",
    metaDescription: "Connect tools and orchestrate seamless processes across departments using modern workflow automation strategies.",
    introduction: "Workflow Automation focuses on mapping, optimizing, and automating team actions and cross-platform operations. We design systems that trigger tasks, move documents, update statuses, and notify correct personnel.",
    businessBenefits: [
      { title: "Accelerated Projects", desc: "Tasks are handed off immediately to the next department, eliminating dead time." }
    ],
    process: [
      { step: 1, title: "Blueprint Stage", desc: "Drafting the operational blueprint." },
      { step: 2, title: "Integration Development", desc: "Writing middleware, webhooks, and handlers." }
    ],
    technologies: ["Next.js", "Express", "TypeScript", "BullMQ", "Redis", "AWS Lambda"],
    features: [
      "Conditional logic branching and validation",
      "Real-time notifications via Slack, WhatsApp, and SMS",
      "Audit logs for compliance"
    ],
    industriesServed: ["Real Estate", "Education", "Insurance", "Retail"],
    faqs: [
      { question: "What tools can you connect?", answer: "We can connect custom databases, Slack, Google Workspace, CRM tools, ERPs, payment gateways, and custom internal tools." }
    ],
    pricingApproach: "Based on complexity and volume of automation pathways.",
    timeline: "4 to 6 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["business-automation", "crm-automation"]
  },
  {
    slug: "crm-automation",
    title: "CRM Automation",
    category: "automation",
    metaTitle: "Custom CRM Integration & Automation Services | Teebot",
    metaDescription: "Optimize customer relations. Connect Salesforce, HubSpot, or custom CRMs to dynamic lead pipelines and internal tools.",
    introduction: "Automate your sales pipelines and lead qualification with CRM integrations that sync customer profiles, record contact histories, and schedule automated follow-ups.",
    businessBenefits: [
      { title: "Increased Sales Velocity", desc: "Respond to incoming leads within minutes instead of hours." }
    ],
    process: [
      { step: 1, title: "Consultation", desc: "Scoping lead routing rules." },
      { step: 2, title: "Integration", desc: "Linking web forms to your CRM." }
    ],
    technologies: ["Salesforce API", "HubSpot SDK", "Next.js", "Node.js"],
    features: [
      "Automatic lead scoring & routing",
      "Instant SMS/WhatsApp alerts for sales representatives",
      "Sales report generators"
    ],
    industriesServed: ["Real Estate", "Finance", "SaaS", "Hospitality"],
    faqs: [
      { question: "Do you support self-hosted CRMs?", answer: "Yes, we support and configure open-source and self-hosted CRM options like Odoo or SuiteCRM." }
    ],
    pricingApproach: "Fixed cost per CRM integration scope.",
    timeline: "3 to 6 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["marketing-automation", "business-automation"]
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    category: "automation",
    metaTitle: "Automated Marketing Campaigns & Pipelines | Teebot",
    metaDescription: "Deliver target-driven multi-channel marketing campaigns automated based on user behavior and product usage.",
    introduction: "Deploy personalized marketing funnels that automatically trigger email tracks, SMS updates, retargeting sequences, and analytics logging based on live customer interactions.",
    businessBenefits: [
      { title: "Highly Personalized Journeys", desc: "Send tailored recommendations that convert leads into buyers." }
    ],
    process: [
      { step: 1, title: "Funnel Planning", desc: "Designing user triggers and response blocks." },
      { step: 2, title: "Automation Implementation", desc: "Integrating tracking events and triggers." }
    ],
    technologies: ["Google Analytics", "Segment", "Klaviyo", "Resend", "Next.js"],
    features: [
      "Behavior-based customer tagging",
      "Automated abandoned-cart sequences",
      "Dynamic personalization blocks"
    ],
    industriesServed: ["Ecommerce", "Retail", "Travel", "SaaS"],
    faqs: [
      { question: "Is this compliant with privacy regulations like GDPR?", answer: "Yes, we implement clean opt-in/opt-out paths and cookie consents to guarantee compliance." }
    ],
    pricingApproach: "Monthly support packages or fixed campaign setup packages.",
    timeline: "3 to 5 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["email-automation", "crm-automation"]
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    category: "automation",
    metaTitle: "Scalable Email Delivery & Marketing Automation | Teebot",
    metaDescription: "Deliver fast, reliable transactional emails and custom promotional newsletters triggered dynamically.",
    introduction: "Integrate high-speed, dynamic email delivery mechanisms for password resets, order confirmations, receipts, and client newsletter sequences.",
    businessBenefits: [
      { title: "Deliverability and Speed", desc: "Ensure your emails land in the primary inbox, not the spam folder." }
    ],
    process: [
      { step: 1, title: "Domain Verification", desc: "Setting up DKIM, SPF, and DMARC keys." },
      { step: 2, title: "Template Building", desc: "Coding responsive, premium HTML layouts." }
    ],
    technologies: ["Resend", "Nodemailer", "AWS SES", "SendGrid", "React Email"],
    features: [
      "Custom responsive HTML email design",
      "Multi-recipient bulk mailings with queuing",
      "Real-time deliverability and bounce tracking"
    ],
    industriesServed: ["SaaS", "Ecommerce", "Legal", "Logistics"],
    faqs: [
      { question: "Do you configure SPF, DKIM, and DMARC?", answer: "Yes, we handle all DNS setup as part of our core email integration process." }
    ],
    pricingApproach: "Fixed cost based on email system complexity.",
    timeline: "1 to 3 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["marketing-automation", "whatsapp-automation"]
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    category: "automation",
    metaTitle: "Official WhatsApp Cloud API Automations | Teebot",
    metaDescription: "Interact with customers directly. Send automated alerts, order status updates, and support chats using WhatsApp APIs.",
    introduction: "Build verified customer service channels on WhatsApp. Send automated dispatch notifications, delivery schedules, payment links, and instant interactive chatbots.",
    businessBenefits: [
      { title: "98% Read Rates", desc: "Reach customers directly on their preferred messaging application with high click rates." }
    ],
    process: [
      { step: 1, title: "Meta Setup", desc: "Verifying your business account on Meta Developer Console." },
      { step: 2, title: "Flow Design", desc: "Mapping conversation templates and auto-replies." }
    ],
    technologies: ["WhatsApp Cloud API", "Node.js", "Express", "Webhooks", "Redis"],
    features: [
      "Meta-approved template creation",
      "Interactive button replies and list messages",
      "Seamless customer service agent handoff"
    ],
    industriesServed: ["Logistics", "Retail", "Ecommerce", "Healthcare"],
    faqs: [
      { question: "Is there a per-message cost?", answer: "Yes, Meta charges a conversation-based fee depending on the category (utility, marketing, authentication)." }
    ],
    pricingApproach: "Setup fee + monthly support retainer.",
    timeline: "2 to 4 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["email-automation", "ai-agent-development"]
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    category: "automation",
    metaTitle: "Custom AI Agent Development | Agentic AI Systems | Teebot",
    metaDescription: "Build self-correcting, autonomous AI agents capable of planning, executing complex operations, and running APIs.",
    introduction: "Deploy multi-agent systems that coordinate, reason, split problems into subtasks, execute actions via custom tools, and self-correct on failures.",
    businessBenefits: [
      { title: "Complex Operations Automated", desc: "Automate complete tasks like research reports or full software debugging pipelines." }
    ],
    process: [
      { step: 1, title: "Task Architecture", desc: "Designing the state machine and agent roles." },
      { step: 2, title: "Tool Engineering", desc: "Exposing APIs and DBs to the agent securely." }
    ],
    technologies: ["LangGraph", "AutoGen", "Python", "FastAPI", "OpenAI Swarm"],
    features: [
      "Multi-agent team coordination configurations",
      "Human-in-the-loop review screens",
      "Persistent state and memory management"
    ],
    industriesServed: ["SaaS", "Finance", "Legal", "Software Engineering"],
    faqs: [
      { question: "What is an AI Agent vs a standard Chatbot?", answer: "A chatbot only replies to queries. An agent planning workflows chooses which tools to execute and acts on its own decisions." }
    ],
    pricingApproach: "Milestone-based development contracts.",
    timeline: "8 to 16 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["ai-automation", "mcp-development"]
  },
  {
    slug: "llm-integration",
    title: "LLM Integration",
    category: "automation",
    metaTitle: "Large Language Model (LLM) Integrations | Teebot",
    metaDescription: "Embed natural language reasoning into your mobile apps, enterprise platforms, and web backends.",
    introduction: "Upgrade your platforms with text summarizing, translation, tone adjustment, automatic tagging, and semantic understanding via custom LLM connections.",
    businessBenefits: [
      { title: "Smart User Input Handling", desc: "Allow users to communicate with your app in plain English instead of rigid forms." }
    ],
    process: [
      { step: 1, title: "Model Selection", desc: "Picking between API-based models or self-hosted open source models." },
      { step: 2, title: "API Integration", desc: "Connecting backend to models with error fallbacks." }
    ],
    technologies: ["OpenAI API", "Anthropic Claude", "Ollama", "Hugging Face", "vLLM"],
    features: [
      "Context-aware content completion",
      "Dynamic translations across 40+ languages",
      "Text summarization and classification engines"
    ],
    industriesServed: ["Legal", "Education", "Healthcare", "SaaS"],
    faqs: [
      { question: "Can we use free open-source models?", answer: "Yes, we can deploy open-source models like Llama 3 or Mistral on your cloud infrastructure (AWS/GCP)." }
    ],
    pricingApproach: "Fixed deployment pricing.",
    timeline: "3 to 6 weeks.",
    caseStudies: ["law-school-educational-platform"],
    relatedServices: ["openai-integration", "claude-integration"]
  },
  {
    slug: "openai-integration",
    title: "OpenAI Integration",
    category: "automation",
    metaTitle: "Professional OpenAI API Integration Services | Teebot",
    metaDescription: "Connect GPT-4o, GPT-3.5, and DALL-E models to your software. Specialized fine-tuning and prompt engineering.",
    introduction: "Build high-performance applications leveraging OpenAI's state-of-the-art models for text completion, function calling, vision processing, and image generation.",
    businessBenefits: [
      { title: "Industry-Leading Quality", desc: "Utilize the most advanced public models with production-grade reliability." }
    ],
    process: [
      { step: 1, title: "Function Definition", desc: "Mapping functions the model can trigger in your app." },
      { step: 2, title: "Prompt Engineering", desc: "Structuring system instructions for expected output format." }
    ],
    technologies: ["OpenAI Node SDK", "OpenAI Python SDK", "GPT-4o", "DALL-E 3"],
    features: [
      "Structured outputs using Zod schema verification",
      "Function calling and tool usage integrations",
      "Whisper audio transcribing and voice control"
    ],
    industriesServed: ["Healthcare", "Finance", "Ecommerce", "Legal"],
    faqs: [
      { question: "How do function calls work?", answer: "OpenAI models can output a structured JSON command specifying an action, which our backend executes automatically." }
    ],
    pricingApproach: "Hourly setup rates or fixed-fee implementation packages.",
    timeline: "2 to 4 weeks.",
    caseStudies: ["law-school-educational-platform"],
    relatedServices: ["llm-integration", "claude-integration"]
  },
  {
    slug: "claude-integration",
    title: "Claude Integration",
    category: "automation",
    metaTitle: "Anthropic Claude API Integration Services | Teebot",
    metaDescription: "Deploy Anthropic's Claude 3.5 Sonnet and Claude 3 Opus models into your platforms for advanced research and code creation.",
    introduction: "Leverage Claude's massive context window and exceptional reasoning capabilities to analyze heavy legal files, review complex codebases, and write content.",
    businessBenefits: [
      { title: "Massive Context Capabilities", desc: "Analyze up to 200,000 tokens (an entire book or repository) in a single API request." }
    ],
    process: [
      { step: 1, title: "Prompt Orchestration", desc: "Configuring system prompts using Anthropic best practices." },
      { step: 2, title: "Context Optimization", desc: "Structuring databases to feed rich documents into the prompt." }
    ],
    technologies: ["Anthropic API SDK", "Claude 3.5 Sonnet", "Claude 3 Opus"],
    features: [
      "Deep document semantic analysis",
      "Highly structured XML output schemas",
      "Excellent multi-step mathematical and code reasoning capabilities"
    ],
    industriesServed: ["Legal", "Finance", "Academic Research", "Software Engineering"],
    faqs: [
      { question: "Is Claude better than GPT-4?", answer: "For programming assistance, XML parsing, and long document understanding, Claude often outperforms other models." }
    ],
    pricingApproach: "Scoping based on integration endpoints.",
    timeline: "2 to 5 weeks.",
    caseStudies: ["law-school-educational-platform"],
    relatedServices: ["llm-integration", "openai-integration"]
  },
  {
    slug: "mcp-development",
    title: "MCP Development",
    category: "automation",
    metaTitle: "Model Context Protocol (MCP) Server Development | Teebot",
    metaDescription: "Build custom MCP servers to expose internal databases, APIs, and file systems safely to LLM clients.",
    introduction: "Expose your corporate knowledge bases, database records, and operations to AI editors like Claude Desktop. We write standardized Model Context Protocol integrations.",
    businessBenefits: [
      { title: "Direct DB Access for AI", desc: "Ask queries directly to your systems inside your AI client without manual exporting." }
    ],
    process: [
      { step: 1, title: "Tool Mapping", desc: "Defining what functions and databases should be made available to the MCP server." },
      { step: 2, title: "Server Implementation", desc: "Writing the node-based or python-based MCP tool handler." }
    ],
    technologies: ["MCP SDK", "TypeScript", "Python", "Docker", "Express"],
    features: [
      "Secure API credentials storage",
      "Dynamic schema definition mapping",
      "PostgreSQL, MySQL, and DynamoDB connectors"
    ],
    industriesServed: ["SaaS", "Software Engineering", "Logistics", "Retail"],
    faqs: [
      { question: "Is my database exposed to the web?", answer: "No, MCP servers can run strictly on localhost or inside secure private subnets accessible only to your client." }
    ],
    pricingApproach: "Custom server development scopes.",
    timeline: "2 to 4 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["ai-agent-development", "api-development"]
  },
  {
    slug: "automation-consulting",
    title: "Automation Consulting",
    category: "automation",
    metaTitle: "Business & AI Automation Consulting | Teebot",
    metaDescription: "Identify automation opportunities. We review your workflows and outline an actionable roadmap to automate operations.",
    introduction: "Get professional advice on where automation yields the highest ROI. We inspect your business process, locate bottlenecks, and draft technical blueprints.",
    businessBenefits: [
      { title: "Actionable Technical Blueprint", desc: "Know exactly which tools to buy and which ones to build before spending a dollar." }
    ],
    process: [
      { step: 1, title: "Discovery Workshops", desc: "Interviewing department heads on manual tasks." },
      { step: 2, title: "ROI Calculation", desc: "Determining hours saved versus development cost." }
    ],
    technologies: ["n8n", "Python", "OpenAI", "Zapier", "Flowcharts"],
    features: [
      "Detailed process flow diagrams",
      "Recommended tech stack catalog",
      "Phase-by-phase implementation cost estimates"
    ],
    industriesServed: ["Manufacturing", "Healthcare", "Legal", "Logistics"],
    faqs: [
      { question: "What deliverables will we receive?", answer: "You will receive a Process Flow Diagram, an ROI Analysis Document, and a Technical Implementation Plan." }
    ],
    pricingApproach: "Consulting packages starting from flat project analysis rates.",
    timeline: "2 to 4 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["business-automation", "ai-automation"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "mobile",
    metaTitle: "Custom Mobile App Development Company | iOS & Android | Teebot",
    metaDescription: "Create premium native and cross-platform mobile apps for iOS and Android. High-performance design and scalable cloud backends.",
    introduction: "We design and engineer sleek, high-performing mobile applications. Whether you need a native iOS app built with Swift, an Android app using Kotlin, or a cross-platform solution via Flutter or React Native, we deliver exceptional user interfaces coupled with optimized data caching and real-time backend synchronization.",
    businessBenefits: [
      { title: "Direct Customer Engagement", desc: "Build a persistent connection with push notifications and dedicated app interfaces." },
      { title: "High Offline Capabilities", desc: "Utilize localized databases to keep the app functional even without network connections." }
    ],
    process: [
      { step: 1, title: "UI/UX Framing", desc: "Creating high-fidelity wireframes and user flow transitions in Figma." },
      { step: 2, title: "Core Coding", desc: "Writing clean, type-safe mobile applications and setting up local databases." },
      { step: 3, title: "API Wiring", desc: "Connecting the mobile application to cloud servers, payments, and push notifications." },
      { step: 4, title: "App Store Launch", desc: "Managing Apple Store and Google Play reviews, certificates, and launch." }
    ],
    technologies: ["Swift", "Kotlin", "Flutter", "React Native", "Firebase", "GraphQL", "SQLite"],
    features: [
      "Beautiful fluid user interface animations",
      "Secure offline caching databases",
      "Biometric login validation (FaceID, Fingerprint)",
      "Dynamic push notification campaign management",
      "Third-party secure gateway checkouts"
    ],
    industriesServed: ["Retail", "Healthcare", "Real Estate", "Finance", "Travel"],
    faqs: [
      { question: "Do you publish our apps on the stores?", answer: "Yes, we handle the entire application review setup and upload it directly under your developer accounts." }
    ],
    pricingApproach: "Milestone-based project development.",
    timeline: "8 to 18 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["flutter-development", "react-native-development", "ios-development"]
  },
  {
    slug: "android-development",
    title: "Android Development",
    category: "mobile",
    metaTitle: "Custom Android App Development Services | Kotlin | Teebot",
    metaDescription: "Develop native Android apps optimized for memory and battery life using Jetpack Compose and modern architecture patterns.",
    introduction: "We build native Android applications leveraging Jetpack Compose, Kotlin Coroutines, and clean architecture principles to deliver maximum speed across all Android devices.",
    businessBenefits: [
      { title: "Native performance & APIs", desc: "Access hardware features like NFC, Bluetooth, and device storage with zero friction." }
    ],
    process: [
      { step: 1, title: "Architecture Design", desc: "Setting up MVVM structure with clean interfaces." },
      { step: 2, title: "Jetpack UI Coding", desc: "Building responsive native interfaces." }
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room DB", "Android SDK"],
    features: [
      "Fluid, responsive native rendering",
      "Background worker tasks for offline syncing",
      "Full camera & hardware integrations"
    ],
    industriesServed: ["Logistics", "Retail", "Healthcare", "Education"],
    faqs: [
      { question: "Which versions of Android do you support?", answer: "We target Android 8.0 (API 26) and above, covering over 95% of active Android devices globally." }
    ],
    pricingApproach: "Hourly rates or fixed milestone structures.",
    timeline: "6 to 12 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["mobile-app-development", "flutter-development"]
  },
  {
    slug: "ios-development",
    title: "iOS Development",
    category: "mobile",
    metaTitle: "Native iOS App Development | Swift & SwiftUI | Teebot",
    metaDescription: "Craft high-end iOS apps with beautiful typography, native widgets, and Apple integrations. Built with SwiftUI.",
    introduction: "Deliver premium iOS applications built using SwiftUI and Swift, strictly adhering to Apple's Human Interface Guidelines for look, feel, and performance.",
    businessBenefits: [
      { title: "High-Value User Base", desc: "Reach affluent iOS users with a polished, fluid digital product." }
    ],
    process: [
      { step: 1, title: "Design Review", desc: "Validating alignment with Apple Design Standards." },
      { step: 2, title: "SwiftUI Coding", desc: "Writing performant native iOS interfaces." }
    ],
    technologies: ["Swift", "SwiftUI", "Combine", "CoreData", "iOS SDK"],
    features: [
      "Dynamic SwiftUI interface layouts",
      "Apple Pay checkout integration",
      "Native widgets and notifications support"
    ],
    industriesServed: ["Finance", "Real Estate", "Ecommerce", "Hospitality"],
    faqs: [
      { question: "Can the app run on iPad and Apple Watch?", answer: "Yes, our responsive SwiftUI layouts adapt beautifully to iPads, and we can build custom watchOS apps if requested." }
    ],
    pricingApproach: "Based on scope complexity and Apple system integrations.",
    timeline: "6 to 14 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["mobile-app-development", "flutter-development"]
  },
  {
    slug: "flutter-development",
    title: "Flutter Development",
    category: "mobile",
    metaTitle: "Flutter App Development Services | Dart | Teebot",
    metaDescription: "Build beautiful cross-platform apps for iOS, Android, and Web using a single codebase with Flutter.",
    introduction: "Reduce development costs and time-to-market. We build feature-rich, native-performing apps using Google's Flutter framework, yielding 100% code sharing across platforms.",
    businessBenefits: [
      { title: "Single Codebase for Both Platforms", desc: "Build once and deploy to both Apple Store and Google Play, reducing cost by 40%." }
    ],
    process: [
      { step: 1, title: "State Setup", desc: "Configuring robust state management (Bloc or Provider)." },
      { step: 2, title: "Cross-Platform Styling", desc: "Coding widgets that render flawlessly on iOS and Android." }
    ],
    technologies: ["Dart", "Flutter SDK", "Dio", "Hive DB", "Firebase"],
    features: [
      "Fast 60fps custom rendering pipelines",
      "Clean separation of logic and presentation layers",
      "Dynamic component sharing libraries"
    ],
    industriesServed: ["Retail", "Logistics", "Real Estate", "SaaS"],
    faqs: [
      { question: "Are Flutter apps as fast as native apps?", answer: "Yes, Flutter compiles directly to machine code, achieving excellent runtime speeds similar to native applications." }
    ],
    pricingApproach: "Fixed-price cross-platform contracts.",
    timeline: "6 to 12 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["mobile-app-development", "react-native-development"]
  },
  {
    slug: "react-native-development",
    title: "React Native Development",
    category: "mobile",
    metaTitle: "React Native App Development Company | Teebot",
    metaDescription: "Leverage Javascript and React to build high-performance mobile apps for iOS and Android.",
    introduction: "Deploy native-like apps using React Native. Perfect for companies that already utilize React on the web, allowing shared components and unified code standards.",
    businessBenefits: [
      { title: "Fast Over-The-Air Updates", desc: "Push small fixes directly to users without waiting for App Store review loops." }
    ],
    process: [
      { step: 1, title: "Setup & Bridges", desc: "Configuring native dependencies and bridges." },
      { step: 2, title: "React Component Coding", desc: "Writing optimized Javascript hooks and views." }
    ],
    technologies: ["Javascript", "TypeScript", "React Native", "Expo", "Redux Toolkit"],
    features: [
      "Fast Refresh workflow speed",
      "Reusable web React logic modules",
      "Wide support for community packages"
    ],
    industriesServed: ["Ecommerce", "SaaS", "Finance", "Social Media"],
    faqs: [
      { question: "Do you use Expo?", answer: "Yes, we utilize Expo for rapid development and testing, but we can eject to bare workflows if deep native code modifications are required." }
    ],
    pricingApproach: "Hourly development contracts or fixed project packages.",
    timeline: "6 to 14 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["mobile-app-development", "flutter-development"]
  },
  {
    slug: "cross-platform-development",
    title: "Cross Platform Development",
    category: "mobile",
    metaTitle: "Multiplatform Mobile Apps Development | Teebot",
    metaDescription: "Target multiple devices from day one. We build cross-platform mobile apps that save time and development cost.",
    introduction: "Reach your entire audience simultaneously. We analyze your requirements and select the ideal cross-platform engine to deploy your mobile product efficiently.",
    businessBenefits: [
      { title: "Unified Development Team", desc: "One team manages all platforms, eliminating coordination bottlenecks." }
    ],
    process: [
      { step: 1, title: "Engine Evaluation", desc: "Choosing between Flutter, React Native, or Progressive Web Apps." },
      { step: 2, title: "Asset Optimization", desc: "Optimizing graphic assets for varying pixel densities." }
    ],
    technologies: ["React Native", "Flutter", "Capacitor", "TypeScript", "Tailwind CSS"],
    features: [
      "Single-source database storage managers",
      "Unified testing scripts",
      "Responsive styling for mobile, tablet, and foldable screens"
    ],
    industriesServed: ["Education", "Retail", "Real Estate", "SaaS"],
    faqs: [
      { question: "Can we migrate our existing native app to Flutter?", answer: "Yes, we can incrementally migrate native apps or completely rewrite them to save on future maintenance costs." }
    ],
    pricingApproach: "Comprehensive cross-platform project bids.",
    timeline: "8 to 16 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["flutter-development", "react-native-development"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "web",
    metaTitle: "Custom Web Application Development | Modern Frontends | Teebot",
    metaDescription: "Build lightning-fast, SEO-optimized, and beautiful web applications. Using Next.js, React, and serverless technology.",
    introduction: "Your website is your digital flagship. We write clean, high-performance web applications using modern stacks. Our apps score 95+ on Google Lighthouse, load in under a second, feature responsive grids, and are fully search-engine optimized from the code level.",
    businessBenefits: [
      { title: "95+ Lighthouse Scores", desc: "Improve search visibility and conversion rates with highly optimized loading speeds." },
      { title: "Fully Responsive Layouts", desc: "Render perfectly on all screens from compact mobile phones to wide desktop displays." }
    ],
    process: [
      { step: 1, title: "Structure Architecture", desc: "Defining routes, data access models, and server infrastructure." },
      { step: 2, title: "Frontend Engineering", desc: "Coding rich, interactive components with optimized styling." },
      { step: 3, title: "Integration & API", desc: "Connecting backend endpoints, authorization, and databases." },
      { step: 4, title: "Hosting & CDN Setup", desc: "Deploying build files onto edge servers (Vercel, AWS) for global speeds." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "PostgreSQL"],
    features: [
      "Static Site Generation (SSG) and Server-Side Rendering (SSR)",
      "Edge-cached content distribution",
      "Secure login authorization protocols (OAuth, NextAuth)",
      "Custom analytics dashboard tracking integrations",
      "Responsive, clean fluid CSS animations"
    ],
    industriesServed: ["SaaS", "Real Estate", "Healthcare", "Finance", "Education"],
    faqs: [
      { question: "Do you build static or dynamic websites?", answer: "We build hybrid Next.js web applications that render static content instantly while fetching dynamic records on-the-fly." }
    ],
    pricingApproach: "Milestone-based project quotes.",
    timeline: "6 to 14 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform", "law-school-educational-platform"],
    relatedServices: ["nextjs-development", "react-development", "full-stack-development"]
  },
  {
    slug: "react-development",
    title: "React Development",
    category: "web",
    metaTitle: "React.js Frontend Development Services | Teebot",
    metaDescription: "Build responsive, dynamic, and highly interactive user interfaces using React.js and modern state managers.",
    introduction: "We construct state-of-the-art interactive frontends utilizing React 19, clean custom hooks, and reliable state management modules to build complex admin and client dashboards.",
    businessBenefits: [
      { title: "Modular Component Architecture", desc: "Speed up updates and future changes with self-contained, testable UI components." }
    ],
    process: [
      { step: 1, title: "State Planning", desc: "Designing client-side state models." },
      { step: 2, title: "Component coding", desc: "Developing UI pieces with TypeScript." }
    ],
    technologies: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
    features: [
      "Custom React hooks library development",
      "Virtual DOM optimized rendering",
      "Highly accessible semantic elements"
    ],
    industriesServed: ["SaaS", "Ecommerce", "Logistics", "Healthcare"],
    faqs: [
      { question: "What state management library do you prefer?", answer: "For simple apps we use React Context or Zustand; for massive applications we use Redux Toolkit." }
    ],
    pricingApproach: "Hourly developers or custom project quotes.",
    timeline: "4 to 10 weeks.",
    caseStudies: ["law-school-educational-platform"],
    relatedServices: ["web-development", "nextjs-development"]
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    category: "web",
    metaTitle: "Next.js Development Company | App Router Experts | Teebot",
    metaDescription: "Hire expert Next.js developers. We build production-ready platforms using Next.js App Router, SSR, SSG, and Server Actions.",
    introduction: "Unlock the maximum capabilities of modern web tech. We build SEO-first websites leveraging Next.js server components, dynamic page rendering, and API routes.",
    businessBenefits: [
      { title: "Native Technical SEO", desc: "Next.js automates headers, site maps, and layouts, improving google ranks natively." }
    ],
    process: [
      { step: 1, title: "Directory setup", desc: "Configuring App Router structure and middleware." },
      { step: 2, title: "RSC Integration", desc: "Coding React Server Components for instant rendering." }
    ],
    technologies: ["Next.js", "React Server Components", "Vercel", "Tailwind CSS", "TypeScript"],
    features: [
      "Server-side rendering (SSR) data loaders",
      "Dynamic generateStaticParams page compilation",
      "Optimized routing caching systems"
    ],
    industriesServed: ["Ecommerce", "SaaS", "Real Estate", "News & Media"],
    faqs: [
      { question: "Why is Next.js better than plain React?", answer: "Next.js renders HTML on the server, which means search engine crawlers can index your content instantly, boosting your SEO ranking." }
    ],
    pricingApproach: "Fixed-price custom implementations.",
    timeline: "4 to 12 weeks.",
    caseStudies: ["law-school-educational-platform"],
    relatedServices: ["web-development", "react-development"]
  },
  {
    slug: "nodejs-development",
    title: "Node.js Development",
    category: "web",
    metaTitle: "Scalable Node.js Backend Development Services | Teebot",
    metaDescription: "Build high-speed, event-driven API servers and microservices using Node.js, Express, and NestJS.",
    introduction: "Power your apps with asynchronous backend architectures. We write secure API backends, worker queues, and database managers using Node.js.",
    businessBenefits: [
      { title: "High Concurrent Users", desc: "Handle thousands of active API requests simultaneously with Node's non-blocking I/O loop." }
    ],
    process: [
      { step: 1, title: "Database Schema", desc: "Designing relational database layouts." },
      { step: 2, title: "Controller Scoping", desc: "Writing API routes and middleware layers." }
    ],
    technologies: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL", "Redis"],
    features: [
      "RESTful and GraphQL API servers",
      "JWT and session-based authorization controls",
      "Websocket support for real-time applications"
    ],
    industriesServed: ["SaaS", "Ecommerce", "Logistics", "Gaming"],
    faqs: [
      { question: "Do you use TypeScript on the backend?", answer: "Yes, we write all Node.js backends using TypeScript for compilation safety and maintenance security." }
    ],
    pricingApproach: "Dedicated developer rates or project pricing.",
    timeline: "6 to 14 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["api-development", "cloud-development"]
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    category: "web",
    metaTitle: "Full Stack Development Services | Next.js & Node | Teebot",
    metaDescription: "End-to-end product development. We construct both client frontends and server backends with unified databases.",
    introduction: "We take your idea from wireframe to deployment. Our full-stack engineering packages combine modern web frontends with secure backend APIs and cloud databases.",
    businessBenefits: [
      { title: "Unified Product Delivery", desc: "Get a completed product with both client screens and backend controls aligned perfectly." }
    ],
    process: [
      { step: 1, title: "UI/UX Framing", desc: "Designing screens in Figma." },
      { step: 2, title: "Database & Backend", desc: "Writing the API foundation." },
      { step: 3, title: "Frontend Hookup", desc: "Linking UI inputs to database actions." }
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
    features: [
      "Complete client and admin dashboard modules",
      "Secure Stripe checkout gateway systems",
      "Continuous build validation integration"
    ],
    industriesServed: ["SaaS", "Ecommerce", "Logistics", "Healthcare"],
    faqs: [
      { question: "What is your preferred database?", answer: "We prefer PostgreSQL for structured data and MongoDB or Redis for unstructured and caching datasets." }
    ],
    pricingApproach: "Comprehensive milestones structure.",
    timeline: "8 to 20 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform", "vote-chain-blockchain-system"],
    relatedServices: ["web-development", "saas-development"]
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    category: "web",
    metaTitle: "Custom SaaS Product Development Company | Teebot",
    metaDescription: "Build multi-tenant Software-as-a-Service (SaaS) products with recurring billing, team permissions, and dashboards.",
    introduction: "Build and launch your next SaaS subscription platform. We construct secure multi-tenant structures, stripe payment packages, user invites, and usage monitoring.",
    businessBenefits: [
      { title: "Rapid Product Launch", desc: "Go to market fast with our optimized SaaS boiler templates and custom extensions." }
    ],
    process: [
      { step: 1, title: "Data Architecture", desc: "Designing multi-tenant isolation layers." },
      { step: 2, title: "Subscription Setup", desc: "Setting up Stripe pricing hooks." }
    ],
    technologies: ["Next.js", "Stripe API", "Supabase", "Prisma", "PostgreSQL"],
    features: [
      "Stripe Customer Portal integrations",
      "Multi-member team invites and role authorizations",
      "System usage billing dashboards"
    ],
    industriesServed: ["SaaS", "Finance", "Logistics", "HR Tech"],
    faqs: [
      { question: "How do you secure tenant data?", answer: "We apply Row-Level Security (RLS) policies at the database layer to ensure data remains strictly isolated between accounts." }
    ],
    pricingApproach: "Custom project estimation based on feature lists.",
    timeline: "10 to 24 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform"],
    relatedServices: ["full-stack-development", "custom-software-development"]
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    category: "web",
    metaTitle: "Enterprise Software Development | Scalable Architectures | Teebot",
    metaDescription: "Develop secure, compliant, and highly scalable custom enterprise applications matching corporate requirements.",
    introduction: "We design software built to support heavy data loads, strictly adhere to security standards (SOC2, HIPAA), and integrate with legacy ERP systems.",
    businessBenefits: [
      { title: "High Security and Compliance", desc: "Ensure your software is built following enterprise security protocols." }
    ],
    process: [
      { step: 1, title: "Requirement Review", desc: "Detailing compliance and system integration checklists." },
      { step: 2, title: "Implementation Design", desc: "Mapping high-availability database setups." }
    ],
    technologies: ["TypeScript", "NestJS", "AWS ECS", "Terraform", "PostgreSQL"],
    features: [
      "Single Sign-On (SSO / SAML) authorization options",
      "Complete user activity log auditing systems",
      "Highly available database read replicas configurations"
    ],
    industriesServed: ["Healthcare", "Finance", "Legal", "Government"],
    faqs: [
      { question: "Do you support HIPAA compliance?", answer: "Yes, we write software matching strict data encryption and logging standards for healthcare software." }
    ],
    pricingApproach: "Enterprise contract bids.",
    timeline: "12 to 36 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["custom-software-development", "cloud-development"]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "web",
    metaTitle: "Custom Software Development Services | Teebot",
    metaDescription: "Tailored software systems built to solve your specific operational challenges and integrate legacy pipelines.",
    introduction: "When off-the-shelf software falls short, we construct tailored digital systems built exactly for your operations, databases, and employee habits.",
    businessBenefits: [
      { title: "Tailored to Your Operations", desc: "No unnecessary features, just the tools your team needs to work efficiently." }
    ],
    process: [
      { step: 1, title: "Scoping Workshops", desc: "Drafting operational challenges and mockups." },
      { step: 2, title: "Development phase", desc: "Iterative sprints to build features." }
    ],
    technologies: ["Node.js", "Next.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Modular components for future scaling",
      "Open API endpoints documentation",
      "Custom access permissions levels"
    ],
    industriesServed: ["Logistics", "Construction", "Manufacturing", "Retail"],
    faqs: [
      { question: "Do we own the software source code?", answer: "Yes, you own 100% of the intellectual property and source code once project invoices are settled." }
    ],
    pricingApproach: "Milestone contracts.",
    timeline: "8 to 20 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform", "vote-chain-blockchain-system"],
    relatedServices: ["full-stack-development", "enterprise-software"]
  },
  {
    slug: "api-development",
    title: "API Development",
    category: "web",
    metaTitle: "Custom API Development & Integration Services | Teebot",
    metaDescription: "Build secure, documented, and high-performance APIs (REST, GraphQL, gRPC) to connect platforms and clients.",
    introduction: "We write clean, high-performance API endpoints, document them using OpenAPI/Swagger schemas, and configure rate limiters and auth filters.",
    businessBenefits: [
      { title: "Safe Data Exchange", desc: "Connect frontend applications, mobile clients, and external systems securely." }
    ],
    process: [
      { step: 1, title: "Schema Design", desc: "Mapping API routes and JSON models." },
      { step: 2, title: "Security setup", desc: "Integrating JWT, CORS, and rate limiters." }
    ],
    technologies: ["FastAPI", "Express", "Apollo GraphQL", "Swagger", "PostgreSQL"],
    features: [
      "Comprehensive Swagger / OpenAPI schemas documentation",
      "Fast API response caching using Redis",
      "Secure key validation mechanics for external partners"
    ],
    industriesServed: ["SaaS", "Finance", "Ecommerce", "Logistics"],
    faqs: [
      { question: "Do you support GraphQL?", answer: "Yes, we build both RESTful and GraphQL API servers based on frontend requirements." }
    ],
    pricingApproach: "Hourly setup rates or fixed-fee module configurations.",
    timeline: "3 to 8 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["nodejs-development", "cloud-development"]
  },
  {
    slug: "cloud-development",
    title: "Cloud Development",
    category: "cloud",
    metaTitle: "Cloud Architecture & Serverless Development | Teebot",
    metaDescription: "Deploy scalable cloud systems on AWS, GCP, or Azure using serverless, container systems, and automated CDNs.",
    introduction: "We architect high-availability cloud setups leveraging AWS serverless technologies, container systems, and edge caching routes to support traffic spikes.",
    businessBenefits: [
      { title: "Reduced Hosting Costs", desc: "Optimize server resources and scale down dynamically to avoid paying for idle systems." }
    ],
    process: [
      { step: 1, title: "System Mapping", desc: "Drafting the cloud resource diagrams." },
      { step: 2, title: "Infrastructure-as-Code", desc: "Writing Terraform scripts to deploy resources." }
    ],
    technologies: ["AWS Lambda", "ECS", "Terraform", "Docker", "S3", "CloudFront"],
    features: [
      "Infrastructure-as-code scripting",
      "Global CDN caching for quick media assets delivery",
      "Automated serverless scaling profiles"
    ],
    industriesServed: ["SaaS", "Ecommerce", "Media", "Logistics"],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "AWS is our default for heavy enterprise apps, but we also utilize GCP or simpler systems like Vercel or Supabase for startups." }
    ],
    pricingApproach: "Hourly consultation or fixed architecture migration project scopes.",
    timeline: "4 to 12 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["devops", "api-development"]
  },
  {
    slug: "devops",
    title: "DevOps",
    category: "cloud",
    metaTitle: "DevOps Consulting & CI/CD Pipeline Automation | Teebot",
    metaDescription: "Automate code testing, builds, and cloud deployments with secure, modern CI/CD pipelines.",
    introduction: "Eliminate manual deployment mistakes. We write automated pipelines that validate, compile, test, and release your code seamlessly.",
    businessBenefits: [
      { title: "Faster Delivery Speeds", desc: "Push updates to production instantly when test pipelines pass." }
    ],
    process: [
      { step: 1, title: "Pipeline Review", desc: "Auditing manual deployment workflows." },
      { step: 2, title: "Automation Write", desc: "Drafting GitHub Actions files and deployment hooks." }
    ],
    technologies: ["GitHub Actions", "Docker", "AWS CodePipeline", "Kubernetes", "Sentry"],
    features: [
      "Automated unit testing executions",
      "Zero-downtime rolling update setups",
      "Real-time crash tracking notifications"
    ],
    industriesServed: ["SaaS", "Finance", "Healthcare", "E-commerce"],
    faqs: [
      { question: "Can you configure Slack warnings on crash?", answer: "Yes, we connect alert tools like Sentry directly to Slack or Microsoft Teams channels." }
    ],
    pricingApproach: "Retainer-based ongoing support or fixed setup projects.",
    timeline: "3 to 6 weeks.",
    caseStudies: ["vote-chain-blockchain-system"],
    relatedServices: ["cloud-development", "api-development"]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    metaTitle: "UI/UX Design Services | Custom Wireframing & Prototyping | Teebot",
    metaDescription: "Design premium interfaces. We build dynamic wireframes, user personas, and visual style guides in Figma.",
    introduction: "We design premium interfaces. Our design system process structures consistent typographies, component libraries, and interactive flows before development starts.",
    businessBenefits: [
      { title: "Higher Conversions", desc: "An intuitive layout makes purchasing or signing up effortless for visitors." }
    ],
    process: [
      { step: 1, title: "User Research", desc: "Studying user goals and competitor styles." },
      { step: 2, title: "Wireframes", desc: "Creating structural layout guides." },
      { step: 3, title: "High-Fidelity UI", desc: "Designing pixel-perfect screens in Figma with interactive transitions." }
    ],
    technologies: ["Figma", "Adobe Illustrator", "Prototyping", "Design Systems"],
    features: [
      "Complete reusable component design kits",
      "Sleek light & dark theme layout screens",
      "Smooth micro-interaction guidelines"
    ],
    industriesServed: ["Retail", "Real Estate", "SaaS", "Healthcare"],
    faqs: [
      { question: "Do we receive the raw design assets?", answer: "Yes, you get full access to the Figma files, design systems, and vector assets." }
    ],
    pricingApproach: "Fixed-price project scopes or dedicated designer retainers.",
    timeline: "4 to 8 weeks.",
    caseStudies: ["mallsylo-ecommerce-platform", "law-school-educational-platform"],
    relatedServices: ["web-development", "mobile-app-development"]
  }
];
