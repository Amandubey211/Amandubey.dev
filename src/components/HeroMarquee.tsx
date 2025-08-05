"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Sparkles } from "lucide-react";

interface Props {
  className?: string;
}

const words = [
  "FULL-STACK DEVELOPMENT",
  "REACT.JS",
  "NODE.JS",
  "FRONTEND OPTIMIZATION",
  "SCALABLE ARCHITECTURE",
  "INTUITIVE UI/UX",
  "WEB PERFORMANCE",
  "CI/CD PIPELINES",
  "AI-POWERED SOLUTIONS",
  "FINTECH SYSTEMS",
  "DATABASE MANAGEMENT",
  "CLOUD FUNCTIONS",
] as const;

export function HeroMarquee({ className }: Props) {
  const list = [...words, ...words]; // Duplicate words for a seamless, continuous loop

  return (
    <div
      className={clsx(
        "overflow-x-hidden py-6 border-y border-white/10",
        className
      )}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap text-2xl font-semibold text-white/10 px-4 md:px-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }} // Continuous, linear loop
      >
        {list.map((word, i) => (
          <span key={i} className="flex items-center gap-5">
            {word}
            <Sparkles size={20} strokeWidth={1.2} className="text-white/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
