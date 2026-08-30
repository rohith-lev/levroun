'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { AnimatedCounterCard } from '@/components/ui/AnimatedCounterCard';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { useDemoModal } from '@/context/DemoModalContext';

export default function InzovateHeroSection() {
  const { openDemoModal } = useDemoModal();
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white text-slate-900">
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50 pointer-events-none" />
      {/* Radiant light orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-300/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold mb-8 shadow-sm transition-all duration-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Next-Generation IT Solutions &amp; AI Engineering</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.06] max-w-5xl mx-auto">
          Building What's Next with{' '}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            LEVROUN INDIA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-slate-500 text-base sm:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
          Custom software, AI solutions, and in-house digital products for startups and enterprises — built by a team obsessed with what comes next.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={() => openDemoModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-3 transform active:scale-95 group"
          >
            Request Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-semibold text-base transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            Explore Services
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Enterprise-Grade Security
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" /> High-Performance Delivery
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-500" /> Global Client Reach
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <AnimatedCounterCard value="94" label="Automation Coverage" suffix="%" />
          <AnimatedCounterCard value="12" label="Hours Saved / Week" suffix="h+" />
          <AnimatedCounterCard value="50" label="App Integrations" suffix="+" />
          <AnimatedCounterCard value="24" label="Dedicated Tech Support" suffix="/7" />
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full mt-16 pt-6 border-t border-slate-200">
        <TechMarquee />
      </div>
    </section>
  );
}
