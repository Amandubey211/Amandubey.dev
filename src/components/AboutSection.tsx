"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-32">
      {/* small heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 text-lime-400 tracking-wider mb-8"
      >
        <Sparkles size={18} className="text-lime-400" />
        ABOUT&nbsp;ME
      </motion.h2>

      {/* Scroll-triggered reveal with blur */}
      <ScrollReveal
        containerClassName=""
        textClassName="text-3xl md:text-4xl leading-snug text-gray-200"
        enableBlur={true}
        blurStrength={10} // Increased from default 5 to make more noticeable
        baseOpacity={0.2} // Lower initial opacity for more dramatic effect
      >
        I'm Aman Dubey, an MCA-trained full-stack dev who crafts lightning-fast
        React and MERN products. I obsess over clean architecture,
        micro-animations and Core Web Vitals—often slicing load times by 50
        percent while keeping accessibility at 100 percent.
      </ScrollReveal>
    </section>
  );
}
