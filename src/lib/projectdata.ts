// lib/projectdata.ts

/* ─────────────── Types ─────────────── */
export type Project = {
  slug: string;
  title: string;
  year: number;
  role: string;
  cover: string;
  description: string;
  stack: string[];
};

/* ─────────────── Data ─────────────── */
export const allProjects = [
  {
    slug: "next14-portfolio",
    title: "Next.js 14 Developer Portfolio",
    year: 2025,
    role: "Full-stack Developer",
    cover:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    description:
      "Blazing-fast personal site powered by Next 14 App Router, MDX case studies, dark-mode, and Framer-motion flourishes.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    slug: "student-diwan-lms",
    title: "Student Diwan LMS",
    year: 2025,
    role: "Lead Engineer",
    cover:
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",

    description:
      "Modular learning-management system with real-time analytics, bilingual UI, and micro-frontend architecture.",
    stack: ["React", "Node.js", "MongoDB", "WebSockets", "Chart.js"],
  },
  {
    slug: "noblelesse-fractional",
    title: "Noblelesse Fractional Real-Estate Platform",
    year: 2024,
    role: "Founding CTO",
    cover:
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",

    description:
      "Fin-tech app enabling Qatari investors to buy tokenised UK property shares with KYC onboarding and Stripe payouts.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "AWS Lambda"],
  },
  {
    slug: "ai-hospital-robot",
    title: "AI-Powered Hospital Service Robot",
    year: 2025,
    role: "Full-stack / Robotics",
    cover:
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",

    description:
      "Tablet-brained assistant robot with React Native UI, Python vision module, multilingual voice interface, and path planning.",
    stack: ["React Native", "Python", "TensorFlow", "ROS 2", "gRPC"],
  },
  {
    slug: "asc-timetable-engine",
    title: "ASC Timetable Auto-Generator",
    year: 2025,
    role: "Backend Architect",
    cover:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",

    description:
      "Constraint-solver that schedules subjects around custom blocks and teacher availability, producing clash-free timetables.",
    stack: ["Node.js", "TypeScript", "NestJS", "Mongoose", "Jest"],
  },
  {
    slug: "cg-cloth-reveal",
    title: "Multi-Scene CGI Cloth Reveal",
    year: 2024,
    role: "Technical Director",
    cover:
      "https://amandubey.onrender.com/static/media/BrainGames.039ee8d0c5b188afc22a.png",

    description:
      "Cinema-quality cloth-sim ad sequence with helicopter banners and dynamic logo wraps, rendered in Blender + Sora AI.",
    stack: ["Blender", "Python Scripting", "After Effects", "Sora AI"],
  },
] satisfies readonly Project[];

/* ─────────────── Helper ─────────────── */
export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug);
