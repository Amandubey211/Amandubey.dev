// src/hooks/useLenis.ts
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Changed from duration to lerp (recommended in newer versions)
      smoothWheel: true, // Replaces smooth
      wheelMultiplier: 1, // Controls wheel scroll speed
      touchMultiplier: 2, // Controls touch scroll speed
      infinite: false, // Prevents infinite scrolling
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
