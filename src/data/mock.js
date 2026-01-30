// Mock data for Pasovit website

export const companyInfo = {
  name: "PASOVIT",
  tagline: "YOUR DEDICATED DEV TEAM FOR A SUBSCRIPTION",
  description:
    "We become your behind-the-scenes tech team. Ship faster, scale smarter, and stop worrying about hiring, training, or losing developers.",
  email: "contact@pasovit.com",
  address:
    "715A, 7th Floor, Spencer Plaza Suite No, 718, Anna Salai, Chennai, Tamil Nadu 600002",
  location: "Chennai, India",
};

export const painPoints = [
  {
    title: "Developers Who Can’t Deliver",
    description:
      "Tired of sourcing, interviewing, and testing developers who can't ship production code",
  },
  {
    title: "Training Talent Just to Watch Them Leave",
    description:
      "Burning time and money training devs on your domain, only to have them quit or get poached",
  },
  {
    title: "Freelancers Who Ghost Mid-Project",
    description:
      "Working with freelancers that disappear mid-project or miss deadlines",
  },
  {
    title: "Your Team Is Buried in Bug Fixes",
    description:
      "Internal devs stuck fixing bugs instead of building new revenue-generating features",
  },
  {
    title: "Rebuilding From Scratch Every Time",
    description:
      "Every new project means starting from scratch: new vendor, new contracts, new mess",
  },
  {
    title: "No Product Owner. No Clear Direction.",
    description:
      "No clear product owner leading to changing priorities and unfinished work",
  },
];

export const targetAudience = [
  { name: "SMBs", description: "Small and medium businesses ready to scale" },
  { name: "Funded Startups", description: "Startups who need to ship fast" },
  {
    name: "Agencies",
    description: "White-label delivery partner for client work",
  },
  {
    name: "Service-Based Businesses",
    description: "Companies needing internal tools",
  },
  {
    name: "Enterprises",
    description: "Multi-branch companies with complex needs",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Collect Requirements",
    description:
      "Share your project needs. We provide a checklist to ensure nothing is missed.",
  },
  {
    step: 2,
    title: "Send Requests",
    description:
      "Use our portal or your existing system (ClickUp/Jira/Asana/Trello).",
  },
  {
    step: 3,
    title: "We Build",
    description:
      "We pull work into Active Build Slots and deliver progress weekly.",
  },
  {
    step: 4,
    title: "Review & Ship",
    description: "Review via staging link, then ship when accepted.",
  },
];

export const guarantees = [
  {
    name: "Clean Exit Guarantee",
    description:
      "No lock-in contracts. Leave anytime with all your code, documentation, and assets.",
  },
  {
    name: "On-Time Guarantee",
    description: "We hit our deadlines. If we miss, you get credits back.",
  },
  {
    name: "Milestone-Based Payment",
    description: "Pay only when milestones are delivered and approved.",
  },
];

