"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Database,
  Server,
  Atom,
  Sigma,
  Braces,
  FileJson,
  Box,
  CircuitBoard,
} from "lucide-react";
const items = [
  { name: "TypeScript", icon: <FileJson className="w-4 h-4 mr-2" /> },
  { name: "React.js", icon: <Atom className="w-4 h-4 mr-2" /> },
  { name: "Next.js", icon: <Sigma className="w-4 h-4 mr-2" /> },
  { name: "Node.js", icon: <Server className="w-4 h-4 mr-2" /> },
  { name: "Redux", icon: <Box className="w-4 h-4 mr-2" /> },
  { name: "Express.js", icon: <CircuitBoard className="w-4 h-4 mr-2" /> },
  { name: "MongoDB", icon: <Database className="w-4 h-4 mr-2" /> },
  { name: "Tailwind CSS", icon: <Braces className="w-4 h-4 mr-2" /> },
];
export type TechItem = {
  name: string;
  icon?: React.ReactNode;
};

type TechStackSliderProps = {
  speed?: number; // seconds for full loop
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
};

export function TechStackSlider({
  speed = 20,
  direction = "left",
  className = "",
  itemClassName = "bg-[#1e1e1e] text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2",
}: TechStackSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const totalWidth = scrollerRef.current.scrollWidth / 2;
    const fromX = direction === "left" ? 0 : -totalWidth;
    const toX = direction === "left" ? -totalWidth : 0;

    const tween = gsap.fromTo(
      scrollerRef.current,
      { x: fromX },
      {
        x: toX,
        duration: speed,
        repeat: -1,
        ease: "linear",
      }
    );

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
        className="flex gap-6 w-max whitespace-nowrap select-none"
      >
        {[...items, ...items].map((tech, idx) => (
          <div key={`${tech.name}-${idx}`} className={itemClassName}>
            {tech.icon}
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
}
