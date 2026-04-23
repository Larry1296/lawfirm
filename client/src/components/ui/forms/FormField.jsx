import React from "react";

export default function FormField({
  label,
  children,
  error,
  hint,
  required = false,
  className = "",
}) {
  return (
    <div className={`w-full mb-4 ${className}`}>
      {/* LABEL */}
      {label && (
        <label className="block text-sm mb-1 text-gray-700 dark:text-darkbrand-text">
          {label}
          {required && <span className="text-ui-danger ml-1">*</span>}
        </label>
      )}

      {/* INPUT / CONTROL */}
      <div>{children}</div>

      {/* HINT */}
      {hint && !error && <p className="text-xs text-ui-muted mt-1">{hint}</p>}

      {/* ERROR */}
      {error && (
        <p className="text-xs text-ui-danger mt-1 animate-fadeIn">{error}</p>
      )}
    </div>
  );
}
