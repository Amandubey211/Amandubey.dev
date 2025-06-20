"use client";

import { useTheme } from "next-themes";
import { useMountedState } from "react-use"; // tiny util, optional
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* theme hook */
  const { theme, setTheme } = useTheme();
  const mounted = useMountedState(); // prevents SSR mismatch

  const container = clsx(
    "fixed inset-x-0 z-50 flex items-center justify-between transition-all duration-300",
    scrolled
      ? "top-4 mx-auto w-[92%] md:w-[70%] rounded-full bg-white/5 backdrop-blur-lg py-3 pl-10 pr-8 shadow-lg"
      : "top-0 w-full py-6 px-40"
  );

  const linkBase =
    "group flex items-center gap-2 text-sm md:text-base font-medium transition-colors";

  return (
    <nav className={container}>
      {/* logo */}
      <Link
        href="/"
        className="font-extrabold tracking-widest text-lg text-white"
      >
        AD
      </Link>

      {/* central links */}
      <ul className="hidden md:flex gap-10">
        {links.map(({ label, path }) => {
          const isActive =
            path === "/"
              ? pathname === "/"
              : pathname === path || pathname.startsWith(path + "/");

          return (
            <li key={label}>
              <Link
                href={path}
                className={clsx(
                  linkBase,
                  isActive ? "text-white" : "text-white/60 hover:text-white/90"
                )}
              >
                <span
                  className={clsx(
                    "w-2 h-2 rounded-full bg-lime-400 transition-opacity",
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-40"
                  )}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* theme toggle */}
      {mounted() && (
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-white hover:text-white/90 transition"
        >
          {theme === "dark" ? (
            <Sun className="size-5" />
          ) : (
            <Moon className="size-5" />
          )}
        </button>
      )}
    </nav>
  );
}
