/* eslint react/no-unescaped-entities: "error" */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 md:px-8 py-32">
      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-2 text-lime-400 tracking-wider"
      >
        ✨ MY WORK
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 text-4xl md:text-5xl font-bold"
      >
        Selected Projects
      </motion.h3>

      <p className="mb-14 max-w-lg text-gray-400">
        Here<span className="sr-only"> is</span>&apos;s&nbsp;a curated selection
        showcasing my expertise and&nbsp;the achieved results.
      </p>

      {/* project grid */}
      <div className="grid gap-14 md:grid-cols-2">
        {projects.map(({ slug, title, img, year, role, bg }) => (
          <motion.article
            key={slug}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="space-y-4"
          >
            <Link
              href={`/projects/${slug}`}
              className={`block overflow-hidden rounded-3xl shadow-xl ${bg}`}
            >
              <Image
                placeholder="blur"
                blurDataURL="https://amandubey.onrender.com/static/media/ProDash.88473c0881bc86b59751.png"
                src={img}
                alt={title}
                width={900}
                height={600}
                className="h-auto w-full scale-[1.02] object-cover transition-transform duration-700 hover:scale-100"
                priority
              />
            </Link>

            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-500">{role}</p>
            <span className="text-sm text-gray-500">{year}</span>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 flex justify-center">
        <Link
          href="/projects"
          className="rounded-full border border-white/40 px-8 py-3 transition hover:border-white"
        >
          View&nbsp;All&nbsp;Projects
        </Link>
      </div>
    </section>
  );
}
