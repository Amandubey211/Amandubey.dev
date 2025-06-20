"use client";

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <main className="relative min-h-screen  text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <TechMarquee className="absolute bottom-0 left-0 w-full" />
    </main>
  );
}
