import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { Briefcase, Scale, Building2, Landmark, Users } from "lucide-react";

import { motion } from "framer-motion";

const data = [
  {
    name: "Litigation",
    value: 38,
    color: "#2563EB",
    icon: <Scale size={16} />,
  },
  {
    name: "Corporate",
    value: 24,
    color: "#10B981",
    icon: <Building2 size={16} />,
  },
  {
    name: "Conveyancing",
    value: 18,
    color: "#F59E0B",
    icon: <Landmark size={16} />,
  },
  {
    name: "Family Law",
    value: 12,
    color: "#8B5CF6",
    icon: <Users size={16} />,
  },
  {
    name: "Employment",
    value: 8,
    color: "#EF4444",
    icon: <Briefcase size={16} />,
  },
];

export default function CaseDistributionWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        relative overflow-hidden
        rounded-2xl
        border
        border-border-light dark:border-border-dark
        bg-surface-light dark:bg-surface-dark
        shadow-soft hover:shadow-strong
        transition-all duration-300
        p-6
      "
    >
      {/* BACKDROP */}
      <div
        className="
          absolute inset-0 opacity-40 pointer-events-none
          bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_35%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h2
            className="
              text-xl font-bold tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Case Distribution
          </h2>

          <p
            className="
              mt-1 text-sm
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Active legal matters by department
          </p>
        </div>

        <div
          className="
            h-12 w-12 rounded-2xl
            flex items-center justify-center
            bg-gradient-to-br from-blue-500/20 to-cyan-500/20
            border border-blue-500/20
            text-blue-500
            shadow-[0_8px_24px_rgba(37,99,235,0.25)]
          "
        >
          <Briefcase size={22} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* CHART */}
        <div className="h-[320px] min-w-0">
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={4}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#111B2E",
                  border: "1px solid #1F2A44",
                  borderRadius: "16px",
                }}
              />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BREAKDOWN */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                x: 4,
                scale: 1.01,
              }}
              className="
                flex items-center justify-between
                rounded-2xl
                border
                border-border-light dark:border-border-dark
                bg-white/40 dark:bg-white/[0.03]
                backdrop-blur-xl
                p-4
                transition-all duration-300
                hover:shadow-medium
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    h-11 w-11 rounded-2xl
                    flex items-center justify-center
                    text-white shadow-lg
                  "
                  style={{
                    background: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3
                    className="
                      text-sm font-bold
                      text-slate-900 dark:text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-slate-500 dark:text-text-muted-dark
                    "
                  >
                    Active department matters
                  </p>
                </div>
              </div>

              <div className="text-right">
                <h4
                  className="
                    text-lg font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {item.value}%
                </h4>

                <p
                  className="
                    text-xs
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  Allocation
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          relative z-10 mt-6
          border-t border-border-light dark:border-border-dark
          pt-5
          flex items-center justify-between
        "
      >
        <div>
          <p
            className="
              text-sm font-semibold
              text-slate-900 dark:text-white
            "
          >
            248 Active Matters
          </p>

          <p
            className="
              text-xs
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Across all practice areas
          </p>
        </div>

        <button
          className="
            rounded-xl
            bg-[color:var(--brand-primary)]
            px-4 py-2
            text-sm font-medium
            text-white
            transition-all duration-300
            hover:opacity-90
            shadow-soft
          "
        >
          View Breakdown
        </button>
      </div>
    </motion.div>
  );
}
