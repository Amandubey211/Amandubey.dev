"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hand } from "lucide-react";
import BlurText from "@/components/BlurText"; /* ← path to the file you pasted */
import { SocialRow } from "./SocialRow";
import { HeroMarquee } from "./HeroMarquee";
import { ShinyButton } from "./ShinyButton";

export function HeroSection() {
  /* simple stagger helpers (unchanged) */
  const parent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const child = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-44">
      {/* wave greeting */}
      <motion.p
        variants={child}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 text-lg text-gray-200 mb-6"
      >
        <motion.span
          animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-lime-400 origin-bottom"
        >
          <Hand className="w-8 h-8 text-lime-500" />
        </motion.span>
        Hey! It’s me <span className="font-medium">Aman,</span>
      </motion.p>

      {/* headline with BlurText */}
      <motion.div variants={parent} initial="hidden" animate="visible">
        <BlurText
          text="Crafting purpose driven experiences that inspire & engage."
          animateBy="words"
          direction="top"
          className="font-semibold leading-[0.9] text-[clamp(2.1rem,7vw,5rem)] max-w-4xl text-white"
          delay={80}
          stepDuration={0.4}
          /* highlight “purpose” and “engage” after animation finishes */
          onAnimationComplete={() => {
            document.querySelectorAll(".blur-text span").forEach((span) => {
              if (/purpose|driven|experiences/i.test(span.textContent || "")) {
                span.classList.add("text-lime-400");
              }
            });
          }}
        />
        {/* description + CTA */}
        <motion.div
          variants={child}
          className="mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          <p className="max-w-xl text-gray-400 leading-relaxed">
            I build pixel-perfect, accessible web experiences and shave&nbsp;
            <span className="text-lime-400 font-medium">50 %</span>&nbsp;from
            load times with clean architecture and smart optimisation.
          </p>

          <Link href="/about">
            {/* <motion.span
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/90 [clip-path:ellipse(150%_85%_at_50%_115%)]"
            /> */}
            {/* <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Know me better
            </span> */}
            <ShinyButton initialText="Know me better" hoverText="About me" />
          </Link>
        </motion.div>
      </motion.div>

      {/* divider */}
      <hr className="mt-16 border-white/10" />

      {/* socials + marquee */}
      <SocialRow className="mt-10" />
      <HeroMarquee className="absolute -bottom-2 left-0 w-full" />
    </section>
  );
}
