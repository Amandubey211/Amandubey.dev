"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

/* ───── route-change progress bar (NProgress) ───── */
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/app/nprogress-custom.css";

NProgress.configure({ showSpinner: false, trickleSpeed: 80 });

/* ───── nav links ───── */
const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  /* start / stop when pathname changes */
  useEffect(() => {
    NProgress.start();
    /* give the new page a single tick to render, then finish */
    const t = setTimeout(() => NProgress.done(), 200); // adjust if you like
    return () => clearTimeout(t);
  }, [pathname]);
  /* scroll → pill or full bar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* theme switch */
  const { theme, setTheme } = useTheme();

  const container = clsx(
    "fixed inset-x-0 z-50 flex items-center justify-between transition-colors mx-auto",
    scrolled
      ? "top-4 w-[92%] md:w-[70%] rounded-full bg-white/5 backdrop-blur-lg py-3 pl-10 pr-8 shadow-lg"
      : "top-0 w-full py-6 px-40"
  );

  const linkBase =
    "group flex items-center gap-2 text-sm md:text-base font-medium transition-colors";

  return (
    <motion.nav
      className={container}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      initial={false}
    >
      {/* logo */}
      <Link
        href="/"
        className="font-extrabold tracking-widest text-lg text-white"
      >
        AD
      </Link>

      {/* links */}
      <ul className="hidden md:flex gap-10">
        {links.map(({ label, path }) => {
          const active =
            path === "/" ? pathname === "/" : pathname.startsWith(path);
          return (
            <li key={label}>
              <Link
                href={path}
                className={clsx(
                  linkBase,
                  active ? "text-white" : "text-white/60 hover:text-white/90"
                )}
              >
                <span
                  className={clsx(
                    "w-2 h-2 rounded-full bg-lime-400 transition-opacity",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  )}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* theme toggle */}
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
    </motion.nav>
  );
}
