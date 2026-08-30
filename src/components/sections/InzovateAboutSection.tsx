'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { VISION_CARDS, WHY_CHOOSE_INZOVATE } from '@/data/inzovateData';
import { FadeUp } from '@/components/ui/FadeUp';
import LeadershipSection from '@/components/sections/LeadershipSection';

export default function InzovateAboutSection() {
  return (
    <>
      <section id="about" className="relative py-28 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Driven By Engineering Passion
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              About LEVROUN INDIA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Building What's Next.
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              LEVROUN INDIA is a custom software and AI solutions company dedicated to building scalable digital products for startups and enterprises. From Erode, Tamil Nadu — reaching India and beyond.
            </p>
          </div>

          {/* Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VISION_CARDS.map((vCard, idx) => {
              const IconComp = vCard.icon;
              return (
                <FadeUp key={vCard.title} delay={idx * 0.1}>
                  <div className="group relative bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100 flex flex-col h-full overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${vCard.gradient}`} />
                    <div>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${vCard.gradient} p-[1.5px] mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                          <IconComp className="w-7 h-7 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {vCard.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{vCard.description}</p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Startups & Enterprises Choose LEVROUN INDIA</h3>
              <p className="text-slate-500 text-sm">
                We combine AI-first engineering with a builder's mindset to deliver exceptional software products and digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE_INZOVATE.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 space-y-3 group">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.gradient} p-[1.5px] shadow-sm`}>
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                        <ItemIcon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <LeadershipSection />
    </>
  );
}

