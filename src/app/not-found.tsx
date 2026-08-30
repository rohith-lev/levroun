'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="relative z-10 text-center max-w-lg space-y-6">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The page you are looking for does not exist or has been moved. Explore our enterprise solutions from the home page.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2"
          >
            <Home className="w-4 h-4" /> Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
