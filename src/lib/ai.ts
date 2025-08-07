// lib/ai.ts

import knowledgeBase from "./knowledge-base.json";

// Updated interface to include optional quick replies
export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  quickReplies?: string[];
}

// --- TYPE DEFINITION FIX ---
// We explicitly define the shape of a section in our knowledge base.
// `quickReplies` is marked as optional with the `?` symbol.
type KnowledgeBaseSection = {
  response: string;
  keywords: string[];
  quickReplies?: string[];
};

// We define the shape of the entire knowledge base's keywords object.
type KnowledgeBaseKeywords = {
  [key: string]: KnowledgeBaseSection;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Function now returns an object with text and optional quick replies
export const getBotResponse = async (
  userText: string
): Promise<{ text: string; quickReplies?: string[] }> => {
  const normalizedText = userText.toLowerCase().trim();
  const allKeywords = Object.keys(knowledgeBase.keywords).reverse();

  for (const key of allKeywords) {
    // We cast the keywords object to our new type here.
    const section = (knowledgeBase.keywords as KnowledgeBaseKeywords)[key];

    if (section.keywords.some((keyword) => normalizedText.includes(keyword))) {
      const responseText = section.response;

      const typingDelay = Math.min(responseText.length * 40, 2500);
      await sleep(typingDelay);

      // Return the full response object. TypeScript is now happy because it knows
      // `quickReplies` might be undefined, which is perfectly valid.
      return { text: section.response, quickReplies: section.quickReplies };
    }
  }

  await sleep(800);
  return { text: knowledgeBase.fallback };
};
