"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Aman from "@/assets/about/Amanimage.jpeg";

/* helper for circular text */
const text = " • LET’S TALK • LET’S TALK ";
const radius = 110;

export default function AboutHero() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* photo + CTA */}
      <div className="relative flex justify-center md:justify-end">
        <Image
          src={Aman} /* replace */
          alt="Aman Dubey"
          width={560}
          height={680}
          priority
          className="rounded-[40px] object-cover shadow-2xl"
        />

        {/* spinning disc */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          style={{ width: radius * 2, height: radius * 2 }}
          className="absolute -bottom-10 left-2 md:left-auto md:-right-12
                     text-[0.72rem] tracking-wider text-white/90 select-none"
        >
          <svg width={radius * 2} height={radius * 2}>
            <defs>
              <path
                id="circlePath"
                d={`
                  M ${radius},0
                  a ${radius},${radius} 0 1,1 0,${radius * 2}
                  a ${radius},${radius} 0 1,1 0,-${radius * 2}
                `}
                fill="none"
              />
            </defs>
            <text dy="5" textLength={text.length * 6.8}>
              <textPath href="#circlePath">{text.repeat(4)}</textPath>
            </text>
            <circle
              cx={radius}
              cy={radius}
              r={radius - 45}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity={0.12}
            />
          </svg>

          <span className="absolute inset-0 flex items-center justify-center">
            <ArrowUpRight className="size-6 text-white" />
          </span>
        </motion.div>
      </div>

      {/* headline / copy / button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="font-bold leading-[0.88] text-[clamp(2rem,7.3vw,5.2rem)]">
          A&nbsp;<span className="text-lime-400">creative</span>
          <br /> developer&nbsp;&amp;
          <br />
          <span className="text-lime-400">digital&nbsp;designer</span>
        </h1>

        <p className="mt-8 max-w-lg text-gray-400 text-lg leading-relaxed">
          I collaborate with brands globally to design impactful,
          mission-focused websites that drive results and achieve business
          goals.
        </p>

        <Link
          href="/cv.pdf" /* resume */
          target="_blank"
          className="inline-block mt-10 rounded-full border border-white/50
                     px-10 py-4 font-medium text-white
                     hover:bg-white hover:text-black transition"
        >
          My Resume
        </Link>
      </motion.div>
    </div>
  );
}
