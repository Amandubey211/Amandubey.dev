// app/projects/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { allProjects, getProjectBySlug } from "@/lib/projectdata"; // Make sure getProjectBySlug is exported

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// --- METADATA GENERATION (Corrected Logic) ---
export async function generateMetadata({
  params,
}: {
  // Tell TypeScript that params is a Promise that will resolve to our object
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // KEY FIX: Await the params object to get the resolved value.
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} | Case Study`,
    description: project.overview,
  };
}

// --- PAGE COMPONENT (Corrected Logic) ---
export default async function ProjectPage({
  params,
}: {
  // Apply the same correct type here
  params: Promise<{ slug: string }>;
}) {
  // KEY FIX: Await the params object here as well.
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // The UI below is correct and unchanged.
  return (
    <div className=" text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- Top Header --- */}
        <header className="flex justify-between items-center mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
          <span className="text-gray-400 font-mono text-lg">
            {project.year}
          </span>
        </header>

        {/* --- Hero Image --- */}
        <section className="mb-12">
          <Image
            src={project.coverImage}
            alt={`Showcase of ${project.title}`}
            width={1920}
            height={1080}
            priority
            className="rounded-lg object-cover w-full h-auto max-h-[500px]"
          />
        </section>

        <article>
          {/* --- Main Info Section --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="w-full text-center bg-white text-black font-semibold py-3 px-6 rounded-full border border-gray-600 hover:bg-gray-200 transition-colors"
                >
                  Check it out
                </Link>
              )}
              <div className="space-y-2">
                <p>
                  <span className="text-gray-400">Roles:</span> {project.role}
                </p>
                <p>
                  <span className="text-gray-400">Client:</span>{" "}
                  {project.client}
                </p>
              </div>
            </div>
          </div>

          {/* --- Tech Stack Pills --- */}
          <div className="flex flex-wrap gap-3 mb-16">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* --- Overview Section --- */}
          <section className="mb-16 prose prose-invert prose-lg max-w-none">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>

          {/* --- Design Screens Section --- */}
          {project.designScreens && project.designScreens.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Design Screens</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.designScreens.map((screen, index) => (
                  <Image
                    key={index}
                    src={screen}
                    alt={`Design screen ${index + 1}`}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* --- Tech Stack List Section --- */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            {/* --- Features Section --- */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Features</h2>
                <ul className="space-y-4 text-gray-300">
                  {project.features.map((feature) => (
                    <li key={feature.title}>
                      <strong className="block text-white">
                        {feature.title}
                      </strong>
                      {feature.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
