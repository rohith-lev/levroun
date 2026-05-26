import { courses } from '@/data/courses';
import { SALARY_DATA } from '@/data/seo-data';

export function generateCourseContent(courseId: string, location: string) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return null;

  const salary = SALARY_DATA[courseId];
  
  return {
    whyChoose: [
      `Industry-expert trainers with 10+ years of real-world ${course.name} experience`,
      `Comprehensive ${course.duration} program covering ${course.technologies.join(', ')}`,
      `${course.internshipSupport} with live client projects`,
      `100% placement assistance with top companies in ${location} and across India`,
      `Flexible batch timings - weekday, weekend, and fast-track options available`,
      `Modern infrastructure with latest development tools and technologies`,
      `Small batch sizes ensuring personalized attention and mentorship`,
      `Industry-recognized certification upon successful completion`
    ],
    
    careerOpportunities: salary ? [
      `Average starting salary: ₹${(salary.avg / 100000).toFixed(1)} LPA`,
      `Salary range: ₹${(salary.min / 100000).toFixed(1)} - ${(salary.max / 100000).toFixed(1)} LPA`,
      `High demand in ${location}, Bangalore, Chennai, Hyderabad, and globally`,
      `Remote work opportunities with international companies`,
      `Freelancing potential: ₹500-2000/hour for experienced professionals`
    ] : [],
    
    localAdvantages: [
      `Conveniently located in Perundurai, easily accessible from ${location}`,
      `Regular bus and train connectivity from ${location} to our campus`,
      `Dedicated placement cell with tie-ups with companies in ${location} region`,
      `Local industry networking events and meetups`,
      `Hostel facilities available for outstation students from ${location}`,
      `Weekend batches perfect for working professionals in ${location}`
    ],
    
    successMetrics: [
      '5000+ students successfully placed in top companies',
      '95% placement rate within 3 months of course completion',
      '200+ hiring partners including startups and MNCs',
      'Average salary hike of 150% for career switchers',
      '4.8/5 average student rating across all courses'
    ]
  };
}

export function generateServiceContent(serviceName: string, location: string) {
  return {
    benefits: [
      `Expert team with 10+ years of ${serviceName} experience`,
      `Proven track record with 100+ successful projects in ${location} and Tamil Nadu`,
      `Competitive pricing tailored for ${location} businesses and startups`,
      `Agile development methodology with regular client updates`,
      `Post-launch support and maintenance included`,
      `Scalable solutions that grow with your business`,
      `Modern tech stack using latest industry standards`,
      `Dedicated project manager for seamless communication`
    ],
    
    industries: [
      'E-commerce and Retail',
      'Healthcare and Telemedicine',
      'Education and EdTech',
      'Finance and FinTech',
      'Real Estate and PropTech',
      'Manufacturing and Industry 4.0',
      'Hospitality and Tourism',
      'Logistics and Supply Chain'
    ],
    
    technologies: [
      'React, Next.js, Vue.js for modern web applications',
      'React Native, Flutter for cross-platform mobile apps',
      'Node.js, Python, Java for robust backend systems',
      'AWS, Azure, GCP for cloud infrastructure',
      'MongoDB, PostgreSQL, MySQL for databases',
      'Docker, Kubernetes for containerization',
      'AI/ML integration for intelligent features',
      'Payment gateway integration (Razorpay, Stripe, PayPal)'
    ]
  };
}

export function generateLocationContent(location: string) {
  return {
    nearbyAreas: [
      'Perundurai - 5 km',
      'Erode - 15 km',
      'Bhavani - 20 km',
      'Gobichettipalayam - 35 km',
      'Tiruppur - 45 km',
      'Salem - 60 km',
      'Coimbatore - 70 km'
    ],
    
    connectivity: [
      `Regular bus services from ${location} to Perundurai every 30 minutes`,
      `Train connectivity via Erode Junction (15 km from campus)`,
      `Well-connected by NH-47 and state highways`,
      `Ample parking space available for two-wheelers and cars`,
      `Safe and secure campus with 24/7 security`
    ],
    
    facilities: [
      'Air-conditioned smart classrooms',
      'High-speed internet and WiFi',
      'Modern computer labs with latest hardware',
      'Library with technical books and resources',
      'Cafeteria with hygienic food options',
      'Separate hostels for boys and girls',
      'Recreation area and sports facilities',
      'Interview preparation rooms'
    ]
  };
}

