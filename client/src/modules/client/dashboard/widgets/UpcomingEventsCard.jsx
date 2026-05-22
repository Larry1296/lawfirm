import { motion } from "framer-motion";
import { Calendar, AlertCircle, Clock } from "lucide-react";

export default function UpcomingEventsCard({ events = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case "hearing":
        return <Calendar size={16} className="text-blue-400" />;
      case "deadline":
        return <AlertCircle size={16} className="text-red-400" />;
      default:
        return <Clock size={16} className="text-yellow-400" />;
    }
  };

  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[color:var(--surface-dark)] rounded-2xl p-5 shadow-soft border border-white/10"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <Calendar size={18} />
          Upcoming Events
        </h2>

        <span className="text-xs text-white/40">Court & Deadlines</span>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {sortedEvents.length === 0 ? (
          <p className="text-white/50 text-sm">No upcoming events</p>
        ) : (
          sortedEvents.map((event) => {
            const isToday =
              new Date(event.date).toDateString() === new Date().toDateString();

            const isPast = new Date(event.date) < new Date();

            return (
              <div
                key={event.id}
                className="flex items-start justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                {/* LEFT */}
                <div className="flex items-start gap-2">
                  {getIcon(event.type)}

                  <div>
                    <p className="text-white text-sm font-medium">
                      {event.title}
                    </p>

                    <p className="text-white/40 text-xs">
                      {new Date(event.date).toDateString()}
                    </p>
                  </div>
                </div>

                {/* RIGHT BADGE */}
                <div className="text-right">
                  {isToday && (
                    <span className="text-xs text-yellow-400 font-semibold">
                      TODAY
                    </span>
                  )}

                  {isPast && !isToday && (
                    <span className="text-xs text-red-400 font-semibold">
                      MISSED
                    </span>
                  )}

                  {!isToday && !isPast && (
                    <span className="text-xs text-white/40">Scheduled</span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-4 pt-3 border-t border-white/10 text-xs text-white/40">
        AI will notify you before each court event or deadline
      </div>
    </motion.div>
  );
}
