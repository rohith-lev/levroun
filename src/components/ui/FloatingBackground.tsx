"use client";

import React from "react";

const orbs = [
  { color: "bg-purple-500/20", size: "w-[400px] h-[400px]", top: "-10%", left: "-5%" },
  { color: "bg-blue-500/20", size: "w-[500px] h-[500px]", top: "20%", right: "-10%" },
  { color: "bg-orange-500/10", size: "w-[300px] h-[300px]", bottom: "10%", left: "10%" },
  { color: "bg-pink-500/15", size: "w-[450px] h-[450px]", bottom: "-5%", right: "5%" },
];

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((orb, index) => (
        <div
          key={`orb-${index}`}
          className={`absolute rounded-full blur-[100px] transition-all ${orb.color} ${orb.size}`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
        />
      ))}
    </div>
  );
}
