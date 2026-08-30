'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  Megaphone,
  LogOut,
  ChevronLeft,
  GraduationCap,
  X,
  MessageSquareQuote,
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/contacts', label: 'Contacts', icon: MessageSquare },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/popups', label: 'Campaigns', icon: Megaphone },
];

interface Props {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function AdminSidebar({ mobileOpen, onCloseMobile }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="text-sm font-bold text-white tracking-wide transition-opacity duration-200">
            INZOVATE CMS
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link key={href} href={href} onClick={onCloseMobile}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer hover:translate-x-0.5 ${
                  active
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {!collapsed && (
                  <span className="truncate transition-opacity duration-200">{label}</span>
                )}
                {active && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-2 pb-4 border-t border-white/10 pt-4 space-y-1">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-150"
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
          />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        style={{ width: collapsed ? 64 : 220 }}
        className="hidden lg:flex flex-col flex-shrink-0 bg-[#0D1117] border-r border-white/10 h-screen sticky top-0 overflow-hidden transition-all duration-200"
      >
        {sidebarContent}
      </aside>

      {/* Mobile overlay sidebar */}
      {mobileOpen && (
        <>
          <div
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          />
          <aside
            className="fixed left-0 top-0 bottom-0 w-[220px] bg-[#0D1117] border-r border-white/10 z-50 lg:hidden flex flex-col transition-transform duration-200"
          >
            <button
              onClick={onCloseMobile}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
