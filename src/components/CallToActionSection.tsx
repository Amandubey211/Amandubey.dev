/* components/CallToActionSection.tsx
   — fully responsive, no overflow — */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 mt-6 mb-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        /* card */
        className="mx-auto w-full max-w-screen-lg
                   rounded-[48px] border border-white/10 bg-white/5
                   backdrop-blur-md text-center
                   px-6 sm:px-12 lg:px-20 py-16 sm:py-24"
      >
        {/* status pill */}
        <span
          className="mx-auto mb-6 inline-flex items-center gap-3
                         rounded-full bg-[#141c13] px-6 sm:px-7 py-[10px]
                         text-sm sm:text-[15px] font-medium text-gray-100"
        >
          <span className="block h-[9px] w-[9px] rounded-full bg-lime-400" />
          Available&nbsp;for&nbsp;work
        </span>

        {/* headline */}
        <h2
          className="mb-6 font-bold leading-tight tracking-tight
                       text-[clamp(1.75rem,7.5vw,3.5rem)]   /* 28–56 px */
                       sm:text-[clamp(2rem,5.5vw,3.8rem)]   /* 32–61 px */
                       text-white break-words"
        >
          Let&apos;s&nbsp;create&nbsp;your
          <br className="hidden sm:block" />
          next&nbsp;big&nbsp;idea.
        </h2>

        {/* CTA button */}
        <Link
          href="/contact"
          className="inline-block rounded-full border border-white/30
                     px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-medium
                     text-white transition-colors
                     hover:border-white/70 hover:bg-white/5"
        >
          Contact&nbsp;Me
        </Link>
      </motion.div>
    </section>
  );
}
