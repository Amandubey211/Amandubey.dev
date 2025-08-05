// app/layout.tsx

import "./globals.css";
// Make sure you import your font from next/font here if you did that change
import { Inter } from "next/font/google"; 
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClientLayoutContent } from "./ClientLayoutContent";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {/* ClientLayoutContent is now the single source of truth for the layout */}
        <ClientLayoutContent>{children}</ClientLayoutContent>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}