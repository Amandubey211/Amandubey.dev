// lib/ai.ts

import knowledgeBase from './knowledge-base.json';

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// Simple utility to simulate a delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getBotResponse = async (userText: string, chatHistory: Message[]): Promise<string> => {
  const normalizedText = userText.toLowerCase().trim();
console.log(chatHistory,"chatHistory")
  // Find a matching keyword section from our knowledge base
  for (const key in knowledgeBase.keywords) {
    const section = knowledgeBase.keywords[key as keyof typeof knowledgeBase.keywords];
    if (section.keywords.some(keyword => normalizedText.includes(keyword))) {
      const responseText = section.response;
      
      // --- SIMULATE THINKING ---
      // Calculate a realistic "typing" delay based on the response length.
      // e.g., 20 words per second, with a max of 2 seconds.
      const typingDelay = Math.min(responseText.length * 50, 2000);
      await sleep(typingDelay);

      return responseText;
    }
  }

  // If no keyword matches, provide a helpful fallback response.
  await sleep(800); // A standard delay for a fallback.
  return knowledgeBase.fallback;
};