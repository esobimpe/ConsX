import { create } from "zustand";
import { loginBack, logout } from "../api/auth";

const useAuthStore = create((set) => ({
  token: null,
  user: null,

  isLoading: true,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setIsLoading: (isLoading) => set({ isLoading }),

  handleLogin: async () => {
    try {
      const { token, user } = await loginBack();
      set({ user, token, isLoading: false })
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },

  handleLogout: () => {
    logout();
    set({ user: null, token: "", isLoading: false });
  }
}));

export default useAuthStore;