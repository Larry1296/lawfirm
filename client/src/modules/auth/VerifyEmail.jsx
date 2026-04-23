import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect backend verification API
    console.log("Verifying code:", code);

    // simulate success flow
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-darkbrand-base font-sans">
      <div className="w-full max-w-md p-6 bg-white dark:bg-darkbrand-surface shadow-card rounded-xl">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-darkbrand-text">
          Verify Email
        </h1>

        <p className="text-sm text-ui-muted mt-2">
          Enter the verification code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* CODE INPUT */}
          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
            Verify Email
          </button>
        </form>

        <p className="text-xs text-ui-muted mt-4 text-center">
          Didn’t receive code? Resend email
        </p>
      </div>
    </div>
  );
}
