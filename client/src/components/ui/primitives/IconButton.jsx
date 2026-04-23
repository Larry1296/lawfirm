import React from "react";

export default function IconButton({
  icon,
  type = "button",
  variant = "primary", // primary | secondary | ghost | outline | danger | dark
  size = "md",
  rounded = "full", // full | xl | 2xl
  loading = false,
  disabled = false,
  tooltip = "",
  className = "",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-darkbrand-surface select-none";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:opacity-90 shadow-soft focus:ring-brand-secondary",

    secondary:
      "bg-brand-secondary text-brand-primary hover:opacity-90 shadow-soft focus:ring-brand-primary",

    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-brand-primary dark:text-darkbrand-text dark:hover:bg-darkbrand-base",

    outline:
      "border border-ui-border bg-white text-gray-700 hover:bg-gray-50 shadow-soft focus:ring-brand-primary dark:bg-darkbrand-surface dark:text-darkbrand-text dark:border-gray-700 dark:hover:bg-darkbrand-base",

    danger:
      "bg-ui-danger text-white hover:opacity-90 shadow-soft focus:ring-ui-danger",

    dark: "bg-darkbrand-surface text-darkbrand-text hover:bg-darkbrand-base shadow-darkcard focus:ring-brand-secondary",
  };

  const sizes = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
    xl: "w-16 h-16 text-xl",
  };

  const radius = {
    full: "rounded-full",
    xl: "rounded-xl2",
    "2xl": "rounded-xl3",
  };

  const disabledStyles = "opacity-60 cursor-not-allowed pointer-events-none";

  return (
    <button
      type={type}
      title={tooltip}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${radius[rounded]}
        ${disabled || loading ? disabledStyles : ""}
        ${className}
      `}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      ) : (
        icon
      )}
    </button>
  );
}
