import React from "react";

export default function ConfirmDialogue({
  isOpen,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  type = "warning", // success | warning | danger | info
}) {
  if (!isOpen) return null;

  const variants = {
    success: "text-ui-success",
    warning: "text-brand-warning",
    danger: "text-ui-danger",
    info: "text-ui-info",
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full max-w-md
          rounded-xl2
          bg-white dark:bg-darkbrand-surface
          border border-ui-border
          shadow-card dark:shadow-darkcard
          p-6
          animate-fadeIn
        "
      >
        {/* TITLE */}
        <h2
          className={`
            text-lg font-semibold
            ${variants[type]}
          `}
        >
          {title}
        </h2>

        {/* MESSAGE */}
        <p className="text-sm text-gray-700 dark:text-darkbrand-text mt-2">
          {message}
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            className="
              px-4 py-2
              text-sm
              rounded-xl2
              border border-ui-border
              bg-white dark:bg-darkbrand-base
              text-gray-700 dark:text-darkbrand-text
              hover:border-brand-primary
              transition-all duration-200 ease-smooth
            "
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            className="
              px-4 py-2
              text-sm
              rounded-xl2
              bg-brand-primary
              text-white
              shadow-glow
              hover:opacity-90
              transition-all duration-200 ease-smooth
            "
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
