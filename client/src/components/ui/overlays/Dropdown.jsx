import React, { useEffect, useRef, useState } from "react";

export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (opt) => {
    onChange && onChange(opt.value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`w-full ${className}`} ref={ref}>
      {/* LABEL */}
      {label && (
        <label className="block text-sm mb-1 text-gray-700 dark:text-darkbrand-text">
          {label}
        </label>
      )}

      {/* TRIGGER */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          w-full
          px-3 py-2
          flex items-center justify-between
          rounded-xl2
          border border-ui-border
          bg-white dark:bg-darkbrand-surface
          text-gray-800 dark:text-darkbrand-text
          shadow-soft
          hover:border-brand-primary
          transition-all duration-200 ease-smooth
        "
      >
        <span className="text-sm">
          {selected ? selected.label : placeholder}
        </span>

        <span className="text-ui-muted">▾</span>
      </button>

      {/* MENU */}
      {open && (
        <div
          className="
            mt-2
            w-full
            rounded-xl2
            border border-ui-border
            bg-white dark:bg-darkbrand-surface
            shadow-card
            overflow-hidden
            animate-fadeIn
            z-50
          "
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={`
                w-full
                text-left
                px-3 py-2
                text-sm
                hover:bg-brand-secondary/20
                dark:hover:bg-white/10
                transition-all duration-150

                ${
                  opt.value === value
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "text-gray-700 dark:text-darkbrand-text"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
