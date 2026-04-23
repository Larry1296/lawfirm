import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../core/api/authApi";
import { useAuthStore } from "../../core/store/authStore";
import { redirectByRole } from "../../core/utils/redirect";

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser(form);

      if (res.success) {
        login(res);

        navigate(redirectByRole(res.user.role));
      }
    } catch (err) {
      setError("Invalid email or password", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-darkbrand-base dark:to-darkbrand-surface">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-card bg-white dark:bg-darkbrand-surface">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-darkbrand-text">
          Legal System Login
        </h1>

        {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-brand-secondary outline-none"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-brand-secondary outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-primary text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
