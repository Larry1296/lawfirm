import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-5xl mx-auto px-6">
        <Card className="p-14 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to modernize your legal workflow?
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-gray-600 text-lg">
            Join firms using LegalAssist to save time and stay organized.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              variant="primary"
              className="px-10 py-4 text-base"
            >
              Get Started
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
