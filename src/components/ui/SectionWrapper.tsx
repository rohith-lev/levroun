import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  id?: string;
  bg?: string; // Tailwind background class e.g., 'bg-navy-900'
  children: ReactNode;
  withParticles?: boolean;
}

export default function SectionWrapper({ id, bg = 'bg-navy-900', children, withParticles = false }: SectionWrapperProps) {
  return (
    <section id={id} className={`${bg} relative py-16 md:py-24 overflow-hidden`}>
      {withParticles && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Simple particle effect placeholder – customize later */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
        </div>
      )}
      <div className="relative container mx-auto px-4 md:px-8 lg:px-12">{children}</div>
    </section>
  );
}
