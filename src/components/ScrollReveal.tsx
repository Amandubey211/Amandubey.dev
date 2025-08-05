import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 5,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {" "}
          {/* Added 'word' class here */}
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: "opacity" },
      {
        ease: "none",
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

 // DELETE THIS BLOCK
if (enableBlur) {
  gsap.fromTo(
    wordElements,
    { filter: `blur(${blurStrength}px)` },
    {
      ease: "none",
      filter: "blur(0px)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top bottom-=20%",
        end: wordAnimationEnd,
        scrub: true,
      },
    }
  );
}

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;


// components/ScrollReveal.tsx (Framer Motion Version)

// // components/sections/AboutSection.tsx (Final Recommended Version)
// "use client";

// import { motion } from "framer-motion";
// import { Sparkles } from "lucide-react";
// // CORRECTED: Import BlurText instead of ScrollReveal
// import BlurText from "@/components/BlurText"; 

// export function AboutSection() {
//   const aboutText = `I'm Aman Dubey, a Full-Stack Developer with 2 years of experience building scalable, high-performance apps using React and Node.js. I specialize in clean architecture, intuitive UI/UX, and optimizing web vitals. My work has boosted app performance by 30% and enhanced security by 25%. I've built SaaS platforms, secure fintech systems, and AI-powered features, while promoting CI/CD and reusable component libraries for efficient development.`;

//   return (
//     <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-16">
//       {/* Small heading remains the same */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.8 }}
//         transition={{ duration: 0.6 }}
//         className="flex items-center gap-2 text-lime-400 tracking-wider mb-8"
//       >
//         <Sparkles size={18} className="text-lime-400" />
//         ABOUT ME
//       </motion.h2>

//       {/* Replace ScrollReveal with the BlurText component */}
//       <BlurText
//         text={aboutText}
//         animateBy="words"
//         direction="top" // Or "bottom" for a different feel
//         className="text-2xl md:text-3xl leading-snug text-gray-200"
//         delay={40} // A slightly faster delay for a quicker read
//         stepDuration={0.3} // Controls the duration of each word's animation
//       />
//     </section>
//   );
// }
// "use client";

// import { motion, Variants } from "framer-motion";
// import { useMemo } from "react";

// interface ScrollRevealProps {
//   children: string;
//   className?: string;
//   delay?: number;
// }

// export default function ScrollReveal({ children, className = "", delay = 0.05 }: ScrollRevealProps) {
//   const words = useMemo(() => children.split(" "), [children]);

//   // Variants for the container, controlling the stagger effect
//   const containerVariants: Variants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: delay,
//       },
//     },
//   };

//   // Variants for each word
//   const wordVariants: Variants = {
//     hidden: {
//       opacity: 0.2, // Start slightly visible for a better feel
//       y: 20,       // Start slightly lower
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <motion.p
//       className={className}
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.6 }} // Trigger once, when 60% of it is in view
//     >
//       {words.map((word, index) => (
//         <motion.span
//           key={index}
//           variants={wordVariants}
//           className="inline-block"
//           style={{ marginRight: '0.4em' }} // Add space between words
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// }