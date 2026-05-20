// src/modules/staff/lawyer/compliance/LawyerAuditLogs.jsx

import {
  Shield,
  User,
  FileText,
  Eye,
  Download,
  Edit,
  Trash2,
  Lock,
  Unlock,
  Clock,
  Search,
  Filter,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerAuditLogs() {
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
      action: "LOGIN",
      user: "Adv. John Mwangi",
      role: "Senior Lawyer",
      target: "System Access",
      ip: "102.68.14.22",
      device: "Chrome / Windows",
      time: "2 mins ago",
      severity: "Low",
      status: "Success",
    },
    {
      id: 2,
      action: "VIEW_CASE",
      user: "Associate - Brian",
      role: "Lawyer",
      target: "Civil Case 120/2026",
      ip: "102.68.14.22",
      device: "Chrome / Windows",
      time: "12 mins ago",
      severity: "Low",
      status: "Success",
    },
    {
      id: 3,
      action: "EDIT_DOCUMENT",
      user: "Paralegal - Sheila",
      role: "Paralegal",
      target: "Affidavit Draft v2",
      ip: "102.68.14.22",
      device: "Chrome / MacOS",
      time: "35 mins ago",
      severity: "Medium",
      status: "Modified",
    },
    {
      id: 4,
      action: "DOWNLOAD_CONFIDENTIAL",
      user: "Unknown Device",
      role: "Unauthorized",
      target: "Client Evidence File",
      ip: "185.44.22.11",
      device: "Firefox / Linux",
      time: "1 hr ago",
      severity: "High",
      status: "Blocked",
    },
    {
      id: 5,
      action: "DELETE_RECORD",
      user: "Admin",
      role: "System Admin",
      target: "Draft Case Note",
      ip: "102.68.14.22",
      device: "Chrome / Windows",
      time: "2 hrs ago",
      severity: "Critical",
      status: "Blocked",
    },
    {
      id: 6,
      action: "EXPORT_CASE",
      user: "Senior Lawyer",
      role: "Lawyer",
      target: "Land Case 77/2026",
      ip: "102.68.14.22",
      device: "Edge / Windows",
      time: "5 hrs ago",
      severity: "Medium",
      status: "Success",
    },
  ];

  const filters = ["All", "Success", "Modified", "Blocked"];

  const filtered = useMemo(() => {
    if (filter === "All") return logs;
    return logs.filter((l) => l.status === filter);
  }, [filter]);

  const icon = (action) => {
    switch (action) {
      case "LOGIN":
        return <User className="text-blue-500" />;
      case "VIEW_CASE":
        return <Eye className="text-green-500" />;
      case "EDIT_DOCUMENT":
        return <Edit className="text-orange-500" />;
      case "DOWNLOAD_CONFIDENTIAL":
        return <Download className="text-red-500" />;
      case "DELETE_RECORD":
        return <Trash2 className="text-red-600" />;
      case "EXPORT_CASE":
        return <FileText className="text-purple-500" />;
      default:
        return <Shield className="text-gray-500" />;
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-500/10 text-green-500";
      case "Modified":
        return "bg-orange-500/10 text-orange-500";
      case "Blocked":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const severityColor = (severity) => {
    switch (severity) {
      case "Low":
        return "text-green-500";
      case "Medium":
        return "text-orange-500";
      case "High":
        return "text-red-500";
      case "Critical":
        return "text-red-700 font-bold";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <Shield className="text-[color:var(--brand-primary)]" />
            Audit Logs (Forensic Trail)
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            Immutable system activity tracking for legal accountability and
            security compliance.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
            <Search size={16} />
            Search
          </button>

          <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
            Export Logs
          </button>
        </div>
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

      {/* LOG LIST */}
      <div className="space-y-4">
        {filtered.map((l) => (
          <div key={l.id} className={`p-5 rounded-2xl shadow-soft ${card}`}>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              {/* LEFT */}
              <div className="flex gap-4">
                {/* ICON */}
                <div className="mt-1">{icon(l.action)}</div>

                <div>
                  <h2 className="font-bold">{l.action.replace("_", " ")}</h2>

                  <p className={muted}>
                    {l.user} • {l.role}
                  </p>

                  <p className={`text-sm mt-1 ${muted}`}>Target: {l.target}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${statusColor(l.status)}`}
                    >
                      {l.status}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full bg-gray-100`}
                    >
                      IP: {l.ip}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full bg-gray-100`}
                    >
                      {l.device}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${severityColor(l.severity)}`}
                    >
                      {l.severity} Risk
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock size={14} />
                {l.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER INSIGHT */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold">Security Insight</h2>
        <p className={`text-sm mt-2 ${muted}`}>
          1 critical unauthorized access attempt was blocked. System integrity
          is stable.
        </p>
      </div>
    </div>
  );
}
