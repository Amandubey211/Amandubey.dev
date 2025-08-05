"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/app/nprogress-custom.css";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";
import { useLenisContext } from "@/contexts/LenisContext"; // Import our context hook

NProgress.configure({ showSpinner: false, trickleSpeed: 80 });

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
] as const;

export function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");

  // Set your availability based on your resume/status
  const [isAvailableForWork] = useState(true); 
  const prefersReducedMotion = usePrefersReducedMotion();
 const { startLenis, stopLenis } = useLenisContext();
  useEffect(() => {
    NProgress.start();
    const t = setTimeout(() => NProgress.done(), 200);
    return () => clearTimeout(t);
  }, [pathname]);
useEffect(() => {
    if (menuOpen) {
      stopLenis(); // Use the context function to stop Lenis
    } else {
      startLenis(); // Use the context function to start Lenis
    }
  }, [menuOpen, startLenis, stopLenis]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const containerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
  };

  const navContainerClasses = clsx(
    "fixed inset-x-0 z-50 flex items-center justify-between mx-auto transition-all duration-300",
    scrolled
      ? "top-4 w-[92%] md:w-[70%] rounded-full bg-black/30 backdrop-blur-xl py-3 pl-6 pr-5 shadow-xl shadow-black/40 overflow-hidden"
      : "top-0 w-full py-6 px-5 md:px-40"
  );

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: { y: -8 },
  };

  return (
    <>
      <motion.nav
        className={clsx(navContainerClasses, { "shine-effect": scrolled && !prefersReducedMotion })}
        style={scrolled ? { perspective: "1000px" } : {}}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="flex w-full items-center justify-between"
          style={scrolled && !prefersReducedMotion ? { transform: "rotateX(0deg)" } : {}}
        >
          <Link
            href="/"
            aria-label="Home"
            className="font-extrabold tracking-widest text-lg text-white"
          >
            AD
          </Link>

          <ul className="hidden md:flex gap-8">
            {links.map(({ label, path }) => {
              const active =
                path === "/" ? pathname === "/" : pathname.startsWith(path);
              
              if (label === "Contact" && isAvailableForWork) {
                return (
                  <li key="contact-available" className="relative">
                    <Link
                      href={path}
                      className="group flex items-center gap-2.5 text-base font-medium text-white"
                    >
                      <span className="relative flex h-3 w-3">
                        {!prefersReducedMotion && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                        )}
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-500"></span>
                      </span>
                      Available for Hire
                    </Link>
                    {active && (
                      <motion.div
                        className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-lime-400"
                        layoutId="underline"
                      />
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={label}
                  className="relative"
                  onMouseEnter={() => !prefersReducedMotion && setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink("")}
                >
                  <Link
                    href={path}
                    className={clsx(
                      "group flex items-center text-base font-medium transition-colors z-10",
                      active ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    <motion.span
                      className="flex"
                      initial="initial"
                      animate={hoveredLink === label && !prefersReducedMotion ? "hover" : "initial"}
                    >
                      {label.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          className="inline-block"
                          variants={letterVariants}
                          transition={{
                            delay: i * 0.03, type: "spring", stiffness: 300, damping: 15
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </Link>
                  {active && (
                    <motion.div
                      className="absolute bottom-[-4px] left-0 h-0.5 w-full bg-lime-400"
                      layoutId="underline"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 md:gap-6">
            <motion.a
              href="https://www.linkedin.com/in/profile-amandubey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-[#0077b5] transition z-10"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="size-5" />
            </motion.a>
            <motion.a
              href="https://github.com/Amandubey211"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-400 transition z-10"
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="size-5" />
            </motion.a>
            <button
              aria-label="Toggle mobile menu"
              className="md:hidden text-white hover:text-white/90 transition z-10"
              onClick={() => setMenuOpen((p) => !p)}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="fixed top-0 inset-x-0 z-40 pt-[5.5rem] bg-black/90 backdrop-blur-lg md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul
              className="flex flex-col gap-6 px-6 pb-10"
              variants={mobileMenuVariants}
            >
              {links.map(({ label, path }) => {
                const active =
                  path === "/" ? pathname === "/" : pathname.startsWith(path);
                return (
                  <motion.li key={label} variants={mobileLinkVariants}>
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
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}