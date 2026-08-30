"use client";

import React from 'react';

interface MarqueeItem {
  name: string;
  color: string;       // dot/glow color class
  bg: string;          // pill bg class
  border: string;      // border color class
  textColor: string;   // text color class
}

interface TechMarqueeProps {
  items?: MarqueeItem[];
}

const ROW1: MarqueeItem[] = [
  { name: 'React.js',     color: 'bg-cyan-400',      bg: 'bg-cyan-500/10',     border: 'border-cyan-500/30',     textColor: 'text-cyan-300' },
  { name: 'Next.js 14',   color: 'bg-white',         bg: 'bg-white/10',        border: 'border-white/20',        textColor: 'text-white' },
  { name: 'TypeScript',   color: 'bg-blue-400',      bg: 'bg-blue-500/10',     border: 'border-blue-500/30',     textColor: 'text-blue-300' },
  { name: 'Tailwind CSS', color: 'bg-sky-400',       bg: 'bg-sky-500/10',      border: 'border-sky-500/30',      textColor: 'text-sky-300' },
  { name: 'Node.js',      color: 'bg-green-400',     bg: 'bg-green-500/10',    border: 'border-green-500/30',    textColor: 'text-green-300' },
  { name: 'Python AI',    color: 'bg-yellow-400',    bg: 'bg-yellow-500/10',   border: 'border-yellow-500/30',   textColor: 'text-yellow-300' },
  { name: 'AWS Cloud',    color: 'bg-orange-400',    bg: 'bg-orange-500/10',   border: 'border-orange-500/30',   textColor: 'text-orange-300' },
  { name: 'Docker',       color: 'bg-blue-300',      bg: 'bg-blue-400/10',     border: 'border-blue-400/30',     textColor: 'text-blue-200' },
];

const ROW2: MarqueeItem[] = [
  { name: 'MongoDB',      color: 'bg-emerald-400',   bg: 'bg-emerald-500/10',  border: 'border-emerald-500/30',  textColor: 'text-emerald-300' },
  { name: 'PostgreSQL',   color: 'bg-indigo-400',    bg: 'bg-indigo-500/10',   border: 'border-indigo-500/30',   textColor: 'text-indigo-300' },
  { name: 'Express.js',   color: 'bg-gray-300',      bg: 'bg-gray-400/10',     border: 'border-gray-400/30',     textColor: 'text-gray-300' },
  { name: 'PyTorch',      color: 'bg-red-400',       bg: 'bg-red-500/10',      border: 'border-red-500/30',      textColor: 'text-red-300' },
  { name: 'React Native', color: 'bg-cyan-300',      bg: 'bg-cyan-400/10',     border: 'border-cyan-400/30',     textColor: 'text-cyan-200' },
  { name: 'Flutter',      color: 'bg-blue-300',      bg: 'bg-blue-400/10',     border: 'border-blue-300/30',     textColor: 'text-blue-200' },
  { name: 'Kubernetes',   color: 'bg-violet-400',    bg: 'bg-violet-500/10',   border: 'border-violet-500/30',   textColor: 'text-violet-300' },
  { name: 'TensorFlow',   color: 'bg-amber-400',     bg: 'bg-amber-500/10',    border: 'border-amber-500/30',    textColor: 'text-amber-300' },
];

function MarqueeRow({ items, reverse = false }: { items: MarqueeItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="flex gap-3 w-max items-center" style={{
      animation: `marquee${reverse ? 'Reverse' : ''} 30s linear infinite`,
    }}>
      {doubled.map((item, i) => (
        <div
          key={`${item.name}-${i}`}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${item.bg} ${item.border}`}
        >
          <span className={`w-2 h-2 rounded-full shadow-sm ${item.color}`}
            style={{ boxShadow: `0 0 6px currentColor` }}
          />
          <span className={`text-xs font-semibold tracking-wide ${item.textColor}`}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export const TechMarquee: React.FC<TechMarqueeProps> = () => {
  return (
    <div className="overflow-hidden relative w-full py-6 bg-[#080C14] border-y border-white/5">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080C14] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080C14] to-transparent z-10 pointer-events-none" />

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-violet-500/3 pointer-events-none" />

      <div className="space-y-3">
        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
