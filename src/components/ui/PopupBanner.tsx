'use client';

import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';

interface Popup {
  _id: string;
  title: string;
  content: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
  type: 'internship' | 'admission' | 'webinar' | 'discount';
  trigger: 'timed' | 'exit_intent' | 'immediate';
  timerDelay?: number;
  frequency: 'once' | 'always' | 'daily';
  pages: 'homepage' | 'all';
}

const TYPE_ACCENT: Record<string, string> = {
  internship: 'from-blue-600 to-blue-500',
  admission: 'from-orange-600 to-orange-500',
  webinar: 'from-purple-600 to-purple-500',
  discount: 'from-emerald-600 to-emerald-500',
};

// Allowlist of safe URL origins for CTA links
const ALLOWED_ORIGINS = ['https://levroun.com', 'http://localhost:3000'];


function safeCTAUrl(url: string): string {
  if (!url) return '/contact';
  if (url.startsWith('/') || url.startsWith('#')) return url;
  try {
    const parsed = new URL(url, 'https://levroun.com');

    if (ALLOWED_ORIGINS.some(o => parsed.origin === new URL(o).origin)) {
      return parsed.pathname + parsed.search + parsed.hash;
    }
    return '/contact';
  } catch {
    return '/contact';
  }
}

const STORAGE_KEY = 'levroun_popup_seen';


function shouldShow(popup: Popup): boolean {
  if (popup.frequency === 'always') return true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const seen: Record<string, number> = raw ? JSON.parse(raw) : {};
    const last = seen[popup._id];
    if (!last) return true;
    if (popup.frequency === 'daily') {
      return Date.now() - last > 24 * 60 * 60 * 1000;
    }
    // 'once'
    return false;
  } catch {
    return true;
  }
}

function markSeen(id: string) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const seen: Record<string, number> = raw ? JSON.parse(raw) : {};
    seen[id] = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seen));
  } catch {/* ignore */}
}

export default function PopupBanner() {
  const [popup, setPopup] = useState<Popup | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch('/api/admin/popups/active')
      .then((r) => r.json())
      .then(({ popup: p }: { popup: Popup | null }) => {
        if (!p || !shouldShow(p)) return;

        const show = () => {
          setPopup(p);
          setVisible(true);
          markSeen(p._id);
        };

        if (p.trigger === 'immediate') {
          show();
        } else if (p.trigger === 'timed') {
          const t = setTimeout(show, p.timerDelay ?? 3000);
          return () => clearTimeout(t);
        } else if (p.trigger === 'exit_intent') {
          const handler = (e: MouseEvent) => {
            if (e.clientY < 10) {
              show();
              document.removeEventListener('mouseleave', handler);
            }
          };
          document.addEventListener('mouseleave', handler);
          return () => document.removeEventListener('mouseleave', handler);
        }
      })
      .catch(() => {/* silently ignore */});
  }, []);

  const close = useCallback(() => setVisible(false), []);

  if (!visible || !popup) return null;

  const accent = TYPE_ACCENT[popup.type] ?? 'from-orange-600 to-orange-500';

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className="relative w-full max-w-md bg-[#0D1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-popup-in">
        {/* Gradient stripe */}
        <div className={`h-1 w-full bg-gradient-to-r ${accent}`} />

        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 pt-5">
          {/* Badge */}
          <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r ${accent} text-white mb-4`}>
            {popup.type}
          </span>

          {/* Image */}
          {popup.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={popup.imageUrl}
              alt={popup.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
          )}

          <h3 className="text-lg font-bold text-white mb-2">{popup.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">{popup.content}</p>

          <div className="flex gap-3">
            <a
              href={safeCTAUrl(popup.ctaUrl)}
              className={`flex-1 text-center py-3 rounded-xl bg-gradient-to-r ${accent} text-white text-sm font-bold hover:opacity-90 transition-opacity`}
              rel="noopener noreferrer"
            >
              {popup.ctaText}
            </a>
            <button
              onClick={close}
              className="px-4 py-3 rounded-xl bg-white/5 text-slate-400 text-sm hover:bg-white/10 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popup-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)      scale(1); }
        }
        .animate-popup-in { animation: popup-in 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }
      `}</style>
    </div>
  );
}
