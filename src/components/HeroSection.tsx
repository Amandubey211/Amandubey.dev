// components/sections/HeroSection.tsx (Final Fixed Version)
"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Hand, Sprout, Code } from "lucide-react";
import BlurText from "@/components/BlurText";
import { SocialRow } from "./SocialRow";
import { HeroMarquee } from "./HeroMarquee";
import { ShinyButton } from "./ShinyButton";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";
import { useCursorContext } from "@/contexts/CursorContext";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { setVariant } = useCursorContext();
  const heroRef = useRef<HTMLSelectElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Move useTransform hooks to top level
  const codeIconY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const sproutIconY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const parent: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  const childTransition = {
    type: "spring",
    damping: 15,
    stiffness: 100,
  } as const;

  const resumeUrl =
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/file/d/1_AjqOJNCvveFTuFFfUiGcZTJa2UEd42b/preview";

  return (
    <section
      ref={heroRef}
      className="relative max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-44"
    >
      <motion.div
        className="absolute top-16 right-0 opacity-50 -z-10"
        style={prefersReducedMotion ? {} : { y: codeIconY }}
      >
        <motion.div
          animate={
            prefersReducedMotion ? {} : { y: [0, -30, 0], rotate: [0, 5, 0] }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Code className="w-20 h-20  text-lime-500" />
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-3/4 -right-8 opacity-50 -z-10"
        style={prefersReducedMotion ? {} : { y: sproutIconY }}
      >
        <motion.div
          animate={
            prefersReducedMotion ? {} : { y: [0, 10, 0], rotate: [0, -8, 0] }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Sprout className="w-16 h-16  text-lime-500" />
        </motion.div>
      </motion.div>
      <motion.p
        variants={child}
        transition={childTransition}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
        className="flex items-center gap-2 text-lg text-gray-200 mb-6"
      >
        <motion.span
          animate={prefersReducedMotion ? {} : { rotate: [0, 20, -10, 20, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-lime-400 origin-bottom"
        >
          <Hand className="w-8 h-8 text-lime-500" />
        </motion.span>
        Hey! It&apos;s me <span className="font-medium">Aman,</span>
      </motion.p>
      <motion.div
        variants={parent}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate="visible"
      >
        <BlurText
          text="Crafting high-performance, intuitive experiences that inspire & engage."
          animateBy="words"
          direction="top"
          className="font-semibold leading-[0.9] text-[clamp(2.1rem,7vw,5rem)] max-w-4xl text-white text-3d-effect"
          delay={prefersReducedMotion ? 0 : 60}
          stepDuration={0.45}
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
        <motion.div
          variants={child}
          transition={childTransition}
          className="mt-14 grid md:grid-cols-[1fr_auto] gap-10 items-start"
        >
          <motion.p
            variants={child}
            transition={childTransition}
            className="max-w-xl text-gray-400 leading-relaxed"
            onMouseEnter={() => setVariant("text")}
            onMouseLeave={() => setVariant("default")}
          >
            I build pixel-perfect, accessible web experiences and shave&nbsp;
            <span className="text-lime-400 font-medium">50%</span>&nbsp;from
            load times with clean architecture and smart optimisation.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about">
              <ShinyButton initialText="Know me better" hoverText="About me" />
            </Link>
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <ShinyButton initialText="Download CV" hoverText="My Resume" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <hr className="mt-16 border-white/10" />
      <SocialRow className="mt-10" />
      <HeroMarquee className="absolute -bottom-2 inset-x-0" />
    </section>
  );
}