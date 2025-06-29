import { fetchDummyPosts, DummyPost } from "@/lib/dummyPosts";

export const metadata = { title: "Blog | Aman Dubey" };
export const revalidate = 60; // ISR every 60 s
export const dynamic = "force-static"; // make it explicit

function truncate(str: string, n = 140) {
  return str.length > n ? str.slice(0, n) + "…" : str;
}

export default async function BlogPage() {
  const posts = await fetchDummyPosts();

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8"> Blog (DummyJSON)</h1>

      {posts.length === 0 && (
        <p className="text-gray-500">No posts yet – check back soon!</p>
      )}

      <ul className="space-y-6">
        {posts.map((p: DummyPost, i) => (
          <li
            key={p.id}
            className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {i + 1} {p.title}
            </h2>
            <p className="mb-4 text-gray-700">{truncate(p.body)}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="text-sm text-gray-600 flex gap-6">
              <span>👍 {p.reactions.likes}</span>
              <span>👎 {p.reactions.dislikes}</span>
              <span>👁️ {p.views}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
