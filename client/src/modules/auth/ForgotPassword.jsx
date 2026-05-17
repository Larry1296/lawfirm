// src/modules/auth/ForgotPassword.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Button3D from "../../components/ui/Button3D";
import FloatingInput from "../../components/ui/FloatingInput";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle API call to send reset link
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 bg-blue-700 relative overflow-hidden flex items-center justify-center p-10">
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

        <div className="relative text-center text-white max-w-md">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Mail size={90} className="text-white/90" />
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Reset Your Password</h1>

          <p className="text-blue-100">
            Enter your email address and we’ll send you instructions to reset
            your password securely.
          </p>

          <div className="mt-10 border border-white/30 rounded-2xl p-6 text-sm text-white/80">
            Secure recovery system for LegalAssist accounts
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 flex items-start justify-center pt-36 md:pt-40 lg:pt-44 p-8 bg-orange-50">
        <Card className="w-full max-w-md p-8">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>

          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            No worries. We’ll send a reset link to your email.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <FloatingInput
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button3D
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Send Reset Link
            </Button3D>
          </form>

          <p className="text-sm text-center mt-6">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
