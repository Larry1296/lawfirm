import React from "react";

export default function Label({
  children,
  htmlFor = "",
  required = false,
  optional = false,
  size = "md", // sm | md | lg
  muted = false,
  className = "",
}) {
  const sizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const tone = muted
    ? "text-ui-muted dark:text-gray-400"
    : "text-gray-700 dark:text-darkbrand-text";

  return (
    <label
      htmlFor={htmlFor}
      className={`
        inline-flex items-center gap-1.5
        font-medium
        ${sizes[size]}
        ${tone}
        ${className}
      `}
    >
      <span>{children}</span>

      {required && <span className="text-ui-danger">*</span>}

      {optional && !required && (
        <span className="text-ui-muted dark:text-gray-500 text-xs font-normal">
          (optional)
        </span>
      )}
    </label>
  );
}
