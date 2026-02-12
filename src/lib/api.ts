// =============================================================
// API Service Layer — Mock Implementation
// Replace mock data with real API calls when backend is ready.
// =============================================================

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ---- Types ----

export interface Document {
  id: string;
  title: string;
  content: string;
  tags: string[];
  size: string;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  title: string;
  excerpt: string;
  tag: string;
  timestamp: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

// ---- Documents Service ----

export const documentsService = {
  getAll: async (): Promise<Document[]> => {
    // TODO: Replace with real API call
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

// ---- Notes Service ----

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

// ---- Tasks Service ----

export const tasksService = {
  getAll: async (): Promise<Task[]> => {
    await delay();
    return [];
  },
  create: async (data: Pick<Task, "title" | "description" | "priority" | "dueDate">): Promise<Task> => {
    await delay();
    return { ...data, id: Date.now().toString(), completed: false };
  },
  update: async (id: string, data: Partial<Task>): Promise<Task> => {
    await delay();
    return { id, title: "", description: "", priority: "Medium", dueDate: "", completed: false, ...data };
  },
  delete: async (id: string): Promise<void> => {
    await delay();
  },
};

// ---- Auth Service ----

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    await delay(500);
    return { id: "1", name: "Alex Johnson", email };
  },
  logout: async (): Promise<void> => {
    await delay();
  },
  getCurrentUser: async (): Promise<User | null> => {
    await delay();
    return { id: "1", name: "Alex Johnson", email: "alex@example.com" };
  },
};

// ---- AI Service ----

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
