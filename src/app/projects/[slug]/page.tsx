/* app/projects/[slug]/page.tsx
   ───────────────────────────────────────────────────────────── */
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { allProjects } from "@/lib/projectdata";

/* ── route config ── */
export const dynamic = "error";
export const revalidate = 0; // never re-validate (fully static)

/* ── shared types ── */
type StaticParams = { slug: string };
type PageProps = { params: Promise<StaticParams> }; // ← key: Promise!

/* ── static paths ── */
export async function generateStaticParams(): Promise<StaticParams[]> {
  return allProjects.map(({ slug }) => ({ slug }));
}

/* ── metadata ── */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; // await once
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.cover, width: 1200, height: 630 }],
    },
  };
}

/* ── page ── */
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl pb-16 lg:pb-24">
      <header className="mb-12 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground">
          {project.year} · {project.role}
        </p>
        <Image
          src={project.cover}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={720}
          priority
          className="rounded-lg border shadow-md"
        />
      </header>

      <section className="prose prose-invert">
        <p>{project.description}</p>
      </section>

      <footer className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Tech stack</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="whitespace-nowrap rounded border bg-muted/20 px-2 py-1"
            >
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}
