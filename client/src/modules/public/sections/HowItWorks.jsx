import { FileText, UserCheck, Scale, CheckCircle } from "lucide-react";

import SectionHeading from "../../../components/ui/SectionHeading";
import Card from "../../../components/ui/Card";
import Button3D from "../../../components/ui/Button3D";

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Case",
      desc: "Share your legal issue through our secure platform.",
    },
    {
      icon: UserCheck,
      title: "Lawyer Review",
      desc: "Our legal team reviews and assigns the right expert.",
    },
    {
      icon: Scale,
      title: "Legal Action",
      desc: "We build your case strategy and begin legal proceedings.",
    },
    {
      icon: CheckCircle,
      title: "Resolution",
      desc: "You receive updates until your case is successfully resolved.",
    },
  ];

  return (
    <section className="bg-orange-50 py-20 px-6 lg:px-16">
      {/* ================= REUSABLE HEADING ================= */}
      <SectionHeading
        title="How It Works"
        subtitle="A simple, transparent legal process designed to guide you from consultation to resolution."
      />

      {/* ================= STEPS ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <Card key={step.title} className="p-6 text-center">
              <Icon className="text-blue-600 mx-auto mb-4" size={32} />

              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </Card>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <Card className="mt-20 max-w-4xl mx-auto p-12 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-3">
          Ready to Get Started?
        </h3>

        <p className="text-gray-600 mb-6">
          Begin your legal journey today with trusted professionals.
        </p>

        <Button3D variant="primary" size="lg">
          Start Your Case
        </Button3D>
      </Card>
    </section>
  );
}
