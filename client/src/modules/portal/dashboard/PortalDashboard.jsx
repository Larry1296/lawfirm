// src/modules/portal/dashboard/PortalDashboard.jsx

import {
  CalendarDays,
  FileText,
  Bell,
  ShieldCheck,
  Upload,
  MessageSquare,
  Briefcase,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function PortalDashboard() {
  /* =========================================================
     DUMMY DATA
  ========================================================= */

  const consultations = [
    {
      id: 1,
      title: "Family Law Consultation",
      lawyer: "Adv. Sarah Wanjiku",
      date: "24 May 2026",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Land Dispute Review",
      lawyer: "Pending Assignment",
      date: "27 May 2026",
      time: "2:30 PM",
      status: "Pending",
    },
  ];

  const notifications = [
    {
      id: 1,
      message: "Your intake form has been received.",
      type: "success",
    },
    {
      id: 2,
      message: "Upload a copy of your national ID.",
      type: "warning",
    },
    {
      id: 3,
      message: "Consultation booking confirmed.",
      type: "info",
    },
  ];

  const documents = [
    {
      id: 1,
      name: "National ID Copy.pdf",
      status: "Verified",
    },
    {
      id: 2,
      name: "Land Agreement.pdf",
      status: "Pending Review",
    },
  ];

  /* =========================================================
     COMPONENT
  ========================================================= */

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="rounded-2xl bg-gradient-to-r from-brand-primary to-blue-700 text-white p-6 lg:p-8 shadow-medium">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-100 mb-2">
              Client Portal
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Welcome Back 👋
            </h1>

            <p className="text-blue-100 max-w-2xl">
              Manage consultations, upload documents, track your onboarding, and
              communicate securely with the legal team.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 min-w-[260px] border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-brand-accent" size={28} />

              <div>
                <p className="text-sm text-blue-100">Membership Status</p>

                <h3 className="font-semibold text-lg">Pending Review</h3>
              </div>
            </div>

            <p className="text-sm text-blue-100">
              Your onboarding request is currently under review by the firm.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            {
              title: "Book Consultation",
              icon: CalendarDays,
              desc: "Schedule legal consultation",
            },
            {
              title: "Upload Documents",
              icon: Upload,
              desc: "Send documents securely",
            },
            {
              title: "Legal Requests",
              icon: Briefcase,
              desc: "Submit a legal request",
            },
            {
              title: "Messages",
              icon: MessageSquare,
              desc: "Contact support team",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-surface-light dark:bg-surface-dark
                  border border-border-light dark:border-border-dark
                  rounded-2xl p-5 shadow-soft
                  hover:shadow-medium
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-brand-primary" size={28} />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          GRID SECTION
      ===================================================== */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =================================================
            CONSULTATIONS
        ================================================= */}
        <div
          className="
            xl:col-span-2
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            rounded-2xl shadow-soft p-6
          "
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Upcoming Consultations
            </h2>

            <button className="text-brand-primary text-sm font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {consultations.map((consultation) => (
              <div
                key={consultation.id}
                className="
                  border border-border-light dark:border-border-dark
                  rounded-xl p-5
                  flex flex-col lg:flex-row lg:items-center lg:justify-between
                  gap-4
                  hover:border-brand-primary/40
                  transition
                "
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {consultation.title}
                  </h3>

                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                    {consultation.lawyer}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <Clock3 size={16} />
                    {consultation.date} • {consultation.time}
                  </div>
                </div>

                <div>
                  <span
                    className={`
                      px-4 py-2 rounded-full text-xs font-semibold
                      ${
                        consultation.status === "Confirmed"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                      }
                    `}
                  >
                    {consultation.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            NOTIFICATIONS
        ================================================= */}
        <div
          className="
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            rounded-2xl shadow-soft p-6
          "
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-brand-primary" size={24} />

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="
                  flex items-start gap-3
                  border-b border-border-light dark:border-border-dark
                  pb-4 last:border-none
                "
              >
                <div className="mt-1">
                  {notification.type === "success" && (
                    <CheckCircle2 className="text-success" size={18} />
                  )}

                  {notification.type === "warning" && (
                    <AlertCircle className="text-warning" size={18} />
                  )}

                  {notification.type === "info" && (
                    <Bell className="text-info" size={18} />
                  )}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {notification.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENTS
      ===================================================== */}
      <section
        className="
          bg-surface-light dark:bg-surface-dark
          border border-border-light dark:border-border-dark
          rounded-2xl shadow-soft p-6
        "
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="text-brand-primary" size={24} />

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Uploaded Documents
            </h2>
          </div>

          <button className="text-brand-primary text-sm font-medium hover:underline">
            Manage Files
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border-light dark:border-border-dark">
                <th className="text-left py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Document
                </th>

                <th className="text-left py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Status
                </th>

                <th className="text-left py-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-b border-border-light dark:border-border-dark"
                >
                  <td className="py-4 text-gray-800 dark:text-gray-200">
                    {doc.name}
                  </td>

                  <td className="py-4">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          doc.status === "Verified"
                            ? "bg-success/10 text-success"
                            : "bg-warning/10 text-warning"
                        }
                      `}
                    >
                      {doc.status}
                    </span>
                  </td>

                  <td className="py-4">
                    <button className="text-brand-primary text-sm hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
