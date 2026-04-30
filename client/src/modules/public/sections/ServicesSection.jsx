import {
  Scale,
  Briefcase,
  ShieldCheck,
  FileText,
  Gavel,
  Users,
} from "lucide-react";

import SectionHeading from "../../../components/ui/SectionHeading";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: "Civil Litigation",
      desc: "Representation in disputes involving contracts, property, and civil rights.",
    },
    {
      icon: Briefcase,
      title: "Corporate Law",
      desc: "Legal support for businesses including compliance, contracts, and governance.",
    },
    {
      icon: ShieldCheck,
      title: "Criminal Defense",
      desc: "Strong defense representation ensuring your rights are fully protected.",
    },
    {
      icon: FileText,
      title: "Contract Drafting",
      desc: "Clear, enforceable contracts tailored to protect your interests.",
    },
    {
      icon: Gavel,
      title: "Court Representation",
      desc: "Experienced advocates representing you across all court levels.",
    },
    {
      icon: Users,
      title: "Legal Consultation",
      desc: "Personalized legal advice based on your unique situation.",
    },
  ];

  return (
    <section id="services" className="bg-orange-50 py-20 px-6 lg:px-16">
      {/* ================= HEADING ================= */}
      <SectionHeading
        title="Our Legal Services"
        subtitle="Comprehensive legal solutions tailored to individuals, businesses, and organizations."
      />

      {/* ================= SERVICES GRID ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title} className="p-6">
              <Icon className="text-blue-600 mb-4" size={32} />

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm">{service.desc}</p>
            </Card>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <Card className="mt-20 max-w-4xl mx-auto p-10 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-3">
          Need Legal Assistance?
        </h3>

        <p className="text-gray-600 mb-6">
          Speak with our experts today and get professional legal guidance.
        </p>

        <Button variant="primary" size="lg">
          Book Consultation
        </Button>
      </Card>
    </section>
  );
}
