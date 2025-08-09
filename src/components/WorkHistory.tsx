// components/WorkHistory.tsx (Final Version with Accessibility Fix)
"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles as SparklesIcon,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

// Data remains the same
const workHistory = [
  {
    role: "Frontend Lead",
    company: "@Student Diwan, Qatar (Remote)",
    period: "Jan 2024 - July 2025 (1.7 Years)",
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
    company: "@Xpert, OptaCloud Singapore",
    period: "July 2023 - Jan 2024 (6 Months)",
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
    role: "Web Dev Intern",
    company: "@Acuity Educare Ltd, India",
    period: "Oct 2022 - April 2023 (7 Months)",
    Icon: GraduationCap,
    details: [
      "Delivered 15+ custom web applications for diverse clients, utilizing modern frameworks like React and Next.js to meet specific business requirements.",
      "Designed and built reusable component libraries with Material UI and Tailwind CSS, accelerating development time by an average of 30% across projects.",
      "Automated testing and deployment workflows by establishing robust CI/CD pipelines with GitHub Actions, significantly reducing manual deployment errors.",
    ],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const detailsVariants: Variants = {
  collapsed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

export function WorkHistory() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 text-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mb-16"
      >
        <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm mb-2">
          <SparklesIcon size={18} />
          WORK HISTORY
        </h2>
        <h3 className="text-4xl sm:text-5xl font-bold leading-tight">
          Experience
        </h3>
        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </motion.div>

      {/* Accordion Timeline Layout */}
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-4 h-full w-0.5 bg-gray-700" />

        {workHistory.map((job, index) => {
          const isExpanded = expandedIndex === index;
          const contentId = `work-history-content-${index}`;

          return (
            <motion.div
              key={`${job.company}-${index}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative mb-8"
            >
              <div className="flex items-start gap-6 sm:gap-8">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className="bg-black rounded-full p-2 border-2 border-lime-400">
                    <job.Icon className="text-lime-400 size-6 sm:size-7" />
                  </div>
                </div>

                {/* Clickable Header and Collapsible Content */}
                <div className="flex-grow">
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex justify-between items-center text-left"
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                  >
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 font-mono mb-1">
                        {job.period}
                      </p>
                      <h4 className="text-lg sm:text-xl font-semibold text-white">
                        {job.role}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        {job.company}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 flex-shrink-0"
                    >
                      <ChevronDown className="text-gray-400 size-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.section
                        // --- ACCESSIBILITY ID ADDED HERE ---
                        id={contentId}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={detailsVariants}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="list-none space-y-2 text-gray-300 mt-4 pl-1">
                          {job.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-lime-400 mt-1.5">
                                &#8227;
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
