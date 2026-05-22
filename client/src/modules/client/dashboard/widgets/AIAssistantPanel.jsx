import { motion } from "framer-motion";
import { Bot, AlertTriangle, Lightbulb, FileCheck } from "lucide-react";

export default function AIAssistantPanel({ caseData, events = [] }) {
  if (!caseData) return null;

  const upcomingDeadlines = events.filter((e) => e.type === "deadline");

  const upcomingHearings = events.filter((e) => e.type === "hearing");

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[color:var(--surface-dark)] rounded-2xl p-5 shadow-soft border border-white/10"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <Bot size={18} className="text-yellow-400" />
          AI Legal Assistant
        </h2>

        <span className="text-xs text-yellow-400 font-semibold">ACTIVE</span>
      </div>

      {/* CASE INTELLIGENCE */}
      <div className="space-y-4">
        {/* NEXT ACTIONS */}
        <div className="p-3 rounded-xl bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-blue-400" />
            <h3 className="text-white text-sm font-semibold">
              Recommended Next Actions
            </h3>
          </div>

          <ul className="text-white/70 text-sm space-y-1">
            <li>• Review all contract documents before hearing</li>
            <li>• Confirm witness availability for testimony</li>
            <li>• Upload missing financial records</li>
          </ul>
        </div>

        {/* RISK ALERTS */}
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={16} className="text-red-400" />
            <h3 className="text-white text-sm font-semibold">Risk Alerts</h3>
          </div>

          <ul className="text-white/70 text-sm space-y-1">
            {upcomingDeadlines.length > 0 ? (
              <>
                <li>• Deadline approaching: {upcomingDeadlines[0].title}</li>
                <li>• Late submission may affect case timeline</li>
              </>
            ) : (
              <li>• No immediate legal risks detected</li>
            )}
          </ul>
        </div>

        {/* DOCUMENT CHECKLIST */}
        <div className="p-3 rounded-xl bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck size={16} className="text-green-400" />
            <h3 className="text-white text-sm font-semibold">
              Required Documents
            </h3>
          </div>

          <ul className="text-white/70 text-sm space-y-1">
            <li>• Affidavit (pending)</li>
            <li>• Bank statements (Jan–Mar)</li>
            <li>• Contract agreement copy</li>
          </ul>
        </div>

        {/* HEARING PREP */}
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="text-white text-sm font-semibold mb-1">
            Upcoming Hearing Preparation
          </h3>

          {upcomingHearings.length > 0 ? (
            <p className="text-white/70 text-sm">
              Your next hearing is scheduled on{" "}
              <span className="text-white font-semibold">
                {upcomingHearings[0].date}
              </span>
              . Ensure all evidence is organized and reviewed with your
              advocate.
            </p>
          ) : (
            <p className="text-white/50 text-sm">
              No hearings scheduled currently.
            </p>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/40">
        AI insights are generated from case data, court timelines, and firm
        updates
      </div>
    </motion.div>
  );
}
