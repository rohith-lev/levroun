"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "../ui/Section";

const companies = [
  { name: "Tata Consultancy Services", logo: "/image/companies/Tata Consultancy Services.png" },
  { name: "Infosys", logo: "/image/companies/Infosys.png" },
  { name: "Wipro", logo: "/image/companies/wipro.png" },
  { name: "Accenture", logo: "/image/companies/Accenture.png" },
  { name: "Capgemini", logo: "/image/companies/Capgemini.png" },
  { name: "Cognizant", logo: "/image/companies/Cognizant.png" },
  { name: "HCL", logo: "/image/companies/Hcl.png" },
  { name: "Hexaware Technologies", logo: "/image/companies/Hexaware Technologies.png" },
  { name: "Mphasis", logo: "/image/companies/Mphasis.png" },
  { name: "Tech Mahindra", logo: "/image/companies/Tech Mahindra.png" },
  { name: "Amazon", logo: "/image/companies/amazon.png" },
  { name: "Inzovate", logo: "/image/companies/inzovate.jpeg" },
  { name: "Levroun", logo: "/image/companies/levroun.png" },
  { name: "YESP", logo: "/image/companies/yesp.jpeg" },
];

const row1 = companies.slice(0, 7);
const row2 = companies.slice(7);

function MarqueeRow({ items, reverse = false }: { items: typeof companies; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative w-full py-2">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            className="group flex-shrink-0 flex items-center justify-center w-48 h-24 rounded-2xl bg-white border border-gray-100/80 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 px-6 cursor-default"
          >
            <div className="relative w-full h-12 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PlacementSection() {
  return (
    <Section id="achievements">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-6 dark:bg-orange-500/10 dark:border-orange-500/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400">500+ Hiring Partners</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-navy-900 mb-6 dark:text-white"
        >
          Our Graduates Drive Innovation at <br />
          <span className="text-orange-500">World-Class Companies.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/60 font-light leading-relaxed dark:text-slate-400"
        >
          From early-stage startups to Fortune 500 giants, our placement network spans the entire technology ecosystem.
        </motion.p>
      </div>

      {/* Dual-row infinite marquee */}
      <div className="space-y-6 mb-24 overflow-hidden">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Placement Rate", value: "95%", sub: "Higher than industry average" },
          { label: "Average Package", value: "₹4.5L", sub: "Annual CTC for freshers" },
          { label: "Hiring Partners", value: "500+", sub: "Trusted by top tech firms" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-start hover:bg-white hover:shadow-xl transition-all duration-500 group dark:bg-[#161B22]/40 dark:border-white/5 dark:hover:bg-[#161B22]"
          >
            <div className="text-4xl font-bold text-navy-900 mb-2 group-hover:text-orange-500 transition-colors dark:text-white">{stat.value}</div>
            <div className="text-lg font-bold text-navy-900 mb-1 dark:text-white">{stat.label}</div>
            <div className="text-sm text-foreground/50 dark:text-slate-400">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
