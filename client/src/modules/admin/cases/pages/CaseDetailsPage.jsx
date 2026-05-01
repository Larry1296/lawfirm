import CaseHeader from "../components/CaseHeader";
import CaseTimeline from "../components/CaseTimeline";
import CaseAIPanel from "../components/CaseAIPanel";

export default function CaseDetailsPage({ caseData }) {
  return (
    <div className="space-y-6">
      <CaseHeader caseData={caseData} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* TIMELINE */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow">
          <CaseTimeline events={caseData.timeline} />
        </div>

        {/* AI PANEL */}
        <CaseAIPanel caseData={caseData} />
      </div>
    </div>
  );
}
