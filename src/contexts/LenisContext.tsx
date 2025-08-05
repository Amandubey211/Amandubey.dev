// contexts/LenisContext.tsx (Corrected)
"use client";

import { createContext, useContext } from "react";
// CORRECTED: The type comes from the 'lenis' package itself
import type Lenis from "lenis";

// Define the shape of the context's value
interface LenisContextType {
  lenis: Lenis | null;
  startLenis: () => void;
  stopLenis: () => void;
}

// Create the context with a default null value
export const LenisContext = createContext<LenisContextType | null>(null);

/**
 * A custom hook to easily access the Lenis context.
 * Throws an error if used outside of a LenisProvider.
 */
export const useLenisContext = () => {
  const context = useContext(LenisContext);
  if (!context) {
    throw new Error("useLenisContext must be used within a LenisProvider");
  }
  return context;
};