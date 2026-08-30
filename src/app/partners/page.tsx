'use client';

import { useState } from 'react';
import {
  Award, Building2, CheckCircle2, Shield,
  Send, Sparkles, ArrowRight,
  Mail, Phone, Zap, Cpu,
  Cloud, Layers, Check, ExternalLink, Globe
} from 'lucide-react';
import toast from 'react-hot-toast';
import Image from 'next/image';

const STRATEGIC_PARTNERS = [
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    imageSrc: '/image/aws.png',
    category: 'Cloud Infrastructure & Enterprise AI Ecosystem',
    tier: 'Premier Cloud Solution Provider',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-300',
    accentColor: 'from-[#FF9900] to-[#E06D00]',
    since: 'Partnered Since 2022',
    headline: 'High-Availability Serverless Cloud Architecture & Generative AI Pipelines',
    desc: 'Inzovate Technologies leverages Amazon Web Services as its primary cloud foundation to deliver multi-region resilience, sub-second API latencies, and enterprise-grade security for mission-critical applications.',
    capabilities: [
      { name: 'EC2 & Elastic Container Service (ECS)', desc: 'Auto-scaling compute clusters designed for fault-tolerant microservice deployments.' },
      { name: 'Serverless Compute (AWS Lambda)', desc: 'Event-driven compute execution with zero server management overhead.' },
      { name: 'SageMaker AI & ML Pipelines', desc: 'Custom AI model hosting, automated training workflows, and LLM fine-tuning.' },
      { name: 'S3 & Aurora PostgreSQL Storage', desc: 'High-speed distributed object storage and relational database clusters with 99.999999999% durability.' },
      { name: 'AWS CloudFormation & Terraform IaC', desc: 'Automated infrastructure provisioning and automated CI/CD pipeline deployments.' },
    ],
    outcomes: [
      'Multi-Region Auto-Scaling with 99.99% Uptime SLA',
      'Sub-100ms Latency for Enterprise API Endpoints',
      'Zero-Downtime Continuous Deployment Pipelines',
    ],
  },
  {
    id: 'zoho',
    name: 'Zoho Corporation',
    imageSrc: '/image/zoho.png',
    category: 'Enterprise SaaS & Business Process Automation',
    tier: 'Authorized Alliance Partner',
    badgeColor: 'bg-red-50 text-red-800 border-red-300',
    accentColor: 'from-[#E42527] to-[#00A3E0]',
    since: 'Partnered Since 2023',
    headline: 'Custom Low-Code Enterprise Apps, CRM Workflows & Deluge Business Scripting',
    desc: 'Inzovate Technologies collaborates with Zoho Corporation to architect customized enterprise applications, rapid workflow automation, and unified CRM/ERP data synchronization for growing organizations.',
    capabilities: [
      { name: 'Zoho Creator Custom Apps', desc: 'Rapid low-code application development tailored for complex business logic and operational workflows.' },
      { name: 'Zoho CRM Funnel & Automation', desc: 'End-to-end sales pipeline automation, automated lead scoring, and customer communication workflows.' },
      { name: 'Deluge Scripting Engine', desc: 'Custom serverless scripting for cross-platform data integration and automated business triggers.' },
      { name: 'Zoho Books & Invoicing Sync', desc: 'Automated billing, financial ledger synchronization, and tax-compliant invoice generation.' },
      { name: 'Analytics & BI Dashboards', desc: 'Real-time corporate data intelligence, executive reports, and cross-department analytics.' },
    ],
    outcomes: [
      '10x Faster Custom Business Application Prototyping',
      'Unified Real-Time ERP-CRM Data Synchronization',
      'Automated Lead Nurturing & Financial Reporting',
    ],
  },
];

const COLLABORATION_PILLARS = [
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    desc: 'Deploying secure, resilient, and auto-scaling cloud architectures engineered for zero downtime.',
  },
  {
    icon: Zap,
    title: 'Low-Code & SaaS Automation',
    desc: 'Accelerating business process digitization through customized enterprise SaaS platforms and script automation.',
  },
  {
    icon: Cpu,
    title: 'Enterprise AI & Machine Learning',
    desc: 'Integrating generative AI, predictive model training, and automated data pipelines into operational workflows.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance SLAs',
    desc: 'Enforcing strict encryption standards, multi-tenant isolation, and continuous auditing across all solutions.',
  },
];

