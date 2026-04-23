import React from "react";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = "",
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange && onPageChange(page);
  };

  return (
    <div
      className={`
        w-full
        flex items-center justify-center gap-2
        mt-4
        ${className}
      `}
    >
      {/* PREV */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-3 py-1
          rounded-xl2
          border border-ui-border
          bg-white dark:bg-darkbrand-surface
          text-sm
          text-gray-700 dark:text-darkbrand-text
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:border-brand-primary
          transition-all duration-200 ease-smooth
        "
      >
        Prev
      </button>

      {/* PAGES */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`
              w-9 h-9
              rounded-xl2
              text-sm
              transition-all duration-200 ease-smooth

              ${
                page === currentPage
                  ? "bg-brand-primary text-white shadow-glow"
                  : "bg-white dark:bg-darkbrand-surface text-gray-700 dark:text-darkbrand-text border border-ui-border hover:border-brand-primary"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* NEXT */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-3 py-1
          rounded-xl2
          border border-ui-border
          bg-white dark:bg-darkbrand-surface
          text-sm
          text-gray-700 dark:text-darkbrand-text
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:border-brand-primary
          transition-all duration-200 ease-smooth
        "
      >
        Next
      </button>
    </div>
  );
}
