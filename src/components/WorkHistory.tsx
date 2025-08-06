"use client";

import { motion, Variants } from "framer-motion";
import {
  Briefcase,
  Code,
  Sparkles as SparklesIcon,
  GraduationCap,
} from "lucide-react";
import { JSX } from "react";

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

// Variants for the overall container of timeline items
const timelineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Staggers the appearance of each timeline item row
    },
  },
};

// Variants for the content cards (period and details)
const cardSlideVariants: (fromLeft: boolean) => Variants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -80 : 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 0.8 },
  },
});

// Variants for the central icon
const iconPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 250, damping: 20, delay: 0.2 },
  },
};

// Variants for individual detail list items
const detailItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

// Container variants for the list of detail items, to enable staggering their appearance
const detailsListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Component for rendering job role, company, and period
const JobInfoCardContent = ({
  role,
  company,
  period,
}: {
  role: string;
  company: string;
  period: string;
}) => (
  <>
    <h4 className="text-lg sm:text-xl font-semibold text-white">{role}</h4>
    <p className="text-sm sm:text-base text-gray-400">{company}</p>
    <span className="text-xs sm:text-sm text-gray-500 font-mono mt-1 block">
      {period}
    </span>
  </>
);

// Component for rendering job details list with staggered animations
const JobDetailsCardContent = ({ details }: { details: string[] }) => (
  <motion.ul
    variants={detailsListVariants}
    className="list-disc pl-5 space-y-1 text-sm text-gray-300"
  >
    {details.map((detail, i) => (
      <motion.li key={i} variants={detailItemVariants}>
        {detail}
      </motion.li>
    ))}
  </motion.ul>
);

export function WorkHistory() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8  text-white">
      {/* Header Section */}
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
        <h3 className="text-4xl sm:text-5xl font-bold leading-tight">
          Experience
        </h3>
        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          I have worked with some of the most innovative industry leaders to
          help build their top-notch products.
        </p>
      </motion.div>

      {/* Main Timeline Container */}
      <motion.div
        variants={timelineContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-5xl mx-auto"
      >
        {/* Vertical Timeline Line (for large screens) */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 2.5rem)" }} // Adjust to start slightly below first icon
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-700 top-6 hidden lg:block"
        ></motion.div>

        {workHistory.map((job, index) => {
          const isEven = index % 2 === 0;

          // Determine content for the first and second content cards
          // On large screens, firstCardContent is on the visual left (if not reversed) or visual right (if reversed)
          // On large screens, secondCardContent is on the visual right (if not reversed) or visual left (if reversed)
          let firstCardContent: JSX.Element;
          let secondCardContent: JSX.Element;

          if (isEven) {
            // For even index: Info on left, Details on right
            firstCardContent = <JobInfoCardContent {...job} />;
            secondCardContent = <JobDetailsCardContent details={job.details} />;
          } else {
            // For odd index: Details on left, Info on right
            firstCardContent = <JobDetailsCardContent details={job.details} />;
            secondCardContent = <JobInfoCardContent {...job} />;
          }

          return (
            <motion.div
              key={`${job.company}-${index}`}
              className={`flex flex-col items-center w-full my-8 lg:gap-x-8 lg:flex-row
                ${isEven ? "" : "lg:flex-row-reverse"}
              `}
            >
              {/* First Content Card (visually left on even, visually right on odd) */}
              <motion.div
                className={`w-full lg:w-1/2 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-lime-400 transition-all duration-300 shadow-md
                  ${isEven ? "lg:text-right" : "lg:text-left"}
                `}
                // Animate from left if it's visually on the left, from right if visually on the right
                variants={cardSlideVariants(isEven)}
              >
                {firstCardContent}
              </motion.div>

              {/* Central Icon */}
              <motion.div
                variants={iconPopVariants}
                className="z-10 bg-black rounded-full p-3 border-2 border-lime-400 flex-shrink-0
                           relative mt-4 mb-4 lg:my-0"
              >
                <job.Icon className="text-lime-400 size-6 sm:size-7" />
                {/* Small screen vertical line segment connecting items */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-700 h-full -z-10 block lg:hidden"></div>
              </motion.div>

              {/* Second Content Card (visually right on even, visually left on odd) */}
              <motion.div
                className={`w-full lg:w-1/2 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-lime-400 transition-all duration-300 shadow-md
                  ${!isEven ? "lg:text-right" : "lg:text-left"}
                `}
                // Animate from right if it's visually on the right, from left if visually on the left
                variants={cardSlideVariants(!isEven)}
              >
                {secondCardContent}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
