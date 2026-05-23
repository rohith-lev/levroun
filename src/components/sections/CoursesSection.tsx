'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, BarChart2, ArrowRight, Sparkles, TrendingUp, Star } from 'lucide-react';
import { courses, CATEGORIES, type Course, type CourseCategory } from '@/data/courses';
import CourseModal from './CourseModal';

const CATEGORY_ICONS: Record<CourseCategory, string> = {
  'Development': '⚡',
  'Design': '🎨',
  'Cloud & Security': '☁️',
  'AI & Data': '🧠',
  'Marketing': '📈',
  'Programming': '💻',
};

const LEVEL_COLOR: Record<string, string> = {
  Beginner: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Intermediate: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Advanced: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
};

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');
  const [search, setSearch] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    let list = courses;
    if (activeCategory !== 'All') list = list.filter(c => c.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.technologies.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCategory, search]);

  return (
    <>
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />

      <section id="programs" className="relative py-24 md:py-36 bg-[#071120] overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '72px 72px',
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          {/* ── SECTION HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mb-20"
          >
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                30 Programs · 6 Categories · 100% Placement Support
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
              Programs That{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Build Real Careers.
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-orange-500/60 via-orange-400 to-transparent origin-left"
                />
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Industry-focused training programs designed to help students master modern technologies,
              build real-world projects, and launch successful careers in tech.
            </p>
          </motion.div>

          {/* ── SEARCH ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-md mb-8"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search courses, technologies…"
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
            />
          </motion.div>

          {/* ── CATEGORY FILTERS ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-14"
          >
            {(['All', ...CATEGORIES] as const).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveCategory(cat as CourseCategory | 'All')}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {cat !== 'All' && <span className="text-base">{CATEGORY_ICONS[cat as CourseCategory]}</span>}
                  {cat}
                  {cat !== 'All' && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-500'}`}>
                      {courses.filter(c => c.category === cat).length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── RESULTS COUNT ── */}
          <AnimatePresence>
            {search && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-slate-500 mb-6"
              >
                {filtered.length} result{filtered.length !== 1 ? 's' : ''} for{' '}
                <span className="text-orange-400 font-medium">&ldquo;{search}&rdquo;</span>
              </motion.p>
            )}
          </AnimatePresence>

          {/* ── COURSE CARDS GRID ── */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  index={i}
                  onClick={() => setSelectedCourse(course)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-24 gap-4"
              >
                <div className="text-5xl mb-2">🔍</div>
                <p className="text-slate-400 text-sm">No programs found for <strong className="text-white">&ldquo;{search}&rdquo;</strong></p>
                <button
                  onClick={() => { setSearch(''); setActiveCategory('All'); }}
                  className="text-xs text-orange-400 hover:text-orange-300 underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── BOTTOM CTA BANNER ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 relative rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#0f1f3d] to-[#0B1628]" />
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 mb-5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70">100% Placement Support</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  Not sure which program is right for you?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  Talk to our career counselors. Get a free 30-minute consultation and find the perfect program for your goals.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Get Free Counseling
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent('Hi, I need help choosing the right program at Winora Tech Academy.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-semibold transition-all"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

/* ─── Individual Course Card ─── */
function CourseCard({ course, index, onClick }: { course: Course; index: number; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
    >
      {/* Top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 flex-1 flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{course.icon}</span>
            <div className="flex flex-wrap gap-1.5">
              {course.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/25">
                  <Star className="w-2.5 h-2.5" /> Featured
                </span>
              )}
              {course.trending && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  <TrendingUp className="w-2.5 h-2.5" /> Trending
                </span>
              )}
            </div>
          </div>
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${LEVEL_COLOR[course.level]}`}>
            {course.level}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-orange-100 transition-colors">
          {course.name}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{course.description}</p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 border border-white/8 text-slate-400"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 border border-white/8 text-slate-500">
              +{course.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/8">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-orange-500/70" />
              {course.duration.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 className="w-3 h-3 text-orange-500/70" />
              {course.level}
            </span>
          </div>
          <motion.span
            className="flex items-center gap-1 text-xs font-semibold text-orange-400 group-hover:text-orange-300"
            whileHover={{ x: 2 }}
          >
            View Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
