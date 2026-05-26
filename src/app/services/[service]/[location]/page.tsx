import { notFound } from 'next/navigation';
import { SERVICES, CITIES, DISTRICTS } from '@/data/seo-data';
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
    title: `${service.name} Company in ${location} | Winora Infotech`,
    description: `Professional ${service.name} services in ${location} by Winora Infotech. Enterprise-grade solutions for startups and businesses. Get free consultation today!`,
    keywords: [`${service.name} ${location}`, `${service.name} company ${location}`, `best ${service.name} ${location}`, `IT company ${location}`, `software company ${location}`],
    canonical: `https://winoratech.com/services/${params.service}/${params.location}`
  });
}

export default function ServiceLocationPage({ params }: { params: { service: string; location: string } }) {
  const service = SERVICES.find(s => s.slug === params.service);
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!service || !location) notFound();

  const faqs = [
    { question: `What ${service.name} services do you offer in ${location}?`, answer: `Winora Infotech provides comprehensive ${service.name} services in ${location} including consultation, design, development, deployment, and ongoing support.` },
    { question: `How much does ${service.name} cost in ${location}?`, answer: `${service.name} pricing varies based on project scope and requirements. Contact us for a free consultation and customized quote for your ${location} business.` },
    { question: `Do you provide ${service.name} for startups in ${location}?`, answer: `Yes, we specialize in startup-friendly ${service.name} solutions with flexible pricing and scalable architecture for growing businesses in ${location}.` },
    { question: `What is the timeline for ${service.name} projects?`, answer: `Project timelines vary from 2-12 weeks depending on complexity. We provide detailed project plans with milestones for all ${location} clients.` }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://winoratech.com' },
    { name: 'Services', url: 'https://winoratech.com/services' },
    { name: service.name, url: `https://winoratech.com/services/${params.service}` },
    { name: location, url: `https://winoratech.com/services/${params.service}/${params.location}` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(service, location)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-slate-600 mb-8">{breadcrumbs.map((b, i) => <span key={i}>{i > 0 && ' / '}<a href={b.url} className="hover:text-blue-600">{b.name}</a></span>)}</nav>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{service.name} Company in {location}</h1>
            <p className="text-xl text-slate-700 mb-6">Enterprise-grade {service.name} solutions for businesses in {location} and across Tamil Nadu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold mb-2">Fast Delivery</h3>
              <p className="text-slate-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-slate-600">Enterprise-grade solutions built to scale</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Ongoing Support</h3>
              <p className="text-slate-600">Dedicated support team for all clients</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Leading {service.name} Provider in {location}</h2>
            <p className="text-lg mb-4">Winora Infotech is a trusted IT services company serving businesses in {location}, Perundurai, Erode, Tiruppur, Coimbatore, and across Tamil Nadu. We specialize in delivering cutting-edge {service.name} solutions that drive business growth.</p>
            <p className="text-lg">Our team of experienced developers and designers work closely with clients to understand their unique needs and deliver customized solutions that exceed expectations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose Winora for {service.name}?</h2>
              <ul className="space-y-3 text-slate-700">
                <li>✓ 10+ years of industry experience</li>
                <li>✓ Expert team of developers and designers</li>
                <li>✓ Proven track record with 100+ successful projects</li>
                <li>✓ Competitive pricing for {location} businesses</li>
                <li>✓ Agile development methodology</li>
                <li>✓ Post-launch support and maintenance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Our {service.name} Process</h2>
              <div className="space-y-4">
                <div><span className="font-bold text-blue-600">1. Discovery</span> - Understanding your business goals</div>
                <div><span className="font-bold text-blue-600">2. Planning</span> - Strategic roadmap and timeline</div>
                <div><span className="font-bold text-blue-600">3. Design</span> - User-centric design and prototyping</div>
                <div><span className="font-bold text-blue-600">4. Development</span> - Agile development with regular updates</div>
                <div><span className="font-bold text-blue-600">5. Testing</span> - Rigorous QA and performance testing</div>
                <div><span className="font-bold text-blue-600">6. Launch</span> - Smooth deployment and handover</div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project in {location}?</h2>
            <p className="text-lg mb-6">Get a free consultation and quote for your {service.name} project</p>
            <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition">Get Free Consultation</a>
          </div>
        </div>
      </div>
    </>
  );
}
