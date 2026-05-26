"use client";

import Section from "../ui/Section";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-8">
            Begin Your <br/>
            <span className="text-orange-500">Admissions Process.</span>
          </h2>
          <p className="text-lg text-foreground/60 font-light leading-relaxed mb-12">
            The technology landscape moves fast. Don&apos;t fall behind. Secure your spot in our upcoming cohort and start building your future today.
          </p>

          <div className="space-y-8">
            {[
              { label: "Our Campus", value: "54/7, TVR Corner, Perundurai Old Busstand, Erode(DT), 638052" },
              { label: "Call Us", value: "+91 89398 06110 , +91 93637 57078" },
              { label: "Email Support", value: "info@winora.tech" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-xs font-bold uppercase tracking-widest text-navy-900/40 mb-1">{item.label}</div>
                <div className="text-lg font-medium text-navy-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
          <h3 className="text-2xl font-bold text-navy-900 mb-8">Send an Inquiry</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input label="First Name" placeholder="Jane" />
              <Input label="Last Name" placeholder="Doe" />
            </div>
            <Input label="Email Address" type="email" placeholder="jane@company.com" />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground/80 ml-1">Program of Interest</label>
              <select className="flex w-full rounded-xl border border-gray-200 bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 transition-all">
                <option>Full Stack Residency</option>
                <option>AI & Machine Learning</option>
                <option>Cloud Infrastructure</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground/80 ml-1">Message</label>
              <textarea 
                className="flex w-full rounded-xl border border-gray-200 bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 transition-all min-h-[120px]"
                placeholder="Tell us about your career goals..."
              />
            </div>
            <Button size="lg" className="w-full">Submit Application</Button>
          </form>
          <p className="mt-6 text-xs text-center text-foreground/40 px-8 font-light">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </Section>
  );
}
