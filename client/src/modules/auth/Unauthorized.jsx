import React from "react";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-darkbrand-base font-sans">
      <div className="text-center p-8 max-w-md bg-white dark:bg-darkbrand-surface shadow-card rounded-xl">
        <h1 className="text-3xl font-bold text-red-500">403 - Unauthorized</h1>

        <p className="text-sm text-ui-muted mt-3">
          You don’t have permission to access this page.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="
              px-4 py-2 rounded-lg
              bg-ui-muted text-white
              hover:opacity-80 transition
            "
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="
              px-4 py-2 rounded-lg
              bg-brand-primary text-white
              hover:opacity-90 transition
            "
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
