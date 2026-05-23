import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "navy";
}

export default function Section({ children, className, id, background = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white/80 backdrop-blur-2xl",
    gray: "bg-gray-50/80 backdrop-blur-2xl",
    navy: "bg-navy-900/90 backdrop-blur-2xl text-white",
  };

  return (
    <section id={id} className={cn("py-20 md:py-32", backgrounds[background], className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        {children}
      </div>
    </section>
  );
}
