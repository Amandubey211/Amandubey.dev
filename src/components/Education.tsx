// app/about/components/Education.tsx
"use client";

// KEY CHANGE: Import the `Variants` type
import { motion, Variants } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

const educationData = [
  {
    title: "Master of Computer Applications (MCA)",
    school: "Jain University, Bangalore",
    period: "2023–2025",
    grade: "Achieved GPA: 9.1",
  },
  {
    title: "Bachelor of Science in IT (BSc-IT)",
    school: "Mumbai University, Mumbai",
    period: "2020–2023",
    grade: "Achieved GPA: 8.6",
  },
  {
    title: "Software Engineering Course",
    school: "Grow Skill Training",
    period: "2022",
    grade: "React Certification",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export function Education() {
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
          <Sparkles size={18} />
          ACADEMICS & CERTIFICATIONS
        </h2>
        <h3 className="text-5xl font-bold leading-tight">Education</h3>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4"
      >
        {educationData.map((edu) => (
          <motion.div
            key={edu.title}
            variants={itemVariants}
            className="p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-white/5 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <GraduationCap className="text-lime-400 size-8 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {edu.title}
                </h4>
                <p className="text-gray-400">{edu.school}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-gray-500 font-mono">{edu.period}</p>
              <p className="text-gray-400">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
