"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";
import Section from "../ui/Section";
import { courses } from "@/data/courses";

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-navy-900 border-t border-white/5 overflow-hidden">
      {/* Floating Background Orbs for Deep Dimensionality */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[80px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-10 w-[300px] h-[300px] rounded-full bg-orange-500/10 blur-[90px]"
        />
      </div>

      {/* Premium Outline Typography Watermark - Absolute positioned under flow */}
      <div className="absolute bottom-8 left-0 right-0 pointer-events-none select-none overflow-hidden h-16 md:h-24 flex items-center justify-center z-0">
        <div 
          className="text-[10vw] font-black tracking-widest leading-none text-transparent text-center opacity-[0.035]"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.4)",
            letterSpacing: "0.25em"
          }}
        >
          WINORA
        </div>
      </div>

      <Section className="py-20 md:py-24 relative z-10" background="navy">
        {/* Brand Header Grid */}
        <div className="mb-16 pb-12 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 p-2 border border-white/10 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-white/10">
              <Image
                src="/image/WhatsApp_Image_2026-05-17_at_6.10.27_PM-removebg-preview.png"
                alt="WINORA Logo"
                width={120}
                height={120}
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="relative text-[2.5rem] md:text-[3rem] font-black tracking-tighter text-white leading-none">
              WINORA<span className="text-orange-500 transition-all duration-300 group-hover:text-orange-400">.</span>
              <sup className="absolute top-[0.4rem] text-[1rem] font-bold opacity-45 ml-1 select-none">TM</sup>
            </span>
          </Link>
          
          <div className="flex flex-col items-start md:items-end gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Admissions Cohort 2026</span>
            <span className="text-sm text-white/60 font-light">Applications are currently being reviewed.</span>
          </div>
        </div>

        {/* Four Column Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Philosophy & Social Connect */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider relative inline-block">
              Our Vision
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500" />
            </h4>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">
              We engineer the future by cultivating high-tier tech capability. From baseline algorithms to advanced machine learning infrastructures, we define the next generation of engineers.
            </p>
            
            {/* Custom Glowing Social Buttons using Premium SVGs */}
            <div className="flex gap-3.5 pt-2">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ), 
                  href: "#", 
                  label: "LinkedIn", 
                  color: "hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:text-blue-400" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ), 
                  href: "#", 
                  label: "Twitter", 
                  color: "hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:text-sky-300" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ), 
                  href: "#", 
                  label: "Instagram", 
                  color: "hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:text-pink-400" 
                },
                { 
                  icon: (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.527 3.545 12 3.545 12 3.545s-7.527 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.861.508 9.388.508 9.388.508s7.527 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ), 
                  href: "#", 
                  label: "YouTube", 
                  color: "hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:text-red-400" 
                }
              ].map((social, idx) => {
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 bg-white/5 backdrop-blur-md transition-all duration-300 cursor-pointer ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Advanced Tracks */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider relative inline-block">
              Programs
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500" />
            </h4>
            <ul className="space-y-3.5">
              {courses.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <Link href="/programs" className="group flex items-center text-sm text-white/60 hover:text-white transition-all duration-300 font-medium">
                    <span className="relative overflow-hidden inline-flex items-center">
                      <span className="transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        {course.name}
                      </span>
                    </span>
                    {course.trending && (
                      <span className="ml-2.5 px-2 py-0.5 text-[8px] font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-md tracking-wider animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                        HOT
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Site Map Directory */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500" />
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: "About Us", href: "/about", badge: null },
                { name: "Placements", href: "/placements", badge: null },
                { name: "Campus", href: "/campus", badge: null },
                { name: "Internships", href: "/internships", badge: "NEW" },
                { name: "Contact", href: "/contact", badge: null }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="group flex items-center text-sm text-white/60 hover:text-white transition-all duration-300 font-medium">
                    <span className="relative overflow-hidden inline-flex items-center">
                      <span className="transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        {item.name}
                      </span>
                    </span>
                    {item.badge && (
                      <span className="ml-2.5 px-2 py-0.5 text-[8px] font-extrabold bg-emerald-500 text-white rounded-md tracking-wider flex items-center gap-1 shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                        <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Card & Campus Contact */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider relative inline-block">
              Connect
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-orange-500" />
            </h4>
            
            {/* Redesigned Futuristic Newsletter Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-5 bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-2xl backdrop-blur-2xl relative overflow-hidden group/card shadow-[0_8px_32px_rgba(0,0,0,0.3)] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-orange-500/50 before:to-transparent"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover/card:bg-orange-500/20 transition-all duration-700" />
              
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                <h5 className="font-bold text-white text-xs tracking-wider uppercase">
                  Newsletter
                </h5>
              </div>
              
              <p className="text-[11px] text-white/50 font-light leading-relaxed mb-4">
                Join our private newsletter for advanced tech publications and cohort updates.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="relative group/input">
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-white/35 transition-colors duration-300 group-focus-within/input:text-orange-500">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-12 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/35 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 group-hover/input:border-white/20"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 p-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 active:scale-90 hover:shadow-[0_0_12px_rgba(249,115,22,0.6)] cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Campus Contact Details with glowing visual hooks */}
            <div className="space-y-3 pt-3 border-t border-white/5">
              <div className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-orange-500 group-hover:bg-orange-500/20 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-white/60 font-light leading-normal transition-colors duration-300 group-hover:text-white">
                  54/7, TVR Corner, Perundurai Old Busstand, Erode(DT), 638052
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-orange-500 group-hover:bg-orange-500/20 group-hover:text-white transition-all duration-300">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-white/60 font-light transition-colors duration-300 group-hover:text-white">
                  +91 89398 06110 · +91 93637 57078
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-orange-500 group-hover:bg-orange-500/20 group-hover:text-white transition-all duration-300">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs text-white/60 font-light transition-colors duration-300 group-hover:text-white">
                  info@winora.tech
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Custom Legal Links */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-xs text-white/40 font-medium tracking-wide">
            © {new Date().getFullYear()} WINORA TECH ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((policy) => (
              <Link
                key={policy}
                href="#"
                className="text-xs text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest relative group"
              >
                {policy}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
}
