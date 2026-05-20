import {
  CalendarClock,
  AlertTriangle,
  CheckCircle2,
  FileWarning,
} from "lucide-react";

import { motion } from "framer-motion";

const deadlines = [
  {
    title: "File Defence Submission",
    case: "Mwangi vs KRA",
    due: "Today • 4:00 PM",
    priority: "Critical",
    status: "Pending",
  },
  {
    title: "Client Agreement Review",
    case: "Apex Holdings",
    due: "Tomorrow • 10:00 AM",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Land Transfer Filing",
    case: "Kilimani Estate Purchase",
    due: "May 24 • 9:30 AM",
    priority: "Medium",
    status: "Pending",
  },
  {
    title: "Compliance Audit Submission",
    case: "Internal Operations",
    due: "May 28 • 3:00 PM",
    priority: "Low",
    status: "Completed",
  },
];

export default function DeadlinesWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.10),_transparent_35%)]
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
            Critical Deadlines
          </h2>

          <p
            className="
              mt-1 text-sm
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Monitor urgent legal timelines and filings
          </p>
        </div>

        <div
          className="
            h-12 w-12 rounded-2xl
            flex items-center justify-center
            bg-gradient-to-br from-red-500/20 to-orange-500/20
            border border-red-500/20
            text-red-500
            shadow-[0_8px_24px_rgba(239,68,68,0.25)]
          "
        >
          <CalendarClock size={22} />
        </div>
      </div>

      {/* DEADLINES */}
      <div className="relative z-10 mt-8 space-y-4">
        {deadlines.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -3,
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
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  {item.case}
                </p>
              </div>

              {/* PRIORITY */}
              <div
                className={`
                  px-3 py-1 rounded-full
                  text-xs font-bold border
                  ${
                    item.priority === "Critical"
                      ? "bg-red-500/10 border-red-500/20 text-red-500"
                      : item.priority === "High"
                        ? "bg-orange-500/10 border-orange-500/20 text-orange-500"
                        : item.priority === "Medium"
                          ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
                          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  }
                `}
              >
                {item.priority}
              </div>
            </div>

            {/* META */}
            <div className="mt-5 flex flex-wrap gap-3">
              {/* DUE */}
              <div
                className="
                  flex items-center gap-2
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  px-4 py-2.5
                "
              >
                <CalendarClock size={16} className="text-blue-500" />

                <span
                  className="
                    text-sm font-medium
                    text-slate-700 dark:text-slate-200
                  "
                >
                  {item.due}
                </span>
              </div>

              {/* STATUS */}
              <div
                className={`
                  flex items-center gap-2
                  rounded-xl
                  px-4 py-2.5
                  ${
                    item.status === "Completed"
                      ? "bg-emerald-500/10"
                      : item.status === "In Progress"
                        ? "bg-blue-500/10"
                        : "bg-red-500/10"
                  }
                `}
              >
                {item.status === "Completed" ? (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                ) : (
                  <FileWarning
                    size={16}
                    className={
                      item.status === "In Progress"
                        ? "text-blue-500"
                        : "text-red-500"
                    }
                  />
                )}

                <span
                  className={`
                    text-sm font-medium
                    ${
                      item.status === "Completed"
                        ? "text-emerald-500"
                        : item.status === "In Progress"
                          ? "text-blue-500"
                          : "text-red-500"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>
            </div>

            {/* AI WARNING */}
            {item.priority === "Critical" && (
              <div
                className="
                  mt-5 flex items-center gap-2
                  rounded-xl
                  border border-red-500/20
                  bg-red-500/10
                  px-4 py-3
                "
              >
                <AlertTriangle size={16} className="text-red-500" />

                <p className="text-sm text-red-500 font-medium">
                  AI predicts elevated litigation risk if overdue.
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
