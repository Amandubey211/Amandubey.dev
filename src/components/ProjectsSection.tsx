/* eslint react/no-unescaped-entities: "error" */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  { slug: "aora", title: "Aora", img: "/projects/aora.jpg", year: 2024 },
  {
    slug: "editor",
    title: "Ochi Design",
    img: "/projects/ochi.jpg",
    year: 2024,
  },
  {
    slug: "phone",
    title: "iPhone 15 Pro",
    img: "/projects/iphone.jpg",
    year: 2024,
  },
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-8 py-32">
      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 text-lime-400 tracking-wider mb-6"
      >
        ✨ MY WORK
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Selected Projects
      </motion.h3>

      <p className="text-gray-400 mb-14 max-w-lg">
        Here&nbsp;<span className="sr-only">is</span>&apos;s&nbsp;a curated
        selection showcasing my expertise and the achieved results.
      </p>

      {/* grid */}
      <div className="grid md:grid-cols-2 gap-14">
        {projects.map((p) => (
          <motion.div
            key={p.slug}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="space-y-4"
          >
            <Link
              href={`/projects/${p.slug}`}
              className="block rounded-3xl overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={900}
                height={600}
                className="object-cover w-full h-auto scale-[1.02] hover:scale-100 transition-transform duration-700"
              />
            </Link>
            <h4 className="text-xl font-semibold">{p.title}</h4>
            <p className="text-gray-500">Development&nbsp;&amp;&nbsp;Design</p>
            <span className="text-gray-500 text-sm">{p.year}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-white/40 hover:border-white px-8 py-3 transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
