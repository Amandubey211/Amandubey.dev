export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2 text-gray-600">
        This is the about page, rendered statically via App Router.
      </p>
    </main>
  );
}
export const metadata = {
  title: "About | My Next.js Journey",
  description: "Learn more about this project",
};
