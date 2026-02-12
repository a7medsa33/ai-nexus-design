import { delay } from "@/lib/axios";

export interface Note {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  timestamp: string;
}

export const notesService = {
  getAll: async (): Promise<Note[]> => {
    await delay();
    return [];
  },
  create: async (data: Pick<Note, "title" | "excerpt" | "tag">): Promise<Note> => {
    await delay();
    return { ...data, id: Date.now().toString(), timestamp: "Just now" };
  },
  update: async (id: string, data: Partial<Note>): Promise<Note> => {
    await delay();
    return { id, title: "", excerpt: "", tag: "", timestamp: "", ...data };
  },
  delete: async (id: string): Promise<void> => {
    await delay();
  },
};
