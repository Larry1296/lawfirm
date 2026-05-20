// src/modules/staff/lawyer/research/LawyerResearch.jsx

import {
  BookOpen,
  Bookmark,
  Brain,
  ExternalLink,
  FileSearch,
  Filter,
  Gavel,
  Globe,
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

const researchSources = [
  {
    id: "RS-1001",
    title: "Supreme Court Decision on Tax Appeals",
    category: "Tax Law",
    court: "Supreme Court of Kenya",
    date: "17 May 2026",
    relevance: "High",
    summary:
      "Recent precedent clarifying jurisdictional scope of the Tax Appeals Tribunal.",
  },
  {
    id: "RS-1002",
    title: "Employment Termination Guidelines",
    category: "Employment Law",
    court: "Court of Appeal",
    date: "15 May 2026",
    relevance: "Medium",
    summary:
      "Analysis of procedural fairness requirements in employee termination disputes.",
  },
  {
    id: "RS-1003",
    title: "Land Ownership & Succession Rights",
    category: "Property Law",
    court: "Environment & Land Court",
    date: "12 May 2026",
    relevance: "High",
    summary:
      "Interpretation of inheritance rights over ancestral land holdings.",
  },
  {
    id: "RS-1004",
    title: "Commercial Arbitration Enforcement",
    category: "Commercial Law",
    court: "High Court of Kenya",
    date: "09 May 2026",
    relevance: "Low",
    summary:
      "Guidance on recognition and enforcement of arbitral awards in Kenya.",
  },
];

const quickAccess = [
  "Kenya Law Reports",
  "Constitution of Kenya",
  "Civil Procedure Rules",
  "Companies Act",
  "Employment Act",
  "Land Registration Act",
];

export default function LawyerResearch() {
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

  const filteredResearch = useMemo(() => {
    return researchSources.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ? true : item.category === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const getRelevanceStyles = (relevance) => {
    switch (relevance) {
      case "High":
        return "bg-green-500/10 text-green-500";
      case "Medium":
        return "bg-orange-500/10 text-orange-500";
      case "Low":
        return "bg-red-500/10 text-red-500";
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
          <h1 className="text-3xl font-bold font-display">
            Legal Research Center
          </h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Research Kenyan case law, statutes, precedents, regulations and
            legal authorities.
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
            Saved Research
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
            AI Legal Search
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
              <p className={`text-sm ${mutedText}`}>Research Sources</p>

              <h2 className="text-3xl font-bold mt-2">18,420</h2>
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
              <p className={`text-sm ${mutedText}`}>Saved Authorities</p>

              <h2 className="text-3xl font-bold mt-2">214</h2>
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
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>AI Research</p>

              <h2 className="text-3xl font-bold mt-2">Active</h2>
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
              <Brain size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Compliance Verified</p>

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
          SEARCH SECTION
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
              placeholder="Search cases, statutes, authorities or precedents..."
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
            {[
              "All",
              "Tax Law",
              "Employment Law",
              "Property Law",
              "Commercial Law",
            ].map((filter) => (
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
          MAIN GRID
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            RESEARCH RESULTS
        ========================== */}
        <div className="xl:col-span-2 space-y-6">
          {filteredResearch.map((item) => (
            <div
              key={item.id}
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
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold">{item.title}</h2>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getRelevanceStyles(item.relevance)}
                      `}
                    >
                      {item.relevance} Relevance
                    </span>
                  </div>

                  <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                    {item.summary}
                  </p>
                </div>

                <button
                  className="
                    px-4
                    py-3
                    rounded-2xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    text-sm
                    font-medium
                    flex
                    items-center
                    gap-2
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
                >
                  <ExternalLink size={16} />
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
                    <Scale
                      size={16}
                      className="text-[color:var(--brand-primary)]"
                    />

                    <span className={`text-xs ${mutedText}`}>Category</span>
                  </div>

                  <h3 className="font-semibold mt-3">{item.category}</h3>
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
                    <Landmark
                      size={16}
                      className="text-[color:var(--brand-primary)]"
                    />

                    <span className={`text-xs ${mutedText}`}>Court</span>
                  </div>

                  <h3 className="font-semibold mt-3">{item.court}</h3>
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

                    <span className={`text-xs ${mutedText}`}>
                      Decision Date
                    </span>
                  </div>

                  <h3 className="font-semibold mt-3">{item.date}</h3>
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
                  <ShieldCheck size={16} className="text-green-500" />

                  <span className={`text-sm ${mutedText}`}>
                    Verified legal authority from official Kenyan sources.
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
                    Analyze
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            SIDEBAR
        ========================== */}
        <div className="space-y-6">
          {/* QUICK ACCESS */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Quick Access</h2>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  Frequently used legal resources.
                </p>
              </div>

              <Globe size={22} className="text-[color:var(--brand-primary)]" />
            </div>

            <div className="space-y-4 mt-6">
              {quickAccess.map((item, index) => (
                <button
                  key={index}
                  className={`
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)] hover:bg-white/5"
                        : "bg-[color:var(--background-light)] hover:bg-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[color:var(--brand-primary)]
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <BookOpen size={18} />
                    </div>

                    <span className="text-sm font-medium text-left">
                      {item}
                    </span>
                  </div>

                  <ExternalLink size={16} className={mutedText} />
                </button>
              ))}
            </div>
          </div>

          {/* AI RESEARCH */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <div className="flex items-start gap-4">
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
                  flex-shrink-0
                "
              >
                <Brain size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold">AI Legal Research</h2>

                <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                  Generate legal summaries, identify precedents and analyze
                  Kenyan legal authorities using AI-powered research tools.
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <button
                className="
                  w-full
                  px-5
                  py-3
                  rounded-2xl
                  bg-[color:var(--brand-primary)]
                  text-white
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <Sparkles size={18} />
                Start AI Research
              </button>

              <button
                className={`
                  w-full
                  px-5
                  py-3
                  rounded-2xl
                  font-medium
                  flex
                  items-center
                  justify-center
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
                <BookOpen size={18} />
                Open Knowledge Base
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
