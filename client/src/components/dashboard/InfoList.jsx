import { motion } from "framer-motion";

/* =========================
   COLOR MAP (SAFE)
========================= */
const accentMap = {
  blue: {
    border: "border-blue-500",
    text: "text-blue-600",
    glow: "bg-blue-400",
  },
  red: {
    border: "border-red-500",
    text: "text-red-600",
    glow: "bg-red-400",
  },
  green: {
    border: "border-green-500",
    text: "text-green-600",
    glow: "bg-green-400",
  },
};

export default function InfoListCard({
  title,
  items,
  icon,
  accent = "blue",
  renderRight,
}) {
  const Icon = icon;
  const styles = accentMap[accent] || accentMap.blue;

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
        className={`
          relative bg-white/90 backdrop-blur
          p-5 rounded-2xl

          border-l-4 ${styles.border}
          border border-white/40

          shadow-[0_10px_20px_rgba(0,0,0,0.08),
                  0_6px_6px_rgba(0,0,0,0.06),
                  inset_0_1px_0_rgba(255,255,255,0.6)]

          transition-all duration-300
          group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        `}
      >
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-4">
          {Icon && (
            <div className="p-2 rounded-xl bg-gray-100 shadow-inner">
              <Icon className={styles.text} size={18} />
            </div>
          )}

          <h2 className="font-semibold text-gray-800">{title}</h2>
        </div>

        {/* LIST */}
        <div className="space-y-2 text-sm">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className="flex justify-between items-center p-2 rounded-lg transition hover:bg-gray-50"
            >
              <span className="truncate text-gray-600">{item.label}</span>

              {renderRight && <span className="ml-2">{renderRight(item)}</span>}
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
