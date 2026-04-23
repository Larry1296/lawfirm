import React from "react";
import Spinner from "../primitives/Spinner";

export default function DataTable({
  columns = [],
  data = [],
  loading = false,
  emptyMessage = "No data available",
  onRowClick = null,
  className = "",
}) {
  return (
    <div
      className={`
        w-full overflow-x-auto
        rounded-xl2
        border border-ui-border
        bg-white dark:bg-darkbrand-surface
        shadow-card dark:shadow-darkcard
        ${className}
      `}
    >
      {/* TABLE */}
      <table className="min-w-full text-sm text-left">
        {/* HEADER */}
        <thead className="bg-gray-50 dark:bg-darkbrand-base/40 border-b border-ui-border">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 font-medium text-gray-600 dark:text-darkbrand-text/80 whitespace-nowrap"
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
              <td colSpan={columns.length} className="py-10 text-center">
                <Spinner size="md" label="Loading..." />
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="py-10 text-center text-ui-muted dark:text-gray-400"
              >
                {emptyMessage}
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
                  transition-all duration-200
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
