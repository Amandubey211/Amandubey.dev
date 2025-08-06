// hooks/use-focus-trap.ts

import { useEffect, useRef } from 'react';

// KEY FIX: The ref type now correctly accepts an element that can be null.
export const useFocusTrap = (ref: React.RefObject<HTMLElement | null>, isActive: boolean) => {
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // This guard clause now correctly handles the ref being null.
    if (!isActive || !ref.current) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;
    const focusableElements = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else { // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    const currentRef = ref.current;
    currentRef.addEventListener('keydown', handleKeyDown);

    return () => {
      currentRef?.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [isActive, ref]);
};