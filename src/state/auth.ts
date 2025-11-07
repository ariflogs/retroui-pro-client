import { create } from "zustand";
import { useEffect } from "react";

interface User {
  email: string;
  isPro: boolean | null;
  isOrg: boolean | null;
  name: string | null;
}

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  token: string | null;
  error: Error | null;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isLoading: true,
  error: null,
  token: null,
  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const token = localStorage.getItem("auth_token");

      if (!token) {
        return set({ error: new Error("UNAUTHENTICATED"), isLoading: false });
      }

      const user = await fetch("https://workers.retroui.dev/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());

      set({ user, isLoading: false, token });
    } catch (error) {
      set({ error: error as Error, isLoading: false });
    }
  },

  logout: async () => {
    set({ user: null, token: null });
    localStorage.removeItem("auth_token");
  },
}));

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const checkAuth = useAuth((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return children;
}
