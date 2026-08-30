"use client";

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 hover:scale-105 hover:border-orange-500/30 ${className}`}
    >
      {/* inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-50 pointer-events-none transition-opacity duration-300" />
      {children}
    </div>
  );
};
