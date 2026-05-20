import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TrendingUp, Wallet, Briefcase, Scale } from "lucide-react";

import { motion } from "framer-motion";
import { useContext } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

const revenueData = [
  { month: "Jan", revenue: 1200000, profit: 820000 },
  { month: "Feb", revenue: 1800000, profit: 1200000 },
  { month: "Mar", revenue: 1500000, profit: 980000 },
  { month: "Apr", revenue: 2400000, profit: 1700000 },
  { month: "May", revenue: 3100000, profit: 2200000 },
  { month: "Jun", revenue: 4200000, profit: 3000000 },
];

const profitability = [
  {
    title: "Litigation",
    value: "KES 1.8M",
    progress: "78%",
    icon: <Scale size={18} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Corporate",
    value: "KES 1.2M",
    progress: "62%",
    icon: <Briefcase size={18} />,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Conveyancing",
    value: "KES 950K",
    progress: "49%",
    icon: <Wallet size={18} />,
    color: "from-yellow-500 to-orange-500",
  },
];

export default function RevenueWidget() {
  const { theme } = useContext(ThemeContext);

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
      {/* GLOW */}
      <div
        className="
          absolute inset-0
          opacity-40 pointer-events-none
          bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_35%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <div className="flex items-center gap-3">
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
              <TrendingUp size={22} />
            </div>

            <div>
              <h2
                className="
                  text-xl font-bold tracking-tight
                  text-slate-900 dark:text-white
                "
              >
                Revenue Analytics
              </h2>

              <p
                className="
                  text-sm
                  text-slate-500 dark:text-text-muted-dark
                "
              >
                Law firm financial performance overview
              </p>
            </div>
          </div>
        </div>

        {/* KPI */}
        <div className="flex flex-wrap gap-3">
          <div
            className="
              rounded-2xl px-4 py-3
              bg-emerald-500/10
              border border-emerald-500/20
              backdrop-blur-lg
            "
          >
            <p className="text-xs text-emerald-500 font-medium">
              Total Revenue
            </p>

            <h3 className="text-lg font-bold text-emerald-500">KES 14.2M</h3>
          </div>

          <div
            className="
              rounded-2xl px-4 py-3
              bg-blue-500/10
              border border-blue-500/20
              backdrop-blur-lg
            "
          >
            <p className="text-xs text-blue-500 font-medium">Profit Margin</p>

            <h3 className="text-lg font-bold text-blue-500">72%</h3>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="relative z-10 mt-8 h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "dark" ? "#1F2A44" : "#E5E7EB"}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: theme === "dark" ? "#94A3B8" : "#64748B",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: theme === "dark" ? "#94A3B8" : "#64748B",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: theme === "dark" ? "#111B2E" : "#FFFFFF",
                border:
                  theme === "dark" ? "1px solid #1F2A44" : "1px solid #E5E7EB",
                borderRadius: "16px",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#revenue)"
            />

            <Area
              type="monotone"
              dataKey="profit"
              stroke="#10B981"
              strokeWidth={3}
              fill="url(#profit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* PROFITABILITY */}
      <div className="relative z-10 mt-8">
        <div className="flex items-center justify-between mb-5">
          <h3
            className="
              text-lg font-semibold
              text-slate-900 dark:text-white
            "
          >
            Matter Profitability
          </h3>

          <span
            className="
              text-xs px-3 py-1 rounded-full
              bg-blue-500/10 border border-blue-500/20
              text-blue-500 font-semibold
            "
          >
            AI Insights Enabled
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {profitability.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              className="
                relative overflow-hidden
                rounded-2xl
                border
                border-border-light dark:border-border-dark
                bg-white/50 dark:bg-white/[0.03]
                backdrop-blur-lg
                p-5
              "
            >
              {/* LIGHT */}
              <div
                className={`
                  absolute inset-0 opacity-10
                  bg-gradient-to-br ${item.color}
                `}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className={`
                      h-11 w-11 rounded-2xl
                      flex items-center justify-center
                      text-white
                      bg-gradient-to-br ${item.color}
                      shadow-lg
                    `}
                  >
                    {item.icon}
                  </div>

                  <span
                    className="
                      text-xs font-bold
                      text-emerald-500
                    "
                  >
                    {item.progress}
                  </span>
                </div>

                <div className="mt-5">
                  <h4
                    className="
                      text-sm font-medium
                      text-slate-500 dark:text-text-muted-dark
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-1 text-2xl font-bold
                      text-slate-900 dark:text-white
                    "
                  >
                    {item.value}
                  </p>
                </div>

                {/* PROGRESS */}
                <div className="mt-5">
                  <div
                    className="
                      h-2 rounded-full overflow-hidden
                      bg-slate-200 dark:bg-[#1F2A44]
                    "
                  >
                    <div
                      className={`
                        h-full rounded-full
                        bg-gradient-to-r ${item.color}
                      `}
                      style={{
                        width: item.progress,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
