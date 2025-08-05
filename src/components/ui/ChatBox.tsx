// components/ui/ChatBox.tsx (Final Enhanced Version)
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, SendHorizontal, Bot } from "lucide-react";
import { useCursorContext } from "@/contexts/CursorContext";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";
import { useChat } from "@/Hook/useChat";

interface ChatBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypingIndicator = () => (
  <motion.div
    className="flex items-center space-x-1.5 ml-12"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
  >
    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
    <span className="h-1.5 w-1.5 bg-gray-400 rounded-full animate-bounce" />
  </motion.div>
);

export function ChatBox({ isOpen, onClose }: ChatBoxProps) {
  const { setVariant } = useCursorContext();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inputValue, setInputValue] = useState("");
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, error, sendMessage } = useChat();

  useEffect(() => {
    // Smoothly scroll to the latest message or indicator
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = () => {
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      handleSend();
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 25 } },
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } }
  };

  const messageVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[500px] flex flex-col rounded-xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl"
        >
          <header className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <Bot className="text-lime-400" size={24} />
              <h3 className="font-semibold text-white">Aman's Assistant</h3>
            </div>
            <button
              onClick={onClose}
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
              className="p-1 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  layout // This is CRUCIAL for smooth animations when new messages are added
                  className={`flex gap-3 items-end ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-700 flex items-center justify-center">
                      <Bot size={18} className="text-lime-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-3.5 py-2.5 ${
                      msg.sender === "user"
                        ? "bg-lime-500 text-black font-medium"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    <p className="text-sm leading-snug">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && <TypingIndicator />}
            {error && (
              <motion.div
                variants={messageVariants} initial="hidden" animate="visible"
                className="p-2 rounded-lg bg-red-500/20 text-red-300 text-center text-sm"
              >
                Sorry, something went wrong. Please try again.
              </motion.div>
            )}
            <div ref={messageEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 flex-shrink-0">
            <div className="flex items-center gap-2 rounded-full bg-gray-900/80 p-1 pl-4 border border-white/10 focus-within:border-lime-400 transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={inputValue.trim() === "" || isLoading}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-lime-500 text-black transition-all disabled:opacity-40 disabled:scale-90 hover:bg-lime-400"
                aria-label="Send message"
              >
                <SendHorizontal size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}