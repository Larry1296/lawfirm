import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button3D from "../../../components/ui/Button3D";

export default function HeroSection() {
  const cols = 12;
  const rows = 6;
  const grid = [];

  // Generate grid positions
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const offsetX = (x - cols / 2) * 80;
      const offsetY = (y - rows / 2) * 80;
      grid.push({ x: offsetX, y: offsetY, delay: (x + y) * 0.05 });
    }
  }

  const colors = [
    "bg-blue-400/30",
    "bg-indigo-400/30",
    "bg-cyan-300/30",
    "bg-sky-400/30",
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

      {/* Animated bricks moving to center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {grid.map((b, i) => (
          <motion.div
            key={i}
            initial={{ x: b.x, y: b.y, scale: 0.5, opacity: 0.3 }}
            animate={{
              x: [b.x, 0, b.x],
              y: [b.y, 0, b.y],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              delay: b.delay,
              duration: 3 + (i % 3) * 0.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className={`${colors[i % colors.length]} border border-white/20 shadow-lg`}
            style={{ width: 14, height: 14, borderRadius: 4 }}
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Link to="/register">
              <Button3D size="lg" variant="primary">
                Start Free
              </Button3D>
            </Link>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <Link to="/login">
            <Button3D size="lg" variant="darkAccent">
              Member Login
            </Button3D>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
