// src/modules/auth/ResetPassword.jsx
import { motion } from "framer-motion";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Card from "../../../components/ui/Card";
import Button3D from "../../../components/ui/Button3D";
import PasswordInput from "../../../components/ui/PasswordInput";
import FloatingInput from "../../../components/ui/FloatingInput";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // API call to reset password goes here
    console.log("Password reset:", newPassword);
    navigate("/login");
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
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <LockKeyhole size={90} className="text-white/90" />
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Set New Password</h1>

          <p className="text-blue-100">
            Choose a strong password to secure your LegalAssist account.
          </p>

          <div className="mt-10 border border-white/30 rounded-2xl p-6 text-sm text-white/80">
            Your new password will replace the old one immediately after update.
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 bg-orange-50 flex justify-center pt-36 px-8 pb-8">
        <Card className="w-full max-w-md p-8 h-fit">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>

          <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter and confirm your new password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <PasswordInput
              name="new_password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <PasswordInput
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={show}
                onChange={() => setShow(!show)}
              />
              Show password
            </label>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button3D
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Reset Password
            </Button3D>
          </form>

          <p className="text-sm text-center mt-6 text-gray-500">
            After reset, you’ll be redirected to login.
          </p>
        </Card>
      </div>
    </div>
  );
}
