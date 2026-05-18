import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,

  title: "What Our Clients Say",
  subtitle:
    "Trusted by individuals and businesses for reliable, professional legal support.",

  testimonials: [
    {
      id: 1,
      name: "James Mwangi",
      text: "Exceptional legal service. The team handled my case with professionalism and clear communication throughout.",
    },
    {
      id: 2,
      name: "Amina Hassan",
      text: "Very responsive and knowledgeable lawyers. I always felt my case was in safe hands.",
    },
  ],

  trustTitle: "Trusted Legal Representation",
  trustText:
    "We have successfully represented hundreds of clients across civil, corporate, and criminal matters.",
};

export default function TestimonialsEditor() {
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
     UPDATE TESTIMONIAL
  ========================= */
  const updateTestimonial = (id, key, value) => {
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) =>
        t.id === id ? { ...t, [key]: value } : t,
      ),
    }));
  };

  /* =========================
     ADD TESTIMONIAL
  ========================= */
  const addTestimonial = () => {
    const newItem = {
      id: Date.now(),
      name: "",
      text: "",
    };

    setData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, newItem],
    }));
  };

  /* =========================
     DELETE TESTIMONIAL
  ========================= */
  const deleteTestimonial = (id) => {
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  /* =========================
     MOVE UP
  ========================= */
  const moveUp = (index) => {
    if (index === 0) return;

    const list = [...data.testimonials];

    [list[index - 1], list[index]] = [list[index], list[index - 1]];

    setData((prev) => ({
      ...prev,
      testimonials: list,
    }));
  };

  /* =========================
     MOVE DOWN
  ========================= */
  const moveDown = (index) => {
    if (index === data.testimonials.length - 1) return;

    const list = [...data.testimonials];

    [list[index + 1], list[index]] = [list[index], list[index + 1]];

    setData((prev) => ({
      ...prev,
      testimonials: list,
    }));
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Testimonials Section
          </h1>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Manage client feedback displayed on homepage
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

          <Input3D
            label="Title"
            value={data.title}
            onChange={(val) => updateField("title", val)}
          />

          <Textarea3D
            label="Subtitle"
            value={data.subtitle}
            onChange={(val) => updateField("subtitle", val)}
          />

          {/* ADD BUTTON */}
          <button
            onClick={addTestimonial}
            className="w-full bg-brand-primary hover:opacity-90 text-white py-3 rounded-xl transition-all duration-200 shadow-medium"
          >
            + Add Testimonial
          </button>

          {/* ================= TESTIMONIAL LIST ================= */}
          <div className="space-y-4">
            {data.testimonials.map((t, index) => (
              <div
                key={t.id}
                className="border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark rounded-2xl p-4 space-y-3 shadow-soft"
              >
                {/* NAME */}
                <Input3D
                  label="Client Name"
                  value={t.name}
                  onChange={(val) => updateTestimonial(t.id, "name", val)}
                />

                {/* TEXT */}
                <Textarea3D
                  label="Testimonial"
                  value={t.text}
                  onChange={(val) => updateTestimonial(t.id, "text", val)}
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
                    onClick={() => deleteTestimonial(t.id)}
                    className="text-error hover:opacity-80 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: TRUST SECTION ================= */}
        <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 rounded-2xl shadow-soft space-y-4">
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Trust Section
          </h2>

          <Input3D
            label="Trust Title"
            value={data.trustTitle}
            onChange={(val) => updateField("trustTitle", val)}
          />

          <Textarea3D
            label="Trust Text"
            value={data.trustText}
            onChange={(val) => updateField("trustText", val)}
          />

          {/* ================= LIVE PREVIEW ================= */}
          <div className="mt-6 p-6 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-soft">
            <h3 className="text-xl font-bold mb-2 text-text-primary-light dark:text-text-primary-dark">
              {data.trustTitle}
            </h3>

            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              {data.trustText}
            </p>
          </div>

          {/* ================= TESTIMONIAL PREVIEW ================= */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
              Testimonials Preview
            </h3>

            <div className="space-y-4">
              {data.testimonials.map((t) => (
                <div
                  key={t.id}
                  className="p-5 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark shadow-soft"
                >
                  <p className="text-sm italic text-text-muted-light dark:text-text-muted-dark mb-4">
                    "{t.text}"
                  </p>

                  <div className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                    — {t.name}
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
          Save Testimonials
        </button>
      </div>
    </div>
  );
}
