import React from "react";

export default function Spinner({
  size = "md", // xs | sm | md | lg | xl
  variant = "primary", // primary | light | dark | success | danger | warning
  label = "",
  fullScreen = false,
  className = "",
}) {
  const sizes = {
    xs: "w-4 h-4 border-2",
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-[3px]",
    lg: "w-12 h-12 border-4",
    xl: "w-16 h-16 border-4",
  };

  const colors = {
    primary: "border-brand-primary/20 border-t-brand-primary",
    light: "border-white/20 border-t-white",
    dark: "border-darkbrand-text/20 border-t-darkbrand-text",
    success: "border-ui-success/20 border-t-ui-success",
    danger: "border-ui-danger/20 border-t-ui-danger",
    warning: "border-brand-warning/20 border-t-brand-warning",
  };

  const spinner = (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <div
        className={`
          rounded-full
          animate-spin
          ${sizes[size]}
          ${colors[variant]}
        `}
      />

      {label && (
        <span className="text-sm text-ui-muted dark:text-darkbrand-text/80">
          {label}
        </span>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm dark:bg-black/60">
        {spinner}
      </div>
    );
  }

  return spinner;
}
