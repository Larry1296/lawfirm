export default function FeaturesSection() {
  const features = [
    "Case Tracking",
    "Client Messaging",
    "Court Scheduling",
    "Reports & Analytics",
    "Secure Document Upload",
    "Role Based Dashboards",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item}
              className="p-8 border rounded-2xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-gray-600">
                Professional tools designed for legal teams.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
