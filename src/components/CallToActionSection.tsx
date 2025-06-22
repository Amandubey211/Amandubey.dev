/* components/CallToActionSection.tsx */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Full-width call-to-action block that perfectly matches the reference UI.
 *
 *  •  fills the viewport’s width, but keeps a safe gutter (≈ 4 rem)
 *  •  very soft card-like background with a subtle border & XL corner-radius
 *  •  animated fade / pop-in when it first enters the viewport
 */
export function CallToActionSection() {
  return (
    <section className="mt-6 px-6 md:px-16 mb-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        /**  the big rounded “card” */
        className="mx-auto w-full rounded-[48px] bg-white/5/10 border border-white/10
                   backdrop-blur-md text-center px-6 sm:px-16 py-24"
      >
        {/* status pill */}
        <span
          className="inline-flex items-center gap-3 mx-auto mb-6
             rounded-full bg-[#141c13]    /* deep green-black */
             px-7 py-[10px]               /* generous padding */
             text-[15px] font-medium text-gray-100"
        >
          <span className="block size-[9px] rounded-full bg-lime-400" />
          Available&nbsp;for&nbsp;work
        </span>

        {/* headline */}
        <h2
          className="font-bold leading-[1.08] text-[clamp(2rem,8vw,3.8rem)]
                     text-white tracking-tight mb-6"
        >
          Let&apos;s&nbsp;create&nbsp;your
          <br className="hidden sm:block" />
          next&nbsp;big&nbsp;idea.
        </h2>

        {/* CTA button */}
        <Link
          href="/contact"
          className="inline-block rounded-full border border-white/30
                     px-12 py-4 text-lg font-medium text-white
                     hover:border-white/70 hover:bg-white/5 transition-colors"
        >
          Contact&nbsp;Me
        </Link>
      </motion.div>
    </section>
  );
}
