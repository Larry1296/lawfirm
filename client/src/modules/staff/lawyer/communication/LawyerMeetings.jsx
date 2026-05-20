// src/modules/staff/lawyer/communication/LawyerMeetings.jsx

import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Plus,
  Users,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerMeetings() {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("All");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const meetings = [
    {
      id: 1,
      title: "Court Hearing - Civil Case 120/2026",
      type: "Court",
      date: "2026-05-20",
      time: "10:00 AM",
      location: "Milimani Law Courts, Nairobi",
      mode: "Physical",
      participants: ["Lead Lawyer", "Client - Mwangi", "Clerk"],
      status: "Upcoming",
      priority: "High",
    },
    {
      id: 2,
      title: "Client Strategy Meeting - Land Dispute",
      type: "Client",
      date: "2026-05-21",
      time: "2:30 PM",
      location: "Google Meet",
      mode: "Virtual",
      participants: ["Lawyer", "Client - Amina", "Surveyor"],
      status: "Upcoming",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Internal Case Review Session",
      type: "Internal",
      date: "2026-05-18",
      time: "4:00 PM",
      location: "Conference Room B",
      mode: "Physical",
      participants: ["Senior Partner", "Associates"],
      status: "Completed",
      priority: "Low",
    },
    {
      id: 4,
      title: "Urgent Injunction Discussion",
      type: "Court",
      date: "2026-05-19",
      time: "8:00 PM",
      location: "Zoom",
      mode: "Virtual",
      participants: ["Legal Team", "Client"],
      status: "Urgent",
      priority: "High",
    },
  ];

  const filtered = useMemo(() => {
    if (filter === "All") return meetings;
    return meetings.filter((m) => m.status === filter);
  }, [filter]);

  const statusStyle = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-500/10 text-blue-500";
      case "Completed":
        return "bg-green-500/10 text-green-500";
      case "Urgent":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const modeIcon = (mode) => {
    return mode === "Virtual" ? <Video size={16} /> : <MapPin size={16} />;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display">
            Meetings & Court Schedule
          </h1>
          <p className={`text-sm mt-2 ${muted}`}>
            Manage court hearings, client meetings, and internal legal sessions.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <Plus size={18} />
          New Meeting
        </button>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 flex-wrap">
        {["All", "Upcoming", "Completed", "Urgent"].map((f) => (
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

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Upcoming", value: 8, icon: Calendar },
          { label: "Urgent", value: 2, icon: AlertTriangle },
          { label: "Completed", value: 14, icon: CheckCircle2 },
          { label: "Total Meetings", value: 24, icon: Users },
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

      {/* LIST */}
      <div className="space-y-5">
        {filtered.map((m) => (
          <div key={m.id} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">{m.title}</h2>
                <p className={muted}>{m.type} Meeting</p>

                <div className="flex flex-wrap gap-3 mt-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full ${statusStyle(m.status)}`}
                  >
                    {m.status}
                  </span>

                  <span className="flex items-center gap-2">
                    <Clock size={14} /> {m.time}
                  </span>

                  <span className="flex items-center gap-2">
                    {modeIcon(m.mode)} {m.mode}
                  </span>

                  <span className="text-gray-500">{m.date}</span>
                </div>
              </div>

              <div className="text-sm">
                <span className="text-gray-500">Priority:</span>{" "}
                <span className="font-semibold">{m.priority}</span>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              {modeIcon(m.mode)}
              {m.location}
            </div>

            {/* PARTICIPANTS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {m.participants.map((p, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                View
              </button>
              <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white">
                Join
              </button>
              <button className="px-4 py-2 rounded-xl bg-red-500 text-white">
                Reschedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
