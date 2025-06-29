"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

/* NProgress */
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/app/nprogress-custom.css";
NProgress.configure({ showSpinner: false, trickleSpeed: 80 });

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },

  { label: "Contact", path: "/contact" },
  { label: "Play", path: "/play" },
] as const;

export function NavBar() {
  const pathname = usePathname();
  // const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  /* Route-change progress */
  useEffect(() => {
    NProgress.start();
    const t = setTimeout(() => NProgress.done(), 200);
    return () => clearTimeout(t);
  }, [pathname]);

  /* Scroll pill */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu when route changes */
  useEffect(() => setMenuOpen(false), [pathname]);

  /* ─ helpers ─ */
  const linkBase =
    "group flex items-center gap-2 text-base font-medium transition-colors";

  /* container */
  const container = clsx(
    "fixed inset-x-0 z-50 flex items-center justify-between mx-auto transition-colors",
    scrolled
      ? "top-4 w-[92%] md:w-[70%] rounded-full bg-white/5 backdrop-blur-lg py-3 pl-6 pr-5 shadow-lg"
      : "top-0 w-full py-6 px-5 md:px-40"
  );

  /* ─ JSX ─ */
  return (
    <>
      <motion.nav
        className={container}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        initial={false}
      >
        {/* logo */}
        <Link
          href="/"
          aria-label="Home"
          className="font-extrabold tracking-widest text-lg text-white"
        >
          AD
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex gap-8">
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
                      active
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

        {/* right-hand controls */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="text-white hover:text-white/90 transition"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </button>

          {/* hamburger (mobile only) */}
          <button
            aria-label="Open mobile menu"
            className="md:hidden text-white hover:text-white/90 transition"
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.nav>

      {/* ─ mobile menu overlay ─ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-40 pt-[4.5rem] bg-black/90 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-6 px-6 pb-10">
              {links.map(({ label, path }) => {
                const active =
                  path === "/" ? pathname === "/" : pathname.startsWith(path);
                return (
                  <li key={label}>
                    <Link
                      href={path}
                      className={clsx(
                        "w-full flex items-center gap-3 text-lg font-medium py-2",
                        active ? "text-white" : "text-white/60 hover:text-white"
                      )}
                    >
                      <span
                        className={clsx(
                          "w-2 h-2 rounded-full bg-lime-400 transition-opacity",
                          active ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
