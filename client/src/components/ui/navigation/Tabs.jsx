import React, { useState } from "react";

export default function Tabs({
  tabs = [],
  defaultTab = 0,
  onChange,
  className = "",
}) {
  const [active, setActive] = useState(defaultTab);

  const handleClick = (index) => {
    setActive(index);
    onChange && onChange(tabs[index], index);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* TAB HEADER */}
      <div
        className="
          flex items-center gap-2
          border-b border-ui-border
          dark:border-white/10
        "
      >
        {tabs.map((tab, index) => {
          const isActive = index === active;

          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`
                px-4 py-2
                text-sm
                transition-all duration-200 ease-smooth
                relative

                ${
                  isActive
                    ? "text-brand-primary font-medium"
                    : "text-ui-muted dark:text-gray-400 hover:text-gray-800 dark:hover:text-darkbrand-text"
                }
              `}
            >
              {tab.label}

              {/* ACTIVE INDICATOR */}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brand-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div className="mt-4">{tabs[active]?.content}</div>
    </div>
  );
}
