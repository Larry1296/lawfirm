import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-4 animate-fadeIn">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-darkbrand-text">
        Assistant Dashboard
      </h1>

      <p className="text-sm text-ui-muted">
        Welcome back. Here is your workspace overview.
      </p>

      {/* TEMP STRUCTURE (we will upgrade later) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white dark:bg-darkbrand-surface shadow-card">
          Pending Tasks
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-darkbrand-surface shadow-card">
          Assigned Cases
        </div>
      </div>
    </div>
  );
}
