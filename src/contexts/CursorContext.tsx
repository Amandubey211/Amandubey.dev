// contexts/CursorContext.tsx (Updated)
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// CORRECTED: Added the 'text' variant
type CursorVariant = "default" | "hover" | "text";

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");

  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursorContext must be used within a CursorProvider");
  }
  return context;
};