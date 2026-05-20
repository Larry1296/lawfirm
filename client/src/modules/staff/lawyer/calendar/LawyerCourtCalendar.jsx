// src/modules/staff/lawyer/calendar/LawyerCourtCalendar.jsx

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Filter,
  Gavel,
  Plus,
  Scale,
  User2,
  Video,
} from "lucide-react";

import { useContext, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const events = [
  {
    id: 1,
    title: "Republic vs Mwangi Hearing",
    date: "19 May 2026",
    time: "09:00 AM",
    type: "Hearing",
    venue: "Milimani High Court",
    client: "John Mwangi",
  },
  {
    id: 2,
    title: "BlueWave Tax Mention",
    date: "20 May 2026",
    time: "11:30 AM",
    type: "Mention",
    venue: "Virtual Session",
    client: "BlueWave Ltd",
  },
  {
    id: 3,
    title: "Client Consultation",
    date: "21 May 2026",
    time: "02:00 PM",
    type: "Meeting",
    venue: "Law Firm Boardroom",
    client: "Sarah Otieno",
  },
  {
    id: 4,
    title: "Succession Cause Hearing",
    date: "22 May 2026",
    time: "10:15 AM",
    type: "Court",
    venue: "Probate Court",
    client: "Otieno Family",
  },
];

const calendarDays = [
  { day: "Mon", date: 18 },
  { day: "Tue", date: 19 },
  { day: "Wed", date: 20 },
  { day: "Thu", date: 21 },
  { day: "Fri", date: 22 },
  { day: "Sat", date: 23 },
  { day: "Sun", date: 24 },
];

export default function LawyerCourtCalendar() {
  const { theme } = useContext(ThemeContext);

  const [activeFilter, setActiveFilter] = useState("All");

  const cardClasses =
    theme === "dark"
      ? `
        bg-[color:var(--surface-dark)]
        border
        border-[color:var(--border-dark)]
      `
      : `
        bg-[color:var(--surface-light)]
        border
        border-[color:var(--border-light)]
      `;

  const mutedText =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const getTypeColor = (type) => {
    switch (type) {
      case "Hearing":
        return "bg-blue-500";
      case "Mention":
        return "bg-orange-500";
      case "Meeting":
        return "bg-violet-500";
      case "Court":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.type === activeFilter);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Court Calendar</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Organize hearings, mentions, consultations, and legal schedules.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-[color:var(--brand-primary)]
            text-white
            font-medium
            shadow-soft
            hover:opacity-90
            transition-all
            duration-300
          "
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Events</p>

              <h2 className="text-3xl font-bold mt-2">24</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <CalendarDays size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Hearings</p>

              <h2 className="text-3xl font-bold mt-2">9</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Scale size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Virtual Sessions</p>

              <h2 className="text-3xl font-bold mt-2">6</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-violet-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Video size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>This Week</p>

              <h2 className="text-3xl font-bold mt-2">7</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Clock3 size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          CALENDAR TOPBAR
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-5
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-4
          ${cardClasses}
        `}
      >
        {/* MONTH NAVIGATION */}
        <div className="flex items-center gap-4">
          <button
            className={`
              p-3
              rounded-xl
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            <ChevronLeft size={18} />
          </button>

          <div>
            <h2 className="text-xl font-bold">May 2026</h2>

            <p className={`text-sm ${mutedText}`}>
              Weekly legal calendar overview
            </p>
          </div>

          <button
            className={`
              p-3
              rounded-xl
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3 flex-wrap">
          {["All", "Hearing", "Mention", "Meeting", "Court"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeFilter === item
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : theme === "dark"
                      ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                      : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          ))}

          <button
            className={`
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* =========================
          WEEK CALENDAR
      ========================== */}
      <div
        className={`
          grid
          grid-cols-2
          sm:grid-cols-4
          xl:grid-cols-7
          gap-4
        `}
      >
        {calendarDays.map((item) => (
          <div
            key={item.date}
            className={`
              rounded-2xl
              p-5
              text-center
              shadow-soft
              transition-all
              duration-300
              hover:-translate-y-1
              ${
                item.date === 19
                  ? "bg-[color:var(--brand-primary)] text-white"
                  : cardClasses
              }
            `}
          >
            <p
              className={`
                text-sm
                ${item.date === 19 ? "text-white/70" : mutedText}
              `}
            >
              {item.day}
            </p>

            <h3 className="text-3xl font-bold mt-2">{item.date}</h3>

            <p className="text-xs mt-2">
              {item.date === 19 ? "3 Events" : "1 Event"}
            </p>
          </div>
        ))}
      </div>

      {/* =========================
          EVENT LIST
      ========================== */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className={`
              rounded-2xl
              shadow-soft
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              ${cardClasses}
            `}
          >
            <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
              {/* LEFT */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <div
                    className={`
                      w-12
                      h-12
                      rounded-2xl
                      text-white
                      flex
                      items-center
                      justify-center
                      ${getTypeColor(event.type)}
                    `}
                  >
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{event.title}</h2>

                    <p className={`text-sm mt-1 ${mutedText}`}>
                      {event.type} Session
                    </p>
                  </div>
                </div>

                {/* DETAILS */}
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-5
                    mt-6
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-blue-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Date</p>

                      <h3 className="font-semibold mt-1">{event.date}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-orange-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Clock3 size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Time</p>

                      <h3 className="font-semibold mt-1">{event.time}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-violet-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Gavel size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Venue</p>

                      <h3 className="font-semibold mt-1">{event.venue}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-emerald-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <User2 size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Client</p>

                      <h3 className="font-semibold mt-1">{event.client}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3 xl:w-52">
                <button
                  className="
                    w-full
                    px-5
                    py-3
                    rounded-2xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    font-medium
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
                >
                  Open Event
                </button>

                <button
                  className={`
                    w-full
                    px-5
                    py-3
                    rounded-2xl
                    font-medium
                    transition-all
                    duration-300
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                  `}
                >
                  Edit Schedule
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
