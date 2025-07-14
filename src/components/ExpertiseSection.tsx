"use client";
import {
  ChevronDown,
  Sparkles,
  Code2,
  PenTool,
  Server,
  CircuitBoard,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Experties from "@/assets/home/Experties.jpg";
import { TechStackSlider } from "./TechStackSlider";

const items = [
  {
    title: "Frontend Development",
    body: "Building secure, high-performance, and scalable web applications using React, Next.js, and TypeScript with a focus on optimization and intuitive user experiences.",
    icon: <Code2 className="w-5 h-5 text-lime-400 mr-2" />,
  },
  {
    title: "Backend Development",
    body: "Developing robust server-side applications and RESTful APIs with Node.js, Express, and databases like MongoDB & SQL, ensuring security and scalability.",
    icon: <Server className="w-5 h-5 text-lime-400 mr-2" />,
  },
  {
    title: "UI/UX & Design Systems",
    body: "Designing intuitive user interfaces and creating reusable component libraries with tools like Tailwind CSS, Material UI, and Figma to accelerate development.",
    icon: <PenTool className="w-5 h-5 text-lime-400 mr-2" />,
  },
  {
    title: "Testing & Deployment",
    body: "Automating testing and deployment workflows using CI/CD pipelines with GitHub Actions, Jest, and deploying on platforms like AWS, Vercel, and Netlify.",
    icon: <CircuitBoard className="w-5 h-5 text-lime-400 mr-2" />,
  },
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
      {/* Title */}
      <h2 className="flex items-center gap-2 text-lime-400 tracking-wider mb-6">
        <Sparkles size={18} /> SPECIALITY
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-12 text-white">
        Areas of Expertise
      </h3>

      {/* Accordion + Image */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Accordion */}
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div
              key={it.title}
              className="bg-white/5 rounded-2xl overflow-hidden "
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex cursor-pointer w-full items-center justify-between p-6 text-lg font-medium text-white"
              >
                <div className="flex items-center ">
                  {it.icon}
                  {it.title}
                </div>
                <ChevronDown
                  className={clsx(
                    "transition-transform duration-300 ",
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
                    <div className="px-6 pb-6 text-gray-400">{it.body}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Image */}
        <Image
          src={Experties}
          alt="office desk"
          width={800}
          height={600}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </div>

      {/* Tech Stack Slider */}
      <TechStackSlider
        speed={20}
        direction="left"
        className="mt-12"
        itemClassName="bg-[#1e1e1e] text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2"
      />
    </section>
  );
}
