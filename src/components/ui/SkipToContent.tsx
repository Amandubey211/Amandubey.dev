// components/ui/SkipToContent.tsx

import Link from "next/link";

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="sr-only absolute left-4 top-4 z-[9999] rounded-full bg-white px-6 py-3 font-medium text-black transition-transform focus:not-sr-only focus:translate-y-0"
    >
      Skip to main content
    </Link>
  );
}