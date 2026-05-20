// src/modules/staff/lawyer/tasks/LawyerApprovals.jsx

import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Filter,
  FileText,
  Search,
  ShieldCheck,
  Sparkles,
  XCircle,
  User,
  ArrowRight,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

const filters = ["All", "Pending", "Approved", "Rejected", "Escalated"];

const approvalsData = [
  {
    id: "APR-1001",
    title: "File Notice of Motion for Injunction",
    case: "Civil Case 120/2026",
    requestedBy: "Junior Associate - Amina K.",
    department: "Litigation",
    priority: "High",
    status: "Pending",
    submittedAt: "2026-05-18",
    description:
      "Request to file urgent injunction restraining property transfer pending hearing.",
  },
  {
    id: "APR-1002",
    title: "Enter Plea Bargain Agreement",
    case: "Criminal Case 88/2026",
    requestedBy: "Associate - Brian M.",
    department: "Criminal Law",
    priority: "Medium",
    status: "Approved",
    submittedAt: "2026-05-16",
    description:
      "Proposed plea agreement reducing sentence exposure based on cooperation.",
  },
  {
    id: "APR-1003",
    title: "Withdraw Witness Statement",
    case: "Commercial Dispute 44/2026",
    requestedBy: "Paralegal - Sheila N.",
    department: "Commercial",
    priority: "High",
    status: "Rejected",
    submittedAt: "2026-05-15",
    description:
      "Request to withdraw inconsistent witness affidavit due to contradictions.",
  },
  {
    id: "APR-1004",
    title: "Escalate Expert Witness Request",
    case: "Land Case 77/2026",
    requestedBy: "Associate - John O.",
    department: "Property",
    priority: "High",
    status: "Escalated",
    submittedAt: "2026-05-14",
    description:
      "Request for external surveyor expert to verify boundary dispute evidence.",
  },
];

export default function LawyerApprovals() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const filtered = useMemo(() => {
    return approvalsData.filter((a) => {
      const matchSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.case.toLowerCase().includes(search.toLowerCase()) ||
        a.requestedBy.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        activeFilter === "All" ? true : a.status === activeFilter;

      return matchSearch && matchFilter;
    });
  }, [search, activeFilter]);

  const statusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/10 text-green-500";
      case "Rejected":
        return "bg-red-500/10 text-red-500";
      case "Escalated":
        return "bg-orange-500/10 text-orange-500";
      default:
        return "bg-blue-500/10 text-blue-500";
    }
  };

  const statusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 size={18} className="text-green-500" />;
      case "Rejected":
        return <XCircle size={18} className="text-red-500" />;
      case "Escalated":
        return <AlertTriangle size={18} className="text-orange-500" />;
      default:
        return <Clock size={18} className="text-blue-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Approval Workflow</h1>
          <p className={`text-sm mt-2 ${muted}`}>
            Co-lawyer and senior review system for legal actions and filings.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            className={`px-5 py-3 rounded-2xl flex items-center gap-2 ${
              theme === "dark"
                ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <Sparkles size={18} />
            AI Review
          </button>

          <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
            <FileText size={18} />
            New Request
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Pending Approvals", value: 14 },
          { label: "Approved", value: 36 },
          { label: "Rejected", value: 7 },
          { label: "Escalated", value: 4 },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <p className={`text-sm ${muted}`}>{s.label}</p>
            <h2 className="text-3xl font-bold mt-2">{s.value}</h2>
          </div>
        ))}
      </div>

      {/* SEARCH + FILTER */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <div className="flex flex-col xl:flex-row gap-4 xl:items-center">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border flex-1 ${
              theme === "dark"
                ? "bg-[color:var(--background-dark)] border-[color:var(--border-dark)]"
                : "bg-white border-[color:var(--border-light)]"
            }`}
          >
            <Search size={18} className={muted} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search approvals..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  activeFilter === f
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
        </div>
      </div>

      {/* LIST */}
      <div className="space-y-5">
        {filtered.map((a) => (
          <div key={a.id} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center justify-center">
                  <User size={20} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">{a.title}</h2>
                  <p className={`text-sm ${muted}`}>{a.case}</p>

                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full ${statusStyle(a.status)}`}
                    >
                      {a.status}
                    </span>
                    <span className={muted}>{a.department}</span>
                    <span className={muted}>{a.priority} Priority</span>
                  </div>

                  <p className={`text-sm mt-3 ${muted}`}>{a.description}</p>

                  <p className={`text-xs mt-2 ${muted}`}>
                    Submitted: {a.submittedAt} • By {a.requestedBy}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                {statusIcon(a.status)}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-5">
              <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                Review
              </button>

              <button className="px-4 py-2 rounded-xl bg-green-500 text-white">
                Approve
              </button>

              <button className="px-4 py-2 rounded-xl bg-red-500 text-white">
                Reject
              </button>

              <button className="px-4 py-2 rounded-xl bg-orange-500 text-white flex items-center gap-2">
                <ArrowRight size={16} />
                Escalate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className={`p-6 rounded-2xl shadow-soft flex justify-between items-center ${card}`}
      >
        <div>
          <h2 className="text-lg font-bold">Judicial Workflow Intelligence</h2>
          <p className={`text-sm ${muted}`}>
            AI can predict approval risk and suggest faster legal routing.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <ShieldCheck size={18} />
          Enable AI
        </button>
      </div>
    </div>
  );
}
