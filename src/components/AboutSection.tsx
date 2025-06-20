"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 text-lime-400 tracking-wider mb-8"
      >
        <Sparkles size={18} className="text-lime-400" /> ABOUT ME
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl leading-snug text-gray-200"
      >
        I’m Devraj Chatribin, with over{" "}
        <span className="text-white font-semibold">5+ years</span> of experience
        in design &amp; development with strong focus on producing high-quality
        & impactful digital experiences. I have worked with some of the most
        innovative industry leaders to help build their top-notch products.
      </motion.p>
    </section>
  );
}
