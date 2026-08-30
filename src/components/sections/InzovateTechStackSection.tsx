'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import { TECH_STACK, TechStackItem } from '@/data/inzovateData';

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'AI & Data' | 'Cloud & Mobile';

export default function InzovateTechStackSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const categories: CategoryFilter[] = ['All', 'Frontend', 'Backend', 'AI & Data', 'Cloud & Mobile'];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" /> Robust &amp; Scalable Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Built with Modern,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Battle-Tested Technologies
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We architect high-concurrency systems using industry-standard tools, frameworks, and cloud infrastructure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white border border-slate-300 text-slate-500 hover:text-blue-700 hover:border-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {filteredTech.map((tech: TechStackItem) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${tech.gradient} p-[1.5px] mb-3 group-hover:scale-110 transition-transform shadow-sm`}>
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                  {tech.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
