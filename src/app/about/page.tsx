// app/about/page.tsx
import { WorkHistory } from "@/components/WorkHistory";
import AboutHero from "./AboutHero";
import { DesignProcess } from "@/components/DesignProcess";
import { Education } from "@/components/Education";
import { SkillsShowcase } from "@/components/SkillsShowcase";

// SEO Metadata for the page
export const metadata = {
  title: "About | Aman Dubey",
  description:
    "Learn more about Aman Dubey, a creative developer and digital designer specializing in high-performance web applications and intuitive UI/UX.",
};

export default function AboutPage() {
  return (
    // Use a consistent dark background for the entire page
    <main className=" text-white">
      <div className="relative max-w-6xl mx-auto px-6 md:px-6 py-12 ">
        <AboutHero />

        <SkillsShowcase />

        <WorkHistory />
        <DesignProcess />
        <Education />
      </div>
    </main>
  );
}
