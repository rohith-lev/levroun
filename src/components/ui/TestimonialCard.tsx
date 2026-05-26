"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  authorTitle?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, authorTitle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <p className="text-lg italic mb-4">"{quote}"</p>
      <div className="mt-4">
        <p className="font-bold">{author}</p>
        {authorTitle && <p className="text-sm opacity-70">{authorTitle}</p>}
      </div>
    </motion.div>
  );
};
