// hooks/use-prefers-reduced-motion.ts

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * A custom hook that detects whether the user has "prefers reduced motion" enabled
 * in their system settings.
 *
 * @returns {boolean} `true` if the user prefers reduced motion, `false` otherwise.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if the window and matchMedia API are available (client-side)
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
      return;
    }

    const mediaQueryList = window.matchMedia(QUERY);

    // Set the initial state
    setPrefersReducedMotion(mediaQueryList.matches);

    // Define a listener to update the state when the user's preference changes
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add the event listener
    mediaQueryList.addEventListener("change", listener);

    // Clean up the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}