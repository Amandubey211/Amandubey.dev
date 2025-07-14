"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Sparkles } from "lucide-react";
import { allProjects } from "@/lib/projectdata";
import type { Project } from "@/lib/projectdata";

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Development" | "Design" | "Other"
  >("All");

  // Memoize the filtering logic so it only runs when the filter changes
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      // Show featured projects first, then the rest
      return allProjects.sort(
        (a, b) => (b.isFeatured ? 1 : -1) - (a.isFeatured ? -1 : 1)
      );
    }
    const filtered = allProjects.filter((p) =>
      p.categories.includes(activeFilter)
    );
    return filtered.sort(
      (a, b) => (b.isFeatured ? 1 : -1) - (a.isFeatured ? -1 : 1)
    );
  }, [activeFilter]);

  // Split projects into two columns for the staggered layout
  const columns = useMemo(() => {
    const col1: Project[] = [];
    const col2: Project[] = [];
    filteredProjects.forEach((project, index) => {
      if (index % 2 === 0) {
        col1.push(project);
      } else {
        col2.push(project);
      }
    });
    return { col1, col2 };
  }, [filteredProjects]);

  return (
    <main className="min-h-screen  text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm">
              <Sparkles size={18} />
              <span>MY WORK</span>
            </h2>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tighter">
              Creating next level digital products
            </h1>
          </div>

          <nav className="flex-shrink-0">
            <div className="flex items-center gap-2 rounded-full bg-black/20 border border-white/10 p-1">
              {(["All", "Development", "Design", "Other"] as const).map(
                (label) => (
                  <button
                    key={label}
                    onClick={() => setActiveFilter(label)}
                    className={clsx(
                      "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
                      activeFilter === label
                        ? "bg-[#222222] text-white"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          </nav>
        </header>

        {/* Staggered grid layout */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-y-16">
            {columns.col1.map((p, index) => (
              <ProjectCard key={p.slug} p={p} index={index * 2} />
            ))}
          </div>

          {/* Column 2 - with a top margin on desktop to create the stagger effect */}
          <div className="flex flex-col gap-y-16 md:mt-16">
            {columns.col2.map((p, index) => (
              <ProjectCard key={p.slug} p={p} index={index * 2 + 1} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const primaryCategory = p.categories[0];

  return (
    // --- KEY CHANGE: Added `relative` to the Link to act as a positioning container for the glow effect ---
    <Link
      href={`/projects/${p.slug}`}
      className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/80 rounded-lg"
      aria-label={`View details for ${p.title}`}
    >
      {/* --- KEY CHANGE: The Glow Element --- */}
      {/* This div sits behind the card content. It's blurred, initially invisible, and fades in on group-hover */}
      <div
        className="absolute -inset-2 rounded-3xl bg-lime-500/20 blur-2xl opacity-0 transition-all duration-300 group-hover:opacity-70"
        aria-hidden="true"
      />

      {/* --- Card Content --- */}
      {/* This 'relative' and 'z-10' ensures the content stays on top of the glow effect */}
      <div className="relative z-10">
        <div
          className={clsx(
            "overflow-hidden rounded-3xl transition-shadow duration-300 group-hover:shadow-2xl flex items-center justify-center p-6 md:p-8",
            p.bgColor
          )}
        >
          <Image
            src={p.coverImage}
            alt={`Preview of ${p.title}`}
            width={900}
            height={600}
            priority={index < 4}
            className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-6 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold leading-tight text-white">
              {p.title}
            </h3>
            <p className="mt-1 text-md text-gray-400">{primaryCategory}</p>
          </div>
          <span className="text-md text-gray-400 flex-shrink-0">{p.year}</span>
        </div>
      </div>
    </Link>
  );
}
