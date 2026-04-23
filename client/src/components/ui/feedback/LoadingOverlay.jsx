import React from "react";
import Spinner from "./Spinner";

export default function LoadingOverlay({
  isVisible = false,
  text = "Loading...",
  className = "",
}) {
  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 dark:bg-black/60
        backdrop-blur-sm
        ${className}
      `}
    >
      <div
        className="
          flex flex-col items-center gap-3
          px-6 py-5
          rounded-xl2
          bg-white dark:bg-darkbrand-surface
          shadow-card dark:shadow-darkcard
          border border-ui-border
          min-w-[160px]
        "
      >
        <Spinner size="md" />

        <p className="text-sm text-gray-700 dark:text-darkbrand-text">{text}</p>
      </div>
    </div>
  );
}
