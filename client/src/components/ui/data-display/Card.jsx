import React from "react";

export default function Card({
  children,
  title,
  subtitle,
  icon,
  footer,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-card dark:shadow-darkcard
        transition-all duration-300 ease-smooth
        ${className}
      `}
    >
      {/* HEADER */}
      {(title || subtitle || icon) && (
        <div className="flex items-start justify-between p-5 border-b border-ui-border dark:border-white/10">
          <div>
            {title && (
              <h3 className="text-base font-semibold text-gray-800 dark:text-darkbrand-text">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="text-sm text-ui-muted dark:text-gray-400 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {icon && (
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* BODY */}
      <div className="p-5">{children}</div>

      {/* FOOTER */}
      {footer && (
        <div className="p-5 border-t border-ui-border dark:border-white/10">
          {footer}
        </div>
      )}
    </div>
  );
}
