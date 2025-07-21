// app/about/components/WorkHistory.tsx
"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles as SparklesIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const workHistory = [
  {
    role: "Frontend Lead",
    company: "@Student Diwan LMS",
    period: "1.7 Years",
    Icon: Briefcase,
    details: [
      "Led frontend development for a large-scale SaaS Learning Management System (LMS), architecting a multi-role platform for admins, staff, students, and parents.",
      "Engineered a granular Role-Based Access Control (RBAC) system, enabling versatile creation and permission management for roles like teachers, librarians, & custom staff.",
      "Developed 30+ core modules, including academic management (assignments, gradebooks), school operations (library, transportation), and real-time admin analytics.",
      "Optimized application performance by 30% by implementing code splitting, lazy loading, and Firebase real-time updates, achieving a 98 Lighthouse score.",
      "Enhanced security by 25% through JWT encryption, implementing audit trails, and designing an automated logging system to prevent unauthorized access.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "@Xpert, OptaCloud",
    period: "6 Months",
    Icon: Code,
    details: [
      "Tech Stack: React, Redux, Firebase (Auth, RTDB, Cloud Functions), Razorpay API, LinkedIn API",
      "Built and deployed an expert hiring platform connecting software developers with potential employers, onboarding 50+ verified professionals.",
      "Reduced fraudulent profiles by 70% by engineering a multi-tier verification system using email, mobile OTP, and the official LinkedIn API.",
      "Engineered a secure fintech system using Razorpay and a custom Firebase wallet, achieving a 99.2% transaction success rate.",
      "Boosted client-expert connections by 40% by implementing an AI-powered recommendation algorithm to match user needs with professional skills.",
    ],
  },
  {
    role: "Web Development Consultant",
    company: "@Self-Employed",
    period: "3+ Years",
    Icon: SparklesIcon,
    details: [
      "Delivered 15+ custom web applications for diverse clients, utilizing modern frameworks like React and Next.js to meet specific business requirements.",
      "Designed and built reusable component libraries with Material UI and Tailwind CSS, accelerating development time by an average of 30% across projects.",
      "Automated testing and deployment workflows by establishing robust CI/CD pipelines with GitHub Actions, significantly reducing manual deployment errors.",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function WorkHistory() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        {workHistory.map((job, index) => (
          <motion.div
            key={job.company}
            variants={itemVariants}
            className="border-b border-white/10 rounded-lg transition-all overflow-hidden"
          >
            <div
              className="p-6 flex justify-between items-center hover:bg-white/5 cursor-pointer transition-colors"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center gap-4">
                <job.Icon className="text-lime-400 size-8 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {job.role}
                  </h4>
                  <p className="text-gray-400">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-mono text-right">
                  {job.period}
                </span>
                {expandedIndex === index ? (
                  <ChevronUp className="text-gray-400" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </div>
            </div>

            {expandedIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 pt-2 bg-white/5"
              >
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {job.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
