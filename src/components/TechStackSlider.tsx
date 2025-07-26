// "use client";

// import { useState, useEffect, useMemo, memo, useRef } from "react";
// import {
//   Atom,
//   Sigma,
//   LayoutDashboard,
//   Anchor,
//   Code,
//   FileCode,
//   MonitorDot,
//   Network,
//   Server,
//   Shuffle,
//   SlidersHorizontal,
//   Palette,
//   PencilRuler,
//   Zap,
//   Cloud,
//   HardDrive,
//   Database,
//   GitBranch,
//   Settings,
//   Rocket,
//   Users,
//   MessageSquare,
//   TestTube,
//   CircuitBoard,
//   ListChecks,
//   Bug,
//   Cpu,
//   Accessibility,
//   FolderOpen,
//   Shield,
//   GanttChart,
// } from "lucide-react";

// // Memoized item component
// const TechItem = memo(
//   ({ name, icon }: { name: string; icon: React.ReactNode }) => (
//     <div className="bg-[#1e1e1e] text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2 shrink-0">
//       {icon}
//       {name}
//     </div>
//   )
// );

// export function TechStackSlider({
//   speed = 40,
//   className = "",
//   itemClassName = "",
// }: {
//   speed?: number;
//   className?: string;
//   itemClassName?: string;
// }) {
//   // Memoize all items with their icons
//   const items = useMemo(
//     () => [
//       // Frontend Development
//       { name: "React.js", icon: <Atom className="w-4 h-4" color="#61DAFB" /> },
//       { name: "Next.js", icon: <Sigma className="w-4 h-4" color="#FFFFFF" /> },
//       {
//         name: "Redux.js",
//         icon: <LayoutDashboard className="w-4 h-4" color="#764ABC" />,
//       },
//       { name: "Zod", icon: <Anchor className="w-4 h-4" color="#2F65BD" /> },
//       {
//         name: "JavaScript",
//         icon: <Code className="w-4 h-4" color="#F7DF1E" />,
//       },
//       {
//         name: "TypeScript",
//         icon: <FileCode className="w-4 h-4" color="#3178C6" />,
//       },
//       { name: "HTML5", icon: <Code className="w-4 h-4" color="#E34F26" /> },
//       { name: "CSS3/SASS", icon: <Code className="w-4 h-4" color="#264DE4" /> },
//       {
//         name: "Web Performance",
//         icon: <MonitorDot className="w-4 h-4" color="#FFD700" />,
//       },
//       {
//         name: "Web Sockets",
//         icon: <Network className="w-4 h-4" color="#00CED1" />,
//       },
//       { name: "REST", icon: <Server className="w-4 h-4" color="#4CAF50" /> },
//       {
//         name: "React bits",
//         icon: <Shuffle className="w-4 h-4" color="#61DAFB" />,
//       },
//       {
//         name: "Framer-motion",
//         icon: <SlidersHorizontal className="w-4 h-4" color="#8A2BE2" />,
//       },

//       // UI Library & Design Systems
//       {
//         name: "Tailwind CSS",
//         icon: <Palette className="w-4 h-4" color="#06B6D4" />,
//       },
//       {
//         name: "Bootstrap",
//         icon: <Palette className="w-4 h-4" color="#7952B3" />,
//       },
//       {
//         name: "Chakra UI",
//         icon: <Palette className="w-4 h-4" color="#319795" />,
//       },
//       {
//         name: "Material UI",
//         icon: <Palette className="w-4 h-4" color="#007FFF" />,
//       },
//       {
//         name: "Daisy UI",
//         icon: <Palette className="w-4 h-4" color="#DDA0DD" />,
//       },
//       {
//         name: "Ant Design",
//         icon: <Palette className="w-4 h-4" color="#1890FF" />,
//       },
//       {
//         name: "Figma",
//         icon: <PencilRuler className="w-4 h-4" color="#F24E1E" />,
//       },
//       {
//         name: "Canvas",
//         icon: <PencilRuler className="w-4 h-4" color="#FF6600" />,
//       },

//       // Backend Development
//       { name: "Node.js", icon: <Server className="w-4 h-4" color="#339933" /> },
//       { name: "Express.js", icon: <Zap className="w-4 h-4" color="#808080" /> },
//       { name: "Firebase", icon: <Cloud className="w-4 h-4" color="#FFCA28" /> },
//       {
//         name: "Serverless",
//         icon: <Cloud className="w-4 h-4" color="#FD5750" />,
//       },
//       {
//         name: "MongoDB",
//         icon: <HardDrive className="w-4 h-4" color="#47A248" />,
//       },
//       { name: "SQL", icon: <Database className="w-4 h-4" color="#FF4500" /> },
//       { name: "PSQL", icon: <Database className="w-4 h-4" color="#336791" /> },
//       {
//         name: "Mongoose",
//         icon: <HardDrive className="w-4 h-4" color="#880000" />,
//       },
//       {
//         name: "Prisma",
//         icon: <Database className="w-4 h-4" color="#2D3748" />,
//       },

