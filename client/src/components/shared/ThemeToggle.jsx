import { useThemeStore } from "../../core/store/themeStore";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-lg border text-sm 
                 border-ui-border 
                 text-gray-700 dark:text-darkbrand-text 
                 hover:shadow-soft transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
