import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

export default function ContactSection() {
  return (
    <section className="bg-orange-50 py-20 px-6 lg:px-16">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have a legal question or need assistance? Our team is ready to help you 24/7."
      />

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* ================= CONTACT INFO CARD (FULL PRESERVED) ================= */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" />
              <p>
                Nairobi Legal District, Kenya
                <br />
                Corporate Law Chambers
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" />
              <p>
                +254 700 000 000
                <br />
                +254 711 000 111
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" />
              <p>
                support@lawfirm.com
                <br />
                info@lawfirm.com
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
            We respond to all inquiries within 24 hours with strict
            confidentiality.
          </div>
        </Card>

        {/* ================= FORM CARD ================= */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-6">
            Send a Message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-xl"
            />

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full px-4 py-3 border rounded-xl"
            />

            <Button variant="primary" className="w-full">
              <Send size={18} className="mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
