// components/sections/HeroSection.tsx (Final Version)
"use client";

// CORRECTED: Added useRef, useScroll, and useTransform imports
import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Hand, Sprout } from "lucide-react";
import BlurText from "@/components/BlurText";
import { SocialRow } from "./SocialRow";
import { HeroMarquee } from "./HeroMarquee";
import { ShinyButton } from "./ShinyButton";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";
import { useCursorContext } from "@/contexts/CursorContext"; // Import the hook
export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { setVariant } = useCursorContext();
  // Create a ref to attach to the section element
  const heroRef = useRef<HTMLSelectElement>(null);

  // Track scroll progress of the heroRef element
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // Track from when the top of the element hits the top of the viewport, until the bottom of the element hits the top.
  });

  // Map the scroll progress (0 to 1) to a rotation value (0deg to 45deg)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

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
    // Attach the ref to the section
    <section
      ref={heroRef}
      className="relative max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-44"
    >
      {/* Animated Sprout Icon */}
      <motion.div
        className="absolute top-20 right-10 md:right-0 opacity-60 -z-10"
        // The floating animation respects reduced motion
        animate={
          prefersReducedMotion ? {} : { y: [0, -15, 0], rotate: [0, 10, 0] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        // The scroll-driven rotation is applied via the style prop
        style={prefersReducedMotion ? {} : { rotate }}
      >
        <Sprout className="w-16 h-16 text-lime-400/80" />
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
        Hey! It’s me <span className="font-medium">Aman,</span>
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
