import { WorkHistory } from "@/components/WorkHistory";
import AboutHero from "./AboutHero";
import { DesignProcess } from "@/components/DesignProcess";
import { Education } from "@/components/Education";
import { TechStackSlider } from "@/components/TechStackSlider";

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
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-32">
        {/* Each section is now its own component */}
        <AboutHero />
        <div className="py-5 ">
          <TechStackSlider
            speed={20}
            direction="left"
            className="mt-12"
            itemClassName="bg-[#1e1e1e] text-white/90 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2"
          />
        </div>

        <WorkHistory />
        <DesignProcess />
        <Education />
      </div>
    </main>
  );
}
