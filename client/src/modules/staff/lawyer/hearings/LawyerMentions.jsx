// src/modules/staff/lawyer/hearings/LawyerMentions.jsx

import {
  AlertCircle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Filter,
  Gavel,
  MapPin,
  Plus,
  Scale,
  Search,
  User2,
} from "lucide-react";

import { useContext, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const mentions = [
  {
    id: "MNT-001",
    caseTitle: "Republic vs Mwangi",
    client: "John Mwangi",
    court: "Milimani High Court",
    judge: "Hon. Justice Ogola",
    mentionDate: "24 May 2026",
    time: "09:30 AM",
    courtroom: "Courtroom 4",
    purpose: "Confirm filing of witness statements",
    status: "Upcoming",
  },
  {
    id: "MNT-002",
    caseTitle: "BlueWave Ltd Tax Appeal",
    client: "BlueWave Ltd",
    court: "Tax Appeals Tribunal",
    judge: "Hon. Justice Kariuki",
    mentionDate: "28 May 2026",
    time: "11:00 AM",
    courtroom: "Virtual Session",
    purpose: "Directions on submissions",
    status: "Scheduled",
  },
  {
    id: "MNT-003",
    caseTitle: "Otieno Succession Cause",
    client: "Sarah Otieno",
    court: "Nairobi Probate Court",
    judge: "Hon. Lady Justice Wanjiru",
    mentionDate: "01 June 2026",
    time: "10:15 AM",
    courtroom: "Courtroom 7",
    purpose: "Compliance confirmation",
    status: "Urgent",
  },
];

export default function LawyerMentions() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const filteredMentions = mentions.filter((mention) =>
    mention.caseTitle.toLowerCase().includes(search.toLowerCase()),
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
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Court Mentions</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage mentions, directions, compliance checks, and court updates.
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
          Schedule Mention
        </button>
      </div>

      {/* =========================
          OVERVIEW STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Mentions</p>

              <h2 className="text-3xl font-bold mt-2">12</h2>
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
              <p className={`text-sm ${mutedText}`}>Upcoming</p>

              <h2 className="text-3xl font-bold mt-2">5</h2>
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
              <p className={`text-sm ${mutedText}`}>Compliance Checks</p>

              <h2 className="text-3xl font-bold mt-2">4</h2>
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
              <CheckCircle2 size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Urgent Mentions</p>

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
              <AlertCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FILTERS
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-5
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
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
            placeholder="Search mentions..."
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

        {/* FILTER BUTTONS */}
        <div className="flex items-center gap-3 flex-wrap">
          {["All", "Upcoming", "Scheduled", "Urgent"].map((item) => (
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
          MENTIONS LIST
      ========================== */}
      <div className="space-y-6">
        {filteredMentions.map((mention) => (
          <div
            key={mention.id}
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
                  <h2 className="text-2xl font-bold">{mention.caseTitle}</h2>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${
                        mention.status === "Upcoming"
                          ? "bg-green-500/10 text-green-500"
                          : mention.status === "Urgent"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-orange-500/10 text-orange-500"
                      }
                    `}
                  >
                    {mention.status}
                  </span>
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
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
                      <Scale size={18} />
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Court</p>

                      <h3 className="font-semibold mt-1">{mention.court}</h3>
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

                      <h3 className="font-semibold mt-1">{mention.client}</h3>
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

                      <h3 className="font-semibold mt-1">{mention.judge}</h3>
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
                      <p className={`text-xs ${mutedText}`}>Mention Date</p>

                      <h3 className="font-semibold mt-1">
                        {mention.mentionDate}
                      </h3>
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

                      <h3 className="font-semibold mt-1">{mention.time}</h3>
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
                      <p className={`text-xs ${mutedText}`}>Courtroom</p>

                      <h3 className="font-semibold mt-1">
                        {mention.courtroom}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* PURPOSE */}
                <div
                  className={`
                    mt-6
                    p-4
                    rounded-2xl
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)]"
                        : "bg-[color:var(--background-light)]"
                    }
                  `}
                >
                  <p className={`text-xs mb-2 ${mutedText}`}>
                    Purpose of Mention
                  </p>

                  <p className="text-sm leading-7">{mention.purpose}</p>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
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
                  Open Mention
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
                  Send Reminder
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
                  Download Brief
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
