import React from "react";

/* UI SYSTEM (FIXED PATHS) */
import Card from "../../components/ui/data-display/Card";
import Badge from "../../components/ui/data-display/Badge";
import Table from "../../components/ui/data-display/Table";

/* primitives */
import Button from "../../components/ui/primitives/Button";
import SearchBar from "../../components/ui/forms/SearchBar";
import MetricCard from "../../components/ui/advanced/MetricCard";

/* DASHBOARD COMPONENTS */
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatsCard from "../../components/dashboard/StatsCard";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import QuickAction from "../../components/dashboard/QuickAction";

export default function LawyerDashboard() {
  return (
    <div className="w-full space-y-6 animate-fadeIn">
      {/* ================= WELCOME ================= */}
      <WelcomeBanner />

      {/* ================= METRICS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Active Cases" value="24" trend="+3%" />
        <MetricCard title="Pending Hearings" value="8" trend="-1%" />
        <MetricCard title="Clients" value="120" trend="+12%" />
        <MetricCard title="Closed Cases" value="56" trend="+5%" />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-darkbrand-text">
            Quick Actions
          </h3>
          <QuickAction />
        </Card>

        <Card>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-darkbrand-text">
            Search Cases
          </h3>
          <SearchBar placeholder="Search case, client..." />
        </Card>

        <Card>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-darkbrand-text">
            System Status
          </h3>

          <div className="space-y-2">
            <Badge variant="success">System Online</Badge>
            <Badge variant="info">3 hearings today</Badge>
          </div>
        </Card>
      </div>

      {/* ================= CASE TABLE ================= */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700 dark:text-darkbrand-text">
            Recent Cases
          </h3>

          <Button variant="primary">New Case</Button>
        </div>

        <Table
          columns={[
            { header: "Case", accessor: "case" },
            { header: "Client", accessor: "client" },
            { header: "Status", accessor: "status" },
            { header: "Next Hearing", accessor: "date" },
          ]}
          data={[
            {
              case: "CR-2026-001",
              client: "John Doe",
              status: "Active",
              date: "2026-04-30",
            },
            {
              case: "CIV-2026-014",
              client: "Mary Wanjiku",
              status: "Pending",
              date: "2026-05-02",
            },
          ]}
        />
      </Card>

      {/* ================= LOWER GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-darkbrand-text">
            Recent Activity
          </h3>
          <ActivityFeed />
        </Card>

        <Card>
          <h3 className="text-sm font-medium mb-3 text-gray-700 dark:text-darkbrand-text">
            Stats Overview
          </h3>
          <StatsCard />
        </Card>
      </div>
    </div>
  );
}
