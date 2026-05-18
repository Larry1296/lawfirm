import { useState, useContext } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";
import ThemeContext from "../../../../core/store/ThemeContext";

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
  backgroundType: "gradient",
};

export default function HeroSectionEditorPage() {
  const [hero, setHero] = useState(initialHero);

  const { theme } = useContext(ThemeContext);

  /* =========================
     UPDATE FIELD
  ========================= */
  const updateField = (field, value) => {
    setHero((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     THEME CLASSES
  ========================= */
  const cardClasses =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-gray-900";

  const mutedText = theme === "dark" ? "text-gray-400" : "text-gray-500";

  const previewClasses =
    theme === "dark"
      ? "bg-black/20 border-[color:var(--border-dark)]"
      : "bg-gray-50 border-[color:var(--border-light)]";

  return (
    <div className="space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Hero Section</h1>

          <p className={`text-sm ${mutedText}`}>
            Customize homepage hero content & layout
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !hero.enabled)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
            hero.enabled
              ? "bg-success text-white"
              : theme === "dark"
                ? "bg-white/10 text-gray-300"
                : "bg-gray-200 text-gray-700"
          }`}
        >
          {hero.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: FORM ================= */}
        <div className={`${cardClasses} p-6 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold text-lg mb-5">Content Settings</h2>

          <div className="space-y-5">
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
        </div>

        {/* ================= RIGHT: SETTINGS ================= */}
        <div className={`${cardClasses} p-6 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold text-lg mb-5">Layout & Appearance</h2>

          {/* BACKGROUND TYPE */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Background Type</label>

            <select
              value={hero.backgroundType}
              onChange={(e) => updateField("backgroundType", e.target.value)}
              className={`
                w-full p-3 rounded-xl outline-none transition
                ${
                  theme === "dark"
                    ? "bg-black/20 border border-[color:var(--border-dark)] text-white"
                    : "bg-white border border-[color:var(--border-light)] text-gray-900"
                }
              `}
            >
              <option value="gradient">Gradient</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {/* LIVE PREVIEW CARD */}
          <div className={`mt-8 p-5 rounded-2xl border ${previewClasses}`}>
            <p className={`text-sm mb-3 ${mutedText}`}>
              Live Preview (simplified)
            </p>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">{hero.title}</h3>

              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {hero.subtitle}
              </p>

              <div className="flex gap-3 mt-4">
                <button
                  className="
                    px-4 py-2 rounded-xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    shadow-soft
                  "
                >
                  {hero.primaryCta}
                </button>

                <button
                  className={`
                    px-4 py-2 rounded-xl border transition
                    ${
                      theme === "dark"
                        ? "border-[color:var(--border-dark)] text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {hero.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SAVE BUTTON ================= */}
      <div className="flex justify-end">
        <button
          className="
            px-6 py-3 rounded-2xl
            bg-[color:var(--brand-primary)]
            text-white
            shadow-medium
            hover:opacity-90
            transition-all duration-200
          "
        >
          Save Hero Section
        </button>
      </div>
    </div>
  );
}
