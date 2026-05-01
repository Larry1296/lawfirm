import { useState } from "react";

import SectionHeading from "../../../components/ui/SectionHeading";

import HeroSectionEditorPage from "./sections/HeroSectionEditorPage";
import FeaturesSectionEditor from "./sections/FeaturesSectionEditor";
import HowItWorksEditor from "./sections/HowItWorks";
import ServicesSection from "./sections/ServicesSectionEditorPage";
import TestimonialEditor from "./sections/TestimonialEditor";
import AdminContactPage from "./sections/AdminContactPage";
import AboutSectionEditor from "./sections/AboutSectionEditor";
import FooterEditor from "./sections/FooterEditor";

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

  const ActiveComponent = SECTIONS[activeSection].component;

  return (
    <div className="h-full p-6">
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
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <h2 className="font-semibold mb-3">Sections</h2>

          {Object.entries(SECTIONS).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                activeSection === key
                  ? "bg-blue-900 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* ================= CENTER: EDITOR ================= */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-4">
            Editing: {SECTIONS[activeSection].label}
          </h2>

          <ActiveComponent />
        </div>

        {/* ================= RIGHT: PREVIEW ================= */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-4"></h2>

          <p className="text-sm text-gray-500">(Full homepage preview here)</p>

          <div className="mt-4 p-4 border rounded-xl text-sm text-gray-600">
            Preview updates will appear here...
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Homepage
        </button>
      </div>
    </div>
  );
}
