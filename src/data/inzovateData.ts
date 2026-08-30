import {
  Palette,
  Cloud,
  Shield,
  Cpu,
  Code,
  Smartphone,
  ShoppingCart,
  Search,
  Headphones,
  TrendingUp,
  Database,
  BarChart,
  Eye,
  Target,
  Sparkles,
  Zap,
  Award,
  Handshake,
  Package,
  Layers,
  Server,
  Globe,
  Settings,
  FileText,
  Activity,
  LucideIcon
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  gradient: string;
}

export const INZOVATE_SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design & Prototyping',
    shortDesc: 'Create engaging, human-centered user experiences that captivate and convert.',
    fullDesc: 'Our design studio crafts high-converting, accessible, and visually stunning digital products. From wireframes to micro-interactions, we ensure every touchpoint resonates with your target audience.',
    features: ['User Research & Persona Mapping', 'Wireframing & High-Fidelity Mockups', 'Interactive Prototyping & Motion', 'Design System & Style Guides'],
    gradient: 'from-pink-500 via-rose-500 to-red-500'
  },
  {
    id: 'ai-automation',
    icon: Cpu,
    title: 'AI & Enterprise Automation',
    shortDesc: 'Leverage artificial intelligence and machine learning to supercharge business operations.',
    fullDesc: 'Transform legacy processes with cutting-edge AI models, custom LLM integrations, automated workflows, and predictive analytics designed for enterprise scalability.',
    features: ['Custom Machine Learning Models', 'LLM & Generative AI Integration', 'Robotic Process Automation (RPA)', 'Predictive Data Analytics'],
    gradient: 'from-purple-500 via-indigo-500 to-blue-500'
  },
  {
    id: 'web-dev',
    icon: Code,
    title: 'Custom Website & Web App Dev',
    shortDesc: 'Build ultra-fast, responsive web platforms engineered for maximum performance.',
    fullDesc: 'We develop scalable web solutions using modern tech stacks like Next.js, React, and Node.js, ensuring peak speed, SEO superiority, and robust security.',
    features: ['Single Page & Progressive Web Apps', 'Headless CMS Integration', 'SEO & Performance Optimization', 'Full Stack API Architectures'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Deliver seamless iOS and Android mobile experiences for modern users.',
    fullDesc: 'Native and cross-platform mobile apps built with React Native and Flutter, combining sleek animations with backend sync and offline support.',
    features: ['Cross-Platform Development', 'Native iOS & Android Apps', 'Offline Data Synchronization', 'App Store & Play Store Publishing'],
    gradient: 'from-amber-500 via-orange-500 to-red-500'
  },
  {
    id: 'cloud-integration',
    icon: Cloud,
    title: 'Cloud Architecture & DevOps',
    shortDesc: 'Migrate, optimize, and manage cloud infrastructure with zero downtime.',
    fullDesc: 'End-to-end AWS, Azure, and Google Cloud services including CI/CD pipelines, Docker containerization, Kubernetes orchestration, and serverless architectures.',
    features: ['AWS / Cloud Migration', 'CI/CD Pipeline Automation', 'Docker & Kubernetes Setup', 'Infrastructure as Code (IaC)'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity & Auditing',
    shortDesc: 'Fortify digital assets with enterprise-grade threat protection and compliance.',
    fullDesc: 'Protect business data from vulnerabilities with comprehensive security audits, penetration testing, real-time threat monitoring, and regulatory compliance checks.',
    features: ['Vulnerability & Risk Assessment', 'Penetration Testing & Audits', 'Zero-Trust Architecture', 'Incident Response & Recovery'],
    gradient: 'from-red-500 via-rose-600 to-pink-600'
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    shortDesc: 'Launch and scale high-converting online stores with custom workflows.',
    fullDesc: 'Custom e-commerce platforms with multi-currency support, payment gateway integrations, real-time inventory management, and personalized checkout experiences.',
    features: ['Custom Checkout & Payment Gateways', 'Inventory & ERP Integration', 'Omnichannel Shopping Support', 'Conversion Rate Optimization'],
    gradient: 'from-teal-500 via-emerald-500 to-green-500'
  },
  {
    id: 'data-analytics',
    icon: Database,
    title: 'Data Engineering & Analytics',
    shortDesc: 'Turn complex raw data into strategic business intelligence.',
    fullDesc: 'Build data pipelines, real-time analytics dashboards, and business intelligence models to empower leadership with actionable, data-driven decisions.',
    features: ['ETL & Data Pipeline Building', 'Interactive BI Dashboards', 'Statistical Modeling & Insights', 'Big Data Warehouse Management'],
    gradient: 'from-blue-600 via-indigo-600 to-purple-600'
  },
  {
    id: 'seo-content',
    icon: Search,
    title: 'SEO & Content Engineering',
    shortDesc: 'Rank higher on search engines and dominate organic traffic.',
    fullDesc: 'Complete technical SEO audit, high-value content strategy, keyword targeting, and schema markup that drive consistent inbound leads.',
    features: ['Technical & Structural SEO Audit', 'Keyword Strategy & Copywriting', 'Structured Data & Schema Setup', 'Rank Tracking & Competitor Analysis'],
    gradient: 'from-violet-500 via-purple-500 to-pink-500'
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Performance Digital Marketing',
    shortDesc: 'Accelerate brand visibility with targeted multi-channel growth campaigns.',
    fullDesc: 'Data-driven paid ads, social media strategies, email automation, and conversion funnels engineered to maximize return on ad spend (ROAS).',
    features: ['Google & Meta Paid Campaigns', 'Social Media Branding', 'Automated Email Funnels', 'ROAS & Analytics Tracking'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    id: 'business-analytics',
    icon: BarChart,
    title: 'Business Strategy Consulting',
    shortDesc: 'Align technology roadmaps with long-term commercial growth objectives.',
    fullDesc: 'Strategic guidance for digital transformation, technology stack auditing, software vendor selection, and operational efficiency scaling.',
    features: ['Digital Transformation Strategy', 'Tech Stack Optimization', 'Process Mapping & Optimization', 'Growth ROI Analysis'],
    gradient: 'from-indigo-500 via-sky-500 to-cyan-500'
  },
  {
    id: 'tech-support',
    icon: Headphones,
    title: '24/7 Managed Tech Support',
    shortDesc: 'Continuous monitoring, routine maintenance, and immediate troubleshooting.',
    fullDesc: 'Dedicated engineering support for zero operational downtime, server health monitoring, security patch updates, and virtual admin services.',
    features: ['24/7 Server & App Health Monitoring', 'Security Patches & Backups', 'SLA-Guaranteed Issue Resolution', 'Dedicated Technical Assistance'],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500'
  }
];

export const INZOVATE_PRODUCTS = [
  {
    title: 'SmartOps AI',
    subtitle: 'Flagship — Intelligent Business Operations Platform',
    description: 'LEVROUN\'s flagship AI platform designed to automate, optimize, and scale business operations. 94% automation target with 12h/week time saved across 50+ integrations.',
    points: ['94% Automation Coverage', '12h/Week Time Saved', '50+ App Integrations', 'AI-Powered Decision Engine'],
    gradient: 'from-blue-600 to-cyan-500',
    icon: Cpu
  },
  {
    title: 'LevERP',
    subtitle: 'Next-Gen Enterprise Resource Planning',
    description: 'All-in-one ERP system integrating finance, supply chain, inventory, and human resources with real-time analytics for growing enterprises.',
    points: ['Automated Ledger & Invoicing', 'Supply Chain Tracking', 'Multi-Branch Analytics', 'Role-Based Access Control'],
    gradient: 'from-purple-600 to-indigo-500',
    icon: Package
  },
  {
    title: 'LevCRM',
    subtitle: 'Intelligent Customer Relationship Management',
    description: 'Empower sales teams with lead tracking, automated follow-ups, pipeline visualization, and AI deal scoring built for scale.',
    points: ['Visual Sales Pipelines', 'Automated Email & SMS Followups', 'AI Lead Qualification', 'Omnichannel Customer Support'],
    gradient: 'from-emerald-600 to-teal-500',
    icon: Handshake
  },
  {
    title: 'LevPay',
    subtitle: 'Smart Billing & Invoicing Suite',
    description: 'Fast, secure billing software tailored for retail, manufacturing, and service businesses with full GST compliance.',
    points: ['GST & Tax Compliance', 'POS Machine Integration', 'Instant WhatsApp Invoicing', 'Inventory Auto-Sync'],
    gradient: 'from-amber-600 to-orange-500',
    icon: Zap
  }
];

export const VISION_CARDS = [
  {
    title: 'Our Vision',
    description: 'To be a global technology powerhouse delivering intelligent, scalable, and human-first IT solutions that redefine industry standards.',
    icon: Eye,
    gradient: 'from-sky-500 via-blue-600 to-indigo-600'
  },
  {
    title: 'Our Mission',
    description: 'To empower ambitious businesses with world-class engineering, cutting-edge AI, and reliable software that drives sustainable commercial growth.',
    icon: Target,
    gradient: 'from-amber-500 via-orange-500 to-red-600'
  },
  {
    title: 'Our Approach',
    description: 'Combining agile development, transparent communication, and meticulous quality control to deliver measurable business impact on time.',
    icon: TrendingUp,
    gradient: 'from-fuchsia-500 via-purple-600 to-indigo-600'
  }
];

export const WHY_CHOOSE_INZOVATE = [
  {
    icon: Zap,
    title: 'AI-First Engineering',
    description: 'We build AI-native software and automation workflows from day one — not as an afterthought — ensuring future-ready solutions that scale.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Handshake,
    title: 'Startup & Enterprise DNA',
    description: 'We understand both startup speed and enterprise reliability, delivering solutions that work at any scale with transparent communication.',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'In-House Product Builders',
    description: 'Beyond client work, we build our own digital products — giving us a builder\'s mindset and deeper empathy for product challenges.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'End-to-End Ownership',
    description: 'From strategy and design to deployment and 24/7 support — LEVROUN INDIA takes full ownership of your digital journey.',
    gradient: 'from-rose-500 to-pink-500'
  }
];

export const INZOVATE_TESTIMONIALS = [
  {
    quote: "LEVROUN INDIA's team transformed our vision into a high-performing digital platform. Their technical expertise, responsiveness, and dedication were exceptional throughout the launch.",
    name: 'Dr. M. Vairavel',
    role: 'Founder',
    company: 'Kalaivani Publications',
    website: 'https://kalaivanipublications.com/'
  },
  {
    quote: "LEVROUN INDIA developed a professional, fast, and easy-to-navigate web portal for our academy. Their team was responsive and delivered beyond our expectations.",
    name: 'N Hariharen',
    role: 'Founder',
    company: 'Shine IAS Academy',
    website: 'http://www.shineiasacademy.in/'
  },
  {
    quote: "LEVROUN INDIA delivered an outstanding software solution for our internal engineering operations. The team's agility ensured we met critical launch deadlines smoothly.",
    name: 'R Suresh',
    role: 'Managing Director',
    company: 'Bhavani Engineering',
    website: 'https://www.bhavaniengineering.com'
  },
  {
    quote: "LEVROUN INDIA designed a clean, functional e-commerce platform for our electronics store. Their ongoing tech support and attention to detail have been commendable.",
    name: 'S Murugan',
    role: 'Owner',
    company: 'Sree Murugan Electronics & Home Appliances',
    website: 'https://www.sreemuruganelectronics.in/'
  },
  {
    quote: "The engineering team at LEVROUN INDIA understood our exact requirements for our fabric manufacturing business. Highly recommended for custom software development!",
    name: 'Dinesh',
    role: 'Managing Director',
    company: 'Dinesh Exports – Woven Fabric Manufacturer',
    website: 'https://dineshexports.com/'
  },
  {
    quote: "LEVROUN INDIA helped us revamp our online brand presence with a modern, high-speed website. Their professionalism and timely delivery exceeded expectations.",
    name: 'Annapoorani Group',
    role: 'Executive Director',
    company: 'Annapoorani Textiles',
    website: 'https://annapooranigroup.in/'
  }
];

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI & Data' | 'Cloud & Mobile';
  icon: LucideIcon;
  gradient: string;
}

export const TECH_STACK: TechStackItem[] = [
  { name: 'React.js', category: 'Frontend', icon: Code, gradient: 'from-blue-400 to-cyan-300' },
  { name: 'Next.js 14', category: 'Frontend', icon: Globe, gradient: 'from-slate-200 to-slate-400' },
  { name: 'TypeScript', category: 'Frontend', icon: FileText, gradient: 'from-blue-600 to-blue-400' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Layers, gradient: 'from-cyan-400 to-blue-400' },
  
  { name: 'Node.js', category: 'Backend', icon: Server, gradient: 'from-green-600 to-emerald-400' },
  { name: 'Express API', category: 'Backend', icon: Activity, gradient: 'from-purple-600 to-indigo-400' },
  { name: 'PostgreSQL', category: 'Backend', icon: Database, gradient: 'from-blue-700 to-blue-500' },
  { name: 'MongoDB', category: 'Backend', icon: Database, gradient: 'from-emerald-600 to-teal-400' },
  
  { name: 'Python AI', category: 'AI & Data', icon: Cpu, gradient: 'from-amber-500 to-yellow-400' },
  { name: 'TensorFlow / PyTorch', category: 'AI & Data', icon: Sparkles, gradient: 'from-orange-600 to-red-500' },
  { name: 'Data Pipelines', category: 'AI & Data', icon: BarChart, gradient: 'from-indigo-500 to-purple-500' },
  
  { name: 'AWS Cloud', category: 'Cloud & Mobile', icon: Cloud, gradient: 'from-orange-500 to-amber-400' },
  { name: 'Docker Containers', category: 'Cloud & Mobile', icon: Settings, gradient: 'from-blue-500 to-cyan-400' },
  { name: 'React Native', category: 'Cloud & Mobile', icon: Smartphone, gradient: 'from-sky-400 to-blue-500' }
];

export const COMPANY_METRICS = [
  { value: '94', label: 'Automation Coverage', suffix: '%' },
  { value: '12', label: 'Hours Saved / Week', suffix: 'h+' },
  { value: '50', label: 'Integrations & APIs', suffix: '+' },
  { value: '24', label: 'Dedicated Tech Support', suffix: '/7' }
];
