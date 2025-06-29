"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

/**
 * Wraps next-themes so we get .light / .dark classes on <html>.
 */
export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemeProvider
      attribute="class" // adds .light / .dark
      defaultTheme="system" // system first; user can toggle
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
