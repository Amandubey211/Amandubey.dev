"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hand } from "lucide-react";
import BlurText from "@/components/BlurText"; // Path to your BlurText component
import { SocialRow } from "./SocialRow";
import { HeroMarquee } from "./HeroMarquee";
import { ShinyButton } from "./ShinyButton";
// IMPORTANT: Changed import from ShinyButton to RippleButton

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

  // Corrected resumeUrl fallback logic
  const resumeUrl =
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/uc?export=download&id=1Uu8Tromaetan4Zotsg2Y-DOqYQiKq4rm" ||
    "/AmanDubeyFullStackDeveloper2+YOE.pdf";

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
          // Wave animation plays once on load
          animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: 0, // Plays once and stops
            repeatDelay: 0,
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
          text="Crafting high-performance, intuitive experiences that inspire & engage."
          animateBy="words"
          direction="top"
          className="font-semibold leading-[0.9] text-[clamp(2.1rem,7vw,5rem)] max-w-4xl text-white"
          delay={80}
          stepDuration={0.4}
          /* highlight relevant keywords */
          onAnimationComplete={() => {
            document.querySelectorAll(".blur-text span").forEach((span) => {
              if (
                /high-performance|intuitive|inspire|engage/i.test(
                  span.textContent || ""
                )
              ) {
                span.classList.add("text-lime-400");
              }
            });
          }}
        />
        {/* description + CTAs */}
        <motion.div
          variants={child} // Apply child animation to this container
          className="mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          {/* Apply child animation directly to the paragraph */}
          <motion.p
            variants={child}
            className="max-w-xl text-gray-400 leading-relaxed"
          >
            I build pixel-perfect, accessible web experiences and shave 
            <span className="text-lime-400 font-medium">50 %</span> from load
            times with clean architecture and smart optimisation.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            {" "}
            {/* Container for multiple CTAs */}
            <Link href="/about">
              {/* IMPORTANT: Changed to RippleButton */}
              <ShinyButton initialText="Know me better" hoverText="About me" />
            </Link>
            <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
              {/* IMPORTANT: Changed to RippleButton */}
              <ShinyButton initialText="Download CV" hoverText="My Resume" />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* divider */}
      <hr className="mt-16 border-white/10" />

      {/* socials + marquee */}
      <SocialRow className="mt-10" />
      {/* IMPORTANT: Changed Marquee positioning to span full width */}
      <HeroMarquee className="absolute -bottom-2 inset-x-0" />
    </section>
  );
}
