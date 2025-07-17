// src/data/concepts.ts

interface Concept {
  id: string;
  title: string;
  description: string;
  content: string; // HTML string or plain text
  tags?: string[];
}

export const conceptsData: Concept[] = [
  {
    id: "nextjs-routing",
    title: "Next.js Routing",
    description:
      "Learn about the App Router, dynamic routes, and route groups.",
    content: `
      <p>Next.js 15 introduces the App Router, built on React Server Components, offering a powerful and flexible way to manage routing.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">File-System Based Routing</h2>
      <p>The App Router uses a file-system based router. Folders define routes, and a <code>page.tsx</code> file within a folder makes it accessible via URL.</p>
      <pre><code class="language-bash">app/dashboard/page.tsx  -> /dashboard</code></pre>
      <h2 class="text-3xl font-bold mt-8 mb-4">Dynamic Segments</h2>
      <p>You can create dynamic routes to handle variable data in URLs, like user IDs or post slugs.</p>
      <pre><code class="language-bash">app/blog/[slug]/page.tsx -> /blog/hello-world</code></pre>
      <p>The <code>slug</code> parameter is available in <code>params</code> prop of your page component.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Catch-all Segments</h2>
      <p>For more flexible dynamic routes that match multiple URL segments, use catch-all segments.</p>
      <pre><code class="language-bash">app/shop/[[...slug]]/page.tsx -> /shop/a/b/c</code></pre>
      <p>This allows you to handle various paths like <code>/shop</code>, <code>/shop/electronics</code>, or <code>/shop/electronics/laptops</code> within a single page component.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Route Groups</h2>
      <p>Route Groups allow you to organize your file system without affecting the URL structure. Use parentheses <code>()</code> to create them.</p>
      <pre><code class="language-bash">app/(marketing)/about/page.tsx -> /about</code></pre>
      <p>This is useful for grouping related routes or creating different layouts for parts of your application.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Loading UI and Streaming</h2>
      <p>Next.js provides a <code>loading.tsx</code> file convention to show an instant loading state for a route segment, improving user experience by streaming parts of the UI.</p>
      <pre><code class="language-bash">app/dashboard/loading.tsx</code></pre>
      <p>This file automatically wraps the page and its children in a React Suspense Boundary.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Error Handling</h2>
      <p>You can define an <code>error.tsx</code> file within a route segment to gracefully handle errors in nested routes. This file automatically wraps the route segment in a React Error Boundary.</p>
      <pre><code class="language-bash">app/dashboard/error.tsx</code></pre>
      <p>It acts as a UI boundary to catch errors from its children and show a fallback UI.</p>
      <p>These features make Next.js routing powerful, scalable, and easy to manage for complex applications.</p>
    `,
    tags: [
      "Next.js",
      "App Router",
      "Routing",
      "Dynamic Routes",
      "Route Groups",
    ],
  },
  {
    id: "server-components",
    title: "React Server Components",
    description: "Understand the benefits and usage of RSCs in Next.js.",
    content: `
      <p>React Server Components (RSCs) are a new paradigm in React that allow you to write components that render on the server, enhancing performance and improving user experience.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">What are Server Components?</h2>
      <p>Unlike traditional React components that render entirely on the client-side (Client Components), Server Components render on the server. They send only the necessary HTML and a minimal JavaScript bundle to the client, reducing initial page load times and improving SEO.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Key Benefits:</h2>
      <ul>
        <li><strong>Reduced Client-Side JavaScript:</strong> Send less JavaScript to the browser, leading to faster page loads and less work for the client.</li>
        <li><strong>Improved Performance:</strong> Data fetching can happen directly on the server, closer to your database, eliminating extra network roundtrips.</li>
        <li><strong>Enhanced SEO:</strong> Search engines can more easily crawl fully rendered HTML pages.</li>
        <li><strong>Access to Server Resources:</strong> Safely perform server-only operations like database queries or file system access directly within components.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">How to use them in Next.js:</h2>
      <p>In the Next.js App Router, components are Server Components by default. This means you don't need a special directive to make a component a Server Component.</p>
      <p>To explicitly mark a component as a Client Component, you use the <code>"use client"</code> directive at the top of the file.</p>
      <pre><code class="language-typescript">
// MyClientComponent.tsx
"use client";

import { useState } from 'react';

export default function MyClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
      </code></pre>
      <h2 class="text-3xl font-bold mt-8 mb-4">When to use Server vs. Client Components:</h2>
      <ul>
        <li><strong>Server Components:</strong> For components that fetch data, access backend resources, or have no interactivity.</li>
        <li><strong>Client Components:</strong> For components that need client-side interactivity, event listeners, state, or browser APIs (e.g., forms, carousels, maps).</li>
      </ul>
      <p>Server Components and Client Components can be interleaved, allowing you to build highly optimized applications by leveraging the strengths of both.</p>
    `,
    tags: ["Next.js", "RSC", "Server-Side Rendering", "Performance"],
  },
  {
    id: "data-fetching",
    title: "Next.js Data Fetching",
    description: "Different strategies for fetching data in Next.js.",
    content: `
      <p>Next.js provides several powerful ways to fetch data, leveraging both server-side and client-side capabilities, to optimize for performance and user experience.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Fetching Data in Server Components</h2>
      <p>In the App Router, data fetching primarily happens in Server Components. This is the recommended approach for most data fetching in Next.js 15.</p>
      <pre><code class="language-typescript">
// app/dashboard/page.tsx (Server Component by default)
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function DashboardPage() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
      </code></pre>
      <p>When fetching in Server Components, you can directly use <code>await</code> within your components or functions that they call. Fetch requests are automatically memoized, so if the same data is requested multiple times within the same render pass, it will only be fetched once.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Revalidating Data</h2>
      <p>Next.js offers flexible data caching and revalidation strategies:</p>
      <ul>
        <li><strong>Time-based Revalidation:</strong> Use the <code>next.revalidate</code> option with <code>fetch</code> to revalidate data after a certain period.</li>
        <pre><code class="language-typescript">
fetch('https://...', { next: { revalidate: 60 } }) // Revalidate every 60 seconds
        </code></pre>
        <li><strong>On-demand Revalidation:</strong> Use <code>revalidatePath</code> or <code>revalidateTag</code> from <code>next/cache</code> to purge cached data on demand, typically triggered by a webhook or API call.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">Fetching Data in Client Components</h2>
      <p>While Server Components are preferred for data fetching, Client Components can still fetch data, especially for user-specific data or data that needs to be updated frequently based on user interaction.</p>
      <p>Common libraries like SWR or React Query are excellent for managing data fetching, caching, and revalidation in Client Components.</p>
      <pre><code class="language-typescript">
// MyClientComponent.tsx
"use client";
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MyClientComponent() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load user</div>;

  return <div>Hello, {data.name}!</div>;
}
      </code></pre>
      <h2 class="text-3xl font-bold mt-8 mb-4">Server Actions (New in Next.js 15)</h2>
      <p>Server Actions allow you to run server-side code directly from your Client Components. They are ideal for mutations and form submissions.</p>
      <pre><code class="language-typescript">
// app/page.tsx
import { revalidatePath } from 'next/cache';

async function createTodo(formData: FormData) {
  "use server"; // Mark this function as a Server Action
  const todo = formData.get('todo');
  // ... save todo to database
  revalidatePath('/todos'); // Revalidate the todos page
}

export default function Page() {
  return (
    <form action={createTodo}>
      <input type="text" name="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
      </code></pre>
      <p>Server Actions greatly simplify the process of handling data mutations from the client, reducing the need for explicit API routes in many cases.</p>
    `,
    tags: [
      "Next.js",
      "Data Fetching",
      "Server Components",
      "Client Components",
      "SWR",
      "React Query",
      "Server Actions",
    ],
  },
  {
    id: "api-routes",
    title: "API Routes",
    description: "Creating API endpoints for your Next.js application.",
    content: `
      <p>Next.js allows you to create API endpoints as part of your application, which can be useful for building a full-stack application within a single Next.js project or for handling form submissions and data mutations from client-side components.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">File-System Based API Routes</h2>
      <p>API Routes are defined inside the <code>app/api</code> directory and map to a <code>/api</code> path. They are server-side only and will not be included in the client-side bundle.</p>
      <pre><code class="language-typescript">
// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from API!' });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ received: data, status: 'success' });
}
      </code></pre>
      <p>In the App Router, API Routes use the Web Fetch API's Request and Response objects. Each HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS) can have its own handler function exported from <code>route.ts</code> or <code>route.js</code>.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Dynamic API Routes</h2>
      <p>Just like pages, API routes can also be dynamic using square brackets <code>[]</code> or catch-all segments <code>[[...slug]]</code>.</p>
      <pre><code class="language-typescript">
// app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  // Fetch user from database using id
  return NextResponse.json({ userId: id, name: 'John Doe' });
}
      </code></pre>
      <p>The dynamic segment values are available in the <code>params</code> object passed to the handler function.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">Use Cases:</h2>
      <ul>
        <li>Handling form submissions (though Server Actions are often preferred now).</li>
        <li>Creating backend services for your frontend.</li>
        <li>Integrating with third-party APIs from the server-side.</li>
        <li>Implementing authentication strategies.</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">Comparison with Server Actions:</h2>
      <p>While API Routes are excellent for creating explicit API endpoints that can be consumed by any client (including non-Next.js applications), Server Actions are more integrated with React's component model and are ideal for direct data mutations from Client Components, often reducing the need for explicit API routes for form submissions.</p>
    `,
    tags: ["Next.js", "API", "Backend", "Serverless", "REST"],
  },
  {
    id: "middleware",
    title: "Next.js Middleware",
    description: "Global logic before requests are completed.",
    content: `
      <p>Next.js Middleware allows you to run code before a request is completed. It's ideal for authentication, A/B testing, internationalization, and more.</p>
      <h2 class="text-3xl font-bold mt-8 mb-4">How it Works</h2>
      <p>Middleware lives in a <code>middleware.ts</code> (or <code>.js</code>) file at the root of your project (or within <code>src</code>). It executes for every request to your application.</p>
      <pre><code class="language-typescript">
// middleware.ts
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Redirect unauthenticated users
  const isAuthenticated = request.cookies.get('auth_token');
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Continue to the next middleware or the page
  return NextResponse.next();
}

// Define which paths the middleware applies to
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
      </code></pre>
      <h2 class="text-3xl font-bold mt-8 mb-4">Key Features:</h2>
      <ul>
        <li><strong>Request Interception:</strong> Intercepts requests before they reach the page or API route.</li>
        <li><strong>Rewriting:</strong> Rewrite a request to a different path.</li>
        <li><strong>Redirecting:</strong> Redirect users to different URLs.</li>
        <li><strong>Modifying Headers/Cookies:</strong> Set or modify request/response headers and cookies.</li>
        <li><strong>Conditional Logic:</strong> Apply logic based on request properties (path, headers, cookies, etc.).</li>
      </ul>
      <h2 class="text-3xl font-bold mt-8 mb-4">Matcher Config:</h2>
      <p>The <code>config.matcher</code> property allows you to define paths for which the middleware should be invoked. This helps optimize performance by only running middleware where needed.</p>
      <p>Middleware is powerful for implementing cross-cutting concerns that apply to multiple parts of your application without duplicating code in individual pages or API routes.</p>
    `,
    tags: [
      "Next.js",
      "Middleware",
      "Authentication",
      "Authorization",
      "Routing",
    ],
  },
];
