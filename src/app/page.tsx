/* app/page.tsx  ← root route (“/”)               */
/* ─────────────────────────────────────────────── */
// 🚫 NO "use client" here

import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { TechMarquee } from "@/components/TechMarquee";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CallToActionSection } from "@/components/CallToActionSection";

/** — Dynamic <title> — */
export const metadata = {
  title:
    "Aman Dubey | Software Developer | UI/UX Designer | Frontend Developer",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
