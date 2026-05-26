import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { CITIES, DISTRICTS } from '@/data/seo-data';
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));
const TECHNOLOGIES = ['full-stack', 'python', 'java', 'react', 'node', 'data-science', 'ai-ml', 'web-development', 'app-development', 'ui-ux'];

export async function generateStaticParams() {
  const params: { technology: string; location: string }[] = [];
  TECHNOLOGIES.forEach(t => LOCATIONS.forEach(l => params.push({ technology: t, location: l.toLowerCase().replace(/\s+/g, '-') })));
  return params;
}

export async function generateMetadata({ params }: { params: { technology: string; location: string } }) {
  const tech = params.technology.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!location) return {};

  return genMeta({
    title: `${tech} Internship in ${location} | Paid Training Program`,
    description: `Get ${tech} internship in ${location} at Winora Tech Academy. Paid internship with live projects, certification & placement support. Apply now for ${tech} training internship!`,
    keywords: [`${tech} internship ${location}`, `paid internship ${location}`, `${tech} training ${location}`, `internship with placement ${location}`, `IT internship ${location}`],
    canonical: `https://winoratech.com/internship/${params.technology}/${params.location}`
  });
}

export default function InternshipPage({ params }: { params: { technology: string; location: string } }) {
  const tech = params.technology.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!location) notFound();

  const faqs = [
    { question: `Is the ${tech} internship in ${location} paid?`, answer: `Yes, our ${tech} internship program includes stipend based on performance and project contributions for students in ${location}.` },
    { question: `What is the duration of ${tech} internship?`, answer: `The ${tech} internship program is typically 30-45 days with flexible timings for students and working professionals in ${location}.` },
    { question: `Will I get a certificate after ${tech} internship?`, answer: `Yes, you will receive an industry-recognized internship completion certificate from Winora Tech Academy upon successful completion.` },
    { question: `Is placement support provided after internship?`, answer: `Absolutely! We provide 100% placement assistance with resume building, interview preparation, and direct company referrals for ${location} candidates.` }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://winoratech.com' },
    { name: 'Internships', url: 'https://winoratech.com/internships' },
    { name: tech, url: `https://winoratech.com/internship/${params.technology}` },
    { name: location, url: `https://winoratech.com/internship/${params.technology}/${params.location}` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-slate-600 mb-8">{breadcrumbs.map((b, i) => <span key={i}>{i > 0 && ' / '}<a href={b.url} className="hover:text-blue-600">{b.name}</a></span>)}</nav>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{tech} Internship in {location}</h1>
            <p className="text-xl text-slate-700 mb-6">Gain real-world experience with paid {tech} internship program at Winora Tech Academy</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">Paid Internship</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">Live Projects</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">Certificate Provided</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold">Placement Support</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Internship Highlights</h2>
              <ul className="space-y-3 text-slate-700">
                <li>✓ Work on live {tech} projects</li>
                <li>✓ Stipend based on performance</li>
                <li>✓ Industry-recognized certificate</li>
                <li>✓ Mentorship from experienced developers</li>
                <li>✓ Flexible timings for students</li>
                <li>✓ Portfolio-building opportunities</li>
                <li>✓ Direct placement opportunities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="space-y-3 text-slate-700">
                <li>• Real-world {tech} development practices</li>
                <li>• Industry-standard tools and workflows</li>
                <li>• Code review and collaboration skills</li>
                <li>• Project management and agile methodologies</li>
                <li>• Problem-solving and debugging techniques</li>
                <li>• Professional communication skills</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Best {tech} Internship Program in {location}</h2>
            <p className="text-lg mb-4">Winora Tech Academy offers the most comprehensive {tech} internship program in {location}. Our internship combines hands-on training with real client projects, giving you the practical experience employers demand.</p>
            <p className="text-lg">Located in Perundurai, we welcome interns from {location}, Erode, Tiruppur, Coimbatore, Salem, and across Tamil Nadu. Join our internship program and kickstart your tech career with real-world experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Paid Stipend</h3>
              <p className="text-slate-600">Earn while you learn with performance-based stipend</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-xl mb-2">Certificate</h3>
              <p className="text-slate-600">Industry-recognized internship completion certificate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold text-xl mb-2">Job Placement</h3>
              <p className="text-slate-600">Direct placement opportunities with partner companies</p>
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
            <h2 className="text-3xl font-bold mb-4">Apply for {tech} Internship in {location}</h2>
            <p className="text-lg mb-6">Limited seats available. Apply now and start your tech career journey!</p>
            <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition">Apply Now</a>
          </div>
        </div>
      </div>
    </>
  );
}
