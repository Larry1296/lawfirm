import { Star } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import Card from "../../../components/ui/Card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Mwangi",
      text: "Exceptional legal service. The team handled my case with professionalism and clear communication throughout.",
    },
    {
      name: "Amina Hassan",
      text: "Very responsive and knowledgeable lawyers. I always felt my case was in safe hands.",
    },
    {
      name: "David Ochieng",
      text: "They simplified a very complex legal issue for me. Highly recommend this firm.",
    },
  ];

  return (
    <section id="testimonials" className="bg-orange-50 py-20 px-6 lg:px-16">
      {/* ================= HEADER ================= */}
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Trusted by individuals and businesses for reliable, professional legal support."
      />

      {/* ================= TESTIMONIAL GRID ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.name} className="p-6">
            {/* Stars */}
            <div className="flex gap-1 text-blue-500 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm mb-4">“{t.text}”</p>

            {/* Name */}
            <p className="text-blue-700 font-semibold text-sm">— {t.name}</p>
          </Card>
        ))}
      </div>

      {/* ================= TRUST STRIP ================= */}
      <Card className="mt-20 max-w-4xl mx-auto p-10 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-3">
          Trusted Legal Representation
        </h3>

        <p className="text-gray-600">
          We have successfully represented hundreds of clients across civil,
          corporate, and criminal matters.
        </p>
      </Card>
    </section>
  );
}
