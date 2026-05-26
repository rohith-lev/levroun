import React from 'react';
import Image from 'next/image';

interface CollabCardProps {
  name: string;
  logo: string; // path under /public
  badge?: string;
}

export const CollabCard: React.FC<CollabCardProps> = ({ name, logo, badge }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 w-48">
      <div className="w-20 h-20 relative mb-2">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>
      {badge && (
        <span className="text-xs font-medium text-orange-400 bg-orange-500/10 rounded-full px-2 py-0.5 mb-1">
          {badge}
        </span>
      )}
      <h3 className="text-sm font-semibold text-white text-center">{name}</h3>
    </div>
  );
};
