"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { InfoCarousel } from "./components/InfoCarousel";
import type { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Contact | Aman Dubey – Let’s Start Your Project",
  description:
    "Get in touch with Aman Dubey to discuss your project ideas, collaborations, or opportunities. Expert in React.js, Next.js, MERN stack, and building scalable, high-performance applications.",
  keywords: [
    "Contact Aman Dubey",
    "Hire Web Developer",
    "React Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Contact | Aman Dubey – Let’s Start Your Project",
    description:
      "Reach out and let's create something amazing together! Specializing in React.js, MERN stack, and scalable web apps.",
    url: "https://amandubey.vercel.app/contact",
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/og/contact-aman.png", // ✅ Store this in /public/og/
        width: 1200,
        height: 630,
        alt: "Contact Aman Dubey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Aman Dubey – Let’s Start Your Project",
    description:
      "Reach out and let's create something amazing together! Specializing in React.js, MERN stack, and scalable web apps.",
    creator: "@AmanDub97115331",
    images: ["https://amandubey.vercel.app/og/contact-aman.png"], // ✅ Direct link
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactPage() {
  return (
    <motion.main
      className="max-w-6xl mx-auto px-6 py-20 lg:py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Header Section */}
      <header className="text-left max-w-2xl mb-16">
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
          viewport={{ once: true, amount: 0.8 }}
        >
          Let&apos;s start a project together
        </motion.h1>
      </header>

      {/* Main Content Grid */}
      <section className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>

        {/* Info Carousel */}
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
      </section>
    </motion.main>
  );
}
