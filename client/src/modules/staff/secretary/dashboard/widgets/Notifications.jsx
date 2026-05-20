import { motion } from "framer-motion";
import InfoListCard from "../../../../components/dashboard/InfoList";
import { Bell } from "lucide-react";

export default function NotificationsWidget({ notifications = [] }) {
  if (!notifications.length) {
    return <div className="text-sm text-gray-500">No notifications</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <InfoListCard
        title="Notifications"
        icon={Bell}
        accent="blue"
        items={notifications.map((n) => ({
          label: n,
        }))}
        renderRight={() => <span className="text-xs text-gray-400">now</span>}
      />
    </motion.div>
  );
}
