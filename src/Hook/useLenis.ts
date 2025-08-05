"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

// This hook now creates, manages, and RETURNS the Lenis instance.
export default function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenisInstance = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Store the instance in state
    setLenis(newLenisInstance);

    function raf(time: number) {
      newLenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      newLenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return lenis; // Return the instance
}