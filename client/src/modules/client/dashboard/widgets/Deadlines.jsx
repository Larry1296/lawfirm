import { motion } from "framer-motion";
import InfoListCard from "../../../../components/dashboard/InfoList";
import { AlertTriangle } from "lucide-react";

export default function DeadlinesWidget({ deadlines = [] }) {
  if (!deadlines.length) {
    return <div className="text-sm text-gray-500">No deadlines available</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <InfoListCard
        title="Urgent Deadlines"
        icon={AlertTriangle}
        accent="red"
        items={deadlines.map((d) => ({
          label: d.title,
          value: d.date,
        }))}
        renderRight={(item) => (
          <span className="text-red-500 text-xs font-medium">{item.value}</span>
        )}
      />
    </motion.div>
  );
}
