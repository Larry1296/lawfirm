import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  Wallet,
  TrendingUp,
  TrendingDown,
  CreditCard,
  Landmark,
} from "lucide-react";

import { motion } from "framer-motion";

const financeData = [
  {
    month: "Jan",
    revenue: 1200000,
    expenses: 420000,
  },
  {
    month: "Feb",
    revenue: 1800000,
    expenses: 760000,
  },
  {
    month: "Mar",
    revenue: 2100000,
    expenses: 940000,
  },
  {
    month: "Apr",
    revenue: 2800000,
    expenses: 1200000,
  },
  {
    month: "May",
    revenue: 3400000,
    expenses: 1500000,
  },
];

const stats = [
  {
    title: "Monthly Revenue",
    value: "KES 3.4M",
    icon: <TrendingUp size={18} />,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Operational Costs",
    value: "KES 1.5M",
    icon: <TrendingDown size={18} />,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Pending Invoices",
    value: "KES 920K",
    icon: <CreditCard size={18} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Trust Accounts",
    value: "KES 8.7M",
    icon: <Landmark size={18} />,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function FinancialOverviewWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_35%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="
              h-12 w-12 rounded-2xl
              flex items-center justify-center
              bg-gradient-to-br from-emerald-500/20 to-green-500/20
              border border-emerald-500/20
              text-emerald-500
              shadow-[0_8px_24px_rgba(16,185,129,0.25)]
            "
          >
            <Wallet size={22} />
          </div>

          <div>
            <h2
              className="
                text-xl font-bold tracking-tight
                text-slate-900 dark:text-white
              "
            >
              Financial Overview
            </h2>

            <p
              className="
                mt-1 text-sm
                text-slate-500 dark:text-text-muted-dark
              "
            >
              Revenue, expenses & legal financial analytics
            </p>
          </div>
        </div>

        <div
          className="
            px-4 py-2 rounded-full
            bg-emerald-500/10
            border border-emerald-500/20
            text-emerald-500
            text-xs font-bold
          "
        >
          +18% Revenue Growth
        </div>
      </div>

      {/* STATS */}
      <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            className="
              relative overflow-hidden
              rounded-2xl
              border
              border-border-light dark:border-border-dark
              bg-white/40 dark:bg-white/[0.03]
              backdrop-blur-xl
              p-5
              transition-all duration-300
              hover:shadow-medium
            "
          >
            <div
              className={`
                absolute inset-0 opacity-10
                bg-gradient-to-br ${item.color}
              `}
            />

            <div className="relative z-10">
              <div
                className={`
                  h-11 w-11 rounded-2xl
                  flex items-center justify-center
                  text-white shadow-lg
                  bg-gradient-to-br ${item.color}
                `}
              >
                {item.icon}
              </div>

              <div className="mt-5">
                <p
                  className="
                    text-sm
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-1 text-2xl font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {item.value}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CHART */}
      <div className="relative z-10 mt-10 h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={financeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2A44" />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#111B2E",
                border: "1px solid #1F2A44",
                borderRadius: "16px",
              }}
            />

            <Bar dataKey="revenue" radius={[10, 10, 0, 0]} fill="#10B981" />

            <Bar dataKey="expenses" radius={[10, 10, 0, 0]} fill="#EF4444" />
          </BarChart>
        </ResponsiveContainer>
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
            AI Financial Monitoring Active
          </p>

          <p
            className="
              text-xs
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Automated legal accounting insights enabled
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
          Open Finance Center
        </button>
      </div>
    </motion.div>
  );
}
