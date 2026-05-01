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
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Services Section</h1>
          <p className="text-sm text-gray-500">
            Manage homepage services content
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
            className="w-full bg-blue-900 text-white py-2 rounded-lg"
          >
            + Add Service
          </button>

          {/* SERVICES LIST */}
          <div className="space-y-3">
            {data.services.map((service, index) => (
              <div key={service.id} className="border rounded-xl p-3 space-y-2">
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
                <div className="flex justify-between text-sm pt-2">
                  <div className="flex gap-2">
                    <button onClick={() => moveUp(index)}>↑</button>
                    <button onClick={() => moveDown(index)}>↓</button>
                  </div>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: CTA EDITOR ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">CTA Section</h2>

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
          <div className="mt-6 p-4 border rounded-xl">
            <h3 className="text-xl font-bold mb-2">{data.ctaTitle}</h3>

            <p className="text-sm text-gray-600 mb-4">{data.ctaDesc}</p>

            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg">
              {data.ctaButton}
            </button>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Services Section
        </button>
      </div>
    </div>
  );
}