export default function PartnersPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: 'Enterprise Executive / CTO', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('Please enter your name and official email address.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `[Strategic Partnership Inquiry - Company: ${form.company || 'N/A'}, Role: ${form.role}] ${form.message || 'Collaboration & Strategic Partnership Request.'}`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Partnership inquiry submitted! Our executive team will reach out within 24 hours.');
        setForm({ name: '', email: '', company: '', role: 'Enterprise Executive / CTO', message: '' });
      } else {
        toast.error(data.error || 'Failed to submit partnership request.');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">

      {/* ── HERO SECTION ── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden border-b border-slate-200">
        {/* Background Grid & Ambient Blur Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Strategic Alliances &amp; Enterprise Collaborations
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Powered by Global Tech Leaders.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              AWS &amp; Zoho Cloud Alliances.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Inzovate Technologies partners with world-leading cloud infrastructure and enterprise SaaS leaders — <strong className="text-slate-900 font-bold">Amazon Web Services (AWS)</strong> and <strong className="text-slate-900 font-bold">Zoho Corporation</strong> — to architect scalable, resilient, and automated digital platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#partners"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span>Explore Alliances</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#collaborate"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-300 hover:border-blue-400 text-slate-700 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="max-w-4xl mx-auto mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            ['AWS Cloud', 'Premier Solution Provider'],
            ['Zoho SaaS', 'Authorized Alliance Partner'],
            ['99.99%', 'Infrastructure SLA'],
            ['10x Speed', 'Rapid App Prototyping'],
          ].map(([num, label]) => (
            <div key={label} className="bg-white border border-slate-200 rounded-3xl p-5 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="text-2xl sm:text-3xl font-black text-blue-700">{num}</p>
              <p className="text-xs text-slate-500 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STRATEGIC PARTNERS SECTION ── */}
      <section id="partners" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Enterprise Technology Alliances</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Our Primary Strategic Partners</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Deeply integrated enterprise ecosystems driving high-speed performance, automated workflows, and multi-region cloud resilience.
            </p>
          </div>

          {/* Deep-Dive Partner Cards */}
          <div className="space-y-12">
            {STRATEGIC_PARTNERS.map((partner) => {
              return (
                <div
                  key={partner.id}
                  className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-6 sm:p-10 space-y-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Top Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center p-3 shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                        <Image src={partner.imageSrc} alt={partner.name} width={80} height={64} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                            {partner.name}
                          </h3>
                          <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${partner.badgeColor}`}>
                            {partner.tier}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-500 mt-1">{partner.category}</p>
                      </div>
                    </div>

                    <div className="text-left md:text-right shrink-0">
                      <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200">
                        {partner.since}
                      </span>
                    </div>
                  </div>

                  {/* Headline & Overview */}
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-bold text-blue-700">
                      {partner.headline}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Technical Capabilities Grid */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-600" /> Technical Capabilities &amp; Stack Integrations
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {partner.capabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-300 transition-colors space-y-1"
                        >
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                            <span>{cap.name}</span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed pl-3.5">{cap.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Measurable Enterprise Outcomes */}
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" /> Key Partnership Outcomes
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {partner.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <Check className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COLLABORATION PILLARS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-blue-600">Collaboration Value</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Why Collaborate With Inzovate?</h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Our strategic partnership framework ensures high-velocity engineering, robust security, and scalable software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLLABORATION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-3xl border border-slate-200 bg-white hover:bg-blue-50/60 hover:border-blue-300 transition-all duration-300 space-y-4 group shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP INQUIRY FORM ── */}
      <section id="collaborate" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-8">

            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" /> Official Partnership Request
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                Initiate Strategic Collaboration
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
                Connect with our technical alliance division to explore co-innovation, cloud architecture integration, or enterprise solution delivery.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@organization.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nexus Tech Corp"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Your Role / Title
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                  >
                    <option value="Enterprise Executive / CTO">Enterprise Executive / CTO</option>
                    <option value="Cloud Architect">Cloud Architect / DevOps Lead</option>
                    <option value="SaaS Partner Manager">SaaS Partner Manager</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Other">Other Strategic Role</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Message / Collaboration Scope
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your expected partnership objectives or technical collaboration scope..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white" />
                <span>{submitting ? 'SUBMITTING REQUEST...' : 'SUBMIT PARTNERSHIP INQUIRY'}</span>
              </button>
            </form>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
              <a href="mailto:info@inzovate-technologies.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 text-blue-600" /> info@inzovate-technologies.com
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" /> +91 93420 08797 / +91 93637 57078
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
