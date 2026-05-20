// src/modules/staff/lawyer/dashboard/LawyerDashboard.jsx

import {
  Briefcase,
  Users,
  CalendarDays,
  FileText,
  Bell,
  Scale,
  Clock3,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import { useContext } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const stats = [
  {
    title: "Active Cases",
    value: 48,
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    title: "Clients",
    value: 126,
    icon: Users,
    color: "bg-emerald-500",
  },
  {
    title: "Hearings",
    value: 12,
    icon: Scale,
    color: "bg-orange-500",
  },
  {
    title: "Documents",
    value: 342,
    icon: FileText,
    color: "bg-purple-500",
  },
];

const upcomingHearings = [
  {
    id: 1,
    case: "Republic vs Mwangi",
    court: "Milimani High Court",
    date: "20 May 2026",
    time: "9:00 AM",
  },
  {
    id: 2,
    case: "Otieno Family Succession",
    court: "Nairobi Probate Court",
    date: "21 May 2026",
    time: "11:30 AM",
  },
  {
    id: 3,
    case: "KRA Tax Appeal",
    court: "Tax Appeals Tribunal",
    date: "22 May 2026",
    time: "2:00 PM",
  },
];

const recentActivities = [
  {
    id: 1,
    title: "New affidavit uploaded",
    time: "10 mins ago",
  },
  {
    id: 2,
    title: "Court mention rescheduled",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Invoice generated for client",
    time: "3 hours ago",
  },
  {
    id: 4,
    title: "Client meeting confirmed",
    time: "Yesterday",
  },
];

const urgentTasks = [
  {
    id: 1,
    task: "Prepare submissions for Petition E12/2026",
    priority: "High",
  },
  {
    id: 2,
    task: "Review land sale agreement",
    priority: "Medium",
  },
  {
    id: 3,
    task: "File affidavit before 4 PM",
    priority: "Critical",
  },
];

export default function LawyerDashboard() {
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
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display">Lawyer Dashboard</h1>

          <p className={`mt-1 text-sm ${mutedText}`}>
            Manage legal operations, hearings, clients, and workflow.
          </p>
        </div>

        {/* QUICK STATUS */}
        <div
          className={`
            flex
            items-center
            gap-3
            px-5
            py-3
            rounded-2xl
            shadow-soft
            ${cardClasses}
          `}
        >
          <Clock3 size={20} className="text-[color:var(--brand-primary)]" />

          <div>
            <p className="text-sm font-semibold">Court Session Status</p>

            <span className="text-xs text-green-500">
              3 Hearings Scheduled Today
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          STATS GRID
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                rounded-2xl
                p-6
                shadow-soft
                transition-all
                duration-300
                hover:scale-[1.02]
                ${cardClasses}
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${mutedText}`}>{item.title}</p>

                  <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                </div>

                <div
                  className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-white
                    ${item.color}
                  `}
                >
                  <Icon size={24} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" />

                <span className="text-sm text-green-500">+12% this month</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================
          CONTENT GRID
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* =========================
            UPCOMING HEARINGS
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Upcoming Hearings</h2>

              <p className={`text-sm mt-1 ${mutedText}`}>
                Scheduled court sessions and mentions.
              </p>
            </div>

            <CalendarDays
              size={22}
              className="text-[color:var(--brand-primary)]"
            />
          </div>

          <div className="space-y-4">
            {upcomingHearings.map((hearing) => (
              <div
                key={hearing.id}
                className={`
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-4
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
                <div>
                  <h3 className="font-semibold text-lg">{hearing.case}</h3>

                  <p className={`text-sm mt-1 ${mutedText}`}>{hearing.court}</p>
                </div>

                <div className="text-right">
                  <p className="font-medium">{hearing.date}</p>

                  <span className="text-sm text-[color:var(--brand-primary)]">
                    {hearing.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            RECENT ACTIVITIES
        ========================== */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold">Recent Activities</h2>

              <p className={`text-sm mt-1 ${mutedText}`}>
                Latest system updates.
              </p>
            </div>

            <Bell size={20} className="text-[color:var(--brand-primary)]" />
          </div>

          <div className="space-y-5">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className="
                    mt-1
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-[color:var(--brand-primary)]
                  "
                />

                <div>
                  <p className="text-sm font-medium">{activity.title}</p>

                  <span className={`text-xs ${mutedText}`}>
                    {activity.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          TASKS & ALERTS
      ========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TASKS */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Urgent Tasks</h2>

            <AlertTriangle className="text-orange-500" />
          </div>

          <div className="space-y-4">
            {urgentTasks.map((task) => (
              <div
                key={task.id}
                className={`
                  flex
                  items-center
                  justify-between
                  p-4
                  rounded-2xl
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)]"
                      : "bg-[color:var(--background-light)]"
                  }
                `}
              >
                <div>
                  <p className="font-medium">{task.task}</p>

                  <span
                    className={`
                      text-xs
                      font-semibold
                      ${
                        task.priority === "Critical"
                          ? "text-red-500"
                          : task.priority === "High"
                            ? "text-orange-500"
                            : "text-yellow-500"
                      }
                    `}
                  >
                    {task.priority}
                  </span>
                </div>

                <CheckCircle2 size={18} className="text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* LEGAL INSIGHTS */}
        <div
          className={`
            rounded-2xl
            shadow-soft
            p-6
            ${cardClasses}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">AI Legal Insights</h2>

            <Scale className="text-[color:var(--brand-primary)]" />
          </div>

          <div className="space-y-5">
            <div
              className={`
                p-5
                rounded-2xl
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <h3 className="font-semibold">Case Trend Analysis</h3>

              <p className={`text-sm mt-2 ${mutedText}`}>
                Commercial dispute filings have increased by 18% this quarter in
                Nairobi courts.
              </p>
            </div>

            <div
              className={`
                p-5
                rounded-2xl
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)]"
                    : "bg-[color:var(--background-light)]"
                }
              `}
            >
              <h3 className="font-semibold">Compliance Reminder</h3>

              <p className={`text-sm mt-2 ${mutedText}`}>
                Ensure all client KYC records are updated before next audit
                review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
