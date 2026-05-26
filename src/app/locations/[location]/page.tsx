import { notFound } from 'next/navigation';
import { CITIES, DISTRICTS } from '@/data/seo-data';
import { courses } from '@/data/courses';
import { generateMetadata as genMeta, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/seo';

const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));

export async function generateStaticParams() {
  return LOCATIONS.map(l => ({ location: l.toLowerCase().replace(/\s+/g, '-') }));
}

export async function generateMetadata({ params }: { params: { location: string } }) {
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!location) return {};

  return genMeta({
    title: `Best Software Training Institute in ${location} | Winora Tech Academy`,
    description: `Top-rated software training institute in ${location}. Learn Full Stack, AI/ML, Cloud, UI/UX with 100% placement. Courses in Python, Java, React, Data Science. Enroll now!`,
    keywords: [`software training institute ${location}`, `IT courses ${location}`, `best training center ${location}`, `placement training ${location}`, `internship ${location}`, `coding classes ${location}`],
    canonical: `https://winoratech.com/locations/${params.location}`
  });
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!location) notFound();

  const featuredCourses = courses.filter(c => c.featured).slice(0, 6);
  const faqs = [
    { question: `Which is the best software training institute in ${location}?`, answer: `Winora Tech Academy is the leading software training institute in ${location}, offering comprehensive courses in Full Stack Development, AI/ML, Cloud Computing, and more with 100% placement support.` },
    { question: `Does Winora provide placement assistance in ${location}?`, answer: `Yes, we provide 100% placement assistance with dedicated placement training, resume building, mock interviews, and direct company tie-ups for students in ${location}.` },
    { question: `What courses are available in ${location}?`, answer: `We offer 30+ courses including Full Stack Development, Python, Java, Data Science, AI/ML, Cloud Computing, UI/UX Design, Digital Marketing, and more at our ${location} center.` },
    { question: `Is internship provided for students in ${location}?`, answer: `Yes, all our courses include mandatory internship programs ranging from 15-45 days with live project experience for ${location} students.` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Best Software Training Institute in {location}</h1>
            <p className="text-2xl text-slate-700 mb-8">Transform Your Career with Industry-Leading IT Training & 100% Placement Support</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-bold">10+ Years Experience</span>
              <span className="px-6 py-3 bg-green-100 text-green-700 rounded-full font-bold">5000+ Students Placed</span>
              <span className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full font-bold">30+ Courses</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Expert Training</h3>
              <p className="text-slate-600">Learn from industry experts with 10+ years of real-world experience</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">100% Placement</h3>
              <p className="text-slate-600">Guaranteed placement support with top companies in {location} and beyond</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Live Projects</h3>
              <p className="text-slate-600">Hands-on experience with real-world projects and internships</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Popular Courses in {location}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredCourses.map(course => (
                <a key={course.id} href={`/courses/${course.id}/${params.location}`} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-slate-600 mb-4">{course.description.slice(0, 100)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.technologies.slice(0, 3).map(tech => <span key={tech} className="px-3 py-1 bg-slate-100 rounded text-sm">{tech}</span>)}
                  </div>
                  <div className="text-blue-600 font-semibold">Learn More →</div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Winora Tech Academy in {location}?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div>✓ Industry-aligned curriculum designed by experts</div>
              <div>✓ Hands-on training with live projects</div>
              <div>✓ 100% placement assistance with top companies</div>
              <div>✓ Flexible batch timings - weekday & weekend</div>
              <div>✓ Modern infrastructure with latest technology</div>
              <div>✓ Affordable fees with EMI options</div>
              <div>✓ Internship programs with all courses</div>
              <div>✓ Industry-recognized certifications</div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Serving Students Across Tamil Nadu</h2>
            <p className="text-xl text-center text-slate-700 mb-8">Located in Perundurai, we serve students from {location}, Erode, Tiruppur, Coimbatore, Salem, Namakkal, and all nearby districts. Our strategic location makes us accessible to students across Tamil Nadu.</p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Location</h3>
              <p className="text-lg text-slate-700 mb-2">TVR Corner, 54/7, Old Bus Stand Road</p>
              <p className="text-lg text-slate-700 mb-2">Perundurai, Tamil Nadu 638052</p>
              <p className="text-lg text-slate-700">Easily accessible from {location} by bus and train</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl mb-8">Join thousands of successful students from {location} who have launched their tech careers with Winora</p>
            <a href="/contact" className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-xl transition">Enroll Now</a>
          </div>
        </div>
      </div>
    </>
  );
}
