import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-4 animate-fadeIn">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-darkbrand-text">
        Client Dashboard
      </h1>

      <p className="text-sm text-ui-muted">
        Welcome back. Track your cases and updates here.
      </p>

      {/* BASIC STRUCTURE */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white dark:bg-darkbrand-surface shadow-card">
          My Cases
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-darkbrand-surface shadow-card">
          Upcoming Hearings
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-darkbrand-surface shadow-card">
          Messages
        </div>
      </div>
    </div>
  );
}
