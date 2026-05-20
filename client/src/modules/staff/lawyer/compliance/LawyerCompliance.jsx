// src/modules/staff/lawyer/compliance/LawyerCompliance.jsx

import {
  ShieldCheck,
  AlertTriangle,
  FileText,
  Eye,
  Lock,
  CheckCircle2,
  XCircle,
  Clock,
  Activity,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerCompliance() {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("All");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const logs = [
    {
      id: 1,
      action: "Document Accessed",
      user: "Lawyer - Senior Partner",
      target: "Civil Case 120/2026 File",
      status: "Safe",
      time: "10 mins ago",
      risk: "Low",
    },
    {
      id: 2,
      action: "Case Record Edited",
      user: "Associate - Brian M.",
      target: "Land Dispute Case",
      status: "Flagged",
      time: "1 hr ago",
      risk: "Medium",
    },
    {
      id: 3,
      action: "Sensitive Document Download",
      user: "Paralegal - Sheila N.",
      target: "Client Affidavit",
      status: "Blocked",
      time: "3 hrs ago",
      risk: "High",
    },
    {
      id: 4,
      action: "Login Attempt",
      user: "Unknown Device",
      target: "System Access",
      status: "Blocked",
      time: "6 hrs ago",
      risk: "High",
    },
    {
      id: 5,
      action: "Invoice Updated",
      user: "Admin",
      target: "Invoice INV-002",
      status: "Safe",
      time: "1 day ago",
      risk: "Low",
    },
  ];

  const filters = ["All", "Safe", "Flagged", "Blocked"];

  const filtered = useMemo(() => {
    if (filter === "All") return logs;
    return logs.filter((l) => l.status === filter);
  }, [filter]);

  const statusStyle = (status) => {
    switch (status) {
      case "Safe":
        return "bg-green-500/10 text-green-500";
      case "Flagged":
        return "bg-orange-500/10 text-orange-500";
      case "Blocked":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const icon = (status) => {
    switch (status) {
      case "Safe":
        return <CheckCircle2 className="text-green-500" />;
      case "Flagged":
        return <AlertTriangle className="text-orange-500" />;
      case "Blocked":
        return <XCircle className="text-red-500" />;
      default:
        return <Activity className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <ShieldCheck className="text-[color:var(--brand-primary)]" />
            Compliance & Audit Logs
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            Track legal system activity, access logs, and compliance violations.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <FileText size={18} />
          Export Report
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Safe Actions", value: 124, icon: CheckCircle2 },
          { label: "Flagged Events", value: 18, icon: AlertTriangle },
          { label: "Blocked Attempts", value: 6, icon: XCircle },
          { label: "Audit Score", value: "92%", icon: ShieldCheck },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between">
              <div>
                <p className={muted}>{s.label}</p>
                <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
              </div>
              <s.icon className="text-[color:var(--brand-primary)]" />
            </div>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium ${
              filter === f
                ? "bg-[color:var(--brand-primary)] text-white"
                : theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* LOGS */}
      <div className="space-y-4">
        {filtered.map((l) => (
          <div key={l.id} className={`p-5 rounded-2xl shadow-soft ${card}`}>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="flex items-start gap-3">
                {/* ICON */}
                <div className="mt-1">{icon(l.status)}</div>

                <div>
                  <h2 className="font-bold">{l.action}</h2>
                  <p className={muted}>{l.user}</p>
                  <p className={`text-sm mt-1 ${muted}`}>{l.target}</p>

                  <div className="flex gap-2 mt-3 flex-wrap">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${statusStyle(l.status)}`}
                    >
                      {l.status}
                    </span>

                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100">
                      Risk: {l.risk}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-500 flex items-center gap-2">
                <Clock size={14} />
                {l.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER INSIGHT */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold">Compliance Insight</h2>
        <p className={`text-sm mt-2 ${muted}`}>
          System is compliant. 2 high-risk access attempts were blocked
          automatically by security layer.
        </p>
      </div>
    </div>
  );
}
