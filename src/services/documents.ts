import { delay } from "@/lib/axios";

export interface Document {
  id: string;
  title: string;
  content: string;
  tags: string[];
  size: string;
  createdAt: string;
  updatedAt: string;
}

export const documentsService = {
  getAll: async (): Promise<Document[]> => {
    await delay();
    return [];
  },
  getById: async (id: string): Promise<Document | null> => {
    await delay();
    return null;
  },
  create: async (data: Pick<Document, "title" | "content" | "tags">): Promise<Document> => {
    await delay();
    return { ...data, id: Date.now().toString(), size: "0 KB", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  },
  update: async (id: string, data: Partial<Document>): Promise<Document> => {
    await delay();
    return { id, title: "", content: "", tags: [], size: "", createdAt: "", updatedAt: new Date().toISOString(), ...data };
  },
  delete: async (id: string): Promise<void> => {
    await delay();
  },
};
