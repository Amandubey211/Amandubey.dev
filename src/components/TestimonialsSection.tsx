"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

/* ──────────────── constants ──────────────── */
const AUTO_DELAY = 8000;
const IMG_SIZE = 64; // Avatar image size in px
const PROGRESS_RADIUS = 36; // Radius for the SVG progress ring
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS;

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const progressAnimation = useAnimation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    // Reset existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Start progress animation
    progressAnimation.set({ strokeDashoffset: PROGRESS_CIRCUMFERENCE });
    progressAnimation.start({
      strokeDashoffset: 0,
      transition: { duration: AUTO_DELAY / 1000, ease: "linear" },
    });
    // Set timeout for next slide
    timerRef.current = setTimeout(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      AUTO_DELAY
    );
  }, [progressAnimation]);

  const handleInteraction = useCallback(
    (nextIndexFn: (i: number) => number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      progressAnimation.stop();
      setIsExpanded(false);
      setIndex((prev) => nextIndexFn(prev));
    },
    [progressAnimation]
  );

  const next = () => handleInteraction((i) => (i + 1) % testimonials.length);
  const prev = () =>
    handleInteraction(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, startTimer]);

  const t = testimonials[index];
  const isLongQuote = t.quote.length > 250;
  const displayQuote =
    isLongQuote && !isExpanded ? `${t.quote.slice(0, 250)}...` : t.quote;

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-8 py-32">
      <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-12 items-start">
        {/* LEFT COLUMN — 5/12 */}
        <div className="md:col-span-5">
          <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest mb-4">
            <Sparkles size={20} strokeWidth={2} /> TESTIMONIALS
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold leading-none text-white mb-6">
            What
            <br />
            others say
          </h3>
          <p className="text-gray-400 text-lg max-w-sm mb-10">
            I &apos;ve worked with some amazing people over the years, here is
            what they have to say about me.
          </p>
          <Link
            href="https://www.linkedin.com/in/amandubey8833/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            Check it out on Linkedin <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* RIGHT COLUMN — 7/12 */}
        <div className="relative md:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md p-8 min-h-[340px] flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="relative flex-shrink-0"
                  style={{
                    width: PROGRESS_RADIUS * 2,
                    height: PROGRESS_RADIUS * 2,
                  }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={IMG_SIZE}
                    height={IMG_SIZE}
                    className="rounded-full object-cover border-2 border-white/40"
                    style={{ width: IMG_SIZE, height: IMG_SIZE, margin: 4 }} // center the image
                  />
                  <svg
                    width={PROGRESS_RADIUS * 2}
                    height={PROGRESS_RADIUS * 2}
                    className="absolute top-0 left-0 rotate-[-90deg]"
                  >
                    <motion.circle
                      cx={PROGRESS_RADIUS}
                      cy={PROGRESS_RADIUS}
                      r={PROGRESS_RADIUS - 2} // adjust radius to be inside the svg box
                      fill="transparent"
                      stroke="var(--lime-400)"
                      strokeWidth="3"
                      strokeDasharray={PROGRESS_CIRCUMFERENCE}
                      animate={progressAnimation}
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-lg text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-grow">
                <p className="text-gray-300 leading-relaxed">{displayQuote}</p>
                {isLongQuote && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-lime-400 mt-2 font-medium hover:underline"
                  >
                    {isExpanded ? "see less" : "see more"}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex items-center gap-4 mt-8">
            <div className="ml-auto flex items-center gap-4">
              <span className="text-gray-400 text-sm tabular-nums">
                {index + 1} / {testimonials.length}
              </span>
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="size-11 flex items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={next}
                className="size-11 flex items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white hover:text-white"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
