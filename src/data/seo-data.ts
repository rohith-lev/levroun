// Inzovate Technologies — SEO Data
// CIN: U62011TZ2025PTC036329

export const DISTRICTS = [
  'Erode', 'Tiruppur', 'Coimbatore', 'Salem', 'Namakkal',
  'Karur', 'Dindigul', 'Nilgiris', 'Chennai', 'Madurai', 'Trichy',
  'Vellore', 'Hosur', 'Dharmapuri'
];

export const CITIES = [
  'Bhavani', 'Erode', 'Perundurai', 'Chithode', 'Gobichettipalayam',
  'Tiruppur', 'Coimbatore', 'Kangeyam', 'Dharapuram', 'Salem', 'Namakkal',
  'Tiruchengode'
];

export const SERVICES = [
  { id: 'web-development', name: 'Website Development', slug: 'web-development' },
  { id: 'app-development', name: 'Mobile App Development', slug: 'app-development' },
  { id: 'uiux-design', name: 'UI UX Design', slug: 'uiux-design' },
  { id: 'seo-services', name: 'SEO Services', slug: 'seo-services' },
  { id: 'startup-solutions', name: 'Startup IT Solutions', slug: 'startup-solutions' },
  { id: 'saas-development', name: 'SaaS Development', slug: 'saas-development' },
  { id: 'digital-branding', name: 'Digital Branding', slug: 'digital-branding' },
  { id: 'ai-solutions', name: 'AI Solutions', slug: 'ai-solutions' },
  { id: 'software-consulting', name: 'Software Consulting', slug: 'software-consulting' },
  { id: 'cloud-devops', name: 'Cloud DevOps', slug: 'cloud-devops' },
  { id: 'cybersecurity', name: 'Cybersecurity', slug: 'cybersecurity' },
  { id: 'erp-solutions', name: 'ERP Solutions', slug: 'erp-solutions' },
];

export const BUSINESS_INFO = {
  name: 'LEVROUN INDIA',
  shortName: 'LEVROUN INDIA',
  brandName: 'Levroun',
  cin: '',
  addressPrimary: 'Erode, Tamil Nadu, India',
  cityPrimary: 'Erode',
  addressSecondary: '',
  citySecondary: '',
  state: 'Tamil Nadu',
  pincodePrimary: '',
  pincodeSecondary: '',
  phone: '+91 8939806110',
  phoneSecondary: '',
  email: 'hello@levroun.com',
  website: 'https://levroun.com',
  coordinates: { lat: 11.3410, lng: 77.7172 }
};

export const SALARY_DATA: Record<string, { min: number; max: number; avg: number }> = {
  'fullstack': { min: 400000, max: 1200000, avg: 700000 },
  'frontend': { min: 350000, max: 1000000, avg: 600000 },
  'backend': { min: 400000, max: 1100000, avg: 650000 },
  'python': { min: 350000, max: 900000, avg: 550000 },
  'java': { min: 400000, max: 1000000, avg: 650000 },
  'data-science': { min: 500000, max: 1500000, avg: 900000 },
  'machine-learning': { min: 600000, max: 1800000, avg: 1000000 },
  'artificial-intelligence': { min: 700000, max: 2000000, avg: 1200000 },
  'uiux': { min: 300000, max: 900000, avg: 550000 },
  'digital-marketing': { min: 250000, avg: 450000, max: 800000 }
};
