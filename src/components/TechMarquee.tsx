"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Props {
  className?: string;
}

const words = [
  "Animations",
  "Community",
  "Development",
  "Mentor",
  "Websites",
  "Designing",
] as const;

export function TechMarquee({ className }: Props) {
  const loop = [...words, ...words];

  return (
    <div
      className={clsx(
        "relative overflow-x-hidden border-y border-white/10 py-6",
        className
      )}
    >
      {/* scrolling row */}
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {loop.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold text-white/40"
          >
            {w}
            <span className="text-white/40">✧</span>
          </span>
        ))}
      </motion.div>

      {/* fade-&-blur overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-[#0f0f10] to-transparent backdrop-blur-sm" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-[#0f0f10] to-transparent backdrop-blur-sm" />
    </div>
  );
}
