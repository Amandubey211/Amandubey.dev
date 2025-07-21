"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "./ShinyButton";
// Import the external LetterGlitch component
import LetterGlitch from "./LetterGlitch";

export function CallToActionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-6 mb-3 relative ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-full max-w-screen-lg
                   rounded-[32px] border-white/6
                   backdrop-blur-xl text-center relative overflow-hidden
                   px-6 py-10"
      >
        {/* Animated background - now using the imported LetterGlitch component */}
        {/* The opacity-10 wrapper ensures the overall background effect remains subtle,
            matching the original LetterGlitchBackground's wrapper styling. */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-55">
          <LetterGlitch
            // Pass the hardcoded colors from the original LetterGlitchBackground
            glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            // Pass the hardcoded speed from the original LetterGlitchBackground
            glitchSpeed={50}
            // Original LetterGlitchBackground did not have a radial center vignette
            centerVignette={false}
            // Original LetterGlitchBackground used a linear gradient for the outer effect,
            // so disable LetterGlitch's built-in radial outer vignette.
            outerVignette={false}
            // Original LetterGlitchBackground had smooth transitions enabled
            smooth={true}
          />
          {/* This div re-applies the specific linear gradient overlay that was part of the original LetterGlitchBackground's effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* status pill */}
          <div
            className="mx-auto mb-8 inline-flex items-center gap-2.5
                       rounded-full bg-white/15 px-4 py-1.5
                       text-sm font-medium"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
            </span>
            Available for work
          </div>

          {/* headline */}
          <h2
            className="mb-10 font-semibold leading-tight tracking-tight
                       text-6xl md:text-5xl
                       text-white"
          >
            Let&apos;s create your
            <br />
            next big idea.
          </h2>

          {/* CTA button */}
          <Link
            href="/contact"
            className="inline-block 
                     px-8 py-3 text-base font-medium"
          >
            <ShinyButton
              initialText="Contact Me"
              hoverText="Contact Me"
              className="flex items-center gap-2"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
