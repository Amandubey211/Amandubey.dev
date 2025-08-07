"use client";

import { useState, useEffect } from "react";
// Message type is now imported from ai.ts
import { getBotResponse, Message } from "@/lib/ai";

const initialMessages: Message[] = [
  { id: 1, text: "Hello! I'm Aman's AI assistant.", sender: "bot" },
  {
    id: 2,
    text: "You can ask me anything about his skills, projects, or experience.",
    sender: "bot",
  },
];

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    try {
      if (savedMessages && JSON.parse(savedMessages).length > 0) {
        setMessages(JSON.parse(savedMessages));
      } else {
        setMessages(initialMessages);
      }
    } catch (e) {
      console.error("Failed to parse chat history:", e);
      setMessages(initialMessages);
    }
  }, []);

  useEffect(() => {
    // Prevent saving empty initial state
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
      // Get the response object from our AI service
      const botResponse = await getBotResponse(text);

      // Construct the new message with text and optional quick replies
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse.text,
        sender: "bot",
        quickReplies: botResponse.quickReplies,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (e) {
      const errorMessage =
        e instanceof Error ? e.message : "An unknown error occurred";
      setError(new Error(errorMessage));
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage };
};
