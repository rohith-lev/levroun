'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { INZOVATE_SERVICES } from '@/data/inzovateData';
import { SERVICES } from '@/data/seo-data';
import InzovateServicesSection from '@/components/sections/InzovateServicesSection';
import InzovateContactSection from '@/components/sections/InzovateContactSection';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export default function ServiceDetailPage() {
  const params = useParams();
  const rawSlug = params?.service as string;
  const { openDemoModal } = useDemoModal();

  // Find matching service in INZOVATE_SERVICES or SEO SERVICES
  const service = INZOVATE_SERVICES.find(
    (s) => s.id === rawSlug || s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === rawSlug
  ) || INZOVATE_SERVICES.find(s => s.id.includes(rawSlug) || rawSlug.includes(s.id));

  const seoService = SERVICES.find(s => s.slug === rawSlug);

  // If not found, render the main services list gracefully instead of 500 error
  if (!service && !seoService) {
    return (
      <div className="pt-16">
        <InzovateServicesSection />
        <InzovateContactSection />
      </div>
    );
  }

  const title = service?.title || seoService?.name || 'Enterprise Service';
  const desc = service?.fullDesc || service?.shortDesc || `Professional ${title} solutions by Inzovate Technologies Pvt. Ltd. Engineered for maximum ROI, security, and performance.`;
  const features = service?.features || [
    'Custom Architecture & Engineering',
    'Scalable Cloud Infrastructure',
    '24/7 Managed Operational Support',
    'Enterprise Compliance & Security'
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Inzovate Enterprise Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              {desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openDemoModal(title)}
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2 transform active:scale-95"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+919342008797"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition-all"
              >
                Call +91 93420 08797
              </a>
            </div>
          </div>
        </div>

        {/* Features & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Key Deliverables</h2>
            </div>
            <div className="space-y-4">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Why Choose Inzovate</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                CIN Registered Enterprise (U62011TZ2025PTC036329)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Senior full-stack & AI engineering leads
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                100% Code Ownership & IP Protection
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Cloud-native architecture with 99.9% SLA uptime
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <InzovateContactSection />
      </div>
    </div>
  );
}
