'use client';

import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { INZOVATE_TESTIMONIALS } from '@/data/inzovateData';
import { FadeUp } from '@/components/ui/FadeUp';

export default function InzovateTestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-4 h-4 fill-amber-500" /> Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Trusted by Industry Leaders &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
              Growing Enterprises
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Here is what company founders, directors, and business owners say about partnering with LEVROUN INDIA.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INZOVATE_TESTIMONIALS.map((item, idx) => (
            <FadeUp key={item.name} delay={idx * 0.08}>
              <div className="group relative bg-white border border-slate-200 hover:border-amber-400 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100 flex flex-col justify-between h-full">
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-amber-200 transition-colors mb-4" />
                  <p className="text-slate-600 text-sm italic leading-relaxed mb-8">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.role}, <span className="text-slate-700">{item.company}</span>
                    </p>
                  </div>
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-100 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-slate-400 hover:text-amber-600 transition-colors"
                      title="Visit Client Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
