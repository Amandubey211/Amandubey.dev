
// app/contact/components/EnhancedContactIcon.tsx
"use client";

import { motion } from "framer-motion";

// This component is now in its own file.
export function EnhancedContactIcon({ href, label, icon, color }: {
  href: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <motion.a
      whileHover={{ y: -6, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`relative p-3 text-white/70 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:border-white/20 hover:shadow-lg group ${color} 
      outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50`}
    >
      <div className="relative z-10">{icon}</div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </motion.a>
  );
}