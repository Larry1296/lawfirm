// src/modules/staff/lawyer/cases/LawyerCaseTimeline.jsx

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  FileText,
  Gavel,
  MessageSquare,
  Plus,
  Scale,
  User2,
  CheckCircle2,
  AlertCircle,
  Upload,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const timelineEvents = [
  {
    id: 1,
    title: "Case Filed",
    date: "02 Jan 2026",
    time: "09:30 AM",
    description: "The matter was officially filed at Milimani High Court.",
    type: "filing",
    status: "completed",
  },
  {
    id: 2,
    title: "Preliminary Hearing",
    date: "15 Feb 2026",
    time: "11:00 AM",
    description:
      "The court issued directions and scheduled witness statements.",
    type: "hearing",
    status: "completed",
  },
  {
    id: 3,
    title: "Evidence Uploaded",
    date: "10 Mar 2026",
    time: "02:15 PM",
    description:
      "Supporting exhibits and documentary evidence uploaded to the system.",
    type: "document",
    status: "completed",
  },
  {
    id: 4,
    title: "Client Consultation",
    date: "22 Apr 2026",
    time: "04:00 PM",
    description: "Meeting conducted with client to review defence submissions.",
    type: "meeting",
    status: "completed",
  },
  {
    id: 5,
    title: "Main Hearing",
    date: "20 May 2026",
    time: "09:00 AM",
    description: "Scheduled court appearance before Hon. Justice Ogola.",
    type: "court",
    status: "upcoming",
  },
];

export default function LawyerCaseTimeline() {
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

  const getIcon = (type) => {
    switch (type) {
      case "filing":
        return <FileText size={18} />;
      case "hearing":
        return <Scale size={18} />;
      case "document":
        return <Upload size={18} />;
      case "meeting":
        return <MessageSquare size={18} />;
      case "court":
        return <Gavel size={18} />;
      default:
        return <CalendarDays size={18} />;
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case "filing":
        return "bg-blue-500";
      case "hearing":
        return "bg-orange-500";
      case "document":
        return "bg-emerald-500";
      case "meeting":
        return "bg-violet-500";
      case "court":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <Link
            to={`/lawyer/cases/${caseId}`}
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
            Back to Case Details
          </Link>

          <h1 className="text-3xl font-bold font-display">Case Timeline</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Track all legal activities, filings, hearings, and progress for case
            #{caseId}.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3 flex-wrap">
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
            Export Timeline
          </button>

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
            Add Activity
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
              <p className={`text-sm ${mutedText}`}>Total Activities</p>

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
              <CalendarDays size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Court Sessions</p>

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
              <Scale size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Documents Filed</p>

              <h2 className="text-3xl font-bold mt-2">24</h2>
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
              <FileText size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Upcoming Events</p>

              <h2 className="text-3xl font-bold mt-2">3</h2>
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
          MAIN CONTENT
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* =========================
            TIMELINE
        ========================== */}
        <div
          className={`
            xl:col-span-3
            rounded-2xl
            shadow-soft
            p-6 lg:p-8
            ${cardClasses}
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Activity Timeline</h2>

              <p className={`mt-2 text-sm ${mutedText}`}>
                Complete history of actions and proceedings.
              </p>
            </div>
          </div>

          {/* TIMELINE LIST */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="flex gap-5">
                {/* LEFT LINE */}
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      w-12
                      h-12
                      rounded-2xl
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-soft
                      ${getIconColor(event.type)}
                    `}
                  >
                    {getIcon(event.type)}
                  </div>

                  {index !== timelineEvents.length - 1 && (
                    <div
                      className={`
                        w-[2px]
                        flex-1
                        mt-3
                        ${
                          theme === "dark"
                            ? "bg-[color:var(--border-dark)]"
                            : "bg-[color:var(--border-light)]"
                        }
                      `}
                    />
                  )}
                </div>

                {/* RIGHT CONTENT */}
                <div
                  className={`
                    flex-1
                    rounded-2xl
                    p-5
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)]"
                        : "bg-[color:var(--background-light)]"
                    }
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>

                      <div
                        className={`
                          flex
                          flex-wrap
                          items-center
                          gap-4
                          mt-2
                          text-sm
                          ${mutedText}
                        `}
                      >
                        <div className="flex items-center gap-2">
                          <CalendarDays size={14} />
                          {event.date}
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock3 size={14} />
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        w-fit
                        ${
                          event.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-orange-500/10 text-orange-500"
                        }
                      `}
                    >
                      {event.status === "completed" ? (
                        <CheckCircle2 size={14} />
                      ) : (
                        <AlertCircle size={14} />
                      )}

                      {event.status}
                    </span>
                  </div>

                  <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            SIDEBAR
        ========================== */}
        <div className="space-y-6">
          {/* CASE INFO */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <h2 className="text-xl font-bold mb-5">Case Information</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
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

                  <h3 className="font-semibold mt-1">Milimani High Court</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
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

                  <h3 className="font-semibold mt-1">John Mwangi</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10
                    h-10
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

                  <h3 className="font-semibold mt-1">Hon. Justice Ogola</h3>
                </div>
              </div>
            </div>
          </div>

          {/* UPCOMING */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <h2 className="text-xl font-bold mb-5">Upcoming Event</h2>

            <div
              className={`
                rounded-2xl
                p-5
                border
                ${
                  theme === "dark"
                    ? `
                      bg-[color:var(--background-dark)]
                      border-[color:var(--border-dark)]
                    `
                    : `
                      bg-[color:var(--background-light)]
                      border-[color:var(--border-light)]
                    `
                }
              `}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-red-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <CalendarDays size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">Main Hearing</h3>

                  <p className={`text-sm ${mutedText}`}>20 May 2026</p>
                </div>
              </div>

              <div className={`text-sm space-y-2 ${mutedText}`}>
                <p>Time: 09:00 AM</p>

                <p>Venue: Milimani High Court</p>

                <p>Judge: Hon. Justice Ogola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
