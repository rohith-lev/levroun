import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | WINORA Tech Academy",
  description: "WINORA Tech Academy — founded in Erode to bridge the gap between education and industry. Our mission: produce world-class engineers from India.",
};

const stats = [
  { value: "10,000+", label: "Graduates Trained" },
  { value: "95%", label: "Placement Rate" },
  { value: "500+", label: "Hiring Partners" },
  { value: "9", label: "Tech Tracks" },
];

const values = [
  {
    icon: "⚡",
    title: "Execution Over Theory",
    body: "Every module is built around shipping real work. We measure success by what students build, not what they memorize.",
  },
  {
    icon: "🧭",
    title: "Outcomes First",
    body: "We don't celebrate enrollment — we celebrate offer letters. Our KPIs are placement rates, salaries, and career trajectories.",
  },
  {
    icon: "🌏",
    title: "World-Class Standards",
    body: "Our curriculum is benchmarked against global engineering practices. We train for the top 1%, not the average.",
  },
  {
    icon: "🤝",
    title: "Radical Mentorship",
    body: "Every student gets direct access to working engineers. Not pre-recorded content — live, contextual guidance.",
  },
];

const team = [
  { name: "Founder & CEO", role: "Ex-Senior Engineer · 12 yrs industry", initials: "WA" },
  { name: "Head of Curriculum", role: "Ex-Google · AI/ML Specialist", initials: "SR" },
  { name: "Placement Director", role: "Ex-TCS · 500+ placements", initials: "KP" },
  { name: "Lead Instructor", role: "Full Stack · Open Source Contributor", initials: "RN" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] bg-navy-900 flex items-end pb-24 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-500/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Erode · Est. 2022</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl leading-[1.05]">
            We Build Engineers{" "}
            <span className="text-orange-500">the World Wants to Hire.</span>
          </h1>
          <p className="text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            WINORA was founded on a single conviction: India produces incredible talent that the world systematically underdevelops. We exist to fix that — one cohort at a time.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="group">
                <div className="text-4xl md:text-5xl font-black text-navy-900 group-hover:text-orange-500 transition-colors duration-300">
                  {s.value}
                </div>
                <div className="text-sm text-foreground/50 font-medium mt-2 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy-900 mb-8 leading-[1.1]">
                Close the gap between{" "}
                <span className="text-orange-500">degree and deployment.</span>
              </h2>
              <p className="text-lg text-foreground/60 font-light leading-relaxed mb-6">
                Most graduates leave college with theoretical knowledge and zero industry readiness. WINORA exists to bridge that gap — with a curriculum built by engineers, for engineers, focused entirely on real-world outcomes.
              </p>
              <p className="text-lg text-foreground/60 font-light leading-relaxed">
                We measure our success by one metric: did our graduate get a great job? Everything else is secondary.
              </p>
            </div>

            {/* Visual block */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-navy-900 text-white flex flex-col justify-between min-h-[220px]">
                <div className="text-4xl font-black text-orange-400">₹4.5L</div>
                <div>
                  <div className="font-bold text-white text-lg">Avg Package</div>
                  <div className="text-white/40 text-sm">First placement CTC</div>
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-orange-500 text-white flex flex-col justify-between min-h-[220px]">
                <div className="text-4xl font-black text-white">3×</div>
                <div>
                  <div className="font-bold text-white text-lg">Salary Growth</div>
                  <div className="text-white/60 text-sm">Average within 1 year</div>
                </div>
              </div>
              <div className="col-span-2 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex items-center gap-6">
                <div className="text-5xl font-black text-navy-900">500+</div>
                <div>
                  <div className="font-bold text-navy-900 text-lg">Companies hiring our graduates</div>
                  <div className="text-foreground/40 text-sm">From startups to Fortune 500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-4">
              What we actually <span className="text-orange-500">believe.</span>
            </h2>
            <p className="text-lg text-foreground/50 font-light">
              Not just mission-statement filler. These are the principles that drive every curriculum decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-10 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <span className="text-3xl mb-6 block">{v.icon}</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors">{v.title}</h3>
                <p className="text-base text-foreground/60 leading-relaxed font-light">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-4">
              Built by people who <span className="text-orange-500">actually ship.</span>
            </h2>
            <p className="text-lg text-foreground/50 font-light">
              Every instructor and mentor at WINORA is an active industry practitioner — not just a teacher.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-orange-500/10 transition-all duration-300 group text-center">
                <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <div className="font-bold text-navy-900 text-base mb-1">{member.name}</div>
                <div className="text-xs text-foreground/40 leading-relaxed">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be part of the next cohort.
          </h2>
          <p className="text-lg text-white/50 font-light mb-10">
            Seats are limited. Applications reviewed on a rolling basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/30">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/10">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
