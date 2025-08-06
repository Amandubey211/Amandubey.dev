"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const newLenisInstance = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = newLenisInstance;

    let animationFrameId: number;
    function raf(time: number) {
      newLenisInstance.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      newLenisInstance.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return lenisRef.current;
}
