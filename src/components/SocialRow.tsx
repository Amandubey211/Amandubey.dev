"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import ShinyText from "./ShinyText"; // Adjust the import path as needed

// Extend the socials array with the new links
const socials = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/profile-amandubey/" },
  { label: "GITHUB", href: "https://github.com/Amandubey211" },
  { label: "LEETCODE", href: "https://leetcode.com/u/amandubey8833/" },
  { label: "TOPMATE", href: "https://topmate.io/aman_dubey_sde_2/" },
  { label: "X", href: "https://x.com/AmanDub97115331" },
  { label: "GMAIL", href: "mailto:amandubey8833@gmail.com" },
] as const;

// Create a MotionLink component for easier animation application
const MotionLink = motion(Link);

export function SocialRow({ className }: { className?: string }) {
  // State to track which social link is currently being hovered
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  return (
    <div
      className={clsx("flex flex-wrap gap-6 text-lg tracking-wider", className)}
      // Reset hoveredLabel when the mouse leaves the entire social row area
      onMouseLeave={() => setHoveredLabel(null)}
    >
      <AnimatePresence>
        {socials.map(({ label, href }) => (
          <MotionLink
            key={label}
            href={href}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="group relative" // 'group' class for hover effects on children
            onMouseEnter={() => setHoveredLabel(label)}
            // Framer Motion animation for opacity and scale
            animate={{
              // If no link is hovered OR this specific link is hovered, full opacity
              // Otherwise, reduce opacity for other links
              opacity:
                hoveredLabel === null || hoveredLabel === label ? 1 : 0.4,
              // Subtle scale up on hover for the hovered link
              scale: hoveredLabel === label ? 1.03 : 1,
            }}
            transition={{
              duration: 0.25, // Quick transition for the fade/scale effect
              ease: "easeOut",
            }}
          >
            {/* Wrapping the label in ShinyText */}
            <ShinyText
              text={label}
              speed={3} // Adjust speed as needed for ShinyText's internal animation
              // The base text color for ShinyText, group-hover for the outer link
              // will make it white (handled by ShinyText's internal group-hover logic)
              className="text-gray-300 transition"
            />
            <span
              className={clsx(
                "inline-block transition-all duration-200 ml-1", // transition for arrow movement
                "text-gray-300 group-hover:text-white", // Color transition for arrow
                "group-hover:translate-x-1 group-hover:-translate-y-1" // Arrow micro-animation
              )}
              aria-hidden // Hide from screen readers as it's purely decorative
            >
              ↗︎
            </span>
          </MotionLink>
        ))}
      </AnimatePresence>
    </div>
  );
}
