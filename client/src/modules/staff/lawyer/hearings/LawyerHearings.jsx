// src/modules/staff/lawyer/hearings/LawyerHearings.jsx

import {
  CalendarDays,
  Clock3,
  Filter,
  Gavel,
  MapPin,
  Plus,
  Scale,
  Search,
  User2,
  Video,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const hearings = [
  {
    id: "HRG-001",
    caseTitle: "Republic vs Mwangi",
    court: "Milimani High Court",
    judge: "Hon. Justice Ogola",
    client: "John Mwangi",
    date: "20 May 2026",
    time: "09:00 AM",
    venue: "Courtroom 3",
    type: "Physical",
    status: "Upcoming",
  },
  {
    id: "HRG-002",
    caseTitle: "KRA Tax Appeal",
    court: "Tax Appeals Tribunal",
    judge: "Hon. Justice Kariuki",
    client: "BlueWave Ltd",
    date: "22 May 2026",
    time: "11:30 AM",
    venue: "Virtual Session",
    type: "Virtual",
    status: "Urgent",
  },
  {
    id: "HRG-003",
    caseTitle: "Otieno Succession Cause",
    court: "Nairobi Probate Court",
    judge: "Hon. Lady Justice Wanjiru",
    client: "Sarah Otieno",
    date: "25 May 2026",
    time: "10:15 AM",
    venue: "Courtroom 6",
    type: "Physical",
    status: "Scheduled",
  },
];

export default function LawyerHearings() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const filteredHearings = hearings.filter((item) =>
    item.caseTitle.toLowerCase().includes(search.toLowerCase()),
  );

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

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Court Hearings</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage hearings, court appearances, mentions, and schedules.
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
          Schedule Hearing
        </button>
      </div>

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Hearings</p>

              <h2 className="text-3xl font-bold mt-2">18</h2>
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
              <Scale size={24} />
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
                bg-emerald-500
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
              <p className={`text-sm ${mutedText}`}>Virtual Sessions</p>

              <h2 className="text-3xl font-bold mt-2">5</h2>
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
              <p className={`text-sm ${mutedText}`}>Urgent Hearings</p>

              <h2 className="text-3xl font-bold mt-2">2</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-red-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FILTER BAR
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-5
          flex
          flex-col
          lg:flex-row
          gap-4
          lg:items-center
          lg:justify-between
          ${cardClasses}
        `}
      >
        {/* SEARCH */}
        <div
          className={`
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            border
            w-full
            lg:max-w-md
            ${
              theme === "dark"
                ? `
                  bg-[color:var(--background-dark)]
                  border-[color:var(--border-dark)]
                `
                : `
                  bg-white
                  border-[color:var(--border-light)]
                `
            }
          `}
        >
          <Search size={18} className={mutedText} />

          <input
            type="text"
            placeholder="Search hearings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
            "
          />
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3 flex-wrap">
          {["All", "Upcoming", "Urgent", "Scheduled"].map((item) => (
            <button
              key={item}
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  item === "All"
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
          HEARING LIST
      ========================== */}
      <div className="space-y-6">
        {filteredHearings.map((hearing) => (
          <div
            key={hearing.id}
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
                  <h2 className="text-2xl font-bold">{hearing.caseTitle}</h2>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        hearing.status === "Upcoming"
                          ? "bg-green-500/10 text-green-500"
                          : hearing.status === "Urgent"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-orange-500/10 text-orange-500"
                      }
                    `}
                  >
                    {hearing.status}
                  </span>
                </div>

                <div
                  className={`
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-5
                    mt-6
                  `}
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
                      <Scale size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Court</p>

                      <h3 className="font-semibold mt-1">{hearing.court}</h3>
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

                      <h3 className="font-semibold mt-1">{hearing.client}</h3>
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
                      <Gavel size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Judge</p>

                      <h3 className="font-semibold mt-1">{hearing.judge}</h3>
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
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Hearing Date</p>

                      <h3 className="font-semibold mt-1">{hearing.date}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-cyan-500
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

                      <h3 className="font-semibold mt-1">{hearing.time}</h3>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-pink-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Venue</p>

                      <h3 className="font-semibold mt-1">{hearing.venue}</h3>
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
                  Open Hearing
                </button>

                <Link
                  to="/lawyer/calendar"
                  className={`
                    w-full
                    px-5
                    py-3
                    rounded-2xl
                    text-center
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
                  View Calendar
                </Link>

                <button
                  className={`
                    w-full
                    px-5
                    py-3
                    rounded-2xl
                    text-center
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
                  Send Reminder
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
