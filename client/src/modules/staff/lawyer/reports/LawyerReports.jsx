// src/modules/staff/lawyer/reports/LawyerReports.jsx

import {
  BarChart3,
  TrendingUp,
  FileText,
  Users,
  Gavel,
  DollarSign,
  Clock,
  AlertTriangle,
} from "lucide-react";

import { useContext, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerReports() {
  const { theme } = useContext(ThemeContext);
  const [range, setRange] = useState("This Month");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const stats = [
    {
      label: "Active Cases",
      value: 42,
      icon: FileText,
      change: "+6%",
    },
    {
      label: "Court Hearings",
      value: 18,
      icon: Gavel,
      change: "+2%",
    },
    {
      label: "Billable Hours",
      value: 124,
      icon: Clock,
      change: "+12%",
    },
    {
      label: "Revenue (KES)",
      value: "320,000",
      icon: DollarSign,
      change: "+8%",
    },
  ];

  const casePerformance = [
    { type: "Won", value: 18, color: "text-green-500" },
    { type: "Ongoing", value: 20, color: "text-blue-500" },
    { type: "Lost", value: 4, color: "text-red-500" },
  ];

  const workload = [
    { name: "Adv. Mwangi", cases: 14 },
    { name: "Adv. Amina", cases: 10 },
    { name: "Adv. Brian", cases: 8 },
    { name: "Paralegals", cases: 20 },
  ];

  const alerts = [
    {
      title: "2 Urgent Court Deadlines",
      level: "High",
    },
    {
      title: "3 Missing Case Documents",
      level: "Medium",
    },
    {
      title: "5 Pending Invoice Approvals",
      level: "Low",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <BarChart3 className="text-[color:var(--brand-primary)]" />
            Reports & Analytics
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            Performance insights, case analytics, workload distribution, and
            firm reporting.
          </p>
        </div>

        <div className="flex gap-3">
          {["Today", "This Week", "This Month"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                range === r
                  ? "bg-[color:var(--brand-primary)] text-white"
                  : theme === "dark"
                    ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between">
              <div>
                <p className={muted}>{s.label}</p>
                <h2 className="text-2xl font-bold mt-2">{s.value}</h2>

                <p className="text-xs mt-2 text-green-500">
                  {s.change} this period
                </p>
              </div>

              <s.icon className="text-[color:var(--brand-primary)]" />
            </div>
          </div>
        ))}
      </div>

      {/* CASE PERFORMANCE */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold mb-4">Case Performance</h2>

        <div className="space-y-4">
          {casePerformance.map((c, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className={c.color}>{c.type}</span>

              <div className="flex items-center gap-3 w-2/3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      c.type === "Won"
                        ? "bg-green-500"
                        : c.type === "Ongoing"
                          ? "bg-blue-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${c.value * 4}%` }}
                  />
                </div>

                <span className="text-sm w-10 text-right">{c.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WORKLOAD + ALERTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* WORKLOAD */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Users className="text-[color:var(--brand-primary)]" />
            Workload Distribution
          </h2>

          <div className="space-y-3">
            {workload.map((w, i) => (
              <div key={i} className="flex justify-between">
                <span>{w.name}</span>

                <span className="text-[color:var(--brand-primary)] font-bold">
                  {w.cases} cases
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ALERTS */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="text-orange-500" />
            System Alerts
          </h2>

          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div
                key={i}
                className="flex justify-between items-center text-sm"
              >
                <span>{a.title}</span>

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    a.level === "High"
                      ? "bg-red-500/10 text-red-500"
                      : a.level === "Medium"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-blue-500/10 text-blue-500"
                  }`}
                >
                  {a.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INSIGHT */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <TrendingUp className="text-green-500" />
          AI Insight
        </h2>

        <p className={`text-sm mt-2 ${muted}`}>
          Case load has increased by 12%. Recommend redistributing 3 active
          litigation files to avoid deadline pressure.
        </p>
      </div>
    </div>
  );
}
