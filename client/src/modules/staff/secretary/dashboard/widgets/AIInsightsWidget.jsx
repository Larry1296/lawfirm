import {
  BrainCircuit,
  TrendingUp,
  ShieldAlert,
  Briefcase,
  FileSearch,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const insights = [
  {
    title: "Litigation Risk Escalation",
    description:
      "AI detected increased procedural delay risk in 4 active matters.",
    impact: "+18% risk",
    icon: <ShieldAlert size={18} />,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "High Revenue Opportunity",
    description:
      "Corporate department projected to exceed monthly target by KES 1.2M.",
    impact: "+24% growth",
    icon: <TrendingUp size={18} />,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Document Intelligence",
    description: "AI identified 12 contracts requiring urgent clause review.",
    impact: "12 flagged",
    icon: <FileSearch size={18} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Matter Performance",
    description:
      "Commercial litigation matters show highest profitability trend.",
    impact: "KES 3.4M",
    icon: <Briefcase size={18} />,
    color: "from-purple-500 to-indigo-500",
  },
];

export default function AIInsightsWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_35%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div
              className="
                h-12 w-12 rounded-2xl
                flex items-center justify-center
                bg-gradient-to-br from-purple-500/20 to-indigo-500/20
                border border-purple-500/20
                text-purple-500
                shadow-[0_8px_24px_rgba(168,85,247,0.25)]
              "
            >
              <BrainCircuit size={22} />
            </div>

            <div>
              <h2
                className="
                  text-xl font-bold tracking-tight
                  text-slate-900 dark:text-white
                "
              >
                AI Legal Insights
              </h2>

              <p
                className="
                  mt-1 text-sm
                  text-slate-500 dark:text-text-muted-dark
                "
              >
                Predictive analytics & legal intelligence
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            flex items-center gap-2
            rounded-full
            border border-purple-500/20
            bg-purple-500/10
            px-4 py-2
            text-purple-500
            text-xs font-bold
          "
        >
          <Sparkles size={14} />
          AI ACTIVE
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -4,
              scale: 1.01,
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
            {/* GRADIENT */}
            <div
              className={`
                absolute inset-0 opacity-10
                bg-gradient-to-br ${item.color}
              `}
            />

            <div className="relative z-10">
              {/* TOP */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`
                    h-12 w-12 rounded-2xl
                    flex items-center justify-center
                    text-white
                    bg-gradient-to-br ${item.color}
                    shadow-lg
                  `}
                >
                  {item.icon}
                </div>

                <div
                  className="
                    px-3 py-1 rounded-full
                    bg-slate-100 dark:bg-[#1A2438]
                    text-xs font-bold
                    text-slate-700 dark:text-slate-200
                  "
                >
                  {item.impact}
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-5">
                <h3
                  className="
                    text-base font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2 text-sm leading-relaxed
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* AI FOOTER */}
              <div
                className="
                  mt-5 flex items-center justify-between
                  border-t border-border-light dark:border-border-dark
                  pt-4
                "
              >
                <span
                  className="
                    text-xs font-medium
                    text-slate-400
                  "
                >
                  Updated 3 mins ago
                </span>

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
                  Analyze
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
