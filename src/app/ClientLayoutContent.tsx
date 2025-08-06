"use client";

import { usePathname } from "next/navigation";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";
import { NavBar } from "@/components/NavBar";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { CursorProvider } from "@/contexts/CursorContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingActionButtons } from "@/components/ui/FloatingActionButtons";

export function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <CursorProvider>
      <CustomCursor />
      <LenisWrapper>
        <SkipToContent />
        <NavBar />
        <main id="main-content" className="pt-28 md:pt-32">
          {children}
        </main>
        {!isContactPage && <CallToActionSection />}
        <Footer />
      </LenisWrapper>
      {/* Add the floating buttons here, outside LenisWrapper to prevent scroll interference */}
      <FloatingActionButtons />
    </CursorProvider>
  );
}
