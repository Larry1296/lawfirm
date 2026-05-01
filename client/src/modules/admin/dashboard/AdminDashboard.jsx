import SectionHeading from "../../../components/ui/SectionHeading";

/* ================= WIDGETS ================= */
import StatsWidget from "./widgets/Stats";
import DeadlinesWidget from "./widgets/Deadlines";
import HearingsWidget from "./widgets/Hearings";
import NotificationsWidget from "./widgets/Notifications";
import StaffPerformanceWidget from "./widgets/StaffPerformance";
import PendingDocumentsWidget from "./widgets/PendingDocuments";

/* ================= MOCK DATA (TEMP ONLY) ================= */
import {
  stats,
  urgentDeadlines,
  upcomingHearings,
  notifications,
  staffPerformance,
} from "./data/dashboardData";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <SectionHeading
        title="Dashboard Overview"
        subtitle="Monitor firm performance, manage cases, and track operations in real time."
      />

      {/* ================= TOP STATS ================= */}
      <StatsWidget stats={stats} />

      {/* ================= MAIN GRID (CONTROL PANEL) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* DEADLINES */}
        <DeadlinesWidget deadlines={urgentDeadlines} />

        {/* HEARINGS */}
        <HearingsWidget hearings={upcomingHearings} />
        {/* PENDING DOCUMENTS */}
        <PendingDocumentsWidget />
      </div>

      {/* ================= PERFORMANCE + DOCS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* NOTIFICATIONS */}
        <NotificationsWidget notifications={notifications} />
        {/* STAFF PERFORMANCE (BIG SECTION) */}
        <div className="lg:col-span-2">
          <StaffPerformanceWidget data={staffPerformance} />
        </div>
      </div>
    </div>
  );
}
