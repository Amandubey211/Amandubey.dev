/* components/Footer.tsx */
"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // Import motion for animations
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Twitter,
  Youtube, // New icon for YouTube
  Code, // Reusing for LeetCode
  FileText, // New icon for Resume
  MessageSquare, // New icon for Topmate (generic choice)
} from "lucide-react";

/**
 * Site-wide footer
 *
 *  • left-aligned copyright, dynamic year
 *  • right-aligned social links with matching monochrome icon style
 *  • subtle top border / gradient so it melts into the dark theme
 */
export function Footer() {
  const year = new Date().getFullYear();

  const socials: { href: string; label: string; icon: React.ReactNode }[] = [
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
      icon: <Code className="size-6" />, // Using Code icon for LeetCode
    },
    {
      href: "https://docs.google.com/document/d/1CdB-RPXp6hxngGIV4Nks6Iy_agbW5fvdkNghAYQKSXk/edit?tab=t.0",
      label: "Resume",
      icon: <FileText className="size-6" />, // Icon for Resume
    },
    {
      href: "https://www.youtube.com/@GreenLadderNow",
      label: "YouTube",
      icon: <Youtube className="size-6" />, // Icon for YouTube
    },
    {
      href: "https://topmate.io/aman_dubey_sde_2/",
      label: "Topmate",
      icon: <MessageSquare className="size-6" />, // Generic icon for Topmate
    },
    {
      href: "https://instagram.com/yourhandle", // ← update this with your actual handle
      label: "Instagram",
      icon: <Instagram className="size-6" />,
    },
    {
      href: "https://twitter.com/yourhandle", // ← update this with your actual handle
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
    <footer
      className="relative z-10 bg-gradient-to-b
                 from-transparent to-black/40 text-gray-400"
    >
      {/* Increased width for content within the footer */}
      <div
        className="max-w-7xl mx-auto
                   px-6 md:px-16 py-8 flex flex-col sm:flex-row
                   items-center justify-between gap-4 sm:gap-6"
      >
        <p className="text-sm text-center sm:text-left">
          © {year} Aman Dubey. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
          {socials.map(({ href, label, icon }) => (
            <motion.div // Wrap with motion.div for animation
              key={label}
              whileHover={{ scale: 1.1, y: -2 }} // Pop up slightly on hover
              whileTap={{ scale: 0.95 }} // Slight press effect on click
              transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring animation
            >
              <Link
                href={href}
                target="_blank"
                aria-label={label}
                className="hover:text-white transition-colors duration-200" // Added duration for smooth color transition
              >
                {icon}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
