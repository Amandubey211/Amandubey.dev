// lib/projectdata.ts

import { StaticImageData } from "next/image";
import FormaFlow from "@/assets/Projects/FormaFlow.png";
import PortfolioOR from "@/assets/Projects/PortfolioOR.png";
import StudentDiwanLMS from "@/assets/Projects/StudentDiwanLMS.png";
import Xpert from "@/assets/Projects/Xpert.png";

// --- The new, richer Project type ---
export type Project = {
  slug: string;
  title: string;
  coverImage: string | StaticImageData;
  year: number;
  role: string;
  client: string; // NEW FIELD
  categories: ("Development" | "Design" | "Other")[];
  description: string; // This is the short description at the top
  overview: string; // NEW FIELD for the "Overview" section
  techStack: string[];
  features?: { title: string; description: string }[]; // NEW FIELD (optional)
  designScreens?: (string | StaticImageData)[]; // NEW FIELD (optional)
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  bgColor: string;
};

export const allProjects: Project[] = [
  // --- Existing Projects - Now Fully Populated ---
  {
    slug: "student-diwan-lms",
    title: "Student Diwan - Learning Management System",
    liveUrl: "https://app.studentdiwan.com/",
    coverImage: StudentDiwanLMS,
    year: 2025,
    role: "Frontend Lead",
    client: "Student Diwan (Qatar)",
    description:
      "A large-scale SaaS Learning Management System (LMS) with a multi-role platform for admins, staff, students, and parents.",
    overview:
      "As the Frontend Lead, I architected and led the development of a multi-role SaaS LMS from the ground up. The platform was designed to serve diverse user groups, requiring a robust and flexible architecture. My focus was on creating a scalable, secure, and highly performant user experience for thousands of users.",
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
          "Strengthened security by 25% with JWT encryption, implementing audit trails, and designing an automated logging system to prevent unauthorized access.",
      },
    ],
    categories: ["Development", "Design"],
    isFeatured: true,
    bgColor: "bg-sky-50",
  },
  {
    slug: "xpert-hiring-platform",
    title: "Xpert - Expert Hiring Platform",
    liveUrl: "https://xpert.works/",
    coverImage: Xpert, // Placeholder
    year: 2022,
    role: "Full-Stack Developer",
    client: "Xpert, OptaCloud (Singapore)",
    description:
      "An expert hiring platform connecting developers with employers, featuring multi-tier verification and a secure payment system.",
    overview:
      "As a Full-Stack Developer, I built and deployed a platform to bridge the gap between skilled professionals and employers. A key focus was on building trust and security, which was achieved through a comprehensive verification process using official APIs and a reliable fintech backend.",
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
    categories: ["Development"],
    isFeatured: true,
    bgColor: "bg-teal-50",
  },
  {
    slug: "formaflow-builder",
    title: "FormaFlow - Intuitive Form Builder",
    coverImage: FormaFlow,
    year: 2025,
    role: "Lead Architect, Developer & Designer",
    client: "Personal Project",
    description:
      "A complete, schema-driven form builder application designed with a 'user-experience first' philosophy.",
    overview:
      "This project represents a deep dive into modern frontend architecture, state management with Context API, and creating polished, user-centric interfaces. It features a high-fidelity drag-and-drop builder for creating complex layouts, an inline editor with real-time preview and auto-saving, and a dynamic form renderer capable of handling nested conditional logic.",
    techStack: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "@dnd-kit",
      "React Hook Form",
      "Vitest",
      "Context API",
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
    categories: ["Design", "Development"],
    liveUrl: "https://formaflow.vercel.app/",
    githubUrl: "https://github.com/Amandubey211/form-builder",
    isFeatured: true,
    bgColor: "bg-indigo-50",
  },
  {
    slug: "pro-dash",
    title: "Pro-Dash - Admin Dashboard",
    coverImage:
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png",
    year: 2024,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A comprehensive MERN stack dashboard engineered for professional use with real-time data visualization.",
    overview:
      "This dashboard features a secure, token-based authentication system (JWT), real-time data visualization charts, and dynamic user profile scoring to drive engagement. The backend is built on Node.js and Express, connected to a MongoDB database, providing a robust and scalable solution for data management and analytics.",
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
    categories: ["Development", "Design"],
    liveUrl: "https://pro-dash.onrender.com/",
    isFeatured: true,
    bgColor: "bg-[#F6F0C6]",
  },
  {
    slug: "netflix-gpt",
    title: "NetflixGPT",
    coverImage:
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png",
    year: 2024,
    role: "Frontend Developer & AI Integration",
    client: "Personal Project",
    description:
      "A Netflix clone with a powerful twist: AI-driven movie recommendations powered by OpenAI's GPT models.",
    overview:
      "This project showcases seamless API integration with both movie databases and the OpenAI API. It features robust global state management with Redux Toolkit and a responsive, mobile-first design built with Tailwind CSS. Firebase handles user authentication, ensuring a secure and personalized experience.",
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
    categories: ["Development", "Design"],
    liveUrl: "https://netflixgpt-2510.onrender.com",
    isFeatured: true,
    bgColor: "bg-[#E9E9E9]",
  },
  {
    slug: "brain-games",
    title: "Brain-Games Quiz App",
    coverImage:
      "https://amandubey.onrender.com/static/media/BrainGames.039ee8d0c5b188afc22a.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "An interactive and highly performant quiz application designed to challenge users' knowledge.",
    overview:
      "Built entirely on the frontend with React, this app uses the Context API for efficient state management across components. Chakra UI provides a polished, accessible, and responsive user interface. The app features a live scoreboard to foster a fun and competitive environment.",
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
    categories: ["Development", "Design"],
    liveUrl: "https://brain-games-0qj6.onrender.com/",
    isFeatured: true,
    bgColor: "bg-[#EFEFF4]",
  },
  {
    slug: "eshop",
    title: "E-SHOP",
    coverImage:
      "https://amandubey.onrender.com/static/media/E-shop.a5e8d7623156a30a153b.png",
    year: 2024,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A modern e-commerce platform built with React and Redux for robust state management and a seamless user experience.",
    overview:
      "This project features a dynamic product catalog, an intuitive shopping cart experience, and secure user authentication powered by Firebase. It was bundled with Parcel for fast, zero-config builds and styled with Bootstrap for a clean, responsive layout.",
    techStack: ["React", "Redux", "Bootstrap", "Firebase", "Parcel"],
    categories: ["Development", "Design"],
    liveUrl: "https://ecommerce-xn2c.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#FAD6EB]",
  },
  {
    slug: "ai-generator",
    title: "AI Image & Video Studio",
    coverImage:
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
    year: 2023,
    role: "Frontend Developer & AI Integration",
    client: "Personal Project",
    description:
      "An AI-powered content generation tool that leverages multiple OpenAI APIs to create unique images and video clips.",
    overview:
      "This tool allows users to bring their creative ideas to life by entering text prompts. The interface, built with Chakra UI, provides a seamless and intuitive experience. This project demonstrates handling complex API responses and managing asynchronous operations in React.",
    techStack: ["React", "Chakra UI", "OpenAI API"],
    categories: ["Development", "Design"],
    liveUrl: "https://aistudio.onrender.com/",
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
  },
  {
    slug: "chat-app",
    title: "Butterfly Chat App",
    coverImage:
      "https://amandubey.onrender.com/static/media/ChatApp.8e9455f7587881b29cfc.png",
    year: 2023,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A real-time chat application built on the MERN stack with instant, bi-directional messaging.",
    overview:
      "This app uses Socket.io for real-time communication and includes key features like user authentication, online status indicators, and email notifications for new messages via NodeMailer. The frontend is crafted with Chakra UI for a clean and responsive chat experience.",
    techStack: ["MERN", "Socket.io", "NodeMailer", "Chakra UI"],
    categories: ["Development", "Design"],
    liveUrl: "https://butterfly-w0aw.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#E1E5FF]",
  },
  {
    slug: "portfolio-v3",
    title: "Personal Portfolio (v3)",
    coverImage: PortfolioOR,
    year: 2023,
    role: "Full-Stack Developer & Designer",
    client: "Personal Project",
    description:
      "The third major iteration of my personal portfolio website, designed to be a performant and visually engaging showcase.",
    overview:
      "Built with a full MERN stack, this version allows for dynamic content management. The design focuses on clean typography, smooth animations, and a professional aesthetic to reflect my personal brand. This is the portfolio that came before the current Next.js version.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI"],
    categories: ["Development", "Design"],
    liveUrl: "/",
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
  },
  {
    slug: "joke-jive",
    title: "Joke-Jive",
    coverImage:
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png",
    year: 2024,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A lighthearted entertainment app that delivers an endless stream of jokes using an infinite scroll mechanism.",
    overview:
      "This application provides a seamless browsing experience for users looking for a laugh. The application's state is centrally managed with Redux, and the responsive UI is built with a combination of Tailwind CSS and Chakra UI components, demonstrating proficiency in modern styling techniques.",
    techStack: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Chakra UI",
      "Infinite Scroll",
    ],
    categories: ["Development", "Design"],
    liveUrl: "https://jokejive.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#EFEFF4]",
  },

  {
    slug: "sound-wizard",
    title: "Sound Wizard",
    coverImage:
      "https://amandubey.onrender.com/static/media/soundWizard.503dbd0c0d741426873e.png",
    year: 2023, // Guessed from date
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "An accessibility-focused React application that leverages browser APIs for speech recognition and screen reading.",
    overview:
      "Sound Wizard is an exploration into web accessibility. The project integrates the Web Speech API to provide voice command functionality and speech synthesis, making the web experience navigable for users with visual impairments or those who prefer voice interaction.",
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
    categories: ["Development", "Other"],
    liveUrl: "https://soundwizard.onrender.com/",
    isFeatured: false,
    bgColor: "bg-purple-100",
  },
  {
    slug: "react-dashboard-demo",
    title: "React Data Dashboard",
    coverImage:
      "https://amandubey.onrender.com/static/media/Dashboard.df43871c6ede9cef7aed.png",
    year: 2023,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A client-side dashboard application built with React and Bootstrap to display and manage data from a live API.",
    overview:
      "This project demonstrates the fundamentals of client-side data fetching, state management, and component-based UI construction. It fetches data from a dummy JSON API and renders it in a clean, responsive layout using Bootstrap components.",
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
    categories: ["Development"],
    liveUrl: "https://reactdashboard-ddew.onrender.com/",
    isFeatured: false,
    bgColor: "bg-gray-200",
  },

  // --- Your New Projects - Now Fully Formatted ---
  {
    slug: "bake-n-cake",
    title: "Bake-N-Cake",
    coverImage:
      "https://amandubey.onrender.com/static/media/bake-n-cake%20thumbnail.5143d44bb01d3d18292d.png",
    year: 2024,
    role: "Full-Stack Developer (MERN)",
    client: "Personal Project",
    description:
      "A full-featured e-commerce platform for a local bakery, including cart management and payments.",
    overview:
      "This MERN stack application provides a seamless shopping experience for customers. It includes secure user authentication with JWT, state management with Context API, and a complete checkout process powered by a payment gateway.",
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
    categories: ["Development"],
    liveUrl: "https://cake-n-bake2.onrender.com/",
    isFeatured: false,
    bgColor: "bg-pink-100",
  },
  {
    slug: "portfolio-v2",
    title: "Personal Portfolio (v2)",
    coverImage:
      "https://amandubey.onrender.com/static/media/AmanV2.1f4cd25de7ed1bf502e3.png",
    year: 2022,
    role: "Frontend Developer",
    client: "Personal Project",
    description:
      "A previous iteration of my personal portfolio, built with React and Bootstrap.",
    overview:
      "This project focused on creating a clean and responsive showcase of my work using client-side routing and modern frontend libraries. It demonstrates strong fundamentals in component-based architecture and styling.",
    techStack: ["React", "Bootstrap", "NPMs"],
    categories: ["Development", "Design"],
    liveUrl: "https://amandubeyprofile.netlify.app/",
    isFeatured: false,
    bgColor: "bg-gray-200",
  },
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
      "This project was a crucial step in my learning journey, built from the ground up using only HTML, CSS, and JavaScript. It showcases a solid understanding of core web principles and manual DOM manipulation.",
    techStack: ["HTML", "CSS", "JavaScript"],
    categories: ["Development"],
    liveUrl: "https://amandubey211.github.io/Aman211-portfolio/about.html",
    isFeatured: false,
    bgColor: "bg-blue-100",
  },
];

// This function remains the same and is correct.
export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
