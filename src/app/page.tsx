import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";

/** — Dynamic <title> — */
export const metadata = {
  // Your existing title and description are great, let's keep them.
  title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
  description:
    "Aman Dubey is a full-stack developer with 2.5+ years of experience in building secure, high-performance applications using React.js, Next.js, and Node.js. Specializing in frontend optimization, scalable architecture, and intuitive UI/UX.",

  // ✅ The new Open Graph and Twitter metadata
  openGraph: {
    title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
    description:
      "Building secure, high-performance web applications with a focus on intuitive UI/UX.", // A slightly shorter description for previews
    url: "https://amandubey.vercel.app", // The canonical URL of your portfolio
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmanimage.bc0eb3d8.jpeg&w=1200&q=75", // The absolute URL to your image
        width: 1200,
        height: 630,
        alt: "Aman Dubey - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // This is the card type with a big image.
    title: "Aman Dubey | Full-Stack Developer & UI/UX Expert",
    description:
      "Building secure, high-performance web applications with a focus on intuitive UI/UX.",
    creator: "@AmanDub97115331", // Replace with your actual Twitter handle
    images: ["https://amandubey.vercel.app/social-card.png"], // The absolute URL to your image
  },
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
