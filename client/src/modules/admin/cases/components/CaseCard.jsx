export default function CaseCard({ caseData, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl cursor-pointer transition border
        ${active ? "bg-blue-50 border-blue-500" : "hover:bg-gray-50"}`}
    >
      <h3 className="font-semibold text-sm">{caseData.title}</h3>

      <p className="text-xs text-gray-500 mt-1">{caseData.client}</p>

      <div className="flex justify-between mt-2 text-xs">
        <span
          className={`px-2 py-1 rounded ${
            caseData.status === "active"
              ? "bg-green-100 text-green-600"
              : caseData.status === "pending"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-gray-100 text-gray-600"
          }`}
        >
          {caseData.status}
        </span>

        <span className="text-gray-400">Next: {caseData.nextEvent}</span>
      </div>

      {/* AI SCORE */}
      <div className="mt-2 text-xs text-blue-600 font-semibold">
        AI Optimism: {caseData.aiScore}%
      </div>
    </div>
  );
}
