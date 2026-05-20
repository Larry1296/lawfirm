import {
  Users,
  TrendingUp,
  Clock3,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

import { motion } from "framer-motion";

const teamData = [
  {
    name: "Adv. Kamau",
    role: "Senior Litigation Counsel",
    performance: 92,
    matters: 18,
    billables: "KES 1.4M",
    efficiency: "Excellent",
  },
  {
    name: "Adv. Wanjiru",
    role: "Corporate Lawyer",
    performance: 84,
    matters: 11,
    billables: "KES 980K",
    efficiency: "Very Good",
  },
  {
    name: "Adv. Otieno",
    role: "Conveyancing Lawyer",
    performance: 76,
    matters: 9,
    billables: "KES 620K",
    efficiency: "Good",
  },
];

export default function TeamPerformanceWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_35%)]
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
            <Users size={22} />
          </div>

          <div>
            <h2
              className="
                text-xl font-bold tracking-tight
                text-slate-900 dark:text-white
              "
            >
              Team Performance
            </h2>

            <p
              className="
                mt-1 text-sm
                text-slate-500 dark:text-text-muted-dark
              "
            >
              Lawyer productivity & operational analytics
            </p>
          </div>
        </div>

        <div
          className="
            flex items-center gap-2
            rounded-full
            border border-emerald-500/20
            bg-emerald-500/10
            px-4 py-2
            text-emerald-500
            text-xs font-bold
          "
        >
          <TrendingUp size={14} />
          +12% This Month
        </div>
      </div>

      {/* TEAM LIST */}
      <div className="relative z-10 mt-8 space-y-5">
        {teamData.map((member, index) => (
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
            {/* TOP */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="
                    text-base font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  {member.role}
                </p>
              </div>

              <div
                className="
                  px-3 py-1 rounded-full
                  bg-blue-500/10
                  border border-blue-500/20
                  text-blue-500
                  text-xs font-bold
                "
              >
                {member.performance}% Score
              </div>
            </div>

            {/* PERFORMANCE BAR */}
            <div className="mt-5">
              <div
                className="
                  flex items-center justify-between
                  text-xs mb-2
                "
              >
                <span className="text-slate-500 dark:text-text-muted-dark">
                  Performance
                </span>

                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {member.performance}%
                </span>
              </div>

              <div
                className="
                  h-3 rounded-full overflow-hidden
                  bg-slate-200 dark:bg-[#1F2A44]
                "
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${member.performance}%` }}
                  transition={{ duration: 0.8 }}
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-emerald-500 to-green-500
                  "
                />
              </div>
            </div>

            {/* STATS */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* MATTERS */}
              <div
                className="
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-blue-500" />

                  <span
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Active Matters
                  </span>
                </div>

                <h4
                  className="
                    mt-2 text-lg font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {member.matters}
                </h4>
              </div>

              {/* BILLABLES */}
              <div
                className="
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <Clock3 size={16} className="text-emerald-500" />

                  <span
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Billables
                  </span>
                </div>

                <h4
                  className="
                    mt-2 text-lg font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {member.billables}
                </h4>
              </div>

              {/* EFFICIENCY */}
              <div
                className="
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-4
                "
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-500" />

                  <span
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Efficiency
                  </span>
                </div>

                <h4
                  className="
                    mt-2 text-lg font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {member.efficiency}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
