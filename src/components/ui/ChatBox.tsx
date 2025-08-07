// components/ui/ChatBox.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useDragControls,
} from "framer-motion";
import {
  X,
  SendHorizontal,
  Bot,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useCursorContext } from "@/contexts/CursorContext";
import { usePrefersReducedMotion } from "@/Hook/use-prefers-reduced-motion";
import { useChat } from "@/Hook/useChat";
import { useFocusTrap } from "@/Hook/use-focus-trap";

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
    aria-label="Assistant is typing"
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
  const [showPrompts, setShowPrompts] = useState(true);
  const [isUserScrolled, setIsUserScrolled] = useState(false);

  const messageEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  const dragControls = useDragControls();
  const { messages, isLoading, error, sendMessage } = useChat();

  useFocusTrap(chatBoxRef, isOpen);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messageEndRef.current?.scrollIntoView({ behavior });
  };

  const handleScroll = () => {
    if (!messageListRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messageListRef.current;
    const isAtBottom = scrollHeight - scrollTop - clientHeight < 1;
    setIsUserScrolled(!isAtBottom);
  };

  useEffect(() => {
    if (!isLoading && !isUserScrolled) {
      scrollToBottom("auto");
    }
  }, [messages, isLoading, isUserScrolled]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (messages.length > 2 && showPrompts) {
      setShowPrompts(false);
    }
  }, [messages, showPrompts]);

  const handleSend = (text: string = inputValue) => {
    if (text.trim() === "" || isLoading) return;
    sendMessage(text);
    setInputValue("");
    if (showPrompts) setShowPrompts(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const containerVariants: Variants = {
    hidden: { transition: { when: "afterChildren" } },
    visible: {
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
      },
    },
    exit: {
      transition: { duration: 0.2, ease: "easeOut", when: "afterChildren" },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween", ease: "circOut", duration: 0.3, delay: 0.1 },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { type: "tween", ease: "circIn", duration: 0.15 },
    },
  };

  const botMessageContainerVariants: Variants = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const messageBubbleVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  const avatarVariants: Variants = {
    initial: { scale: 1, opacity: 1 },
    loading: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.7, 1],
      transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={chatBoxRef}
          layoutId="chat-bubble"
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          drag
          onPointerDown={(e) => dragControls.start(e, { snapToCursor: false })}
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragConstraints={{ top: 20, left: 20, right: 20, bottom: 20 }}
          style={{ willChange: "transform, opacity" }}
          className="fixed bottom-24 right-6 z-[101] w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px]"
        >
          <motion.div
            variants={prefersReducedMotion ? {} : contentVariants}
            className="flex h-full w-full flex-col rounded-2xl bg-black/70 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
            <motion.header
              style={{ cursor: "grab" }}
              onHoverStart={() => setVariant("hover")}
              onHoverEnd={() => setVariant("default")}
              whileDrag={{ cursor: "grabbing" }}
              className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                <Bot className="text-lime-400" size={24} />
                <h3 className="font-semibold text-white">
                  Aman`&apos;s Assistant
                </h3>
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
            </motion.header>

            <div
              ref={messageListRef}
              onScroll={handleScroll}
              className="relative flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
              role="log"
              aria-live="polite"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <div key={msg.id}>
                    <motion.div
                      layout
                      variants={
                        msg.sender === "bot"
                          ? botMessageContainerVariants
                          : undefined
                      }
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`flex gap-3 items-end ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <motion.div
                          variants={messageBubbleVariants}
                          className="self-start mt-1"
                        >
                          <motion.div
                            variants={avatarVariants}
                            animate={
                              isLoading && index === messages.length - 1
                                ? "loading"
                                : "initial"
                            }
                            className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-700 flex items-center justify-center border border-white/10"
                          >
                            <Bot size={18} className="text-lime-400" />
                          </motion.div>
                        </motion.div>
                      )}
                      <motion.div
                        variants={messageBubbleVariants}
                        className={`prose prose-sm prose-invert prose-p:my-0 max-w-[80%] rounded-xl px-3.5 py-2.5 ${
                          msg.sender === "user"
                            ? "bg-lime-500 text-black font-medium"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        <ReactMarkdown
                          components={{
                            a: ({ ...props }) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
                              >
                                {props.children}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </a>
                            ),
                          }}
                        >
                          {msg.text}
                        </ReactMarkdown>
                      </motion.div>
                    </motion.div>

                    {index === messages.length - 1 &&
                      msg.sender === "bot" &&
                      msg.quickReplies &&
                      !isLoading && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.5 },
                          }}
                          className="flex flex-wrap gap-2 ml-12 mt-3"
                        >
                          {msg.quickReplies.map((reply) => (
                            <button
                              key={reply}
                              onClick={() => handleSend(reply)}
                              className="px-3 py-1 text-xs text-lime-300 bg-lime-900/50 border border-lime-500/30 rounded-full hover:bg-lime-900/80 transition-colors"
                            >
                              {reply}
                            </button>
                          ))}
                        </motion.div>
                      )}
                  </div>
                ))}
              </AnimatePresence>
              {isLoading && <TypingIndicator />}
              {error && (
                <motion.div
                  variants={messageBubbleVariants}
                  className="p-2 rounded-lg bg-red-500/20 text-red-300 text-center text-sm"
                >
                  Sorry, something went wrong. Please try again.
                </motion.div>
              )}
              <div ref={messageEndRef} />

              <AnimatePresence>
                {isUserScrolled && (
                  <motion.button
                    onClick={() => scrollToBottom()}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="sticky bottom-4 left-1/2 -translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white transition-colors"
                    aria-label="Scroll to bottom"
                  >
                    <ChevronDown size={20} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <div className="p-4 border-t border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2 rounded-full bg-gray-900/80 p-1 pl-4 border border-white/10 focus-within:border-lime-400 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  className="w-full bg-transparent text-white placeholder:text-gray-500 "
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={inputValue.trim() === "" || isLoading}
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-lime-500 text-black transition-all disabled:opacity-40 disabled:scale-90 hover:bg-lime-400 active:scale-95"
                  aria-label="Send message"
                >
                  <SendHorizontal size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
