// hooks/useChat.ts
"use client";

import { useState, useEffect } from "react";
import { getBotResponse, Message } from "@/lib/ai";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // Send initial welcome message when the chat is first opened.
  useEffect(() => {
    setMessages([
      { id: 1, text: "Hello! I'm Aman's AI assistant.", sender: "bot" },
      { id: 2, text: "You can ask me anything about his skills, projects, or experience.", sender: "bot" }
    ]);
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Get the response from our abstracted AI service
      const botText = await getBotResponse(text, messages);
      const botMessage: Message = { id: Date.now() + 1, text: botText, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      setError(e instanceof Error ? e : new Error("An unknown error occurred"));
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};