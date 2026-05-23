"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const companies = [
  { 
    name: "Google", 
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.228 1.228-3.14 2.568-6.912 2.568-5.94 0-10.56-4.82-10.56-10.76s4.62-10.76 10.56-10.76c3.22 0 5.52 1.272 7.252 2.912l2.308-2.308c-2.46-2.304-5.632-4.12-9.56-4.12-7.548 0-13.72 6.172-13.72 13.72s6.172 13.72 13.72 13.72c4.032 0 7.08-1.332 9.42-3.78 2.436-2.436 3.204-5.856 3.204-8.628 0-.816-.072-1.584-.204-2.304H12.48z"/>
      </svg>
    )
  },
  { 
    name: "Amazon", 
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M15.935 17.276c-2.736 2.023-6.526 3.013-9.52 3.013-4.14 0-7.855-1.516-10.334-4.194l1.32-1.077c1.944 2.223 4.962 3.522 8.448 3.522 2.457 0 5.48-.733 7.747-2.316.313-.217.653-.48.905-.72.247-.235.347-.354.492-.354.14 0 .21.104.225.263l.017.382c.01.218.005.418-.302.723-.193.19-.607.546-.998.758zm2.662-1.574c-.167-.223-.153-.553.036-.74.195-.193.532-.198.71-.027l1.79 1.71c.148.14.133.393.012.51-.12.115-.36.142-.513.003l-2.035-1.456zm-.437 2.06c-.114-.15-.1-.403.033-.538.134-.135.372-.144.512-.023l1.83 1.57c.123.106.126.315.016.425-.11.11-.31.115-.434.02l-1.957-1.454zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      </svg>
    )
  },
  { 
    name: "Microsoft", 
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
      </svg>
    )
  },
  { 
    name: "Meta", 
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M14.68 7.1c-1.34 0-2.6 1.07-2.6 2.44v4.92c0 1.37 1.26 2.44 2.6 2.44 1.35 0 2.61-1.07 2.61-2.44V9.54c0-1.37-1.26-2.44-2.61-2.44zM22.1 12c0 5.58-4.52 10.1-10.1 10.1S1.9 17.58 1.9 12 6.42 1.9 12 1.9 22.1 6.42 22.1 12zm-3.09 0c0-3.37-2.73-6.1-6.1-6.1-3.37 0-6.1 2.73-6.1 6.1 0 3.37 2.73 6.1 6.1 6.1 3.37 0 6.1-2.73 6.1-6.1z"/>
      </svg>
    )
  },
  { 
    name: "Netflix", 
    logo: (
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M5.132 24l4.316-11.442h.054L13.818 24h5.05L14.55 12.6h.055L18.914 0h-5.05l-4.316 11.442h-.054L5.178 0h-5.05L4.45 11.4h-.055L0 24h5.132z"/>
      </svg>
    )
  },
  { 
    name: "TCS", 
    logo: (
      <div className="font-black text-2xl tracking-tighter">TCS</div>
    )
  },
  { 
    name: "Infosys", 
    logo: (
      <div className="font-black text-2xl tracking-tighter">Infosys</div>
    )
  },
  { 
    name: "Wipro", 
    logo: (
      <div className="font-black text-2xl tracking-tighter">Wipro</div>
    )
  },
];

export default function PlacementSection() {
  return (
    <Section id="achievements">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold tracking-tight text-navy-900 mb-6">
          Our Graduates Drive Innovation at <br/>
          <span className="text-orange-500">World-Class Companies.</span>
        </h2>
        <p className="text-lg text-foreground/60 font-light leading-relaxed">
          From early-stage startups to Fortune 500 giants, our placement network spans the entire technology ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {companies.map((company) => (
          <div 
            key={company.name} 
            className="flex items-center justify-center p-12 border border-gray-100 rounded-[2rem] bg-white hover:border-orange-500/20 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 group"
          >
            <div className="relative w-full h-12 flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 text-navy-900">
              {company.logo}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { label: "Placement Rate", value: "95%", sub: "Higher than industry average" },
          { label: "Average Package", value: "₹4.5L", sub: "Annual CTC for freshers" },
          { label: "Hiring Partners", value: "500+", sub: "Trusted by top tech firms" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-start hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</div>
            <div className="text-lg font-bold text-navy-900 mb-1">{stat.label}</div>
            <div className="text-sm text-foreground/50">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
