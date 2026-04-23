import React from "react";

export default function MetricCard({
  title,
  value,
  icon,
  change,
  changeType = "neutral", // success | danger | neutral
  description,
  className = "",
}) {
  const changeStyles = {
    success: "text-ui-success",
    danger: "text-ui-danger",
    neutral: "text-ui-muted",
  };

  return (
    <div
      className={`
        w-full
        p-5
        rounded-xl2
        bg-white dark:bg-darkbrand-surface
        border border-ui-border
        shadow-card dark:shadow-darkcard
        transition-all duration-300 ease-smooth
        hover:shadow-soft
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        {/* LEFT */}
        <div>
          <p className="text-sm text-ui-muted dark:text-gray-400">{title}</p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-darkbrand-text mt-1">
            {value}
          </h3>

          {description && (
            <p className="text-xs text-ui-muted dark:text-gray-500 mt-1">
              {description}
            </p>
          )}
        </div>

        {/* ICON */}
        {icon && (
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
            {icon}
          </div>
        )}
      </div>

      {/* CHANGE */}
      {change && (
        <div className="mt-4">
          <span className={`text-xs font-medium ${changeStyles[changeType]}`}>
            {change}
          </span>
        </div>
      )}
    </div>
  );
}
