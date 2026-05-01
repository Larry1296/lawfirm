import { motion } from "framer-motion";

export default function StatCard({ title, value, icon, color = "blue" }) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{
        y: -6,
        rotateX: 6,
        rotateY: -6,
        scale: 1.02,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative group"
    >
      {/* GLOW */}
      <div
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-300 bg-${color}-400`}
      />

      {/* CARD */}
      <div
        className={`
          relative bg-white/90 backdrop-blur
          p-5 rounded-2xl

          border border-white/40

          shadow-[0_10px_20px_rgba(0,0,0,0.08),
                  0_6px_6px_rgba(0,0,0,0.06),
                  inset_0_1px_0_rgba(255,255,255,0.6)]

          transition-all duration-300
          group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        `}
      >
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">{title}</p>

          {Icon && (
            <div
              className={`
                p-2 rounded-xl

                bg-${color}-100
                shadow-inner

                group-hover:scale-110 transition
              `}
            >
              <Icon className={`text-${color}-600`} size={18} />
            </div>
          )}
        </div>

        {/* VALUE */}
        <h2
          className={`
            text-2xl font-bold mt-3

            bg-gradient-to-br from-${color}-600 to-${color}-800
            bg-clip-text text-transparent
          `}
        >
          {value}
        </h2>

        {/* LIGHT REFLECTION */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
        </div>
      </div>
    </motion.div>
  );
}
