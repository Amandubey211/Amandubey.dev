"use client";

import Link from "next/link";
import clsx from "clsx";
import ShinyText from "./ShinyText"; // Adjust the import path as needed

const socials = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/profile-amandubey/" },
  { label: "GITHUB", href: "https://github.com/Amanstudentdiwan" },
  // { label: "INSTAGRAM", href: "https://www.instagram.com/" }, // optional
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
          className="group relative transition"
        >
          {/* Wrapping the label in ShinyText */}
          <ShinyText
            text={label}
            speed={3} // Adjust speed as needed
            className="text-gray-300 group-hover:text-white transition"
          />
          <span
            className="text-gray-300 group-hover:text-white transition"
            aria-hidden
          >
            ↗︎
          </span>
        </Link>
      ))}
    </div>
  );
}
