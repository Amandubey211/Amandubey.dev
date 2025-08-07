// hooks/use-focus-trap.ts

import { useEffect, useRef } from "react";

/**
 * A custom hook to trap focus within a designated container element (e.g., a modal or dialog).
 * When the trap is active, tabbing will cycle through focusable elements only within the container.
 * When the trap is deactivated, focus is returned to the element that was focused before the trap was activated.
 * @param ref - A React ref attached to the container element you want to trap focus within.
 * @param isActive - A boolean to control whether the focus trap is currently active.
 */
export const useFocusTrap = (
  ref: React.RefObject<HTMLElement | null>,
  isActive: boolean
) => {
  // Stores a reference to the element that was focused before the trap was activated.
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // If the trap isn't active or the ref isn't connected, do nothing.
    if (!isActive || !ref.current) return;

    // Save the currently focused element so we can return to it later.
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Find all focusable elements within the container.
    const focusableElements = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // The keyboard event handler for managing Tab presses.
    const handleKeyDown = (event: KeyboardEvent) => {
      // We only care about the Tab key.
      if (event.key !== "Tab") return;

      // If the Shift key is pressed, we're tabbing backwards.
      if (event.shiftKey) {
        // If the currently focused element is the first one, loop back to the last one.
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        // Otherwise, we're tabbing forwards.
        // If the currently focused element is the last one, loop around to the first one.
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    const currentRef = ref.current;
    currentRef.addEventListener("keydown", handleKeyDown);

    // Cleanup function that runs when the trap is deactivated.
    return () => {
      currentRef?.removeEventListener("keydown", handleKeyDown);
      // Return focus to the element that was focused before the modal was opened.
      previouslyFocusedElement.current?.focus();
    };
  }, [isActive, ref]);
};
