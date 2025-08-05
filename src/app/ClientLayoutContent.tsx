// app/ClientLayoutContent.tsx
"use client";

import { usePathname } from "next/navigation";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import { NavBar } from "@/components/NavBar";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { CursorProvider } from "@/contexts/CursorContext"; // Import CursorProvider
import { CustomCursor } from "@/components/ui/CustomCursor"; // Import CustomCursor
// import { Preloader } from "@/components/ui/Preloader";

export function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <CursorProvider> {/* Wrap everything in the CursorProvider */}
      <CustomCursor /> {/* Render the cursor component */}
      <LenisWrapper>
        {/* <Preloader /> */}
        <SkipToContent />
        <NavBar />
        <main id="main-content" className="pt-28 md:pt-32">
          {children}
        </main>
        {!isContactPage && <CallToActionSection />}
        <Footer />
      </LenisWrapper>
    </CursorProvider>
  );
}