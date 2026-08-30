'use client';

import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INZOVATE_SERVICES, ServiceItem } from '@/data/inzovateData';
import { useDemoModal } from '@/context/DemoModalContext';

export default function InzovateServicesSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-300/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>End-to-End IT Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Engineering Excellence for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Modern Enterprises
            </span>
          </h2>

          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            From intuitive UI/UX and custom web solutions to AI automation and cloud DevOps, we build software that drives real revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INZOVATE_SERVICES.map((service: ServiceItem) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative h-full bg-white/90 backdrop-blur-xl border border-slate-200/90 hover:border-blue-400 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} p-[1.5px] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-slate-100 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openDemoModal(service.title)}
                  className="w-full py-3 rounded-xl bg-slate-50 hover:bg-blue-600 border border-slate-200/90 hover:border-transparent text-slate-700 hover:text-white font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn transform active:scale-95"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
