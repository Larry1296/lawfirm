import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-xl font-bold mb-3">LawFirm</h2>
          <p className="text-sm text-blue-200">
            Professional legal services you can trust. We provide reliable and
            efficient legal solutions tailored to your needs.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <div className="space-y-2 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Nairobi, Kenya</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254 700 000 000</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@lawfirm.com</span>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-300 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-blue-300 transition">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-blue-700 text-center py-4 text-sm text-blue-300">
        © {new Date().getFullYear()} LawFirm. All rights reserved.
      </div>
    </footer>
  );
}
