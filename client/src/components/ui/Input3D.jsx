import { useState } from "react";

export default function Input3D({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  error,
  disabled = false,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-2 text-sm text-[color:var(--text-muted)]">
          {label}
        </label>
      )}

      <div
        className={`
          relative rounded-xl transition-all duration-200
          bg-[color:var(--surface)]
          border border-[color:var(--border)]
          shadow-[var(--shadow-soft)]
          ${focused ? "translate-y-[-2px] shadow-[var(--shadow-medium)]" : ""}
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        `}
      >
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            w-full px-4 py-3 rounded-xl
            bg-transparent outline-none
            text-[color:var(--text-primary)]
            placeholder:text-[color:var(--text-muted)]
          "
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
