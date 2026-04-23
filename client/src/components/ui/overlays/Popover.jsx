import React, { useEffect } from "react";

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  size = "md", // sm | md | lg | xl
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose && onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div
        className={`
          relative
          w-full ${sizes[size]}
          mx-4
          rounded-xl3
          bg-white dark:bg-darkbrand-surface
          shadow-card dark:shadow-darkcard
          animate-fadeIn
          overflow-hidden
        `}
      >
        {/* HEADER */}
        {title && (
          <div className="flex items-center justify-between px-5 py-3 border-b border-ui-border">
            <h2 className="text-base font-semibold text-gray-800 dark:text-darkbrand-text">
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
        )}

        {/* CONTENT */}
        <div className="p-5 text-sm text-gray-700 dark:text-darkbrand-text">
          {children}
        </div>
      </div>
    </div>
  );
}
