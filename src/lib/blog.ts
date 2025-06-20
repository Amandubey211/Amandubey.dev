// lib/blog.ts
export const blogPosts = [
  {
    slug: "getting-started",
    title: "Getting Started with Next.js",
    content: "This is your first blog post. Welcome!",
  },
  {
    slug: "dynamic-routing",
    title: "Understanding Dynamic Routing",
    content: "Let’s explore how dynamic routes work in Next.js.",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((post) => post.slug);
}
