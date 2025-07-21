// app/ClientLayoutContent.tsx
"use client";

import { usePathname } from "next/navigation";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";
import LenisWrapper from "@/components/LenisWrapper";

export function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <>
      <LenisWrapper>{children}</LenisWrapper>
      {!isContactPage && <CallToActionSection />}
      <Footer />
    </>
  );
}
