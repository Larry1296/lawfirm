import {
  FileText,
  Briefcase,
  CreditCard,
  Users,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

import { motion } from "framer-motion";

const activities = [
  {
    title: "New litigation matter created",
    description: "Mwangi vs KRA added by Advocate Kamau",
    time: "2 mins ago",
    icon: <Briefcase size={18} />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Invoice payment received",
    description: "KES 240,000 received from Apex Holdings",
    time: "12 mins ago",
    icon: <CreditCard size={18} />,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "AI legal research completed",
    description: "Employment dispute precedents generated",
    time: "28 mins ago",
    icon: <BrainCircuit size={18} />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Client profile updated",
    description: "New compliance documents uploaded",
    time: "1 hour ago",
    icon: <Users size={18} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Compliance audit triggered",
    description: "Trust account review initiated",
    time: "2 hours ago",
    icon: <ShieldCheck size={18} />,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Document drafted",
    description: "Commercial agreement finalized",
    time: "3 hours ago",
    icon: <FileText size={18} />,
    color: "from-slate-500 to-slate-700",
  },
];

export default function RecentActivityWidget() {
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
      {/* BACKDROP GLOW */}
      <div
        className="
          absolute inset-0 pointer-events-none opacity-40
          bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_40%)]
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
            Recent Activity
          </h2>

          <p
            className="
              mt-1 text-sm
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Live legal operations across the firm
          </p>
        </div>

        <div
          className="
            px-3 py-1.5 rounded-full
            text-xs font-semibold
            bg-blue-500/10 border border-blue-500/20
            text-blue-500
          "
        >
          Live Tracking
        </div>
      </div>

      {/* ACTIVITY LIST */}
      <div className="relative z-10 mt-8 space-y-5">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{
              x: 4,
              scale: 1.01,
            }}
            className="
              relative flex items-start gap-4
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
            {/* ICON */}
            <div
              className={`
                relative shrink-0
                h-12 w-12 rounded-2xl
                flex items-center justify-center
                text-white
                bg-gradient-to-br ${activity.color}
                shadow-lg
              `}
            >
              <div className="absolute inset-1 rounded-xl bg-white/10" />

              <div className="relative z-10">{activity.icon}</div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="
                      text-sm font-semibold
                      text-slate-900 dark:text-white
                    "
                  >
                    {activity.title}
                  </h3>

                  <p
                    className="
                      mt-1 text-sm
                      text-slate-500 dark:text-text-muted-dark
                    "
                  >
                    {activity.description}
                  </p>
                </div>

                <span
                  className="
                    whitespace-nowrap
                    text-xs font-medium
                    text-slate-400
                  "
                >
                  {activity.time}
                </span>
              </div>

              {/* TIMELINE */}
              {index !== activities.length - 1 && (
                <div
                  className="
                    absolute left-[2.35rem] top-[4.2rem]
                    w-[2px] h-8
                    bg-gradient-to-b
                    from-blue-500/30 to-transparent
                  "
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className="
          relative z-10 mt-6
          flex items-center justify-between
          border-t border-border-light dark:border-border-dark
          pt-5
        "
      >
        <div>
          <p
            className="
              text-sm font-medium
              text-slate-900 dark:text-white
            "
          >
            248 Activities Today
          </p>

          <p
            className="
              text-xs
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Across all legal departments
          </p>
        </div>

        <button
          className="
            px-4 py-2 rounded-xl
            text-sm font-medium
            bg-[color:var(--brand-primary)]
            hover:opacity-90
            text-white
            transition-all duration-300
            shadow-soft
          "
        >
          View Audit Trail
        </button>
      </div>
    </motion.div>
  );
}
