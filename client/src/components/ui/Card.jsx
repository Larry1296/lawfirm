import React, { useContext } from "react";
import ThemeContext from "../../core/store/ThemeContext";

export default function Card({ children, className = "" }) {
  const { theme } = useContext(ThemeContext);

  // Dynamic background and text based on theme
  const bgClass =
    theme === "dark"
      ? "bg-surface-dark text-text-primary-dark"
      : "bg-surface-light text-text-primary-light";

  return (
    <div className={`rounded-2xl shadow-soft p-6 ${bgClass} ${className}`}>
      {children}
    </div>
  );
}
