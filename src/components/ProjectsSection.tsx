/* eslint-disable react/no-unescaped-entities */
"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import clsx from "clsx";
import { allProjects } from "@/lib/projectdata";
import { ShinyButton } from "./ShinyButton";
import type { Project } from "@/lib/projectdata";

export function ProjectsSection() {
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  // --- KEY CHANGE: Split featured projects into two columns for the staggered layout ---
  const columns = useMemo(() => {
    const col1: Project[] = [];
    const col2: Project[] = [];
    featuredProjects.forEach((project, index) => {
      if (index % 2 === 0) {
        col1.push(project); // Even index projects go to column 1
      } else {
        col2.push(project); // Odd index projects go to column 2
      }
    });
    return { col1, col2 };
  }, [featuredProjects]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 md:px-8 py-28">
      {/* Header section remains the same, it's already well-animated and styled */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 flex items-center gap-2 text-lime-400 font-bold tracking-widest"
      >
        <Sparkles size={20} strokeWidth={2} /> MY WORK
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-4xl md:text-5xl font-bold leading-tight"
      >
        Selected Projects
      </motion.h3>
      <p className="mb-14 max-w-lg text-gray-400 text-lg">
        Here's a curated selection showcasing my expertise in building
        high-quality, professional-grade applications.
      </p>

      {/* --- KEY CHANGE: The new staggered grid layout --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-y-16">
          {columns.col1.map((p, index) => (
            <FeaturedProjectCard key={p.slug} project={p} index={index * 2} />
          ))}
        </div>

        {/* Column 2 - with a top margin on desktop to create the stagger effect */}
        <div className="flex flex-col gap-y-16 md:mt-20">
          {columns.col2.map((p, index) => (
            <FeaturedProjectCard
              key={p.slug}
              project={p}
              index={index * 2 + 1}
            />
          ))}
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <Link href="/projects">
          <ShinyButton
            initialText="View All Projects"
            hoverText="View All Projects"
          />
        </Link>
      </div>
    </section>
  );
}

// --- A dedicated, enhanced card component for this section ---
function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="h-full">
      {" "}
      {/* Wrapper to ensure card takes full height if needed */}
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400/80 rounded-lg"
        aria-label={`View details for ${project.title}`}
      >
        {/* The Glow Effect Element */}
        <div
          className="absolute -inset-2.5 rounded-3xl bg-lime-500/20 blur-2xl opacity-0 transition-all duration-300 group-hover:opacity-60"
          aria-hidden="true"
        />

        {/* The Card Content */}
        <div className="relative z-10 flex h-full flex-col">
          <div
            className={clsx(
              "flex flex-1 items-center justify-center overflow-hidden rounded-3xl p-6 md:p-8 transition-shadow duration-300 group-hover:shadow-2xl",
              project.bgColor
            )}
          >
            <Image
              src={project.coverImage}
              alt={`Cover image for ${project.title}`}
              width={900}
              height={600}
              priority={index < 2} // Prioritize only the first two featured images
              className="h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-5">
            <h4 className="text-xl font-semibold text-white">
              {project.title}
            </h4>
            <p className="mt-1 text-gray-400">{project.role}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
