// src/components/ui/Button3D.jsx
import React from "react";

export default function Button3D({
  text,
  onClick,
  type = "button",
  className = "",
  variant = "primary", // primary, success, outlineLight, accent
  size = "md", // sm, md, lg
}) {
  // Base 3D styling
  const base = `
    rounded-xl font-semibold shadow-[0_6px_0_rgba(0,0,0,0.2)]
    active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
    active:translate-y-1 transition-all duration-200
    flex items-center justify-center
  `;

  // Size styles
  let sizeClass = "";
  if (size === "sm") sizeClass = "px-4 py-2 text-sm";
  else if (size === "md") sizeClass = "px-6 py-3 text-base";
  else if (size === "lg") sizeClass = "px-8 py-4 text-lg";

  // Variant styles
  let variantClass = "";
  if (variant === "primary")
    variantClass = "bg-blue-500 text-white hover:bg-blue-600";
  else if (variant === "success")
    variantClass = "bg-green-500 text-white hover:bg-green-600";
  else if (variant === "accent")
    variantClass = "bg-purple-500 text-white hover:bg-purple-600";
  else if (variant === "outlineLight")
    variantClass =
      "bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${sizeClass} ${variantClass} ${className}`}
    >
      {text}
    </button>
  );
}
