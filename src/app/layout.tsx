// src/app/layout.tsx
import "@fontsource/inter";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import LenisWrapper from "@/components/LenisWrapper";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-100">
        {/* ── animated nav */}
        <NavBar />

        {/* push content below full-height hero so nav doesn't overlap small screens */}
        <main className="pt-28 md:pt-32">
          <LenisWrapper>{children}</LenisWrapper>
        </main>
      </body>
    </html>
  );
}
