import api from "@/lib/axios";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const authService = {
  /** POST /users/auth/register */
  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/users/auth/register", { name, email, password });
    return res.data;
  },

  /** POST /users/auth/login */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/users/auth/login", { email, password });
    return res.data;
  },

  /** GET /users/profile */
  getProfile: async (): Promise<User> => {
    const res = await api.get<User>("/users/profile");
    return res.data;
  },

  /** PUT /users/profile */
  updateProfile: async (data: Partial<Pick<User, "name" | "email">>): Promise<User> => {
    const res = await api.put<User>("/users/profile", data);
    return res.data;
  },

  /** DELETE /users/profile */
  deleteAccount: async (): Promise<void> => {
    await api.delete("/users/profile");
  },

  /** GET /users (admin only) */
  getAllUsers: async (): Promise<User[]> => {
    const res = await api.get<User[]>("/users");
    return res.data;
  },

  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  },
};
