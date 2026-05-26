"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const coursesDropdown = [
  { name: "Programs", href: "/programs", desc: "9 tracks · 60+ modules" },
  { name: "Internships", href: "/internships", desc: "15–45 day programs" },
  { name: "Placements", href: "/placements", desc: "95% placement rate" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/programs", dropdown: coursesDropdown },
  { name: "Campus", href: "/campus" },
  { name: "Achievements", href: "/achievements" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    setMobileCoursesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isCoursesActive = coursesDropdown.some((l) => pathname === l.href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-center ${
          scrolled ? "px-6 py-2" : "px-6 py-3"
        }`}
      >
        <div
          className={`w-full max-w-6xl flex items-center justify-between px-6 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-navy-900/95 backdrop-blur-md shadow-2xl border border-white/8 py-2"
              : "bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 py-3"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative flex items-center gap-2.5 shrink-0">
            <Image
              src="/image/logo.png"
              alt="WINORA Logo"
              width={44}
              height={44}
              className="object-contain"
            />
            <span
              className={`text-xl font-bold tracking-tighter transition-colors duration-300 ${
                scrolled ? "text-white" : "text-navy-900"
              }`}
            >
              WINORA<span className="text-orange-500">.</span>
              <sup className="absolute top-[6px] text-[7px] font-bold opacity-50 leading-none ml-0.5">TM</sup>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isCoursesActive
                        ? scrolled ? "text-orange-400" : "text-orange-500"
                        : scrolled
                        ? "text-white/70 hover:text-white hover:bg-white/10"
                        : "text-foreground/70 hover:text-navy-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col px-4 py-3.5 hover:bg-orange-50 transition-colors duration-150 group ${
                              isActive(item.href) ? "bg-orange-50" : ""
                            }`}
                          >
                            <span
                              className={`text-sm font-semibold ${
                                isActive(item.href) ? "text-orange-500" : "text-navy-900 group-hover:text-orange-500"
                              } transition-colors`}
                            >
                              {item.name}
                            </span>
                            <span className="text-xs text-foreground/40 mt-0.5">{item.desc}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-orange-400 bg-white/10"
                        : "text-orange-500 bg-orange-50"
                      : scrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-foreground/70 hover:text-navy-900 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? "bg-orange-500 text-white hover:bg-orange-400 shadow-lg shadow-orange-500/30"
                  : "bg-navy-900 text-white hover:bg-navy-900/90 shadow-lg shadow-navy-900/20"
              }`}
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? "text-white hover:bg-white/10" : "text-navy-900 hover:bg-gray-100"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-900 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                <Image
                  src="/image/logo.png"
                  alt="WINORA Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <span className="text-xl font-bold tracking-tighter text-white">
                  WINORA<span className="text-orange-500">.</span>
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/70 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-6 overflow-y-auto">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 rounded-2xl text-white/80 hover:text-white hover:bg-white/10 transition-colors font-medium text-lg"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileCoursesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-4 border-l border-white/10 pl-4"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex flex-col py-3 text-white/60 hover:text-white transition-colors"
                            >
                              <span className="font-semibold text-base">{item.name}</span>
                              <span className="text-xs text-white/30">{item.desc}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-4 rounded-2xl text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-orange-400 bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-2xl transition-colors"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
