import React, { forwardRef } from "react";
import Label from "./Label";

const Textarea = forwardRef(function Textarea(
  {
    label = "",
    name = "",
    value,
    onChange,
    placeholder = "",
    error = "",
    helperText = "",
    disabled = false,
    required = false,
    rows = 4,
    resize = "vertical", // none | vertical | horizontal | both
    size = "md", // sm | md | lg
    className = "",
    textareaClassName = "",
    ...props
  },
  ref,
) {
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base",
  };

  const resizeMap = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  const baseStyles = `
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
    <div className={`w-full ${className}`}>
      {label && (
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      )}

      <textarea
        ref={ref}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          ${baseStyles}
          ${sizes[size]}
          ${resizeMap[resize]}
          ${errorStyles}
          ${disabledStyles}
          ${textareaClassName}
        `}
        {...props}
      />

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

export default Textarea;
