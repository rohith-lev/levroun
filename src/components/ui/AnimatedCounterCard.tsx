"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';

interface CounterCardProps {
  label: string;
  value: number | string; // if string like '100%' keep as is
  icon?: React.ReactNode;
}

export const AnimatedCounterCard: React.FC<CounterCardProps> = ({ label, value, icon }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const motionVal = useMotionValue(0);
  const display = useTransform(motionVal, (latest) => {
    if (typeof value === 'string') return value;
    return Math.floor(latest).toLocaleString();
  });

  React.useEffect(() => {
    if (isInView && typeof value === 'number') {
      const controls = animate(motionVal, value, { duration: 2, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 text-center"
    >
      {icon && <div className="mb-2">{icon}</div>}
      <motion.div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {typeof value === 'number' ? display : value}
      </motion.div>
      <div className="text-sm text-white/70 uppercase tracking-wider">{label}</div>
    </div>
  );
};
