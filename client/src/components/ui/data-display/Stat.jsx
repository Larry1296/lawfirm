import React from "react";

export default function Stat({
  label,
  value,
  icon,
  trend,
  trendType = "neutral", // success | danger | neutral
  className = "",
}) {
  const trendStyles = {
    success: "text-ui-success",
    danger: "text-ui-danger",
    neutral: "text-ui-muted",
  };

  return (
    <div
      className={`
        w-full
        p-4
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-soft dark:shadow-darkcard
        transition-all duration-300 ease-smooth
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        {/* TEXT */}
        <div>
          <p className="text-xs text-ui-muted dark:text-gray-400">{label}</p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-darkbrand-text mt-1">
            {value}
          </h3>

          {trend && (
            <p className={`text-xs mt-1 ${trendStyles[trendType]}`}>{trend}</p>
          )}
        </div>

        {/* ICON */}
        {icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
