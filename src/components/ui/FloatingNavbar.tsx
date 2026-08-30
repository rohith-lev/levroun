'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Sparkles, ChevronRight, PhoneCall,
  Server, Home, Layers, Cpu, Info, Handshake,
  ShieldCheck, Globe, Zap, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDemoModal } from '@/context/DemoModalContext';

const navLinks = [
  { name: 'Home', href: '/', icon: Home, badge: null },
  { name: 'Services', href: '/services', icon: Cpu, badge: 'AI & Cloud' },
  { name: 'Products', href: '/products', icon: Layers, badge: 'SaaS Suite' },
  { name: 'Infrastructure & Insights', href: '/infrastructure', icon: Server, badge: 'Enterprise' },
  { name: 'About Us', href: '/about', icon: Info, badge: null },
  { name: 'Partners & Collaborations', href: '/partners', icon: Handshake, badge: 'Strategic' },
];

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile navigation drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── Main Floating Bar ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-center ${scrolled ? 'px-3 sm:px-6 py-2.5' : 'px-3 sm:px-6 py-4'}`}>
        <div className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 rounded-2xl transition-all duration-300 ${scrolled
            ? 'bg-[#070c1a]/90 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)] py-2.5 text-white'
            : 'bg-[#070c1a]/80 backdrop-blur-md border border-slate-800/80 shadow-xl py-3 text-white'
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform overflow-hidden">
              <div className="w-full h-full bg-[#070c1a] rounded-[10px] flex items-center justify-center overflow-hidden p-0.5">
                <img
                  src="/image/levroun-logo.png"
                  alt="LEVROUN INDIA"
                  className="w-full h-full object-contain rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center gap-0.5 font-mono">
                LEVROUN<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-cyan-400/70 font-bold font-mono -mt-1">INDIA</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#050811]/90 p-1.5 rounded-full border border-cyan-500/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/25 border border-cyan-300/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & Burger Trigger */}
          <div className="flex items-center gap-3">
            {/* Desktop Request Demo Button */}
            <button
              onClick={() => openDemoModal()}
              className="hidden sm:flex px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-black shadow-lg shadow-cyan-500/20 border border-cyan-300/40 transition-all items-center gap-1.5 group transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform text-slate-950" />
              <span>Request Demo</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl bg-[#091124] border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 relative z-50 shadow-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── FUTURISTIC MOBILE NAVIGATION DRAWER ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[100] bg-[#040814]/98 backdrop-blur-2xl flex flex-col text-slate-200 overflow-y-auto font-sans selection:bg-cyan-500 selection:text-black"
          >
            {/* Background Cyber Ambient Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* Top Bar inside Drawer */}
            <div className="relative z-10 flex items-center justify-between p-5 border-b border-cyan-500/20 bg-[#060c1d]/90 backdrop-blur-xl">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-md shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#050811] rounded-[10px] flex items-center justify-center p-0.5">
                    <img src="/image/levroun-logo.png" alt="LEVROUN INDIA" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black text-white font-mono tracking-wider">
                    LEVROUN<span className="text-cyan-400">_</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-cyan-400/70 font-mono font-bold -mt-1">
                    INDIA
                  </span>
                </div>
              </Link>

              {/* Status Badge & Close Button */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-[#0a1226] border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all shadow-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Matrix Links */}
            <div className="relative z-10 flex-1 px-5 py-6 space-y-6 overflow-y-auto">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-cyan-400/70 uppercase px-2 font-bold">
                  <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-cyan-400" /> Navigation Matrix</span>
                  <span>[06 PATHS]</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {navLinks.map((link) => {
                    const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group relative flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 border ${isActive
                            ? 'bg-gradient-to-r from-[#0a1835] via-[#0d2047] to-[#07132c] border-cyan-400/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] text-white'
                            : 'bg-[#070e21]/80 border-cyan-900/30 hover:border-cyan-500/30 hover:bg-[#0a142e] text-slate-300 hover:text-white'
                          }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${isActive
                              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                              : 'bg-slate-900/80 border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30'
                            }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold tracking-wide flex items-center gap-2">
                              {link.name}
                              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                            </div>
                            {link.badge && (
                              <span className="text-[10px] font-mono text-cyan-400/70 font-semibold">
                                {link.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? 'text-cyan-400' : 'text-slate-600 group-hover:text-cyan-400'
                            }`} />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Communications Info */}
              <div className="p-4 rounded-2xl bg-[#060e21] border border-cyan-500/20 space-y-3 font-mono text-xs">
                <div className="text-[10px] text-cyan-400/70 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-cyan-400" /> Direct Contact Line
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <a
                    href="tel:+918939806110"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#09142f] border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>+91 8939806110</span>
                  </a>
                  <a
                    href="mailto:hello@levroun.com"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#09142f] border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>hello@levroun.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Action Footer inside Drawer */}
            <div className="relative z-10 p-5 border-t border-cyan-500/20 bg-[#060c1d]/90 backdrop-blur-xl space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-300/40 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>REQUEST FREE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 px-1 pt-1">
                <span>LEVROUN INDIA · Building What's Next.</span>
                <span className="text-cyan-400/60 font-bold">V2.0 NEXT-GEN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
