import { create } from "zustand";

// Helper function to get initial user data safely
const getInitialUserData = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create((set) => ({
  // Hydrate user from localStorage, default to null if not found
  user: getInitialUserData(),
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,

  // Initialize loading state
  loading: false, // Start as false, will update once user data is available

  setAuth: (data) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    set({
      user: data.user,
      access: data.access,
      refresh: data.refresh,
      loading: false, // Set loading to false after successful login
    });
  },

  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    set({
      user: null,
      access: null,
      refresh: null,
      loading: false, // Reset loading after logout
    });
  },

  // Optional: Function to manually set loading state if needed
  setLoading: (loadingState) => set({ loading: loadingState }),
}));
