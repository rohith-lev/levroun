'use client';

import { Menu, Bell, ChevronDown } from 'lucide-react';
import { useSession } from 'next-auth/react';

interface Props {
  title: string;
  onMenuClick: () => void;
}

export default function AdminTopbar({ title, onMenuClick }: Props) {
  const { data: session } = useSession();
  const initials = session?.user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) ?? 'AD';

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-14 px-4 lg:px-6 bg-[#0F1521]/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-sm font-semibold text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-orange-500" />
        </button>

        <div className="flex items-center gap-2 pl-2 border-l border-white/10 ml-1">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
            {initials}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white leading-none">{session?.user?.name ?? 'Admin'}</p>
            <p className="text-[10px] text-slate-500 mt-0.5">{session?.user?.email ?? ''}</p>
          </div>
          <ChevronDown className="w-3 h-3 text-slate-500 hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
