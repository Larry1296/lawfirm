import React from "react";

export default function Drawer({
  isOpen,
  position = "right", // left | right
  title,
  children,
  onClose,
  width = "max-w-md",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* DRAWER */}
      <div
        className={`
          relative
          h-full
          w-full ${width}
          bg-white dark:bg-darkbrand-surface
          shadow-darkcard
          p-5
          animate-fadeIn

          ${position === "right" ? "ml-auto" : "mr-auto"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-darkbrand-text">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              w-8 h-8
              flex items-center justify-center
              rounded-xl2
              border border-ui-border
              text-gray-600 dark:text-darkbrand-text
              hover:border-brand-primary
              transition-all duration-200 ease-smooth
            "
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
