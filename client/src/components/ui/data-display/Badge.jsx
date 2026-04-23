import React from "react";

export default function Badge({
  children,
  variant = "default", // default | success | danger | warning | info | primary
  className = "",
}) {
  const variants = {
    default:
      "bg-gray-100 text-gray-700 dark:bg-darkbrand-base/40 dark:text-darkbrand-text",
    success: "bg-ui-success/10 text-ui-success border border-ui-success/20",
    danger: "bg-ui-danger/10 text-ui-danger border border-ui-danger/20",
    warning:
      "bg-brand-warning/10 text-brand-warning border border-brand-warning/20",
    info: "bg-ui-info/10 text-ui-info border border-ui-info/20",
    primary:
      "bg-brand-primary/10 text-brand-primary border border-brand-primary/20",
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        text-xs font-medium
        rounded-xl2
        border
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
