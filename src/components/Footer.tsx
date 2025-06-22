/* components/Footer.tsx */
"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react";

/**
 * Site-wide footer
 *
 *  • left-aligned copyright, dynamic year
 *  • right-aligned social links with matching monochrome icon style
 *  • subtle top border / gradient so it melts into the dark theme
 */
export function Footer() {
  const year = new Date().getFullYear();

  const socials: { href: string; label: string; icon: React.ReactNode }[] = [
    {
      href: "https://linkedin.com/in/profile-amandubey",
      label: "LinkedIn",
      icon: <Linkedin className="size-6" />,
    },
    {
      href: "https://github.com/Amandubey211",
      label: "GitHub",
      icon: <Github className="size-6" />,
    },
    {
      href: "https://instagram.com/yourhandle", // ← update
      label: "Instagram",
      icon: <Instagram className="size-6" />,
    },
    {
      href: "mailto:amandubey8833@gmail.com",
      label: "E-mail",
      icon: <Mail className="size-6" />,
    },
    {
      href: "https://twitter.com/yourhandle", // ← update
      label: "X / Twitter",
      icon: <Twitter className="size-6" />,
    },
  ];

  return (
    <footer
      className="relative z-10 bg-gradient-to-b
                 from-transparent to-black/40 text-gray-400
                 px-6 md:px-16 py-8 flex items-center justify-between"
    >
      <p className="text-sm">
        © {year} Aman&nbsp;Dubey. All&nbsp;rights&nbsp;reserved.
      </p>

      <nav className="flex items-center gap-6">
        {socials.map(({ href, label, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="hover:text-white transition-colors"
          >
            {icon}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
