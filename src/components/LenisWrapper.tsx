// src/components/LenisWrapper.tsx
"use client";

import { ReactNode } from "react";
import useLenis from "@/Hook/useLenis";

export default function LenisWrapper({ children }: { children: ReactNode }) {
  useLenis();
  return <>{children}</>;
}