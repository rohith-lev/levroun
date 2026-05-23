"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";

const categories = [
  {
    id: "fullstack",
    number: "01",
    title: "Full Stack Development",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-500",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    border: "border-blue-500/20 hover:border-blue-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    programs: [
      "MERN Stack Development",
      "Next.js Development",
      "Node.js Backend Engineering",
      "MongoDB & Database Systems",
      "REST API Development",
    ],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend Development",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "bg-purple-500",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    border: "border-purple-500/20 hover:border-purple-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    programs: [
      "React.js Development",
      "Advanced JavaScript",
      "Modern UI/UX Engineering",
      "Tailwind CSS & Responsive Design",
      "Framer Motion Animations",
    ],
  },
  {
    id: "ai",
    number: "03",
    title: "AI & Machine Learning",
    color: "from-orange-500/20 to-orange-600/5",
    accent: "bg-orange-500",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    border: "border-orange-500/20 hover:border-orange-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    programs: [
      "AI Fundamentals",
      "Machine Learning with Python",
      "Generative AI Tools",
      "Prompt Engineering",
      "AI App Development",
    ],
  },
  {
    id: "python",
    number: "04",
    title: "Python Development",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "bg-emerald-500",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    programs: [
      "Python Fundamentals",
      "Django Development",
      "Flask Backend Development",
      "Automation with Python",
      "Data Analysis",
    ],
  },
  {
    id: "uiux",
    number: "05",
    title: "UI/UX Design",
    color: "from-pink-500/20 to-pink-600/5",
    accent: "bg-pink-500",
    glow: "shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    border: "border-pink-500/20 hover:border-pink-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    programs: [
      "UI Design Fundamentals",
      "Figma Mastery",
      "Mobile App Design",
      "Web Design Systems",
      "Product Design Thinking",
    ],
  },
  {
    id: "marketing",
    number: "06",
    title: "Digital Marketing",
    color: "from-yellow-500/20 to-yellow-600/5",
    accent: "bg-yellow-500",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    border: "border-yellow-500/20 hover:border-yellow-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    programs: [
      "Social Media Marketing",
      "SEO Optimization",
      "Performance Marketing",
      "Branding & Content Strategy",
      "AI Marketing Tools",
    ],
  },
  {
    id: "cyber",
    number: "07",
    title: "Cyber Security",
    color: "from-red-500/20 to-red-600/5",
    accent: "bg-red-500",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    border: "border-red-500/20 hover:border-red-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    programs: [
      "Ethical Hacking Basics",
      "Network Security",
      "Cyber Security Fundamentals",
      "Penetration Testing",
      "Security Best Practices",
    ],
  },
  {
    id: "mobile",
    number: "08",
    title: "Mobile App Development",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "bg-cyan-500",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    programs: [
      "React Native Development",
      "Flutter App Development",
      "Android App Development",
      "Cross Platform Development",
    ],
  },
  {
    id: "cloud",
    number: "09",
    title: "Cloud & DevOps",
    color: "from-indigo-500/20 to-indigo-600/5",
    accent: "bg-indigo-500",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    border: "border-indigo-500/20 hover:border-indigo-500/50",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    programs: [
      "Git & GitHub",
      "Docker Fundamentals",
      "CI/CD Basics",
      "Cloud Deployment",
      "AWS Fundamentals",
    ],
  },
];

const specialPrograms = {
  internship: {
    label: "Internship Programs",
    icon: "🎓",
    items: ["15-Day Internship", "30-Day Internship", "45-Day Industrial Training"],
  },
  placement: {
    label: "Placement-Oriented",
    icon: "🚀",
    items: ["Mock Interviews", "Resume Building", "Aptitude Training", "Real Project Experience", "Portfolio Development"],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

export default function ProgramsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? categories.filter((c) => c.id === activeCategory)
    : categories;

  return (
    <Section id="programs" background="white">
      {/* Header */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
            9 Tracks · 60+ Modules
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-navy-900 mb-6">
          Programs Built for the <br />
          <span className="text-orange-500">Real World.</span>
        </h2>
        <p className="text-lg text-foreground/60 font-light leading-relaxed">
          From first principles to production-grade systems. Every program is curated by industry practitioners and mapped to actual hiring requirements.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
            activeCategory === null
              ? "bg-navy-900 text-white border-navy-900"
              : "bg-transparent text-navy-900/60 border-navy-900/20 hover:border-navy-900/50 hover:text-navy-900"
          }`}
        >
          All Programs
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-navy-900 text-white border-navy-900"
                : "bg-transparent text-navy-900/60 border-navy-900/20 hover:border-navy-900/50 hover:text-navy-900"
            }`}
          >
            {cat.number}. {cat.title.split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      {/* Program Cards Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <AnimatePresence mode="popLayout">
          {filtered.map((cat, i) => (
            <motion.div
              key={cat.id}
              layout
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border bg-gradient-to-br ${cat.color} ${cat.border} p-6 transition-all duration-300 hover:-translate-y-1 ${cat.glow} hover:shadow-xl cursor-pointer`}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div className={`p-2.5 rounded-xl ${cat.accent} bg-opacity-15 border border-white/10 text-white`}>
                  {cat.icon}
                </div>
                <span className="text-3xl font-black text-navy-900/8 select-none">
                  {cat.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-navy-900 mb-4 group-hover:text-navy-900 tracking-tight">
                {cat.title}
              </h3>

              {/* Divider */}
              <div className={`w-8 h-[2px] ${cat.accent} mb-4 transition-all duration-300 group-hover:w-16`} />

              {/* Programs list */}
              <ul className="space-y-2">
                {cat.programs.map((prog) => (
                  <li key={prog} className="flex items-center gap-2.5 text-sm text-navy-900/70">
                    <span className={`w-1 h-1 rounded-full ${cat.accent} shrink-0`} />
                    {prog}
                  </li>
                ))}
              </ul>

              {/* Badge */}
              <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy-900/40">
                  {cat.programs.length} Modules
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${cat.accent} text-white bg-opacity-90`}>
                  Enroll Now
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Special Programs Banner */}
      <div className="rounded-3xl bg-navy-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 p-10 md:p-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              Special Programs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {Object.values(specialPrograms).map((sp) => (
              <div key={sp.label}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{sp.icon}</span>
                  <h4 className="text-lg font-bold text-white tracking-tight">{sp.label}</h4>
                </div>
                <ul className="space-y-3">
                  {sp.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 group/item">
                      <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 group-hover/item:bg-orange-500/40 transition-colors duration-200">
                        <svg className="w-2.5 h-2.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm text-white/70 group-hover/item:text-white transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-white/50 text-sm font-light max-w-sm">
              100% placement support with real industry mentors, mock interview panels, and direct company connects.
            </p>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 cursor-pointer whitespace-nowrap">
              Explore Special Programs →
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
