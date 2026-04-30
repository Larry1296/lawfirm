import { ShieldCheck, Scale, Gavel, Users } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import Card from "../../../components/ui/Card";

export default function AboutSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Trusted Expertise",
      description:
        "Years of experience in handling complex legal matters across multiple jurisdictions.",
    },
    {
      icon: Scale,
      title: "Fair Justice",
      description:
        "We ensure every client receives fair representation and balanced legal counsel.",
    },
    {
      icon: Gavel,
      title: "Strong Advocacy",
      description:
        "We defend your rights with strong, strategic, and well-prepared legal arguments.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description:
        "Every case is handled with personal attention and clear communication.",
    },
  ];

  return (
    <section id="about" className="bg-orange-50 py-20 px-6 lg:px-16">
      {/* SECTION HEADING (REUSED) */}
      <SectionHeading
        title="About Our Legal Practice"
        subtitle="We are a modern law firm dedicated to delivering trusted legal solutions with precision, confidentiality, and excellence."
      />

      {/* CARDS GRID (REUSED) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* STORY BOX (still custom but consistent style) */}
      <div className="max-w-5xl mx-auto mt-20 bg-white rounded-2xl shadow-[0_10px_0_rgba(0,0,0,0.08)] p-10">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Our Mission</h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          We combine traditional legal excellence with modern technology to
          deliver faster, smarter, and more accessible legal services.
        </p>

        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
          <p className="text-sm text-gray-700">
            “Justice should be accessible, transparent, and efficient.”
          </p>
        </div>
      </div>
    </section>
  );
}
