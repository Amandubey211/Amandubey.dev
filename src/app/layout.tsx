// app/layout.tsx

import "@fontsource/inter";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { sora } from "@/components/fonts";
import { Analytics } from "@vercel/analytics/next";
import { ClientLayoutContent } from "./ClientLayoutContent";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${sora.className} antialiased`}>
        <NavBar />
        <main className="pt-28 md:pt-32">
          <ClientLayoutContent>{children}</ClientLayoutContent>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
