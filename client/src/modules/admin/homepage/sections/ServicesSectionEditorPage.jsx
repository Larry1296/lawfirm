import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,
  title: "Our Legal Services",
  subtitle:
    "Comprehensive legal solutions tailored to individuals, businesses, and organizations.",

  services: [
    {
      id: 1,
      icon: "⚖️",
      title: "Civil Litigation",
      desc: "Representation in disputes involving contracts, property, and civil rights.",
    },
    {
      id: 2,
      icon: "🏢",
      title: "Corporate Law",
      desc: "Legal support for businesses including compliance, contracts, and governance.",
    },
  ],

  ctaTitle: "Need Legal Assistance?",
  ctaDesc: "Speak with our experts today and get professional legal guidance.",
  ctaButton: "Book Consultation",
};

export default function ServicesSectionEditorPage() {
  const [data, setData] = useState(initialData);

  /* =========================
     UPDATE TOP FIELDS
  ========================= */
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     UPDATE SERVICE ITEM
  ========================= */
  const updateService = (id, key, value) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.map((s) =>
        s.id === id ? { ...s, [key]: value } : s,
      ),
    }));
  };

  /* =========================
     ADD SERVICE
  ========================= */
  const addService = () => {
    const newService = {
      id: Date.now(),
      icon: "⭐",
      title: "",
      desc: "",
    };

    setData((prev) => ({
      ...prev,
      services: [...prev.services, newService],
    }));
  };

  /* =========================
     DELETE SERVICE
  ========================= */
  const deleteService = (id) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== id),
    }));
  };

  /* =========================
     MOVE UP
  ========================= */
  const moveUp = (index) => {
    if (index === 0) return;

    const services = [...data.services];

    [services[index - 1], services[index]] = [
      services[index],
      services[index - 1],
    ];

    setData((prev) => ({ ...prev, services }));
  };

  /* =========================
     MOVE DOWN
  ========================= */
  const moveDown = (index) => {
    if (index === data.services.length - 1) return;

    const services = [...data.services];

    [services[index + 1], services[index]] = [
      services[index],
      services[index + 1],
    ];

    setData((prev) => ({ ...prev, services }));
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Services Section
          </h1>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Manage homepage services content
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 shadow-soft ${
            data.enabled
              ? "bg-success/20 text-success border border-success/30"
              : "bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark border border-border-light dark:border-border-dark"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: EDITOR ================= */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 rounded-2xl shadow-soft space-y-4">
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Section Settings
          </h2>

          {/* TITLE */}
          <Input3D
            label="Section Title"
            value={data.title}
            onChange={(val) => updateField("title", val)}
          />

          {/* SUBTITLE */}
          <Textarea3D
            label="Subtitle"
            value={data.subtitle}
            onChange={(val) => updateField("subtitle", val)}
          />

          {/* ADD SERVICE */}
          <button
            onClick={addService}
            className="w-full bg-brand-primary hover:opacity-90 text-white py-3 rounded-xl transition-all duration-200 shadow-medium"
          >
            + Add Service
          </button>

          {/* SERVICES LIST */}
          <div className="space-y-4">
            {data.services.map((service, index) => (
              <div
                key={service.id}
                className="border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark rounded-2xl p-4 space-y-3 shadow-soft"
              >
                {/* ICON */}
                <Input3D
                  label="Icon (emoji or class)"
                  value={service.icon}
                  onChange={(val) => updateService(service.id, "icon", val)}
                />

                {/* TITLE */}
                <Input3D
                  label="Title"
                  value={service.title}
                  onChange={(val) => updateService(service.id, "title", val)}
                />

                {/* DESCRIPTION */}
                <Textarea3D
                  label="Description"
                  value={service.desc}
                  onChange={(val) => updateService(service.id, "desc", val)}
                />

                {/* ACTIONS */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => moveUp(index)}
                      className="px-3 py-1 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark hover:bg-brand-primary hover:text-white transition"
                    >
                      ↑
                    </button>

                    <button
                      onClick={() => moveDown(index)}
                      className="px-3 py-1 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark hover:bg-brand-primary hover:text-white transition"
                    >
                      ↓
                    </button>
                  </div>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="text-error hover:opacity-80 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: CTA EDITOR ================= */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 rounded-2xl shadow-soft space-y-4">
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            CTA Section
          </h2>

          <Input3D
            label="CTA Title"
            value={data.ctaTitle}
            onChange={(val) => updateField("ctaTitle", val)}
          />

          <Textarea3D
            label="CTA Description"
            value={data.ctaDesc}
            onChange={(val) => updateField("ctaDesc", val)}
          />

          <Input3D
            label="CTA Button Text"
            value={data.ctaButton}
            onChange={(val) => updateField("ctaButton", val)}
          />

          {/* ================= LIVE PREVIEW ================= */}
          <div className="mt-6 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-soft">
            <h3 className="text-xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
              {data.ctaTitle}
            </h3>

            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              {data.ctaDesc}
            </p>

            <button className="px-5 py-2.5 bg-brand-primary hover:opacity-90 text-white rounded-xl shadow-medium transition">
              {data.ctaButton}
            </button>
          </div>

          {/* ================= SERVICES PREVIEW ================= */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Services Preview
            </h3>

            <div className="grid gap-4">
              {data.services.map((service) => (
                <div
                  key={service.id}
                  className="p-4 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-soft flex gap-4"
                >
                  <div className="text-3xl">{service.icon}</div>

                  <div>
                    <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                      {service.title}
                    </h4>

                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-3 rounded-2xl bg-brand-primary hover:opacity-90 text-white font-semibold shadow-medium transition-all duration-200">
          Save Services Section
        </button>
      </div>
    </div>
  );
}
