// components/ui/FloatingActionButtons.tsx (Complete)
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Expand, Shrink, Bot } from "lucide-react";
import { useCursorContext } from "@/contexts/CursorContext";
import { ChatBox } from "./ChatBox";
// Import the new ChatBox component

export function FloatingActionButtons() {
  const { setVariant } = useCursorContext();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  // Add state for the chat box visibility
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Effect to sync the isFullscreen state with the browser's actual state
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // The bot button now toggles the chat box state
  const handleBotClick = () => {
    setIsChatOpen(true);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.8 } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 20 } },
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

  const renderButton = (id: string, onClick: () => void, icon: React.ReactNode, tooltip: string) => (
    <motion.div variants={buttonVariants} className="relative flex items-center">
      <AnimatePresence>
        {hoveredButton === id && (
          <motion.span
            variants={tooltipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black"
          >
            {tooltip}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.button
        onClick={onClick}
        onMouseEnter={() => { setVariant("hover"); setHoveredButton(id); }}
        onMouseLeave={() => { setVariant("default"); setHoveredButton(null); }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-lg shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        {icon}
      </motion.button>
    </motion.div>
  );

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
      >
        {renderButton(
          "fullscreen",
          toggleFullscreen,
          <AnimatePresence mode="wait">
            <motion.div key={isFullscreen ? "shrink" : "expand"} variants={iconVariants} initial="initial" animate="animate" exit="exit">
              {isFullscreen ? <Shrink size={20} /> : <Expand size={20} />}
            </motion.div>
          </AnimatePresence>,
          isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"
        )}
        {renderButton(
          "bot",
          handleBotClick,
          <Bot size={20} />,
          "Ask me anything!"
        )}
      </motion.div>
      
      {/* Render the ChatBox component and pass state to it */}
      <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}