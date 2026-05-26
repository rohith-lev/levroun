import { notFound } from 'next/navigation';
import { courses } from '@/data/courses';
import { CITIES, DISTRICTS } from '@/data/seo-data';
import { generateMetadata as genMeta, generateCourseSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo';

const LOCATIONS = Array.from(new Set([...CITIES, ...DISTRICTS]));

export async function generateStaticParams() {
  const params: { course: string; location: string }[] = [];
  courses.forEach(c => LOCATIONS.forEach(l => params.push({ course: c.id, location: l.toLowerCase().replace(/\s+/g, '-') })));
  return params;
}

export async function generateMetadata({ params }: { params: { course: string; location: string } }) {
  const course = courses.find(c => c.id === params.course);
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!course || !location) return {};

  return genMeta({
    title: `${course.name} Course in ${location} | Best Training Institute`,
    description: `Learn ${course.name} in ${location} at Winora Tech Academy. ${course.duration} program with ${course.technologies.join(', ')}. 100% placement support, live projects & internship. Enroll now!`,
    keywords: [`${course.name} course in ${location}`, `${course.name} training ${location}`, `best ${course.name} institute ${location}`, ...course.technologies.map(t => `${t} training ${location}`), `software training ${location}`, `IT courses ${location}`],
    canonical: `https://winoratech.com/courses/${params.course}/${params.location}`
  });
}

export default function CourseLocationPage({ params }: { params: { course: string; location: string } }) {
  const course = courses.find(c => c.id === params.course);
  const location = LOCATIONS.find(l => l.toLowerCase().replace(/\s+/g, '-') === params.location);
  if (!course || !location) notFound();

  const faqs = [
    { question: `What is the duration of ${course.name} course in ${location}?`, answer: `The ${course.name} course at Winora Tech Academy in ${location} is a ${course.duration} program with hands-on training and live projects.` },
    { question: `Is placement support provided for ${course.name} in ${location}?`, answer: `Yes, we provide 100% placement assistance with dedicated placement training, resume building, and interview preparation for all students in ${location}.` },
    { question: `What technologies are covered in ${course.name} training?`, answer: `Our ${course.name} course covers ${course.technologies.join(', ')} with industry-relevant projects and real-world applications.` },
    { question: `Do you provide internship for ${course.name} in ${location}?`, answer: `Yes, ${course.internshipSupport} is included as part of the program.` },
    { question: `What is the fee structure for ${course.name} course?`, answer: `Course fees vary based on the program. Contact our ${location} center for detailed fee structure and available EMI options.` }
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://winoratech.com' },
    { name: 'Courses', url: 'https://winoratech.com/programs' },
    { name: course.name, url: `https://winoratech.com/courses/${params.course}` },
    { name: location, url: `https://winoratech.com/courses/${params.course}/${params.location}` }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCourseSchema(course, location)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <nav className="text-sm text-slate-600 mb-8">{breadcrumbs.map((b, i) => <span key={i}>{i > 0 && ' / '}<a href={b.url} className="hover:text-blue-600">{b.name}</a></span>)}</nav>

          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{course.name} Course in {location}</h1>
            <p className="text-xl text-slate-700 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">{course.duration}</span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">{course.level}</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-semibold">100% Placement</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Why Choose {course.name} in {location}?</h2>
              <ul className="space-y-3 text-slate-700">
                <li>✓ Industry-expert trainers with 10+ years experience</li>
                <li>✓ Hands-on training with live projects</li>
                <li>✓ {course.internshipSupport}</li>
                <li>✓ 100% placement assistance in {location} and nearby cities</li>
                <li>✓ Flexible batch timings - weekday & weekend</li>
                <li>✓ Modern infrastructure with latest tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Technologies Covered</h2>
              <div className="flex flex-wrap gap-3">
                {course.technologies.map(tech => <span key={tech} className="px-4 py-2 bg-slate-100 rounded-lg font-medium">{tech}</span>)}
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Course Outcomes:</h3>
                <ul className="space-y-2 text-slate-700">{course.outcomes.map((o, i) => <li key={i}>• {o}</li>)}</ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Best {course.name} Training Institute in {location}</h2>
            <p className="text-lg mb-4">Winora Tech Academy is the leading software training institute in {location}, offering comprehensive {course.name} training with guaranteed placement support. Located in Perundurai, we serve students from {location}, Erode, Tiruppur, Coimbatore, Salem, and across Tamil Nadu.</p>
            <p className="text-lg">Our {course.name} course is designed by industry experts and includes {course.liveProjects}. Join hundreds of successful students who have launched their tech careers with Winora.</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your {course.name} Journey in {location}?</h2>
            <p className="text-lg mb-6">Join Winora Tech Academy today and transform your career with industry-leading training</p>
            <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-lg transition">Enroll Now</a>
          </div>
        </div>
      </div>
    </>
  );
}
