"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeUp({
  children,
  className,
}: FadeUpProps) {
  return (
    <div className={cn("transition-all duration-300", className)}>
      {children}
    </div>
  );
}
