export default function PublicFooter() {
  return (
    <footer
      className="
      w-full
      bg-darkbrand-base
      text-darkbrand-text
      py-12
      mt-20
      font-sans
    "
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* BRAND */}
        <div>
          <h2 className="text-lg font-bold text-brand-secondary">LegalFlow</h2>
          <p className="text-sm mt-2 text-ui-muted">
            AI-powered legal case management system for modern law firms in
            Kenya.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-2 text-brand-accent">Quick Links</h3>

          <ul className="space-y-1 text-sm text-ui-muted">
            <li className="hover:text-brand-secondary cursor-pointer">About</li>
            <li className="hover:text-brand-secondary cursor-pointer">
              Contact
            </li>
            <li className="hover:text-brand-secondary cursor-pointer">Login</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-2 text-brand-accent">Contact</h3>

          <p className="text-sm text-ui-muted">support@legalflow.co.ke</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-ui-muted">
        © {new Date().getFullYear()} LegalFlow. All rights reserved.
      </div>
    </footer>
  );
}
