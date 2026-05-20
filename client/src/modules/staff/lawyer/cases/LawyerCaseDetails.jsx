// src/modules/staff/lawyer/cases/LawyerCaseDetails.jsx

import {
  ArrowLeft,
  Briefcase,
  CalendarDays,
  Clock3,
  FileText,
  Gavel,
  Scale,
  User2,
  Users,
  Download,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const caseDetails = {
  id: "SC-2026-001",
  title: "Republic vs Mwangi",
  type: "Criminal Matter",
  court: "Milimani High Court",
  judge: "Hon. Justice Ogola",
  client: "John Mwangi",
  advocate: "John Lawyer",
  status: "Active",
  nextHearing: "20 May 2026",
  hearingTime: "9:00 AM",
  priority: "High",
  description:
    "This matter concerns allegations of fraudulent acquisition of public funds. The defence team is preparing submissions ahead of the upcoming hearing.",
};

const timeline = [
  {
    id: 1,
    title: "Case Filed",
    date: "02 Jan 2026",
    status: "Completed",
  },
  {
    id: 2,
    title: "Preliminary Hearing",
    date: "15 Feb 2026",
    status: "Completed",
  },
  {
    id: 3,
    title: "Witness Statements Submitted",
    date: "10 Mar 2026",
    status: "Completed",
  },
  {
    id: 4,
    title: "Main Hearing",
    date: "20 May 2026",
    status: "Upcoming",
  },
];

const documents = [
  {
    id: 1,
    name: "Charge Sheet.pdf",
    uploaded: "12 Mar 2026",
  },
  {
    id: 2,
    name: "Witness Statement.docx",
    uploaded: "15 Mar 2026",
  },
  {
    id: 3,
    name: "Court Submission.pdf",
    uploaded: "01 Apr 2026",
  },
];

export default function LawyerCaseDetails() {
  const { caseId } = useParams();

  const { theme } = useContext(ThemeContext);

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
          TOP HEADER
      ========================== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <Link
            to="/lawyer/cases"
            className={`
              inline-flex
              items-center
              gap-2
              text-sm
              mb-4
              transition-all
              duration-300
              hover:text-[color:var(--brand-primary)]
              ${mutedText}
            `}
          >
            <ArrowLeft size={16} />
            Back to Cases
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-bold font-display">
              {caseDetails.title}
            </h1>

            <span
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                bg-green-500/10
                text-green-500
              "
            >
              {caseDetails.status}
            </span>
          </div>

          <p className={`mt-2 text-sm ${mutedText}`}>Case ID: {caseId}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            className="
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
            Update Case
          </button>

          <button
            className={`
              px-5
              py-3
              rounded-2xl
              font-medium
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--surface-dark)] hover:bg-white/10"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* =========================
          INFO CARDS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Case Type</p>

              <h2 className="text-xl font-bold mt-2">{caseDetails.type}</h2>
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
              <p className={`text-sm ${mutedText}`}>Court</p>

              <h2 className="text-lg font-bold mt-2">{caseDetails.court}</h2>
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
              <p className={`text-sm ${mutedText}`}>Next Hearing</p>

              <h2 className="text-lg font-bold mt-2">
                {caseDetails.nextHearing}
              </h2>
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
              <p className={`text-sm ${mutedText}`}>Priority</p>

              <h2 className="text-xl font-bold mt-2 text-red-500">
                {caseDetails.priority}
              </h2>
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
          MAIN CONTENT
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            CASE OVERVIEW
        ========================== */}
        <div
          className={`
            xl:col-span-2
            rounded-2xl
            shadow-soft
            p-6
            space-y-6
            ${cardClasses}
          `}
        >
          <div>
            <h2 className="text-2xl font-bold">Case Overview</h2>

            <p className={`mt-2 text-sm leading-7 ${mutedText}`}>
              {caseDetails.description}
            </p>
          </div>

          {/* DETAILS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className={`
                rounded-2xl
                p-5
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <User2
                  size={18}
                  className="text-[color:var(--brand-primary)]"
                />

                <h3 className="font-semibold">Client Information</h3>
              </div>

              <p className="text-sm">{caseDetails.client}</p>
            </div>

            <div
              className={`
                rounded-2xl
                p-5
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Users
                  size={18}
                  className="text-[color:var(--brand-primary)]"
                />

                <h3 className="font-semibold">Assigned Advocate</h3>
              </div>

              <p className="text-sm">{caseDetails.advocate}</p>
            </div>

            <div
              className={`
                rounded-2xl
                p-5
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Gavel
                  size={18}
                  className="text-[color:var(--brand-primary)]"
                />

                <h3 className="font-semibold">Presiding Judge</h3>
              </div>

              <p className="text-sm">{caseDetails.judge}</p>
            </div>

            <div
              className={`
                rounded-2xl
                p-5
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock3
                  size={18}
                  className="text-[color:var(--brand-primary)]"
                />

                <h3 className="font-semibold">Hearing Time</h3>
              </div>

              <p className="text-sm">{caseDetails.hearingTime}</p>
            </div>
          </div>
        </div>

        {/* =========================
            QUICK ACTIONS
        ========================== */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            h-fit
            ${cardClasses}
          `}
        >
          <h2 className="text-xl font-bold mb-5">Quick Actions</h2>

          <div className="space-y-4">
            <button
              className="
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-2xl
                bg-[color:var(--brand-primary)]
                text-white
                font-medium
                hover:opacity-90
                transition-all
                duration-300
              "
            >
              Upload Documents
              <FileText size={18} />
            </button>

            <button
              className={`
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
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
              Send Client Update
              <MessageSquare size={18} />
            </button>

            <button
              className={`
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
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
              Download Files
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          TIMELINE & DOCUMENTS
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* TIMELINE */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          <h2 className="text-2xl font-bold mb-6">Case Timeline</h2>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-4
                      h-4
                      rounded-full
                      ${
                        item.status === "Completed"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }
                    `}
                  />

                  <div
                    className={`
                      w-[2px]
                      flex-1
                      mt-1
                      ${
                        theme === "dark"
                          ? "bg-[color:var(--border-dark)]"
                          : "bg-[color:var(--border-light)]"
                      }
                    `}
                  />
                </div>

                <div className="pb-5">
                  <h3 className="font-semibold">{item.title}</h3>

                  <p className={`text-sm mt-1 ${mutedText}`}>{item.date}</p>

                  <span
                    className={`
                      inline-block
                      mt-2
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        item.status === "Completed"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-orange-500/10 text-orange-500"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENTS */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          <h2 className="text-2xl font-bold mb-6">Case Documents</h2>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`
                  flex
                  items-center
                  justify-between
                  p-5
                  rounded-2xl
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)]"
                      : "bg-[color:var(--background-light)]"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      w-12
                      h-12
                      rounded-2xl
                      bg-[color:var(--brand-primary)]
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <FileText size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">{doc.name}</h3>

                    <p className={`text-xs mt-1 ${mutedText}`}>
                      Uploaded {doc.uploaded}
                    </p>
                  </div>
                </div>

                <button
                  className="
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
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
