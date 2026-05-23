import type { Metadata } from "next";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import Link from "next/link";
import { ArrowRight, Star, Award, TrendingUp } from "lucide-react";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/lib/models/Testimonial";

export const metadata: Metadata = {
  title: "Highlights & Insights | WINORA Tech Academy",
  description: "Discover student success stories, academy statistics, and frequently asked questions at WINORA Tech Academy.",
};

const highlights = [
  { icon: Award, title: "Industry Recognition", body: "Ranked among the top tech bootcamps in South India for outcome-based learning." },
  { icon: Star, title: "Student Satisfaction", body: "4.9/5 average rating across all intensive training programs and internships." },
  { icon: TrendingUp, title: "Career Growth", body: "Average 3x salary increase for working professionals who upskill with us." },
];

export default async function HighlightsPage() {
  await connectDB();
  const testimonialDocs = await Testimonial.find({ isVisible: true }).sort({ order: 1 }).lean();
  const serializedTestimonials = testimonialDocs.map(doc => ({
    _id: doc._id.toString(),
    name: doc.name,
    role: doc.role,
    story: doc.story,
    image: doc.image,
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-navy-900 flex items-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Success Stories & Insights</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.05]">
            Proof of <span className="text-orange-500">Work.</span>
          </h1>
          <p className="text-lg text-white/50 font-light max-w-2xl leading-relaxed">
            We let our outcomes speak for themselves. Discover the stories of students who transformed their careers at WINORA.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-orange-500/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-navy-900/5 flex items-center justify-center mb-6 group-hover:bg-orange-500/10 transition-colors">
                  <h.icon className="w-6 h-6 text-navy-900 group-hover:text-orange-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{h.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="py-12 bg-white">
        <TestimonialsSection testimonials={serializedTestimonials} />
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Ready to write your own story?</h2>
          <p className="text-lg text-foreground/50 font-light mb-10">Join thousands of successful graduates who accelerated their tech careers with WINORA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-900/90 transition-all shadow-xl shadow-navy-900/20">
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 font-bold rounded-full hover:bg-gray-100 transition-all border border-gray-200">
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
