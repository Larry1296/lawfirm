// src/modules/staff/lawyer/documents/LawyerTemplates.jsx

import {
  BadgeCheck,
  BookCopy,
  Briefcase,
  Building2,
  Clock3,
  Copy,
  Eye,
  FileCheck2,
  FilePenLine,
  FileText,
  Filter,
  FolderOpen,
  Gavel,
  Landmark,
  Plus,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wand2,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const templateCategories = [
  "All",
  "Litigation",
  "Commercial",
  "Employment",
  "Property",
  "Family",
];

const templates = [
  {
    id: "TPL-1001",
    title: "Statement of Defence",
    category: "Litigation",
    usage: 142,
    updated: "16 May 2026",
    featured: true,
    description:
      "Standard defence pleadings template compliant with Kenyan civil procedure rules.",
  },
  {
    id: "TPL-1002",
    title: "Employment Agreement",
    category: "Employment",
    usage: 98,
    updated: "14 May 2026",
    featured: false,
    description:
      "Employment contract template aligned with Kenyan labour regulations.",
  },
  {
    id: "TPL-1003",
    title: "Sale Agreement",
    category: "Property",
    usage: 121,
    updated: "12 May 2026",
    featured: true,
    description:
      "Land and property sale agreement template for conveyancing transactions.",
  },
  {
    id: "TPL-1004",
    title: "Demand Letter",
    category: "Commercial",
    usage: 187,
    updated: "18 May 2026",
    featured: false,
    description: "Commercial debt recovery and legal demand letter template.",
  },
  {
    id: "TPL-1005",
    title: "Child Custody Application",
    category: "Family",
    usage: 54,
    updated: "10 May 2026",
    featured: false,
    description:
      "Family court child custody filing template with supporting affidavit sections.",
  },
];

export default function LawyerTemplates() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.title.toLowerCase().includes(search.toLowerCase()) ||
        template.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ? true : template.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Litigation":
        return <Gavel size={20} />;
      case "Commercial":
        return <Briefcase size={20} />;
      case "Employment":
        return <Users size={20} />;
      case "Property":
        return <Building2 size={20} />;
      case "Family":
        return <Landmark size={20} />;
      default:
        return <FileText size={20} />;
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
            Legal Templates Library
          </h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Access reusable legal drafting templates for litigation, contracts,
            employment, conveyancing and court filings.
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
            <Wand2 size={18} />
            AI Generate
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
            <Plus size={18} />
            New Template
          </button>
        </div>
      </div>

      {/* =========================
          OVERVIEW CARDS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Templates</p>

              <h2 className="text-3xl font-bold mt-2">214</h2>
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
              <BookCopy size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Litigation</p>

              <h2 className="text-3xl font-bold mt-2">62</h2>
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
              <p className={`text-sm ${mutedText}`}>Frequently Used</p>

              <h2 className="text-3xl font-bold mt-2">39</h2>
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
              <Star size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Verified Templates</p>

              <h2 className="text-3xl font-bold mt-2">100%</h2>
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
              <BadgeCheck size={24} />
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
            placeholder="Search legal templates..."
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
          {templateCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : theme === "dark"
                      ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                      : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {category}
            </button>
          ))}

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
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            <Filter size={16} />
            Advanced
          </button>
        </div>
      </div>

      {/* =========================
          TEMPLATE GRID
      ========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
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
            <div className="flex items-start justify-between gap-4">
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
                  {getCategoryIcon(template.category)}
                </div>

                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-xl font-bold">{template.title}</h2>

                    {template.featured && (
                      <span
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-yellow-500/10
                          text-yellow-500
                          text-xs
                          font-semibold
                        "
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
                    {template.description}
                  </p>
                </div>
              </div>
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
                  <FolderOpen
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Category</span>
                </div>

                <h3 className="font-semibold mt-3">{template.category}</h3>
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
                  <Copy
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Usage</span>
                </div>

                <h3 className="font-semibold mt-3">{template.usage} uses</h3>
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
                  <Clock3
                    size={16}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className={`text-xs ${mutedText}`}>Updated</span>
                </div>

                <h3 className="font-semibold mt-3">{template.updated}</h3>
              </div>
            </div>

            {/* ACTIONS */}
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
                  Verified for Kenyan legal practice
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
                  <Eye size={16} />
                  Preview
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
                  <Sparkles size={16} />
                  Customize
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
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
                >
                  <FilePenLine size={16} />
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          FOOTER INFO
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
              bg-emerald-500
              text-white
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <FileCheck2 size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold">Smart Legal Templates</h2>

            <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
              All templates are structured for Kenyan legal workflows, court
              filing standards, commercial documentation and compliance
              requirements.
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
          <Plus size={18} />
          Create Custom Template
        </button>
      </div>
    </div>
  );
}
