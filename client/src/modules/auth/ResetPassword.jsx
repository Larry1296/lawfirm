import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to backend later
    console.log("Reset link requested for:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-darkbrand-base font-sans">
      <div className="w-full max-w-md p-6 bg-white dark:bg-darkbrand-surface shadow-card rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-darkbrand-text">
          Forgot Password
        </h1>

        <p className="text-sm text-ui-muted mt-2">
          Enter your email and we’ll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-4 py-3 rounded-lg
              border border-ui-border
              focus:outline-none focus:ring-2 focus:ring-brand-primary
              dark:bg-darkbrand-base dark:text-darkbrand-text
            "
            required
          />

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-brand-primary text-white
              hover:opacity-90 transition
            "
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
