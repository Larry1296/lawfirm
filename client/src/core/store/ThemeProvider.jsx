import { useEffect, useState, useMemo } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children, user, role }) => {
  const storageKey = useMemo(() => {
    if (!role) return "theme-guest";
    if (!user?.id) return `theme-${role}-guest`;
    return `theme-${role}-${user.id}`;
  }, [role, user?.id]);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
