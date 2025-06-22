// src/app/layout.tsx
import "@fontsource/inter";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import LenisWrapper from "@/components/LenisWrapper";
// import BlobCursor from "@/components/BlobCursor";
import { Footer } from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-100">
        <NavBar />
        {/* <BlobCursor
          isActive={true}
          textScale={0.6} // Smaller over text
          linkOpacity={0.3} // More transparent over links
          fillColor="#9ae600"
        /> */}
        <main className="pt-28 md:pt-32">
          <LenisWrapper>{children}</LenisWrapper>
          <Footer />
        </main>
      </body>
    </html>
  );
}
