import React from "react";
import Spinner from "../primitives/Spinner";
import EmptyState from "./EmptyState";

export default function Table({
  columns = [],
  data = [],
  loading = false,
  emptyTitle = "No records found",
  emptyDescription = "There is currently no data to display.",
  onRowClick,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        overflow-x-auto
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-card dark:shadow-darkcard
        ${className}
      `}
    >
      <table className="min-w-full text-sm">
        {/* HEADER */}
        <thead className="bg-gray-50 dark:bg-darkbrand-base/40 border-b border-ui-border">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-darkbrand-text/80 uppercase tracking-wide"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="p-10 text-center">
                <Spinner size="md" />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-6">
                <EmptyState title={emptyTitle} description={emptyDescription} />
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => onRowClick && onRowClick(row)}
                className={`
                  border-b border-ui-border
                  hover:bg-gray-50 dark:hover:bg-darkbrand-base/40
                  transition-colors duration-200
                  ${onRowClick ? "cursor-pointer" : ""}
                `}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3 text-gray-700 dark:text-darkbrand-text"
                  >
                    {col.render
                      ? col.render(row[col.accessor], row)
                      : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
