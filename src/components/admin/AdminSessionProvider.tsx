'use client';

import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { Toaster } from 'react-hot-toast';

export default function AdminSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionProvider session={session}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a2235',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '13px',
          },
          success: { iconTheme: { primary: '#f97316', secondary: '#fff' } },
        }}
      />
      {children}
    </SessionProvider>
  );
}
