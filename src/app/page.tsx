import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";

// ✅ SEO & Open Graph Metadata
export const metadata = {
  title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
  description:
    "Aman Dubey is a full-stack developer with 2.5+ years of experience building secure, high-performance applications using React.js, Next.js, and Node.js. Specializing in frontend optimization, scalable architecture, and intuitive UI/UX.",

  openGraph: {
    title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
    description:
      "Building secure, high-performance web applications with a focus on intuitive UI/UX.",
    url: "https://amandubey.vercel.app", // Canonical portfolio link
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/og/amandubey.png", // ✅ Direct public URL
        width: 1200,
        height: 630,
        alt: "Aman Dubey - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
    description:
      "Building secure, high-performance web applications with a focus on intuitive UI/UX.",
    creator: "@AmanDub97115331", // Your Twitter username
    images: ["https://amandubey.vercel.app/og/amandubey.png"], // ✅ Direct public URL
  },

  // ✅ Optional: Better search engine targeting
  keywords: [
    "Aman Dubey",
    "Full-Stack Developer",
    "UI/UX Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Frontend Optimization",
    "Web Development",
  ],
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExpertiseSection />
    </main>
  );
}
