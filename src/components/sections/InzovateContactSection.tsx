'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { FadeUp } from '@/components/ui/FadeUp';

export default function InzovateContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: 'Project Inquiry', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please enter your name, email, and contact number.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Subject: ${formData.subject}${formData.company ? `, Company: ${formData.company}` : ''}] ${formData.message || 'No additional details provided.'}`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        toast.success('Your message has been sent to LEVROUN INDIA!');
        setFormData({ name: '', email: '', phone: '', company: '', subject: 'Project Inquiry', message: '' });
      } else {
        toast.error(data.error || 'Failed to submit form.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" /> Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Get In Touch With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              LEVROUN INDIA
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Have a project in mind or need a consultation? Reach out and let's build what's next together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Head Office */}
            <FadeUp delay={0}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Headquarters — Erode, Tamil Nadu</p>
                    <p className="text-slate-700 text-sm font-semibold">LEVROUN INDIA</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Erode, Tamil Nadu, India<br />
                      Tamil Nadu → India → Global
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Tech Campus */}
            <FadeUp delay={0.05}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">Strategy Call Availability</p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      30-min free consultation<br />
                      Monday – Friday: 09:00 AM – 05:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Email */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Email Us</p>
                    <a href="mailto:hello@levroun.com" className="text-slate-700 text-sm font-semibold hover:text-blue-600 transition-colors">
                      hello@levroun.com
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Phone */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Call / WhatsApp</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <a href="tel:+918939806110" className="text-slate-700 text-sm font-semibold hover:text-blue-600 transition-colors">
                        +91 8939806110
                      </a>
                      <span className="hidden sm:inline text-slate-300">·</span>
                      <a href="https://wa.me/918939806110" target="_blank" rel="noreferrer" className="text-slate-700 text-sm font-semibold hover:text-blue-600 transition-colors">
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Working Hours */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Working Hours</p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Monday – Friday: 9:00 AM – 5:30 PM IST<br />
                      <span className="text-blue-600 font-semibold">Free 30-min Strategy Call Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* CIN Badge */}
            <FadeUp delay={0.25}>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-100 border border-slate-200">
                <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                <p className="text-slate-500 text-xs font-mono">
                  <span className="font-semibold text-slate-600">LEVROUN INDIA</span> · Building What's Next.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100/50">
                {isSubmitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
                    <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for contacting <span className="text-blue-600 font-bold">LEVROUN INDIA</span>. Our team will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', subject: 'Project Inquiry', message: '' });
                      }}
                      className="mt-4 px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-1">Send Us a Message</h3>
                      <p className="text-slate-500 text-xs">Fill in the form and our team will get back to you within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Work Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Phone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Inc."
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Inquiry Type</label>
                      <select name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      >
                        <option value="Project Inquiry">Custom Software / Web Development</option>
                        <option value="AI Automation">AI &amp; ML Automation Solutions</option>
                        <option value="Product Demo">LEVROUN Product Suite (SmartOps AI / LevERP / LevCRM)</option>
                        <option value="Cloud DevOps">Cloud Infrastructure &amp; DevOps</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="Partnership">Partnership / Collaboration Inquiry</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Message / Requirement Details</label>
                      <textarea name="message" rows={4} value={formData.message} onChange={handleChange}
                        placeholder="Tell us about your project requirements, scope, or timeline..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                      />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <><Send className="w-4 h-4" /> Submit Inquiry</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
