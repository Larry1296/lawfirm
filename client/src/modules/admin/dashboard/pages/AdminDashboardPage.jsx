import DashboardGrid from "../layouts/DashboardGrid";

import StatsWidget from "../widgets/StatsWidget";
import RevenueWidget from "../widgets/RevenueWidget";
import TeamPerformanceWidget from "../widgets/TeamPerformanceWidget";
import UpcomingHearingsWidget from "../widgets/UpcomingHearingsWidget";

import useDashboardStats from "../hooks/useDashboardStats";

export default function AdminDashboardPage() {
  const { stats, revenue, profitability, teamPerformance, hearings } =
    useDashboardStats();

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-500 dark:text-text-muted-dark">
          Law firm operational analytics & intelligence
        </p>
      </div>

      {/* STATS */}
      <StatsWidget stats={stats} />

      {/* MAIN GRID */}
      <DashboardGrid>
        {/* REVENUE */}
        <div className="xl:col-span-8">
          <RevenueWidget revenueData={revenue} profitability={profitability} />
        </div>

        {/* TEAM */}
        <div className="xl:col-span-4">
          <TeamPerformanceWidget data={teamPerformance} />
        </div>

        {/* HEARINGS */}
        <div className="xl:col-span-12">
          <UpcomingHearingsWidget hearings={hearings} />
        </div>
      </DashboardGrid>
    </div>
  );
}
