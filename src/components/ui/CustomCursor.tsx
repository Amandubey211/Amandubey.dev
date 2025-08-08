// components/ui/CustomCursor.tsx (Enhanced Drop-in Replacement)
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useCursorContext } from "@/contexts/CursorContext";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";

export function CustomCursor() {
  const { variant } = useCursorContext();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Use MotionValues for smooth, performant tracking without React re-renders
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isPointer, setIsPointer] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isIdle, setIsIdle] = useState(false); // State to track mouse inactivity

  useEffect(() => {
    // Check if the primary input mechanism is a fine pointer (like a mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointer(mediaQuery.matches);

    let timeoutId: NodeJS.Timeout;

    const mouseMove = (e: MouseEvent) => {
      // On mouse move, reset the idle state and clear any existing timer
      setIsIdle(false);
      clearTimeout(timeoutId);

      // Update cursor position directly via MotionValues
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Set a new timer to detect when the mouse stops moving
      timeoutId = setTimeout(() => {
        setIsIdle(true);
      }, 2000); // 2 seconds of inactivity triggers the idle state
    };

    const mouseDown = () => setIsPressed(true);
    const mouseUp = () => setIsPressed(false);

    // Only add listeners if it's a pointer device to avoid issues on touchscreens
    if (mediaQuery.matches) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mousedown", mouseDown);
      window.addEventListener("mouseup", mouseUp);
    }

    // Cleanup listeners and timeout on component unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      clearTimeout(timeoutId);
    };
  }, [cursorX, cursorY]);

  // Don't render the custom cursor if the user prefers reduced motion or on non-pointer devices
  if (!isPointer || prefersReducedMotion) {
    return null;
  }

  // Determine the final animation variant. If idle, use the "idle" variant; otherwise, use the one from the context.
  const finalVariant = isIdle ? "idle" : variant;

  // Variants for the larger, trailing outline
  const outlineVariants = {
    default: { width: 24, height: 24, opacity: 1 },
    hover: { width: 64, height: 64, opacity: 0.2 },
    link: { width: 40, height: 40, opacity: 0.25 }, // Specific variant for text links
    text: { width: 4, height: 24, opacity: 1 },
    idle: { width: 0, height: 0, opacity: 0 }, // Fades out when idle
  };

  // Variants for the smaller, central dot
  const dotVariants = {
    default: { scale: isPressed ? 0.7 : 1 },
    hover: { scale: isPressed ? 0.7 : 1 },
    link: { scale: isPressed ? 0.7 : 1 },
    text: { scale: 0 }, // Hide the dot in text mode
    idle: { scale: 0 }, // Hide the dot when idle
  };

  return (
    <>
      {/* The Outline - This one has a spring animation and "drags" behind */}
      <motion.div
        // Using `mix-blend-difference` creates a high-contrast cursor that inverts colors
        className="fixed top-0 left-0 rounded-full border-2 border-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={outlineVariants}
        animate={finalVariant}
        transition={{ type: "spring", mass: 0.5, stiffness: 400, damping: 30 }}
      />

      {/* The Dot - This one follows the mouse instantly and reacts to clicks */}
      <motion.div
        className="fixed top-0 left-0 rounded-full h-2 w-2 bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={dotVariants}
        animate={finalVariant}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </>
  );
}
