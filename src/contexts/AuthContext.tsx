import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { authService, type User } from "@/services/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<Pick<User, "name" | "email">>) => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("auth_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);

  // On mount, if we have a token, fetch fresh profile
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token && !user) {
      setLoading(true);
      authService.getProfile()
        .then((u) => {
          setUser(u);
          localStorage.setItem("auth_user", JSON.stringify(u));
        })
        .catch(() => {
          // Token expired or invalid
          authService.logout();
          setUser(null);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const { user: u, token } = await authService.login(email, password);
      localStorage.setItem("auth_token", token);
      localStorage.setItem("auth_user", JSON.stringify(u));
      setUser(u);
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const { user: u, token } = await authService.register(name, email, password);
      localStorage.setItem("auth_token", token);
      localStorage.setItem("auth_user", JSON.stringify(u));
      setUser(u);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
  }, []);

  const updateProfile = useCallback(async (data: Partial<Pick<User, "name" | "email">>) => {
    const updated = await authService.updateProfile(data);
    setUser(updated);
    localStorage.setItem("auth_user", JSON.stringify(updated));
  }, []);

  const deleteAccount = useCallback(async () => {
    await authService.deleteAccount();
    authService.logout();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, updateProfile, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
