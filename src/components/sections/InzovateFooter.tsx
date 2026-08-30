"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin, Mail, Phone, ArrowUpRight, Building2,
  Sparkles, ExternalLink, ShieldCheck, Zap, Terminal,
  Cpu, Layers, Clock, Globe, ArrowRight, CheckCircle2,
  Activity
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

const SocialIcons = {
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
};

const servicePills = [
  { name: 'AI & Enterprise Automation', icon: Zap, href: '/#services' },
  { name: 'Custom Full-Stack Web Dev', icon: Cpu, href: '/#services' },
  { name: 'Cloud Architecture & DevOps', icon: Terminal, href: '/#services' },
  { name: 'Mobile App Development', icon: Globe, href: '/#services' },
  { name: 'Cybersecurity & Auditing', icon: ShieldCheck, href: '/#services' },
  { name: 'Data Engineering & Analytics', icon: Activity, href: '/#services' },
  { name: 'UI/UX Design & Prototyping', icon: Layers, href: '/#services' },
];

const productSuite = [
  { name: 'SmartOps AI', tag: 'AI', desc: 'Business Automation', href: '/products' },
  { name: 'LevERP', tag: 'ERP', desc: 'Resource Planning', href: '/products' },
  { name: 'LevCRM', tag: 'CRM', desc: 'Growth & Pipeline', href: '/products' },
  { name: 'LevPay', tag: 'PAY', desc: 'Smart Invoicing', href: '/products' },
];

const navPills = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Infrastructure & Insights', href: '/infrastructure' },
  { name: 'About Us', href: '/about' },
  { name: 'Partners & Collaborations', href: '/partners' },
  { name: 'Contact Us', href: '/#contact' },
];

