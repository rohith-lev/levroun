'use client';

import React from "react";
import { usePathname } from "next/navigation";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import InzovateFooter from "@/components/sections/InzovateFooter";
import { DemoModalProvider } from "@/context/DemoModalContext";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <DemoModalProvider>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white selection:bg-blue-500/20 selection:text-blue-700">
        <FloatingNavbar />
        <main className="relative flex-1">
          {children}
        </main>
        <InzovateFooter />
      </div>
    </DemoModalProvider>
  );
}
