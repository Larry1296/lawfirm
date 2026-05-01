import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  access: localStorage.getItem("access") || null,
  refresh: localStorage.getItem("refresh") || null,

  setAuth: (data) => {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    set({
      user: data.user,
      access: data.access,
      refresh: data.refresh,
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
    });
  },
}));
