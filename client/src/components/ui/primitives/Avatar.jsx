import React from "react";

export default function Avatar({
  src = "",
  alt = "User Avatar",
  name = "",
  size = "md",
  status = null, // online | offline | busy | away
  rounded = "full",
  className = "",
}) {
  const sizes = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl",
    "2xl": "w-24 h-24 text-2xl",
  };

  const radius = {
    full: "rounded-full",
    xl: "rounded-xl2",
    "2xl": "rounded-xl3",
  };

  const statusColors = {
    online: "bg-ui-success",
    offline: "bg-ui-muted",
    busy: "bg-ui-danger",
    away: "bg-brand-warning",
  };

  const initials = name
    ? name
        .trim()
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className={`relative inline-flex ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            ${radius[rounded]}
            object-cover
            border border-ui-border
            shadow-soft
          `}
        />
      ) : (
        <div
          className={`
            ${sizes[size]}
            ${radius[rounded]}
            flex items-center justify-center
            bg-gradient-to-br from-brand-primary to-brand-secondary
            text-white font-semibold
            shadow-soft
            border border-white/20
          `}
        >
          {initials}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute bottom-0 right-0
            w-3.5 h-3.5 rounded-full
            border-2 border-white dark:border-darkbrand-surface
            ${statusColors[status]}
          `}
        />
      )}
    </div>
  );
}
