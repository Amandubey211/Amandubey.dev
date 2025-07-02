/* src/app/layout.tsx */
import "@fontsource/inter";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import LenisWrapper from "@/components/LenisWrapper";
import { Footer } from "@/components/Footer";
import { CallToActionSection } from "@/components/CallToActionSection";
import { lusitana } from "@/components/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lusitana.className} antialiased`}>
        {/* <body> */}
        {/* <ThemeProvider> */}
        <NavBar />
        <main className="pt-28 md:pt-32">
          <LenisWrapper>{children}</LenisWrapper>
          <CallToActionSection />
          <Footer />
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
