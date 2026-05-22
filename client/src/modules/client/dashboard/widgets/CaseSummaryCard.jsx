import { motion } from "framer-motion";
import { Briefcase, Scale, Calendar, User } from "lucide-react";

export default function CaseSummaryCard({ data }) {
  if (!data) return null;

  const statusColor =
    data.status === "ACTIVE"
      ? "text-green-400"
      : data.status === "PENDING"
        ? "text-yellow-400"
        : "text-red-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[color:var(--surface-dark)] rounded-2xl p-5 shadow-soft border border-white/10"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <Briefcase size={18} />
          Case Overview
        </h2>

        <span className={`text-xs font-semibold ${statusColor}`}>
          {data.status}
        </span>
      </div>

      {/* CASE TITLE */}
      <div className="mb-4">
        <p className="text-white text-lg font-bold leading-snug">
          {data.title}
        </p>
        <p className="text-white/50 text-sm">{data.id}</p>
      </div>

      {/* DETAILS */}
      <div className="space-y-3 text-sm text-white/80">
        <div className="flex items-center gap-2">
          <Scale size={16} className="text-yellow-400" />
          <span>Stage: {data.stage}</span>
        </div>

        <div className="flex items-center gap-2">
          <User size={16} className="text-blue-400" />
          <span>Advocate: {data.lawyer}</span>
        </div>

        <div className="flex items-center gap-2">
          <Scale size={16} className="text-purple-400" />
          <span>Court: {data.court}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-green-400" />
          <span>
            Next Hearing:{" "}
            <span className="font-semibold text-white">
              {data.next_hearing}
            </span>
          </span>
        </div>
      </div>

      {/* FOOTER ACTION HINT */}
      <div className="mt-5 pt-4 border-t border-white/10 text-xs text-white/40">
        AI updates this case in real-time based on court activity & lawyer input
      </div>
    </motion.div>
  );
}
