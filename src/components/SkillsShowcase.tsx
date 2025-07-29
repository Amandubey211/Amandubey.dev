// components/SkillsShowcase.tsx
"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants for type safety
import {
  Atom,
  Sigma,
  LayoutDashboard,
  Code,
  FileCode,
  MonitorDot,
  Network,
  Server,
  SlidersHorizontal,
  Palette,
  PencilRuler,
  Zap,
  Cloud,
  HardDrive,
  Database,
  GitBranch,
  Settings,
  Rocket,
  Users,
  MessageSquare,
  TestTube,
  CircuitBoard,
  ListChecks,
  Bug,
  Cpu,
  Accessibility,
  FolderOpen,
  Shield,
  GanttChart,
} from "lucide-react";

// Define the structure for a skill item
interface Skill {
  name: string;
  icon: React.ReactNode;
}

// Define the structure for a skill category
interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Data for your skills, categorized and refined for better organization and relevance
const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <Atom className="w-4 h-4" color="#61DAFB" /> },
      { name: "Next.js", icon: <Sigma className="w-4 h-4" color="#FFFFFF" /> },
      {
        name: "Redux.js",
        icon: <LayoutDashboard className="w-4 h-4" color="#764ABC" />,
      },
      {
        name: "JavaScript",
        icon: <Code className="w-4 h-4" color="#F7DF1E" />,
      },
      {
        name: "TypeScript",
        icon: <FileCode className="w-4 h-4" color="#3178C6" />,
      },
      {
        name: "HTML5/CSS3",
        icon: <Code className="w-4 h-4" color="#E34F26" />,
      }, // Combined
      {
        name: "Framer Motion",
        icon: <SlidersHorizontal className="w-4 h-4" color="#8A2BE2" />,
      },
    ],
  },
  {
    title: "UI & Design", // Renamed for conciseness
    skills: [
      {
        name: "Tailwind CSS",
        icon: <Palette className="w-4 h-4" color="#06B6D4" />,
      },
      {
        name: "Bootstrap",
        icon: <Palette className="w-4 h-4" color="#7952B3" />,
      },
      {
        name: "Chakra UI",
        icon: <Palette className="w-4 h-4" color="#319795" />,
      },
      {
        name: "Material UI",
        icon: <Palette className="w-4 h-4" color="#007FFF" />,
      },
      {
        name: "Figma",
        icon: <PencilRuler className="w-4 h-4" color="#F24E1E" />,
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <Server className="w-4 h-4" color="#339933" /> },
      { name: "Express.js", icon: <Zap className="w-4 h-4" color="#808080" /> },
      { name: "Firebase", icon: <Cloud className="w-4 h-4" color="#FFCA28" /> },
      {
        name: "MongoDB",
        icon: <HardDrive className="w-4 h-4" color="#47A248" />,
      },
      { name: "SQL", icon: <Database className="w-4 h-4" color="#FF4500" /> },
      {
        name: "Prisma",
        icon: <Database className="w-4 h-4" color="#2D3748" />,
      },
    ],
  },
  {
    title: "Tools & Methodologies", // Renamed and consolidated
    skills: [
      { name: "Git", icon: <GitBranch className="w-4 h-4" color="#F05032" /> },
      {
        name: "GitHub",
        icon: <GitBranch className="w-4 h-4" color="#181717" />,
      },
      {
        name: "Postman",
        icon: <Settings className="w-4 h-4" color="#FF6C37" />,
      },
      {
        name: "Agile (Scrum/Kanban)", // Combined
        icon: <Users className="w-4 h-4" color="#009688" />,
      },
      {
        name: "CI/CD",
        icon: <CircuitBoard className="w-4 h-4" color="#39FF14" />,
      },
    ],
  },
  {
    title: "Testing & Quality", // New category
    skills: [
      {
        name: "Jest", // Changed from React-Jest library
        icon: <TestTube className="w-4 h-4" color="#99425B" />,
      },
      {
        name: "Unit Testing",
        icon: <ListChecks className="w-4 h-4" color="#008000" />,
      },
      {
        name: "E2E Testing",
        icon: <Bug className="w-4 h-4" color="#DC143C" />,
      },
      {
        name: "A/B Testing",
        icon: <Bug className="w-4 h-4" color="#FF7F50" />,
      },
    ],
  },
  {
    title: "Deployment & Cloud", // Renamed and consolidated
    skills: [
      { name: "AWS", icon: <Cloud className="w-4 h-4" color="#FF9900" /> },
      { name: "Vercel", icon: <Cloud className="w-4 h-4" color="#000000" /> },
      { name: "Netlify", icon: <Cloud className="w-4 h-4" color="#00C7B7" /> },
      { name: "Render", icon: <Cloud className="w-4 h-4" color="#6C5CE7" /> },
      {
        name: "Serverless Functions", // More specific than "Serverless"
        icon: <Cloud className="w-4 h-4" color="#FD5750" />,
      },
    ],
  },
  {
    title: "Architecture & Optimization", // Renamed
    skills: [
      {
        name: "System Design (HLD/LLD)", // Combined
        icon: <GanttChart className="w-4 h-4" color="#4682B4" />,
      },
      {
        name: "Responsive Design",
        icon: <MonitorDot className="w-4 h-4" color="#6A5ACD" />,
      },
      {
        name: "Performance Optimization", // Combined from various performance tools
        icon: <Rocket className="w-4 h-4" color="#F4B400" />,
      },
      {
        name: "Code Modularity",
        icon: <Code className="w-4 h-4" color="#A9A9A9" />,
      },
    ],
  },
  {
    title: "Core Competencies", // Renamed for clarity
    skills: [
      {
        name: "Accessibility",
        icon: <Accessibility className="w-4 h-4" color="#3CB371" />,
      },
      {
        name: "Maintainability",
        icon: <FolderOpen className="w-4 h-4" color="#DAA520" />,
      },
      {
        name: "Web Security",
        icon: <Shield className="w-4 h-4" color="#B22222" />,
      },
      {
        name: "Networking (APIs)", // Clarified
        icon: <Network className="w-4 h-4" color="#8B008B" />,
      },
    ],
  },
];

// Animation variants for Framer Motion, now explicitly typed as Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger categories (each category animates after the previous one)
      delayChildren: 0.2, // Delay start of first category animation
    },
  },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.05, // Stagger individual skill items within a category
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function SkillsShowcase() {
  const categories = useMemo(() => skillCategories, []);

  return (
    <motion.section
      className="py-10 md:py-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter text-white mb-10 text-center">
        My Expertise & Tech Stack
      </h2>

      {/* Changed to a grid layout for categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            className="flex flex-col gap-6 bg-[#171717] p-6 rounded-xl border border-white/10 shadow-lg" // Added background, padding, border, shadow for the box effect
            variants={categoryVariants}
          >
            <h3 className="text-xl font-bold text-lime-400 border-b border-white/10 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {" "}
              {/* Reduced gap for denser badges */}
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(163, 230, 53, 0.4)", // Lime-400 glow
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-[#222222] text-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5 shadow-sm cursor-default" // Adjusted classes for smaller badge size and icon gap
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
