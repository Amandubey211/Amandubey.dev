import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";

/** — Dynamic <title> — */
export const metadata = {
  title:
    "Aman Dubey | Software Developer | UI/UX Designer | Frontend Developer",
  description:
    "Aman Dubey is a full-stack developer with 2.5+ years of experience in building secure, high-performance applications using React.js, Next.js, and Node.js. Specializing in frontend optimization, scalable architecture, and intuitive UI/UX.",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
      {/* <TestimonialsSection /> */}
    </main>
  );
}