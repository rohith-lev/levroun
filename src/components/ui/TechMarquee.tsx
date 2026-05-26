"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MarqueeItem {
  name: string;
  logo: string; // path relative to /public
}

interface TechMarqueeProps {
  items: MarqueeItem[];
  reverse?: boolean; // scroll direction
}

export const TechMarquee: React.FC<TechMarqueeProps> = ({ items, reverse = false }) => {
  // duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative w-full py-4">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <div key={`${item.name}-${i}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
            <Image src={item.logo} alt={item.name} width={128} height={64} className="object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
