/* app/projects/page.tsx
   ------------------------------------------------------------------ */

"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { allProjects } from "@/lib/projectdata";
import type { Project } from "@/lib/projectdata";

/* ───────────── helpers ───────────── */

/** We’ll treat the `role` string as a simple category for now.
 *  Feel free to add an explicit `category` field in your data. */
function getCategory(p: Project) {
  if (/design/i.test(p.role)) return "Design";
  if (/dev/i.test(p.role)) return "Development";
  return "Other";
}

/** Pastel palette for the card backgrounds */
const pastel = [
  "bg-[#fdf4dc]",
  "bg-[#f8d7e0]",
  "bg-[#d6f5e2]",
  "bg-[#e1e5ff]",
  "bg-[#efeef4]",
] as const;

/* ───────────── component ───────────── */

export default function ProjectsGallery() {
  /* ----- filter state ----- */
  const [active, setActive] = useState<"All" | "Development" | "Design">("All");

  const filtered = useMemo(() => {
    if (active === "All") return allProjects;
    return allProjects.filter((p) => getCategory(p) === active);
  }, [active]);

  /* ----- render ----- */
  return (
    <main className="px-4 pb-24 pt-16 sm:px-8">
      {/* hero ----------------------------------------------------------- */}
      <header className="mx-auto mb-12 max-w-6xl">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
          Creating next level digital products
        </h1>

        {/* filter pills */}
        <nav className="mt-10 flex gap-6">
          {(["All", "Development", "Design"] as const).map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={clsx(
                "rounded-full px-7 py-2 text-sm font-medium transition",
                active === label
                  ? "bg-[#2b2b2b] text-white"
                  : "text-muted-foreground hover:text-white/80"
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* grid ----------------------------------------------------------- */}
      <section className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} p={p} color={pastel[i % pastel.length]} />
        ))}
      </section>
    </main>
  );
}

/* ───────────── sub-component ───────────── */

function ProjectCard({
  p,
  color,
}: {
  p: Project;
  color: (typeof pastel)[number];
}) {
  const category = getCategory(p);

  return (
    <a
      href={`/projects/${p.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {/* image wrapper */}
      <div
        className={clsx(
          color,
          "relative overflow-hidden rounded-[28px] shadow-[0_12px_25px_-6px_rgba(0,0,0,0.35)]"
        )}
      >
        <Image
          src={p.cover}
          alt={`Preview of ${p.title}`}
          width={900}
          height={600}
          priority
          className="transition duration-300 group-hover:scale-[1.04]"
        />
      </div>

      {/* caption */}
      <div className="mt-6 flex items-start justify-between">
        <div>
          <p className="text-lg font-medium leading-tight">{p.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{category}</p>
        </div>
        <span className="text-sm text-muted-foreground">{p.year}</span>
      </div>
    </a>
  );
}
