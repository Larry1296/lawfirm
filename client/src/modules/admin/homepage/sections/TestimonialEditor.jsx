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
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Testimonials Section</h1>
          <p className="text-sm text-gray-500">
            Manage client feedback displayed on homepage
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            data.enabled
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: EDITOR ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Section Settings</h2>

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
            className="w-full bg-blue-900 text-white py-2 rounded-lg"
          >
            + Add Testimonial
          </button>

          {/* ================= TESTIMONIAL LIST ================= */}
          <div className="space-y-3">
            {data.testimonials.map((t, index) => (
              <div key={t.id} className="border rounded-xl p-3 space-y-2">
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
                <div className="flex justify-between text-sm pt-2">
                  <div className="flex gap-2">
                    <button onClick={() => moveUp(index)}>↑</button>
                    <button onClick={() => moveDown(index)}>↓</button>
                  </div>

                  <button
                    onClick={() => deleteTestimonial(t.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: TRUST SECTION ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Trust Section</h2>

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
          <div className="mt-6 p-4 border rounded-xl">
            <h3 className="text-xl font-bold mb-2">{data.trustTitle}</h3>

            <p className="text-sm text-gray-600">{data.trustText}</p>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Testimonials
        </button>
      </div>
    </div>
  );
}
