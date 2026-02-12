import { delay } from "@/lib/axios";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  completed: boolean;
}

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
