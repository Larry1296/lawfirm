import { Calendar, User, FileText, MoreVertical } from "lucide-react";

export default function CaseHeader({ caseData }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-4">
      {/* TOP ROW */}
      <div className="flex items-start justify-between">
        {/* CASE TITLE */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">{caseData.title}</h1>

          <p className="text-sm text-gray-500 mt-1">
            Client: {caseData.client}
          </p>
        </div>

        {/* ACTION MENU (future dropdown) */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <MoreVertical size={18} />
        </button>
      </div>

      {/* META INFO */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {/* STATUS */}
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-blue-600" />
          <span>
            Status:
            <span className="ml-1 font-medium text-gray-900">
              {caseData.status}
            </span>
          </span>
        </div>

        {/* NEXT EVENT */}
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-green-600" />
          <span>
            Next Event:
            <span className="ml-1 font-medium text-gray-900">
              {caseData.nextEvent}
            </span>
          </span>
        </div>

        {/* CASE ID */}
        <div className="flex items-center gap-2">
          <User size={16} className="text-gray-500" />
          <span>
            Case ID:
            <span className="ml-1 font-medium text-gray-900">
              #{caseData.id}
            </span>
          </span>
        </div>
      </div>

      {/* AI QUICK INSIGHT STRIP */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex justify-between items-center">
        <div className="text-sm text-blue-700 font-medium">
          AI Case Optimism
        </div>

        <div className="text-xl font-bold text-blue-700">
          {caseData.aiScore}%
        </div>
      </div>
    </div>
  );
}
