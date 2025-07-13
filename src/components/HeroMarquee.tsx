"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { Sparkles } from "lucide-react";

interface Props {
  className?: string;
}

const words = ["Designing", "Graphics", "Animations", "Community"] as const;

export function HeroMarquee({ className }: Props) {
  const list = [...words, ...words]; // duplicate for seamless loop
  return (
    <div
      className={clsx(
        "overflow-x-hidden py-6 border-y border-white/10",
        className
      )}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap text-6xl font-semibold text-white/10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {list.map((word, i) => (
          <span key={i} className="flex items-center gap-10">
            {word}
            <Sparkles size={28} strokeWidth={1.25} className="text-white/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
