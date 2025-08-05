// lib/ai.ts

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

/**
 * Simulates calling a backend AI service.
 * FUTURE: Replace this with a fetch call to your real AI backend.
 * @param message The user's message string.
 * @param history The previous conversation history.
 * @returns A promise that resolves to the bot's response text.
 */
export const getBotResponse = (message: string, history: Message[]): Promise<string> => {
  // In a real app, you might send the history for context.
  console.log("Sending to AI:", { message, history });

  return new Promise((resolve) => {
    // Simulate network delay and AI "thinking" time
    setTimeout(() => {
      // This is where your AI's logic would generate a real response
      const response = `This is a simulated response to: "${message.substring(
        0,
        30
      )}...". Based on Aman's resume, I can confirm his expertise in high-performance web applications.`;
      resolve(response);
    }, 1500);
  });
};