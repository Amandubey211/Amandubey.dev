"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

// Use Framer Motion's HTMLMotionProps to avoid type conflicts.
// This interface already includes all standard button attributes like `onClick`.
interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  initialText: string;
  hoverText: string;
}

/**
 * A reusable, animated button component.
 * On hover, a white background elegantly fills up from the bottom,
 * and the text content smoothly transitions.
 *
 * @param {string} initialText - The text displayed by default.
 * @param {string} hoverText - The text displayed on hover.
 * @param {string} className - Additional classes for styling.
 */
export function ShinyButton({
  initialText,
  hoverText,
  className = "",
  ...props // Now correctly typed as props for a motion.button
}: ShinyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the text
  const textVariants = {
    initial: { y: 0 },
    hover: { y: "-125%" },
  };

  const hoverTextVariants = {
    initial: { y: "125%" },
    hover: { y: 0 },
  };

  return (
    <motion.button
      {...props} // The spread props now match the expected type perfectly
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "relative overflow-hidden cursor-pointer rounded-full border border-white/30",
        "px-8 py-3 text-lg font-medium",
        "transition-colors duration-300",
        isHovered ? "text-black" : "text-white",
        className
      )}
      style={{
        transform: "translateZ(0)", // Promotes to a new GPU layer for smoother animation
        ...props.style, // Spread any incoming style props
      }}
    >
      {/* Container to handle text layout */}
      <span className="relative block h-7 w-40 text-center">
        <motion.span
          className="absolute inset-x-0"
          variants={textVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {initialText}
        </motion.span>
        <motion.span
          className="absolute inset-x-0"
          variants={hoverTextVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {hoverText}
        </motion.span>
      </span>

      {/* Animated background - Fill from bottom */}
      <motion.div
        className="absolute inset-0 z-[-1] bg-white"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.button>
  );
}
