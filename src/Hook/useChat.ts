// hooks/useChat.ts

"use client";

import { useState, useEffect } from "react";
import { getBotResponse, Message } from "@/lib/ai";

// Define the initial messages for a fresh chat session
const initialMessages: Message[] = [
  { id: 1, text: "Hello! I'm Aman's AI assistant.", sender: "bot" },
  { id: 2, text: "You can ask me anything about his skills, projects, or experience.", sender: "bot" }
];

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // On initial load, try to get messages from localStorage, or use the initial welcome messages.
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    try {
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        setMessages(initialMessages);
      }
    } catch (e) {
      console.error("Failed to parse chat history:", e);
      setMessages(initialMessages);
    }
  }, []);

  // Whenever the messages array changes, save it to localStorage.
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const botText = await getBotResponse(text, messages); // Pass current messages for context
      const botMessage: Message = { id: Date.now() + 1, text: botText, sender: "bot" };
      
      // Use a functional update to ensure we're adding to the latest state
      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred";
      setError(new Error(errorMessage));
      console.error(e);
      // Optionally add an error message to the chat
      setMessages((prev) => [...prev, {id: Date.now() + 2, text: `Sorry, an error occurred: ${errorMessage}`, sender: 'bot'}]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};