// src/modules/staff/lawyer/cases/LawyerCases.jsx

import {
  Briefcase,
  Search,
  Filter,
  Plus,
  Eye,
  CalendarDays,
  Scale,
  User2,
  Clock3,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const cases = [
  {
    id: "SC-2026-001",
    title: "Republic vs Mwangi",
    client: "John Mwangi",
    court: "Milimani High Court",
    type: "Criminal",
    status: "Active",
    nextHearing: "20 May 2026",
    priority: "High",
  },
  {
    id: "SC-2026-002",
    title: "Otieno Family Succession",
    client: "Sarah Otieno",
    court: "Nairobi Probate Court",
    type: "Succession",
    status: "Pending",
    nextHearing: "22 May 2026",
    priority: "Medium",
  },
  {
    id: "SC-2026-003",
    title: "KRA Tax Appeal",
    client: "BlueWave Ltd",
    court: "Tax Appeals Tribunal",
    type: "Tax",
    status: "Urgent",
    nextHearing: "24 May 2026",
    priority: "Critical",
  },
  {
    id: "SC-2026-004",
    title: "Land Ownership Dispute",
    client: "James Kariuki",
    court: "Environment & Land Court",
    type: "Land",
    status: "Closed",
    nextHearing: "Completed",
    priority: "Low",
  },
];

export default function LawyerCases() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

  const filteredCases = cases.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
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
          <h1 className="text-3xl font-bold font-display">Case Management</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage all active, pending, and completed legal matters.
          </p>
        </div>

        {/* ACTION BUTTON */}
        <Link
          to="/lawyer/cases/create"
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
          Create Case
        </Link>
      </div>

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Active Cases</p>

              <h2 className="text-3xl font-bold mt-2">48</h2>
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
              <Briefcase size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Hearings This Week</p>

              <h2 className="text-3xl font-bold mt-2">12</h2>
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
              <Scale size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Pending Filings</p>

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
              <CalendarDays size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Urgent Matters</p>

              <h2 className="text-3xl font-bold mt-2">4</h2>
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
              <Clock3 size={24} />
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
            placeholder="Search cases..."
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
          {["All", "Active", "Pending", "Urgent", "Closed"].map((status) => (
            <button
              key={status}
              className={`
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    status === "All"
                      ? "bg-[color:var(--brand-primary)] text-white"
                      : theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-white hover:bg-gray-100"
                  }
                `}
            >
              {status}
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
          CASE TABLE
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          overflow-hidden
          ${cardClasses}
        `}
      >
        {/* TABLE HEADER */}
        <div
          className={`
            hidden
            lg:grid
            grid-cols-7
            gap-4
            px-6
            py-4
            border-b
            text-sm
            font-semibold
            ${
              theme === "dark"
                ? "border-[color:var(--border-dark)]"
                : "border-[color:var(--border-light)]"
            }
          `}
        >
          <span>Case</span>
          <span>Client</span>
          <span>Court</span>
          <span>Type</span>
          <span>Status</span>
          <span>Next Hearing</span>
          <span>Actions</span>
        </div>

        {/* TABLE BODY */}
        <div className="divide-y divide-[color:var(--border-light)] dark:divide-[color:var(--border-dark)]">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className={`
                grid
                grid-cols-1
                lg:grid-cols-7
                gap-4
                px-6
                py-5
                transition-all
                duration-300
                hover:bg-black/5
                dark:hover:bg-white/5
              `}
            >
              {/* CASE */}
              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className={`text-xs mt-1 ${mutedText}`}>{item.id}</p>
              </div>

              {/* CLIENT */}
              <div className="flex items-center gap-2">
                <User2 size={16} className={mutedText} />

                <span className="text-sm">{item.client}</span>
              </div>

              {/* COURT */}
              <div className="text-sm">{item.court}</div>

              {/* TYPE */}
              <div>
                <span
                  className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-blue-500/10
                    text-blue-500
                    font-medium
                  "
                >
                  {item.type}
                </span>
              </div>

              {/* STATUS */}
              <div>
                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-medium
                    ${
                      item.status === "Active"
                        ? "bg-green-500/10 text-green-500"
                        : item.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : item.status === "Urgent"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-gray-500/10 text-gray-500"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              {/* HEARING */}
              <div className="text-sm">{item.nextHearing}</div>

              {/* ACTIONS */}
              <div className="flex items-center gap-3">
                <Link
                  to={`/lawyer/cases/${item.id}`}
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    text-sm
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
                >
                  <Eye size={16} />
                  View
                </Link>

                <Link
                  to={`/lawyer/cases/${item.id}/timeline`}
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    transition-all
                    duration-300
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                  `}
                >
                  Timeline
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
