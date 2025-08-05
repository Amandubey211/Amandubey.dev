// components/ui/CustomCursor.tsx (Enhanced)
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursorContext } from "@/contexts/CursorContext";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";

export function CustomCursor() {
  const { variant } = useCursorContext();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if the device has a fine pointer (e.g., a mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);

    const mouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const mouseDown = () => setIsPressed(true);
    const mouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  // Return null if the device is not a pointer device or if user prefers reduced motion
  if (!isPointer || prefersReducedMotion) {
    return null;
  }

  // Variants for the larger, dragging outline
  const outlineVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      width: 64,
      height: 64,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 12,
      width: 4,
      height: 24,
    },
  };

  // Variants for the smaller, instant dot
  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 8,
      height: 8,
      scale: isPressed ? 0.8 : 1,
      backgroundColor: "#a3ff4e",
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 8,
      height: 8,
      scale: isPressed ? 0.8 : 1,
      backgroundColor: "#000000",
    },
    text: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 0, // Hide the dot in text mode
      height: 0,
      scale: 0,
    },
  };

  return (
    <>
      {/* The Outline - This one has the spring animation and "drags" behind */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-lime-400 pointer-events-none z-[9999]"
        variants={outlineVariants}
        animate={variant}
        transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 15 }}
      />
      {/* The Dot - This one follows the mouse instantly and reacts to clicks */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-lime-400 pointer-events-none z-[9999]"
        variants={dotVariants}
        animate={variant}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}