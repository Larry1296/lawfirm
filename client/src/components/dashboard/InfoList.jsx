// src/components/dashboard/InfoList.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle, AlertTriangle } from "lucide-react";

/**
 * InfoListCard - A fully-featured list for dashboard notifications
 *
 * Props:
 * - items: Array of notification objects
 *    {
 *      id: string | number,
 *      type: 'info' | 'success' | 'warning',
 *      title: string,
 *      description?: string,
 *      time?: string
 *    }
 */

const typeIcons = {
  info: <Bell className="text-blue-500" size={20} />,
  success: <CheckCircle className="text-green-500" size={20} />,
  warning: <AlertTriangle className="text-yellow-500" size={20} />,
};

const InfoListCard = ({ items = [] }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-start gap-3 p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer"
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            {typeIcons[item.type] || typeIcons.info}
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            )}
          </div>

          {/* Time */}
          {item.time && (
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {item.time}
            </span>
          )}
        </motion.div>
      ))}

      {/* Empty state */}
      {items.length === 0 && (
        <div className="text-center text-gray-400 text-sm py-6">
          No notifications available
        </div>
      )}
    </div>
  );
};

export default InfoListCard;
