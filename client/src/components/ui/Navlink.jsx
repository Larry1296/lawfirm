// src/components/ui/NavLink.jsx
import React from "react";

export default function NavLink({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-2xl font-medium transition-all duration-200
        shadow-[0_6px_0_rgba(0,0,0,0.15)]
        active:shadow-[0_2px_0_rgba(0,0,0,0.1)]
        active:translate-y-1
        ${active ? "bg-white text-[color:var(--brand-primary)]" : "text-[color:var(--text-muted)] hover:bg-[color:var(--surface)]"}
      `}
    >
      {label}
    </button>
  );
}
