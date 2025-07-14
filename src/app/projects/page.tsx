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
    "All" | "Development" | "Design"
  >("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-16">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center gap-2 text-lime-400 font-bold tracking-widest text-sm">
              <Sparkles size={18} />
              <span>MY WORK</span>
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
              Creating next level digital products
            </h1>
          </div>

          <nav className="flex-shrink-0">
            <div className="flex items-center gap-2 rounded-full bg-black/20 border border-white/10 p-1">
              {(["All", "Development", "Design"] as const).map((label) => (
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
              ))}
            </div>
          </nav>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </section>
      </div>
    </main>
  );
}

function ProjectCard({ p }: { p: Project }) {
  // Display first category for the card
  const primaryCategory = p.categories[0];
  const secondaryCategory = p.categories[1];

  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/80 rounded-lg"
    >
      <div
        className={clsx(
          "overflow-hidden rounded-3xl shadow-xl transition-shadow duration-300 group-hover:shadow-2xl",
          p.bgColor
        )}
      >
        <Image
          src={p.coverImage}
          alt={`Preview of ${p.title}`}
          width={900}
          height={600}
          priority
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <p className="text-xl font-bold leading-tight text-white">
            {p.title}
          </p>
          <div className="flex items-center gap-3">
            {" "}
            <p className="mt-1 text-md text-gray-400">{primaryCategory}</p>
            {secondaryCategory && (
              <p className="mt-1 text-md text-gray-400">{secondaryCategory}</p>
            )}
          </div>
        </div>
        <span className="text-md text-gray-400">{p.year}</span>
      </div>
    </Link>
  );
}
