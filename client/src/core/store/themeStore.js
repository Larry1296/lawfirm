import { create } from "zustand";

const applyTheme = (theme) => {
  const root = document.documentElement;

  // IMPORTANT: Tailwind only cares about "dark"
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  localStorage.setItem("theme", theme);
};

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",

  setTheme: (theme) => {
    applyTheme(theme);
    set({ theme });
  },

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      return { theme: newTheme };
    }),
}));