export const services = [
  {
    id: "launch",
    tier: "TIER 1",
    name: "LAUNCH",
    price: "$2,500",
    period: "/mo",
    description:
      "Best for growing companies that already have systems in place and now need to ship.",
    buildSlots: 1,
    strategyCalls: "Weekly",
    features: [
      "1 Active Build Slot",
      "Weekly Strategy Calls",
      "Ongoing fixes and improvements",
      "Standard Component & Module Library",
      "Production-ready, clean code repository",
      "Clear documentation",
      "Bug fixes + small improvements included",
      "30-day post-launch warranty",
    ],
    bonuses: [
      "Training Materials - Documents and Loom Recordings",
      "Live Team training and Q&A Sessions",
    ],
  },
  {
    id: "scale",
    tier: "TIER 2",
    name: "SCALE",
    price: "$5,000",
    period: "/mo",
    description:
      "Best for growing companies that already have systems in place and now need to scale.",
    buildSlots: 2,
    strategyCalls: "Fortnightly",
    popular: true,
    features: [
      "2 Active Build Slots",
      "Fortnightly Strategy Calls",
      "Ongoing fixes and improvements",
      "Standard Component & Module Library",
      "Production-ready, clean code repository",
      "Clear documentation",
      "Bug fixes + small improvements included",
      "30-day post-launch warranty",
    ],
    bonuses: [
      "Quarterly Systems & Opportunity Audit",
      "Access to Command Centre (Track KPIs)",
      "Training Materials - Documents and Loom Recordings",
      "Live Team training and Q&A Sessions",
    ],
  },
  {
    id: "enterprise",
    tier: "TIER 3",
    name: "ENTERPRISE",
    price: "$7,500",
    period: "/mo",
    description:
      "For enterprises, groups, and multi-branch companies who need a dedicated team for complex needs.",
    buildSlots: 3,
    strategyCalls: "Monthly",
    features: [
      "3 Active Build Slots",
      "Monthly Strategy Calls",
      "Ongoing fixes and improvements",
      "Standard Component & Module Library",
      "Production-ready, clean code repository",
      "Clear documentation",
      "Bug fixes + small improvements included",
      "30-day post-launch warranty",
    ],
    bonuses: [
      "Executive Systems Audits",
      "Free AI Opportunities Audit (Worth $4,000)",
      "Access to Command Centre (Track KPIs)",
      "Training Materials - Documents and Loom Recordings",
      "Live Team training and Q&A Sessions",
    ],
  },
];

export const projectBased = {
  name: "PROJECT BASED",
  description:
    "Best for clearly defined builds with a start and finish. Websites, MVPs, one-off systems, integrations + automations.",
  features: [
    "Fixed scope & milestones",
    "UI Design included",
    "Integrations + automations",
    "Staging link for preview",
    "Production-ready code & handover",
    "Support Channel",
  ],
};

export const agencyPartner = {
  name: "AGENCY TECH PARTNER",
  description:
    "Perfect for agencies who need a reliable white-label development partner. We work behind the scenes under your brand, delivering client projects while you stay client-facing.",
  features: [
    "White-label delivery under your brand",
    "Work within your tools (Slack/ClickUp/Jira)",
    "Join client calls as your team member",
    "NDA + subcontractor agreement",
    "Predictable weekly progress reports",
    "Dedicated account manager",
  ],
};

export const whatWeBuild = [
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "Internal Tools",
  "Client Portals",
  "Dashboards",
  "CRMs",
  "HRMS",
  "LMS",
  "Booking Systems",
  "Admin Panels",
  "E-commerce Platforms",
  "SaaS Applications",
  "API Integrations",
  "Payment Systems",
  "Inventory Management",
  "Project Management Tools",
  "Analytics Platforms",
  "Workflow Automation",
  "Custom ERPs",
];

