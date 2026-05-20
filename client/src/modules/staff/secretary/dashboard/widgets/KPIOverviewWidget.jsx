import { motion } from "framer-motion";
import {
  Scale,
  Users,
  FileText,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const kpis = [
  {
    title: "Active Cases",
    value: 248,
    change: "+8%",
    icon: <Scale size={18} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Total Clients",
    value: 132,
    change: "+5%",
    icon: <Users size={18} />,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Documents Filed",
    value: 1840,
    change: "+12%",
    icon: <FileText size={18} />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Revenue (MTD)",
    value: "KES 3.4M",
    change: "+18%",
    icon: <DollarSign size={18} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Pending Tasks",
    value: 27,
    change: "-6%",
    icon: <AlertTriangle size={18} />,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Completed Tasks",
    value: 312,
    change: "+14%",
    icon: <CheckCircle2 size={18} />,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function KPIOverviewWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_40%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            KPI Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-text-muted-dark">
            Key performance indicators across the firm
          </p>
        </div>

        <div className="text-xs font-bold px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500">
          Live Metrics
        </div>
      </div>

      {/* GRID */}
      <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {kpis.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4, scale: 1.02 }}
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
            {/* GRADIENT BACKDROP */}
            <div
              className={`absolute inset-0 opacity-10 bg-gradient-to-br ${item.color}`}
            />

            <div className="relative z-10 flex items-start justify-between">
              <div
                className={`h-11 w-11 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${item.color}`}
              >
                {item.icon}
              </div>

              <span
                className={`
                  text-xs font-bold px-2 py-1 rounded-full
                  ${
                    item.change.startsWith("+")
                      ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                  }
                `}
              >
                {item.change}
              </span>
            </div>

            <div className="relative z-10 mt-5">
              <p className="text-sm text-slate-500 dark:text-text-muted-dark">
                {item.title}
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
