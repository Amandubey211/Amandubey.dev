// app/contact/components/SocialLinks.tsx
"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/profile-amandubey/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Amanstudentdiwan", label: "GitHub", icon: Github },
  { href: "https://instagram.com/your-handle", label: "Instagram", icon: Instagram },
  { href: "mailto:amandubey8833@gmail.com", label: "Email", icon: Mail },
  { href: "https://twitter.com/your-handle", label: "Twitter", icon: Twitter },
];

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 pt-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#A3E635' }} // lime-400
            whileTap={{ scale: 0.9 }}
            className="text-gray-500 transition-colors"
          >
            <Icon size={22} />
          </motion.a>
        );
      })}
    </div>
  );
}