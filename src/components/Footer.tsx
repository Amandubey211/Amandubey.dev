/* components/Footer.tsx */
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  // Instagram,
  Mail,
  Twitter,
  Youtube,
  Code,
  FileText,
  MessageSquare,
} from "lucide-react";

// --- Animation Variants for a more organized and readable animation logic ---

// Variant for the main footer container. It will fade in and slide up.
// The `staggerChildren` property will make its children animate in sequence.
const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.05, // Each child will animate 0.05s after the previous one
    },
  },
};

// Variant for each individual item (copyright text and social icons).
// They will fade in and slide up, driven by the parent's `staggerChildren`.
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Variant for the sophisticated hover effect on the social icons.
// We define a "rest" state and a "hover" state.
const socialIconVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -4, scale: 1.1 }, // Icon lifts up and scales slightly
};

// Variant for the tooltip that appears on hover.
const tooltipVariants: Variants = {
  rest: { opacity: 0, y: 5, scale: 0.95 },
  hover: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

/**
 * Site-wide footer with enhanced animations and micro-interactions.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://linkedin.com/in/profile-amandubey",
      label: "LinkedIn",
      icon: <Linkedin className="size-6" />,
    },
    {
      href: "https://github.com/Amandubey211",
      label: "GitHub",
      icon: <Github className="size-6" />,
    },
    {
      href: "https://leetcode.com/u/amandubey8833/",
      label: "LeetCode",
      icon: <Code className="size-6" />,
    },
    {
      href: "https://docs.google.com/document/d/1CdB-RPXp6hxngGIV4Nks6Iy_agbW5fvdkNghAYQKSXk/edit?tab=t.0",
      label: "Resume",
      icon: <FileText className="size-6" />,
    },
    {
      href: "https://www.youtube.com/@GreenLadderNow",
      label: "YouTube",
      icon: <Youtube className="size-6" />,
    },
    {
      href: "https://topmate.io/aman_dubey_sde_2/",
      label: "Topmate",
      icon: <MessageSquare className="size-6" />,
    },
    // {
    //   href: "https://instagram.com/yourhandle",
    //   label: "Instagram",
    //   icon: <Instagram className="size-6" />,
    // },
    {
      href: "https://twitter.com/AmanDub97115331",
      label: "X / Twitter",
      icon: <Twitter className="size-6" />,
    },
    {
      href: "mailto:amandubey8833@gmail.com",
      label: "E-mail",
      icon: <Mail className="size-6" />,
    },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-b from-transparent to-black/40 text-gray-400">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the footer is visible
      >
        <motion.p
          className="text-sm text-center sm:text-left"
          variants={itemVariants}
        >
          © {year} Aman Dubey. All rights reserved.
        </motion.p>

        <nav className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
          {socials.map(({ href, label, icon }) => (
            <motion.div key={label} variants={itemVariants}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative"
              >
                <motion.div
                  variants={tooltipVariants}
                  className="absolute bottom-full mb-2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs font-semibold text-white pointer-events-none"
                >
                  {label}
                </motion.div>
                <Link
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="block p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <motion.div
                    variants={socialIconVariants}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    {icon}
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </footer>
  );
}
