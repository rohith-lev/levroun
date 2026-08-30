'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function getOrCreateSessionId(): string {
  try {
    let id = sessionStorage.getItem('inzovate_session');
    if (!id) {
      id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      sessionStorage.setItem('inzovate_session', id);
    }
    return id;
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
}

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const sessionId = getOrCreateSessionId();
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, page: pathname }),
    }).catch(() => {
      // Silently ignore tracking errors — never affect UX
    });
  }, [pathname]);

  return null;
}
