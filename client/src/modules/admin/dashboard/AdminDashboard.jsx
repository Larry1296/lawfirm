import SectionHeading from "../../../components/ui/SectionHeading";

/* ================= WIDGETS ================= */
import StatsWidget from "./widgets/Stats";
import DeadlinesWidget from "./widgets/DeadlinesWidget";
import UpcomingHearingsWidget from "./widgets/UpcomingHearingsWidget";
import AlertsNotificationsWidget from "./widgets/AlertsNotificationsWidget";
import StaffPerformanceWidget from "./widgets/StaffPerformance";

import RevenueWidget from "./widgets/RevenueWidget";
import TeamPerformanceWidget from "./widgets/TeamPerformanceWidget";
import KPIOverviewWidget from "./widgets/KPIOverviewWidget";
import FinancialOverviewWidget from "./widgets/FinancialOverviewWidget";
import RecentActivityWidget from "./widgets/RecentActivityWidget";
import AIInsightsWidget from "./widgets/AIInsightsWidget";
import CaseDistributionWidget from "./widgets/CaseDistributionWidget";
import RecentCasesWidget from "./widgets/RecentCasesWidget";

/* ================= MOCK DATA ================= */
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

      {/* ================= KPI OVERVIEW ================= */}
      <KPIOverviewWidget />

      {/* ================= MAIN ANALYTICS ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueWidget />
        </div>

        <FinancialOverviewWidget />
      </div>

      {/* ================= OPERATIONS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeadlinesWidget deadlines={urgentDeadlines} />

        <UpcomingHearingsWidget hearings={upcomingHearings} />

        <AlertsNotificationsWidget notifications={notifications} />
      </div>

      {/* ================= TEAM PERFORMANCE ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TeamPerformanceWidget />
        </div>

        <StaffPerformanceWidget data={staffPerformance} />
      </div>

      {/* ================= CASES & ACTIVITY ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <RecentCasesWidget />

        <RecentActivityWidget />

        <CaseDistributionWidget />
      </div>

      {/* ================= AI INSIGHTS ================= */}
      <AIInsightsWidget />
    </div>
  );
}
