// app/blog/page.tsx
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogHome() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
