import CaseCard from "./CaseCard";

export default function CaseList({ cases, onSelect, selectedCase }) {
  return (
    <div className="space-y-3 mt-4">
      {cases.map((c) => (
        <CaseCard
          key={c.id}
          caseData={c}
          onClick={() => onSelect(c)}
          active={selectedCase?.id === c.id}
        />
      ))}
    </div>
  );
}
