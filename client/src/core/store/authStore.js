import { create } from "zustand";

export const useAuthStore = create((set) => ({
  /* =========================================
     STATE
  ========================================= */
  user: JSON.parse(localStorage.getItem("user")) || null,
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,
  isAuthenticated: !!localStorage.getItem("access"),

  /* =========================================
     LOGIN
  ========================================= */
  login: (authData) => {
    const { access, refresh, user } = authData;

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("user", JSON.stringify(user));

    set({
      user,
      access,
      refresh,
      isAuthenticated: true,
    });
  },

  /* =========================================
     LOGOUT
  ========================================= */
  logout: () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    set({
      user: null,
      access: null,
      refresh: null,
      isAuthenticated: false,
    });
  },

  /* =========================================
     UPDATE USER (optional for profile edits)
  ========================================= */
  updateUser: (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));

    set({
      user: updatedUser,
    });
  },
}));
