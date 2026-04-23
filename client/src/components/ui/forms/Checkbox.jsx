import React from "react";

export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  disabled = false,
  className = "",
}) {
  return (
    <label
      className={`
        flex items-center gap-2
        text-sm
        text-gray-700 dark:text-darkbrand-text
        select-none
        cursor-pointer
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="
          w-4 h-4
          rounded
          border-ui-border
          text-brand-primary
          focus:ring-2 focus:ring-brand-secondary
          dark:focus:ring-brand-primary
          dark:bg-darkbrand-base
        "
      />

      {label && <span>{label}</span>}
    </label>
  );
}
