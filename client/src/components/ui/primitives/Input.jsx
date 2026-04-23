import React, { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    type = "text",
    label = "",
    name = "",
    value,
    onChange,
    placeholder = "",
    error = "",
    helperText = "",
    leftIcon = null,
    rightIcon = null,
    disabled = false,
    required = false,
    fullWidth = true,
    size = "md", // sm | md | lg
    className = "",
    inputClassName = "",
    ...props
  },
  ref,
) {
  const sizes = {
    sm: "h-10 px-3 text-sm",
    md: "h-12 px-4 text-sm",
    lg: "h-14 px-5 text-base",
  };

  const wrapperWidth = fullWidth ? "w-full" : "";

  const baseInput = `
    ${sizes[size]}
    w-full
    rounded-xl2
    border
    bg-white
    text-gray-800
    placeholder:text-ui-muted
    shadow-soft
    outline-none
    transition-all duration-300 ease-smooth
    focus:ring-2 focus:ring-brand-secondary focus:border-brand-primary
    dark:bg-darkbrand-surface
    dark:text-darkbrand-text
    dark:border-gray-700
    dark:placeholder:text-gray-500
    dark:focus:ring-brand-secondary
  `;

  const errorStyles = error
    ? "border-ui-danger focus:ring-ui-danger focus:border-ui-danger"
    : "border-ui-border";

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed bg-gray-100 dark:bg-darkbrand-base"
    : "";

  return (
    <div className={`${wrapperWidth} ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-gray-700 dark:text-darkbrand-text"
        >
          {label}
          {required && <span className="ml-1 text-ui-danger">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ui-muted dark:text-gray-400">
            {leftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            ${baseInput}
            ${errorStyles}
            ${disabledStyles}
            ${leftIcon ? "pl-10" : ""}
            ${rightIcon ? "pr-10" : ""}
            ${inputClassName}
          `}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-muted dark:text-gray-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error ? (
        <p className="mt-2 text-sm text-ui-danger">{error}</p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-ui-muted dark:text-gray-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

export default Input;
