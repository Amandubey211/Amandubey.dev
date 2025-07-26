// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";
// import { Sparkles, Briefcase, User } from "lucide-react";
// import { allProjects } from "@/lib/projectdata";
// import type { Project } from "@/lib/projectdata";

// // const metadata = {
// //   title: "Aman Dubey | Projects Section",
// // };

// export default function ProjectsGallery() {
//   const [activeFilter, setActiveFilter] = useState<
//     "All" | "Development" | "Design" | "Other"
//   >("All");

//   const filteredProjects = useMemo(() => {
//     if (activeFilter === "All") {
//       return allProjects;
//     }
//     return allProjects.filter((p) => p.categories.includes(activeFilter));
//   }, [activeFilter]);

//   return (
//     <main className="min-h-screen text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-8 py-14">
//         {/* Header is unchanged */}
//         <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
//           <div className="flex flex-col gap-2">
//             <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm">
//               <Sparkles size={18} />
//               <span>MY WORK</span>
//             </h2>
//             <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter">
//               Creating next level digital products
//             </h1>
//           </div>
//           <nav className="flex-shrink-0">
//             <div className="flex items-center gap-2 rounded-full bg-black/20 border border-white/10 p-1">
//               {(["All", "Development", "Design", "Other"] as const).map(
//                 (label) => (
//                   <button
//                     key={label}
//                     onClick={() => setActiveFilter(label)}
//                     className={clsx(
//                       "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
//                       activeFilter === label
//                         ? "bg-[#222222] text-white"
//                         : "text-gray-400 hover:text-white"
//                     )}
//                   >
//                     {label}
//                   </button>
//                 )
//               )}
//             </div>
//           </nav>
//         </header>

//         {/* Staggered grid logic is unchanged and correct */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
//           {filteredProjects.map((p, index) => (
//             <div key={p.slug} className={clsx(index % 2 !== 0 && "md:mt-16")}>
//               <ProjectCard p={p} index={index} />
//             </div>
//           ))}
//         </section>
//       </div>
//     </main>
//   );
// }

// // All changes are contained within this component for the badge.
// function ProjectCard({ p, index }: { p: Project; index: number }) {
//   const primaryCategory = p.categories[0];

//   return (
//     <Link
//       href={`/projects/${p.slug}`}
//       className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/80 rounded-lg"
//       aria-label={`View details for ${p.title}`}
//     >
//       <div
//         className="absolute -inset-2 rounded-3xl bg-lime-500/20 blur-2xl opacity-0 transition-all duration-300 group-hover:opacity-70"
//         aria-hidden="true"
//       />

//       <div className="relative z-10">
//         <div
//           className={clsx(
//             "relative overflow-hidden rounded-3xl transition-shadow duration-300 group-hover:shadow-2xl flex items-center justify-center p-6 md:p-8",
//             p.bgColor
//           )}
//         >
//           {/* --- KEY CHANGE: The New Universal Badge --- */}
//           <div
//             className={clsx(
//               "absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs shadow-lg",
//               // Universal Base for Readability:
//               // Stronger background, stronger blur, and an inner ring for edge definition.
//               "bg-black/50 backdrop-blur-lg ring-1 ring-inset ring-white/15",
//               // Themed Text Color (now has enough contrast to work anywhere)
//               p.projectType === "Professional"
//                 ? "text-lime-300"
//                 : "text-sky-300"
//             )}
//           >
//             {p.projectType === "Professional" ? (
//               <Briefcase size={14} />
//             ) : (
//               <User size={14} />
//             )}
//             <span className="font-bold uppercase tracking-wider">
//               {p.projectType}
//             </span>
//           </div>

//           <Image
//             src={p.coverImage}
//             alt={`Preview of ${p.title}`}
//             width={900}
//             height={600}
//             priority={index < 4}
//             className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
//           />
//         </div>

//         <div className="mt-6 flex items-start justify-between gap-4">
//           <div>
//             <h3 className="text-xl font-bold leading-tight text-white">
//               {p.title}
//             </h3>
//             <p className="mt-1 text-md text-gray-400">{primaryCategory}</p>
//           </div>
//           <div className="text-right flex-shrink-0">
//             <span className="text-md text-gray-400">{p.year}</span>
//             <p className="text-xs text-gray-500 mt-1">{p.duration}</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// app/projects/page.tsx
import ProjectsGallery from "./ProjectsGallery";

export const metadata = {
  title: "Projects | Aman Dubey",
  description:
    "Explore Aman Dubey's portfolio of development and design projects",
};

export default function ProjectsPage() {
  return <ProjectsGallery />;
}
