import React from "react";
import Input from "../primitives/Input";
import Button from "../primitives/Button";
import Select from "../forms/Select";

export default function FilterBar({
  searchValue = "",
  onSearchChange,
  filters = [],
  onFilterChange,
  onReset,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        flex flex-col md:flex-row md:items-center gap-3
        p-4
        bg-white dark:bg-darkbrand-surface
        border border-ui-border
        rounded-xl2
        shadow-soft
        ${className}
      `}
    >
      {/* SEARCH */}
      <div className="flex-1">
        <Input
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>

      {/* FILTERS */}
      {filters.map((filter, idx) => (
        <div key={idx} className="min-w-[160px]">
          <Select
            label={filter.label}
            value={filter.value}
            options={filter.options}
            onChange={(val) => onFilterChange(filter.name, val)}
          />
        </div>
      ))}

      {/* RESET */}
      {onReset && (
        <div className="flex-shrink-0">
          <Button variant="ghost" onClick={onReset}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
}
