import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import Brand from "../../components/ui/Brand";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--surface-light)] dark:bg-[color:var(--surface)] text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* LOGO / ABOUT */}
        <div>
          <Brand size="h-16 w-16" textSize="text-2xl" />
          <p className="mt-4 text-sm text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]">
            Professional legal services you can trust. We provide reliable and
            efficient legal solutions tailored to your needs.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-[color:var(--brand-primary)] dark:text-[color:var(--brand-accent)]">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]">
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
              <span>info@sheriadesk.com</span>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4 text-[color:var(--brand-primary)] dark:text-[color:var(--brand-accent)]">
            Follow Us
          </h3>
          <div className="flex gap-4 text-[color:var(--brand-primary)] dark:text-[color:var(--brand-accent)]">
            <a
              href="#"
              className="hover:text-[color:var(--brand-accent)] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[color:var(--brand-accent)] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[color:var(--brand-accent)] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[color:var(--border-light)] dark:border-[color:var(--border)] text-center py-4 text-sm text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]">
        © {new Date().getFullYear()} Sheria Desk. All rights reserved.
      </div>
    </footer>
  );
}
