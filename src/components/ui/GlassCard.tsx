"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotateX: 5, rotateY: 5 }}
      className={`relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:border-orange-500/30 ${className}`}
    >
      {/* inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-50 pointer-events-none transition-opacity duration-300" />
      {children}
    </motion.div>
  );
};
