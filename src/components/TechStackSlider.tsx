"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Database,
  Server,
  Atom,
  Sigma,
  CircuitBoard,
  Code, // For JavaScript, HTML5, CSS3/SASS, Code Modularity
  MonitorDot, // For Web Performance, Responsive Design
  Cloud, // For Serverless, Cloudinary, AWS, Netlify, Vercel
  HardDrive, // For MongoDB, SQL, PSQL
  GitBranch, // For Git, GitHub
  LayoutDashboard, // For Redux, Zustand
  Shield, // For Web-Security, JWT
  TestTube, // For Testing
  Cpu, // For System Design, Build Systems
  Rocket, // For Optimization, Lighthouse, Pagespeed
  Users, // For Agile/Scrum
  Bug, // For E2E Testing, A/B Testing
  ListChecks, // For Unit Testing
  Network, // For Web Sockets, Networking
  Settings, // For Postman
  Zap, // For Express.js
  PencilRuler, // For Figma, Canvas
  Palette, // For UI Libraries (Tailwind, Bootstrap, Chakra, Material, Daisy, Ant Design)
  Anchor, // For Zod
  MessageSquare, // For Trello/Jira
  SlidersHorizontal, // For Framer-motion
  FileCode, // For TypeScript
  Shuffle, // For React bits
  GanttChart, // For LLD & HLD
  Accessibility, // For Accessibility
  FolderOpen, // For Maintainability
} from "lucide-react";

// Define the items with associated icon colors
const items = [
  // Primary Skills: Frontend Development
  { name: "React.js", icon: Atom, iconColor: "#61DAFB" },
  { name: "Next.js", icon: Sigma, iconColor: "#FFFFFF" },
  { name: "Redux.js", icon: LayoutDashboard, iconColor: "#764ABC" },
  { name: "Zod", icon: Anchor, iconColor: "#2F65BD" },
  { name: "JavaScript", icon: Code, iconColor: "#F7DF1E" },
  { name: "TypeScript", icon: FileCode, iconColor: "#3178C6" },
  { name: "HTML5", icon: Code, iconColor: "#E34F26" },
  { name: "CSS3/SASS", icon: Code, iconColor: "#264DE4" },
  { name: "Web Performance", icon: MonitorDot, iconColor: "#FFD700" },
  { name: "Web Sockets", icon: Network, iconColor: "#00CED1" },
  { name: "REST", icon: Server, iconColor: "#4CAF50" },
  { name: "React bits", icon: Shuffle, iconColor: "#61DAFB" },
  { name: "Framer-motion", icon: SlidersHorizontal, iconColor: "#8A2BE2" },

  // UI Library & Design Systems
  { name: "Tailwind CSS", icon: Palette, iconColor: "#06B6D4" },
  { name: "Bootstrap", icon: Palette, iconColor: "#7952B3" },
  { name: "Chakra UI", icon: Palette, iconColor: "#319795" },
  { name: "Material UI", icon: Palette, iconColor: "#007FFF" },
  { name: "Daisy UI", icon: Palette, iconColor: "#DDA0DD" },
  { name: "Ant Design", icon: Palette, iconColor: "#1890FF" },
  { name: "Figma", icon: PencilRuler, iconColor: "#F24E1E" },
  { name: "Canvas", icon: PencilRuler, iconColor: "#FF6600" },

  // Backend Development
  { name: "Node.js", icon: Server, iconColor: "#339933" },
  { name: "Express.js", icon: Zap, iconColor: "#808080" },
  { name: "Firebase", icon: Cloud, iconColor: "#FFCA28" },
  { name: "Serverless", icon: Cloud, iconColor: "#FD5750" },
  { name: "MongoDB", icon: HardDrive, iconColor: "#47A248" },
  { name: "SQL", icon: Database, iconColor: "#FF4500" },
  { name: "PSQL", icon: Database, iconColor: "#336791" },
  { name: "Mongoose", icon: HardDrive, iconColor: "#880000" },
  { name: "Prisma", icon: Database, iconColor: "#2D3748" }, // Or similar dark shade

  // Tools and Technology
  { name: "GitHub", icon: GitBranch, iconColor: "#181717" },
  { name: "Git", icon: GitBranch, iconColor: "#F05032" },
  { name: "Postman", icon: Settings, iconColor: "#FF6C37" },
  { name: "Lighthouse", icon: Rocket, iconColor: "#F4B400" },
  { name: "Pagespeed", icon: Rocket, iconColor: "#4285F4" },
  { name: "GitHub Action", icon: GitBranch, iconColor: "#2088FF" },
  { name: "Web Vitals", icon: MonitorDot, iconColor: "#4285F4" },
  { name: "Trello/Jira", icon: MessageSquare, iconColor: "#0052CC" },
  { name: "Agile/Scrum", icon: Users, iconColor: "#009688" },

  // Additional Competencies: Testing and Deployment
  { name: "React-Jest library", icon: TestTube, iconColor: "#99425B" },
  { name: "AWS", icon: Cloud, iconColor: "#FF9900" },
  { name: "CI/CD", icon: CircuitBoard, iconColor: "#39FF14" },
  { name: "Unit Testing", icon: ListChecks, iconColor: "#008000" },
  { name: "A/B Testing", icon: Bug, iconColor: "#FF7F50" },
  { name: "E2E Testing", icon: Bug, iconColor: "#DC143C" },
  { name: "Render", icon: Cloud, iconColor: "#6C5CE7" },
  { name: "Netlify", icon: Cloud, iconColor: "#00C7B7" },
  { name: "Vercel", icon: Cloud, iconColor: "#000000" },

  // Optimization
  { name: "Build Systems", icon: Cpu, iconColor: "#A52A2A" },
  { name: "Responsive Design", icon: MonitorDot, iconColor: "#6A5ACD" },
  { name: "System Design", icon: Cpu, iconColor: "#FF8C00" },
  { name: "Asset Optimization", icon: Rocket, iconColor: "#FFD700" },
  { name: "JS Optimization", icon: Rocket, iconColor: "#F7DF1E" },
  { name: "LLD & HLD", icon: GanttChart, iconColor: "#4682B4" },

  // General Competencies
  { name: "Accessibility", icon: Accessibility, iconColor: "#3CB371" },
  { name: "Maintainability", icon: FolderOpen, iconColor: "#DAA520" },
  { name: "Code Modularity", icon: Code, iconColor: "#A9A9A9" },
  { name: "Web-Security", icon: Shield, iconColor: "#B22222" },
  { name: "Networking", icon: Network, iconColor: "#8B008B" },
];

