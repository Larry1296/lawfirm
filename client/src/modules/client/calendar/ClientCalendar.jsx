// src/modules/client/calendar/ClientCalendar.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */
import { getClientCalendar } from "../../../services/clientApi";

/* =========================================================
   UTILS
========================================================= */
const getStatusColor = (status) => {
  switch (status) {
    case "UPCOMING":
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
    case "COMPLETED":
      return "text-green-400 bg-green-500/10 border-green-500/30";
    case "MISSED":
      return "text-red-400 bg-red-500/10 border-red-500/30";
    default:
      return "text-blue-400 bg-blue-500/10 border-blue-500/30";
  }
};

export default function ClientCalendar() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getClientCalendar();
        setEvents(res?.data || []);
      } catch (err) {
        console.error("Calendar error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-KE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const today = new Date().toDateString();

  const upcomingEvents = events.filter(
    (e) => new Date(e.date).toDateString() >= today,
  );

  const pastEvents = events.filter(
    (e) => new Date(e.date).toDateString() < today,
  );

  if (loading) {
    return <div className="p-6 text-white">Loading calendar...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <CalendarIcon size={22} />
            Case Calendar
          </h1>
          <p className="text-white/60 text-sm">
            Hearings, deadlines, and legal events
          </p>
        </div>

        <div className="flex items-center gap-2 text-yellow-300">
          <AlertTriangle size={18} />
          <span className="text-sm">Active Case Schedule</span>
        </div>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* UPCOMING */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h2 className="text-white font-semibold mb-3">Upcoming Events</h2>

            <div className="space-y-3">
              {upcomingEvents.length === 0 && (
                <p className="text-white/50 text-sm">No upcoming events</p>
              )}

              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-xl border border-white/10 bg-white/5 flex justify-between"
                >
                  <div className="space-y-1">
                    <h3 className="text-white font-medium">{event.title}</h3>

                    <div className="flex gap-3 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                      </span>

                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location || "Court"}
                      </span>
                    </div>

                    <p className="text-white/40 text-xs">
                      {formatDate(event.date)}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(
                      event.status,
                    )}`}
                  >
                    {event.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PAST */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h2 className="text-white font-semibold mb-3">Past Events</h2>

            <div className="space-y-3">
              {pastEvents.slice(0, 5).map((event) => (
                <div
                  key={event.id}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between"
                >
                  <div>
                    <p className="text-white text-sm">{event.title}</p>
                    <p className="text-white/40 text-xs">
                      {formatDate(event.date)}
                    </p>
                  </div>

                  <CheckCircle2 size={16} className="text-green-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <h2 className="text-white font-semibold mb-3">Calendar Overview</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-white/70">
                <span>Upcoming</span>
                <span className="text-yellow-400">{upcomingEvents.length}</span>
              </div>

              <div className="flex justify-between text-white/70">
                <span>Completed</span>
                <span className="text-green-400">{pastEvents.length}</span>
              </div>

              <div className="flex justify-between text-white/70">
                <span>Total</span>
                <span className="text-blue-400">{events.length}</span>
              </div>
            </div>
          </div>

          {/* MINI CALENDAR */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-3">
              <ChevronLeft size={16} className="text-white/50" />
              <p className="text-white text-sm">This Month</p>
              <ChevronRight size={16} className="text-white/50" />
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-white/40 gap-1">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-white/70 gap-1 mt-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`p-1 rounded ${
                    i === 10 ? "bg-yellow-500 text-black" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
