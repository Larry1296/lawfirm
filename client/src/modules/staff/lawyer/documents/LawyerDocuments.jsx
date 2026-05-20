// src/modules/staff/lawyer/documents/LawyerDocuments.jsx

import {
  Download,
  Eye,
  FileArchive,
  FileBadge,
  FileCheck2,
  FileClock,
  FilePenLine,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderKanban,
  Plus,
  Search,
  ShieldCheck,
  Upload,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const documents = [
  {
    id: "DOC-1001",
    name: "Tax Appeal Submission.pdf",
    type: "Court Filing",
    case: "BlueWave Ltd Tax Appeal",
    uploadedBy: "Adv. Sarah Kimani",
    uploadedAt: "18 May 2026",
    status: "Filed",
    size: "2.4 MB",
  },
  {
    id: "DOC-1002",
    name: "Commercial Contract Draft.docx",
    type: "Draft",
    case: "Commercial Agreement Dispute",
    uploadedBy: "Adv. Brian Otieno",
    uploadedAt: "17 May 2026",
    status: "Review",
    size: "1.1 MB",
  },
  {
    id: "DOC-1003",
    name: "Witness Statement.pdf",
    type: "Evidence",
    case: "Republic vs Kamau",
    uploadedBy: "Adv. Lucy Njeri",
    uploadedAt: "16 May 2026",
    status: "Approved",
    size: "3.8 MB",
  },
  {
    id: "DOC-1004",
    name: "Land Transfer Agreement.pdf",
    type: "Contract",
    case: "Kiambu Land Matter",
    uploadedBy: "Adv. James Kariuki",
    uploadedAt: "15 May 2026",
    status: "Pending",
    size: "2.0 MB",
  },
];

export default function LawyerDocuments() {
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

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.case.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ? true : doc.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Filed":
        return "bg-blue-500/10 text-blue-500";
      case "Approved":
        return "bg-green-500/10 text-green-500";
      case "Review":
        return "bg-orange-500/10 text-orange-500";
      case "Pending":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getDocumentIcon = (type) => {
    switch (type) {
      case "Court Filing":
        return <FileCheck2 size={22} />;
      case "Draft":
        return <FilePenLine size={22} />;
      case "Evidence":
        return <ShieldCheck size={22} />;
      case "Contract":
        return <FileSpreadsheet size={22} />;
      default:
        return <FileText size={22} />;
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
            Documents Management
          </h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage court filings, legal drafts, evidence, agreements and firm
            documents securely.
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
            <Upload size={18} />
            Upload
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
            New Document
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
              <p className={`text-sm ${mutedText}`}>Total Documents</p>

              <h2 className="text-3xl font-bold mt-2">1,248</h2>
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
              <FolderKanban size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Court Filings</p>

              <h2 className="text-3xl font-bold mt-2">348</h2>
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
              <FileCheck2 size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Pending Reviews</p>

              <h2 className="text-3xl font-bold mt-2">27</h2>
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
              <FileClock size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Archived</p>

              <h2 className="text-3xl font-bold mt-2">620</h2>
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
              <FileArchive size={24} />
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
            placeholder="Search documents..."
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
          {["All", "Court Filing", "Draft", "Evidence", "Contract"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                px-4
                py-2
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
                      : "bg-white hover:bg-gray-100"
                }
              `}
              >
                {filter}
              </button>
            ),
          )}

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
          DOCUMENT LIST
      ========================== */}
      <div className="space-y-5">
        {filteredDocuments.map((doc) => (
          <div
            key={doc.id}
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
            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              {/* LEFT */}
              <div className="flex items-start gap-5">
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-soft
                    flex-shrink-0
                  "
                >
                  {getDocumentIcon(doc.type)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-bold">{doc.name}</h2>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getStatusStyles(doc.status)}
                      `}
                    >
                      {doc.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
                    <div>
                      <p className={`text-xs ${mutedText}`}>Document Type</p>

                      <h3 className="font-semibold mt-1">{doc.type}</h3>
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Linked Matter</p>

                      <h3 className="font-semibold mt-1">{doc.case}</h3>
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Uploaded By</p>

                      <h3 className="font-semibold mt-1">{doc.uploadedBy}</h3>
                    </div>

                    <div>
                      <p className={`text-xs ${mutedText}`}>Uploaded Date</p>

                      <h3 className="font-semibold mt-1">{doc.uploadedAt}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap gap-3">
                <button
                  className={`
                    px-4
                    py-3
                    rounded-2xl
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
                    py-3
                    rounded-2xl
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
                  <Download size={16} />
                  Download
                </button>

                <button
                  className="
                    px-5
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
                  <FileBadge size={16} />
                  Open File
                </button>
              </div>
            </div>

            {/* FOOTER */}
            <div
              className={`
                mt-6
                pt-5
                border-t
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
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
                  Securely encrypted and compliant with firm policies.
                </span>
              </div>

              <div className={`text-sm ${mutedText}`}>
                File Size: {doc.size}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
