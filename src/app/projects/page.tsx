// app/projects/page.tsx
import ProjectsGallery from "./ProjectsGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Aman Dubey – Web Development & UI/UX Portfolio",
  description:
    "Explore Aman Dubey's collection of high-performance web applications, intuitive UI/UX designs, and full-stack projects built with React.js, Next.js, and the MERN stack.",
  keywords: [
    "Aman Dubey Projects",
    "Web Development Portfolio",
    "React Projects",
    "Next.js Portfolio",
    "UI/UX Designs",
    "Full-Stack Developer Work",
    "Frontend Projects",
  ],
  openGraph: {
    title: "Projects | Aman Dubey – Web Development & UI/UX Portfolio",
    description:
      "Browse Aman Dubey’s portfolio featuring full-stack applications, scalable frontend architectures, and user-focused designs.",
    url: "https://amandubey.vercel.app/projects",
    siteName: "Aman Dubey's Portfolio",
    images: [
      {
        url: "https://amandubey.vercel.app/og/projects-aman.png", // ✅ store this in /public/og/
        width: 1200,
        height: 630,
        alt: "Aman Dubey - Projects Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Aman Dubey – Web Development & UI/UX Portfolio",
    description:
      "See my latest web development and design projects, crafted with React.js, Next.js, and MERN stack expertise.",
    creator: "@AmanDub97115331",
    images: ["https://amandubey.vercel.app/og/projects-aman.png"],
  },
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
