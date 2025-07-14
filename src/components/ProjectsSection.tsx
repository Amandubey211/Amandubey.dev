/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { allProjects } from "@/lib/projectdata";
import { ShinyButton } from "./ShinyButton";

export function ProjectsSection() {
  const featuredProjects = allProjects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 md:px-8 py-28">
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
        Here's a curated selection showcasing my expertise and the results I've
        achieved.
      </p>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <motion.article
            key={project.slug}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="flex flex-col"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="block overflow-hidden rounded-3xl shadow-xl bg-gray-900/50 border border-white/10"
            >
              <Image
                src={project.coverImage}
                alt={`Cover image for ${project.title}`}
                width={900}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </Link>
            <div className="mt-5">
              <h4 className="text-xl font-semibold text-white">
                {project.title}
              </h4>
              <p className="text-gray-400 mt-1">{project.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <Link href="/projects" className="rounded-full  ">
          <ShinyButton
            initialText="View All Projects"
            hoverText="View All Projects"
          />
        </Link>
      </div>
    </section>
  );
}