export const caseStudies = [
  {
    id: "fintech-dashboard",
    title: "FinVault Pro Dashboard",
    client: "Series A Fintech Startup",
    category: "Dashboard",
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    summary:
      "Built a real-time financial analytics dashboard handling 50K+ daily transactions with sub-second response times.",
    challenge:
      "The client needed a comprehensive dashboard to track financial metrics, user transactions, and compliance reports. Their existing system was slow, couldn't handle the growing data volume, and lacked real-time capabilities.",
    solution:
      "We architected a Next.js frontend with a Node.js/MongoDB backend, implementing WebSocket connections for real-time updates. Used Redis for caching frequently accessed data and built a custom charting library for financial visualizations.",
    results: [
      "99.9% uptime achieved",
      "Response time reduced from 4s to 200ms",
      "Handles 50,000+ daily transactions",
      "Compliance reporting automated",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "WebSocket",
      "AWS",
    ],
  },
  {
    id: "agency-crm",
    title: "AgencyFlow CRM",
    client: "Digital Marketing Agency",
    category: "CRM",
    duration: "12 weeks",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    summary:
      "Custom CRM system that unified client management, project tracking, and automated reporting for a 50-person agency.",
    challenge:
      "The agency was using 5 different tools to manage clients, projects, and reporting. Data was siloed, manual reporting took 20+ hours weekly, and client communication was fragmented.",
    solution:
      "Built an all-in-one CRM with client portals, project management, automated invoicing, and custom report generation. Integrated with their existing tools (Slack, Google Workspace) and built a white-label client portal.",
    results: [
      "Reporting time reduced by 85%",
      "Client satisfaction up 40%",
      "Consolidated 5 tools into 1",
      "$50K annual software savings",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Slack API",
      "Google APIs",
    ],
  },
  {
    id: "healthcare-portal",
    title: "MedConnect Patient Portal",
    client: "Healthcare Network",
    category: "Portal",
    duration: "16 weeks",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    summary:
      "HIPAA-compliant patient portal serving 100K+ patients with appointment booking, telemedicine, and health records access.",
    challenge:
      "A multi-location healthcare network needed a unified patient portal. Requirements included HIPAA compliance, integration with existing EMR systems, telemedicine capabilities, and support for 100K+ patients.",
    solution:
      "Developed a secure, HIPAA-compliant portal with end-to-end encryption, integrated video consultations, appointment scheduling across 15 locations, and seamless EMR sync. Built custom notification system for appointment reminders.",
    results: [
      "100K+ active patients onboarded",
      "No-show rate reduced by 60%",
      "Telemedicine visits up 300%",
      "Full HIPAA compliance achieved",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "WebRTC",
      "AWS HIPAA",
      "Twilio",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "LuxeCart Marketplace",
    client: "Luxury Retail Brand",
    category: "Web App",
    duration: "14 weeks",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    summary:
      "Multi-vendor luxury marketplace with advanced inventory management, real-time pricing, and white-glove logistics integration.",
    challenge:
      "A luxury retail brand wanted to launch a curated marketplace for premium vendors. They needed sophisticated inventory sync, real-time pricing based on market conditions, and integration with white-glove delivery services.",
    solution:
      "Built a Next.js marketplace with vendor dashboards, automated inventory sync via APIs, dynamic pricing engine, and custom logistics integration. Implemented advanced search with filters for luxury-specific attributes.",
    results: [
      "$2M GMV in first quarter",
      "50+ premium vendors onboarded",
      "Cart abandonment down 35%",
      "Average order value up 45%",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Algolia",
      "Shippo",
    ],
  },
  {
    id: "hr-management",
    title: "PeopleSync HRMS",
    client: "Enterprise Manufacturing Company",
    category: "HRMS",
    duration: "20 weeks",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    summary:
      "End-to-end HRMS for a 2000+ employee company with payroll, leave management, performance tracking, and compliance automation.",
    challenge:
      "A manufacturing company with 2000+ employees across 8 locations was using spreadsheets for HR operations. Payroll errors were common, compliance was a nightmare, and there was no visibility into workforce analytics.",
    solution:
      "Delivered a comprehensive HRMS with automated payroll processing, leave & attendance management, performance review cycles, compliance tracking, and executive dashboards. Built mobile app for employee self-service.",
    results: [
      "Payroll errors reduced to 0%",
      "HR admin time cut by 70%",
      "100% compliance achieved",
      "Employee satisfaction up 50%",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    id: "learning-platform",
    title: "SkillForge LMS",
    client: "Corporate Training Company",
    category: "LMS",
    duration: "10 weeks",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    summary:
      "Enterprise learning management system with course authoring, progress tracking, certifications, and gamification.",
    challenge:
      "A corporate training company needed to digitize their offerings. They required course authoring tools, video hosting, progress tracking, certification generation, and gamification to improve completion rates.",
    solution:
      "Created a feature-rich LMS with drag-and-drop course builder, video streaming with progress sync, automated certificate generation, leaderboards, badges, and detailed analytics for training managers.",
    results: [
      "Course completion up 80%",
      "10,000+ learners onboarded",
      "Content creation time halved",
      "NPS score of 72 achieved",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "FFmpeg",
      "Canvas API",
    ],
  },
];

export const navigation = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
];
