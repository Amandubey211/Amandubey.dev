"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-16">
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
        textClassName="text-2xl md:text-3xl leading-snug text-gray-200"
        enableBlur={true}
        blurStrength={10}
        baseOpacity={0.2}
      >
        I&#39;m Aman Dubey, a Full-Stack Developer with 2 years of experience
        building scalable, high-performance apps using React and Node.js. I
        specialize in clean architecture, intuitive UI/UX, and optimizing web
        vitals. My work has boosted app performance by 30% and enhanced security
        by 25%. I&#39;ve built SaaS platforms, secure fintech systems, and
        AI-powered features, while promoting CI/CD and reusable component
        libraries for efficient development.
      </ScrollReveal>
    </section>
  );
}
