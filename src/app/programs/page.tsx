import type { Metadata } from "next";
import CoursesSection from "@/components/sections/CoursesSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs | WINORA Tech Academy",
  description: "Explore 9 career tracks, 60+ modules. Full Stack, AI/ML, UI/UX, Cloud, Cyber Security and more. Industry-first curriculum with 100% placement support.",
};

const highlights = [
  { icon: "🎓", label: "9 Tracks", sub: "Industry-mapped programs" },
  { icon: "📦", label: "60+ Modules", sub: "Structured learning path" },
  { icon: "🚀", label: "100% Placement", sub: "Guaranteed support" },
  { icon: "🧑‍💻", label: "Live Projects", sub: "Real client work" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-navy-900 flex items-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Admissions Open · 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.05]">
            Programs Built for the{" "}
            <span className="text-orange-500">Real World.</span>
          </h1>
          <p className="text-lg text-white/50 font-light max-w-2xl leading-relaxed mb-12">
            From first principles to production-grade systems. Every program is curated by industry practitioners and mapped to actual hiring requirements.
          </p>

          {/* Highlight chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <div className="text-white font-bold text-sm">{h.label}</div>
                  <div className="text-white/40 text-xs">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-foreground/50 font-light mb-10">
            Speak to an admissions advisor and find the right track for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-900/90 transition-all shadow-xl shadow-navy-900/20">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/internships" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 text-navy-900 font-bold rounded-full hover:bg-gray-50 transition-all">
              View Internships
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
