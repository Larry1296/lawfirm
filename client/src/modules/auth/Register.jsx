import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../../../src1/services/usersApi"; // import register API call
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function Register() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      full_name: e.target.full_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log("Form Data Sent:", formData);
    try {
      const res = await register(formData); // Call your register API

      // On success
      console.log(res.data); // Handle your response (store tokens, etc.)
      navigate("/login"); // Or auto-login and redirect to dashboard
    } catch (err) {
      setError("Registration failed. Please try again.", err);
      console.error(
        "Registration failed:",
        error.response?.data || error.message,
      );
    } finally {
      setLoading(false);
    }
  };

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

      {/* ================= RIGHT SECTION ================= */}
      <div className="lg:w-1/2 flex items-start justify-center pt-36 md:pt-40 lg:pt-44 p-8 bg-orange-50">
        <Card className="w-full max-w-md p-8">
          {/* Back link */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-blue-600 mb-6 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          {/* HEADER */}
          <div className="flex items-center gap-2 mb-6">
            <UserPlus className="text-blue-600" />
            <h2 className="text-2xl font-bold">Register</h2>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* FULL NAME */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                name="full_name"
                type="text"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                name="confirm_password"
                type={show ? "text" : "password"}
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Repeat Password"
              />
            </div>

            {/* SHOW PASSWORD */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={show}
                onChange={() => setShow(!show)}
              />
              Show password
            </label>

            {/* BUTTON */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          {error && (
            <div className="text-red-500 mt-2 text-center">{error}</div>
          )}

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
