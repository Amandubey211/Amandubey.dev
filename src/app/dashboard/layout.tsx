export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-6 border-2 border-blue-200 rounded-md">
      <h2 className="text-xl font-semibold mb-4">📊 Dashboard Layout</h2>
      {children}
    </section>
  );
}
