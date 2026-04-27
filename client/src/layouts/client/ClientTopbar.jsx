export default function ClientTopbar() {
  return (
    <header className="h-16 bg-blue-900 text-green-300 shadow flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Client Portal</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm">Client</span>

        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}
