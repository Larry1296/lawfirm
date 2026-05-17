import { useState, useContext } from "react";
import { Eye, EyeOff } from "lucide-react";
import ThemeContext from "../../core/store/ThemeContext";

export default function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  name,
  placeholder = " ",
  error,
  disabled = false,
  className = "",
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useContext(ThemeContext);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  // Theme-based classes
  const bgClass = theme === "dark" ? "bg-surface-dark" : "bg-surface-light";
  const borderClass =
    theme === "dark" ? "border-border-dark" : "border-border-light";
  const textClass =
    theme === "dark" ? "text-text-primary-dark" : "text-text-primary-light";
  const labelFocusClass =
    theme === "dark"
      ? "peer-focus:text-brand-primary"
      : "peer-focus:text-brand-primary";

  return (
    <div className={`relative w-full mb-4 ${className}`}>
      {/* Input Container */}
      <div
        className={`
          relative w-full rounded-xl border transition-all duration-200
          ${bgClass} ${borderClass}
          shadow-soft
          ${focused ? "translate-y-[-2px] shadow-medium" : ""}
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        `}
      >
        {/* Actual Input */}
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full px-4 py-4 rounded-xl bg-transparent outline-none
            ${textClass}
            placeholder:text-transparent
            peer
          `}
        />

        {/* Floating Label */}
        {label && (
          <label
            htmlFor={name}
            className={`
              absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm
              transition-all duration-200
              peer-placeholder-shown:top-1/2
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-0
              peer-focus:-translate-y-2
              peer-focus:text-sm
              ${labelFocusClass}
              pointer-events-none
            `}
          >
            {label}
          </label>
        )}

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
