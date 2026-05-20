export default function CaseAIPanel({ caseData }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow border-l-4 border-blue-500">
      <h2 className="font-semibold text-blue-700 mb-3">AI Case Intelligence</h2>

      {/* SCORE */}
      <div className="text-3xl font-bold text-blue-600">
        {caseData.aiScore}%
      </div>

      <p className="text-xs text-gray-500 mb-4">Case Optimism Score</p>

      {/* INSIGHTS */}
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-medium">Strength</p>
          <p className="text-gray-500">Medium-High</p>
        </div>

        <div>
          <p className="font-medium">Risk Factors</p>
          <p className="text-gray-500">2 identified gaps</p>
        </div>

        <div>
          <p className="font-medium">AI Suggestion</p>
          <p className="text-gray-500">
            Add missing exhibit A and strengthen witness statement.
          </p>
        </div>

        <div>
          <p className="font-medium">Prediction</p>
          <p className="text-blue-600 font-semibold">Win probability: 72–80%</p>
        </div>
      </div>
    </div>
  );
}