export type TechItem = {
  name: string;
  icon: React.ElementType; // Now storing the component type
  iconColor: string; // Specific color for the icon
};

type TechStackSliderProps = {
  speed?: number; // seconds for full loop
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string; // Kept this for general item styling (background, text color)
};

export function TechStackSlider({
  speed = 20, // Changed from 20 to 30 for slower default speed
  direction = "left",
  className = "",
  itemClassName = "bg-[#1e1e1e] text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2",
}: TechStackSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    // Calculate total width of one set of items for seamless looping
    const totalWidth = scrollerRef.current.scrollWidth / 2;
    const fromX = direction === "left" ? 0 : -totalWidth;
    const toX = direction === "left" ? -totalWidth : 0;

    const tween = gsap.fromTo(
      scrollerRef.current,
      { x: fromX },
      {
        x: toX,
        duration: speed,
        repeat: -1, // Loop indefinitely
        ease: "linear", // Constant speed
      }
    );

    // Clean up GSAP animation on component unmount
    return () => {
      tween.kill();
    };
  }, [speed, direction]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${className}`}
    >
      <div
        ref={scrollerRef}
        className="flex gap-6 w-max whitespace-nowrap select-none" // w-max ensures it takes full content width, whitespace-nowrap keeps items on one line
      >
        {/* Duplicate items for infinite scroll effect */}
        {[...items, ...items].map((tech, idx) => {
          const IconComponent = tech.icon; // Get the actual icon component
          return (
            <div key={`${tech.name}-${idx}`} className={itemClassName}>
              {/* Render the icon component, passing the specific iconColor */}
              <IconComponent
                className="w-4 h-4 mr-2"
                style={{ color: tech.iconColor }}
              />
              {tech.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
