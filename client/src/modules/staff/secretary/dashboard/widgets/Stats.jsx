import StatCard from "../../../../../components/dashboard/StatCard";

/* =========================
   DEFAULT ICON FALLBACK
========================= */
import { BarChart3 } from "lucide-react";

export default function StatsWidget({ stats = [] }) {
  if (!stats.length) {
    return <div className="text-sm text-gray-500">No statistics available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard
          key={stat.title || i}
          title={stat.title}
          value={stat.value}
          icon={stat.icon || BarChart3}
          color={stat.color || "blue"}
        />
      ))}
    </div>
  );
}
