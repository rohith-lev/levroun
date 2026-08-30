'use client';

import React from 'react';
import { Sparkles, CheckCircle2, Mail } from 'lucide-react';
import { FadeUp } from '@/components/ui/FadeUp';

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export interface LeaderMember {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  focusAreas: string[];
  gradient: string;
  avatarBg: string;
  initials: string;
  linkedin?: string;
  email?: string;
}

export const LEADERSHIP_TEAM: LeaderMember[] = [
  {
    name: 'Rohith T',
    role: 'Founder & CEO',
    subtitle: 'Strategic Vision & Technology Direction',
    bio: 'Leads LEVROUN INDIA with a mission to build world-class custom software, AI solutions, and proprietary digital products for startups and enterprises.',
    focusAreas: ['Corporate Vision', 'AI Strategy', 'Product Development'],
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    avatarBg: 'from-blue-500 to-indigo-700',
    initials: 'RT',
    linkedin: 'https://in.linkedin.com/in/rohith-t-4a9b73294',
    email: 'rohith@levroun.com',
  },
  {
    name: 'Chitra Priya G',
    role: 'Co-Founder & COO',
    subtitle: 'Operations & Client Excellence',
    bio: 'Drives operational efficiency, delivery frameworks, and client success across all LEVROUN INDIA engagements and digital product launches.',
    focusAreas: ['Operations Strategy', 'Client Success', 'Delivery Excellence'],
    gradient: 'from-indigo-600 via-purple-600 to-pink-500',
    avatarBg: 'from-indigo-600 to-purple-800',
    initials: 'CG',
    linkedin: 'https://levroun.com',
    email: 'chitra@levroun.com',
  },
  {
    name: 'Logu Prasath P',
    role: 'Co-Founder & CFO',
    subtitle: 'Finance & Investor Relations',
    bio: 'Oversees financial planning, resource allocation, and strategic growth investments to scale LEVROUN INDIA into a global software powerhouse.',
    focusAreas: ['Financial Strategy', 'Investor Relations', 'Growth Planning'],
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    avatarBg: 'from-teal-500 to-emerald-700',
    initials: 'LP',
    linkedin: 'https://www.linkedin.com/in/logu-prasath-p-5ab7762b5',
    email: 'logu@levroun.com',
  },
  {
    name: 'Sarvesh M',
    role: 'Co-Founder & CMO',
    subtitle: 'Marketing & Brand Growth',
    bio: 'Leads LEVROUN INDIA\'s brand strategy, market expansion, and digital marketing campaigns to drive awareness and client acquisition.',
    focusAreas: ['Brand Strategy', 'Digital Marketing', 'Market Expansion'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    avatarBg: 'from-amber-500 to-orange-700',
    initials: 'SM',
    linkedin: 'https://levroun.com',
    email: 'sarvesh@levroun.com',
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Visionary Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Leadership Team
          </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 text-lg sm:text-xl font-bold">
            Meet the visionaries driving innovation
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Our executive leadership combines deep technical mastery, strategic foresight, and an unyielding commitment to client success.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <FadeUp key={member.name} delay={idx * 0.1}>
              <div className="group relative bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between h-full overflow-hidden">
                {/* Top Glowing Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />

                <div>
                  {/* Avatar & Role Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarBg} p-[2px] shadow-lg shadow-cyan-500/10 group-hover:scale-105 transition-transform`}>
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-black text-xl text-white tracking-wider">
                        {member.initials}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold tracking-wide">
                      {member.role}
                    </span>
                  </div>

                  {/* Leader Name & Subtitle */}
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-4">{member.subtitle}</p>

                  {/* Bio */}
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Focus Areas */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Key Focus</span>
                    {member.focusAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Socials / Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-slate-300 transition-colors">
                    LEVROUN INDIA
                  </span>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
