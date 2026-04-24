import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerClient } from "../../../core/api/authApi";

export default function ClientSignup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    national_id: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ===============================
    // FRONTEND VALIDATION
    // ===============================
    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: form.email,
        password: form.password,
        full_name: form.full_name,
        national_id: form.national_id,
        phone_number: form.phone_number,
      };

      const res = await registerClient(payload);

      if (res.success) {
        // ===============================
        // AUTO LOGIN STORAGE (IF BACKEND RETURNS TOKENS)
        // ===============================
        if (res.access && res.refresh) {
          localStorage.setItem("access", res.access);
          localStorage.setItem("refresh", res.refresh);
          localStorage.setItem("user", JSON.stringify(res.user));
        }

        // ===============================
        // REDIRECT LOGIC
        // ===============================
        navigate("/client/dashboard");
      }
    } catch (err) {
      console.error(err);

      const message =
        err.response?.data?.errors ||
        err.response?.data?.message ||
        "Registration failed";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-darkbrand-base dark:to-darkbrand-surface">
      <div className="w-full max-w-md bg-white dark:bg-darkbrand-surface p-8 rounded-2xl shadow-card">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-darkbrand-text">
          Client Registration
        </h2>

        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="national_id"
            placeholder="National ID"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white py-3 rounded-xl hover:opacity-90"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
