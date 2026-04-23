import React from "react";

export default function Switch({
  checked,
  onChange,
  label,
  name,
  disabled = false,
  className = "",
}) {
  return (
    <label
      className={`
        flex items-center justify-between
        gap-3
        cursor-pointer
        select-none
        text-sm text-gray-700 dark:text-darkbrand-text
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {/* LABEL */}
      {label && <span>{label}</span>}

      {/* SWITCH WRAPPER */}
      <div className="relative">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />

        {/* TRACK */}
        <div
          className={`
            w-12 h-6
            rounded-full
            transition-all duration-300 ease-smooth

            /* 3D depth effect */
            shadow-inner
            border border-ui-border

            ${
              checked
                ? "bg-brand-primary/80 shadow-glow"
                : "bg-gray-200 dark:bg-darkbrand-base"
            }
          `}
        />

        {/* KNOB */}
        <div
          className={`
            absolute top-[2px] left-[2px]
            w-5 h-5
            rounded-full
            bg-white dark:bg-darkbrand-text
            shadow-card
            transition-all duration-300 ease-smooth

            ${checked ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </div>
    </label>
  );
}
