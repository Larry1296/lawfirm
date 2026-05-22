// src/modules/auth/Login.jsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";

import { login } from "../../services/usersApi";
import AuthContext from "../../core/store/AuthContext";

import Card from "../../components/ui/Card";
import Button3D from "../../components/ui/Button3D";
import FloatingInput from "../../components/ui/FloatingInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login: authLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await login({
        email,
        password,
      });

      const data = res.data?.data;

      // INVALID RESPONSE
      if (!data) {
        setError(res.data?.message || "Login failed");
        return;
      }

      const { user, access, refresh } = data;

      // INVALID USER DATA
      if (!user || !access) {
        setError("Invalid login response from server.");
        return;
      }

      // SAVE AUTH STATE
      authLogin({
        user,
        access,
        refresh,
      });

      // =========================
      // ROLE-BASED REDIRECT
      // =========================

      const role = user.role;
      const firmRole = user.firm_role;

      // =========================
      // ADMIN
      // =========================
      if (role === "ADMIN") {
        navigate("/admin/dashboard");
      }

      // =========================
      // CLIENTS
      // =========================
      else if (role === "CLIENT") {
        // SELF-REGISTERED PUBLIC CLIENT
        if (!firmRole) {
          navigate("/portal/dashboard");
        }

        // FIRM CLIENT
        else if (firmRole === "CLIENT") {
          navigate("/client/dashboard");
        }

        // FALLBACK
        else {
          navigate("/");
        }
      }

      // =========================
      // STAFF
      // =========================
      else if (role === "STAFF") {
        // LAWYER
        if (firmRole === "LAWYER") {
          navigate("/lawyer/dashboard");
        }

        // SECRETARY
        else if (firmRole === "SECRETARY") {
          navigate("/secretary/dashboard");
        }

        // UNKNOWN STAFF TYPE
        else {
          navigate("/");
        }
      }

      // =========================
      // UNKNOWN ROLE
      // =========================
      else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login failed:", err);

      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative items-center justify-center p-10 overflow-hidden">
        {/* Animated Background Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-blue-500/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl"
        />

        {/* Branding Content */}
        <div className="relative text-center text-white max-w-md">
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="flex justify-center mb-6"
          >
            <ShieldCheck size={90} />
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Secure Legal Access</h1>

          <p className="text-blue-100">
            Login to manage cases, documents, and communication securely.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="
        w-full lg:w-1/2
        flex items-center justify-center
        min-h-screen lg:min-h-0
        px-6 py-24 lg:px-10
        bg-gray-50
          "
      >
        <Card className="w-full max-w-md p-8">
          {/* BACK LINK */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* HEADING */}
          <div className="flex items-center gap-2 mb-6">
            <Lock className="text-blue-600" />

            <h4 className="text-3xl font-bold text-gray-800">Login</h4>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            <FloatingInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FloatingInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* OPTIONS */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-800">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* SUBMIT BUTTON */}
            <Button3D
              type="submit"
              className="w-full"
              variant="primary"
              size="lg"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button3D>

            {/* REGISTER LINK */}
            <p className="text-sm text-center mt-6 text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="
                    whitespace-nowrap
                    text-blue-600
                    font-bold
                    hover:text-blue-700
                    transition-colors duration-200
                  "
              >
                Create account
              </Link>
            </p>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-center text-sm mt-2">{error}</p>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
}
