import React from "react";

export default function EmptyState({
  title = "No data found",
  description = "There is nothing to display at the moment.",
  icon,
  action,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        flex flex-col items-center justify-center text-center
        p-10
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-soft dark:shadow-darkcard
        ${className}
      `}
    >
      {/* ICON */}
      {icon && (
        <div className="mb-4 text-brand-primary">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-primary/10">
            {icon}
          </div>
        </div>
      )}

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 dark:text-darkbrand-text">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-ui-muted dark:text-gray-400 mt-2 max-w-md">
        {description}
      </p>

      {/* ACTION */}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
