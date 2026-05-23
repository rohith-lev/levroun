import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Internships | WINORA Tech Academy",
  description: "15, 30, and 45-day industry internship programs with real project experience, mentorship, and placement support at WINORA Tech Academy.",
};

const programs = [
  {
    duration: "15 Days",
    title: "Foundation Internship",
    tag: "Starter",
    tagColor: "bg-blue-100 text-blue-700",
    price: "₹2,999",
    description: "A rapid-immersion introduction to your chosen technology stack with guided project work and daily mentor sessions.",
    features: [
      "Guided project from Day 1",
      "Daily 1:1 mentor sessions",
      "Certificate of completion",
      "GitHub portfolio setup",
      "Career orientation session",
    ],
    cta: "Enroll in 15-Day",
    highlight: false,
  },
  {
    duration: "30 Days",
    title: "Professional Internship",
    tag: "Most Popular",
    tagColor: "bg-orange-100 text-orange-700",
    price: "₹4,999",
    description: "Deep-dive into industry workflows. Build a full project, collaborate in teams, and receive mentored code reviews.",
    features: [
      "Full-stack industry project",
      "Team collaboration experience",
      "Code reviews & feedback",
      "Mock interview preparation",
      "LinkedIn & resume review",
      "Placement referral letter",
    ],
    cta: "Enroll in 30-Day",
    highlight: true,
  },
  {
    duration: "45 Days",
    title: "Industrial Training",
    tag: "Advanced",
    tagColor: "bg-emerald-100 text-emerald-700",
    price: "₹6,999",
    description: "Complete industrial training with client deliverables, agile methodology, and direct recruiter connections.",
    features: [
      "Real client deliverables",
      "Agile / Scrum workflow",
      "Weekly recruiter connects",
      "Dedicated project mentor",
      "Full portfolio project",
      "Direct placement pipeline",
      "Internship completion letter",
    ],
    cta: "Enroll in 45-Day",
    highlight: false,
  },
];

const tracks = [
  "Full Stack Development", "AI & Machine Learning", "Frontend (React)",
  "Python & Django", "UI/UX Design", "Digital Marketing",
  "Cyber Security", "Mobile App Dev", "Cloud & DevOps",
];

export default function InternshipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] bg-white flex items-end pb-20 pt-40 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/5 border border-navy-900/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy-900/60">Internships · Batch 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 mb-6 max-w-4xl leading-[1.05]">
            Real Experience.{" "}
            <span className="text-orange-500">Real Projects.</span>
          </h1>
          <p className="text-lg text-foreground/50 font-light max-w-xl leading-relaxed">
            Industry internship programs designed to build your portfolio, sharpen your skills, and connect you directly with hiring companies.
          </p>
        </div>
      </section>

      {/* Track selector */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-900/40 mb-4">Available across all tracks</p>
          <div className="flex flex-wrap gap-2">
            {tracks.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-navy-900/70 bg-white hover:border-orange-500/40 hover:text-orange-600 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-4">
              Choose Your <span className="text-orange-500">Duration.</span>
            </h2>
            <p className="text-lg text-foreground/50 font-light">
              Every program includes hands-on projects, mentor access, and a verified certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.duration}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  p.highlight
                    ? "bg-navy-900 text-white shadow-2xl shadow-navy-900/30 scale-[1.02]"
                    : "bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.tagColor}`}>
                    {p.tag}
                  </span>
                  <span className={`text-3xl font-black ${p.highlight ? "text-orange-400" : "text-navy-900"}`}>
                    {p.duration}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-3 ${p.highlight ? "text-white" : "text-navy-900"}`}>
                  {p.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${p.highlight ? "text-white/60" : "text-foreground/60"}`}>
                  {p.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlight ? "text-orange-400" : "text-orange-500"}`} />
                      <span className={`text-sm ${p.highlight ? "text-white/70" : "text-foreground/70"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className={`text-2xl font-black ${p.highlight ? "text-white" : "text-navy-900"}`}>
                    {p.price}
                  </span>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                      p.highlight
                        ? "bg-orange-500 text-white hover:bg-orange-400"
                        : "bg-navy-900 text-white hover:bg-navy-900/90"
                    }`}
                  >
                    {p.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-bold text-white mb-16 max-w-xl">
            Every intern leaves with a <span className="text-orange-500">portfolio that speaks.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Live Project", body: "Build a real product from requirements to deployment. Something you can actually show employers." },
              { num: "02", title: "Industry Mentors", body: "Daily guidance from working engineers. Not recorded tutorials — real conversations." },
              { num: "03", title: "Placement Pipeline", body: "Direct connections to our 500+ hiring partners. We make introductions, you close the role." },
            ].map((item) => (
              <div key={item.num} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="text-5xl font-black text-white/10 mb-4">{item.num}</div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