export default function InzovateFooter() {
  const { openDemoModal } = useDemoModal();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative bg-[#030611] text-slate-300 font-sans border-t border-cyan-500/20 overflow-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Cyber Ambient Radial Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ─── 1. TOP STYLISH BRANDING HEADER ─── */}
      <div className="relative pt-12 sm:pt-16 pb-8 border-b border-cyan-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Giant Futuristic Brand Display */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                ENTERPRISE DIGITAL PLATFORM
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black font-mono tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                LEVROUN<span className="text-cyan-400">_</span>
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-xl">
                Building What's Next. — Custom software, AI solutions, and in-house digital products for startups and enterprises across India and globally.
              </p>
            </div>

            {/* Futuristic Live Action Card */}
            <div className="relative w-full lg:w-auto p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#070e24] via-[#091535] to-[#060c20] border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col sm:flex-row items-center gap-4 sm:gap-5 shrink-0 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">Ready To Innovate?</div>
                <div className="text-xs text-slate-400 mt-0.5">Schedule a technical consultation with our enterprise architect.</div>
              </div>
              <button
                onClick={() => openDemoModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs tracking-wider shadow-lg shadow-cyan-500/25 border border-cyan-300/40 transition-all flex items-center justify-center gap-2 transform active:scale-95 shrink-0"
              >
                <span>GET STARTED</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 2. BENTO GRID LAYOUT ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

          {/* ── BENTO CARD 1: Headquarters & Command Info (Span 5) ── */}
          <div className="md:col-span-5 p-5 sm:p-6 rounded-3xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-cyan-900/30 pb-3 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[2px] shrink-0">
                    <div className="w-full h-full bg-[#060c1d] rounded-[9px] flex items-center justify-center p-1">
                      <img src="/image/levroun-logo.png" alt="LEVROUN INDIA" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-mono font-black text-white">LEVROUN HQ</div>
                    <div className="text-[10px] font-mono text-cyan-400/80">Erode, Tamil Nadu</div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold self-start sm:self-auto">
                  REGISTERED CIN
                </div>
              </div>

              {/* No CIN - LEVROUN INDIA */}
              <div className="p-3 rounded-2xl bg-[#08132b] border border-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate"><span className="text-slate-500">Location:</span> Erode, Tamil Nadu, India</span>
              </div>

              {/* Dual Offices */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#08132b]/80 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-2 text-white text-xs font-bold font-mono mb-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Headquarters — Erode, Tamil Nadu</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed pl-5">
                    Erode, Tamil Nadu, India — Tamil Nadu → India → Global
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Dialing & Socials */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <a
                  href="tel:+918939806110"
                  className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-[#08132b] border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>+91 8939806110</span>
                </a>
                <a
                  href="https://wa.me/918939806110"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 p-2.5 rounded-xl bg-[#08132b] border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors text-slate-300"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <a
                  href="mailto:hello@levroun.com"
                  className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 truncate max-w-full"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> hello@levroun.com
                </a>

                <div className="flex items-center gap-2">
                  {[
                    { href: 'https://levroun.com', Icon: SocialIcons.LinkedIn, label: 'LinkedIn' },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="w-9 h-9 sm:w-8 sm:h-8 rounded-xl bg-[#08132b] border border-slate-800 hover:border-cyan-400 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 transition-all"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── BENTO CARD 2: Products & SaaS Suite Grid (Span 7) ── */}
          <div className="md:col-span-7 p-5 sm:p-6 rounded-3xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-cyan-900/30 pb-3">
                <div className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" /> PRODUCT SUITE &amp; PLATFORMS
                </div>
                <span className="text-[10px] font-mono text-cyan-400/80">LEVROUN SOLUTIONS</span>
              </div>

              {/* 4 Product Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {productSuite.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="group p-4 rounded-2xl bg-[#08132b]/90 border border-cyan-500/20 hover:border-cyan-400 hover:bg-[#0c1a3b] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                        {p.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold">
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs">{p.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cloud Alliances Feature Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#09173a] to-[#0d2254] border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold font-mono text-white">Strategic Cloud Alliances &amp; Partners</div>
                  <div className="text-[11px] text-cyan-300/80">Powered by enterprise cloud leaders — AWS &amp; Zoho</div>
                </div>
              </div>
              <Link
                href="/partners"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>EXPLORE ALLIANCES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* ── BENTO CARD 3: Core Engineering Capabilities (Span 7) ── */}
          <div className="md:col-span-7 p-5 sm:p-6 rounded-3xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-cyan-900/30 pb-3">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" /> CORE ENGINEERING CAPABILITIES
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80">SERVICES MATRIX</span>
            </div>

            {/* Tech Pill Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-1">
              {servicePills.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="group px-3 sm:px-3.5 py-2 rounded-xl bg-[#08132b] border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all duration-300 flex items-center gap-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="truncate">{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── BENTO CARD 4: Navigation Dock (Span 5) ── */}
          <div className="md:col-span-5 p-5 sm:p-6 rounded-3xl bg-[#060c1d]/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-cyan-900/30 pb-3">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" /> NAVIGATION DOCK
              </div>
              <span className="text-[10px] font-mono text-cyan-400/80">DIRECT ACCESS</span>
            </div>

            {/* Nav Links Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-1">
              {navPills.map((n) => (
                <Link
                  key={n.name}
                  href={n.href}
                  className="px-3 py-2 text-center sm:text-left rounded-lg bg-[#08132b] border border-slate-800 hover:border-cyan-400 hover:text-cyan-300 text-slate-300 text-xs font-mono transition-all truncate"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── 3. BOTTOM CYBER HUD COMMAND BAR ─── */}
      <div className="border-t border-cyan-900/30 bg-[#02040b] py-6 relative z-10 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          {/* System Status & Time */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
            {currentTime && (
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{currentTime}</span>
              </div>
            )}
          </div>

          {/* Copyright & CIN */}
          <div className="text-slate-400 text-center text-[11px] sm:text-xs">
            © {new Date().getFullYear()} LEVROUN INDIA · Building What's Next.
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-4 text-[11px] sm:text-xs">
            <a href="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
