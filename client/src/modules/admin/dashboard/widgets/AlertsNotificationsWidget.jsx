import { motion } from "framer-motion";
import { Bell, AlertTriangle, Info, CheckCircle2, XCircle } from "lucide-react";

const alerts = [
  {
    title: "Court Deadline Approaching",
    message: "Ngugi vs Republic case filing due in 2 days",
    type: "warning",
    time: "10 min ago",
  },
  {
    title: "New Client Registered",
    message: "ABC Holdings submitted onboarding documents",
    type: "success",
    time: "1 hr ago",
  },
  {
    title: "System Update",
    message: "Document management system updated successfully",
    type: "info",
    time: "3 hrs ago",
  },
  {
    title: "Payment Failed",
    message: "Invoice #INV-2026-004 payment declined",
    type: "error",
    time: "1 day ago",
  },
];

function getIcon(type) {
  switch (type) {
    case "warning":
      return <AlertTriangle size={18} />;
    case "success":
      return <CheckCircle2 size={18} />;
    case "error":
      return <XCircle size={18} />;
    default:
      return <Info size={18} />;
  }
}

function getStyles(type) {
  switch (type) {
    case "warning":
      return "from-yellow-500/20 to-orange-500/20 text-yellow-500 border-yellow-500/20";
    case "success":
      return "from-emerald-500/20 to-green-500/20 text-emerald-500 border-emerald-500/20";
    case "error":
      return "from-red-500/20 to-pink-500/20 text-red-500 border-red-500/20";
    default:
      return "from-blue-500/20 to-cyan-500/20 text-blue-500 border-blue-500/20";
  }
}

export default function AlertsNotificationsWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.12),_transparent_40%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/20 text-red-500 shadow-[0_8px_24px_rgba(239,68,68,0.25)]">
            <Bell size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Alerts & Notifications
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-text-muted-dark">
              Real-time system & legal updates
            </p>
          </div>
        </div>

        <div className="text-xs font-bold px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
          {alerts.length} New
        </div>
      </div>

      {/* LIST */}
      <div className="relative z-10 mt-8 space-y-4">
        {alerts.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4, scale: 1.01 }}
            className={`
              relative overflow-hidden
              rounded-2xl
              border
              ${getStyles(item.type)}
              bg-white/40 dark:bg-white/[0.03]
              backdrop-blur-xl
              p-5
              transition-all duration-300
              hover:shadow-medium
            `}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">{getIcon(item.type)}</div>

              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500 dark:text-text-muted-dark">
                  {item.message}
                </p>

                <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="relative z-10 mt-6 pt-5 border-t border-border-light dark:border-border-dark flex items-center justify-between">
        <p className="text-xs text-slate-500 dark:text-text-muted-dark">
          AI monitoring active across all systems
        </p>

        <button className="text-xs font-semibold text-brand-primary hover:opacity-80 transition">
          View All →
        </button>
      </div>
    </motion.div>
  );
}
