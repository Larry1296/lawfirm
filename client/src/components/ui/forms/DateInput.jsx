import React from "react";

const getToday = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function DateInput({
  label,
  name,
  value,
  onChange,
  min,
  max,
  required = false,
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

      {/* INPUT */}
      <input
        type="date"
        name={name}
        value={value || getToday()} // fallback only
        onChange={onChange}
        min={min}
        max={max}
        required={required}
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
        "
      />
    </div>
  );
}
