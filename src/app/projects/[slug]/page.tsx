// app/projects/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { allProjects } from "@/lib/projectdata";
import type { Project } from "@/lib/projectdata";

// This helper function is synchronous, which is correct since Array.find is not async.
function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

// Define the shape of the page props.
type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// --- METADATA GENERATION ---
// KEY CHANGE: De-structure `{ slug }` directly from `params` in the signature.
// This is the officially required pattern.
export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  // Now, use the 'slug' variable directly. The compiler will no longer complain.
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const imageUrl =
    typeof project.coverImage === "string"
      ? project.coverImage
      : project.coverImage.src;

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Aman Dubey`,
      description: project.description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
  };
}

// --- PAGE COMPONENT ---
// KEY CHANGE: Also de-structure `{ slug }` in the page component's signature.
export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  // Use the 'slug' variable directly.
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // The UI logic below is completely unchanged.
  return (
    <main className="min-h-screen bg-[#111111] py-24 text-white">
      <article className="mx-auto max-w-4xl px-4">
        <header className="mb-12">
          <p className="mb-2 font-bold tracking-widest text-lime-400">
            CASE STUDY
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-lg text-gray-400">
            {project.year} · {project.role}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Live Demo <ExternalLink size={16} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Code
              </Link>
            )}
          </div>
        </header>
        <Image
          src={project.coverImage}
          alt={`Showcase of ${project.title}`}
          width={1280}
          height={720}
          priority
          className="mb-16 rounded-2xl border border-white/10 shadow-2xl"
        />
        <div className="prose prose-invert prose-lg max-w-none">
          <h2>About the Project</h2>
          <p>{project.description}</p>
        </div>
        <footer className="mt-16 border-t border-white/10 pt-10">
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Categories</h2>
            <ul className="flex flex-wrap gap-3">
              {project.categories.map((category) => (
                <li
                  key={category}
                  className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray-200"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
          <ul className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </main>
  );
}
