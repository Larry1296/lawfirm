import { useState, useContext } from "react";

import SectionHeading from "../../../components/ui/SectionHeading";

import HeroSectionEditorPage from "./sections/HeroSectionEditorPage";
import FeaturesSectionEditor from "./sections/FeaturesSectionEditor";
import HowItWorksEditor from "./sections/HowItWorks";
import ServicesSection from "./sections/ServicesSectionEditorPage";
import TestimonialEditor from "./sections/TestimonialEditor";
import AdminContactPage from "./sections/AdminContactPage";
import AboutSectionEditor from "./sections/AboutSectionEditor";
import FooterEditor from "./sections/FooterEditor";

import ThemeContext from "../../../core/store/ThemeContext";

/* =========================
   SECTION REGISTRY
========================= */
const SECTIONS = {
  hero: {
    label: "Hero Section",
    component: HeroSectionEditorPage,
  },
  features: {
    label: "Features Section",
    component: FeaturesSectionEditor,
  },
  howItWorks: {
    label: "How It Works",
    component: HowItWorksEditor,
  },
  services: {
    label: "Services Section",
    component: ServicesSection,
  },
  testimonials: {
    label: "Testimonials Section",
    component: TestimonialEditor,
  },
  contact: {
    label: "Contact Section",
    component: AdminContactPage,
  },
  about: {
    label: "About Section",
    component: AboutSectionEditor,
  },
  footer: {
    label: "Footer Section",
    component: FooterEditor,
  },
};

export default function AdminHomepageCustomization() {
  const [activeSection, setActiveSection] = useState("hero");

  const { theme } = useContext(ThemeContext);

  const ActiveComponent = SECTIONS[activeSection].component;

  const cardClasses =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-white border border-[color:var(--border-light)] text-[color:var(--text-primary)]";

  return (
    <div className="h-full p-4 sm:p-6">
      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <SectionHeading
          title="Homepage Builder"
          subtitle="Customize all homepage sections."
        />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* ================= LEFT: SECTION NAV ================= */}
        <div className={`${cardClasses} p-4 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold mb-4 text-lg">Sections</h2>

          <div className="space-y-2">
            {Object.entries(SECTIONS).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === key
                    ? "bg-[color:var(--brand-primary)] text-white shadow"
                    : theme === "dark"
                      ? "hover:bg-white/10 text-gray-200"
                      : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CENTER: EDITOR ================= */}
        <div
          className={`lg:col-span-2 ${cardClasses} p-6 rounded-2xl shadow-soft`}
        >
          <h2 className="font-semibold text-xl mb-6">
            Editing: {SECTIONS[activeSection].label}
          </h2>

          <ActiveComponent />
        </div>

        {/* ================= RIGHT: PREVIEW ================= */}
        <div className={`${cardClasses} p-6 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold text-xl mb-4">Live Preview</h2>

          <p
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Full homepage preview will appear here.
          </p>

          <div
            className={`mt-4 p-4 rounded-xl border text-sm ${
              theme === "dark"
                ? "border-[color:var(--border-dark)] bg-black/20 text-gray-300"
                : "border-gray-200 bg-gray-50 text-gray-600"
            }`}
          >
            Preview updates will appear here...
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end mt-6">
        <button
          className="
            px-6 py-3 rounded-xl font-medium
            bg-[color:var(--brand-primary)]
            hover:opacity-90
            text-white
            transition-all duration-200
            shadow-medium
          "
        >
          Save Homepage
        </button>
      </div>
    </div>
  );
}
