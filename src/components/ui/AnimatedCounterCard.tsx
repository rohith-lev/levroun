'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterCardProps {
  label: string;
  value: number | string;
  suffix?: string;
  icon?: React.ReactNode;
  description?: string;
}

export const AnimatedCounterCard: React.FC<CounterCardProps> = ({
  label,
  value,
  suffix = '',
  icon,
  description
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState<string | number>(value);

  const numericValue = typeof value === 'number' ? value : parseFloat(value as string);
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!isNumeric) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * numericValue;
      setDisplayValue(
        numericValue % 1 !== 0
          ? current.toFixed(1)
          : Math.floor(current).toLocaleString()
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isNumeric, numericValue, value]);

  return (
    <div
      ref={ref}
      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center"
    >
      {icon && <div className="mb-3 text-blue-600">{icon}</div>}
      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center justify-center">
        <span>{displayValue}</span>
        {suffix && (
          <span className="text-blue-600 font-bold ml-0.5">{suffix}</span>
        )}
      </div>
      <div className="text-sm font-bold text-slate-700 mt-1">{label}</div>
      {description && (
        <div className="text-xs text-slate-400 font-medium mt-0.5">{description}</div>
      )}
    </div>
  );
};