export function generateFAQs(type: 'course' | 'service' | 'location' | 'internship', name: string, location: string) {
  const faqs = {
    course: [
      {
        q: `What is the duration of ${name} course in ${location}?`,
        a: `The ${name} course at Winora Tech Academy is a comprehensive program with flexible duration options. We offer intensive, regular, and weekend batches to suit students and working professionals in ${location}.`
      },
      {
        q: `Is placement support provided for ${name} in ${location}?`,
        a: `Yes, we provide 100% placement assistance including resume building, mock interviews, soft skills training, and direct company referrals for all students in ${location}.`
      },
      {
        q: `What is the fee structure for ${name} course?`,
        a: `Course fees vary based on batch type and duration. We offer competitive pricing with EMI options for ${location} students. Contact us for detailed fee structure and current offers.`
      },
      {
        q: `Do you provide internship with ${name} training?`,
        a: `Yes, all our courses include mandatory internship programs with live projects. Students get hands-on experience working on real client projects during the internship period.`
      },
      {
        q: `What are the prerequisites for ${name} course?`,
        a: `Prerequisites vary by course level. Beginner courses require no prior experience, while intermediate and advanced courses may require basic programming knowledge. Contact us for specific requirements.`
      },
      {
        q: `Will I get a certificate after completing ${name} course?`,
        a: `Yes, you will receive an industry-recognized certificate from Winora Tech Academy upon successful completion of the course and projects.`
      },
      {
        q: `Are there weekend batches available in ${location}?`,
        a: `Yes, we offer flexible batch timings including weekday, weekend, and fast-track batches to accommodate students and working professionals from ${location}.`
      },
      {
        q: `What is the average salary after ${name} course?`,
        a: `Salaries vary based on skills and experience. Our students typically start with ₹3.5-7 LPA for entry-level positions, with significant growth potential as they gain experience.`
      }
    ],
    
    service: [
      {
        q: `What ${name} services do you offer in ${location}?`,
        a: `We provide end-to-end ${name} services including consultation, design, development, testing, deployment, and ongoing maintenance for businesses in ${location}.`
      },
      {
        q: `How much does ${name} cost in ${location}?`,
        a: `Project costs vary based on scope, complexity, and requirements. We offer competitive pricing for ${location} businesses with flexible payment terms. Contact us for a free consultation and quote.`
      },
      {
        q: `What is the typical timeline for ${name} projects?`,
        a: `Project timelines range from 2-12 weeks depending on complexity. We provide detailed project plans with milestones and regular progress updates for all ${location} clients.`
      },
      {
        q: `Do you provide post-launch support?`,
        a: `Yes, we provide comprehensive post-launch support including bug fixes, updates, and maintenance. Support packages are customized based on client needs.`
      },
      {
        q: `Can you work with startups in ${location}?`,
        a: `Absolutely! We specialize in startup-friendly solutions with MVP development, scalable architecture, and flexible pricing for growing businesses in ${location}.`
      }
    ],
    
    location: [
      {
        q: `Where is Winora Tech Academy located in relation to ${location}?`,
        a: `Winora Tech Academy is located in Perundurai, easily accessible from ${location} via regular bus and train services. We are at TVR Corner, Old Bus Stand Road, Perundurai.`
      },
      {
        q: `Do you provide hostel facilities for students from ${location}?`,
        a: `Yes, we have tie-ups with nearby hostels providing safe and comfortable accommodation for outstation students from ${location} and other cities.`
      },
      {
        q: `What are the batch timings available for ${location} students?`,
        a: `We offer flexible batch timings including morning (9 AM - 12 PM), afternoon (2 PM - 5 PM), evening (6 PM - 9 PM), and weekend batches for ${location} students.`
      }
    ],
    
    internship: [
      {
        q: `Is the ${name} internship in ${location} paid?`,
        a: `Yes, we offer stipend-based internships where payment is based on performance and project contributions. Top performers receive competitive stipends.`
      },
      {
        q: `What is the duration of ${name} internship?`,
        a: `Our ${name} internship programs typically run for 30-45 days with flexible timings for students and working professionals in ${location}.`
      },
      {
        q: `Will I get a certificate after ${name} internship?`,
        a: `Yes, you will receive an industry-recognized internship completion certificate from Winora Tech Academy upon successful completion of the program.`
      },
      {
        q: `What kind of projects will I work on during internship?`,
        a: `You will work on live client projects involving real-world ${name} development, giving you practical experience that employers value.`
      }
    ]
  };
  
  return faqs[type] || [];
}
