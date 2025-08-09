// components/ui/FloatingActionButtons.tsx

"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  motion,
  AnimatePresence,
  Variants,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Expand, Shrink, Bot, ArrowUp } from "lucide-react"; // Import ArrowUp icon
import { useCursorContext } from "@/contexts/CursorContext";
import { ChatBox } from "./ChatBox";
import { Backdrop } from "./Backdrop";
import useLenis from "../../../useLenis";

export function FloatingActionButtons() {
  const [isMounted, setIsMounted] = useState(false);
  const { setVariant } = useCursorContext();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false); // State for scroll-to-top button visibility
  const lenis = useLenis();

  // --- SCROLL TRACKING LOGIC ---
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show the button only after scrolling down 400px
    if (latest > 400) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  });

  // --- HANDLER TO SCROLL TO TOP ---
  const handleScrollToTop = () => {
    if (lenis) {
      // Use lenis for a smooth scroll animation
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (lenis) {
      if (isChatOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
    return () => {
      if (lenis) lenis.start();
    };
  }, [isChatOpen, lenis]);

  useEffect(() => {
    const onFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  const handleBotClick = () => setIsChatOpen(true);
  const handleCloseChat = () => setIsChatOpen(false);

  const fabContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1.8 },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  const tooltipVariants: Variants = {
    hidden: { opacity: 0, x: 15 },
    visible: { opacity: 1, x: 0 },
  };

  const iconVariants: Variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  const fabContent = (
    <>
      {/* --- SCROLL TO TOP BUTTON (BOTTOM-LEFT) --- */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={handleScrollToTop}
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* --- MAIN ACTION BUTTONS (BOTTOM-RIGHT) --- */}
      <motion.div
        variants={fabContainerVariants}
        initial="hidden"
        animate="visible"
        className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4"
      >
        <motion.div
          variants={buttonVariants}
          className="relative flex items-center"
        >
          <AnimatePresence>
            {hoveredButton === "fullscreen" && (
              <motion.span
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black shadow-lg"
              >
                {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              </motion.span>
            )}
          </AnimatePresence>
          <motion.button
            onClick={toggleFullscreen}
            onMouseEnter={() => {
              setVariant("hover");
              setHoveredButton("fullscreen");
            }}
            onMouseLeave={() => {
              setVariant("default");
              setHoveredButton(null);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isFullscreen ? "shrink" : "expand"}
                {...iconVariants}
              >
                {isFullscreen ? <Shrink size={20} /> : <Expand size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              layoutId="chat-bubble"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <div className="relative flex items-center">
                <AnimatePresence>
                  {hoveredButton === "bot" && (
                    <motion.span
                      variants={tooltipVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black shadow-lg"
                    >
                      Ask me anything!
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.button
                  onClick={handleBotClick}
                  onMouseEnter={() => {
                    setVariant("hover");
                    setHoveredButton("bot");
                  }}
                  onMouseLeave={() => {
                    setVariant("default");
                    setHoveredButton(null);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-lg border border-white/20 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  <Bot size={20} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {isChatOpen && <Backdrop onClose={handleCloseChat} />}
      </AnimatePresence>
      <ChatBox isOpen={isChatOpen} onClose={handleCloseChat} />
    </>
  );

  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(fabContent, document.body);
}
