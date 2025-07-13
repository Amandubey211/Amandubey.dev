/* components/CallToActionSection.tsx
   — fully responsive, no overflow — */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "./ShinyButton";

export function CallToActionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-6 mb-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        /* card */
        className="mx-auto w-full max-w-screen-lg
                   rounded-[32px]  border-white/10 bg-[#101010]
                   backdrop-blur-xl text-center
                   px-6 py-10"
      >
        {/* status pill */}
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2.5
                         rounded-full bg-white/5 px-4 py-1.5
                         text-sm font-medium text-gray-200"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
          </span>
          Available for work
        </div>

        {/* headline */}
        <h2
          className="mb-10 font-semibold leading-tight tracking-tight
                       text-4xl md:text-5xl
                       text-white"
        >
          Let&apos;s create your
          <br />
          next big idea.
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
            className="flex items-center gap-2" // You can still add custom classes
          >
            {/* This demonstrates how children could be added, though the current text prop is simpler */}
          </ShinyButton>
        </Link>
      </motion.div>
    </section>
  );
}
