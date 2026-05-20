import { motion } from "framer-motion";
import { Scale, Clock3, User, FileText } from "lucide-react";

const cases = [
  {
    title: "Ngugi vs Republic of Kenya",
    client: "John Ngugi",
    type: "Litigation",
    status: "In Progress",
    updated: "2 hrs ago",
  },
  {
    title: "ABC Ltd Incorporation",
    client: "ABC Holdings",
    type: "Corporate",
    status: "Pending Review",
    updated: "5 hrs ago",
  },
  {
    title: "Land Transfer - Karen",
    client: "Mary Wanjiru",
    type: "Conveyancing",
    status: "Completed",
    updated: "1 day ago",
  },
  {
    title: "Employment Dispute Case",
    client: "Peter Mwangi",
    type: "Employment",
    status: "In Progress",
    updated: "2 days ago",
  },
];

function getStatusStyle(status) {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    case "Pending Review":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    default:
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
  }
}

export default function RecentCasesWidget() {
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
          bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.12),_transparent_40%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/20 text-purple-500 shadow-[0_8px_24px_rgba(139,92,246,0.25)]">
            <Scale size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Recent Cases
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-text-muted-dark">
              Latest legal matters updates
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500">
          <FileText size={14} />
          Live Feed
        </div>
      </div>

      {/* LIST */}
      <div className="relative z-10 mt-8 space-y-4">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 4, scale: 1.01 }}
            className="
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
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-text-muted-dark">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {item.client}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 size={14} />
                    {item.updated}
                  </span>
                </div>
              </div>

              <span
                className={`
                  text-xs font-bold px-3 py-1 rounded-full border
                  ${getStatusStyle(item.status)}
                `}
              >
                {item.status}
              </span>
            </div>

            {/* FOOTER */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-[#182338] text-slate-600 dark:text-text-muted-dark">
                {item.type}
              </span>

              <button className="text-xs font-semibold text-brand-primary hover:opacity-80 transition">
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
