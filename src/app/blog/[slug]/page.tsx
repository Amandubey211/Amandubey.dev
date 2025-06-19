// app/blog/[slug]/page.tsx
import { getAllSlugs, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title + " | Blog",
    description: post.content.slice(0, 80) + "...",
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) return notFound();

  return (
    <div className="prose prose-lg max-w-2xl mx-auto">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
