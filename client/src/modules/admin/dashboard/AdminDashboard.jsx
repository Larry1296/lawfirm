import Card from "../../../components/ui/Card";
import SectionHeading from "../../../components/ui/SectionHeading";
import { AlertTriangle, Calendar, Bell, FileText } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Active Cases", value: 128 },
    { title: "Revenue (KES)", value: "KSh 1.24M" },
    { title: "New Clients", value: 24 },
    { title: "Overdue Invoices", value: 7 },
  ];

  const urgentDeadlines = [
    { title: "Case #1023 Filing Deadline", date: "May 2" },
    { title: "Submission - Mwangi vs State", date: "May 4" },
  ];

  const upcomingHearings = [
    { case: "Amina Hassan vs ABC Ltd", date: "May 3" },
    { case: "John Doe vs County Gov", date: "May 6" },
  ];

  const notifications = [
    "New case assigned",
    "Invoice overdue",
    "Client uploaded document",
  ];

  const staffPerformance = [
    { name: "Adv. Kamau", value: 80 },
    { name: "Adv. Wanjiku", value: 65 },
    { name: "Assistant Brian", value: 90 },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ================= HEADER ================= */}
      <SectionHeading
        title="Dashboard Overview"
        subtitle="Monitor performance, track cases, and manage your law firm."
      />

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-4 sm:p-5">
            <p className="text-xs sm:text-sm text-gray-500">{stat.title}</p>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mt-1 sm:mt-2">
              {stat.value}
            </h2>
          </Card>
        ))}
      </div>

      {/* ================= URGENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* DEADLINES */}
        <Card className="p-4 sm:p-6 border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <AlertTriangle className="text-red-500" size={18} />
            <h2 className="font-semibold text-base sm:text-lg">
              Urgent Deadlines
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {urgentDeadlines.map((d, i) => (
              <div key={i} className="flex justify-between gap-2">
                <span className="truncate">{d.title}</span>
                <span className="text-red-500 whitespace-nowrap">{d.date}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* HEARINGS */}
        <Card className="p-4 sm:p-6 border-l-4 border-blue-600">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Calendar className="text-blue-600" size={18} />
            <h2 className="font-semibold text-base sm:text-lg">
              Upcoming Hearings
            </h2>
          </div>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            {upcomingHearings.map((h, i) => (
              <div key={i} className="flex justify-between gap-2">
                <span className="truncate">{h.case}</span>
                <span className="text-gray-500 whitespace-nowrap">
                  {h.date}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* NOTIFICATIONS */}
        <Card className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Bell className="text-blue-600" size={18} />
            <h2 className="font-semibold text-base sm:text-lg">
              Notifications
            </h2>
          </div>

          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
            {notifications.map((n, i) => (
              <li key={i} className="truncate">
                • {n}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* ================= MAIN ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* PERFORMANCE */}
        <div className="lg:col-span-2">
          <Card className="p-4 sm:p-6">
            <h2 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Staff Performance
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {staffPerformance.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span>{s.name}</span>
                    <span>{s.value}%</span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-blue-600 h-2 rounded"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* SIDE */}
        <div>
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <FileText className="text-blue-600" size={18} />
              <h2 className="font-semibold text-base sm:text-lg">
                Pending Documents
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              12 documents awaiting review or upload.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
