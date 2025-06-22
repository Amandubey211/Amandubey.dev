/* components/TestimonialsSection.tsx */
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";

import { testimonials } from "@/lib/testimonials";

/* ───────────────────────── constants ───────────────────────── */
const AUTO_DELAY = 8_000; // ms between slides
const RADIUS = 26; // px — avatar-ring radius
const CIRCUMF = 2 * Math.PI * RADIUS;
const MAX_QUOTE_LENGTH = 300; // characters before showing "See more"

/* ───────────────────────── component ───────────────────────── */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(
    null
  );
  const progressAnim = useAnimation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* helpers */
  const next = useCallback(() => {
    setExpandedTestimonial(null);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setExpandedTestimonial(null);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  const toggleExpand = useCallback(() => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index);
  }, [expandedTestimonial, index]);

  /* autoplay + progress-ring */
  useEffect(() => {
    progressAnim.set({ strokeDashoffset: CIRCUMF });
    progressAnim.start({
      strokeDashoffset: 0,
      transition: { duration: AUTO_DELAY / 1000, ease: "linear" },
    });

    timerRef.current = setTimeout(next, AUTO_DELAY);

    return () => {
      progressAnim.stop();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, next, progressAnim]);

  const t = testimonials[index];
  const isLongQuote = t.quote.length > MAX_QUOTE_LENGTH;
  const showSeeMore = isLongQuote && expandedTestimonial !== index;
  const displayedQuote = showSeeMore
    ? `${t.quote.substring(0, MAX_QUOTE_LENGTH)}...`
    : t.quote;

  /* ───────────────────────── UI ───────────────────────── */
  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 md:px-8 py-28">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* ── left column ────────────────────────── */}
        <div>
          <h2 className="flex items-center gap-2 text-lime-400 tracking-wider mb-4">
            <Star size={18} /> TESTIMONIALS
          </h2>

          <h3 className="text-5xl md:text-6xl font-extrabold leading-[0.9] text-white mb-4">
            What
            <br />
            others&nbsp;say
          </h3>

          <p className="text-gray-400 max-w-md mb-10">
            I&apos;ve collaborated with some amazing people — here&apos;s what
            they think of working with me.
          </p>

          <Link
            href="https://www.linkedin.com/in/profile-amandubey/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-white/30 hover:border-white transition text-white"
          >
            Check it out on LinkedIn <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* ── slider ─────────────────────────────── */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 shadow-xl min-h-[300px] flex flex-col"
            >
              {/* avatar + ring */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="relative"
                  style={{ width: RADIUS * 2, height: RADIUS * 2 }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes={`${RADIUS * 2}px`}
                    className="rounded-full object-cover border-2 border-gray-400"
                    priority
                  />
                  <svg
                    width={RADIUS * 2}
                    height={RADIUS * 2}
                    className="absolute inset-0 rotate-[-90deg]"
                  >
                    <motion.circle
                      cx={RADIUS}
                      cy={RADIUS}
                      r={RADIUS}
                      fill="transparent"
                      stroke="#b0ff78"
                      strokeWidth="3.5"
                      strokeDasharray={CIRCUMF}
                      initial={{ strokeDashoffset: CIRCUMF }}
                      animate={progressAnim}
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed flex-grow">
                {displayedQuote}
              </p>

              {isLongQuote && (
                <button
                  onClick={toggleExpand}
                  className="mt-4 text-lime-400 text-sm font-medium self-start hover:underline"
                >
                  {showSeeMore ? "See more" : "See less"}
                </button>
              )}
            </motion.div>
          </AnimatePresence>

          {/* navigation */}
          <div className="absolute -bottom-14 right-0 flex items-center gap-6">
            <span className="text-gray-400 text-sm tabular-nums">
              {index + 1}&nbsp;/&nbsp;{testimonials.length}
            </span>

            <button
              aria-label="Previous testimonial"
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current);
                prev();
              }}
              className="size-11 flex items-center justify-center rounded-full border border-white/25 hover:border-white transition"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              aria-label="Next testimonial"
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current);
                next();
              }}
              className="size-11 flex items-center justify-center rounded-full border border-white/25 hover:border-white transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
