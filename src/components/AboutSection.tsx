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
        textClassName="text-3xl md:text-4xl leading-snug text-gray-200"
        enableBlur={true}
        blurStrength={10}
        baseOpacity={0.2}
      >
        I&apos;m Aman Dubey, a Full-Stack Developer with 2 years of experience
        building high-performance applications using React and Node.js. I focus
        on clean architecture, intuitive UI/UX, and optimizing core web vitals.
        My work has improved app performance by 30% and strengthened security by
        25%. I&apos;ve built scalable SaaS platforms, secure fintech systems,
        and AI-driven features, while advocating for CI/CD pipelines and
        reusable component libraries for efficient development.
      </ScrollReveal>
    </section>
  );
}
