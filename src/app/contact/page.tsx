// app/contact/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { InfoCarousel } from "./components/InfoCarousel";

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactPage() {
  return (
    <motion.main
      className="max-w-6xl mx-auto px-6 py-20 lg:py-24 "
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Header Section */}
      <div className="text-left max-w-2xl mb-16">
        <motion.div
          className="flex items-center gap-2 text-lime-400 text-sm font-semibold tracking-wider mb-4"
          variants={itemVariants}
        >
          <Sparkles size={16} />
          CONNECT WITH ME
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter leading-tight"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          Let&apos;s start a project together
        </motion.h1>
      </div>

      {/* Main Content Grid - UPDATED for responsiveness */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Contact Form Component */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>

        {/* Profile Card Component */}
        <motion.div
          className="flex justify-center lg:justify-start"
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <InfoCarousel />
        </motion.div>
      </div>
    </motion.main>
  );
}
