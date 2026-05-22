// src/modules/auth/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, ArrowLeft } from "lucide-react";

import { register } from "../../services/usersApi";
import Card from "../../components/ui/Card";
import Button3D from "../../components/ui/Button3D";
import FloatingInput from "../../components/ui/FloatingInput";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const formData = {
      full_name: form.fullName,
      email: form.email,
      national_id: form.nationalId,
      phone_number: form.phoneNumber,
      password: form.password,
    };

    try {
      const res = await register(formData);
      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Registration failed. Try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-700 relative overflow-hidden items-center justify-center p-10">
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
            <ShieldCheck size={90} className="text-white/90" />
          </motion.div>

          <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
          <p className="text-blue-100">
            Join LegalAssist and start managing your legal cases securely and
            efficiently.
          </p>

          <div className="mt-10 border border-white/30 rounded-2xl p-6 text-sm text-white/80">
            Secure onboarding for clients, assistants, and legal teams
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex items-center justify-center py-10 px-6 lg:p-8 bg-orange-50">
        <Card className="w-full max-w-md p-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="flex items-center gap-2 mb-6">
            <UserPlus className="text-blue-600" />
            <h2 className="text-2xl font-bold">Register</h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <FloatingInput
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="National ID"
              name="nationalId"
              value={form.nationalId}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <FloatingInput
              label="Repeat Password"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <Button3D
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button3D>

            {error && (
              <div className="text-red-500 mt-2 text-center">{error}</div>
            )}
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
