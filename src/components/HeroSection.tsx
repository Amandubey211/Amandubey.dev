"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SocialRow } from "./SocialRow";
import { HeroMarquee } from "./HeroMarquee";

export function HeroSection() {
  /* ───── stagger presets */
  const parent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const child = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-40">
      {/* greeting row */}
      <motion.p
        variants={child}
        initial="hidden"
        animate="show"
        className="flex items-center gap-2 text-lg text-gray-200 mb-10"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime-500/20 text-lime-400">
          👋
        </span>
        Hey! It‘s me <span className="font-medium">Devraj</span>,
      </motion.p>
      <motion.div variants={parent} initial="hidden" animate="visible">
        <motion.h1
          variants={child}
          className="font-bold leading-[0.9] text-[clamp(2.7rem,8vw,6rem)] max-w-5xl"
        >
          Crafting <span className="text-lime-400">purpose</span>
          <br className="sm:hidden" /> driven experiences
          <br /> that inspire&nbsp;&amp;&nbsp;engage.
        </motion.h1>

        {/* description & CTA */}
        <motion.div
          variants={child}
          className="mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          <p className="max-w-xl text-gray-400 leading-relaxed">
            I work with brands globally to build pixel-perfect, engaging, and
            accessible digital experiences that drive results and achieve
            business goals.
          </p>

          <Link
            href="/about"
            className="whitespace-nowrap rounded-full border border-white/30 hover:border-white px-10 py-4 text-sm transition"
          >
            Know me better
          </Link>
        </motion.div>
      </motion.div>

      {/* thin divider */}
      <hr className="mt-16 border-white/10" />

      {/* socials */}
      <SocialRow className="mt-10" />

      {/* scrolling word marquee */}
      <HeroMarquee className="absolute -bottom-24 left-0 w-full" />
    </section>
  );
}
