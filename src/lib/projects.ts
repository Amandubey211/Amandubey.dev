// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  img: string; // public/… path or remote URL
  year: number;
  role: string; // “Development”, “Design”, …
  bg: string; // Tailwind colour class for the card backdrop
};

export const projects: Project[] = [
  {
    slug: "aora",
    title: "Aora",
    img: "https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png", // dummy tech image
    year: 2024,
    role: "Development",
    bg: "bg-[#F6F0C6]", // pale-yellow
  },
  {
    slug: "editor",
    title: "Code Screenshot",
    img: "https://amandubey.onrender.com/static/media/BrainGames.039ee8d0c5b188afc22a.png",
    year: 2024,
    role: "Development & Design",
    bg: "bg-[#FAD6EB]", // pink
  },
  {
    slug: "iphone",
    title: "iPhone 15 Pro",
    img: "https://amandubey.onrender.com/static/media/NetFlixGPT.dfa9f85ae6b9312a922d.png", // dummy tech image

    year: 2024,
    role: "Development & Design",
    bg: "bg-[#E9E9E9]", // light-grey
  },

  {
    slug: "iphon11e",
    title: "iPhone 15 Pro",
    img: "https://amandubey.onrender.com/static/media/AiStudio.2b6e25112e2c67f4ba3b.png",
    year: 2024,
    role: "Development & Design",
    bg: "bg-[#E9E9E9]", // light-grey
  },
//   https://amandubey.onrender.com/static/media/JokeJive.283d98a5e5dd1d2925c3.png
];
