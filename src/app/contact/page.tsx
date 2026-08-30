"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const programs = [
  "Full Stack Development",
  "AI & Machine Learning",
  "Frontend (React)",
  "Python & Django",
  "UI/UX Design",
  "Digital Marketing",
  "Cyber Security",
  "Mobile App Dev",
  "Cloud & DevOps",
  "15-Day Internship",
  "30-Day Internship",
  "45-Day Industrial Training",
];

const contactInfo = [
  { icon: MapPin, label: "Campus", value: "54/7, TVR Corner, Perundurai Old Busstand, Erode(DT), 638052" },
  { icon: Phone, label: "Call Us", value: "+91 93420 08797 · +91 93637 57078" },
  { icon: Mail, label: "Email", value: "info@inzovate-technologies.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9 AM – 8 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", program: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          message: form.program ? `[Program: ${form.program}] ${form.message || 'Program inquiry.'}` : (form.message || 'General inquiry.'),
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Admissions Open · 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 mb-6 max-w-4xl leading-[1.05]">
            Let&apos;s Build Your{" "}
            <span className="text-orange-500">Future Together.</span>
          </h1>
          <p className="text-lg text-foreground/50 font-light max-w-xl leading-relaxed">
            Speak to an admissions advisor, schedule a campus tour, or apply to your chosen program. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Get in touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-navy-900/5 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-navy-900/60" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-navy-900/40 mb-0.5">{item.label}</div>
                        <div className="text-sm font-medium text-navy-900">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social proof */}
              <div className="p-8 rounded-3xl bg-navy-900 text-white">
                <div className="text-4xl font-black text-orange-400 mb-2">95%</div>
                <div className="font-bold text-white text-lg mb-1">Placement Rate</div>
                <div className="text-white/40 text-sm">Our graduates consistently land roles at top companies within 3 months of completing a program.</div>
              </div>

              <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100">
                <p className="text-sm font-medium text-orange-800 leading-relaxed">
                  🎓 <strong>Next batch starts soon.</strong> Limited seats available. Apply early to secure your spot and an early-bird discount.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">Application Received!</h3>
                  <p className="text-foreground/50 font-light max-w-sm mb-8">
                    Our admissions team will reach out within 24 hours to discuss next steps.
                  </p>
                  <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-900/90 transition-all text-sm">
                    Back to Home <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-gray-50 rounded-3xl border border-gray-100 space-y-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Send an Inquiry</h3>
                  <p className="text-sm text-foreground/50 mb-6">Fill in your details and we&apos;ll match you to the right program.</p>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "firstName", label: "First Name", placeholder: "Rahul", key: "firstName" },
                      { id: "lastName", label: "Last Name", placeholder: "Sharma", key: "lastName" },
                    ].map((f) => (
                      <div key={f.id} className="space-y-1.5">
                        <label htmlFor={f.id} className="text-sm font-medium text-foreground/70 ml-1">{f.label}</label>
                        <input
                          id={f.id}
                          required
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground/70 ml-1">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="rahul@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground/70 ml-1">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 transition-all"
                      />
                    </div>
                  </div>

                  {/* Program */}
                  <div className="space-y-1.5">
                    <label htmlFor="program" className="text-sm font-medium text-foreground/70 ml-1">Program of Interest</label>
                    <select
                      id="program"
                      required
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 transition-all"
                    >
                      <option value="">Select a program…</option>
                      {programs.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/70 ml-1">Tell us about your goals</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="I want to transition into tech and land my first developer role within 6 months…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 focus:ring-offset-2 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-900/90 transition-all shadow-xl shadow-navy-900/20 text-sm tracking-wide disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application →"
                    )}
                  </button>
                  <p className="text-xs text-center text-foreground/40 font-light">
                    By submitting, you agree to our privacy policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How quickly will someone respond?", a: "Our admissions team responds within 24 hours on weekdays. For urgent queries, call us directly." },
              { q: "Can I visit the campus before enrolling?", a: "Absolutely — we encourage it. Book a tour through this form or call us directly to schedule a visit." },
              { q: "Are there EMI or payment plans available?", a: "Yes. We offer flexible payment options including EMI. Speak to an advisor to find what works for you." },
              { q: "Is there a minimum qualification required?", a: "No degree required. We welcome anyone with the commitment to learn and grow — beginners to career-switchers." },
            ].map((faq) => (
              <details key={faq.q} className="group p-6 rounded-2xl bg-white border border-gray-100 cursor-pointer hover:border-orange-500/20 transition-colors">
                <summary className="flex items-center justify-between font-semibold text-navy-900 text-sm list-none">
                  {faq.q}
                  <span className="w-6 h-6 rounded-full bg-navy-900/5 flex items-center justify-center shrink-0 group-open:bg-orange-50 transition-colors">
                    <svg className="w-3 h-3 text-navy-900/60 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm text-foreground/60 font-light leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
