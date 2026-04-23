import React from "react";

export default function List({
  items = [],
  renderItem,
  emptyState = null,
  className = "",
  itemClassName = "",
}) {
  if (!items || items.length === 0) {
    return (
      <div className="w-full">
        {emptyState || (
          <div className="text-sm text-ui-muted dark:text-gray-400 p-4 border border-ui-border rounded-xl2 bg-white dark:bg-darkbrand-surface">
            No items available
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`
        w-full
        flex flex-col
        gap-2
        ${className}
      `}
    >
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className={`
            w-full
            p-3
            rounded-xl2
            border border-ui-border
            bg-white dark:bg-darkbrand-surface
            shadow-soft dark:shadow-darkcard
            transition-all duration-200 ease-smooth
            hover:shadow-card
            ${itemClassName}
          `}
        >
          {renderItem ? renderItem(item, index) : JSON.stringify(item)}
        </div>
      ))}
    </div>
  );
}
