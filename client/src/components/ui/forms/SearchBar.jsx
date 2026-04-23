import React, { useState } from "react";

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
  className = "",
  debounce = 300,
}) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!onSearch) return;

    // simple debounce (no extra libs)
    if (SearchBar.timer) clearTimeout(SearchBar.timer);

    SearchBar.timer = setTimeout(() => {
      onSearch(value);
    }, debounce);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        w-full
        flex items-center gap-2
        px-3 py-2
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-soft
        focus-within:ring-2 focus-within:ring-brand-primary
        transition-all duration-200 ease-smooth
        ${className}
      `}
    >
      {/* ICON */}
      <span className="text-ui-muted">🔍</span>

      {/* INPUT */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          outline-none
          text-sm
          text-gray-800 dark:text-darkbrand-text
        "
      />

      {/* CLEAR */}
      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            onSearch && onSearch("");
          }}
          className="text-ui-muted hover:text-ui-danger text-sm"
        >
          ✕
        </button>
      )}
    </form>
  );
}
