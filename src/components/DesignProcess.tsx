// app/about/components/DesignProcess.tsx
"use client";

import { motion, Variants } from "framer-motion";
import {
  MessageSquare,
  Layout,
  Palette,
  Code,
  ShieldCheck,
  Sparkles,
  Settings, // Imported for the new 'Maintenance' step
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Strategize",
    description:
      "To create something awesome, we must first talk about the details. Planning is essential.",
    Icon: MessageSquare,
  },
  {
    step: "02",
    title: "Wireframe",
    description:
      "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper.",
    Icon: Layout,
  },
  {
    step: "03",
    title: "Design",
    description:
      "The most fun part of all – adding pizzaz to the wireframes and bringing it to life.",
    Icon: Palette,
  },
  {
    step: "04",
    title: "Development",
    description:
      "The design may be final but it needs to be functional and practical. Development is key.",
    Icon: Code,
  },
  {
    step: "05",
    title: "Quality Assurance",
    description:
      "Website load times, SEO, and file optimization weigh in to the quality of the site.",
    Icon: ShieldCheck,
  },
  {
    // New Maintenance Card
    step: "06",
    title: "Maintenance & Support",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support and updates to keep your site running smoothly.",
    Icon: Settings, // Using Settings icon
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function DesignProcess() {
  return (
    <section className="py-4 px-4 sm:px-4 lg:px-10">
      {" "}
      {/* Added horizontal padding to the section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12 " // Increased max-width and centered for better presentation
      >
        <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm mb-2 justify-center lg:justify-start">
          <Sparkles size={18} />
          STEPS I FOLLOW
        </h2>
        <h3 className="text-5xl font-bold leading-tight">My Design Process</h3>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" // Adjusted for 3 columns on desktop, added max-w and mx-auto for wider centered content
      >
        {processSteps.map((item) => (
          <motion.div
            key={item.step}
            variants={itemVariants}
            className="p-6 border border-white/10 rounded-2xl flex flex-col gap-4 text-center items-center"
          >
            <div className="bg-gray-800 p-3 rounded-full border border-white/10 mb-2">
              <item.Icon className="text-lime-400 size-7" />
            </div>
            <h4 className="text-lg font-bold">
              <span className="text-gray-500">{item.step}.</span> {item.title}
            </h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
