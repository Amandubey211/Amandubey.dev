"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
  {
    title: "Development",
    body: "Building performant, scalable web apps with React, Next.js & Node.",
  },
  {
    title: "UI/UX Design",
    body: "Design systems, wire-frames & delightful user interfaces.",
  },
  {
    title: "Branding",
    body: "Creating memorable brand identities & visual languages.",
  },
] as const;

export function ExpertiseSection() {
  const [open, setOpen] = useState<null | number>(0);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-32">
      <h2 className="flex items-center gap-2 text-lime-400 tracking-wider mb-6">
        <Sparkles size={18} /> SPECIALITY
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-12">
        Areas of Expertise
      </h3>

      <div className="grid md:grid-cols-2 gap-10">
        {/* accordion */}
        <div className="space-y-4">
          {items.map((it, idx) => (
            <div key={it.title} className="bg-white/5 rounded-2xl">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-lg font-medium"
              >
                {it.title}
                <ChevronDown
                  className={clsx(
                    "transition-transform",
                    open === idx && "rotate-180 text-lime-400"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.p
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    {it.body}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* illustrative image */}
        <Image
          src="/expertise.jpg"
          alt="office desk"
          width={800}
          height={600}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
