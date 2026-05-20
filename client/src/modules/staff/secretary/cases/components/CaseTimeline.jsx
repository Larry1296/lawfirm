import {
  FileText,
  Calendar,
  Upload,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export default function CaseTimeline({ events = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case "filing":
        return FileText;
      case "hearing":
        return Calendar;
      case "upload":
        return Upload;
      case "note":
        return MessageSquare;
      default:
        return AlertCircle;
    }
  };

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Case Timeline</h2>

      <div className="relative border-l-2 border-gray-200 pl-6 space-y-6">
        {events.map((event, i) => {
          const Icon = getIcon(event.type);

          return (
            <div key={i} className="relative">
              {/* ICON NODE */}
              <div className="absolute -left-[34px] top-1 bg-white border shadow rounded-full p-2">
                <Icon size={16} className="text-blue-600" />
              </div>

              {/* CONTENT */}
              <div className="bg-gray-50 rounded-xl p-4 border hover:bg-gray-100 transition">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-sm text-gray-900">
                    {event.title}
                  </h3>

                  <span className="text-xs text-gray-500">{event.date}</span>
                </div>

                {event.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {event.description}
                  </p>
                )}

                {/* AI TAG (optional future hook) */}
                {event.aiInsight && (
                  <div className="mt-2 text-xs text-blue-600 font-medium">
                    AI: {event.aiInsight}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
