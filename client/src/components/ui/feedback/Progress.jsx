import React from "react";

export default function Progress({
  status = "Unknown",
  value = 0,
  max = 100,
  showPercent = true,
  variant = "primary", // primary | success | danger | warning | info
  className = "",
}) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  const variants = {
    primary: "bg-brand-primary",
    success: "bg-ui-success",
    danger: "bg-ui-danger",
    warning: "bg-brand-warning",
    info: "bg-ui-info",
  };

  return (
    <div className={`w-full ${className}`}>
      {/* HEADER (STATUS + PERCENT) */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-gray-700 dark:text-darkbrand-text">
          {status}
        </span>

        {showPercent && (
          <span className="text-xs text-ui-muted dark:text-gray-400">
            {Math.round(percent)}%
          </span>
        )}
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 rounded-xl bg-gray-100 dark:bg-darkbrand-base overflow-hidden">
        <div
          className={`
            h-full rounded-xl
            transition-all duration-300 ease-smooth
            ${variants[variant]}
          `}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
