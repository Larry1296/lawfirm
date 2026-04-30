import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ================= LEFT SECTION ================= */}
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

          <div className="mt-10 border border-white/30 rounded-2xl p-6 text-sm text-white/80">
            End-to-end encrypted legal case management platform
          </div>
        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8">
          {/* HEADER */}
          <div className="flex items-center gap-2 mb-6">
            <Lock className="text-blue-600" />
            <h2 className="text-2xl font-bold">Login</h2>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

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

            {/* BUTTON (REUSED) */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Sign In
            </Button>

            {/* FOOTER */}
            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 font-semibold">
                Create account
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
