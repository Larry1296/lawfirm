import { motion } from "framer-motion";

export default function HeroSection() {
  const grid = [];
  const cols = 16;
  const rows = 9;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push({
        x: (x - cols / 2) * 90,
        y: (y - rows / 2) * 90,
        delay: (x + y) * 0.06, // slower stagger
      });
    }
  }

  // 🎨 stronger visible colors
  const colors = [
    "bg-blue-500/60",
    "bg-indigo-500/60",
    "bg-cyan-400/60",
    "bg-sky-500/60",
    "bg-violet-500/60",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 text-white">
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-blue-500 blur-3xl rounded-full top-0 left-0"
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-indigo-500 blur-3xl rounded-full bottom-0 right-0"
        />
      </div>

      {/* COLORFUL BRICK FIELD */}
      <div className="absolute inset-0 flex items-center justify-center">
        {grid.map((b, i) => {
          const color = colors[i % colors.length];

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.3,
                x: b.x + 120,
                y: b.y - 120,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: b.x,
                y: b.y,
              }}
              transition={{
                duration: 2.5, // slower movement
                delay: b.delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className={`absolute ${color} border border-white/20 shadow-lg backdrop-blur-sm`}
              style={{
                width: 14,
                height: 14,
                borderRadius: 3,
              }}
            />
          );
        })}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Build Legal Structure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-blue-100"
        >
          A structured, living legal system — cases, clients, and justice in
          motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:scale-105 transition">
            Start Free
          </button>

          <button className="px-8 py-4 border border-white/30 rounded-xl hover:bg-white/10 transition">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
