// components/SkillsShowcase.tsx
"use client";

import React, {
  useMemo,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { motion, Variants } from "framer-motion";
import { gsap } from "gsap";
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
  TestTube,
  CircuitBoard,
  ListChecks,
  Bug,
  Accessibility,
  FolderOpen,
  Shield,
  GanttChart,
  SparklesIcon,
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

// Data for your skills, categorized and refined
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    },
  },
};

const createParticleElement = (
  x: number,
  y: number,
  color: string = "163, 230, 53"
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(${color}, 1);
      box-shadow: 0 0 6px rgba(${color}, 0.6);
      pointer-events: none;
      z-index: 100;
      left: ${x}px;
      top: ${y}px;
    `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = 12,
  glowColor = "163, 230, 53",
  enableTilt = true,
  // clickEffect = false,
  enableMagnetism = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

export function SkillsShowcase() {
  const categories = useMemo(() => skillCategories, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      className="py-10 md:py-14"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm mb-2">
        <SparklesIcon size={18} />
        My Expertise
      </h2>
      <h3 className="text-4xl sm:text-5xl font-bold leading-tight">
        Tech Stack
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div key={category.title} variants={categoryVariants}>
            <ParticleCard
              className="flex flex-col gap-6 p-6 rounded-xl border border-white/10 shadow-lg h-full"
              disableAnimations={isMobile}
            >
              <h3 className="text-xl font-bold text-lime-400 border-b border-white/10 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(163, 230, 53, 0.4)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-[#222222] text-white/90 px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5 shadow-sm cursor-default"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </ParticleCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
