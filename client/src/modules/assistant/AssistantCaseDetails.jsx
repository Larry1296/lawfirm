import { useParams } from "react-router-dom";

export default function AssistantCaseDetails() {
  const { caseId } = useParams();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Case Details #{caseId}</h1>

      <div className="bg-white p-4 rounded shadow mb-4">
        Case information here...
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Open Chat
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Schedule Session
        </button>
      </div>
    </div>
  );
}
