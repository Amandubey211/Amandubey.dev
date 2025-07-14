// lib/projectdata.ts
import { StaticImageData } from "next/image";
import FormaFlow from "@/assets/Projects/FormaFlow.png";
import PortfolioOR from "@/assets/Projects/PortfolioOR.png";

export type Project = {
  slug: string;
  title: string;
  coverImage: string | StaticImageData;
  year: number;
  role: string;
  categories: ("Development" | "Design" | "Other")[];
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  bgColor: string;
};

export const allProjects: Project[] = [
  {
    slug: "formaflow-builder",
    title: "FormaFlow - The Intuitive Form Builder",
    coverImage: FormaFlow,
    year: 2025,
    role: "Lead Frontend Architect & Developer & Design",
    description:
      "A complete, schema-driven form builder application designed with a 'user-experience first' philosophy. It features a high-fidelity drag-and-drop builder for creating complex layouts, an inline editor with real-time preview and auto-saving, and a dynamic form renderer capable of handling nested conditional logic. This project represents a deep dive into modern frontend architecture, state management with Context API, and creating polished, user-centric interfaces with extensive testing via Vitest.",
    techStack: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "@dnd-kit",
      "React Hook Form",
      "Vitest",
      "Context API",
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
      "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png", // Remote URL
    year: 2024,
    role: "Full-Stack Development (MERN)",
    categories: ["Development", "Design"],
    description:
      "A comprehensive MERN stack dashboard engineered for professional use. It features a secure, token-based authentication system (JWT), real-time data visualization charts, and dynamic user profile scoring to drive engagement. The backend is built on Node.js and Express, connected to a MongoDB database, providing a robust and scalable solution for data management and analytics.",
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
    liveUrl: "https://pro-dash.onrender.com/",
    isFeatured: true,
    bgColor: "bg-[#F6F0C6]",
  },
  {
    slug: "netflix-gpt",
    title: "NetflixGPT",
    categories: ["Development", "Design"],
    coverImage:
      "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png", // Remote URL
    year: 2024,
    role: "Frontend Development & AI Integration",
    description:
      "A feature-rich Netflix clone with a powerful twist: AI-driven movie recommendations powered by OpenAI's GPT models. This project showcases seamless API integration, global state management with Redux Toolkit, and a responsive, mobile-first design built with Tailwind CSS. Firebase handles user authentication, ensuring a secure and personalized experience.",
    techStack: ["React", "Redux", "Tailwind CSS", "Firebase", "OpenAI API"],
    liveUrl: "https://netflixgpt-2510.onrender.com",
    isFeatured: true,
    bgColor: "bg-[#E9E9E9]",
  },
  {
    slug: "brain-games",
    title: "Brain-Games Quiz App",
    coverImage:
      "https://amandubey.onrender.com/static/media/BrainGames.039ee8d0c5b188afc22a.png", // Remote URL
    year: 2023,
    categories: ["Development", "Design"],
    role: "Frontend Development",
    description:
      "An interactive and highly performant quiz application designed to challenge users' knowledge. Built entirely on the frontend with React, it uses the Context API for efficient state management across components and Chakra UI for a polished, accessible, and responsive user interface. The app features a live scoreboard to foster competition.",
    techStack: ["React", "Context API", "Chakra UI"],
    liveUrl: "https://brain-games-0qj6.onrender.com/",
    isFeatured: true,
    bgColor: "bg-[#EFEFF4]",
  },
  {
    slug: "eshop",
    title: "E-SHOP",
    coverImage:
      "https://amandubey.onrender.com/static/media/E-shop.a5e8d7623156a30a153b.png", // Remote URL
    year: 2024,
    categories: ["Development", "Design"],
    role: "Frontend Development",
    description:
      "A modern e-commerce platform built with React and Redux for robust state management. It features a dynamic product catalog, an intuitive shopping cart experience, and secure user authentication powered by Firebase. The project was bundled with Parcel for fast, zero-config builds and styled with Bootstrap for a clean, responsive layout.",
    techStack: ["React", "Redux", "Bootstrap", "Firebase", "Parcel"],
    liveUrl: "https://ecommerce-xn2c.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#FAD6EB]",
  },
  {
    slug: "ai-generator",
    title: "AI Image & Video Studio",
    coverImage:
      "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png", // Remote URL
    year: 2023,
    categories: ["Development", "Design"],
    role: "Frontend Development & AI Integration",
    description:
      "An AI-powered content generation tool that leverages multiple OpenAI APIs to create unique images and video clips from user prompts. The interface, built with Chakra UI, provides a seamless and intuitive experience for users to bring their creative ideas to life. This project demonstrates handling complex API responses and managing asynchronous operations in React.",
    techStack: ["React", "Chakra UI", "OpenAI API"],
    liveUrl: "https://aistudio.onrender.com/",
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
  },
  {
    slug: "chat-app",
    title: "Butterfly Chat App",
    categories: ["Development", "Design"],
    coverImage:
      "https://amandubey.onrender.com/static/media/ChatApp.8e9455f7587881b29cfc.png", // Remote URL
    year: 2023,
    role: "Full-Stack Development (MERN)",
    description:
      "A real-time chat application built on the MERN stack. It uses Socket.io for instant, bi-directional messaging and includes key features like user authentication, online status indicators, and email notifications for new messages via NodeMailer. The frontend is crafted with Chakra UI for a clean and responsive chat experience.",
    techStack: ["MERN", "Socket.io", "NodeMailer", "Chakra UI"],
    liveUrl: "https://butterfly-w0aw.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#E1E5FF]",
  },
  {
    slug: "portfolio-v3",
    title: "Personal Portfolio (v3)",
    categories: ["Development", "Design"],
    coverImage: PortfolioOR, // Using local import
    year: 2023,
    role: "Full-Stack Development & Design",
    description:
      "The third major iteration of my personal portfolio website, designed to be a performant and visually engaging showcase of my skills. Built with a full MERN stack, it allows for dynamic content management. The design focuses on clean typography, smooth animations, and a professional aesthetic to reflect my personal brand.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Chakra UI"],
    liveUrl: "/",
    isFeatured: false,
    bgColor: "bg-[#D6F5E2]",
  },
  {
    slug: "joke-jive",
    title: "Joke-Jive",
    categories: ["Development", "Design"],
    coverImage:
      "https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png", // Remote URL
    year: 2024,
    role: "Frontend Development",
    description:
      "A lighthearted entertainment app that delivers an endless stream of jokes using an infinite scroll mechanism for a seamless browsing experience. The application's state is centrally managed with Redux, and the responsive UI is built with a combination of Tailwind CSS and Chakra UI components, demonstrating proficiency in modern styling techniques.",
    techStack: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Chakra UI",
      "Infinite Scroll",
    ],
    liveUrl: "https://jokejive.onrender.com",
    isFeatured: false,
    bgColor: "bg-[#EFEFF4]",
  },
];
