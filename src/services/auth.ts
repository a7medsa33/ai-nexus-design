import { delay } from "@/lib/axios";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export const authService = {
  // TODO: Replace with real API calls
  login: async (email: string, password: string): Promise<User> => {
    await delay(500);
    // Mock — accept any credentials
    return { id: "1", name: "Alex Johnson", email };
  },

  signup: async (name: string, email: string, password: string): Promise<User> => {
    await delay(500);
    return { id: Date.now().toString(), name, email };
  },

  logout: async (): Promise<void> => {
    await delay();
  },

  getCurrentUser: async (): Promise<User | null> => {
    await delay();
    return { id: "1", name: "Alex Johnson", email: "alex@example.com" };
  },
};
