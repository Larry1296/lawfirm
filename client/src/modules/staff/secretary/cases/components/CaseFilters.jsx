export default function CaseFilters({ filter, setFilter }) {
  const filters = [
    { key: "active", label: "Active" },
    { key: "pending", label: "Pending" },
    { key: "concluded", label: "Concluded" },
    { key: "all", label: "All Cases" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => setFilter(f.key)}
          className={`px-3 py-1 text-sm rounded-full border transition
            ${
              filter === f.key
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
