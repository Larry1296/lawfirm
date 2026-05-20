// src/modules/staff/lawyer/billing/LawyerTimeTracking.jsx

import { Clock, Play, Pause, Timer } from "lucide-react";
import { useState } from "react";

export default function LawyerTimeTracking() {
  const [running, setRunning] = useState(false);

  const entries = [
    { case: "Civil Case 120/2026", hours: 3.5 },
    { case: "Land Dispute", hours: 2 },
    { case: "Commercial Contract", hours: 5 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <h1 className="text-3xl font-bold">Time Tracking</h1>

      {/* TIMER */}
      <div className="p-6 rounded-2xl shadow-soft bg-[color:var(--surface-light)] border border-[color:var(--border-light)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Timer size={28} />
            <h2 className="text-xl font-bold">Live Timer</h2>
          </div>

          <button
            onClick={() => setRunning(!running)}
            className={`px-5 py-2 rounded-xl text-white flex items-center gap-2 ${
              running ? "bg-red-500" : "bg-[color:var(--brand-primary)]"
            }`}
          >
            {running ? <Pause size={16} /> : <Play size={16} />}
            {running ? "Stop" : "Start"}
          </button>
        </div>
      </div>

      {/* ENTRIES */}
      <div className="space-y-4">
        {entries.map((e, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl shadow-soft bg-[color:var(--surface-light)] border border-[color:var(--border-light)]"
          >
            <div className="flex justify-between">
              <span className="font-medium">{e.case}</span>
              <span className="text-gray-500">{e.hours} hrs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
