/* src/app/layout.tsx */
import "@fontsource/inter";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import LenisWrapper from "@/components/LenisWrapper";
import { Footer } from "@/components/Footer";
import { CallToActionSection } from "@/components/CallToActionSection";
import { sora } from "@/components/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.className} antialiased`}>
        <NavBar />
        <main className="pt-28 md:pt-32">
          <LenisWrapper>{children}</LenisWrapper>
          <CallToActionSection />
          <Footer />
        </main>
      </body>
    </html>
  );
}
