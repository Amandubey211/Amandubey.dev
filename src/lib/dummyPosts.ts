// lib/dummyPosts.ts
export interface DummyPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

export interface FetchPostsResponse {
  posts: DummyPost[];
  total: number;
  skip: number;
  limit: number;
}

const API_URL = "https://dummyjson.com/posts?limit=10";

export async function fetchDummyPosts(): Promise<DummyPost[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 }, // ← ISR hint
    cache: "force-cache",
  });

  if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

  const json = (await res.json()) as FetchPostsResponse;
  return json.posts;
}
