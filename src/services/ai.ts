import { delay } from "@/lib/axios";

export const aiService = {
  summarize: async (documentId: string): Promise<string> => {
    await delay(800);
    return "This document covers key concepts in transformer architecture and attention mechanisms.";
  },
  askQuestion: async (question: string, context?: string): Promise<string> => {
    await delay(800);
    return `Based on the context provided, here is the answer to "${question}": The key insight is that attention mechanisms allow models to focus on relevant parts of the input.`;
  },
  extractKeyPoints: async (documentId: string): Promise<string[]> => {
    await delay(800);
    return [
      "Self-attention enables parallel processing of sequences",
      "Multi-head attention captures different relationship types",
      "Positional encoding preserves sequence order information",
    ];
  },
};
