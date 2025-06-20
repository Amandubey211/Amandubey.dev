"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const RotatingTalk = ({ className }: Props) => {
  // smooth 360° rotation tied to scroll
  const { scrollY } = useScroll();
  const rotate = useSpring(scrollY, {
    stiffness: 30,
    damping: 20,
    mass: 1,
  });

  return (
    <motion.button
      style={{ rotate }}
      className={clsx(
        "size-28 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-sm uppercase tracking-widest text-white hover:bg-black/60 transition",
        className
      )}
    >
      <span className="sr-only">Let’s talk</span>
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5 12h14M13 5l6 7-6 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
};
