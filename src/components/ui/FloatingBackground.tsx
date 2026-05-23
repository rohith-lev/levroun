"use client";

import { motion } from "framer-motion";

const orbs = [
  { color: "bg-purple-500/20", size: "w-[400px] h-[400px]", top: "-10%", left: "-5%", delay: 0 },
  { color: "bg-blue-500/20", size: "w-[500px] h-[500px]", top: "20%", right: "-10%", delay: 2 },
  { color: "bg-orange-500/10", size: "w-[300px] h-[300px]", bottom: "10%", left: "10%", delay: 4 },
  { color: "bg-pink-500/15", size: "w-[450px] h-[450px]", bottom: "-5%", right: "5%", delay: 1 },
];

const particles = [
  { color: "bg-orange-500", size: "w-2 h-2", top: "15%", left: "20%", duration: 15 },
  { color: "bg-blue-500", size: "w-3 h-3", top: "45%", right: "15%", duration: 20 },
  { color: "bg-purple-500", size: "w-2 h-2", bottom: "25%", left: "40%", duration: 18 },
  { color: "bg-pink-500", size: "w-4 h-4", top: "70%", left: "10%", duration: 25 },
];

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large Soft Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
        />
      ))}

      {/* Small Sharp Particles */}
      {particles.map((p, index) => (
        <motion.div
          key={`particle-${index}`}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full blur-[2px] opacity-20 ${p.color} ${p.size}`}
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
          }}
        />
      ))}
    </div>
  );
}
