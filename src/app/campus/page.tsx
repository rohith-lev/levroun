import type { Metadata } from "next";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus | WINORA Tech Academy",
  description: "Explore our 1,100 sq ft premium tech campus in Erode. World-class infrastructure designed for focused learning.",
};

const amenities = [
  { icon: "🖥️", label: "High-End Labs", desc: "Latest hardware & software setups" },
  { icon: "📡", label: "Gigabit Wi-Fi", desc: "Enterprise-grade connectivity" },
  { icon: "🎤", label: "Seminar Studio", desc: "Industry talks & workshops" },
  { icon: "☕", label: "Collaboration Lounge", desc: "Breakout spaces for team work" },
  { icon: "📚", label: "Resource Library", desc: "Books, courses & dev tools" },
  { icon: "🌿", label: "Focus Zones", desc: "Quiet areas for deep work" },
];

const stats = [
  { value: "1,100", unit: "sq ft", label: "Premium Campus Space" },
  { value: "50+", unit: "", label: "Workstations" },
  { value: "24/7", unit: "", label: "Lab Access" },
  { value: "100%", unit: "", label: "Air Conditioned" },
];

export default function CampusPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-navy-900 flex items-end pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Erode · Tamil Nadu</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.05]">
            A Campus Built for{" "}
            <span className="text-orange-500">World-Class Work.</span>
          </h1>
          <p className="text-lg text-white/50 font-light max-w-xl leading-relaxed">
            1,100 sq ft of premium learning infrastructure in Erode&apos;s tech corridor.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-navy-900">{s.value}<span className="text-orange-500 text-2xl">{s.unit}</span></div>
                <div className="text-sm text-foreground/50 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfrastructureSection />

      {/* Amenities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-4 max-w-2xl">
            Everything You Need to <span className="text-orange-500">Go Deep.</span>
          </h2>
          <p className="text-lg text-foreground/50 font-light mb-16 max-w-xl">Engineered for turning beginners into professionals at speed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a) => (
              <div key={a.label} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-orange-500/10 transition-all duration-300 group">
                <span className="text-3xl mb-5 block">{a.icon}</span>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-orange-500 transition-colors">{a.label}</h3>
                <p className="text-sm text-foreground/50">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-6">Visit Us in <span className="text-orange-500">Erode.</span></h2>
            <div className="space-y-6 mb-10">
              {[
                { label: "Address", value: "54/7, TVR Corner, Perundurai Old Busstand, Erode(DT), 638052" },
                { label: "Phone", value: "+91 89398 06110 · +91 93637 57078" },
                { label: "Hours", value: "Mon–Sat · 9:00 AM – 8:00 PM" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs font-bold uppercase tracking-widest text-navy-900/40 mb-1">{item.label}</div>
                  <div className="text-base font-medium text-navy-900">{item.value}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-900/90 transition-all">
              Book a Campus Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-80 rounded-3xl bg-navy-900/5 border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl shadow-orange-500/30">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="font-bold text-navy-900">WINORA Tech Academy</p>
              <p className="text-sm text-foreground/50">Erode, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
