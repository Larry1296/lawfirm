import React from "react";

export default function Timeline({ items = [], className = "" }) {
  return (
    <div
      className={`
        w-full
        flex flex-col gap-6
        ${className}
      `}
    >
      {items.length === 0 ? (
        <div className="text-sm text-ui-muted dark:text-gray-400">
          No timeline events available
        </div>
      ) : (
        <div className="relative border-l border-ui-border dark:border-white/10 pl-6">
          {items.map((item, index) => (
            <div key={index} className="mb-6 relative">
              {/* DOT */}
              <span
                className={`
                  absolute -left-[9px] top-1.5
                  w-4 h-4 rounded-full
                  border-2 border-white dark:border-darkbrand-surface
                  ${
                    item.type === "success"
                      ? "bg-ui-success"
                      : item.type === "danger"
                        ? "bg-ui-danger"
                        : item.type === "warning"
                          ? "bg-brand-warning"
                          : item.type === "case"
                            ? "bg-brand-primary"
                            : "bg-ui-info"
                  }
                `}
              />

              {/* CONTENT */}
              <div
                className={`
                  p-4
                  rounded-xl2
                  bg-white dark:bg-darkbrand-surface
                  border border-ui-border
                  shadow-soft dark:shadow-darkcard
                  transition-all duration-300 ease-smooth
                  hover:shadow-card
                `}
              >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-darkbrand-text">
                    {item.title}
                  </h4>

                  {item.time && (
                    <span className="text-xs text-ui-muted dark:text-gray-500">
                      {item.time}
                    </span>
                  )}
                </div>

                {/* DESCRIPTION */}
                {item.description && (
                  <p className="text-xs text-ui-muted dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                )}

                {/* META */}
                {item.meta && (
                  <div className="mt-2 text-xs text-brand-primary">
                    {item.meta}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
