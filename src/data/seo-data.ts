export const DISTRICTS = ['Erode', 'Tiruppur', 'Coimbatore', 'Salem', 'Namakkal', 'Karur', 'Dindigul', 'Nilgiris', 'Chennai', 'Madurai', 'Trichy'];
export const CITIES = ['Perundurai', 'Erode', 'Chithode', 'Bhavani', 'Gobichettipalayam', 'Tiruppur', 'Coimbatore', 'Kangeyam', 'Dharapuram', 'Salem', 'Namakkal'];

export const SERVICES = [
  { id: 'web-development', name: 'Website Development', slug: 'web-development' },
  { id: 'app-development', name: 'App Development', slug: 'app-development' },
  { id: 'uiux-design', name: 'UI UX Design', slug: 'uiux-design' },
  { id: 'seo-services', name: 'SEO Services', slug: 'seo-services' },
  { id: 'startup-solutions', name: 'Startup IT Solutions', slug: 'startup-solutions' },
  { id: 'saas-development', name: 'SaaS Development', slug: 'saas-development' },
  { id: 'digital-branding', name: 'Digital Branding', slug: 'digital-branding' },
  { id: 'ai-solutions', name: 'AI Solutions', slug: 'ai-solutions' },
  { id: 'software-consulting', name: 'Software Consulting', slug: 'software-consulting' }
];

export const BUSINESS_INFO = {
  name: 'WINORA TECH ACADEMY AND INFOTECH PRIVATE LIMITED',
  shortName: 'Winora Tech Academy',
  address: 'TVR Corner, 54/7, Old Bus Stand Road',
  city: 'Perundurai',
  state: 'Tamil Nadu',
  pincode: '638052',
  phone: '+91 9876543210',
  email: 'info@winoratech.com',
  coordinates: { lat: 11.2753, lng: 77.5877 }
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
