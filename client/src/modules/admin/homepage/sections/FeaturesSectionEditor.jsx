import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   INITIAL DATA (CMS STATE)
========================= */
const initialFeatures = {
  enabled: true,
  title: "Why Choose Us",
  items: [
    {
      id: 1,
      title: "Expert Lawyers",
      description: "Highly experienced legal professionals",
      icon: "⚖️",
    },
    {
      id: 2,
      title: "Fast Case Handling",
      description: "Quick and efficient legal processes",
      icon: "⚡",
    },
  ],
};

export default function FeaturesSectionEditorPage() {
  const [features, setFeatures] = useState(initialFeatures);

  /* =========================
     UPDATE FIELD (TOP LEVEL)
  ========================= */
  const updateField = (field, value) => {
    setFeatures((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     UPDATE FEATURE ITEM
  ========================= */
  const updateItem = (id, key, value) => {
    setFeatures((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));
  };

  /* =========================
     ADD FEATURE
  ========================= */
  const addFeature = () => {
    const newItem = {
      id: Date.now(),
      title: "",
      description: "",
      icon: "⭐",
    };

    setFeatures((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  /* =========================
     DELETE FEATURE
  ========================= */
  const deleteFeature = (id) => {
    setFeatures((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  /* =========================
     MOVE UP
  ========================= */
  const moveUp = (index) => {
    if (index === 0) return;
    const items = [...features.items];
    [items[index - 1], items[index]] = [items[index], items[index - 1]];

    setFeatures((prev) => ({ ...prev, items }));
  };

  /* =========================
     MOVE DOWN
  ========================= */
  const moveDown = (index) => {
    if (index === features.items.length - 1) return;
    const items = [...features.items];
    [items[index + 1], items[index]] = [items[index], items[index + 1]];

    setFeatures((prev) => ({ ...prev, items }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Features Section</h1>
          <p className="text-sm text-gray-500">Manage homepage feature cards</p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !features.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            features.enabled
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {features.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: EDIT FORM ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Section Settings</h2>

          {/* SECTION TITLE */}
          <Input3D
            label="Section Title"
            value={features.title}
            onChange={(val) => updateField("title", val)}
          />

          {/* ADD BUTTON */}
          <button
            onClick={addFeature}
            className="w-full bg-blue-900 text-white py-2 rounded-lg"
          >
            + Add Feature
          </button>

          {/* FEATURE LIST */}
          <div className="space-y-3">
            {features.items.map((item, index) => (
              <div key={item.id} className="border rounded-xl p-3 space-y-2">
                {/* ICON */}
                <Input3D
                  label="Icon"
                  value={item.icon}
                  onChange={(val) => updateItem(item.id, "icon", val)}
                />

                {/* TITLE */}
                <Input3D
                  label="Title"
                  value={item.title}
                  onChange={(val) => updateItem(item.id, "title", val)}
                />

                {/* DESCRIPTION */}
                <Textarea3D
                  label="Description"
                  value={item.description}
                  onChange={(val) => updateItem(item.id, "description", val)}
                />

                {/* ACTIONS */}
                <div className="flex justify-between pt-2">
                  <div className="flex gap-2 text-sm">
                    <button onClick={() => moveUp(index)}>↑</button>
                    <button onClick={() => moveDown(index)}>↓</button>
                  </div>

                  <button
                    onClick={() => deleteFeature(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: LIVE PREVIEW ================= */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold text-lg mb-4">Live Preview</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">{features.title}</h3>

            <div className="grid gap-3">
              {features.items.map((item) => (
                <div key={item.id} className="p-4 border rounded-xl flex gap-3">
                  <div className="text-2xl">{item.icon}</div>

                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Features Section
        </button>
      </div>
    </div>
  );
}
