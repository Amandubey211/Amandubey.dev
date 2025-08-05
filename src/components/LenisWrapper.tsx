// components/LenisWrapper.tsx
"use client";

import { ReactNode } from "react";
import useLenis from "@/Hook/useLenis";
import { LenisContext } from "@/contexts/LenisContext"; // Import the context

export default function LenisWrapper({ children }: { children: ReactNode }) {
  // Get the Lenis instance from your custom hook
  const lenis = useLenis();

  // Define the control functions
  const startLenis = () => lenis?.start();
  const stopLenis = () => lenis?.stop();

  // Create the value object for the provider
  const value = {
    lenis,
    startLenis,
    stopLenis,
  };

  return (
    // Wrap children with the context provider
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
}