import React from "react";

export default function ActivityItem({
  title,
  description,
  time,
  type = "info", // info | success | warning | danger | case
  icon = null,
  className = "",
}) {
  const typeStyles = {
    info: "bg-ui-info/10 text-ui-info border-ui-info/20",
    success: "bg-ui-success/10 text-ui-success border-ui-success/20",
    warning: "bg-brand-warning/10 text-brand-warning border-brand-warning/20",
    danger: "bg-ui-danger/10 text-ui-danger border-ui-danger/20",
    case: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
  };

  const dotStyles = {
    info: "bg-ui-info",
    success: "bg-ui-success",
    warning: "bg-brand-warning",
    danger: "bg-ui-danger",
    case: "bg-brand-primary",
  };

  return (
    <div
      className={`
        flex items-start gap-3
        p-3 rounded-xl2
        border
        bg-white dark:bg-darkbrand-surface
        shadow-soft dark:shadow-darkcard
        transition-all duration-300 ease-smooth
        ${typeStyles[type]}
        ${className}
      `}
    >
      {/* ICON / DOT */}
      <div className="mt-1 flex-shrink-0">
        {icon ? (
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-darkbrand-base shadow-soft">
            {icon}
          </div>
        ) : (
          <div className={`w-2.5 h-2.5 rounded-full ${dotStyles[type]}`} />
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 dark:text-darkbrand-text">
          {title}
        </p>

        {description && (
          <p className="text-xs text-ui-muted dark:text-gray-400 mt-0.5">
            {description}
          </p>
        )}
      </div>

      {/* TIME */}
      {time && (
        <span className="text-[11px] text-ui-muted dark:text-gray-500 whitespace-nowrap">
          {time}
        </span>
      )}
    </div>
  );
}
