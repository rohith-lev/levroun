'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, BarChart2, CheckCircle2, Loader2, MessageCircle, Award, Briefcase, Layers } from 'lucide-react';
import type { Course } from '@/data/courses';
import toast from 'react-hot-toast';

interface Props {
  course: Course | null;
  onClose: () => void;
}

const WHATSAPP_NUMBER = '919999999999'; // Replace with real number

export default function CourseModal({ course, onClose }: Props) {
  const [tab, setTab] = useState<'overview' | 'inquire'>('overview');
  const [form, setForm] = useState({
    name: '', phone: '', email: '', qualification: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Reset state when a new course opens
  useEffect(() => {
    setTab('overview');
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '', qualification: '', message: '' });
  }, [course?.id]);

  // Lock body scroll while open
  useEffect(() => {
    if (course) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [course]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!course) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `Course Inquiry: ${course.name}\n\nQualification: ${form.qualification}\n\nMessage: ${form.message}`,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
      toast.success('Inquiry submitted! We\'ll contact you soon.');
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const whatsappMsg = course
    ? encodeURIComponent(`Hi, I'm interested in the ${course.name} program at Winora Tech Academy. Could you share more details?`)
    : '';

  return (
    <AnimatePresence>
      {course && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-xl flex flex-col bg-[#0B1628] border-l border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex-shrink-0 px-6 pt-6 pb-4 border-b border-white/10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{course.icon}</span>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-1">
                      {course.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                          Featured
                        </span>
                      )}
                      {course.trending && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-white leading-tight">{course.name}</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{course.category}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <BarChart2 className="w-3.5 h-3.5 text-orange-400" />
                  {course.level}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-5 bg-white/5 rounded-xl p-1">
                {(['overview', 'inquire'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-200 capitalize ${
                      tab === t
                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {t === 'overview' ? 'Course Details' : 'Inquire Now'}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {tab === 'overview' ? (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 space-y-6"
                  >
                    {/* Overview */}
                    <div>
                      <p className="text-sm text-slate-300 leading-relaxed">{course.overview}</p>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" /> Technologies Covered
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {course.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-orange-500/30 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Learning Outcomes
                      </h3>
                      <ul className="space-y-2.5">
                        {course.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                              <CheckCircle2 className="w-2.5 h-2.5 text-orange-400" />
                            </span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { icon: Award, label: 'Certification', value: course.certificationInfo },
                        { icon: Briefcase, label: 'Internship', value: course.internshipSupport },
                        { icon: Layers, label: 'Live Projects', value: course.liveProjects },
                        { icon: BarChart2, label: 'Prerequisites', value: course.prerequisites },
                      ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="p-4 rounded-xl bg-white/3 border border-white/8">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icon className="w-3.5 h-3.5 text-orange-400" />
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{label}</span>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setTab('inquire')}
                        className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                      >
                        Apply for This Program
                      </button>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-semibold transition-all duration-200"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="inquire"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="p-6"
                  >
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center py-16 gap-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-2">
                          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Inquiry Sent!</h3>
                        <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                          Thanks for your interest in <strong className="text-white">{course.name}</strong>. Our team will reach out within 24 hours.
                        </p>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-semibold transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Chat on WhatsApp
                        </a>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-6">
                          <h3 className="text-base font-bold text-white mb-1">Interested in this Program?</h3>
                          <p className="text-xs text-slate-400">Fill out the form below and our admissions team will reach you within 24 hours.</p>
                        </div>

                        {/* Selected course (read-only) */}
                        <div className="px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-sm text-orange-400 font-medium">
                          📚 {course.name}
                        </div>

                        {[
                          { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                          { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 9999 999 999', required: true },
                          { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
                        ].map(({ id, label, type, placeholder, required }) => (
                          <div key={id} className="space-y-1.5">
                            <label className="text-xs font-medium text-slate-400">{label} {required && <span className="text-orange-500">*</span>}</label>
                            <input
                              type={type}
                              value={form[id as keyof typeof form]}
                              onChange={(e) => setForm(f => ({ ...f, [id]: e.target.value }))}
                              placeholder={placeholder}
                              required={required}
                              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
                            />
                          </div>
                        ))}

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-400">Current Qualification</label>
                          <select
                            value={form.qualification}
                            onChange={(e) => setForm(f => ({ ...f, qualification: e.target.value }))}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#0B1628]">Select qualification</option>
                            {['10th Grade', '12th Grade', 'Diploma', 'Bachelor\'s Degree', 'Master\'s Degree', 'Working Professional'].map(q => (
                              <option key={q} value={q} className="bg-[#0B1628]">{q}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-400">Message (Optional)</label>
                          <textarea
                            value={form.message}
                            onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                            placeholder="Tell us about your goals or questions..."
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all resize-none"
                          />
                        </div>

                        <div className="flex gap-3 pt-2">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-sm font-semibold transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2"
                          >
                            {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</> : 'Submit Inquiry'}
                          </button>
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-semibold transition-all"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </a>
                        </div>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
