"use client";

import {
  ChevronDown,
  Sparkles,
  Code2,
  PenTool,
  BadgePercent,
  Database,
  Server,
  Atom,
  Sigma,
  Braces,
  FileJson,
  Box,
  Code,
  CircuitBoard,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Experties from "@/assets/home/Experties.jpg";

const items = [
  {
    title: "Development",
    body: "Building performant, scalable web apps with React, Next.js & Node.",
    icon: <Code2 className="w-5 h-5 text-lime-400 mr-2" />,
  },
  {
    title: "UI/UX Design",
    body: "Design systems, wire-frames & delightful user interfaces.",
    icon: <PenTool className="w-5 h-5 text-lime-400 mr-2" />,
  },
  {
    title: "Branding",
    body: "Creating memorable brand identities & visual languages.",
    icon: <BadgePercent className="w-5 h-5 text-lime-400 mr-2" />,
  },
];

const techStack = [
  { name: "TypeScript", icon: <FileJson className="w-4 h-4 mr-2" /> },
  { name: "React.js", icon: <Atom className="w-4 h-4 mr-2" /> },
  { name: "Next.js", icon: <Sigma className="w-4 h-4 mr-2" /> },
  { name: "Angular", icon: <Braces className="w-4 h-4 mr-2" /> },
  { name: "Redux", icon: <Box className="w-4 h-4 mr-2" /> },
  { name: "Node.js", icon: <Server className="w-4 h-4 mr-2" /> },
  { name: "Express.js", icon: <CircuitBoard className="w-4 h-4 mr-2" /> },
  { name: "MySQL", icon: <Database className="w-4 h-4 mr-2" /> },
];

export function ExpertiseSection() {
  const [open, setOpen] = useState<null | number>(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#techScroller", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
      <h2 className="flex items-center gap-2 text-lime-400 tracking-wider mb-6">
        <Sparkles size={18} /> SPECIALITY
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Areas of Expertise
      </h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* accordion */}
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div key={it.title} className="bg-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-lg font-medium text-white"
              >
                <div className="flex items-center">
                  {it.icon}
                  {it.title}
                </div>
                <ChevronDown
                  className={clsx(
                    "transition-transform duration-300",
                    open === idx && "rotate-180 text-lime-400"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400">
                      {it.body}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* illustrative image */}
        <Image
          src={Experties}
          alt="office desk"
          width={800}
          height={600}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </div>

      {/* Tech Stack Scroller */}
      <div ref={containerRef} className="relative mt-20 overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap w-max" id="techScroller">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={idx}
              className="bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 backdrop-blur-sm flex items-center"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}