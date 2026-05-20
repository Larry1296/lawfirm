import { motion } from "framer-motion";
import Card from "../../../../components/ui/Card";
import { FileText, AlertCircle } from "lucide-react";

export default function PendingDocumentsWidget({ count = 0, items = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="p-5">
        {/* HEADER */}
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-blue-600" size={18} />
          <h2 className="font-semibold text-lg">Pending Documents</h2>
        </div>

        {/* SUMMARY */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500">
            Documents awaiting review or upload
          </p>

          <span className="text-blue-700 font-bold text-lg">{count}</span>
        </div>

        {/* LIST */}
        {items.length > 0 ? (
          <div className="space-y-2 text-sm">
            {items.map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border"
              >
                <span className="truncate">{doc.name}</span>

                <span className="text-red-500 flex items-center gap-1 text-xs">
                  <AlertCircle size={12} />
                  pending
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400">No pending documents</p>
        )}
      </Card>
    </motion.div>
  );
}
