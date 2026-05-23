"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Button from "../ui/Button";
import Section from "../ui/Section";
import HeroParticles from "../ui/HeroParticles";

const HERO_VIDEO = "/image/hero/video_1662313_1779166440.mp4";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = () => {
    setModalOpen(true);
    // slight delay so the element mounts before we play
    setTimeout(() => modalVideoRef.current?.play(), 100);
  };

  const closeModal = () => {
    modalVideoRef.current?.pause();
    setModalOpen(false);
  };

  return (
    <>
      <Section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <HeroParticles />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-navy-900/60">
                New: Advanced AI Residency 2024
              </span>
            </div>
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 leading-[1.05] mb-8"
            >
              Learn AI. Build Products. <br />
              <span className="text-orange-500">Get Hired.</span>
            </motion.h1>
            <p className="text-lg md:text-xl text-foreground/60 font-light max-w-xl leading-relaxed mb-12">
              Premium IT Training with a 100% placement guarantee. Join 10,000+ graduates at top technology companies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">Start Your Journey</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">View Curriculum</Button>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full opacity-60">
              <div>
                <div className="text-2xl font-bold text-navy-900">10k+</div>
                <div className="text-sm uppercase tracking-widest font-bold">Graduates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">95%</div>
                <div className="text-sm uppercase tracking-widest font-bold">Placement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">₹4.5L</div>
                <div className="text-sm uppercase tracking-widest font-bold">Avg Package</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: video card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[400px] md:h-[580px] rounded-3xl overflow-hidden bg-navy-900 group shadow-2xl"
          >
            {/* Muted autoplay background video */}
            <video
              src={HERO_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />

            {/* subtle dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/20 z-10" />

            {/* Play button — click to open fullscreen modal */}
            <button
              id="hero-play-btn"
              onClick={openModal}
              aria-label="Play campus tour video"
              className="absolute inset-0 z-20 flex items-center justify-center group/btn"
            >
              <span className="
                flex items-center justify-center
                w-16 h-16 rounded-full
                bg-white/20 backdrop-blur-md border border-white/30
                text-white shadow-2xl
                transition-all duration-300
                group-hover/btn:bg-orange-500 group-hover/btn:scale-110 group-hover/btn:border-orange-400
              ">
                <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>

            {/* Bottom label card */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-sm">Watch Academy Tour</h4>
                  <p className="text-xs text-foreground/60">Experience our 1,100 sq ft campus</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Fullscreen video modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={HERO_VIDEO}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                aria-label="Close video"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
