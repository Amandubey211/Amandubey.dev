// app/about/components/WorkHistory.tsx
"use client";

// KEY CHANGE: Import the `Variants` type from Framer Motion
import { motion, Variants } from "framer-motion";
import { Briefcase, Code, Sparkles as SparklesIcon } from "lucide-react";

const workHistory = [
  {
    role: "Frontend Lead",
    company: "@Student Diwan LMS",
    period: "1.7 Years",
    Icon: Briefcase,
  },
  {
    role: "Full-Stack Developer",
    company: "@Xpert, OptaCloud",
    period: "6 Months",
    Icon: Code,
  },
  {
    role: "Web Development Consultant",
    company: "@Self-Employed",
    period: "3+ Years",
    Icon: SparklesIcon,
  },
];

// KEY CHANGE: Apply the `Variants` type
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// KEY CHANGE: Apply the `Variants` type
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function WorkHistory() {
  return (
    <section className="py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-12"
      >
        <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm mb-2">
          <SparklesIcon size={18} />
          WORK HISTORY
        </h2>
        <h3 className="text-5xl font-bold leading-tight">Experience</h3>
        <p className="text-gray-400 mt-4 text-lg">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {workHistory.map((job) => (
          <motion.div
            key={job.company}
            variants={itemVariants}
            className="p-6 border-b border-white/10 flex justify-between items-center hover:bg-white/5 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <job.Icon className="text-lime-400 size-8 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                <p className="text-gray-400">{job.company}</p>
              </div>
            </div>
            <span className="text-gray-500 font-mono text-right">
              {job.period}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
