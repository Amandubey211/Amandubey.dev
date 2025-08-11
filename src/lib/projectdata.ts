// lib/projectdata.ts

import { StaticImageData } from "next/image";
import FormaFlow from "@/assets/Projects/FormaFlow.png";
import PortfolioOR from "@/assets/Projects/PortfolioOR.png";
import StudentDiwanLMS from "@/assets/Projects/StudentDiwanLMS.png";
import Xpert from "@/assets/Projects/Xpert.png";
import BizFindCover from "@/assets/Projects/BixFind.png";
import Portfolio from "@/assets/Projects/Portfolio.png";
export type Project = {
  slug: string;
  title: string;
  coverImage: string | StaticImageData; // This can still accept StaticImageData if you add local images later
  year: number;
  role: string;
  client: string;
  categories: ("Development" | "Design" | "Other")[];
  description: string;
  overview: string;
  techStack: string[];
  features?: { title: string; description: string }[];
  designScreens?: (string | StaticImageData)[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  bgColor: string;
  projectType: "Professional" | "Personal";
  duration: string;
};

// --- THIS ARRAY IS NOW IN YOUR PRECISE, SPECIFIED ORDER ---
export const allProjects: Project[] = [
  // 1. BizFind
  {
    slug: "biz-find-directory",
    title: "BizFind - Business Directory",
    coverImage: BizFindCover,
    year: 2025,
    role: "Full-Stack Developer",
    client: "List India (Assignment)",
    categories: ["Development", "Design"],
    description:
      "A responsive business directory built from scratch in under 4 hours to meet a 24-hour challenge deadline.",
    overview:
      "This project was a personal 'speedrun' to deliver a production-ready, full-stack application. It showcases a modern development workflow, from building and deploying a serverless Node.js API to scaffolding a responsive React frontend with fluid animations. The focus was on rapid, high-quality execution under pressure.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    features: [
      {
        title: "Rapid Prototyping (4-Hour Execution)",
        description:
          "The entire application was planned, built, and deployed in under 4 hours, showcasing efficient execution and time management.",
      },
      {
        title: "Live Client-Side Search & Pagination",
        description:
          "Implemented a fast and responsive UI for filtering and navigating through 50+ business listings without page reloads.",
      },
      {
        title: "Full-Stack Monorepo on Vercel",
        description:
          "The React frontend and Node.js serverless backend are managed in a single GitHub monorepo and deployed to Vercel for a streamlined CI/CD pipeline.",
      },
    ],
    liveUrl: "https://biz-find.vercel.app/",
    githubUrl: "https://github.com/Amandubey211/BizFind",
    isFeatured: true,
    bgColor: "bg-emerald-50",
    projectType: "Personal",
    duration: "4 Hours",
  },
  // 2. FormaFlow
  {
    slug: "formaflow-builder",
    title: "FormaFlow - Intuitive Form Builder",
    coverImage: FormaFlow,
    year: 2025,
    role: "Lead Architect & Developer",
    client: "Personal Project",
    description:
      "A complete, schema-driven form builder application with a high-fidelity drag-and-drop interface.",
    overview:
      "This project represents a deep dive into modern frontend architecture and creating polished, user-centric interfaces. It features a drag-and-drop builder, an inline editor with real-time preview, and a dynamic form renderer capable of handling nested conditional logic.",
    techStack: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "@dnd-kit",
      "React Hook Form",
      "Vitest",
    ],
    features: [
      {
        title: "Drag-and-Drop Builder",
        description:
          "Easily construct complex form layouts with an intuitive drag-and-drop interface.",
      },
      {
        title: "Real-time Preview & Auto-Save",
        description:
          "See your changes live with an inline editor that provides instant feedback and saves progress automatically.",
      },
      {
        title: "Conditional Logic Renderer",
        description:
          "Create dynamic forms that show or hide fields based on nested user input and complex rules.",
      },
      {
        title: "Schema-Driven Design",
        description:
          "Forms are generated and validated based on a predefined schema, ensuring data integrity.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-indigo-50",
    projectType: "Personal",
    duration: "2 Days",
    liveUrl: "https://formaflow.vercel.app/",
    githubUrl: "https://github.com/Amandubey211/form-builder",
    categories: ["Design", "Development"],
  },
  // 3. Portfolio v4
  {
    slug: "portfolio-v4",
    title: "Next.js Portfolio (v4)",
    coverImage: Portfolio,
    year: 2025,
    role: "Designer & Developer",
    client: "Personal Project",
    description:
      "The website you are currently viewing. A design-driven portfolio with a focus on motion and performance.",
    overview:
      "The fourth major iteration of my personal portfolio, built to be a visually engaging showcase of my skills. It leverages Next.js for performance and Framer Motion for fluid animations, creating a memorable user experience.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Lenis",
    ],
    features: [
      {
        title: "Staggered Project Grid",
        description:
          "A dynamic, masonry-style grid built with CSS Grid that gracefully rearranges on different screen sizes.",
      },
      {
        title: "Fluid Scrolling",
        description:
          "Implemented Lenis to override native scroll, providing an exceptionally smooth, 60fps scrolling experience.",
      },
      {
        title: "Seamless Page Transitions",
        description:
          "Leveraging Framer Motion's AnimatePresence, content elegantly fades and slides between page navigations.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-gray-800",
    projectType: "Personal",
    duration: "5 Days",
    githubUrl: "https://github.com/Amandubey211/my-next-journey",
    categories: ["Design", "Development"],
  },
  // 4. Student Diwan LMS
  {
    slug: "student-diwan-lms",
    title: "Student Diwan LMS",
    coverImage: StudentDiwanLMS,
    year: 2024,
    role: "Frontend Lead",
    client: "Student Diwan (Qatar)",
    description:
      "A large-scale SaaS Learning Management System with a multi-role platform for admins, staff, students, and parents.",
    overview:
      "As the Frontend Lead, I architected and led the development of a multi-role SaaS LMS from the ground up. My focus was on creating a scalable, secure, and highly performant user experience for thousands of users.",
    techStack: ["React", "Redux", "TypeScript", "Firebase", "JWT", "RBAC"],
    features: [
      {
        title: "Granular Role-Based Access Control (RBAC)",
        description:
          "Engineered a versatile system for creating and managing permissions for roles like teachers, librarians, and custom staff.",
      },
      {
        title: "Comprehensive Core Modules",
        description:
          "Developed 30+ modules for academic management (assignments, gradebooks) and school operations (library, transportation).",
      },
      {
        title: "Performance Optimization",
        description:
          "Improved application performance by 30% through code splitting, lazy loading, and real-time updates, achieving a 98 Lighthouse score.",
      },
      {
        title: "Enhanced Security & Auditing",
        description:
          "Strengthened security by 25% with JWT encryption, implementing audit trails, and designing an automated logging system.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-sky-50",
    projectType: "Professional",
    duration: "1.7 Years",
    liveUrl: "https://app.studentdiwan.com/",
    categories: ["Development", "Design"],
  },
  // 5. Xpert
  {
    slug: "xpert-hiring-platform",
    title: "Xpert Hiring Platform",
    coverImage: Xpert,
    year: 2024,
    role: "Full-Stack Developer",
    client: "Xpert, OptaCloud",
    description:
      "An expert hiring platform connecting developers with employers, featuring multi-tier verification and payments.",
    overview:
      "As a Full-Stack Developer, I built and deployed a platform to bridge the gap between skilled professionals and employers. A key focus was on building trust and security through a comprehensive verification process and a reliable fintech backend.",
    techStack: [
      "React",
      "Redux",
      "Firebase",
      "Cloud Functions",
      "Razorpay API",
      "LinkedIn API",
    ],
    features: [
      {
        title: "Multi-Tier Verification System",
        description:
          "Reduced fraudulent profiles by 70% by engineering a system using email, mobile OTP, and the official LinkedIn API.",
      },
      {
        title: "Secure Fintech System",
        description:
          "Engineered a secure payment system and wallet using Razorpay and custom Firebase Cloud Functions, achieving a 99.2% transaction success rate.",
      },
      {
        title: "AI-Powered Recommendations",
        description:
          "Boosted client-expert connections by 40% by implementing an AI-powered algorithm to match user needs with professional skills.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-teal-50",
    projectType: "Professional",
    duration: "5 Months",
    liveUrl: "https://xpert.works/",
    categories: ["Development"],
  },
  // 6. Pro-Dash
  {
    slug: "pro-dash",
    title: "Pro-Dash - Admin Dashboard",
    coverImage:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    year: 2024,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A comprehensive MERN stack dashboard with real-time data visualization and secure JWT authentication.",
    overview:
      "This dashboard features a secure, token-based authentication system, real-time data charts, and dynamic user profile scoring. The backend uses Node.js, Express, and MongoDB to provide a robust solution for data management.",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Chakra UI",
    ],
    features: [
      {
        title: "Secure Authentication",
        description:
          "Token-based (JWT) login system ensures user data is protected and sessions are managed securely.",
      },
      {
        title: "Data Visualization",
        description:
          "Real-time charts and graphs provide immediate insights into application data and user activity.",
      },
      {
        title: "User Profile Scoring",
        description:
          "A dynamic scoring system encourages user engagement and tracks key performance metrics.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-[#F6F0C6]",
    projectType: "Personal",
    duration: "2 Months",
    liveUrl: "https://pro-dash.onrender.com/",
    categories: ["Development", "Design"],
  },
  // 7. Brain-Games
  {
    slug: "brain-games",
    title: "Brain-Games Quiz App",
    coverImage:
      "https://amandubey.onrender.com/static/media/BrainGames.039ee8d0c5b188afc22a.png",
    year: 2024,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "An interactive and highly performant quiz application designed to challenge users' knowledge.",
    overview:
      "Built entirely on the frontend with React, this app uses the Context API for efficient state management. Chakra UI provides a polished and responsive user interface, featuring a live scoreboard to foster competition.",
    techStack: ["React", "Context API", "Chakra UI"],
    features: [
      {
        title: "Efficient State Management",
        description:
          "Uses React's Context API to manage quiz state, user answers, and scores without prop drilling.",
      },
      {
        title: "Live Scoreboard",
        description:
          "Fosters competition by tracking and displaying user scores in real-time as they progress through the quiz.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-[#EFEFF4]",
    projectType: "Personal",
    duration: "1 Month",
    liveUrl: "https://brain-games-0qj6.onrender.com/",
    categories: ["Development", "Design"],
  },
  // 8. Netflix-GPT
  {
    slug: "netflix-gpt",
    title: "NetflixGPT",
    coverImage:
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",
    year: 2024,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A Netflix clone with a powerful twist: AI-driven movie recommendations powered by OpenAI's GPT models.",
    overview:
      "This project showcases seamless API integration with both movie databases and the OpenAI API. It features robust global state management with Redux Toolkit and a responsive, mobile-first design built with Tailwind CSS.",
    techStack: ["React", "Redux", "Tailwind CSS", "Firebase", "OpenAI API"],
    features: [
      {
        title: "AI Recommendations",
        description:
          "Leverages OpenAI's GPT models to provide unique, context-aware movie suggestions based on user queries.",
      },
      {
        title: "Secure Firebase Auth",
        description:
          "Handles user sign-up, login, and session management using Firebase Authentication for a secure experience.",
      },
      {
        title: "Redux State Management",
        description:
          "Manages complex application state, including user info, movie data, and AI results, using Redux Toolkit.",
      },
    ],
    isFeatured: true,
    bgColor: "bg-[#E9E9E9]",
    projectType: "Personal",
    duration: "1 Month",
    liveUrl: "https://netflixgpt-2510.onrender.com",
    categories: ["Development", "Design"],
  },
  // 9. E-Shop
  {
    slug: "eshop",
    title: "E-SHOP",
    coverImage:
      "https://amandubey.onrender.com/static/media/E-shop.a5e8d7623156a30a153b.png",
    year: 2024,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A modern e-commerce platform built with React and Redux for robust state management.",
    overview:
      "This project features a dynamic product catalog, an intuitive shopping cart experience, and secure user authentication powered by Firebase. It was bundled with Parcel for fast, zero-config builds and styled with Bootstrap.",
    techStack: ["React", "Redux", "Bootstrap", "Firebase", "Parcel"],
    features: [
      {
        title: "Secure Firebase Authentication",
        description:
          "Provides a secure login system for users to manage their accounts and view order history.",
      },
      {
        title: "Dynamic Shopping Cart",
        description:
          "Utilizes Redux for robust state management, allowing users to add, remove, and update items seamlessly.",
      },
      {
        title: "Responsive Product Catalog",
        description:
          "Built with Bootstrap to ensure a clean and accessible shopping experience on any device.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-[#FAD6EB]",
    projectType: "Personal",
    duration: "3 Weeks",
    liveUrl: "https://ecommerce-xn2c.onrender.com",
    categories: ["Development", "Design"],
  },
  // 10. AI Studio
  {
    slug: "ai-generator",
    title: "AI Image & Video Studio",
    coverImage:
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "An AI-powered content generation tool that leverages OpenAI APIs to create unique images and video clips.",
    overview:
      "This tool allows users to bring their creative ideas to life by entering text prompts. The interface, built with Chakra UI, provides a seamless experience. This project demonstrates handling complex API responses in React.",
    techStack: ["React", "Chakra UI", "OpenAI API"],
    features: [
      {
        title: "OpenAI API Integration",
        description:
          "Directly connects to OpenAI models to generate high-quality images and video clips from text prompts.",
      },
      {
        title: "Intuitive Content Studio",
        description:
          "A clean interface built with Chakra UI provides a seamless experience for users to manage their creations.",
      },
      {
        title: "Asynchronous Operation Handling",
        description:
          "Effectively manages loading states and API responses to keep the UI responsive during content generation.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
    projectType: "Personal",
    duration: "2 Weeks",
    liveUrl: "https://aistudio.onrender.com/",
    categories: ["Development", "Design"],
  },
  // 11. Chat App
  {
    slug: "chat-app",
    title: "Butterfly Chat App",
    coverImage:
      "https://amandubey.onrender.com/static/media/ChatApp.8e9455f7587881b29cfc.png",
    year: 2023,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A real-time chat application built on the MERN stack with instant, bi-directional messaging via Socket.io.",
    overview:
      "This app uses Socket.io for real-time communication and includes features like user authentication, online status indicators, and email notifications for new messages via NodeMailer. The frontend is crafted with Chakra UI.",
    techStack: ["MERN", "Socket.io", "NodeMailer", "Chakra UI"],
    features: [
      {
        title: "Real-Time Messaging",
        description:
          "Utilizes Socket.io to enable instant, bi-directional communication between users without page reloads.",
      },
      {
        title: "Offline Notifications",
        description:
          "Integrates NodeMailer to send email alerts for new messages, ensuring users stay connected.",
      },
      {
        title: "User Presence System",
        description:
          "Displays real-time online status indicators for all users in the contact list.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-[#E1E5FF]",
    projectType: "Personal",
    duration: "1 Month",
    liveUrl: "https://butterfly-w0aw.onrender.com",
    categories: ["Development", "Design"],
  },
  // 12. Portfolio v3
  {
    slug: "portfolio-v3",
    title: "Personal Portfolio (v3)",
    coverImage: PortfolioOR,
    year: 2023,
    role: "Full-Stack Developer",
    client: "Personal Project",
    description:
      "The third major iteration of my portfolio, designed to be a performant and visually engaging showcase.",
    overview:
      "Built with a full MERN stack, this version allowed for dynamic content management. The design focused on clean typography, smooth animations, and a professional aesthetic to reflect my personal brand.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI"],
    features: [
      {
        title: "Full-Stack (MERN) Architecture",
        description:
          "Allowed for dynamic content management of projects and skills without redeploying the frontend.",
      },
      {
        title: "Professional Aesthetic",
        description:
          "Focused on clean typography, smooth animations, and a visually engaging design to reflect a personal brand.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
    projectType: "Personal",
    duration: "1 Month",
    liveUrl: "/",
    categories: ["Development", "Design"],
  },
  // 13. Joke-Jive
  {
    slug: "joke-jive",
    title: "Joke-Jive",
    coverImage:
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A lighthearted entertainment app that delivers an endless stream of jokes using an infinite scroll mechanism.",
    overview:
      "This application provides a seamless browsing experience. The state is managed with Redux, and the responsive UI is built with a combination of Tailwind CSS and Chakra UI components.",
    techStack: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Chakra UI",
      "Infinite Scroll",
    ],
    features: [
      {
        title: "Seamless Infinite Scroll",
        description:
          "Automatically fetches and displays new jokes as the user scrolls, providing an endless browsing experience.",
      },
      {
        title: "Efficient State Management",
        description:
          "Uses Redux to handle the growing list of jokes and API loading states without performance degradation.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-[#EFEFF4]",
    projectType: "Personal",
    duration: "2 Days",
    liveUrl: "https://jokejive.onrender.com",
    categories: ["Development", "Design"],
  },
  // 14. Sound Wizard
  {
    slug: "sound-wizard",
    title: "Sound Wizard",
    coverImage:
      "https://amandubey.onrender.com/static/media/soundWizard.503dbd0c0d741426873e.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "An accessibility-focused app that leverages browser APIs for speech recognition and screen reading.",
    overview:
      "Sound Wizard is an exploration into web accessibility. The project integrates the Web Speech API to provide voice command functionality and speech synthesis, making the web experience navigable for users with impairments.",
    techStack: [
      "React",
      "Web Speech API",
      "Screen Reader",
      "Speech Recognition",
    ],
    features: [
      {
        title: "Speech Recognition",
        description:
          "Utilizes the browser's built-in speech recognition engine to allow for voice-based commands and inputs.",
      },
      {
        title: "Screen Reader (Speech Synthesis)",
        description:
          "Reads out on-screen content to users, improving accessibility for the visually impaired.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-purple-100",
    projectType: "Personal",
    duration: "2 Days",
    liveUrl: "https://soundwizard.onrender.com/",
    categories: ["Development", "Other"],
  },
  // 15. React Dashboard
  {
    slug: "react-dashboard-demo",
    title: "React Data Dashboard",
    coverImage:
      "https://amandubey.onrender.com/static/media/Dashboard.df43871c6ede9cef7aed.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A client-side dashboard application built to display and manage data from a live API.",
    overview:
      "This project demonstrates client-side data fetching, state management, and component-based UI construction. It fetches data from a dummy JSON API and renders it in a clean, responsive layout using Bootstrap.",
    techStack: ["React", "Bootstrap", "DummyJSON API"],
    features: [
      {
        title: "Live Data Fetching",
        description:
          "Connects to a third-party REST API to fetch and display data in real-time.",
      },
      {
        title: "Responsive Layout",
        description:
          "Uses Bootstrap's grid system and components to ensure the dashboard is usable on all screen sizes.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-gray-200",
    projectType: "Personal",
    duration: "5 Days",
    liveUrl: "https://reactdashboard-ddew.onrender.com/",
    categories: ["Development"],
  },
  // 16. Bake-N-Cake
  {
    slug: "bake-n-cake",
    title: "Bake-N-Cake",
    coverImage:
      "https://amandubey.onrender.com/static/media/bake-n-cake%20thumbnail.5143d44bb01d3d18292d.png",
    year: 2023,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A full-featured e-commerce platform for a local bakery, including cart management and payments.",
    overview:
      "This MERN stack application provides a seamless shopping experience. It includes secure JWT authentication, state management with Context API, and a complete checkout process powered by a payment gateway.",
    techStack: ["MERN", "JWT", "Chakra UI", "Payment Gateway", "Context"],
    features: [
      {
        title: "Full E-commerce Flow",
        description:
          "Complete user journey from browsing products to adding to cart and completing a secure purchase.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Securely process payments using a third-party payment provider.",
      },
      {
        title: "JWT Authentication",
        description:
          "Users can create accounts, log in, and manage their sessions securely.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-pink-100",
    projectType: "Personal",
    duration: "5 Months",
    liveUrl: "https://cake-n-bake2.onrender.com/",
    categories: ["Development"],
  },
  // 17. Portfolio v2
  {
    slug: "portfolio-v2",
    title: "Personal Portfolio (v2)",
    coverImage:
      "https://amandubey.onrender.com/static/media/AmanV2.1f4cd25de7ed1bf502e3.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A previous iteration of my personal portfolio, built with React and Bootstrap.",
    overview:
      "This project focused on creating a clean and responsive showcase of my work using client-side routing and modern frontend libraries. It demonstrates strong fundamentals in component-based architecture.",
    techStack: ["React", "Bootstrap", "NPMs"],
    features: [
      {
        title: "Component-Based Architecture",
        description:
          "Showcased strong fundamentals in building modular and reusable UI components with React.",
      },
      {
        title: "Responsive Layout with Bootstrap",
        description:
          "Ensured a clean and accessible user experience across a wide range of devices.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-slate-200",
    projectType: "Personal",
    duration: "1 Week",
    liveUrl: "https://amandubeyprofile.netlify.app/",
    categories: ["Development", "Design"],
  },
  // 18. Portfolio v1
  {
    slug: "portfolio-v1",
    title: "Personal Portfolio (v1)",
    coverImage:
      "https://amandubey.onrender.com/static/media/AmanV1.a105f0d88454fab7c150.png",
    year: 2022,
    role: "Web Developer",
    client: "Personal Project",
    description:
      "My first portfolio website, built with foundational web technologies.",
    overview:
      "This project was a crucial step in my learning journey, built from the ground up using only HTML, CSS, and JavaScript. It showcases a solid understanding of core web principles.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      {
        title: "Core Web Fundamentals",
        description:
          "Built from scratch using only vanilla HTML, CSS, and JavaScript, demonstrating a strong grasp of foundational principles.",
      },
      {
        title: "Manual DOM Manipulation",
        description:
          "All interactive elements and content updates were handled directly with JavaScript, without a library.",
      },
    ],
    isFeatured: false,
    bgColor: "bg-blue-100",
    projectType: "Personal",
    duration: "1 Week",
    liveUrl: "https://amandubey211.github.io/Aman211-portfolio/about.html",
    categories: ["Development"],
  },
];

// This function remains the same and is correct.
export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
