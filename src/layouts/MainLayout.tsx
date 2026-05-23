'use client';

import React from "react";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import FooterSection from "@/components/sections/FooterSection";
import FloatingBackground from "@/components/ui/FloatingBackground";
import VisitorTracker from "@/components/ui/VisitorTracker";
import PopupBanner from "@/components/ui/PopupBanner";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <FloatingBackground />
      <FloatingNavbar />
      <div className="relative flex-1">{children}</div>
      <FooterSection />
      {/* Analytics & Campaigns — invisible, must be outside admin routes */}
      <VisitorTracker />
      <PopupBanner />
    </main>
  );
}
