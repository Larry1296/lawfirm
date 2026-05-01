import { motion } from "framer-motion";
import InfoListCard from "../../../../components/dashboard/InfoList";
import { Calendar } from "lucide-react";

export default function HearingsWidget({ hearings = [] }) {
  if (!hearings.length) {
    return <div className="text-sm text-gray-500">No upcoming hearings</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <InfoListCard
        title="Upcoming Hearings"
        icon={Calendar}
        accent="blue"
        items={hearings.map((h) => ({
          label: h.case,
          value: h.date,
        }))}
        renderRight={(item) => (
          <span className="text-blue-600 text-xs font-medium">
            {item.value}
          </span>
        )}
      />
    </motion.div>
  );
}
