import { Link } from "react-router-dom";

export default function StaffCases() {
  const cases = [
    { id: 1, title: "Contract Dispute", client: "John Doe" },
    { id: 2, title: "Property Case", client: "Jane Smith" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Assigned Cases</h1>

      <div className="space-y-3">
        {cases.map((c) => (
          <Link
            key={c.id}
            to={`/assistant/cases/${c.id}`}
            className="block bg-white p-4 rounded shadow hover:bg-gray-50"
          >
            <h2 className="font-semibold">{c.title}</h2>
            <p className="text-sm text-gray-500">{c.client}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
