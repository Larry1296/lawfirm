// src/modules/staff/lawyer/documents/LawyerDrafting.jsx

import {
  BookTemplate,
  CheckCircle2,
  Clock3,
  Copy,
  FilePenLine,
  FileText,
  Gavel,
  PenSquare,
  Plus,
  Save,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const draftTemplates = [
  {
    id: 1,
    title: "Affidavit Template",
    category: "Litigation",
    lastUsed: "2 hours ago",
  },
  {
    id: 2,
    title: "Employment Contract",
    category: "Employment Law",
    lastUsed: "Yesterday",
  },
  {
    id: 3,
    title: "Demand Letter",
    category: "Commercial",
    lastUsed: "3 days ago",
  },
  {
    id: 4,
    title: "Sale Agreement",
    category: "Property Law",
    lastUsed: "1 week ago",
  },
];

const recentDrafts = [
  {
    id: "DRF-1001",
    title: "Tax Appeal Submissions",
    matter: "BlueWave Ltd Tax Appeal",
    status: "In Review",
    updated: "18 May 2026",
  },
  {
    id: "DRF-1002",
    title: "Witness Affidavit",
    matter: "Republic vs Kamau",
    status: "Completed",
    updated: "17 May 2026",
  },
  {
    id: "DRF-1003",
    title: "Commercial Lease Agreement",
    matter: "Westlands Office Lease",
    status: "Drafting",
    updated: "16 May 2026",
  },
];

export default function LawyerDrafting() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");

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
    return draftTemplates.filter((template) =>
      template.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500";
      case "In Review":
        return "bg-orange-500/10 text-orange-500";
      case "Drafting":
        return "bg-blue-500/10 text-blue-500";
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
            Legal Drafting Workspace
          </h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Draft pleadings, affidavits, contracts, agreements and court
            submissions efficiently.
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
            <Save size={18} />
            Save Draft
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
            New Draft
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
              <p className={`text-sm ${mutedText}`}>Active Drafts</p>

              <h2 className="text-3xl font-bold mt-2">42</h2>
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
              <FilePenLine size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Completed</p>

              <h2 className="text-3xl font-bold mt-2">18</h2>
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
              <CheckCircle2 size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Templates</p>

              <h2 className="text-3xl font-bold mt-2">56</h2>
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
              <BookTemplate size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>AI Assistance</p>

              <h2 className="text-3xl font-bold mt-2">Enabled</h2>
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
              <Sparkles size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN GRID
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            EDITOR
        ========================== */}
        <div
          className={`
            xl:col-span-2
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          {/* TOPBAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Draft Editor</h2>

              <p className={`mt-1 text-sm ${mutedText}`}>
                Create legal documents with structured drafting tools.
              </p>
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
                <Copy size={16} />
                Duplicate
              </button>

              <button
                className="
                  px-4
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
                <Wand2 size={16} />
                AI Assist
              </button>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-6">
            <label className={`text-sm font-medium ${mutedText}`}>
              Draft Title
            </label>

            <input
              type="text"
              defaultValue="Commercial Lease Agreement"
              className={`
                mt-2
                w-full
                rounded-2xl
                px-5
                py-4
                outline-none
                border
                transition-all
                duration-300
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
            />
          </div>

          {/* TOOLBAR */}
          <div
            className={`
              mt-6
              rounded-2xl
              p-4
              flex
              flex-wrap
              items-center
              gap-3
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)]"
                  : "bg-[color:var(--background-light)]"
              }
            `}
          >
            {["Heading", "Paragraph", "Clause", "Citation", "Table"].map(
              (tool) => (
                <button
                  key={tool}
                  className={`
                  px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  ${
                    theme === "dark"
                      ? "bg-white/5 hover:bg-white/10"
                      : "bg-white hover:bg-gray-100"
                  }
                `}
                >
                  {tool}
                </button>
              ),
            )}
          </div>

          {/* EDITOR AREA */}
          <div className="mt-6">
            <textarea
              rows={18}
              defaultValue={`THIS COMMERCIAL LEASE AGREEMENT is made on this 18th day of May 2026 between BlueWave Limited and Westlands Towers Limited.

1. TERM OF LEASE
The lease shall run for a period of five (5) years commencing from the execution date.

2. RENT
The tenant agrees to pay monthly rent in accordance with the agreed schedule.

3. GOVERNING LAW
This agreement shall be governed by the Laws of Kenya.

Prepared by:
SheriaDesk Legal LLP
`}
              className={`
                w-full
                rounded-2xl
                p-5
                outline-none
                resize-none
                border
                leading-8
                transition-all
                duration-300
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
            />
          </div>

          {/* FOOTER */}
          <div
            className={`
              mt-6
              pt-5
              border-t
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-4
              ${
                theme === "dark"
                  ? "border-[color:var(--border-dark)]"
                  : "border-[color:var(--border-light)]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-green-500" />

              <span className={`text-sm ${mutedText}`}>
                Auto-save enabled • Secure legal drafting environment
              </span>
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
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </div>

        {/* =========================
            RIGHT SIDEBAR
        ========================== */}
        <div className="space-y-6">
          {/* QUICK TEMPLATES */}
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
                <h2 className="text-xl font-bold">Templates</h2>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  Frequently used legal templates.
                </p>
              </div>

              <BookTemplate
                size={22}
                className="text-[color:var(--brand-primary)]"
              />
            </div>

            {/* SEARCH */}
            <div
              className={`
                mt-5
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                border
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
              <Search size={16} className={mutedText} />

              <input
                type="text"
                placeholder="Search templates..."
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

            {/* TEMPLATE LIST */}
            <div className="space-y-4 mt-5">
              {filteredTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`
                    rounded-2xl
                    p-4
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)]"
                        : "bg-[color:var(--background-light)]"
                    }
                  `}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{template.title}</h3>

                      <p className={`text-sm mt-1 ${mutedText}`}>
                        {template.category}
                      </p>
                    </div>

                    <button
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
                      <PenSquare size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Clock3 size={14} className={mutedText} />

                    <span className={`text-xs ${mutedText}`}>
                      Last used {template.lastUsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT DRAFTS */}
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
                <h2 className="text-xl font-bold">Recent Drafts</h2>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  Recently edited legal drafts.
                </p>
              </div>

              <FileText
                size={22}
                className="text-[color:var(--brand-primary)]"
              />
            </div>

            <div className="space-y-5 mt-6">
              {recentDrafts.map((draft) => (
                <div
                  key={draft.id}
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
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{draft.title}</h3>

                      <p className={`text-sm mt-1 ${mutedText}`}>
                        {draft.matter}
                      </p>
                    </div>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getStatusStyles(draft.status)}
                      `}
                    >
                      {draft.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <Gavel
                      size={14}
                      className="text-[color:var(--brand-primary)]"
                    />

                    <span className={`text-xs ${mutedText}`}>
                      Updated {draft.updated}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COMPLIANCE */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-emerald-500
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <Scale size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold">Legal Compliance</h2>

                <p className={`text-sm ${mutedText}`}>
                  Kenyan legal drafting standards
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>Court Formatting</span>

                <span className="text-green-500 text-sm font-semibold">
                  Valid
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>
                  Citation Standards
                </span>

                <span className="text-green-500 text-sm font-semibold">
                  Updated
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>LSK Compliance</span>

                <span className="text-green-500 text-sm font-semibold">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
