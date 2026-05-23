'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  value: string | number;
  delta?: string;
  deltaPositive?: boolean;
  icon: LucideIcon;
  iconColor?: string;
  delay?: number;
}

export default function StatsCard({
  title,
  value,
  delta,
  deltaPositive = true,
  icon: Icon,
  iconColor = 'text-orange-400',
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-[#0D1117] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors group"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-bold text-white mt-1.5">{value}</p>
          {delta && (
            <p className={`text-xs mt-1.5 font-medium ${deltaPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {deltaPositive ? '↑' : '↓'} {delta}
            </p>
          )}
        </div>
        <div className={`p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}
