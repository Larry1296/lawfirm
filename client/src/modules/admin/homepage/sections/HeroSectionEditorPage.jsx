import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   DUMMY HERO DATA (CMS STATE)
========================= */
const initialHero = {
  enabled: true,
  title: "Build Legal Structure",
  subtitle:
    "A structured, living legal system — cases, clients, and justice in motion.",
  primaryCta: "Start Free",
  secondaryCta: "Watch Demo",
  backgroundType: "gradient", // gradient | image | video
};

export default function HeroSectionEditorPage() {
  const [hero, setHero] = useState(initialHero);

  /* =========================
     UPDATE FIELD (CRUD CORE)
  ========================= */
  const updateField = (field, value) => {
    setHero((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Hero Section</h1>
          <p className="text-sm text-gray-500">
            Customize homepage hero content & layout
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !hero.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            hero.enabled
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {hero.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: FORM ================= */}
        <div className="space-y-4 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-2">Content Settings</h2>

          {/* TITLE */}
          <Input3D
            label="Hero Title"
            value={hero.title}
            onChange={(val) => updateField("title", val)}
            placeholder="Enter hero title"
          />

          {/* SUBTITLE */}
          <Textarea3D
            label="Hero Subtitle"
            value={hero.subtitle}
            onChange={(val) => updateField("subtitle", val)}
            placeholder="Enter hero subtitle"
          />

          {/* PRIMARY CTA */}
          <Input3D
            label="Primary Button Text"
            value={hero.primaryCta}
            onChange={(val) => updateField("primaryCta", val)}
          />

          {/* SECONDARY CTA */}
          <Input3D
            label="Secondary Button Text"
            value={hero.secondaryCta}
            onChange={(val) => updateField("secondaryCta", val)}
          />
        </div>

        {/* ================= RIGHT: SETTINGS ================= */}
        <div className="space-y-4 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-2">Layout & Appearance</h2>

          {/* BACKGROUND TYPE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Background Type</label>

            <select
              value={hero.backgroundType}
              onChange={(e) => updateField("backgroundType", e.target.value)}
              className="w-full border p-2 rounded-lg"
            >
              <option value="gradient">Gradient</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {/* LIVE PREVIEW CARD */}
          <div className="mt-6 p-4 rounded-xl border bg-gray-50">
            <p className="text-sm text-gray-500 mb-2">
              Live Preview (simplified)
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">{hero.title}</h3>

              <p className="text-sm text-gray-600">{hero.subtitle}</p>

              <div className="flex gap-2 mt-3">
                <button className="px-3 py-1 bg-blue-900 text-white rounded">
                  {hero.primaryCta}
                </button>

                <button className="px-3 py-1 border rounded">
                  {hero.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SAVE BUTTON ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl shadow hover:opacity-90">
          Save Hero Section
        </button>
      </div>
    </div>
  );
}
