"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import Aman from "@/assets/about/Amanimage.jpeg";

// Helper for circular text
const text = " • LET’S TALK • LET’S TALK ";
const radius = 110;

function ShinyDownloadButton({
  initialText,
  hoverText,
}: {
  initialText: string;
  hoverText: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // --- KEY CHANGE: Read the URL from the environment variable ---
  // We include a fallback just in case the variable is not set.
const resumeUrl =
  process.env.NEXT_PUBLIC_RESUME_URL ||
  "https://drive.google.com/file/d/1_AjqOJNCvveFTuFFfUiGcZTJa2UEd42b/preview";

if (resumeUrl === "#") {
  console.warn(
    "Resume URL is not set in environment variables. Please check your .env.local or Vercel settings."
  );
}

  const textVariants = {
    initial: { y: 0 },
    hover: { y: "-125%" },
  };

  const hoverTextVariants = {
    initial: { y: "125%" },
    hover: { y: 0 },
  };

  return (
    <motion.a
      href={resumeUrl}
      // download="Aman-Dubey-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "relative inline-block overflow-hidden cursor-pointer rounded-full border border-white/30",
        "px-8 py-3 text-lg font-medium",
        "transition-colors duration-300",
        isHovered ? "text-black" : "text-white"
      )}
      style={{ transform: "translateZ(0)" }}
    >
      <span className="relative block h-7 w-52 text-center">
        <motion.span
          className="absolute inset-x-0"
          variants={textVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {initialText}
        </motion.span>
        <motion.span
          className="absolute inset-x-0"
          variants={hoverTextVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {hoverText}
        </motion.span>
      </span>

      <motion.div
        className="absolute inset-0 z-[-1] bg-white"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  );
}

export default function AboutHero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* photo + CTA */}
      <div className="relative flex justify-center md:justify-end">
        <Image
          src={Aman}
          alt="Aman Dubey"
          width={560}
          height={680}
          priority
          className="rounded-[40px] object-cover shadow-2xl opacity-80"
        />

        {/* spinning disc */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ width: radius * 2, height: radius * 2 }}
          className="absolute -bottom-10 left-2 md:left-auto md:-right-12"
        >
          <svg width={radius * 2} height={radius * 2}>
            <defs>
              <path
                id="circlePath"
                d={`M ${radius},0 a ${radius},${radius} 0 1,1 0,${
                  radius * 2
                } a ${radius},${radius} 0 1,1 0,-${radius * 2}`}
                fill="none"
              />
            </defs>
            <text dy="20">
              <textPath className="text-xl fill-white" href="#circlePath">
                {text.repeat(4)}
              </textPath>
            </text>
            <circle
              cx={radius}
              cy={radius}
              r={radius - 45}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity={0.7}
            />
          </svg>

          <Link
            href="/contact"
            className="absolute inset-0 flex items-center justify-center hover:scale-105 ease-in"
            aria-label="Contact Me"
          >
            <ArrowUpRight className="size-16 text-white" />
          </Link>
        </motion.div>
      </div>

      {/* headline / copy / button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="font-bold leading-[0.98] text-[clamp(1.6rem,5.3vw,4.2rem)]">
          A <span className="text-lime-400">Full-Stack</span> Developer &
          <br />
          <span className="text-lime-400">UI/UX</span> Expert
        </h1>

        <p className="mt-8 max-w-lg text-gray-400 text-lg leading-relaxed">
          Leveraging 2 years of experience, I deliver secure, high-performance
          web applications built with React and Node.js, specializing in
          frontend optimization and intuitive UI/UX design to achieve business
          goals.
        </p>

        <div className="mt-9 ms-5">
          <ShinyDownloadButton
            initialText="Download Resume"
            hoverText="Download Now"
          />
        </div>
      </motion.div>
    </div>
  );
}
