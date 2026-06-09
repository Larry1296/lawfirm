// src/components/dashboard/StatCard.jsx
import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon, color = "text-blue-500", growth }) => {
  const Icon = icon;

  const growthColor =
    growth > 0
      ? "text-green-500"
      : growth < 0
        ? "text-red-500"
        : "text-gray-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Icon */}
      <div className={`flex-shrink-0 ${color}`}>
        {Icon && <Icon size={28} />}
      </div>

      {/* Stats */}
      <div className="flex-1 ml-4">
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>

        <p className={`text-2xl font-bold ${color} mt-1`}>{value}</p>

        {growth !== undefined && (
          <span className={`text-sm font-semibold ${growthColor} mt-1 block`}>
            {growth > 0 ? `+${growth}%` : `${growth}%`} from last period
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
