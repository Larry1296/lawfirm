// src/modules/auth/ResetPassword.jsx

import { motion } from "framer-motion";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Card from "../../components/ui/Card";
import Button3D from "../../components/ui/Button3D";
import PasswordInput from "../../components/ui/PasswordInput";

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

    // API call here
    console.log("Password reset:", newPassword);

    navigate("/login");
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative items-center justify-center p-10 overflow-hidden">
        {/* Animated Background */}
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

        {/* Branding */}
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
            <LockKeyhole size={90} />
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Set New Password</h1>

          <p className="text-blue-100">
            Choose a strong password to keep your account secure and protected.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 px-6 lg:p-8 bg-gray-50">
        <Card className="w-full max-w-md p-8">
          {/* BACK LINK */}
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to login
          </Link>

          {/* HEADING */}
          <div className="flex items-center gap-2 mb-6">
            <LockKeyhole className="text-blue-600" />

            <h2 className="text-2xl font-bold">Reset Password</h2>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Enter and confirm your new password.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <PasswordInput
              name="new_password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type={show ? "text" : "password"}
            />

            <PasswordInput
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={show ? "text" : "password"}
            />

            {/* SHOW PASSWORD */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={show}
                onChange={() => setShow(!show)}
              />
              Show password
            </label>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* BUTTON */}
            <Button3D
              type="submit"
              className="w-full"
              variant="primary"
              size="lg"
            >
              Reset Password
            </Button3D>

            {/* LOGIN LINK */}
            <p className="text-sm text-center mt-4 whitespace-nowrap">
              Remembered your password?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
