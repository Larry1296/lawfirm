// src/modules/staff/lawyer/communication/LawyerNotifications.jsx

import {
  Bell,
  AlertTriangle,
  FileText,
  MessageSquare,
  CheckCircle2,
  Gavel,
  CreditCard,
  Calendar,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerNotifications() {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("All");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const notifications = [
    {
      id: 1,
      type: "case",
      title: "New Evidence Added",
      message: "Civil Case 120/2026 has received new affidavit submission.",
      priority: "High",
      time: "10 mins ago",
      read: false,
    },
    {
      id: 2,
      type: "message",
      title: "Client Message",
      message: "Mwangi: Any update on my injunction application?",
      priority: "Medium",
      time: "30 mins ago",
      read: false,
    },
    {
      id: 3,
      type: "court",
      title: "Court Reminder",
      message: "Land Case 77/2026 hearing scheduled tomorrow at 9:00 AM.",
      priority: "High",
      time: "2 hrs ago",
      read: false,
    },
    {
      id: 4,
      type: "billing",
      title: "Invoice Paid",
      message: "Invoice INV-002 has been successfully paid.",
      priority: "Low",
      time: "5 hrs ago",
      read: true,
    },
    {
      id: 5,
      type: "approval",
      title: "Approval Required",
      message: "Notice of Motion awaiting your review and approval.",
      priority: "High",
      time: "1 day ago",
      read: false,
    },
    {
      id: 6,
      type: "system",
      title: "System Update",
      message: "Case management module updated with AI suggestions.",
      priority: "Low",
      time: "2 days ago",
      read: true,
    },
  ];

  const filters = ["All", "Unread", "Case", "Message", "Court", "Billing"];

  const filtered = useMemo(() => {
    return notifications.filter((n) => {
      if (filter === "All") return true;
      if (filter === "Unread") return !n.read;
      return n.type.toLowerCase() === filter.toLowerCase();
    });
  }, [filter]);

  const icon = (type) => {
    switch (type) {
      case "case":
        return <FileText className="text-blue-500" />;
      case "message":
        return <MessageSquare className="text-green-500" />;
      case "court":
        return <Gavel className="text-red-500" />;
      case "billing":
        return <CreditCard className="text-purple-500" />;
      case "approval":
        return <CheckCircle2 className="text-orange-500" />;
      default:
        return <Bell className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display">
            Notifications Center
          </h1>
          <p className={`text-sm mt-2 ${muted}`}>
            Real-time legal alerts, case updates, and court reminders.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Bell className="text-[color:var(--brand-primary)]" />
          <span className="text-sm text-gray-500">
            {notifications.filter((n) => !n.read).length} unread
          </span>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3">
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

      {/* NOTIFICATION LIST */}
      <div className="space-y-4">
        {filtered.map((n) => (
          <div
            key={n.id}
            className={`p-5 rounded-2xl shadow-soft flex items-start gap-4 ${
              card
            } ${!n.read ? "border-l-4 border-[color:var(--brand-primary)]" : ""}`}
          >
            {/* ICON */}
            <div className="mt-1">{icon(n.type)}</div>

            {/* CONTENT */}
            <div className="flex-1">
              <div className="flex justify-between gap-4">
                <h2 className="font-bold">{n.title}</h2>
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>

              <p className={`text-sm mt-1 ${muted}`}>{n.message}</p>

              {/* TAGS */}
              <div className="flex gap-2 mt-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    n.priority === "High"
                      ? "bg-red-500/10 text-red-500"
                      : n.priority === "Medium"
                        ? "bg-orange-500/10 text-orange-500"
                        : "bg-green-500/10 text-green-500"
                  }`}
                >
                  {n.priority} Priority
                </span>

                {!n.read && (
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500">
                    Unread
                  </span>
                )}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col gap-2">
              <button className="px-3 py-2 text-xs rounded-lg bg-gray-100 hover:bg-gray-200">
                View
              </button>
              <button className="px-3 py-2 text-xs rounded-lg bg-[color:var(--brand-primary)] text-white">
                Mark Read
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER INSIGHT */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold">AI Notification Insight</h2>
        <p className={`text-sm mt-2 ${muted}`}>
          Most urgent focus: 2 court deadlines within 24 hours require immediate
          attention.
        </p>
      </div>
    </div>
  );
}
