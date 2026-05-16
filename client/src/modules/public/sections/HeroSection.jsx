import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button3D from "../../../components/ui/Button3D";

export default function HeroSection() {
  const cols = 12;
  const rows = 6;
  const grid = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push({
        x: (x - cols / 2) * 80,
        y: (y - rows / 2) * 80,
        delay: (x + y) * 0.05,
      });
    }
  }

  const colors = [
    "bg-blue-400/20",
    "bg-indigo-400/20",
    "bg-cyan-300/20",
    "bg-sky-400/20",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background floating blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full top-[-100px] left-[-80px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-indigo-200/30 blur-3xl rounded-full bottom-[-120px] right-[-100px]"
        />
      </div>

      {/* Subtle animated grid/bricks */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {grid.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, x: b.x + 60, y: b.y - 60 }}
            animate={{ opacity: 1, scale: 1, x: b.x, y: b.y }}
            transition={{
              delay: b.delay,
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`${colors[i % colors.length]} border border-white/10 shadow-lg`}
            style={{ width: 12, height: 12, borderRadius: 4 }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[color:var(--brand-primary)]"
        >
          Simplify Legal Operations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[color:var(--text-muted)]"
        >
          Manage cases, clients, and compliance seamlessly in one unified
          platform.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {/* Register Button */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link to="/register">
              <Button3D text="Start Free" variant="primary" size="lg" />
            </Link>
          </motion.div>

          {/* Login Button */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link to="/login">
              <Button3D
                text="Member Login"
                size="lg"
                className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                variant="outlineLight"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
