export default function AssistantDashboard() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Assistant Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Assigned Cases</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Active Chats</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Upcoming Sessions</p>
          <h2 className="text-2xl font-bold">3</h2>
        </div>
      </div>
    </div>
  );
}
