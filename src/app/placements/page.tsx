import type { Metadata } from "next";
import PlacementSection from "@/components/sections/PlacementSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Placements | WINORA Tech Academy",
  description: "95% placement rate. 500+ hiring partners. WINORA graduates work at Google, Amazon, TCS, Infosys and top global tech firms.",
};

const process = [
  { step: "01", title: "Profile Building", body: "Resume, LinkedIn, GitHub, and portfolio polish — tailored for your target companies." },
  { step: "02", title: "Mock Interviews", body: "Weekly mock technical and HR rounds with industry interviewers. Real feedback, not scripts." },
  { step: "03", title: "Aptitude Training", body: "Structured preparation for MCQs, reasoning, and coding challenges used by top firms." },
  { step: "04", title: "Company Connects", body: "Direct introductions to hiring managers at our 500+ partner companies. No cold applying." },
];

export default function PlacementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-white flex items-end pb-20 pt-40 overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">95% Placement Rate</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 mb-6 max-w-4xl leading-[1.05]">
            We Don&apos;t Stop Until{" "}
            <span className="text-orange-500">You&apos;re Placed.</span>
          </h1>
          <p className="text-lg text-foreground/50 font-light max-w-xl leading-relaxed">
            Our placement infrastructure is as rigorous as our curriculum. 500+ hiring partners, structured interview prep, and direct recruiter connects.
          </p>
        </div>
      </section>

      {/* Placement process */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-16 max-w-xl">
            A structured path from <span className="text-orange-500">learning to earning.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-5xl font-black text-navy-900/8 mb-4">{p.step}</div>
                <h3 className="text-base font-bold text-navy-900 mb-2 group-hover:text-orange-500 transition-colors">{p.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies + stats */}
      <PlacementSection />

      {/* Testimonials */}
      <TestimonialsSection testimonials={[]} />

      {/* CTA */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Your offer letter is waiting.</h2>
          <p className="text-lg text-white/50 font-light mb-10">Enroll today and activate our full placement support system.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/30">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
