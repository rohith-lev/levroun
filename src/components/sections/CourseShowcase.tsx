"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import Image from "next/image";

const phases = [
  {
    title: "Phase 01: Core Foundations",
    description: "Deep dive into the fundamental principles of technology, data structures, and algorithmic thinking. We build the base before scaling the heights.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Phase 02: Advanced Specialization",
    description: "Choose your path: Full Stack, AI/ML, or Cloud Infrastructure. Work with industry-standard tools and frameworks in our high-end labs.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Phase 03: Industry Projects",
    description: "Build real-world products for actual clients. Experience the full SDLC, from requirement gathering to production deployment.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function CourseShowcase() {
  return (
    <Section id="courses" background="navy">
      <div className="max-w-4xl mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
          The Journey from Beginner to <br/>
          <span className="text-orange-500">Industry Leader.</span>
        </h2>
        <p className="text-lg text-white/60 font-light leading-relaxed">
          Our curriculum isn&apos;t just a list of topics. It&apos;s a structured journey designed to transform your mindset and skill set for the global stage.
        </p>
      </div>

      <div className="space-y-32 md:space-y-64">
        {phases.map((phase) => (
          <div key={phase.title} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:items-start">
            <div className="md:sticky md:top-40 h-fit">
              <h3 className="text-3xl font-bold text-white mb-6">{phase.title}</h3>
              <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
                {phase.description}
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-[2px] bg-orange-500 mt-3" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                  4 Weeks Duration
                </span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={phase.image}
                alt={phase.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
}
