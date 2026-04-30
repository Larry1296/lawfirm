import Card from "../../../components/ui/Card";
import SectionHeading from "../../../components/ui/SectionHeading";

export default function FeaturesSection() {
  const features = [
    {
      title: "Case Tracking",
      desc: "Monitor case progress in real time from filing to resolution with status updates and timelines.",
    },
    {
      title: "Secure Client Messaging",
      desc: "Communicate safely with lawyers through encrypted, case-linked messaging channels.",
    },
    {
      title: "Court Scheduling",
      desc: "Manage hearings, deadlines, and court dates with automatic reminders and calendar sync.",
    },
    {
      title: "Document Management",
      desc: "Upload, organize, and access legal documents securely with version control.",
    },
    {
      title: "Case Analytics",
      desc: "Get insights on case progress, workload distribution, and performance metrics.",
    },
    {
      title: "Role-Based Access",
      desc: "Separate dashboards for clients, lawyers, and admins with controlled permissions.",
    },
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= REUSABLE HEADING ================= */}
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything your legal team needs to manage cases efficiently and securely."
        />

        {/* ================= FEATURES GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
