import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

import { ShieldCheck, Scale, Gavel, Users } from "lucide-react";

/* =========================
   ICON MAP
========================= */
const iconOptions = {
  ShieldCheck,
  Scale,
  Gavel,
  Users,
};

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,

  title: "About Our Legal Practice",
  subtitle:
    "We are a modern law firm dedicated to delivering trusted legal solutions with precision, confidentiality, and excellence.",

  items: [
    {
      id: 1,
      icon: "ShieldCheck",
      title: "Trusted Expertise",
      description:
        "Years of experience in handling complex legal matters across multiple jurisdictions.",
    },
    {
      id: 2,
      icon: "Scale",
      title: "Fair Justice",
      description:
        "We ensure every client receives fair representation and balanced legal counsel.",
    },
  ],

  missionTitle: "Our Mission",
  missionText:
    "We combine traditional legal excellence with modern technology to deliver faster, smarter, and more accessible legal services.",

  quote: "Justice should be accessible, transparent, and efficient.",
};

export default function AboutSectionEditorPage() {
  const [data, setData] = useState(initialData);

  /* =========================
     UPDATE HEADER
  ========================= */
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     UPDATE ITEM
  ========================= */
  const updateItem = (id, key, value) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));
  };

  /* =========================
     ADD ITEM
  ========================= */
  const addItem = () => {
    setData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: Date.now(),
          icon: "Scale",
          title: "",
          description: "",
        },
      ],
    }));
  };

  /* =========================
     DELETE ITEM
  ========================= */
  const deleteItem = (id) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  /* =========================
     MOVE
  ========================= */
  const moveItem = (index, direction) => {
    const list = [...data.items];

    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= list.length) return;

    [list[index], list[newIndex]] = [list[newIndex], list[index]];

    setData((prev) => ({
      ...prev,
      items: list,
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">About Section</h1>

        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg ${
            data.enabled ? "bg-green-100 text-green-700" : "bg-gray-200"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* ================= LEFT ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold">Section Content</h2>

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

          {/* ADD ITEM */}
          <button
            onClick={addItem}
            className="w-full bg-blue-900 text-white py-2 rounded-lg"
          >
            + Add Item
          </button>

          {/* ITEMS */}
          <div className="space-y-4">
            {data.items.map((item, index) => {
              const Icon = iconOptions[item.icon];

              return (
                <div key={item.id} className="border rounded-xl p-4 space-y-3">
                  {/* ICON SELECT */}
                  <select
                    value={item.icon}
                    onChange={(e) =>
                      updateItem(item.id, "icon", e.target.value)
                    }
                    className="w-full border rounded p-2"
                  >
                    {Object.keys(iconOptions).map((key) => (
                      <option key={key}>{key}</option>
                    ))}
                  </select>

                  {/* TITLE */}
                  <Input3D
                    label="Title"
                    value={item.title}
                    onChange={(val) => updateItem(item.id, "title", val)}
                  />

                  {/* DESC */}
                  <Textarea3D
                    label="Description"
                    value={item.description}
                    onChange={(val) => updateItem(item.id, "description", val)}
                  />

                  {/* ACTIONS */}
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-2">
                      <button onClick={() => moveItem(index, -1)}>↑</button>

                      <button onClick={() => moveItem(index, 1)}>↓</button>
                    </div>

                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold">Mission & Story</h2>

          <Input3D
            label="Mission Title"
            value={data.missionTitle}
            onChange={(val) => updateField("missionTitle", val)}
          />

          <Textarea3D
            label="Mission Text"
            value={data.missionText}
            onChange={(val) => updateField("missionText", val)}
          />

          <Textarea3D
            label="Quote"
            value={data.quote}
            onChange={(val) => updateField("quote", val)}
          />

          {/* PREVIEW */}
          <div className="border rounded-xl p-4 mt-4">
            <h3 className="font-bold text-lg mb-2">{data.missionTitle}</h3>

            <p className="text-sm text-gray-600 mb-3">{data.missionText}</p>

            <p className="text-xs italic text-gray-500">“{data.quote}”</p>
          </div>
        </div>
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save About Section
        </button>
      </div>
    </div>
  );
}
