import { useState } from "react";
import CaseFilters from "../components/CaseFilters";
import CaseList from "../components/CaseList";
import CaseDetailsPage from "./CaseDetailsPage";
import { cases } from "../data/case";

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filter, setFilter] = useState("active");

  const filteredCases = cases.filter((c) => c.status === filter);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
      {/* LEFT: CASE LIST */}
      <div className="lg:col-span-4 bg-white rounded-2xl shadow p-4 overflow-y-auto">
        <CaseFilters filter={filter} setFilter={setFilter} />

        <CaseList
          cases={filteredCases}
          onSelect={setSelectedCase}
          selectedCase={selectedCase}
        />
      </div>

      {/* RIGHT: CASE DETAILS */}
      <div className="lg:col-span-8 bg-gray-50 rounded-2xl shadow p-6 overflow-y-auto">
        {selectedCase ? (
          <CaseDetailsPage caseData={selectedCase} />
        ) : (
          <div className="text-gray-400 text-center mt-20">
            Select a case to view details
          </div>
        )}
      </div>
    </div>
  );
}
