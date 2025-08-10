// app/about/page.tsx
import { WorkHistory } from "@/components/WorkHistory";
import AboutHero from "./AboutHero";
import { DesignProcess } from "@/components/DesignProcess";
import { Education } from "@/components/Education";
import { SkillsShowcase } from "@/components/SkillsShowcase";

export const metadata = {
  title: "About | Aman Dubey",
  description:
    "Discover Aman Dubey’s journey as a full-stack developer and UI/UX designer. Specializing in building scalable, user-focused web applications with a passion for design and performance.",

  openGraph: {
    title: "About | Aman Dubey",
    description:
      "Get to know Aman Dubey — full-stack developer, UI/UX expert, and creative problem solver.",
    url: "https://amandubey.vercel.app/about",
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/og/about-aman.png", // ✅ Save this in /public/og/
        width: 1200,
        height: 630,
        alt: "About Aman Dubey",
      },
    ],
    locale: "en_US",
    type: "profile", // Profile page
  },

  twitter: {
    card: "summary_large_image",
    title: "About | Aman Dubey",
    description:
      "Meet Aman Dubey — full-stack developer, UI/UX designer, and performance-focused engineer.",
    creator: "@AmanDub97115331",
    images: ["https://amandubey.vercel.app/og/about-aman.png"], // ✅ Direct link
  },

  keywords: [
    "Aman Dubey",
    "About Aman Dubey",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Web Development",
    "Frontend Developer",
    "Next.js Developer",
  ],
};

export default function AboutPage() {
  return (
    <main className="text-white">
      <div className="relative max-w-6xl mx-auto px-6 md:px-6 py-12">
        <AboutHero />
        <SkillsShowcase />
        <WorkHistory />
        <Education />
        <DesignProcess />
      </div>
    </main>
  );
}
