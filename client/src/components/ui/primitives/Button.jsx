import React from "react";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  onClick,
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl2 transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-darkbrand-surface select-none";

  const variants = {
    primary:
      "bg-brand-primary text-white hover:opacity-90 shadow-soft focus:ring-brand-secondary",

    secondary:
      "bg-brand-secondary text-brand-primary hover:opacity-90 shadow-soft focus:ring-brand-primary",

    accent:
      "bg-brand-accent text-gray-900 hover:opacity-90 shadow-soft focus:ring-brand-warning",

    warning:
      "bg-brand-warning text-white hover:opacity-90 shadow-soft focus:ring-brand-warning",

    success:
      "bg-ui-success text-white hover:opacity-90 shadow-soft focus:ring-ui-success",

    danger:
      "bg-ui-danger text-white hover:opacity-90 shadow-soft focus:ring-ui-danger",

    info: "bg-ui-info text-white hover:opacity-90 shadow-soft focus:ring-ui-info",

    outline:
      "border border-ui-border bg-white text-gray-700 hover:bg-gray-50 shadow-soft focus:ring-brand-primary dark:bg-darkbrand-surface dark:text-darkbrand-text dark:border-gray-700 dark:hover:bg-darkbrand-base",

    ghost:
      "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-brand-primary dark:text-darkbrand-text dark:hover:bg-darkbrand-base",

    dark: "bg-darkbrand-surface text-darkbrand-text hover:bg-darkbrand-base shadow-darkcard focus:ring-brand-secondary",
  };

  const sizes = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-7 py-3.5 text-lg",
  };

  const disabledStyles = "opacity-60 cursor-not-allowed pointer-events-none";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${disabled || loading ? disabledStyles : ""}
        ${className}
      `}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      )}

      {!loading && leftIcon && <span>{leftIcon}</span>}

      <span>{children}</span>

      {!loading && rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
