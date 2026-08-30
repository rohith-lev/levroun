import { notFound } from 'next/navigation';
import { SERVICES, CITIES, DISTRICTS, BUSINESS_INFO } from '@/data/seo-data';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  SERVICES.forEach(s => LOCATIONS.forEach(l => params.push({ service: s.slug, location: l.toLowerCase().replace(/\s+/g, '-') })));
  return params;
}

export async function generateMetadata({ params }: { params: { service: string; location: string } }) {
  const service = SERVICES.find(s => s.slug === params.service);
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!service || !location) return {};

  return genMeta({
    title: `${service.name} Company in ${location} | Inzovate Technologies`,
    description: `Professional ${service.name} solutions in ${location} by Inzovate Technologies Pvt. Ltd. Enterprise-grade IT & AI engineering. Get a free consultation today!`,
    keywords: [`${service.name} ${location}`, `${service.name} company ${location}`, `best ${service.name} ${location}`, `IT company ${location}`, `software company ${location}`],
    canonical: `https://inzovate.com/services/${params.service}/${params.location}`
  });
}

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = SERVICES.find(s => s.slug === params.service);
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!service || !location) notFound();

  const faqs = [
    { question: `What ${service.name} services do you offer in ${location}?`, answer: `${BUSINESS_INFO.shortName} provides comprehensive ${service.name} services in ${location} including architecture, design, development, cloud deployment, and ongoing maintenance.` },
    { question: `How much does ${service.name} cost in ${location}?`, answer: `${service.name} pricing varies based on project scope and technical complexity. Contact us for a free consultation and customized enterprise quote for your ${location} business.` },
    { question: `Do you provide ${service.name} for startups in ${location}?`, answer: `Yes, we specialize in high-growth startup and enterprise ${service.name} solutions with flexible pricing and scalable architecture.` },
    { question: `What is the timeline for ${service.name} projects?`, answer: `Project timelines typically range from 2-12 weeks depending on scope. We provide detailed milestone planning for all ${location} clients.` }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://inzovate.com' },
    { name: 'Services', url: 'https://inzovate.com/services' },
    { name: service.name, url: `https://inzovate.com/services/${params.service}` },
    { name: location, url: `https://inzovate.com/services/${params.service}/${params.location}` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service, location)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="text-sm text-slate-600 mb-8">{breadcrumbs.map((b, i) => <span key={i}>{i > 0 && ' / '}<a href={b.url} className="hover:text-blue-600 font-medium">{b.name}</a></span>)}</nav>

          <div className="mb-12 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">Enterprise Solutions</span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">{service.name} Company in {location}</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl">Enterprise-grade {service.name} solutions for startups and businesses in {location} and across Tamil Nadu.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-slate-900 mb-2">High-Performance Delivery</h3>
              <p className="text-slate-500 text-sm">Rapid development cycles using modern tech stacks</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-slate-900 mb-2">Enterprise Security</h3>
              <p className="text-slate-500 text-sm">Robust security architectures built to scale</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-slate-900 mb-2">24/7 Managed Support</h3>
              <p className="text-slate-500 text-sm">Dedicated engineering support for your platform</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
            <h2 className="text-3xl font-black mb-4">Leading {service.name} Provider in {location}</h2>
            <p className="text-lg text-blue-100 mb-4 leading-relaxed">{BUSINESS_INFO.name} is a premier enterprise IT and software engineering firm serving businesses in {location}, Bhavani, Tiruchengode, Erode, Tiruppur, Coimbatore, and across Tamil Nadu.</p>
            <p className="text-lg text-blue-100 leading-relaxed">Our senior software architects work closely with your team to deliver custom, cloud-native {service.name} solutions engineered for maximum ROI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Inzovate for {service.name}?</h2>
              <ul className="space-y-3 text-slate-600 text-sm font-medium">
                <li>✓ Official CIN Registered IT Enterprise ({BUSINESS_INFO.cin})</li>
                <li>✓ Senior full-stack & AI engineering team</li>
                <li>✓ Cloud partnerships with AWS & Zoho</li>
                <li>✓ Competitive pricing tailored for {location} enterprises</li>
                <li>✓ Agile sprint delivery with full code ownership</li>
                <li>✓ Post-launch SLA & DevOps maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our {service.name} Workflow</h2>
              <div className="space-y-4 text-sm">
                <div><span className="font-bold text-blue-600">1. Requirement Analysis</span> — Technical architecture design</div>
                <div><span className="font-bold text-blue-600">2. UI/UX Prototyping</span> — Interactive wireframes & design system</div>
                <div><span className="font-bold text-blue-600">3. Sprint Development</span> — Clean, maintainable code implementation</div>
                <div><span className="font-bold text-blue-600">4. QA & Security Audit</span> — Automated testing & vulnerability checks</div>
                <div><span className="font-bold text-blue-600">5. Cloud Deployment</span> — Scalable AWS/Azure infrastructure setup</div>
                <div><span className="font-bold text-blue-600">6. Continuous Support</span> — 24/7 monitoring and performance scaling</div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-3xl font-black mb-3">Ready to Start Your Project in {location}?</h2>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto">Get a free consultation and project quote from our engineering leaders.</p>
            <a href="tel:+919342008797" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white shadow-lg transition transform active:scale-95">Call +91 93420 08797</a>
          </div>
        </div>
      </div>
    </>
  );
}
