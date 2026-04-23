import React, { useState } from "react";

export default function Tooltip({
  content,
  children,
  position = "top", // top | bottom | left | right
  className = "",
}) {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {/* TRIGGER */}
      {children}

      {/* TOOLTIP */}
      {visible && (
        <div
          className={`
            absolute z-50
            px-2 py-1
            text-xs
            rounded-xl2
            bg-gray-900 text-white
            dark:bg-darkbrand-base dark:text-darkbrand-text
            shadow-soft
            whitespace-nowrap
            animate-fadeIn
            ${positions[position]}
            ${className}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
}
