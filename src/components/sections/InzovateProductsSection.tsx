'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Package, Sparkles } from 'lucide-react';
import { INZOVATE_PRODUCTS } from '@/data/inzovateData';
import { useDemoModal } from '@/context/DemoModalContext';

export default function InzovateProductsSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section id="products" className="relative py-28 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white text-slate-900 overflow-hidden border-y border-slate-200/80">
      {/* Background ambient lighting & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-300/20 via-purple-300/20 to-blue-300/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-300/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Package className="w-4 h-4 text-indigo-600" />
            <span>Ready-to-Deploy Software Products</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            The LEVROUN Product Suite for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600">
              High-Growth Companies
            </span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            From our flagship SmartOps AI to billing, CRM, and ERP — streamline every corner of your business with purpose-built software.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INZOVATE_PRODUCTS.map((prod) => {
            const IconComp = prod.icon;
            return (
              <div
                key={prod.title}
                className="group relative bg-white/90 backdrop-blur-xl border border-slate-200/90 hover:border-indigo-400 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${prod.gradient}`} />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${prod.gradient} p-[2px] shadow-md group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                        <IconComp className="w-7 h-7 text-indigo-600" />
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold tracking-wide">
                      Enterprise SaaS
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-indigo-600 text-xs font-bold tracking-wider uppercase mt-1 mb-4">
                    {prod.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Points grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                    {prod.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openDemoModal(prod.title)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group/btn transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Product Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
