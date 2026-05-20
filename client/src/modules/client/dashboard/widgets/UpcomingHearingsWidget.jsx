import { Scale, Clock3, MapPin, User2, AlertTriangle } from "lucide-react";

import { motion } from "framer-motion";

const hearings = [
  {
    case: "Mwangi vs KRA",
    court: "Milimani Commercial Court",
    advocate: "Adv. Kamau",
    time: "9:00 AM",
    date: "Today",
    courtroom: "Courtroom 4",
    urgency: "High",
  },
  {
    case: "Apex Holdings Merger",
    court: "Corporate Tribunal",
    advocate: "Adv. Wanjiru",
    time: "11:30 AM",
    date: "Today",
    courtroom: "Room B12",
    urgency: "Medium",
  },
  {
    case: "Estate of Njoroge",
    court: "Family Division",
    advocate: "Adv. Otieno",
    time: "2:15 PM",
    date: "Tomorrow",
    courtroom: "Courtroom 7",
    urgency: "Low",
  },
];

export default function UpcomingHearingsWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        relative overflow-hidden
        rounded-2xl
        border
        border-border-light dark:border-border-dark
        bg-surface-light dark:bg-surface-dark
        shadow-soft hover:shadow-strong
        transition-all duration-300
        p-6
      "
    >
      {/* BACKDROP */}
      <div
        className="
          absolute inset-0 opacity-40 pointer-events-none
          bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.10),_transparent_35%)]
        "
      />

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <h2
            className="
              text-xl font-bold tracking-tight
              text-slate-900 dark:text-white
            "
          >
            Upcoming Hearings
          </h2>

          <p
            className="
              mt-1 text-sm
              text-slate-500 dark:text-text-muted-dark
            "
          >
            Court schedules and active appearances
          </p>
        </div>

        <div
          className="
            h-12 w-12 rounded-2xl
            flex items-center justify-center
            bg-gradient-to-br from-yellow-500/20 to-orange-500/20
            border border-yellow-500/20
            text-yellow-500
            shadow-[0_8px_24px_rgba(245,158,11,0.25)]
          "
        >
          <Scale size={22} />
        </div>
      </div>

      {/* LIST */}
      <div className="relative z-10 mt-8 space-y-4">
        {hearings.map((hearing, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -3,
              scale: 1.01,
            }}
            className="
              relative overflow-hidden
              rounded-2xl
              border
              border-border-light dark:border-border-dark
              bg-white/40 dark:bg-white/[0.03]
              backdrop-blur-xl
              p-5
              transition-all duration-300
              hover:shadow-medium
            "
          >
            {/* TOP */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="
                    text-base font-bold
                    text-slate-900 dark:text-white
                  "
                >
                  {hearing.case}
                </h3>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-500 dark:text-text-muted-dark
                  "
                >
                  {hearing.court}
                </p>
              </div>

              <div
                className={`
                  px-3 py-1 rounded-full
                  text-xs font-bold
                  border
                  ${
                    hearing.urgency === "High"
                      ? "bg-red-500/10 border-red-500/20 text-red-500"
                      : hearing.urgency === "Medium"
                        ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                  }
                `}
              >
                {hearing.urgency}
              </div>
            </div>

            {/* DETAILS */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* TIME */}
              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-3
                "
              >
                <div
                  className="
                    h-10 w-10 rounded-xl
                    flex items-center justify-center
                    bg-blue-500/10 text-blue-500
                  "
                >
                  <Clock3 size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Schedule
                  </p>

                  <h4
                    className="
                      text-sm font-semibold
                      text-slate-900 dark:text-white
                    "
                  >
                    {hearing.date} • {hearing.time}
                  </h4>
                </div>
              </div>

              {/* ADVOCATE */}
              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-3
                "
              >
                <div
                  className="
                    h-10 w-10 rounded-xl
                    flex items-center justify-center
                    bg-purple-500/10 text-purple-500
                  "
                >
                  <User2 size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Assigned Counsel
                  </p>

                  <h4
                    className="
                      text-sm font-semibold
                      text-slate-900 dark:text-white
                    "
                  >
                    {hearing.advocate}
                  </h4>
                </div>
              </div>

              {/* COURTROOM */}
              <div
                className="
                  flex items-center gap-3
                  rounded-xl
                  bg-slate-100/70 dark:bg-[#182338]
                  p-3
                "
              >
                <div
                  className="
                    h-10 w-10 rounded-xl
                    flex items-center justify-center
                    bg-emerald-500/10 text-emerald-500
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-xs text-slate-500
                      dark:text-text-muted-dark
                    "
                  >
                    Venue
                  </p>

                  <h4
                    className="
                      text-sm font-semibold
                      text-slate-900 dark:text-white
                    "
                  >
                    {hearing.courtroom}
                  </h4>
                </div>
              </div>
            </div>

            {/* AI ALERT */}
            {hearing.urgency === "High" && (
              <div
                className="
                  mt-5 flex items-center gap-2
                  rounded-xl
                  border border-red-500/20
                  bg-red-500/10
                  px-4 py-3
                "
              >
                <AlertTriangle size={16} className="text-red-500" />

                <p className="text-sm text-red-500 font-medium">
                  AI detected urgent litigation priority.
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
