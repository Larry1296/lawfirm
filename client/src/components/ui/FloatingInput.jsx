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
  const bgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const borderClass = theme === "dark" ? "border-gray-600" : "border-gray-300";
  const textClass = theme === "dark" ? "text-white" : "text-gray-900";
  const labelActiveColor =
    theme === "dark" ? "text-brand-primary" : "text-brand-primary";
  const labelInactiveColor = "text-gray-400";

  // Should label float?
  const floatLabel = focused || value;

  return (
    <div className={`relative w-full mb-6 ${className}`}>
      {/* Input container */}
      <div
        className={`
          relative w-full rounded-xl border transition-all duration-200
          ${bgClass} ${borderClass}
          shadow-sm
          ${focused ? "translate-y-[-1px] shadow-md" : ""}
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        `}
      >
        {/* Actual input */}
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
          `}
        />

        {/* Floating label */}
        {label && (
          <label
            htmlFor={name}
            className={`
              absolute left-4 transition-all duration-200
              pointer-events-none
              ${floatLabel ? "-top-3 text-sm font-semibold" : "top-1/2 text-base font-normal"}
              ${floatLabel ? labelActiveColor : labelInactiveColor}
              transform -translate-y-1/2
            `}
          >
            {label}
          </label>
        )}

        {/* Password toggle */}
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
