import React, { useEffect } from "react";

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  visible = false,
}) {
  useEffect(() => {
    if (!visible || duration === 0) return;

    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [visible, duration, onClose]);

  if (!visible) return null;

  const variants = {
    success: "bg-ui-success/10 text-ui-success border-ui-success/30",
    error: "bg-ui-danger/10 text-ui-danger border-ui-danger/30",
    warning: "bg-brand-warning/10 text-brand-warning border-brand-warning/30",
    info: "bg-ui-info/10 text-ui-info border-ui-info/30",
  };

  return (
    <div className="fixed top-5 right-5 z-50 animate-fadeIn">
      <div
        className={`
          min-w-[260px]
          px-4 py-3
          rounded-xl2
          border
          shadow-card dark:shadow-darkcard
          bg-white dark:bg-darkbrand-surface
          text-sm flex items-start gap-3
          transition-all duration-300 ease-smooth
          ${variants[type]}
        `}
      >
        <span className="mt-1 w-2 h-2 rounded-full bg-current" />

        <p className="flex-1 text-gray-800 dark:text-darkbrand-text">
          {message}
        </p>

        <button
          onClick={onClose}
          className="text-ui-muted hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
