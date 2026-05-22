import { motion } from "framer-motion";
import { AlertTriangle, Info, Bell } from "lucide-react";

export default function AlertsPanel({ alerts = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case "warning":
        return <AlertTriangle size={16} className="text-red-400" />;
      case "info":
        return <Info size={16} className="text-blue-400" />;
      default:
        return <Bell size={16} className="text-yellow-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[color:var(--surface-dark)] rounded-2xl p-5 shadow-soft border border-white/10"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <Bell size={18} />
          Alerts & Notifications
        </h2>

        <span className="text-xs text-white/40">Case-sensitive updates</span>
      </div>

      {/* ALERT LIST */}
      <div className="space-y-3">
        {alerts.length === 0 ? (
          <p className="text-white/50 text-sm">No alerts at the moment</p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              {/* ICON */}
              <div className="mt-0.5">{getIcon(alert.type)}</div>

              {/* MESSAGE */}
              <div>
                <p className="text-white text-sm leading-snug">
                  {alert.message}
                </p>

                <p className="text-white/40 text-xs mt-1">
                  AI / Firm Notification
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/40">
        Alerts are generated from case activity, deadlines, and lawyer updates
      </div>
    </motion.div>
  );
}
