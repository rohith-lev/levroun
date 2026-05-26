"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  particles?: boolean;
  ctaButtons: CTAButton[];
}

export function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  particles = true,
  ctaButtons,
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          unoptimized
          className="object-cover opacity-30 pointer-events-none"
        />
      )}

      {/* Particle placeholder */}
      {particles && (
        <div className="absolute inset-0" aria-hidden="true" />
      )}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 drop-shadow-[0_0_8px_rgba(255,165,0,0.8)]">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {ctaButtons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 ${
                btn.variant === "secondary"
                  ? "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  : "bg-orange-500 text-white hover:bg-orange-400 shadow-lg shadow-orange-500/30"
              }`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
