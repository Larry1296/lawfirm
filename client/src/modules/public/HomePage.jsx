export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="
          text-center py-24
          bg-hero-light dark:bg-hero-dark
          font-sans
        "
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Modern Legal Case Management
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-white/80">
          A smart AI-powered platform for lawyers, assistants, and clients to
          manage cases, court schedules, communication, and legal workflows.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/signup/client"
            className="
              px-6 py-3 rounded-xl
              bg-brand-secondary
              text-darkbrand-base
              shadow-card
              hover:opacity-90
              transition
            "
          >
            Get Started
          </a>

          <a
            href="/login"
            className="
              px-6 py-3 rounded-xl
              border border-white
              text-white
              hover:bg-white hover:text-darkbrand-base
              transition
            "
          >
            Login
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section
        className="
          max-w-6xl mx-auto py-20 px-6
          grid md:grid-cols-3 gap-6
          font-sans
        "
      >
        {/* Feature 1 */}
        <div className="p-6 rounded-xl shadow-card bg-white dark:bg-darkbrand-surface">
          <h3 className="font-bold text-brand-primary">Case Tracking</h3>
          <p className="text-sm text-ui-muted mt-2">
            Monitor legal cases from filing to judgment in real time.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-xl shadow-card bg-white dark:bg-darkbrand-surface">
          <h3 className="font-bold text-brand-primary">Court Integration</h3>
          <p className="text-sm text-ui-muted mt-2">
            Join court sessions and manage hearings seamlessly.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-xl shadow-card bg-white dark:bg-darkbrand-surface">
          <h3 className="font-bold text-brand-primary">AI Legal Assistant</h3>
          <p className="text-sm text-ui-muted mt-2">
            Get intelligent reminders and case preparation suggestions.
          </p>
        </div>
      </section>
    </>
  );
}
