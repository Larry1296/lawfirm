import React from "react";

export default function Skeleton({
  variant = "rect", // rect | text | circle | card | avatar
  width = "100%",
  height = "",
  lines = 3,
  animate = true,
  rounded = "xl",
  className = "",
}) {
  const animation = animate ? "animate-pulse" : "";

  const radius = {
    sm: "rounded-md",
    md: "rounded-lg",
    xl: "rounded-xl2",
    "2xl": "rounded-xl3",
    full: "rounded-full",
  };

  const base = "bg-gray-200 dark:bg-darkbrand-base/80";

  if (variant === "circle" || variant === "avatar") {
    return (
      <div
        className={`
          ${base}
          ${animation}
          rounded-full
          ${className}
        `}
        style={{
          width: width || "48px",
          height: height || width || "48px",
        }}
      />
    );
  }

  if (variant === "text") {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`
              ${base}
              ${animation}
              ${radius[rounded]}
              h-4
            `}
            style={{
              width: index === lines - 1 ? "70%" : "100%",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`
          p-5 space-y-4
          bg-white dark:bg-darkbrand-surface
          shadow-card dark:shadow-darkcard
          ${radius[rounded]}
          ${className}
        `}
      >
        <div className={`${base} ${animation} h-6 w-1/3 ${radius.md}`} />
        <div className={`${base} ${animation} h-4 w-full ${radius.md}`} />
        <div className={`${base} ${animation} h-4 w-5/6 ${radius.md}`} />
        <div className={`${base} ${animation} h-10 w-28 ${radius.md}`} />
      </div>
    );
  }

  return (
    <div
      className={`
        ${base}
        ${animation}
        ${radius[rounded]}
        ${className}
      `}
      style={{
        width,
        height: height || "1rem",
      }}
    />
  );
}
