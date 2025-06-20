"use client";

import Link from "next/link";
import clsx from "clsx";

const socials = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/profile-amandubey/" },
  { label: "GITHUB", href: "https://github.com/Amandubey211" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/" }, // optional
  { label: "GMAIL", href: "mailto:amandubey8833@gmail.com" },
] as const;

export function SocialRow({ className }: { className?: string }) {
  return (
    <div
      className={clsx("flex flex-wrap gap-6 text-lg tracking-wider", className)}
    >
      {socials.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          className="text-gray-300 hover:text-white transition"
        >
          {label} <span aria-hidden>↗︎</span>
        </Link>
      ))}
    </div>
  );
}
