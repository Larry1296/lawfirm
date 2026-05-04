import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { login } from "../../../services/usersApi"; // Make sure to import the login API call
import { useAuthStore } from "../../../stores/authStore"; // Import the Zustand store
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import PasswordInput from "../../../components/ui/PasswordInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Accessing setAuth function from the Zustand store
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await login({ email, password });

      const data = res.data?.data;

      if (!data) {
        setError(res.data?.message || "Login failed");
        setLoading(false);
        return;
      }

      const { user, access, refresh } = data;

      if (!user || !access) {
        setError("Invalid response structure. Please try again.");
        setLoading(false);
        return;
      }

      setAuth({ user, access, refresh });

      setTimeout(() => {
        if (user.role === "ADMIN") navigate("/admin/dashboard");
        else if (user.role === "STAFF") navigate("/staff/dashboard");
        else navigate("/client/dashboard");
      }, 0);
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("STATUS:", err.response?.status);
      console.log("RESPONSE DATA:", err.response?.data);

      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:w-1/2 bg-blue-700 relative overflow-hidden flex items-center justify-center p-10">
        {/* Animated blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-96 h-96 bg-blue-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"
        />
        {/* Content */}
        <div className="relative text-center text-white max-w-md">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <ShieldCheck size={90} className="text-white/90" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Secure Legal Access</h1>
          <p className="text-blue-100">
            Login to manage your cases, communicate with assistants, and track
            legal progress in real time.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8">
          {/* Back link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Lock className="text-blue-600" />
            <h2 className="text-2xl font-bold">Login</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <PasswordInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {/* Options */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={loading}
              loadingText="Logging in..."
            >
              Login
            </Button>

            {/* Footer */}
            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Create account
              </Link>
            </p>
          </form>
          {error && (
            <div className="text-red-500 mt-2 text-center">{error}</div>
          )}
        </Card>
      </div>
    </div>
  );
}
