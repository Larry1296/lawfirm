import { motion } from "framer-motion";

/* =========================
   COLOR MAP (SAFE)
========================= */
const colorMap = {
  blue: {
    bar: "from-blue-500 to-blue-700",
    glow: "bg-blue-400",
  },
  green: {
    bar: "from-green-500 to-green-700",
    glow: "bg-green-400",
  },
};

export default function ProgressList({ title, items, color = "blue" }) {
  const styles = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateX: 5,
        rotateY: -5,
        scale: 1.01,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group"
    >
      {/* GLOW */}
      <div
        className={`
          absolute inset-0 rounded-2xl blur-xl opacity-0
          group-hover:opacity-40 transition duration-300
          ${styles.glow}
        `}
      />

      {/* CARD */}
      <div
        className="
          relative bg-white/90 backdrop-blur
          p-6 rounded-2xl

          border border-white/40

          shadow-[0_10px_20px_rgba(0,0,0,0.08),
                  0_6px_6px_rgba(0,0,0,0.06),
                  inset_0_1px_0_rgba(255,255,255,0.6)]

          transition-all duration-300
          group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        "
      >
        {/* TITLE */}
        <h2 className="font-semibold mb-5 text-gray-800">{title}</h2>

        {/* LIST */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* LABEL ROW */}
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{item.name}</span>
                <span className="font-medium text-gray-700">{item.value}%</span>
              </div>

              {/* TRACK */}
              <div className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden shadow-inner">
                {/* PROGRESS BAR */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`
                    h-full rounded-full

                    bg-gradient-to-r ${styles.bar}

                    shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                  `}
                />

                {/* GLOW EDGE */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="h-1/2 bg-white/30 rounded-t-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHT REFLECTION */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
