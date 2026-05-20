// src/modules/staff/lawyer/clients/LawyerClientProfile.jsx

import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarDays,
  Clock3,
  Download,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Plus,
  Scale,
  ShieldCheck,
  User2,
} from "lucide-react";

import { useContext } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const client = {
  id: "CL-001",
  name: "BlueWave Limited",
  type: "Corporate",
  email: "legal@bluewave.co.ke",
  phone: "+254 733 111 222",
  location: "Westlands, Nairobi",
  category: "Commercial & Tax",
  joined: "14 Jan 2025",
  status: "Priority",
  contactPerson: "James Kariuki",
};

const activeCases = [
  {
    id: "CASE-101",
    title: "BlueWave Ltd Tax Appeal",
    court: "Tax Appeals Tribunal",
    status: "Active",
    nextDate: "22 May 2026",
  },
  {
    id: "CASE-102",
    title: "Commercial Contract Dispute",
    court: "Milimani Commercial Court",
    status: "Hearing",
    nextDate: "29 May 2026",
  },
];

const recentDocuments = [
  {
    id: 1,
    name: "Tax Appeal Submission.pdf",
    uploaded: "17 May 2026",
  },
  {
    id: 2,
    name: "Commercial Agreement Draft.docx",
    uploaded: "14 May 2026",
  },
  {
    id: 3,
    name: "Affidavit Bundle.pdf",
    uploaded: "10 May 2026",
  },
];

const activities = [
  {
    id: 1,
    title: "Court mention completed",
    time: "Today • 11:20 AM",
  },
  {
    id: 2,
    title: "New document uploaded",
    time: "Yesterday • 03:40 PM",
  },
  {
    id: 3,
    title: "Client consultation scheduled",
    time: "18 May 2026 • 09:00 AM",
  },
];

export default function LawyerClientProfile() {
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

  const statusStyles =
    client.status === "Priority"
      ? "bg-orange-500/10 text-orange-500"
      : "bg-green-500/10 text-green-500";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PROFILE HEADER
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-8
          ${cardClasses}
        `}
      >
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* AVATAR */}
            <div
              className="
                w-24
                h-24
                rounded-2xl
                bg-[color:var(--brand-primary)]
                text-white
                flex
                items-center
                justify-center
                shadow-medium
              "
            >
              {client.type === "Corporate" ? (
                <Building2 size={40} />
              ) : (
                <User2 size={40} />
              )}
            </div>

            {/* INFO */}
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl font-bold font-display">
                  {client.name}
                </h1>

                <span
                  className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${statusStyles}
                  `}
                >
                  {client.status}
                </span>
              </div>

              <p className={`mt-2 text-sm ${mutedText}`}>
                {client.type} Client • {client.category}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className="text-sm">{client.phone}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className="text-sm break-all">{client.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin
                    size={18}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className="text-sm">{client.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={18}
                    className="text-[color:var(--brand-primary)]"
                  />

                  <span className="text-sm">Joined {client.joined}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3">
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
              <MessageSquare size={18} />
              Message Client
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
                    ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
                }
              `}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          OVERVIEW STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Active Cases</p>

              <h2 className="text-3xl font-bold mt-2">7</h2>
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
              <p className={`text-sm ${mutedText}`}>Documents</p>

              <h2 className="text-3xl font-bold mt-2">48</h2>
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
              <FileText size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Hearings</p>

              <h2 className="text-3xl font-bold mt-2">11</h2>
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
              <p className={`text-sm ${mutedText}`}>Compliance</p>

              <h2 className="text-3xl font-bold mt-2">94%</h2>
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
          MAIN GRID
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            LEFT COLUMN
        ========================== */}
        <div className="xl:col-span-2 space-y-6">
          {/* ACTIVE CASES */}
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
                <h2 className="text-2xl font-bold">Active Matters</h2>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  Current legal matters associated with this client.
                </p>
              </div>

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
                <Plus size={16} />
                New Matter
              </button>
            </div>

            <div className="space-y-5 mt-6">
              {activeCases.map((legalCase) => (
                <div
                  key={legalCase.id}
                  className={`
                    rounded-2xl
                    p-5
                    transition-all
                    duration-300
                    ${
                      theme === "dark"
                        ? "bg-[color:var(--background-dark)]"
                        : "bg-[color:var(--background-light)]"
                    }
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-semibold">
                          {legalCase.title}
                        </h3>

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
                          {legalCase.status}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-5 mt-4">
                        <div className="flex items-center gap-2">
                          <Scale
                            size={16}
                            className="text-[color:var(--brand-primary)]"
                          />

                          <span className={`text-sm ${mutedText}`}>
                            {legalCase.court}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock3
                            size={16}
                            className="text-[color:var(--brand-primary)]"
                          />

                          <span className={`text-sm ${mutedText}`}>
                            Next Date: {legalCase.nextDate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-[color:var(--brand-primary)]
                        text-white
                        text-sm
                        font-medium
                        hover:opacity-90
                        transition-all
                        duration-300
                      "
                    >
                      Open Case
                    </button>
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
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Recent Documents</h2>

                <p className={`mt-1 text-sm ${mutedText}`}>
                  Recently uploaded legal files and court documents.
                </p>
              </div>

              <button
                className="
                  px-4
                  py-2
                  rounded-xl
                  bg-[color:var(--brand-primary)]
                  text-white
                  text-sm
                  font-medium
                "
              >
                Upload
              </button>
            </div>

            <div className="space-y-4 mt-6">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className={`
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-4
                    rounded-2xl
                    p-5
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
                        rounded-xl
                        bg-violet-500
                        text-white
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <FileText size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold">{doc.name}</h3>

                      <p className={`text-sm mt-1 ${mutedText}`}>
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
                      font-medium
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT COLUMN
        ========================== */}
        <div className="space-y-6">
          {/* CONTACT PERSON */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <h2 className="text-xl font-bold">Contact Person</h2>

            <div className="mt-5 flex items-center gap-4">
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
                <User2 size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {client.contactPerson}
                </h3>

                <p className={`text-sm ${mutedText}`}>Legal Representative</p>
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <div
            className={`
              rounded-2xl
              shadow-soft
              p-6
              ${cardClasses}
            `}
          >
            <h2 className="text-xl font-bold">Recent Activity</h2>

            <div className="space-y-5 mt-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
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
                      flex-shrink-0
                    "
                  >
                    <BadgeCheck size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium">{activity.title}</h3>

                    <p className={`text-sm mt-1 ${mutedText}`}>
                      {activity.time}
                    </p>
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
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <ShieldCheck size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold">KYC & Compliance</h2>

                <p className={`text-sm ${mutedText}`}>
                  Law Society compliance overview
                </p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>
                  Identity Verification
                </span>

                <span className="text-green-500 text-sm font-semibold">
                  Verified
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>Tax Compliance</span>

                <span className="text-green-500 text-sm font-semibold">
                  Updated
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className={`text-sm ${mutedText}`}>Conflict Check</span>

                <span className="text-orange-500 text-sm font-semibold">
                  Review Needed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
