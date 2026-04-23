import React from "react";

export default function Divider({
  orientation = "horizontal", // horizontal | vertical
  variant = "solid", // solid | dashed | dotted | gradient
  spacing = "md",
  label = "",
  className = "",
}) {
  const spacingMap = {
    xs: orientation === "horizontal" ? "my-2" : "mx-2",
    sm: orientation === "horizontal" ? "my-3" : "mx-3",
    md: orientation === "horizontal" ? "my-4" : "mx-4",
    lg: orientation === "horizontal" ? "my-6" : "mx-6",
    xl: orientation === "horizontal" ? "my-8" : "mx-8",
  };

  const lineStyles = {
    solid: "border-ui-border",
    dashed: "border-ui-border border-dashed",
    dotted: "border-ui-border border-dotted",
    gradient:
      "border-transparent bg-gradient-to-r from-transparent via-brand-secondary to-transparent",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={`
          h-full min-h-[24px] w-px
          ${variant === "gradient" ? lineStyles.gradient : `border-l ${lineStyles[variant]}`}
          ${spacingMap[spacing]}
          ${className}
        `}
      />
    );
  }

  if (label) {
    return (
      <div
        className={`flex items-center gap-4 w-full ${spacingMap[spacing]} ${className}`}
      >
        <div
          className={`
            flex-1 border-t
            ${variant !== "gradient" ? lineStyles[variant] : ""}
            ${variant === "gradient" ? "border-transparent bg-gradient-to-r from-transparent via-ui-border to-transparent h-px" : ""}
          `}
        />

        <span className="text-sm text-ui-muted dark:text-darkbrand-text/70 whitespace-nowrap">
          {label}
        </span>

        <div
          className={`
            flex-1 border-t
            ${variant !== "gradient" ? lineStyles[variant] : ""}
            ${variant === "gradient" ? "border-transparent bg-gradient-to-r from-transparent via-ui-border to-transparent h-px" : ""}
          `}
        />
      </div>
    );
  }

  return (
    <hr
      className={`
        w-full border-t
        ${variant !== "gradient" ? lineStyles[variant] : "border-transparent bg-gradient-to-r from-transparent via-ui-border to-transparent h-px"}
        ${spacingMap[spacing]}
        ${className}
      `}
    />
  );
}
