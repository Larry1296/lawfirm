import React from "react";

export default function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  disabled = false,
  error,
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* LABEL */}
      {label && (
        <label className="block text-sm mb-1 text-gray-700 dark:text-darkbrand-text">
          {label}
        </label>
      )}

      {/* SELECT */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="
          w-full
          px-3 py-2
          rounded-xl2
          border border-ui-border
          bg-white dark:bg-darkbrand-surface
          text-gray-800 dark:text-darkbrand-text
          focus:outline-none
          focus:ring-2 focus:ring-brand-primary
          transition-all duration-200 ease-smooth
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {/* PLACEHOLDER */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* OPTIONS */}
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* ERROR */}
      {error && (
        <p className="text-xs text-ui-danger mt-1 animate-fadeIn">{error}</p>
      )}
    </div>
  );
}
