'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Building, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function DemoRequestModal({
  isOpen,
  onClose,
  defaultService = 'All Services'
}: DemoRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in your name, email, and phone number.');
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
          message: `[Demo Request - Service: ${formData.service}${formData.company ? `, Company: ${formData.company}` : ''}] ${formData.message || 'Consultation & Demo request.'}`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setIsSubmitted(true);
        toast.success('Thank you! Our technical representative will contact you shortly.');
      } else {
        toast.error(data.error || 'Submission failed.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', service: 'All Services', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-200"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/80 z-10 my-8 overflow-hidden transition-all duration-200">
        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900">Request Received!</h3>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out to{' '}
                  <span className="text-blue-600 font-bold">LEVROUN INDIA</span>. Our team will contact you within 24 business hours.
                </p>
              </div>
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg transition-all flex items-center gap-2 mx-auto"
              >
                Close <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="mb-6 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Request Consultation &amp; Demo
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Let's Build Something Great</h2>
                <p className="text-slate-500 text-sm">
                  Fill out the form and our lead enterprise architect will connect with you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Your Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text" name="name" value={formData.name} onChange={handleChange}
                        placeholder="John Doe" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Work Email *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="john@company.com" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Phone *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Company</label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Interested Service / Solution</label>
                  <select
                    name="service" value={formData.service} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="All Services">All Services &amp; Custom Solutions</option>
                    <option value="Custom Software">Custom Software Development</option>
                    <option value="AI &amp; Automation">AI &amp; ML Automation Solutions</option>
                    <option value="Mobile App Development">Mobile App Development (iOS/Android)</option>
                    <option value="SmartOps AI">SmartOps AI — Business Automation</option>
                    <option value="Cloud Architecture &amp; DevOps">Cloud Architecture &amp; DevOps</option>
                    <option value="LEVROUN Product Suite">LEVROUN Product Suite (SmartOps / LevERP / LevCRM)</option>
                    <option value="E-Commerce">E-Commerce Solutions</option>
                    <option value="Partnership">Partnership / Collaboration Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1.5 text-xs uppercase tracking-wider">Project Brief / Message</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <textarea
                      name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Tell us briefly about your goals, timelines, or requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 transition-all transform active:scale-95 disabled:opacity-60 group"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>Submit Consultation Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400 pt-1">
                  By submitting, you agree to be contacted by LEVROUN INDIA. No spam, ever.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
