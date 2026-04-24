import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

export default function useTheme() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
  }, [setTheme]);

  return { theme, setTheme };
}
