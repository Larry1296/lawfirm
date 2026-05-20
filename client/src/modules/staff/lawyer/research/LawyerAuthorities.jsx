// src/modules/staff/lawyer/research/LawyerAuthorities.jsx

import {
  BadgeCheck,
  BookOpen,
  Bookmark,
  Building2,
  ExternalLink,
  FileCheck2,
  FileSearch,
  Filter,
  Gavel,
  Landmark,
  Library,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const authorityFilters = [
  "All",
  "Supreme Court",
  "Court of Appeal",
  "High Court",
  "ELC",
  "Employment Court",
];

const authorities = [
  {
    id: "AUTH-1001",
    title: "Republic v Kenya Revenue Authority",
    citation: "[2025] KESC 14",
    court: "Supreme Court",
    practiceArea: "Tax Law",
    date: "14 April 2025",
    status: "Binding",
    summary:
      "Clarified constitutional limits on retrospective tax enforcement and taxpayer protections.",
  },
  {
    id: "AUTH-1002",
    title: "Mwangi v Apex Holdings Ltd",
    citation: "[2025] KECA 212",
    court: "Court of Appeal",
    practiceArea: "Commercial Law",
    date: "22 June 2025",
    status: "Persuasive",
    summary:
      "Interpretation of shareholder obligations and fiduciary responsibilities in private companies.",
  },
  {
    id: "AUTH-1003",
    title: "Achieng v Nairobi County Government",
    citation: "[2026] KEELRC 19",
    court: "Employment Court",
    practiceArea: "Employment Law",
    date: "10 February 2026",
    status: "Binding",
    summary:
      "Expanded employee rights regarding procedural fairness in disciplinary dismissals.",
  },
  {
    id: "AUTH-1004",
    title: "Estate of Kariuki",
    citation: "[2026] KELC 88",
    court: "ELC",
    practiceArea: "Property Law",
    date: "18 January 2026",
    status: "Binding",
    summary:
      "Guidance on ancestral land inheritance and registration disputes.",
  },
];

export default function LawyerAuthorities() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
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

  const filteredAuthorities = useMemo(() => {
    return authorities.filter((authority) => {
      const matchesSearch =
        authority.title.toLowerCase().includes(search.toLowerCase()) ||
        authority.practiceArea.toLowerCase().includes(search.toLowerCase()) ||
        authority.citation.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ? true : authority.court === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Binding":
        return "bg-green-500/10 text-green-500";
      case "Persuasive":
        return "bg-orange-500/10 text-orange-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Legal Authorities</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Browse authoritative Kenyan judicial precedents, court decisions,
            legal citations and binding authorities.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className={`
              px-5
              py-3
              rounded-2xl
              font-medium
              flex
              items-center
              gap-2
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            <Bookmark size={18} />
            Saved Authorities
          </button>

          <button
            className="
              px-5
              py-3
              rounded-2xl
              bg-[color:var(--brand-primary)]
              text-white
              font-medium
              flex
              items-center
              gap-2
              hover:opacity-90
              transition-all
              duration-300
            "
          >
            <Sparkles size={18} />
            AI Citation Analysis
          </button>
        </div>
      </div>

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Authorities</p>

              <h2 className="text-3xl font-bold mt-2">12,480</h2>
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
              <Library size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Binding Authorities</p>

              <h2 className="text-3xl font-bold mt-2">8,204</h2>
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
              <BadgeCheck size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Supreme Court</p>

              <h2 className="text-3xl font-bold mt-2">1,208</h2>
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
              <Landmark size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Verified Citations</p>

              <h2 className="text-3xl font-bold mt-2">100%</h2>
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
              <ShieldCheck size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          SEARCH & FILTERS
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-6
          ${cardClasses}
        `}
      >
        <div className="flex flex-col xl:flex-row xl:items-center gap-4">
          {/* SEARCH */}
          <div
            className={`
              flex
              items-center
              gap-3
              px-5
              py-4
              rounded-2xl
              border
              flex-1
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
            <Search size={20} className={mutedText} />

            <input
              type="text"
              placeholder="Search case authorities, citations or courts..."
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
          <div className="flex flex-wrap gap-3">
            {authorityFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    activeFilter === filter
                      ? "bg-[color:var(--brand-primary)] text-white"
                      : theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                {filter}
              </button>
            ))}

            <button
              className={`
                px-4
                py-3
                rounded-xl
                text-sm
                font-medium
                flex
                items-center
                gap-2
                transition-all
                duration-300
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
                }
              `}
            >
              <Filter size={16} />
              Advanced
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          AUTHORITIES LIST
      ========================== */}
      <div className="space-y-6">
        {filteredAuthorities.map((authority) => (
          <div
            key={authority.id}
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
            {/* HEADER */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold">{authority.title}</h2>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                      ${getStatusStyles(authority.status)}
                    `}
                  >
                    {authority.status}
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    text-[color:var(--brand-primary)]
                    font-semibold
                  "
                >
                  {authority.citation}
                </p>

                <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                  {authority.summary}
                </p>
              </div>

              <button
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-[color:var(--brand-primary)]
                  text-white
                  font-medium
                  flex
                  items-center
                  gap-2
                  hover:opacity-90
                  transition-all
                  duration-300
                "
              >
                <ExternalLink size={18} />
                Open Authority
              </button>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div
                className={`
                  rounded-2xl
                  p-4
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)]"
                      : "bg-[color:var(--background-light)]"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Building2
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Court</span>
                </div>

                <h3 className="font-semibold mt-3">{authority.court}</h3>
              </div>

              <div
                className={`
                  rounded-2xl
                  p-4
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)]"
                      : "bg-[color:var(--background-light)]"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Scale
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Practice Area</span>
                </div>

                <h3 className="font-semibold mt-3">{authority.practiceArea}</h3>
              </div>

              <div
                className={`
                  rounded-2xl
                  p-4
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)]"
                      : "bg-[color:var(--background-light)]"
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <Gavel
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Decision Date</span>
                </div>

                <h3 className="font-semibold mt-3">{authority.date}</h3>
              </div>
            </div>

            {/* FOOTER */}
            <div
              className={`
                mt-6
                pt-5
                border-t
                flex
                flex-wrap
                items-center
                justify-between
                gap-4
                ${
                  theme === "dark"
                    ? "border-[color:var(--border-dark)]"
                    : "border-[color:var(--border-light)]"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <FileCheck2 size={16} className="text-green-500" />

                <span className={`text-sm ${mutedText}`}>
                  Citation verified against Kenyan judicial records.
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-medium
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-300
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                  `}
                >
                  <Bookmark size={16} />
                  Save
                </button>

                <button
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-medium
                    flex
                    items-center
                    gap-2
                    transition-all
                    duration-300
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                  `}
                >
                  <Star size={16} />
                  Cite
                </button>

                <button
                  className="
                    px-5
                    py-2
                    rounded-xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    text-sm
                    font-medium
                    flex
                    items-center
                    gap-2
                  "
                >
                  <FileSearch size={16} />
                  Analyze Case
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          FOOTER CARD
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-6
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
          ${cardClasses}
        `}
      >
        <div className="flex items-start gap-4">
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[color:var(--brand-primary)]
              text-white
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <BookOpen size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Kenyan Legal Authorities Database
            </h2>

            <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
              Access court precedents, judicial opinions and authoritative
              decisions relied upon in Kenyan litigation and legal practice.
            </p>
          </div>
        </div>

        <button
          className="
            px-6
            py-3
            rounded-2xl
            bg-[color:var(--brand-primary)]
            text-white
            font-medium
            flex
            items-center
            gap-2
            hover:opacity-90
            transition-all
            duration-300
            self-start
            lg:self-auto
          "
        >
          <Sparkles size={18} />
          AI Authority Matching
        </button>
      </div>
    </div>
  );
}
