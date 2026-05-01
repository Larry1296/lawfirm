import { motion } from "framer-motion";
import ProgressList from "../../../../components/dashboard/ProgressList";
import { TrendingUp } from "lucide-react";

export default function StaffPerformanceWidget({ data = [] }) {
  if (!data.length) {
    return (
      <div className="text-sm text-gray-500">No performance data available</div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <ProgressList
        title="Staff Performance"
        icon={TrendingUp}
        items={data.map((s) => ({
          name: s.name,
          value: s.value,
        }))}
      />
    </motion.div>
  );
}
