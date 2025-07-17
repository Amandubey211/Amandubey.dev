// src/components/Sidebar.tsx
"use client"; // This component needs to be a client component to use usePathname

import { conceptsData } from "@/data/concepts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      <h2 className="text-xl font-semibold mb-4 text-neutral-50">Concepts</h2>
      <Link
        href="/play"
        className={`block py-2 px-3 rounded-md transition-colors ${
          pathname === "/play"
            ? "bg-blue-600 text-white font-medium"
            : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
        }`}
      >
        All Concepts
      </Link>
      {conceptsData.map((concept) => (
        <div key={concept.id}>
          <Link
            href={`/play/${concept.id}`}
            className={`block py-2 px-3 rounded-md transition-colors ${
              pathname === `/play/${concept.id}`
                ? "bg-blue-600 text-white font-medium"
                : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
            }`}
          >
            {concept.title}
          </Link>
          {/* You can add nested navigation here if concepts had sub-concepts */}
          {/* {concept.subConcepts && concept.subConcepts.length > 0 && (
            <ul className="pl-4 mt-1 space-y-1">
              {concept.subConcepts.map((subConcept) => (
                <li key={subConcept.id}>
                  <Link
                    href={`/play/${concept.id}/${subConcept.id}`}
                    className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                      pathname === `/play/${concept.id}/${subConcept.id}`
                        ? "bg-blue-700 text-white"
                        : "text-neutral-400 hover:bg-neutral-700 hover:text-white"
                    }`}
                  >
                    {subConcept.title}
                  </Link>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      ))}
    </nav>
  );
}
