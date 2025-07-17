// src/components/ConceptCard.tsx
import Link from "next/link";

interface ConceptCardProps {
  concept: {
    id: string;
    title: string;
    description: string;
    tags?: string[];
  };
}

export function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <Link
      href={`/play/${concept.id}`}
      className="block bg-neutral-800 border border-neutral-700 rounded-lg p-6 hover:bg-neutral-700 hover:border-blue-500 transition-all duration-200 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="text-xl font-bold mb-2 text-neutral-50 group-hover:text-blue-300 z-10 relative">
        {concept.title}
      </h3>
      <p className="text-neutral-400 text-sm mb-4 z-10 relative">
        {concept.description}
      </p>
      {concept.tags && (
        <div className="flex flex-wrap gap-2 z-10 relative">
          {concept.tags.map((tag) => (
            <span
              key={tag}
              className="bg-neutral-700 text-neutral-300 text-xs font-medium px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 text-blue-400 group-hover:text-blue-300 z-10 relative flex items-center">
        Learn More →
      </div>
    </Link>
  );
}
