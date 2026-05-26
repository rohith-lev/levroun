"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Button {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface CTASectionProps {
  title: string;
  buttons: Button[];
}

export const CTASection: React.FC<CTASectionProps> = ({ title, buttons }) => {
  return (
    <section className="bg-navy-900 py-20">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-8"
        >
          {title}
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((b, i) => (
            <a
              key={i}
              href={b.href}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 
                ${b.variant === 'secondary'
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  : 'bg-orange-500 text-white hover:bg-orange-400 shadow-lg shadow-orange-500/30'}
              `}
            >
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
