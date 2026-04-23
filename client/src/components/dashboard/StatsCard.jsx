import React from "react";
import MetricCard from "../ui/advanced/MetricCard";

export default function StatsCard() {
  const stats = [
    { title: "Active Cases", value: "24", trend: "+3%" },
    { title: "Pending Hearings", value: "8", trend: "-1%" },
    { title: "Clients", value: "120", trend: "+12%" },
    { title: "Closed Cases", value: "56", trend: "+5%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats.map((stat, i) => (
        <MetricCard
          key={i}
          title={stat.title}
          value={stat.value}
          trend={stat.trend}
        />
      ))}
    </div>
  );
}