//       // Tools and Technology
//       {
//         name: "GitHub",
//         icon: <GitBranch className="w-4 h-4" color="#181717" />,
//       },
//       { name: "Git", icon: <GitBranch className="w-4 h-4" color="#F05032" /> },
//       {
//         name: "Postman",
//         icon: <Settings className="w-4 h-4" color="#FF6C37" />,
//       },
//       {
//         name: "Lighthouse",
//         icon: <Rocket className="w-4 h-4" color="#F4B400" />,
//       },
//       {
//         name: "Pagespeed",
//         icon: <Rocket className="w-4 h-4" color="#4285F4" />,
//       },
//       {
//         name: "GitHub Action",
//         icon: <GitBranch className="w-4 h-4" color="#2088FF" />,
//       },
//       {
//         name: "Web Vitals",
//         icon: <MonitorDot className="w-4 h-4" color="#4285F4" />,
//       },
//       {
//         name: "Trello/Jira",
//         icon: <MessageSquare className="w-4 h-4" color="#0052CC" />,
//       },
//       {
//         name: "Agile/Scrum",
//         icon: <Users className="w-4 h-4" color="#009688" />,
//       },

//       // Testing and Deployment
//       {
//         name: "React-Jest library",
//         icon: <TestTube className="w-4 h-4" color="#99425B" />,
//       },
//       { name: "AWS", icon: <Cloud className="w-4 h-4" color="#FF9900" /> },
//       {
//         name: "CI/CD",
//         icon: <CircuitBoard className="w-4 h-4" color="#39FF14" />,
//       },
//       {
//         name: "Unit Testing",
//         icon: <ListChecks className="w-4 h-4" color="#008000" />,
//       },
//       {
//         name: "A/B Testing",
//         icon: <Bug className="w-4 h-4" color="#FF7F50" />,
//       },
//       {
//         name: "E2E Testing",
//         icon: <Bug className="w-4 h-4" color="#DC143C" />,
//       },
//       { name: "Render", icon: <Cloud className="w-4 h-4" color="#6C5CE7" /> },
//       { name: "Netlify", icon: <Cloud className="w-4 h-4" color="#00C7B7" /> },
//       { name: "Vercel", icon: <Cloud className="w-4 h-4" color="#000000" /> },

//       // Optimization
//       {
//         name: "Build Systems",
//         icon: <Cpu className="w-4 h-4" color="#A52A2A" />,
//       },
//       {
//         name: "Responsive Design",
//         icon: <MonitorDot className="w-4 h-4" color="#6A5ACD" />,
//       },
//       {
//         name: "System Design",
//         icon: <Cpu className="w-4 h-4" color="#FF8C00" />,
//       },
//       {
//         name: "Asset Optimization",
//         icon: <Rocket className="w-4 h-4" color="#FFD700" />,
//       },
//       {
//         name: "JS Optimization",
//         icon: <Rocket className="w-4 h-4" color="#F7DF1E" />,
//       },
//       {
//         name: "LLD & HLD",
//         icon: <GanttChart className="w-4 h-4" color="#4682B4" />,
//       },

//       // General Competencies
//       {
//         name: "Accessibility",
//         icon: <Accessibility className="w-4 h-4" color="#3CB371" />,
//       },
//       {
//         name: "Maintainability",
//         icon: <FolderOpen className="w-4 h-4" color="#DAA520" />,
//       },
//       {
//         name: "Code Modularity",
//         icon: <Code className="w-4 h-4" color="#A9A9A9" />,
//       },
//       {
//         name: "Web-Security",
//         icon: <Shield className="w-4 h-4" color="#B22222" />,
//       },
//       {
//         name: "Networking",
//         icon: <Network className="w-4 h-4" color="#8B008B" />,
//       },
//     ],
//     []
//   );

//   const [offset, setOffset] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(12);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animationRef = useRef<number>();
//   const lastTimeRef = useRef<number>(0);

//   // Handle responsive visible count
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (!containerRef.current) return;
//       const containerWidth = containerRef.current.clientWidth;
//       setVisibleCount(Math.min(Math.ceil(containerWidth / 180) + 2, 15));
//     };

//     updateVisibleCount();
//     const resizeObserver = new ResizeObserver(updateVisibleCount);
//     if (containerRef.current) {
//       resizeObserver.observe(containerRef.current);
//     }

//     return () => resizeObserver.disconnect();
//   }, []);

//   // Animation loop
//   useEffect(() => {
//     const animate = (time: number) => {
//       if (!lastTimeRef.current) lastTimeRef.current = time;
//       const delta = Math.min(time - lastTimeRef.current, 100); // Cap at 100ms

//       setOffset((prev) => {
//         const pixelsPerSecond = 60; // Adjust speed here
//         const newOffset = prev + (pixelsPerSecond * delta) / 1000;
//         return newOffset >= items.length ? newOffset - items.length : newOffset;
//       });

//       lastTimeRef.current = time;
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     const startAnimation = () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       lastTimeRef.current = 0;
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     // Check for reduced motion preference
//     const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
//     if (!mediaQuery.matches) {
//       startAnimation();
//     }

//     const handleMediaChange = (e: MediaQueryListEvent) => {
//       if (e.matches) {
//         if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       } else {
//         startAnimation();
//       }
//     };

//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [items.length]);

//   // Calculate visible items with wrapping
//   const visibleItems = useMemo(() => {
//     return Array.from({ length: visibleCount }).map((_, i) => {
//       const index = (Math.floor(offset) + i) % items.length;
//       return items[index >= 0 ? index : index + items.length];
//     });
//   }, [offset, items, visibleCount]);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative overflow-hidden w-full py-4 ${className}`}
//     >
//       <div
//         className="flex gap-6 whitespace-nowrap will-change-transform"
//         style={{
//           transform: `translateX(-${(offset % 1) * 100}px)`,
//           paddingLeft: `${(offset % 1) * 100}px`,
//         }}
//       >
//         {visibleItems.map((item, i) => (
//           <TechItem
//             key={`${item.name}-${i}-${Math.floor(offset)}`}
//             name={item.name}
//             icon={item.icon}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
